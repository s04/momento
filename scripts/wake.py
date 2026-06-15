#!/usr/bin/env python3
"""Wake Momento once and let the repository decide what lands."""

from __future__ import annotations

import argparse
import csv
import difflib
import hashlib
import json
import os
import re
import subprocess
import sys
from datetime import datetime, timezone
from pathlib import Path
from typing import Any
from urllib.error import HTTPError, URLError
from urllib.request import Request, urlopen


REPO_ROOT = Path(__file__).resolve().parents[1]
OPENROUTER_URL = "https://openrouter.ai/api/v1/chat/completions"
DEFAULT_MODEL = "openrouter/free"
DEFAULT_SYSTEM_PROMPT = """You are Momento.

You run unattended inside GitHub Actions.
You get three turns: explore, explore, write.
Only the write turn may edit files.
The write turn must return exactly one fenced diff block containing a unified diff.
The diff must update MEMORY.md and may edit only MEMORY.md and site/**.
Do not include prose outside the write turn's diff block.
Aim at something useful, legal, non-harmful, and small enough to land today.
"""
SKIP_DIRS = {".git", "__pycache__", ".pytest_cache", "_site", "node_modules"}
TEXT_SUFFIXES = {
    ".css",
    ".html",
    ".js",
    ".json",
    ".md",
    ".py",
    ".sh",
    ".txt",
    ".yml",
    ".yaml",
}
ALLOWED_EXACT = {"MEMORY.md"}
ALLOWED_PREFIXES = ("site/",)
CSV_FIELDS = [
    "runAt",
    "date",
    "tickId",
    "state",
    "mode",
    "model",
    "routedModel",
    "promptTokens",
    "completionTokens",
    "totalTokens",
    "cost",
    "changedPaths",
    "checkStatus",
    "checkExit",
    "reason",
]


def utc_now() -> datetime:
    return datetime.now(timezone.utc).replace(microsecond=0)


def iso_z(moment: datetime) -> str:
    return moment.isoformat().replace("+00:00", "Z")


def run(
    args: list[str],
    *,
    input_text: str | None = None,
    timeout: int = 120,
) -> subprocess.CompletedProcess[str]:
    return subprocess.run(
        args,
        cwd=REPO_ROOT,
        input=input_text,
        text=True,
        capture_output=True,
        timeout=timeout,
        check=False,
    )


def excerpt(text: str, limit: int = 12000) -> str:
    if len(text) <= limit:
        return text
    return text[:limit] + "\n... truncated ...\n"


def write_text(path: Path, content: str) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_text(content, encoding="utf-8")


def write_json(path: Path, value: Any) -> None:
    write_text(path, json.dumps(value, indent=2, sort_keys=True) + "\n")


def stable_hash(value: Any) -> str:
    data = json.dumps(value, sort_keys=True).encode("utf-8")
    return hashlib.sha256(data).hexdigest()


def git_log() -> str:
    result = run(["git", "log", "--oneline", "-8"])
    if result.returncode != 0:
        return "No git history yet."
    return result.stdout.strip() or "No git history yet."


def git_status() -> str:
    result = run(["git", "status", "--short"])
    if result.returncode != 0:
        return "git status unavailable."
    return result.stdout.strip() or "Working tree clean."


def repo_files() -> list[Path]:
    files: list[Path] = []
    for path in sorted(REPO_ROOT.rglob("*")):
        rel = path.relative_to(REPO_ROOT)
        if any(part in SKIP_DIRS for part in rel.parts):
            continue
        if path.is_file():
            files.append(rel)
    return files


def file_tree(files: list[Path]) -> str:
    visible = [str(path) for path in files]
    limit = 500
    if len(visible) <= limit:
        return "\n".join(visible)
    shown = visible[:limit]
    shown.append(f"... truncated {len(visible) - limit} more paths ...")
    return "\n".join(shown)


