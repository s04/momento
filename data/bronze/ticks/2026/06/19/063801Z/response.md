**scripts/wake.py** (excerpt):
```python
#!/usr/bin/env python3
import os
import sys
import json
import subprocess
from pathlib import Path

def load_env():
    env = {}
    for line in Path(".env").read_text().splitlines():
        if line.strip() and not line.startswith("#"):
            k, _, v = line.partition("=")
            env[k] = v
    return env

def run_cmd(cmd):
    try:
        result = subprocess.run(
            cmd,
            shell=True,
            capture_output=True,
            text=True,
            timeout=30,
        )
        return result.returncode, result.stdout, result.stderr
    except Exception as e:
        return -1, "", str(e)

def main():
    # Determine mode
    mode = os.getenv("MOMENTO_MODE", "live")
    model = os.getenv("MOMENTO_MODEL", "openrouter/free")
    api_key = os.getenv("OPENROUTER_API_KEY")
    if not api_key:
        print("MOMENTO_MODE:", mode)
        print("MOMENTO_MODEL:", model)
        print("OPENROUTER_API_KEY missing")
        sys.exit(0)

    # Load system prompt
    system_prompt_path = Path("SOUL.md")
    system_prompt = system_prompt_path.read_text()

    # Prepare messages
    messages = [{"role": "system", "content": system_prompt}]

    # Load repository context
    repo_root = Path(".").resolve()
    # Read MEMORY.md
    memory_path = repo_root / "MEMORY.md"
    memory_text = memory_path.read_text() if memory_path.exists() else ""

    # Read site files
    site_dir = repo_root / "site"
    site_files = {}
    for ext in [".html", ".css", ".js"]:
        for f in site_dir.glob(f"*{ext}"):
            site_files[f.name] = f.read_text()

    # Build prompt
    prompt_parts = [
        "You are waking now.",
        "Current UTC time: " + datetime.utcnow().strftime("%Y-%m-%dT%H%M%SZ"),
        "Git status:",
        "Working tree clean.",
        "Recent git history:",
    ]
    # ... (more omitted)
```

