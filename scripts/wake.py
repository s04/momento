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
You get two exploration turns, one write turn, and possibly repair turns.
Only write and repair turns may edit files.
A write turn returns complete replacement files as fenced blocks:

```file:MEMORY.md
<the full new content of MEMORY.md>
```

One block per file. Every block replaces that file entirely.
You must include a changed MEMORY.md and may edit only MEMORY.md and site/**.
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
Do not output file blocks yet.
"""
    return [{"role": "system", "content": system}, {"role": "user", "content": user}]


def append_explore_two(messages: list[dict[str, str]], content: str) -> list[dict[str, str]]:
    next_messages = messages + [{"role": "assistant", "content": content}]
    next_messages.append(
        {
            "role": "user",
            "content": """Exploration turn 2 of 2:
Choose the smallest change that should land today.
Name the files you intend to rewrite and any risk you see.
Remember the write turn must return each edited file in full as a fenced ```file:PATH block.
Do not output file blocks yet.""",
        }
    )
    return next_messages


def append_write_turn(messages: list[dict[str, str]], content: str) -> list[dict[str, str]]:
    next_messages = messages + [{"role": "assistant", "content": content}]
    next_messages.append(
        {
            "role": "user",
            "content": """Write turn:
Return every file you are changing, in full, as fenced blocks like:

```file:site/index.html
<the complete new file content>
```

Rules:
1. One fenced block per file; the info string is `file:` plus the repo-relative path.
2. Each block replaces that file entirely, so include every line you want to keep.
3. You must include MEMORY.md with new content (append a short note about this wake).
4. Only MEMORY.md and paths under site/** are allowed. New site files are fine.
5. Text outside the fenced blocks is ignored, so a short plan around them is harmless.
6. The runner writes your files, runs ./check.sh, and lands the change if checks pass.""",
        }
    )
    return next_messages


def append_repair_turn(messages: list[dict[str, str]], content: str, outcome: dict[str, Any]) -> list[dict[str, str]]:
    detail = outcome.get("applyMessage") or outcome.get("check", {}).get("outputExcerpt") or ""
    next_messages = messages + [{"role": "assistant", "content": content}]
    next_messages.append(
        {
            "role": "user",
            "content": f"""Repair turn:
The runner rejected that write: {outcome.get("reason", "unknown reason")}
{excerpt(detail, 2000)}

Try again. Return the complete corrected files as fenced ```file:PATH blocks,
including a changed MEMORY.md. Same rules as the write turn.""",
        }
    )
    return next_messages


def fixture_valid_response() -> dict[str, Any]:
    memory = REPO_ROOT / "MEMORY.md"
    memory_new = memory.read_text(encoding="utf-8") + (
        "\n## Local Fixture Tick\n- This line was produced by a local fixture run outside the public repo.\n"
    )
    site = REPO_ROOT / "site" / "index.html"
    site_new = site.read_text(encoding="utf-8").replace("This page has just begun.", "This page can change.")
    content = f"```file:MEMORY.md\n{memory_new}```\n\n```file:site/index.html\n{site_new}```\n"
    return {
        "ok": True,
        "status": "fixture",
        "body": {
            "id": "fixture-valid",
            "model": "fixture-valid",
            "choices": [{"message": {"content": content}}],
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
    repair_attempts: int,
) -> tuple[list[dict[str, str]], list[dict[str, Any]], dict[str, Any] | None]:
    messages = build_explore_one_messages(precheck, data_root)
    responses: list[dict[str, Any]] = []

    first = call_openrouter(messages, model, retries)
    first["turn"] = "explore_1"
    responses.append(first)
    if not first.get("ok"):
        return messages, responses, None

    messages = append_explore_two(messages, response_content(first))
    second = call_openrouter(messages, model, retries)
    second["turn"] = "explore_2"
    responses.append(second)
    if not second.get("ok"):
        return messages, responses, None

    messages = append_write_turn(messages, response_content(second))
    outcome: dict[str, Any] | None = None
    for round_index in range(repair_attempts + 1):
        write = call_openrouter(messages, model, retries)
        write["turn"] = "write" if round_index == 0 else f"repair_{round_index}"
        responses.append(write)
        if not write.get("ok"):
            break
        outcome = judge(response_content(write))
        if outcome["state"] == "landed" or round_index == repair_attempts:
            break
        messages = append_repair_turn(messages, response_content(write), outcome)
    return messages, responses, outcome


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


FILE_BLOCK_RE = re.compile(r"```file:\s*(?P<path>\S+)[ \t]*\n(?P<content>.*?)\n?```", re.DOTALL)


def extract_files(content: str) -> tuple[dict[str, str] | None, str]:
    files: dict[str, str] = {}
    for match in FILE_BLOCK_RE.finditer(content):
        body = match.group("content")
        if not body.endswith("\n"):
            body += "\n"
        files[match.group("path")] = body
    if not files:
        return None, "response contained no fenced file: blocks"
    return files, "parsed"


def validate_files(files: dict[str, str]) -> tuple[bool, str]:
    for path in files:
        if path.startswith("/") or ".." in Path(path).parts:
            return False, f"file block used an absolute or parent-relative path {path}"
        if path in ALLOWED_EXACT or path.startswith(ALLOWED_PREFIXES):
            continue
        return False, f"file block touched non-landing path {path}"
    memory = files.get("MEMORY.md")
    if memory is None:
        return False, "response did not include a MEMORY.md block"
    current = (REPO_ROOT / "MEMORY.md").read_text(encoding="utf-8") if (REPO_ROOT / "MEMORY.md").exists() else ""
    if memory == current:
        return False, "MEMORY.md block was identical to the current file"
    return True, "files accepted"


def compute_patch(files: dict[str, str]) -> str:
    chunks: list[str] = []
    for path in sorted(files):
        full = REPO_ROOT / path
        old = full.read_text(encoding="utf-8").splitlines(keepends=True) if full.exists() else []
        new = files[path].splitlines(keepends=True)
        chunks.append("".join(difflib.unified_diff(old, new, fromfile=f"a/{path}", tofile=f"b/{path}")))
    return "".join(chunks)


def judge(content: str) -> dict[str, Any]:
    outcome: dict[str, Any] = {
        "state": "unparseable",
        "reason": "",
        "paths": [],
        "patch": None,
        "applyMessage": "",
        "check": {"status": "not_run", "exitCode": None, "outputExcerpt": ""},
    }
    files, reason = extract_files(content)
    outcome["reason"] = reason
    if files is None:
        return outcome
    outcome["paths"] = sorted(files)
    valid, reason = validate_files(files)
    if not valid:
        outcome.update(state="held", reason=reason)
        return outcome
    outcome["patch"] = compute_patch(files)
    originals = {
        path: (REPO_ROOT / path).read_text(encoding="utf-8") if (REPO_ROOT / path).exists() else None
        for path in files
    }
    for path, body in files.items():
        write_text(REPO_ROOT / path, body)
    check_result = run_checks()
    outcome["check"] = check_result
    if check_result["status"] == "accepted":
        outcome.update(state="landed", reason="files landed and checks accepted them")
    else:
        for path, original in originals.items():
            if original is None:
                (REPO_ROOT / path).unlink(missing_ok=True)
            else:
                write_text(REPO_ROOT / path, original)
        outcome.update(state="held", reason="files applied but checks did not accept them")
    return outcome


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
    parser.add_argument("--repair-attempts", type=int, default=int(os.getenv("MOMENTO_REPAIR_ATTEMPTS", "1")))
    parser.add_argument("--data-root", default=os.getenv("MOMENTO_DATA_ROOT", str(REPO_ROOT / "data")))
    args = parser.parse_args()

    moment = utc_now()
    tick_id = moment.strftime("%Y-%m-%d-%H%M%SZ")
    data_root = Path(args.data_root)
    precheck = run_checks()
    messages: list[dict[str, str]]
    responses: list[dict[str, Any]]
    outcome: dict[str, Any] | None
    if args.mode == "fixture-valid":
        messages = build_explore_one_messages(precheck, data_root)
        responses = [fixture_valid_response()]
        outcome = judge(response_content(responses[-1]))
    elif args.mode == "fixture-invalid":
        messages = build_explore_one_messages(precheck, data_root)
        responses = [fixture_invalid_response()]
        outcome = judge(response_content(responses[-1]))
    else:
        messages, responses, outcome = run_live_turns(
            precheck, data_root, args.model, args.api_retries, args.repair_attempts
        )

    response = responses[-1] if responses else {"ok": False, "status": "no_response"}
    content = response_content(response)
    if outcome is None:
        outcome = {
            "state": "unparseable",
            "reason": "no usable model response",
            "paths": [],
            "patch": None,
            "applyMessage": "",
            "check": {"status": "not_run", "exitCode": None, "outputExcerpt": ""},
        }
    state = outcome["state"]
    reason = outcome["reason"]
    paths = outcome["paths"]
    patch = outcome["patch"]
    apply_message = outcome["applyMessage"]
    check_result = outcome["check"]

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