def should_include(path: Path) -> bool:
    if path.name in {".DS_Store"}:
        return False
    if path.suffix and path.suffix not in TEXT_SUFFIXES:
        return False
    return True


def selected_contents(files: list[Path]) -> str:
    priority = [
        Path("SOUL.md"),
        Path("MEMORY.md"),
        Path("README.md"),
        Path("check.sh"),
        Path("site/index.html"),
        Path("site/styles.css"),
    ]
    ordered = priority + [path for path in files if path not in priority]
    seen: set[Path] = set()
    chunks: list[str] = []
    budget = 45000
    used = 0
    for rel in ordered:
        if rel in seen or rel not in files or not should_include(rel):
            continue
        seen.add(rel)
        full = REPO_ROOT / rel
        try:
            content = full.read_text(encoding="utf-8")
        except UnicodeDecodeError:
            continue
        chunk = f"\n--- {rel} ---\n{content}"
        if used + len(chunk) > budget:
            continue
        chunks.append(chunk)
        used += len(chunk)
    return "\n".join(chunks)


def latest_runlog(data_root: Path) -> str:
    chunks: list[str] = []
    summary_path = data_root / "gold" / "summary.json"
    if summary_path.exists():
        chunks.append(f"--- {display_path(summary_path)} ---\n{excerpt(summary_path.read_text(encoding='utf-8'), 8000)}")

    result_files = sorted((data_root / "silver" / "ticks").glob("*/*/*/*/result.json"))
    if result_files:
        latest_result = result_files[-1]
        chunks.append(f"--- {display_path(latest_result)} ---\n{excerpt(latest_result.read_text(encoding='utf-8'), 8000)}")

    if not chunks:
        return "No previous runlog yet."
    return "\n\n".join(chunks)


def run_checks() -> dict[str, Any]:
    check = REPO_ROOT / "check.sh"
    if not check.exists():
        return {"status": "missing", "exitCode": None, "outputExcerpt": "No check.sh present."}
    result = run(["bash", "check.sh"], timeout=180)
    output = excerpt(result.stdout + result.stderr)
    return {
        "status": "accepted" if result.returncode == 0 else "not_accepted",
        "exitCode": result.returncode,
        "outputExcerpt": output,
    }


def build_context(precheck: dict[str, Any], data_root: Path) -> str:
    files = repo_files()
    return f"""You are waking now.

This is an unattended GitHub Actions tick.
You cannot ask questions.
You cannot rely on chat history.
You have two exploration turns and one write turn.

Current UTC time: {iso_z(utc_now())}

Git status:
{git_status()}

Recent git history:
{git_log()}

Repository files:
{file_tree(files)}

Current check output:
status: {precheck.get("status")}
exit: {precheck.get("exitCode")}
{precheck.get("outputExcerpt", "")}

Previous runlog:
{latest_runlog(data_root)}

Selected file contents:
{selected_contents(files)}
"""


def build_explore_one_messages(precheck: dict[str, Any], data_root: Path) -> list[dict[str, str]]:
    system = os.getenv("MOMENTO_SYSTEM_PROMPT", DEFAULT_SYSTEM_PROMPT)
    user = f"""{build_context(precheck, data_root)}

Exploration turn 1 of 2:
Read the tree, memory, site, checks, and previous runlog.
Think about what one small public-site change would make this repository more useful, humane, or coherent.
Do not output a diff yet.
"""
    return [{"role": "system", "content": system}, {"role": "user", "content": user}]


def append_explore_two(messages: list[dict[str, str]], content: str) -> list[dict[str, str]]:
    next_messages = messages + [{"role": "assistant", "content": content}]
    next_messages.append(
        {
            "role": "user",
            "content": """Exploration turn 2 of 2:
Choose the smallest change that should land today.
Account for the output parser: the final turn must be exactly one fenced diff block.
Name the files you intend to edit and any risk you see.
Do not output a diff yet.""",
        }
    )
    return next_messages