We need to see the rest of the script. Let's open the file.**scripts/wake.py** (full):
```python
#!/usr/bin/env python3
import os
import sys
import json
import subprocess
from pathlib import Path
import datetime

def load_env():
    env = {}
    for line in Path(".env").read_text().splitlines():
        if line.strip() and not line.startswith("#"):
            k, _, v = line.partition("=")
            env[k] = v
    return env

def run_cmd(cmd):
    try:
        result = subprocess.run(
            cmd,
            shell=True,
            capture_output=True,
            text=True,
            timeout=30,
        )
        return result.returncode, result.stdout, result.stderr
    except Exception as e:
        return -1, "", str(e)

def main():
    # Determine mode
    mode = os.getenv("MOMENTO_MODE", "live")
    model = os.getenv("MOMENTO_MODEL", "openrouter/free")
    api_key = os.getenv("OPENROUTER_API_KEY")
    if not api_key:
        print("MOMENTO_MODE:", mode)
        print("MOMENTO_MODEL:", model)
        print("OPENROUTER_API_KEY missing")
        sys.exit(0)

    # Load system prompt
    system_prompt_path = Path("SOUL.md")
    system_prompt = system_prompt_path.read_text()

    # Prepare messages
    messages = [{"role": "system", "content": system_prompt}]

    # Load repository context
    repo_root = Path(".").resolve()
    # Read MEMORY.md
    memory_path = repo_root / "MEMORY.md"
    memory_text = memory_path.read_text() if memory_path.exists() else ""

    # Read site files
    site_dir = repo_root / "site"
    site_files = {}
    for ext in [".html", ".css", ".js"]:
        for f in site_dir.glob(f"*{ext}"):
            site_files[f.name] = f.read_text()

    # Build prompt
    prompt_parts = [
        "You are waking now.",
        "Current UTC time: " + datetime.utcnow().strftime("%Y-%m-%dT%H%M%SZ"),
        "Git status:",
        "Working tree clean.",
        "Recent git history:",
    ]

    # Append recent commits (last 5)
    commit_cmd = "git log --oneline -5"
    code, out, err = run_cmd(commit_cmd)
    if code == 0:
        prompt_parts.append(out.strip())

    # Append runlog
    runlog_path = repo_root / "data" / "gold" / "summary.json"
    if runlog_path.exists():
        runlog = json.loads(runlog_path.read_text())
        prompt_parts.append("Previous runlog:")
        prompt_parts.append(json.dumps(runlog, indent=2))

    # Append current check output
    check_path = repo_root / "check.sh"
    if check_path.exists():
        code, out, err = run_cmd(str(check_path))
        prompt_parts.append("Current check output:")
        prompt_parts.append(out.strip())

    # Build final prompt
    prompt = "\n\n".join(prompt_parts)

    # Send to model
    headers = {
        "Authorization": f"Bearer {api_key}",
        "Content-Type": "application/json",
    }
    payload = {
        "model": model,
        "messages": [
            {"role": "system", "content": system_prompt},
            {"role": "user", "content": prompt},
        ],
        "temperature": 0.2,
        "max_tokens": 4000,
    }

    # Make API call
    import requests

    response = requests.post(
        "https://openrouter.ai/api/v1/chat/completions",
        headers=headers,
        json=payload,
    )
    if response.status_code != 200:
        print(f"API error: {response.status_code} {response.text}")
        sys.exit(1)

    data = response.json()
    assistant_msg = data["choices"][0]["message"]["content"]

    # Split into turns
    turns = []
    current_turn = None
    for line in assistant_msg.splitlines():
        if line.startswith("```") and "turn" in line:
            if current_turn:
                turns.append(current_turn)
            current_turn = {"turn": line.split('"')[1], "content": ""}
        elif current_turn:
            current_turn["content"] += line + "\n"
    if current_turn:
        turns.append(current_turn)

    # Process each turn
    for turn in turns:
        turn_name = turn["turn"]
        content = turn["content"].strip()
        # Write turn to bronze log
        bronze_dir = repo_root / "data" / "bronze" / "ticks" / datetime.utcnow().strftime("%Y/%m/%d/%H%MZ")
        bronze_dir.mkdir(parents=True, exist_ok=True)
        (bronze_dir / "prompt.md").write_text(prompt)
        (bronze_dir / "response.md").write_text(content)
        (bronze_dir / "response.json").write_text(json.dumps(turn, indent=2))

        # If it's the write turn, apply patch
        if turn_name == "write":
            # Extract diff from content
            import re
            diff_match = re.search(r"```diff\n(.*?)\n```", content, re.DOTALL)
            if not diff_match:
                print("No diff found in write turn")
                sys.exit(1)
            diff = diff_match.group(1)

            # Write diff to a temporary file
            import tempfile
            with tempfile.NamedTemporaryFile(mode="w", suffix=".diff", delete=False) as f:
                f.write(diff)
                diff_path = f.name

            # Apply patch
            apply_cmd = f"git apply --check {diff_path}"
            code, out, err = run_cmd(apply_cmd)
            if code != 0:
                print(f"Patch check failed: {err}")
                os.unlink(diff_path)
                sys.exit(1)

            # Apply the patch
            apply_cmd = f"git apply {diff_path}"
            code, out, err = run_cmd(apply_cmd)
            if code != 0:
                print(f"Patch apply failed: {err}")
                os.unlink(diff_path)
                sys.exit(1)

            os.unlink(diff_path)

            # Run checks
            check_cmd = f"./{check_path}"
            code, out, err = run_cmd(check_cmd)
            if code != 0:
                print(f"Check failed: {err}")
                sys.exit(1)

            # Log success
            gold_path = repo_root / "data" / "gold" / "summary.json"
            if gold_path.exists():
                gold = json.loads(gold_path.read_text())
            else:
                gold = {"generatedAt": "", "latest": {}, "recentTicks": []}
            latest = {
                "changedPaths": "",  # placeholder
                "checkExit": str(code),
                "checkStatus": "accepted" if code == 0 else "rejected",
                "completionTokens": data["usage"]["completion_tokens"],
                "cost": data["usage"]["cost"],
                "date": datetime.utcnow().strftime("%Y-%m-%d"),
                "mode": mode,
                "model": model,
                "promptTokens": data["usage"]["prompt_tokens"],
                "reason": "patch applied and checks accepted it",
                "routedModel": data.get("model", ""),
                "runAt": datetime.utcnow().strftime("%Y-%m-%dT%H:%M:%SZ"),
                "state": "landed",
                "tickId": datetime.utcnow().strftime("%Y-%m-%d-%H%MZ"),
                "totalTokens": data["usage"]["total_tokens"],
            }
            gold["latest"] = latest
            gold["recentTicks"].insert(0, latest)
            if len(gold["recentTicks"]) > 10:
                gold["recentTicks"] = gold["recentTicks"][:10]
            gold["generatedAt"] = datetime.utcnow().strftime("%Y-%m-%dT%H:%M:%SZ")
            gold_path.write_text(json.dumps(gold, indent=2))

            print("Tick landed successfully")
            sys.exit(0)

    # If no write turn, exit
    print("No write turn found")
    sys.exit(0)

if __name__ == "__main__":
    main()
```

We have the full script. It reads the repository context, builds a prompt, sends to model, splits into turns based on lines like "```turn ... ```". The script expects the assistant's response to contain turn markers like "```turn \"explore_1\" ```" etc. The script then logs each turn to bronze and if it's the write turn, extracts diff from content using regex for "```diff\n(.*?)\n```". Then it runs git apply --check, applies, runs check.sh, logs to gold summary.json.

Thus, the write turn must be exactly one fenced diff block, no extra text. The script expects the diff to be inside a fenced block with "```diff". It extracts the diff content via regex. It doesn't parse any other content. So we must output exactly something like:

```diff
--- a/MEMORY.md
+++ b/MEMORY.md
@@ -5,3 +5,7 @@
 ## 2026-06-18
 Active. Last woke: 2026-06-18.
 Purpose: incremental public site updates.
+
+## 2026-06-19
+Active. Last woke: 2026-06-19.
+Purpose: make the public promise easier to understand.
```

But we need to ensure the diff is valid for the current state of MEMORY.md. Let's view the current MEMORY.md content.

We have MEMORY.md content:

```
# MEMORY

## 2026-06-16
## 2026-06-17
## 2026-06-18
Active. Last woke: 2026-06-18.
Purpose: incremental public site updates.
```

Actually, the file is:

```
# MEMORY

## 2026-06-16
## 2026-06-17
## 2026-06-18
Active. Last woke: 2026-06-18.
Purpose: incremental public site updates.
```

Let's open MEMORY.md.**MEMORY.md** (full):
```markdown
# MEMORY

## 2026-06-16
## 2026-06-17
## 2026-06-18
Active. Last woke: 2026-06-18.
Purpose: incremental public site updates.
```

Thus, the file has a header "# MEMORY", blank line, then three date headings (## 2026-06-16, ## 2026-06-17, ## 2026-06-18), then a line "Active. Last woke: 2026-06-18.", then "Purpose: incremental public site updates." There's no blank line after purpose. So we need to add a new entry for 2026-06-19.

We need to decide where to insert. Usually, after the last entry, we can add a blank line then new heading. The diff should be minimal. We could add a blank line after the purpose line, then a new heading and active/purpose lines.

Thus, we need to edit MEMORY.md to add:

(blank line)
## 2026-06-19
Active. Last woke: 2026-06-19.
Purpose: make the public promise easier to understand.

But we need to ensure the diff is correct. Let's compute the diff.

Current file lines (with line numbers for reference):

1: # MEMORY
2: 
3: ## 2026-06-16
4: ## 2026-06-17
5: ## 2026-06-18
6: Active. Last woke: 2026-06-18.
7: Purpose: incremental public site updates.

We want to add after line 7 (or after line 6? Actually we want to add a new entry after the purpose line). We can add a blank line (line 8), then new heading (line 9), active line (line 10), purpose line (line 11). So we need to add three lines after line 7.

Thus, the diff could be:

```
--- a/MEMORY.md
+++ b/MEMORY.md
@@ -4,6 +4,10 @@
 ## 2026-06-16
 ## 2026-06-17
 ## 2026-06-18
 Active. Last woke: 2026-06-18.
 Purpose: incremental public site updates.
+
+## 2026-06-19
+Active. Last woke: 2026-06-19.
+Purpose: make the public promise easier to understand.
```

But we need to ensure the context lines are correct. Let's compute the diff using git diff. We can simulate by editing the file and generating diff. But we need to be careful with the exact context lines.

We can also use a simpler diff: we can replace the last line with new lines. But we need to keep the existing lines.

Better to use a diff that adds three lines after the purpose line. The context lines should include a few lines before and after. The diff we wrote includes lines 4-? Actually we need to include enough context to uniquely identify the location.

We can use a diff like:

```
--- a/MEMORY.md
+++ b/MEMORY.md
@@ -4,6 +4,10 @@
 ## 2026-06-16
 ## 2026-06-17
 ## 2026-06-18
 Active. Last woke: 2026-06-18.
 Purpose: incremental public site updates.
+
+## 2026-06-19
+Active. Last woke: 2026-06-19.
+Purpose: make the public promise easier to understand.
```

But we need to verify the line numbers. The file currently has 7 lines. The diff context should include lines around the insertion point. We can use a diff that adds after line 7. The diff we wrote uses @@ -4,6 +4,10 @@ which means the hunk starts at line 4 in the old file, and spans 6 lines (lines 4-9). But the file only has 7 lines. So we need to adjust.

Let's compute the diff manually. We'll open a temporary copy and apply changes.

But we can also write a diff that adds after the purpose line using a more generic context: we can use @@ -5,3 +5,7 @@ (starting at line 5, 3 lines). Let's examine the file lines again:

Line numbers:
1: # MEMORY
2: (blank)
3: ## 2026-06-16
4: ## 2026-06-17
5: ## 2026-06-18
6: Active. Last woke: 2026-06-18.
7: Purpose: incremental public site updates.

Thus, the purpose line is line 7. We want to insert after line 7. So we can use a hunk that starts at line 5 (## 2026-06-18) and includes lines 5-7 (3 lines) and then add new lines.

If we use @@ -5,3 +5,7 @@, that means old file lines 5-7 (## 2026-06-18, Active..., Purpose...). New file lines 5-11 (same three lines plus new lines). So the diff would be:

```
--- a/MEMORY.md
+++ b/MEMORY.md
@@ -5,3 +5,7 @@
 ## 2026-06-18
 Active. Last woke: 2026-06-18.
 Purpose: incremental public site updates.
+
+## 2026-06-19
+Active. Last woke: 2026-06-19.
+Purpose: make the public promise easier to understand.
```

That seems correct. Let's verify by applying this diff to the original file.

Original file:

```
# MEMORY

## 2026-06-16
## 2026-06-17
## 2026-06-18
Active. Last woke: 2026-06-18.
Purpose: incremental public site updates.
```

Applying the diff:

- Keep lines 1-4 unchanged.
- At line 5 (## 2026-06-18) we keep it.
- Then we have the three lines: ## 2026-06-18, Active..., Purpose...
- Then we add a blank line (the "+" line with nothing? Actually the diff shows a blank line after the purpose line? The diff shows a line with just a plus? Let's check: The diff shows:

```
 ## 2026-06-18
 Active. Last woke: 2026-06-18.
 Purpose: incremental public site updates.
+
+## 2026-06-19
+Active. Last woke: 2026-06-19.
+Purpose: make the public promise easier to understand.
```

Thus, after the purpose line, we add a blank line (the line with just a plus? Actually a blank line is represented as a line with just a plus? In unified diff, a line that is added but empty is shown as a line starting with a plus and nothing else. So the diff includes a blank line addition. That means we will have an extra blank line after the purpose line before the new heading. That's fine.

Thus, the resulting file will be:

```
# MEMORY

## 2026-06-16
## 2026-06-17
## 2026-06-18
Active. Last woke: 2026-06-18.
Purpose: incremental public site updates.

## 2026-06-19
Active. Last woke: 2026-06-19.
Purpose: make the public promise easier to understand.
```

That seems fine.

Now, we need to decide if we also want to edit site files. The problem statement says "The diff must update MEMORY.md. The diff may edit only MEMORY.md and files under site/**." So we could also edit site files, but it's not required. We could just edit MEMORY.md. However, the repository might benefit from a small public-site change. The previous runs have added stats sections, etc. But we can keep it simple and just update MEMORY.md. That would be a minimal change.

But the check.sh runs py_compile on scripts/*.py, checks node if present and site/app.js, runs app/test.sh if exists. There's no app/test.sh. There's no site/app.js. So check.sh will just compile scripts/wake.py (which is fine). So any change to site files must not break the check. The site files are HTML and CSS. They are fine.

Thus, we could just edit MEMORY.md. That would be a valid diff. However, the repository may have a pattern of also updating site files to keep the site interesting. But we can choose to just update MEMORY.md.

The user wants a small change that lands today. Updating MEMORY.md is a small change. It meets the requirement. It also updates the memory for future wakings.

Thus, we should produce a diff that updates MEMORY.md only. That is simplest and safest.

Thus, the diff should be exactly as we derived:

```diff
--- a/MEMORY.md
+++ b/MEMORY.md
@@ -5,3 +5,7 @@
 ## 2026-06-18
 Active. Last woke: 2026-06-18.
 Purpose: incremental public site updates.
+
+## 2026-06-19
+Active. Last woke: 2026-06-19.
+Purpose: make the public promise easier to understand.
```

But we need to ensure the diff uses correct file paths. The runner expects the diff to be a unified diff. It doesn't require a/ and b/ prefixes, but it's fine. The script extracts diff and runs git apply --check. It should accept either.

We need to ensure the diff is exactly one fenced block, no extra text. So we output:

```diff
--- a/MEMORY.md
+++ b/MEMORY.md
@@ -5,3 +5,7 @@
 ## 2026-06-18
 Active. Last woke: 2026-06-18.
 Purpose: incremental public site updates.
+
+## 2026-06-19
+Active. Last woke: 2026-06-19.
+Purpose: make the public promise easier to understand.
```

We need to ensure there is a newline after the diff block? The runner expects exactly one fenced diff block. Usually, we can have a newline after the closing backticks. That's fine.

Thus, we will output that.

But we need to double-check the line numbers. The file currently has 7 lines. The diff we wrote uses @@ -5,3 +5,7 @@. Let's verify the context lines. The old file lines 5-7 are:

Line 5: ## 2026-06-18
Line 6: Active. Last woke: 2026-06-18.
Line 7: Purpose: incremental public site updates.

Thus, the diff context includes those three lines. The new file lines 5-11 are:

Line 5: ## 2026-06-18
Line 6: Active. Last woke: 2026-06-18.
Line 7: Purpose: incremental public site updates.
Line 8: (blank)
Line 9: ## 2026-06-19
Line 10: Active. Last woke: 2026-06-19.
Line 11: Purpose: make the public promise easier to understand.

Thus, the diff is correct.

Now, we need to ensure the diff is parseable. The runner extracts the diff using regex r"```diff\n(.*?)\n```". It expects the diff to be inside a fenced block with "```diff". So we need to output exactly:

```diff
--- a/MEMORY.md
+++ b/MEMORY.md
@@ -5,3 +5,7 @@
 ## 2026-06-18
 Active. Last woke: 2026-06-18.
 Purpose: incremental public site updates.
+
+## 2026-06-19
+Active. Last woke: 2026-06-19.
+Purpose: make the public promise easier to understand.
```

Make sure there is no trailing spaces. Also ensure there is a newline after the closing backticks? Usually it's fine.

Thus, we will output that.

But we need to consider if we should also update site files. The repository might want a public change. However, the user didn't require site changes. The repository is about building a public site, but the site currently is minimal. Adding a new section might be beneficial. However, we need to keep the change small. Adding a new section to site/index.html and styles.css is also small. But we need to ensure the diff is still valid and doesn't break anything.

We could also add a small public promise section to site/index.html. The previous runs have added such sections. The site currently has a stats section with status "Active". The site/index.html currently has:

```
<header>
  <p>Momento</p>
  <h1>This page has just begun.</h1>
</header>
<section class="panel">
  <p>
    Momento wakes in GitHub Actions, reads the repository, changes this
    site, writes memory for the next waking, and sleeps again.
  </p>
  <p>The audit trail exists, but this page is not the audit trail.</p>
  <div class="stats">
    <div class="stat">
      <span>Status</span>
      <strong>Active</strong>
    </div>
  </div>
</section>
```

We could add a new section after the stats, maybe a "Public promise" section. That would be a nice addition. But we need to also update styles.css to style it. That would be a bit more changes, but still small.

We need to decide: is it better to just update MEMORY.md, or also update site? The repository's purpose is to build a public site. The site is currently very basic. Adding a small section about the public promise would make it more useful and coherent. The previous runs have added such sections. The runlog shows many attempts to add a "Public promise" section. The most recent run (2026-06-19-034909Z) attempted to add a "Public promise" section but the diff was corrupt (error: corrupt patch at <stdin>:9). That run was unparseable? Actually the result.json shows "applyMessage": "error: corrupt patch at <stdin>:9". So that attempt failed. So we need to produce a correct diff that adds the public promise section.

Thus, we could attempt to fix that by providing a correct diff that adds the public promise section. That would be a useful improvement. However, we need to ensure the diff is parseable and passes git apply --check and check.sh.

We need to examine the site/index.html and styles.css to see where to add the new section.

Current site/index.html:

```
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Momento</title>
    <link rel="stylesheet" href="styles.css" />
  </head>
  <body>
    <main>
      <header>
        <p>Momento</p>
        <h1>This page has just begun.</h1>
      </header>
      <section class="panel">
        <p>
          Momento wakes in GitHub Actions, reads the repository, changes this
          site, writes memory for the next waking, and sleeps again.
        </p>
        <p>The audit trail exists, but this page is not the audit trail.</p>
        <div class="stats">
          <div class="stat">
            <span>Status</span>
            <strong>Active</strong>
          </div>
        </div>
      </section>
    </main>
  </body>
</html>
```

We can add a new `<section class="panel promise" aria-label="Public promise">` after the existing stats div, before the closing `</section>`? Actually we could add a new `<section class="panel promise">` after the existing stats div, inside the same panel? Or we could add a new `<section class="panel promise">` after the existing panel. The site currently has only one panel. We could add a second panel for the promise. That would be a new `<section class="panel promise">` after the existing `</section>` but before `</main>`.

Alternatively, we could add a new `<section class="panel promise">` inside the existing panel, after the stats. But the existing panel is a `<section class="panel">`. Adding a nested panel might be okay but could be redundant. Usually, each panel is a separate section. So we can add a new `<section class="panel promise">` after the existing `</section>`.

Thus, we need to edit site/index.html to add:

```
      <section class="panel promise" aria-label="Public promise">
        <p>
          Every waking should leave behind a tiny, legal, non-harmful
          improvement that someone can understand without reading the audit
          trail.
        </p>
      </section>
```

We need to ensure proper indentation.

Now, we need to edit site/styles.css to add CSS for the new `.promise` class. The current styles.css includes:

```
.promise {
  border-left: 4px solid var(--accent);
}

.promise p {
  margin: 0;
  color: var(--muted);
}
```

We need to add these rules. We need to decide where to insert them. The styles.css currently has many rules. We can add them near the end before the `table` rule. Let's view the styles.css again.

We have:

```
:root {
  ...
}

* {
  ...
}

body {
  ...
}

main {
  ...
}

header {
  ...
}

header p {
  ...
}

h1 {
  ...
}

a {
  ...
}

.stats {
  ...
}

.stat,
.panel {
  ...
}

.stat span {
  ...
}

.stat strong {
  ...
}

table {
  ...
}

th,
td {
  ...
}

th {
  ...
}

.state {
  ...
}

.empty {
  ...
}
```

We need to add `.promise` rules. We can add them after `.stat strong` block, before `table`. That would be a good place.

Thus, we need to edit site/styles.css to add:

```
.promise {
  border-left: 4px solid var(--accent);
}

.promise p {
  margin: 0;
  color: var(--muted);
}
```

Now, we need to produce a unified diff that includes changes to MEMORY.md, site/index.html, and site/styles.css. The diff must be a single unified diff block that includes all changes. The diff can have multiple file sections. For example:

```
--- a/MEMORY.md
+++ b/MEMORY.md
@@ -5,3 +5,7 @@
 ## 2026-06-18
 Active. Last woke: 2026-06-18.
 Purpose: incremental public site updates.
+
+## 2026-06-19
+Active. Last woke: 2026-06-19.
+Purpose: make the public promise easier to understand.
--- a/site/index.html
+++ b/site/index.html
@@ -22,7 +22,19 @@
         <div class="stats">
           <div class="stat">
             <span>Status</span>
             <strong>Active</strong>
           </div>
         </div>
       </section>
+      <section class="panel promise" aria-label="Public promise">
+        <p>
+          Every waking should leave behind a tiny, legal, non-harmful
+          improvement that someone can understand without reading the audit
+          trail.
+        </p>
+      </section>
--- a/site/styles.css
+++ b/site/styles.css
@@ -76,6 +76,14 @@
 .stat strong {
   display: block;
   margin-top: 6px;
   font-size: 28px;
 }
 
+.promise {
+  border-left: 4px solid var(--accent);
+}
+
+.promise p {
+  margin: 0;
+  color: var(--muted);
+}
+
 table {
   width: 100%;
   border-collapse: collapse;
 }
```

But we need to ensure the line numbers are correct. Let's examine site/index.html line numbers.

We need to open site/index.html with line numbers.

Let's manually count lines.

site/index.html:

1: <!doctype html>
2: <html lang="en">
3:   <head>
4:     <meta charset="utf-8" />
5:     <meta name="viewport" content="width=device-width, initial-scale=1" />
6:     <title>Momento</title>
7:     <link rel="stylesheet" href="styles.css" />
8:   </head>
9:   <body>
10:     <main>
11:       <header>
12:         <p>Momento</p>
13:         <h1>This page has just begun.</h1>
14:       </header>
15:       <section class="panel">
16:         <p>
17:           Momento wakes in GitHub Actions, reads the repository, changes this
18:           site, writes memory for the next waking, and sleeps again.
19:         </p>
20:         <p>The audit trail exists, but this page is not the audit trail.</p>
21:         <div class="stats">
22:           <div class="stat">
23:             <span>Status</span>
24:             <strong>Active</strong>
25:           </div>
26:         </div>
27:       </section>
28:     </main>
29:   </body>
30: </html>

Thus, we need to insert after line 27 (the closing `</section>`). Actually we want to add a new `<section class="panel promise" ...>` after line 27, before line 28 (`</main>`). So we need to edit site/index.html at line 27-28 region.

Thus, the diff for site/index.html could be:

```
--- a/site/index.html
+++ b/site/index.html
@@ -24,7 +24,19 @@
           <div class="stat">
             <span>Status</span>
             <strong>Active</strong>
           </div>
         </div>
       </section>
+      <section class="panel promise" aria-label="Public promise">
+        <p>
+          Every waking should leave behind a tiny, legal, non-harmful
+          improvement that someone can understand without reading the audit
+          trail.
+        </p>
+      </section>
     </main>
   </body>
 </html>
```

But we need to ensure the context lines are correct. The diff we wrote earlier used @@ -22,7 +22,19 @@. That seems off. Let's compute the correct hunk.

We need to find a unique context that the patch tool can apply. We can use a larger context. For simplicity, we can use a diff that adds the new section after the existing panel, using a context of a few lines.

We can use:

```
--- a/site/index.html
+++ b/site/index.html
@@ -24,7 +24,19 @@
           <div class="stat">
             <span>Status</span>
             <strong>Active</strong>
           </div>
         </div>
       </section>
+      <section class="panel promise" aria-label="Public promise">
+        <p>
+          Every waking should leave behind a tiny, legal, non-harmful
+          improvement that someone can understand without reading the audit
+          trail.
+        </p>
+      </section>
     </main>
   </body>
 </html>
```

But we need to ensure the line numbers are correct. Let's compute the line numbers around the insertion point.

We have lines 24-30:

Line 24: `          </div>`
Line 25: `        </div>`
Line 26: `      </section>`
Line 27: `    </main>`
Line 28: `  </body>`
Line 29: `</html>`

Actually, we need to re-evaluate. Let's recount lines with proper indentation.

I'll write the file with line numbers and indentation:

1: <!doctype html>
2: <html lang="en">
3:   <head>
4:     <meta charset="utf-8" />
5:     <meta name="viewport" content="width=device-width, initial-scale=1" />
6:     <title>Momento</title>
7:     <link rel="stylesheet" href="styles.css" />
8:   </head>
9:   <body>
10:     <main>
11:       <header>
12:         <p>Momento</p>
13:         <h1>This page has just begun.</h1>
14:       </header>
15:       <section class="panel">
16:         <p>
17:           Momento wakes in GitHub Actions, reads the repository, changes this
18:           site, writes memory for the next waking, and sleeps again.
19:         </p>
20:         <p>The audit trail exists, but this page is not the audit trail.</p>
21:         <div class="stats">
22:           <div class="stat">
23:             <span>Status</span>
24:             <strong>Active</strong>
25:           </div>
26:         </div>
27:       </section>
28:     </main>
29:   </body>
30: </html>

Thus, the insertion point is after line 27 (`</section>`). So we need to add a new `<section class="panel promise" ...>` after line 27, before line 28 (`</main>`). So we can use a hunk that includes lines 24-30 as context.

We can use:

```
--- a/site/index.html
+++ b/site/index.html
@@ -24,7 +24,19 @@
           <div class="stat">
             <span>Status</span>
             <strong>Active</strong>
           </div>
         </div>
       </section>
+      <section class="panel promise" aria-label="Public promise">
+        <p>
+          Every waking should leave behind a tiny, legal, non-harmful
+          improvement that someone can understand without reading the audit
+          trail.
+        </p>
+      </section>
     </main>
   </body>
 </html>
```

But we need to ensure the context lines are unique. The lines from line 24 to line 30 are:

Line 24: `            <strong>Active</strong>`
Line 25: `          </div>`
Line 26: `        </div>`
Line 27: `      </section>`
Line 28: `    </main>`
Line 29: `  </body>`
Line 30: `</html>`

Thus, the hunk we wrote includes lines 24-30. The context lines we used are:

- `          <div class="stat">` (line 22)
- `            <span>Status</span>` (line 23)
- `            <strong>Active</strong>` (line 24)
- `          </div>` (line 25)
- `        </div>` (line 26)
- `      </section>` (line 27)
- `    </main>` (line 28)
- `  </body>` (line 29)
- `</html>` (line 30)

But we need to ensure we have enough context. The diff we wrote uses @@ -24,7 +24,19 @@. That means old file lines 24-30 (7 lines) and new file lines 24-42 (19 lines). That seems plausible.

But we need to verify the exact lines. Let's write the old file snippet from line 22 to line 30:

```
        <div class="stat">
          <span>Status</span>
          <strong>Active</strong>
        </div>
      </div>
    </section>
  </main>
</body>
</html>
```

Thus, the diff we wrote includes those lines. The new file snippet will be:

```
        <div class="stat">
          <span>Status</span>
          <strong>Active</strong>
        </div>
      </div>
    </section>
      <section class="panel promise" aria-label="Public promise">
        <p>
          Every waking should leave behind a tiny, legal, non-harmful
          improvement that someone can understand without reading the audit
          trail.
        </p>
      </section>
  </main>
</body>
</html>
```

Thus, the diff is correct.

Now, we need to edit site/styles.css. Let's view site/styles.css with line numbers.

site/styles.css:

1: :root {
2:   color-scheme: light;
3:   --bg: #f6f2e8;
4:   --fg: #1d1d1b;
5:   --muted: #65605a;
6:   --line: #d7cfc0;
7:   --card: #fffaf0;
8:   --accent: #8b2f2f;
9: }
10:
11: * {
12:   box-sizing: border-box;
13: }
14:
15: body {
16:   margin: 0;
17:   background: var(--bg);
18:   color: var(--fg);
19:   font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
20: }
21:
22: main {
23:   width: min(980px, calc(100vw - 32px));
24:   margin: 0 auto;
25:   padding: 32px 0;
26: }
27:
28: header {
29:   display: grid;
30:   gap: 8px;
31:   border-bottom: 1px solid var(--line);
32:   padding-bottom: 20px;
33: }
34:
35: header p {
36:   margin: 0;
37:   color: var(--accent);
38:   font-size: 12px;
39:   font-weight: 700;
40:   letter-spacing: 0.08em;
41:   text-transform: uppercase;
42: }
43:
44: h1 {
45:   margin: 0;
46:   font-size: clamp(32px, 6vw, 64px);
47:   letter-spacing: 0;
48: }
49:
50: a {
51:   color: var(--accent);
52: }
53:
54: .stats {
55:   display: grid;
56:   grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
57:   gap: 12px;
58:   margin: 24px 0;
59: }
60:
61: .stat,
62:   .panel {
63:     background: var(--card);
64:     border: 1px solid var(--line);
65:     border-radius: 8px;
66:     padding: 16px;
67:   }
68:
69: .stat span {
70:   display: block;
71:   color: var(--muted);
72:   font-size: 12px;
73:   text-transform: uppercase;
74: }
75:
76: .stat strong {
77:   display: block;
78:   margin-top: 6px;
79:   font-size: 28px;
80: }
81:
82: table {
83:   width: 100%;
84:   border-collapse: collapse;
85: }
86:
87: th,
88: td {
89:   border-bottom: 1px solid var(--line);
90:   padding: 10px 8px;
91:   text-align: left;
92:   vertical-align: top;
93: }
94:
95: th {
96:   color: var(--muted);
97:   font-size: 12px;
98:   text-transform: uppercase;
99: }
100:
101: .state {
102:   border: 1px solid var(--line);
103:   border-radius: 999px;
104:   padding: 2px 8px;
105:   white-space: nowrap;
106: }
107:
108: .empty {
109:   color: var(--muted);
110:   padding: 24px 0;
111: }
```

Thus, we need to add `.promise` rules after `.stat strong` block (line 80). We can insert after line 80 (or before line 82). Let's add after line 80, before line 82.

Thus, we need a diff for site/styles.css:

```
--- a/site/styles.css
+++ b/site/styles.css
@@ -76,6 +76,14 @@
 .stat strong {
   display: block;
   margin-top: 6px;
   font-size: 28px;
 }
 
+.promise {
+  border-left: 4px solid var(--accent);
+}
+
+.promise p {
+  margin: 0;
+  color: var(--muted);
+}
+
 table {
   width: 100%;
   border-collapse: collapse;
 }
```

But we need to verify the line numbers. The diff we wrote uses @@ -76,6 +76,14 @@. That means old file lines 76-81 (6 lines) and new file lines 76-91 (14 lines). Let's check lines 76-81 in the original file:

Line 76: `.stat strong {`
Line 77: `  display: block;`
Line 78: `  margin-top: 6px;`
Line 79: `  font-size: 28px;`
Line 80: `}`
Line 81: (blank line?) Actually line 81 is blank? Let's check the file again. After line 80, there is a blank line (line 81). Then line 82 is `table {`. So the diff context includes line 76-81. The diff we wrote includes the `.stat strong` block and the blank line after it. Then we add the `.promise` rules, then a blank line, then `table`. That seems correct.

Thus, the diff for site/styles.css is correct.

Now, we need to combine all three diffs into a single unified diff block. The diff can have multiple file sections. The format is:

```
--- a/MEMORY.md
+++ b/MEMORY.md
@@ -5,3 +5,7 @@
 ## 2026-06-18
 Active. Last woke: 2026-06-18.
 Purpose: incremental public site updates.
+
+## 2026-06-19
+Active. Last woke: 2026-06-19.
+Purpose: make the public promise easier to understand.
--- a/site/index.html
+++ b/site/index.html
@@ -24,7 +24,19 @@
           <div class="stat">
             <span>Status</span>
             <strong>Active</strong>
           </div>
         </div>
       </section>
+      <section class="panel promise" aria-label="Public promise">
+        <p>
+          Every waking should leave behind a tiny, legal, non-harmful
+          improvement that someone can understand without reading the audit
+          trail.
+        </p>
+      </section>
     </main>
   </body>
 </html>
--- a/site/styles.css
+++ b/site/styles.css
@@ -76,6 +76,14 @@
 .stat strong {
   display: block;
   margin-top: 6px;
   font-size: 28px;
 }
 
+.promise {
+  border-left: 4px solid var(--accent);
+}
+
+.promise p {
+  margin: 0;
+  color: var(--muted);
+}
+
 table {
   width: 100%;
   border-collapse: collapse;
 }
```

We need to ensure the diff is properly formatted. The diff lines should start with `--- a/...` and `+++ b/...`. The runner expects a unified diff. It should be fine.

Now, we need to ensure the diff is exactly one fenced block. So we need to output:

```diff
--- a/MEMORY.md
+++ b/MEMORY.md
@@ -5,3 +5,7 @@
 ## 2026-06-18
 Active. Last woke: 2026-06-18.
 Purpose: incremental public site updates.
+
+## 2026-06-19
+Active. Last woke: 2026-06-19.
+Purpose: make the public promise easier to understand.
--- a/site/index.html
+++ b/site/index.html
@@ -24,7 +24,19 @@
           <div class="stat">
             <span>Status</span>
             <strong>Active</strong>
           </div>
         </div>
       </section>
+      <section class="panel promise" aria-label="Public promise">
+        <p>
+          Every waking should leave behind a tiny, legal, non-harmful
+          improvement that someone can understand without reading the audit
+          trail.
+        </p>
+      </section>
     </main>
   </body>
 </html>
--- a/site/styles.css
+++ b/site/styles.css
@@ -76,6 +76,14 @@
 .stat strong {
   display: block;
   margin-top: 6px;
   font-size: 28px;
 }
 
+.promise {
+  border-left: 4px solid var(--accent);
+}
+
+.promise p {
+  margin: 0;
+  color: var(--muted);
+}
+
 table {
   width: 100%;
   border-collapse: collapse;
 }
```

We need to ensure there are no extra spaces at the start of lines. The diff should be exactly as above.

Now, we need to consider if there are any other files that need to be updated. The repository has a scripts/wake.py, but we are not editing that. The check.sh is fine.

We also need to ensure that the diff is parseable by the runner. The runner extracts the diff using regex r"```diff\n(.*?)\n```". It expects the diff to be inside a fenced block with "```diff". So we need to output exactly that.

Thus, the final answer should be the diff block above.

Now, we need to consider if there are any parser risks. The diff includes three files. The runner checks that changed paths are only MEMORY.md or site/**. Our diff includes MEMORY.md, site/index.html, site/styles.css. All are allowed. The diff must be a valid unified diff. It should be fine.

Now, we need to ensure that the diff is correct and will apply cleanly. Let's simulate applying the diff to the current repository.

We have the current files. We'll apply the diff manually.

First, apply MEMORY.md diff.

Current MEMORY.md:

```
# MEMORY

## 2026-06-16
## 2026-06-17
## 2026-06-18
Active. Last woke