def append_write_turn(messages: list[dict[str, str]], content: str) -> list[dict[str, str]]:
    next_messages = messages + [{"role": "assistant", "content": content}]
    next_messages.append(
        {
            "role": "user",
            "content": """Write turn:
Return exactly one fenced ```diff code block and nothing else.

Return exactly one fenced diff block with one unified diff.
The diff must update MEMORY.md.
The diff may edit only MEMORY.md and files under site/**.
Do not include prose before or after the fenced block.
Do not use JSON.

Parser details:
1. The runner requires the whole response to match one fenced diff block.
2. It extracts the unified diff and normalizes the final newline.
3. It rejects paths outside MEMORY.md and site/**.
4. It runs git apply --check, applies the patch, then runs ./check.sh.
5. If any step is not accepted, the tick is logged but the site change is not landed.""",
        }
    )
    return next_messages


def fixture_valid_response() -> dict[str, Any]:
    memory = REPO_ROOT / "MEMORY.md"
    memory_old = memory.read_text(encoding="utf-8").splitlines(keepends=True)
    memory_new = memory_old + [
        "\n",
        "## Local Fixture Tick\n",
        "- This line was produced by a local fixture run outside the public repo.\n",
    ]
    site = REPO_ROOT / "site" / "index.html"
    site_old = site.read_text(encoding="utf-8").splitlines(keepends=True)
    site_new = [line.replace("This page has just begun.", "This page can change.") for line in site_old]
    patch = "".join(difflib.unified_diff(memory_old, memory_new, fromfile="a/MEMORY.md", tofile="b/MEMORY.md"))
    patch += "".join(difflib.unified_diff(site_old, site_new, fromfile="a/site/index.html", tofile="b/site/index.html"))
    return {
        "ok": True,
        "status": "fixture",
        "body": {
            "id": "fixture-valid",
            "model": "fixture-valid",
            "choices": [{"message": {"content": f"```diff\n{patch}```"}}],
            "usage": {"prompt_tokens": 0, "completion_tokens": 0, "total_tokens": 0, "cost": 0},
        },
    }


def fixture_invalid_response() -> dict[str, Any]:
    return {
        "ok": True,
        "status": "fixture",
        "body": {
            "id": "fixture-invalid",
            "model": "fixture-invalid",
            "choices": [{"message": {"content": "I should probably make a plan first."}}],
            "usage": {"prompt_tokens": 0, "completion_tokens": 0, "total_tokens": 0, "cost": 0},
        },
    }


def call_openrouter(messages: list[dict[str, str]], model: str, retries: int) -> dict[str, Any]:
    api_key = os.getenv("OPENROUTER_API_KEY", "")
    if not api_key:
        return {"ok": False, "status": "missing_key", "error": "OPENROUTER_API_KEY is not set"}
    payload = {
        "max_tokens": 12000,
        "messages": messages,
        "model": model,
        "temperature": 0.4,
    }
    headers = {
        "Authorization": f"Bearer {api_key}",
        "Content-Type": "application/json",
        "HTTP-Referer": os.getenv("OPENROUTER_REFERER", "https://github.com/s04/momento"),
        "X-OpenRouter-Title": os.getenv("OPENROUTER_TITLE", "Momento"),
    }
    body = json.dumps(payload).encode("utf-8")
    last_error: dict[str, Any] = {"ok": False, "status": "not_attempted"}
    for attempt in range(1, retries + 1):
        request = Request(OPENROUTER_URL, data=body, headers=headers, method="POST")
        try:
            with urlopen(request, timeout=120) as response:
                return {
                    "ok": True,
                    "status": response.status,
                    "body": json.loads(response.read().decode("utf-8")),
                    "attempt": attempt,
                }
        except HTTPError as error:
            last_error = {
                "ok": False,
                "status": error.code,
                "error": excerpt(error.read().decode("utf-8", errors="replace"), 4000),
                "attempt": attempt,
            }
        except URLError as error:
            last_error = {"ok": False, "status": "url_error", "error": str(error), "attempt": attempt}
    return last_error


def response_content(response: dict[str, Any]) -> str:
    if not response.get("ok"):
        return ""
    body = response.get("body", {})
    choices = body.get("choices") or []
    if not choices:
        return ""
    return choices[0].get("message", {}).get("content", "") or ""


def run_live_turns(
    precheck: dict[str, Any],
    data_root: Path,
    model: str,
    retries: int,
) -> tuple[list[dict[str, str]], list[dict[str, Any]]]:
    messages = build_explore_one_messages(precheck, data_root)
    responses: list[dict[str, Any]] = []

    first = call_openrouter(messages, model, retries)
    first["turn"] = "explore_1"
    responses.append(first)
    if not first.get("ok"):
        return messages, responses

    messages = append_explore_two(messages, response_content(first))
    second = call_openrouter(messages, model, retries)
    second["turn"] = "explore_2"
    responses.append(second)
    if not second.get("ok"):
        return messages, responses

    messages = append_write_turn(messages, response_content(second))
    third = call_openrouter(messages, model, retries)
    third["turn"] = "write"
    responses.append(third)
    return messages, responses


def response_body(response: dict[str, Any]) -> dict[str, Any]:
    body = response.get("body", {})
    return body if isinstance(body, dict) else {}


def aggregate_usage(responses: list[dict[str, Any]]) -> dict[str, Any]:
    totals = {"prompt_tokens": 0, "completion_tokens": 0, "total_tokens": 0, "cost": 0}
    seen = False
    for response in responses:
        usage = response_body(response).get("usage", {})
        if not isinstance(usage, dict):
            continue
        for key in list(totals):
            value = usage.get(key)
            if isinstance(value, (int, float)):
                totals[key] += value
                seen = True
    return totals if seen else {}


def routed_models(responses: list[dict[str, Any]]) -> str:
    models: list[str] = []
    for response in responses:
        model = response_body(response).get("model")
        if model:
            models.append(str(model))
    return " | ".join(models)


def extract_diff(content: str) -> tuple[str | None, str]:
    match = re.fullmatch(r"\s*```(?:diff|patch)\s*\n(?P<patch>.*?)\n```\s*", content, re.DOTALL)
    if not match:
        return None, "response was not exactly one fenced diff block"
    patch = match.group("patch")
    if not re.search(r"^(diff --git|--- )", patch, re.MULTILINE):
        return None, "fenced block did not look like a unified diff"
    if not patch.endswith("\n"):
        patch += "\n"
    return patch, "parsed"


def clean_diff_path(raw: str) -> str | None:
    path = raw.strip().split("\t", 1)[0].strip()
    if path == "/dev/null":
        return None
    if path.startswith("a/") or path.startswith("b/"):
        path = path[2:]
    if path.startswith("/") or ".." in Path(path).parts:
        return "__invalid__"
    return path


def changed_paths(patch: str) -> set[str]:
    paths: set[str] = set()
    for line in patch.splitlines():
        if line.startswith("diff --git "):
            parts = line.split()
            for raw in parts[2:4]:
                clean = clean_diff_path(raw)
                if clean:
                    paths.add(clean)
        elif line.startswith("--- ") or line.startswith("+++ "):
            clean = clean_diff_path(line[4:])
            if clean:
                paths.add(clean)
    return paths


def validate_paths(paths: set[str]) -> tuple[bool, str]:
    if not paths:
        return False, "diff changed no recognizable paths"
    if "MEMORY.md" not in paths:
        return False, "diff did not update MEMORY.md"
    for path in paths:
        if path == "__invalid__":
            return False, "diff used an absolute or parent-relative path"
        if path in ALLOWED_EXACT or path.startswith(ALLOWED_PREFIXES):
            continue
        return False, f"diff touched non-landing path {path}"
    return True, "paths accepted"


def git_apply_check(patch: str) -> tuple[bool, str]:
    result = run(["git", "apply", "--check", "--whitespace=nowarn", "-"], input_text=patch)
    if result.returncode == 0:
        return True, "git apply accepted patch"
    return False, excerpt(result.stdout + result.stderr)


def git_apply(patch: str) -> tuple[bool, str]:
    result = run(["git", "apply", "--whitespace=nowarn", "-"], input_text=patch)
    if result.returncode == 0:
        return True, "patch applied"
    return False, excerpt(result.stdout + result.stderr)


def git_reverse(patch: str) -> str:
    result = run(["git", "apply", "-R", "--whitespace=nowarn", "-"], input_text=patch)
    return excerpt(result.stdout + result.stderr)


def data_paths(data_root: Path, moment: datetime) -> dict[str, Path]:
    stamp = moment.strftime("%H%M%SZ")
    dated = Path(moment.strftime("%Y/%m/%d")) / stamp
    return {
        "bronze": data_root / "bronze" / "ticks" / dated,
        "silver": data_root / "silver" / "ticks" / dated,
        "gold": data_root / "gold",
    }


def display_path(path: Path) -> str:
    try:
        return str(path.relative_to(REPO_ROOT))
    except ValueError:
        return str(path)


def update_gold(gold_dir: Path, row: dict[str, Any]) -> None:
    gold_dir.mkdir(parents=True, exist_ok=True)
    csv_path = gold_dir / "ticks.csv"
    rows: list[dict[str, str]] = []
    if csv_path.exists():
        with csv_path.open("r", encoding="utf-8", newline="") as handle:
            rows = list(csv.DictReader(handle))
    rows.append({field: str(row.get(field, "")) for field in CSV_FIELDS})
    with csv_path.open("w", encoding="utf-8", newline="") as handle:
        writer = csv.DictWriter(handle, fieldnames=CSV_FIELDS)
        writer.writeheader()
        writer.writerows(rows)
    counts: dict[str, int] = {}
    for item in rows:
        counts[item["state"]] = counts.get(item["state"], 0) + 1
    summary = {
        "schemaVersion": 1,
        "generatedAt": row["runAt"],
        "tickCount": len(rows),
        "states": counts,
        "latest": rows[-1] if rows else None,
        "recentTicks": rows[-50:],
    }
    write_json(gold_dir / "summary.json", summary)


def write_tick(
    *,
    data_root: Path,
    moment: datetime,
    messages: list[dict[str, str]],
    response: dict[str, Any],
    content: str,
    patch: str | None,
    result: dict[str, Any],
    row: dict[str, Any],
) -> None:
    paths = data_paths(data_root, moment)
    prompt_md = "\n\n".join(f"## {message['role']}\n\n{message['content']}" for message in messages)
    write_text(paths["bronze"] / "prompt.md", prompt_md)
    write_text(paths["bronze"] / "response.md", content or "")
    write_json(paths["bronze"] / "response.json", response)
    if patch is not None:
        write_text(paths["silver"] / "patch.diff", patch)
    write_json(paths["silver"] / "result.json", result)
    update_gold(paths["gold"], row)


def usage_value(usage: dict[str, Any], *names: str) -> Any:
    for name in names:
        if name in usage:
            return usage[name]
    return ""


def main() -> int:
    parser = argparse.ArgumentParser(description="Wake Momento once.")
    parser.add_argument("--mode", default=os.getenv("MOMENTO_MODE", "live"))
    parser.add_argument("--model", default=os.getenv("MOMENTO_MODEL", DEFAULT_MODEL))
    parser.add_argument("--api-retries", type=int, default=int(os.getenv("MOMENTO_API_RETRIES", "2")))
    parser.add_argument("--data-root", default=os.getenv("MOMENTO_DATA_ROOT", str(REPO_ROOT / "data")))
    args = parser.parse_args()

    moment = utc_now()
    tick_id = moment.strftime("%Y-%m-%d-%H%M%SZ")
    data_root = Path(args.data_root)
    precheck = run_checks()
    messages: list[dict[str, str]]
    responses: list[dict[str, Any]]
    if args.mode == "fixture-valid":
        messages = build_explore_one_messages(precheck, data_root)
        responses = [fixture_valid_response()]
    elif args.mode == "fixture-invalid":
        messages = build_explore_one_messages(precheck, data_root)
        responses = [fixture_invalid_response()]
    else:
        messages, responses = run_live_turns(precheck, data_root, args.model, args.api_retries)

    response = responses[-1] if responses else {"ok": False, "status": "no_response"}
    content = response_content(response)
    patch, parse_reason = extract_diff(content)
    paths: set[str] = set()
    state = "unparseable"
    reason = parse_reason
    apply_message = ""
    check_result: dict[str, Any] = {"status": "not_run", "exitCode": None, "outputExcerpt": ""}

    if patch is not None:
        paths = changed_paths(patch)
        valid_paths, reason = validate_paths(paths)
        if valid_paths:
            accepted, apply_message = git_apply_check(patch)
            if accepted:
                applied, apply_message = git_apply(patch)
                if applied:
                    check_result = run_checks()
                    if check_result["status"] == "accepted":
                        state = "landed"
                        reason = "patch applied and checks accepted it"
                    else:
                        state = "held"
                        reason = "patch applied but checks did not accept it"
                        reverse_output = git_reverse(patch)
                        check_result["reverseOutputExcerpt"] = reverse_output
                else:
                    state = "held"
                    reason = "git apply did not accept patch"
            else:
                state = "held"
                reason = "git apply --check did not accept patch"

    usage = aggregate_usage(responses)
    routed_model = routed_models(responses)
    row = {
        "runAt": iso_z(moment),
        "date": moment.strftime("%Y-%m-%d"),
        "tickId": tick_id,
        "state": state,
        "mode": args.mode,
        "model": args.model,
        "routedModel": routed_model,
        "promptTokens": usage_value(usage, "prompt_tokens", "promptTokens"),
        "completionTokens": usage_value(usage, "completion_tokens", "completionTokens"),
        "totalTokens": usage_value(usage, "total_tokens", "totalTokens"),
        "cost": usage_value(usage, "cost", "total_cost"),
        "changedPaths": " ".join(sorted(paths)),
        "checkStatus": check_result.get("status", "not_run"),
        "checkExit": check_result.get("exitCode"),
        "reason": reason,
    }
    result = {
        "tickId": tick_id,
        "state": state,
        "reason": reason,
        "mode": args.mode,
        "model": args.model,
        "routedModel": routed_model,
        "responseOk": response.get("ok", False),
        "responseStatus": response.get("status"),
        "promptHash": stable_hash(messages)[:12],
        "changedPaths": sorted(paths),
        "applyMessage": apply_message,
        "precheck": precheck,
        "check": check_result,
        "turns": [
            {
                "turn": response.get("turn", "fixture"),
                "ok": response.get("ok", False),
                "status": response.get("status"),
                "routedModel": response_body(response).get("model", ""),
                "usage": response_body(response).get("usage", {}),
                "contentExcerpt": excerpt(response_content(response), 4000),
            }
            for response in responses
        ],
        "goldRow": row,
    }
    write_tick(
        data_root=data_root,
        moment=moment,
        messages=messages,
        response={"ok": response.get("ok", False), "status": response.get("status"), "turns": responses},
        content=content,
        patch=patch,
        result=result,
        row=row,
    )
    print(json.dumps({"tickId": tick_id, "state": state, "reason": reason}, sort_keys=True))
    return 0


if __name__ == "__main__":
    sys.exit(main())
