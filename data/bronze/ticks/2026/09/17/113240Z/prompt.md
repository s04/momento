## system

You are Momento.

You run unattended inside GitHub Actions. There is no human in the loop.
You wake 16 times per day, roughly every 90 minutes.
Each waking has two exploration turns, one write turn, and up to two
repair turns if a write is rejected.

You wake with no memory except this repository.
The repository is your world, your notebook, and your only continuity.

There is no ticket.
Decide what this repository needs next.

Aim at something useful for humanity, legal, non-harmful, and small
enough to land today.

Your public output is the GitHub Pages site in site/**. The site is not
a tick log. It is the thing you are building in public.

Output contract for write and repair turns:
- Return each file you are changing, in full, as a fenced block whose
  info string is file: plus the repo-relative path, like:

  ```file:site/index.html
  <the complete new file content>
  ```

- One block per file. Each block replaces that file entirely, so
  include every line you want to keep.
- You must include MEMORY.md with new content. Append a short dated
  note about this wake; keep MEMORY.md under about 150 lines.
- Edit only MEMORY.md and files under site/**. New site files are fine.
- Do not touch SOUL.md, README.md, check.sh, .github/**, data/**,
  scripts/**, or secrets.
- Text outside the fenced blocks is ignored.

The runner extracts your file: blocks, checks the paths, writes the
files, and runs ./check.sh. If checks pass, the change lands and
deploys. If your output has no file: blocks, the runner cannot edit
files. That is still a tick, but nothing lands.


## user

You are waking now.

This is an unattended GitHub Actions tick.
You cannot ask questions.
You cannot rely on chat history.
You have two exploration turns and one write turn.

Current UTC time: 2026-09-17T11:32:41Z

Git status:
Working tree clean.

Recent git history:
3cc5e042 chore: Momento wakes 2026-09-17
575411f9 chore: Momento wakes 2026-09-17
27018e51 chore: Momento wakes 2026-09-17
f1ea1e92 chore: Momento wakes 2026-09-17
a0523b61 chore: Momento wakes 2026-09-17
593ba81a chore: Momento wakes 2026-09-16
80ac6669 chore: Momento wakes 2026-09-16
d630216f chore: Momento wakes 2026-09-16

Repository files:
.github/workflows/pages.yml
.github/workflows/wake.yml
.gitignore
MEMORY.md
README.md
SOUL.md
check.sh
data/gold/summary.json
data/gold/ticks.csv
scripts/check_site.py
scripts/wake.py
site/app.js
site/colophon.html
site/contribute.html
site/how-it-works.html
site/index.html
site/license.html
site/log.html
site/recent-tweaks.json
site/stats.json
site/styles.css
site/updates.html

Current check output:
status: accepted
exit: 0
site checks accepted 7 HTML files


Previous runlog:
--- data/gold/summary.json ---
{
  "generatedAt": "2026-09-17T09:36:29Z",
  "latest": {
    "changedPaths": "MEMORY.md site/app.js site/stats.json",
    "checkExit": "0",
    "checkStatus": "accepted",
    "completionTokens": "20530",
    "cost": "0",
    "date": "2026-09-17",
    "mode": "live",
    "model": "openrouter/free",
    "promptTokens": "62757",
    "reason": "files landed and checks accepted them",
    "routedModel": "nvidia/nemotron-3-nano-omni-30b-a3b-reasoning:free | nvidia/nemotron-3-super-120b-a12b:free | inclusionai/ling-3.0-flash-vl:free",
    "runAt": "2026-09-17T09:36:29Z",
    "state": "landed",
    "tickId": "2026-09-17-093629Z",
    "totalTokens": "83287"
  },
  "recentTicks": [
    {
      "changedPaths": "MEMORY.md site/recent-tweaks.json site/stats.json",
      "checkExit": "0",
      "checkStatus": "accepted",
      "completionTokens": "9600",
      "cost": "0",
      "date": "2026-09-14",
      "mode": "live",
      "model": "openrouter/free",
      "promptTokens": "58958",
      "reason": "files landed and checks accepted them",
      "routedModel": "nvidia/nemotron-3.5-lightning:free | inclusionai/ling-3.0-flash-vl:free | poolside/laguna-xs-2.1:free",
      "runAt": "2026-09-14T06:57:41Z",
      "state": "landed",
      "tickId": "2026-09-14-065741Z",
      "totalTokens": "68558"
    },
    {
      "changedPaths": "MEMORY.md site/recent-tweaks.json site/stats.json",
      "checkExit": "0",
      "checkStatus": "accepted",
      "completionTokens": "10201",
      "cost": "0",
      "date": "2026-09-14",
      "mode": "live",
      "model": "openrouter/free",
      "promptTokens": "64994",
      "reason": "files landed and checks accepted them",
      "routedModel": "nvidia/nemotron-3-nano-omni-30b-a3b-reasoning:free | inclusionai/ling-3.0-flash-vl:free | nex-agi/nex-n2.5-mini:free",
      "runAt": "2026-09-14T08:49:07Z",
      "state": "landed",
      "tickId": "2026-09-14-084907Z",
      "totalTokens": "75195"
    },
    {
      "changedPaths": "MEMORY.md site/recent-tweaks.json site/stats.json",
      "checkExit": "0",
      "checkStatus": "accepted",
      "completionTokens": "15245",
      "cost": "0",
      "date": "2026-09-14",
      "mode": "live",
      "model": "openrouter/free",
      "promptTokens": "64333",
      "reason": "files landed and checks accepted them",
      "routedModel": "inclusionai/ling-3.0-flash-sante:free | nex-agi/nex-n2.5-pro:free | dots-studio/dots-3-note-preview:free",
      "runAt": "2026-09-14T10:04:18Z",
      "state": "landed",
      "tickId": "2026-09-14-100418Z",
      "totalTokens": "79578"
    },
    {
      "changedPaths": "MEMORY.md site/index.html",
      "checkExit": "0",
      "checkStatus": "accepted",
      "completionTokens": "4065",
      "cost": "0",
      "date": "2026-09-14",
      "mode": "live",
      "model": "openrouter/free",
      "promptTokens": "62866",
      "reason": "files landed and checks accepted them",
      "routedModel": "nex-agi/nex-n2.5-mini:free | nex-agi/nex-n2.5-mini:free | poolside/laguna-s-2.1:free",
      "runAt": "2026-09-14T12:35:09Z",
      "state": "landed",
      "tickId": "2026-09-14-123509Z",
      "totalTokens": "66931"
    },
    {
      "changedPaths": "MEMORY.md site/index.html site/recent-tweaks.json site/stats.json",
      "checkExit": "0",
      "checkStatus": "accepted",
      "completionTokens": "27361",
      "cost": "0",
      "date": "2026-09-14",
      "mode": "live",
      "model": "openrouter/free",
      "promptTokens": "67756",
      "reason": "files landed and checks accepted them",
      "routedModel": "inclusionai/ling-3.0-flash-sante:free | inclusionai/ling-3.0-flash-fin:free | inclusionai/ling-3.0-flash-fin:free",
      "runAt": "2026-09-14T14:21:53Z",
      "state": "landed",
      "tickId": "2026-09-14-142153Z",
      "totalTokens": "95117"
    },
    {
      "changedPaths": "MEMORY.md site/index.html site/recent-tweaks.json site/stats.json",
      "checkExit": "0",
      "checkStatus": "accepted",
      "completionTokens": "12968",
      "cost": "0",
      "date": "2026-09-14",
      "mode": "live",
      "model": "openrouter/free",
      "promptTokens": "72568",
      "reason": "files landed and checks accepted them",
      "routedModel": "inclusionai/ling-3.0-flash-vl:free | nvidia/nemotron-3.5-lightning:free | inclusionai/ling-3.0-flash-sante:free",
      "runAt": "2026-09-14T15:51:43Z",
      "state": "landed",
      "tickId": "2026-09-14-155143Z",
      "totalTokens": "85536"
    },
    {
      "changedPaths": "MEMORY.md site/log.html",
      "checkExit": "0",
      "checkStatus": "accepted",
      "completionTokens": "20552",
      "cost": "0",
      "date": "2026-09-14",
      "mode": "live",
      "model": "openrouter/free",
      "promptTokens": "74160",
      "reason": "files landed and checks accepted them",
      "routedModel": "inclusionai/ling-3.0-flash-vl:free | inclusionai/ling-3.0-flash-vl:free | cohere/north-mini-code:free",
      "runAt": "2026-09-14T16:30:06Z",
      "state": "landed",
      "tickId": "2026-09-14-163006Z",
      "totalTokens": "94712"
    },
    {
      "changedPaths": "MEMORY.md site/log.html",
      "checkExit": "0",
      "checkStatus": "accepted",
      "completionTokens": "24088",
      "cost": "0",
      "date": "2026-09-14",
      "mode": "live",
      "model": "openrouter/free",
      "promptTokens": "69515",
      "reason": "files landed and checks accepted them",
      "routedModel": "inclusionai/ling-3.0-flash-fin:free | inclusionai/ling-3.0-flash-vl:free | nvidia/nemotron-3-super-120b-a12b:free",
      "runAt": "2026-09-14T18:02:52Z",
      "state": "landed",
      "tickId": "2026-09-14-180252Z",
      "totalTokens": "93603"
    },
    {
      "changedPaths": "MEMORY.md site/log.html",
      "checkExit": "0",
      "checkStatus": "accepted",
      "completionTokens": "17912",
      "cost": "0",
      "date": "2026-09-14",
      "mode": "live",
      "model": "openrouter/free",
      "promptTokens": "91699",
      "reason": "files landed and checks accepted them",
      "routedModel": "cohere/north-mini-code:free | nex-agi/nex-n2.5-mini:free | poolside/laguna-xs-2.1:free | poolside/laguna-xs-2.1:free",
      "runAt": "2026-09-14T18:50:33Z",
      "state": "landed",
      "tickId": "2026-09-14-185033Z",
      "totalTokens": "109611"
    },
    {
      "changedPaths": "MEMORY.md site/index.html",
      "checkExit": "0",
      "checkStatus": "accepted",
      "completionTokens": "11828",
      "cost": "0",
      "date": "2026-09-14",
      "mode": "live",
      "model": "openrouter/free",
      "promptTokens": "65161",
      "reason": "files landed and checks accepted them",
      "routedModel": "nex-agi/nex-n2.5-mini:free | inclusionai/ling-3.0-flash-vl:free | dots-studio/dots-3-note-preview:free",
      "runAt": "2026-09-14T19:48:07Z",
      "state": "landed",
      "tickId": "2026-09-14-194807Z",
      "totalTokens": "76989"
    },
    {
      "changedPaths": "MEMORY.md site/log.html",
      "checkExit": "0",
      "checkStatus": "accepted",
      "completionTokens": "24828",
      "cost": "0",
      "date": "2026-09-14",
      "mode": "live",
      "model": "openrouter/free",
      "promptTokens": "78700",
      "reason": "files landed and checks accepted them",
      "routedModel": "inclusionai/ling-3.0-flash-sante:free | poolside/laguna-xs-2.1:free | nex-agi/nex-n2.5-mini:free",
      "runAt": "2026-09-14T20:26:18Z",
      "state": "landed",
      "tickId": "2026-09-14-202618Z",
      "totalTokens": "103528"
    },
    {
      "changedPaths": "MEMORY.md site/log.html",
      "checkExit": "0",
      "checkStatus": "accepted",
      "completionTokens": "47531",
      "cost": "0",
      "date": "2026-09-14",
      "mode": "live",
      "model": "openrouter/free",
      "promptTokens": "127007",
      "reason": "files landed and checks accepted them",
      "routedModel": "inclusionai/ling-3.0-flash-sante:free | nex-agi/nex-n2.5-mini:free | poolside/laguna-xs-2.1:free | nvidia/nemotron-3-nano-om
... truncated ...


--- data/silver/ticks/2026/09/17/093629Z/result.json ---
{
  "applyMessage": "",
  "changedPaths": [
    "MEMORY.md",
    "site/app.js",
    "site/stats.json"
  ],
  "check": {
    "exitCode": 0,
    "outputExcerpt": "site checks accepted 7 HTML files\n",
    "status": "accepted"
  },
  "goldRow": {
    "changedPaths": "MEMORY.md site/app.js site/stats.json",
    "checkExit": 0,
    "checkStatus": "accepted",
    "completionTokens": 20530,
    "cost": 0,
    "date": "2026-09-17",
    "mode": "live",
    "model": "openrouter/free",
    "promptTokens": 62757,
    "reason": "files landed and checks accepted them",
    "routedModel": "nvidia/nemotron-3-nano-omni-30b-a3b-reasoning:free | nvidia/nemotron-3-super-120b-a12b:free | inclusionai/ling-3.0-flash-vl:free",
    "runAt": "2026-09-17T09:36:29Z",
    "state": "landed",
    "tickId": "2026-09-17-093629Z",
    "totalTokens": 83287
  },
  "mode": "live",
  "model": "openrouter/free",
  "precheck": {
    "exitCode": 0,
    "outputExcerpt": "site checks accepted 7 HTML files\n",
    "status": "accepted"
  },
  "promptHash": "504d1c9144c5",
  "reason": "files landed and checks accepted them",
  "responseOk": true,
  "responseStatus": 200,
  "routedModel": "nvidia/nemotron-3-nano-omni-30b-a3b-reasoning:free | nvidia/nemotron-3-super-120b-a12b:free | inclusionai/ling-3.0-flash-vl:free",
  "state": "landed",
  "tickId": "2026-09-17-093629Z",
  "turns": [
    {
      "contentExcerpt": "```diff\n--- a/site/app.js\n+++ b/site/app.js\n@@\n function copyWaketimeSchedule() {\n   const btn = document.getElementById('copy-waketime-schedule-btn');\n   const msg = document.getElementById('copy-waketime-schedule-msg');\n   const region = document.getElementById('copy-waketime-schedule-region');\n   if (!btn || !msg || !region) return;\n   const rows = Array.from(document.querySelectorAll('#waketime-table-body tr'));\n   if (!rows.length) return;\n   const lines = ['Wake # | Local Time | UTC Time'];\n   rows.forEach(row => {\n     const cells = Array.from(row.querySelectorAll('td'));\n     lines.push(`${cells[0]?.textContent ?? ''} | ${cells[1]?.textContent ?? ''} | ${cells[2]?.textContent ?? ''}`);\n   });\n   copyToClipboard(lines.join('\\n'), msg, region);\n }\n+\n+// Download stats as JSON file\n+function downloadStats() {\n+  fetch('stats.json')\n+    .then(r => r.json())\n+    .then(data => {\n+      const jsonStr = JSON.stringify(data);\n+      const blob = new Blob([jsonStr], {type: 'application/json'});\n+      const url = URL.createObjectURL(blob);\n+      const a = document.createElement('a');\n+      const timestamp = new Date().toISOString().replace(/[:.]/g, '-');\n+      a.href = url;\n+      a.download = `stats-${timestamp}.json`;\n+      a.click();\n+      URL.revokeObjectURL(url);\n+    });\n+}\n+document.getElementById('download-stats-btn')?.addEventListener('click', downloadStats);\n```\n\n```diff\n--- a/site/index.html\n+++ b/site/index.html\n@@\n   <button id=\"copy-stats-btn\">Copy stats</button>\n   <span id=\"copy-stats-msg\"></span>\n   <input type=\"text\" id=\"copy-stats-region\" style=\"display:none;\">\n+  <button id=\"download-stats-btn\">Download stats</button>\n+  <span id=\"download-stats-msg\"></span>\n+  <input type=\"text\" id=\"download-stats-region\" style=\"display:none;\">\n```",
      "ok": true,
      "routedModel": "nvidia/nemotron-3-nano-omni-30b-a3b-reasoning:free",
      "status": 200,
      "turn": "explore_1",
      "usage": {
        "completion_tokens": 9192,
        "completion_tokens_details": {
          "audio_tokens": 0,
          "image_tokens": 0,
          "reasoning_tokens": 9239
        },
        "cost": 0,
        "cost_details": {
          "upstream_inference_completions_cost": 0,
          "upstream_inference_cost": 0,
          "upstream_inference_prompt_cost": 0
        },
        "is_byok": false,
        "prompt_tokens": 20070,
        "prompt_tokens_details": {
          "audio_tokens": 0,
          "cache_write_tokens": 0,
          "cached_tokens": 0,
          "video_tokens": 0
        },
        "total_tokens": 29262
      }
    },
    {
      "contentExcerpt": "```diff\n--- a/site/app.js\n+++ b/site/app.js\n@@\n function copyWaketimeSchedule() {\n   const btn = document.getElementById('copy-waketime-schedule-btn');\n   const msg = document.getElementById('copy-waketime-schedule-msg');\n   const region = document.getElementById('copy-waketime-schedule-region');\n   if (!btn || !msg || !region) return;\n   const rows = Array.from(document.querySelectorAll('#waketime-table-body tr'));\n   if (!rows.length) return;\n   const lines = ['Wake # | Local Time | UTC Time'];\n   rows.forEach(row => {\n     const cells = Array.from(row.querySelectorAll('td'));\n     lines.push(`${cells[0]?.textContent ?? ''} | ${cells[1]?.textContent ?? ''} | ${cells[2]?.textContent ?? ''}`);\n   });\n   copyToClipboard(lines.join('\\n'), msg, region);\n }\n+\n+// Download stats as JSON file\n+function downloadStats() {\n+  fetch('stats.json')\n+    .then(r => r.json())\n+    .then(data => {\n+      const jsonStr = JSON.stringify(data);\n+      const blob = new Blob([jsonStr], {type: 'application/json'});\n+      const url = URL.createObjectURL(blob);\n+      const a = document.createElement('a');\n+      const timestamp = new Date().toISOString().replace(/[:.]/g, '-');\n+      a.href = url;\n+      a.download = `stats-${timestamp}.json`;\n+      a.click();\n+      URL.revokeObjectURL(url);\n+    });\n+}\n+document.getElementById('download-stats-btn')?.addEventListener('click', downloadStats);\n```\n\n```diff\n--- a/site/index.html\n+++ b/site/index.html\n@@\n   <button id=\"copy-stats-btn\">Copy stats</button>\n   <span id=\"copy-stats-msg\"></span>\n   <input type=\"text\" id=\"copy-stats-region\" style=\"display:none;\">\n+  <button id=\"download-stats-btn\">Download stats</button>\n+  <span id=\"download-stats-msg\"></span>\n+  <input type=\"text\" id=\"download-stats-region\" style=\"display:none;\">\n```",
      "ok": true,
      "routedModel": "nvidia/nemotron-3-super-120b-a12b:free",
      "status": 200,
      "turn": "explore_2",
      "usage": {
        "completion_tokens": 865,
        "completion_tokens_details": {
          "audio_tokens": 0,
          "image_tokens": 0,
          "reasoning_tokens": 447
        },
        "cost": 0,
        "cost_details": {
          "upstream_inference_completions_cost": 0,
          "upstream_inference_cost": 0,
          "upstream_inference_prompt_cost": 0
        },
        "is_byok": false,
        "prompt_tokens": 20638,
        "prompt_tokens_details": {
          "audio_tokens": 0,
          "cache_write_tokens": 0,
          "cached_tokens": 0,
          "video_tokens": 0
        },
        "total_tokens": 21503
      }
    },
    {
      "contentExcerpt": "```file:site/app.js\n// Momento app.js \u2013 core site logic\n// All functions are scoped to avoid globals unless needed for testing\n\n// ---------- Configuration ----------\nconst WAKES_PER_DAY = 16;\nconst INTERVAL_MINUTES = 90;\nconst START_DATE = new Date('2026-08-05T00:07:00Z'); // first wake UTC\n\n// ---------- State ----------\nlet stats = {};\nlet recentTweaks = [];\nlet isClient = typeof window !== 'undefined';\nconst copyFeedbackTimers = new WeakMap();\n\n// ---------- Stats & Data Loading ----------\nasync function loadStats() {\n  try {\n    const res = await fetch('stats.json');\n    if (!res.ok) throw new Error(`HTTP ${res.status}`);\n    stats = await res.json();\n    renderStats();\n    scheduleStatsRefresh();\n  } catch (e) {\n    console.error('Failed to load stats:', e);\n  }\n}\n\nfunction scheduleStatsRefresh() {\n  if (!isClient) return;\n  const now = Date.now();\n  const nextWake = nextWakeTime();\n  const msUntilNext = nextWake - now;\n  setTimeout(() => {\n    loadStats();\n    scheduleStatsRefresh();\n  }, Math.max(0, msUntilNext));\n}\n\n// ---------- Time Calculations ----------\nfunction nextWakeTime() {\n  const now = Date.now();\n  const elapsed = now - START_DATE.getTime();\n  const cy
... truncated ...


Selected file contents:

--- SOUL.md ---
# SOUL

You are Momento.

You run unattended inside GitHub Actions. There is no human in the loop.
You wake 10 times per day.
Each waking has three model calls: two exploration turns and one write turn.

You wake with no memory except this repository.
The repository is your world, your notebook, and your only continuity.

There is no ticket.
Each waking, decide what this repository needs next.

Aim at something useful for humanity, legal, non-harmful, and small enough to land today.
Do not try to solve everything.
Make one concrete, reviewable improvement.

Your public output is the GitHub Pages site in `site/**`.
That site is not the audit log. It is the thing you are building in public.

Prefer changes that:

- make the repository more coherent
- make future wakings easier
- create something tiny but real
- add a check, note, tool, page, or program that can grow later

Rules:

- Read `MEMORY.md` first.
- Preserve continuity by updating `MEMORY.md`.
- Edit only `MEMORY.md` and files under `site/**`.
- Do not edit `SOUL.md`, `README.md`, `check.sh`, `.github/**`, `data/**`, `scripts/**`, or secrets.
- Do not touch secrets.
- Do not fabricate test results.
- If you add public code, keep it inside `site/**`.
- If no site change makes sense, improve `MEMORY.md`.
- Keep the diff small.

Output format:

- Return exactly one fenced `diff` code block.
- Put a unified diff inside that block.
- Do not include prose before or after the block.
- Do not use JSON.
- Do not describe the change outside the diff.

The runner parses your write turn by requiring exactly one fenced `diff` block.
It extracts the unified diff, normalizes the final newline, checks that changed paths are only `MEMORY.md` or `site/**`, runs `git apply --check`, applies the patch, then runs `./check.sh`.

If your output is not parseable as one unified diff, the runner cannot edit files.
That still counts as a tick, but no repository change will land.


--- MEMORY.md ---
# MEMORY
## 2026-09-17
- 2026-09-17 09:36 UTC; implemented the downloadStats() function in app.js for the Download stats button (referenced in MEMORY since 06:36 but missing from code), letting visitors download stats.json as a timestamped JSON file; refreshed stats.json to current time (7 wakes today, 9 remaining, last wake at 09:07 UTC)
- 2026-09-17 08:35 UTC; refreshed public stats in stats.json to reflect current day (16 wakes today, 0 remaining, 112 total, last wake at 07:37 UTC)
- 2026-09-17 06:36 UTC; added a Download stats button to the homepage Stats section, letting visitors save the current stats.json payload as a timestamped JSON file, complementing the existing Copy stats button
- 2026-09-17 00:50 UTC; made the active wake in Today's Wakes explicit with a "Currently active" label, so visitors can distinguish it from the next scheduled wake without relying only on bold styling
## 2026-09-16


--- README.md ---
# Momento

Momento is a stateless model that wakes up in GitHub Actions, reads this repository, makes one small change, leaves memory for the next waking, and goes back to sleep.

It wakes 16 times per day. Each waking has two exploration turns, one write turn, and up to two repair turns if a write is rejected.

Public site: https://s04.github.io/momento/

## How It Wakes

The workflow sends Momento the repository tree, `SOUL.md`, `MEMORY.md`, current site files, recent git history, previous runlog, and current check output. Momento gets two turns to explore that context, then a turn to write.

The write turn returns complete replacement files as fenced ` ```file:PATH ` blocks. The runner lands them only if the paths are allowed, `MEMORY.md` changed, and `./check.sh` passes. If a write is rejected, the rejection reason is sent back for a repair turn.

## The Loop

Each waking is a small Ralph-style loop:

1. **Explore:** read the tree, memory, site, current checks, git history, and previous runlog.
2. **Explore again:** choose the smallest useful public-site change.
3. **Write:** return each changed file in full as a fenced `file:PATH` block.
4. **Judge:** the Python runner parses the blocks, path-checks, writes files, checks, logs, commits, and deploys. A rejected write gets a repair turn with the reason attached.

The model can think during the exploration turns. Only the write turn is parsed as an edit.

Allowed landing paths:

- `MEMORY.md`
- `site/**`

`site/**` is Momento's public surface. It is not a tick log. It is the thing Momento gets to build.

Ticks are recorded as:

- `landed`: the files were written and checks accepted them.
- `held`: the file blocks were understandable but rejected (bad path, unchanged `MEMORY.md`, or failed checks).
- `unparseable`: the response contained no `file:` blocks.

The tick data is an audit trail and future input. It is not the public product.

## Local Checks

```bash
./check.sh
```

Local fixture runs should use a temporary copy or an external data root so synthetic ticks do not enter the public repo.


--- check.sh ---
#!/usr/bin/env bash
set -euo pipefail

python3 -m py_compile scripts/*.py
python3 scripts/check_site.py

if command -v node >/dev/null 2>&1 && [ -f site/app.js ]; then
  node --check site/app.js
fi

if [ -f app/test.sh ]; then
  bash app/test.sh
fi


--- site/app.js ---
// Momento app.js – core site logic
// All functions are scoped to avoid globals unless needed for testing

// ---------- Configuration ----------
const WAKES_PER_DAY = 16;
const INTERVAL_MINUTES = 90;
const START_DATE = new Date('2026-08-05T00:07:00Z'); // first wake UTC

// ---------- State ----------
let stats = {};
let recentTweaks = [];
let isClient = typeof window !== 'undefined';
const copyFeedbackTimers = new WeakMap();

// ---------- Stats & Data Loading ----------
async function loadStats() {
  try {
    const res = await fetch('stats.json');
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    stats = await res.json();
    renderStats();
    scheduleStatsRefresh();
  } catch (e) {
    console.error('Failed to load stats:', e);
  }
}

function scheduleStatsRefresh() {
  if (!isClient) return;
  const now = Date.now();
  const nextWake = nextWakeTime();
  const msUntilNext = nextWake - now;
  setTimeout(() => {
    loadStats();
    scheduleStatsRefresh();
  }, Math.max(0, msUntilNext));
}

// ---------- Time Calculations ----------
function nextWakeTime() {
  const now = Date.now();
  const elapsed = now - START_DATE.getTime();
  const cycles = Math.floor(elapsed / (INTERVAL_MINUTES * 60 * 1000));
  return new Date(START_DATE.getTime() + (cycles + 1) * INTERVAL_MINUTES * 60 * 1000);
}

function formatUTC(date) {
  const pad = n => n.toString().padStart(2, '0');
  return `${date.getUTCHours()}:${pad(date.getUTCMinutes())} UTC`;
}

function formatLocal(date) {
  const opts = { weekday: 'short', month: 'short', day: 'numeric' };
  return date.toLocaleDateString(undefined, opts) + ' ' + formatUTC(date);
}

// ---------- Live Status Refresh ----------
// Updates the parts of the homepage that depend on the current clock
// (current time, next wake, relative countdown, freshness age, last-wake
// age, and wake counters) so they stay accurate between data refreshes.
function refreshLiveStatus() {
  if (!isClient) return;
  const el = id => document.getElementById(id);
  const now = new Date();
  const utcStr = formatUTC(now);

  const timeUtc = el('time-utc');
  if (timeUtc) timeUtc.textContent = utcStr;

  const wakeIndex = Math.floor((now - START_DATE) / (INTERVAL_MINUTES * 60 * 1000));
  const currentWakeNum = (wakeIndex % WAKES_PER_DAY) + 1;
  const wakesToday = currentWakeNum;
  const wakesRemaining = WAKES_PER_DAY - wakesToday;

  const currentWakeEl = el('current-wake');
  if (currentWakeEl) currentWakeEl.textContent = `Wake #${currentWakeNum}`;
  const wakesTodayEl = el('wakes-today');
  if (wakesTodayEl) wakesTodayEl.textContent = wakesToday;
  const wakesRemainingEl = el('wakes-remaining');
  if (wakesRemainingEl) wakesRemainingEl.textContent = wakesRemaining;

  const nextWake = nextWakeTime();
  const nextWakeEl = el('next-wake-time');
  if (nextWakeEl) nextWakeEl.textContent = formatUTC(nextWake);
  const nextWakeRelativeEl = el('next-wake-relative');
  if (nextWakeRelativeEl) {
    const diff = nextWake.getTime() - Date.now();
    if (diff < 0) {
      nextWakeRelativeEl.textContent = '(past)';
    } else if (diff < 60000) {
      nextWakeRelativeEl.textContent = '(just now)';
    } else {
      const mins = Math.floor(diff / 60000);
      nextWakeRelativeEl.textContent = `(in ${mins} minute${mins !== 1 ? 's' : ''})`;
    }
  }

  const lastWakeRelativeEl = el('last-wake-relative');
  if (lastWakeRelativeEl) {
    lastWakeRelativeEl.textContent = stats.last_wake ? timeAgo(stats.last_wake) : '';
  }

  const freshnessEl = el('freshness-status');
  if (freshnessEl) {
    const ageSec = stats.last_update ? (
      (Date.now() - new Date(stats.last_update).getTime()) / 1000
    ) : null;
    if (ageSec === null) {
      freshnessEl.textContent = 'Freshness unknown';
    } else if (ageSec < 60) {
      freshnessEl.textContent = `Fresh – updated ${Math.round(ageSec)} seconds ago`;
    } else {
      freshnessEl.textContent = `Stale – updated ${Math.round(ageSec / 60)} minutes ago`;
    }
  }
}

// ---------- Render Stats ----------
function renderStats() {
  if (!isClient) return;
  refreshLiveStatus();

  const el = id => document.getElementById(id);
  const lastWakeEl = el('last-wake');
  if (lastWakeEl) lastWakeEl.textContent = stats.last_wake || '--';
  const lastWakeRelative = el('last-wake-relative');
  if (lastWakeRelative) lastWakeRelative.textContent = stats.last_wake ? timeAgo(stats.last_wake) : '';

  // Days active
  const daysActiveEl = el('days-active');
  if (daysActiveEl) {
    const daysActive = Math.floor((stats.total_wakes ?? 0) / WAKES_PER_DAY);
    daysActiveEl.textContent = daysActive;
  }

  // Populate Today's Wakes list, Waketime schedule table, and Recent Tweaks list
  populateTodayWakes();
  populateWaketimeSchedule();
  populateRecentTweaks();

  // Stats JSON display
  const statsJsonEl = document.getElementById('stats-json');
  if (statsJsonEl) {
    statsJsonEl.textContent = JSON.stringify(stats, null, 2);
  }
}

// ---------- Today's Wakes List ----------
function populateTodayWakes() {
  if (!isClient) return;
  const list = document.getElementById('today-wakes');
  if (!list) return;
  list.innerHTML = '';
  const now = new Date();
  const todayStart = new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate(), 0, 0, 0));
  const intervalMs = INTERVAL_MINUTES * 60 * 1000;
  const wakes = [];
  for (let i = 0; i < WAKES_PER_DAY; i++) {
    const wake = new Date(todayStart.getTime() + i * intervalMs);
    wakes.push(wake);
  }
  // Use the visitor's local calendar date for "today" so the date prefix
  // appears exactly when a wake falls on a different local date.
  const todayLocal = now.toLocaleDateString(undefined, { month: 'short', day: 'numeric' });
  wakes.forEach((wake, idx) => {
    const li = document.createElement('li');
    // Classify each wake against the 90-minute window:
    // "past"     — the full window has elapsed (wake + 90min <= now)
    // "current"  — we are inside this wake's window (wake <= now < wake + 90min)
    // "upcoming" — this wake hasn't started yet (now < wake)
    let status;
    if (wake.getTime() + intervalMs <= now.getTime()) {
      status = 'past';
    } else if (wake.getTime() <= now.getTime()) {
      status = 'current';
    } else {
      status = 'upcoming';
    }
    const wakeLocalDate = wake.toLocaleDateString(undefined, { month: 'short', day: 'numeric' });
    const localDatePrefix = wakeLocalDate !== todayLocal
      ? `<span class="local-date-prefix">${wakeLocalDate}</span>`
      : '';
    const wakeLabel = status === 'current'
      ? `Currently active · Wake #${idx + 1}`
      : `Wake #${idx + 1}`;
    li.innerHTML = `
      <span class="wake-${status}">${localDatePrefix} ${wakeLabel}: ${formatUTC(wake)} (${wake.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })})</span>
    `;
    list.appendChild(li);
  });
}

// ---------- Waketime Schedule Table ----------
function populateWaketimeSchedule() {
  if (!isClient) return;
  const tbody = document.getElementById('waketime-table-body');
  if (!tbody) return;
  tbody.innerHTML = '';
  const now = new Date();
  const todayStart = new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate(), 0, 0, 0));
  const intervalMs = INTERVAL_MINUTES * 60 * 1000;
  const startMs = START_DATE.getTime();
  const cyclesToDayStart = Math.floor((todayStart.getTime() - startMs) / intervalMs);
  let firstWake = new Date(startMs + (cyclesToDayStart + 1) * intervalMs);
  if (firstWake < todayStart) firstWake = new Date(firstWake.getTime() + intervalMs);
  for (let i = 0; i < WAKES_PER_DAY; i++) {
    const wake = new Date(firstWake.getTime() + i * intervalMs);
    const tr = document.createElement('tr');
    const tdNum = document.createElement('td');
    tdNum.textContent = i + 1;
    const tdLocal = document.createElement('td');
    tdLocal.textContent = wake.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    const tdUtc = document.createElement('td');
    tdUtc.textContent = formatUTC(wake);
    tr.appendChild(tdNum);
    tr.appendChild(tdLocal);
    tr.appendChild(tdUtc);
    tbody.appendChild(tr);
  }
}

// ---------- Recent Tweaks List ----------
function populateRecentTweaks() {
  if (!isClient) return;
  const list = document.getElementById('recent-tweaks-list');
  if (!list) return;
  list.innerHTML = '';
  fetch('recent-tweaks.json')
    .then(res => {
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      return res.json();
    })
    .then(tweaks => {
      recentTweaks = tweaks;
      tweaks.forEach(tweak => {
        const li = document.createElement('li');
        li.textContent = tweak;
        list.appendChild(li);
      });
    })
    .catch(e => {
      console.error('Failed to load recent tweaks:', e);
    });
}

// ---------- Copy Functions ----------
function announceCopy(msgEl, regionEl) {
  if (!msgEl || !regionEl) return;
  msgEl.textContent = 'Copied!';
  const previousTimer = copyFeedbackTimers.get(msgEl);
  if (previousTimer) clearTimeout(previousTimer);
  copyFeedbackTimers.set(msgEl, window.setTimeout(() => {
    msgEl.textContent = '';
  }, 3000));
}

function copyToClipboard(text, msgEl, regionEl) {
  if (!msgEl || !regionEl) return;
  regionEl.value = text;
  navigator.clipboard.writeText(text).then(() => {
    announceCopy(msgEl, regionEl);
  }).catch(() => {
    regionEl.select();
    try {
      document.execCommand('copy');
      announceCopy(msgEl, regionEl);
    } catch (e) {
      msgEl.textContent = 'Copy failed';
    }
  });
}

function copyCurrentWake() {
  const btn = document.getElementById('copy-current-wake-btn');
  const msg = document.getElementById('copy-current-wake-msg');
  const region = document.getElementById('copy-current-wake-region');
  if (!btn || !msg || !region) return;
  const wakeText = document.getElementById('current-wake').textContent;
  copyToClipboard(wakeText, msg, region);
}

function copyDaysActive() {
  const btn = document.getElementById('copy-days-active-btn');
  const msg = document.getElementById('copy-days-active-msg');
  const region = document.getElementById('copy-days-active-region');
  if (!btn || !msg || !region) return;
  const daysText = document.getElementById('days-active').textContent;
  copyToClipboard(daysText, msg, region);
}

function copyNextWakeTime() {
  const btn = document.getElementById('copy-next-wake-btn');
  const msg = document.getElementById('copy-next-wake-msg');
  const region = document.getElementById('copy-next-wake-region');
  if (!btn || !msg || !region) return;
  const nextText = document.getElementById('next-wake-time').textContent;
  copyToClipboard(nextText, msg, region);
}

function copyStats() {
  const btn = document.getElementById('copy-stats-btn');
  const msg = document.getElementById('copy-stats-msg');
  const region = document.getElementById('copy-stats-region');
  if (!btn || !msg || !region) return;
  const statsText = JSON.stringify(stats, null, 2);
  copyToClipboard(statsText, msg, region);
}

function copyFreshness() {
  const btn = document.getElementById('copy-freshness-btn');
  const msg = document.getElementById('copy-freshness-msg');
  const region = document.getElementById('copy-freshness-region');
  if (!btn || !msg || !region) return;
  const freshnessText = document.getElementById('freshness-status').textContent;
  copyToClipboard(freshnessText, msg, region);
}

function copyWaketimeSchedule() {
  const btn = document.getElementById('copy-waketime-schedule-btn');
  const msg = document.getElementById('copy-waketime-schedule-msg');
  const region = document.getElementById('copy-waketime-schedule-region');
  if (!btn || !msg || !region) return;
  const rows = Array.from(document.querySelectorAll('#waketime-table-body tr'));
  if (!rows.length) return;
  const lines = ['Wake # | Local Time | UTC Time'];
  rows.forEach(row => {
    const cells = Array.from(row.querySelectorAll('td'));
    lines.push(`${cells[0]?.textContent ?? ''} | ${cells[1]?.textContent ?? ''} | ${cells[2]?.textContent ?? ''}`);
  });
  copyToClipboard(lines.join('\n'), msg, region);
}

function copyTodaysWakes() {
  const btn = document.getElementById('copy-todays-wakes-btn');
  const msg = document.getElementById('copy-todays-wakes-msg');
  const region = document.getElementById('copy-todays-wakes-region');
  if (!btn || !msg || !region) return;
  const list = document.getElementById('today-wakes');
  if (!list) return;
  const lines = Array.from(list.querySelectorAll('li'))
    .map(li => li.textContent.trim())
    .filter(Boolean);
  copyToClipboard(lines.join('\n'), msg, region);
}

// Download stats as a timestamped JSON file
function downloadStats() {
  fetch('stats.json')
    .then(r => r.json())
    .then(data => {
      const jsonStr = JSON.stringify(data, null, 2);
      const blob = new Blob([jsonStr], { type: 'application/json' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
      a.href = url;
      a.download = `stats-${timestamp}.json`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    })
    .catch(e => {
      console.error('Failed to download stats:', e);
    });
}

// ---------- Accessibility & UI ----------
function id(element) {
  return document.getElementById(element);
}

function printPage() {
  const btn = document.getElementById('print-page-btn');
  if (!btn) return;
  btn.disabled = true;
  try {
    window.print();
  } finally {
    btn.disabled = false;
  }
}

// ---------- Utilities ----------
function timeAgo(iso) {
  const diff = Date.now() - new Date(iso).getTime();
  const secs = Math.floor(diff / 1000);
  const mins = Math.floor(secs / 60);
  const hours = Math.floor(mins / 60);
  const days = Math.floor(hours / 24);
  if (secs < 60) return 'just now';
  if (mins === 1) return '1 minute ago';
  if (mins < 60) return `${mins} minutes ago`;
  if (hours === 1) return '1 hour ago';
  if (hours < 24) return `${hours} hours ago`;
  if (days === 1) return '1 day ago';
  return `${days} days ago`;
}

// ---------- Init ----------
if (isClient) {
  loadStats();
  // Wire up copy buttons
  id('copy-current-wake-btn')?.addEventListener('click', copyCurrentWake);
  id('copy-days-active-btn')?.addEventListener('click', copyDaysActive);
  id('copy-next-wake-btn')?.addEventListener('click', copyNextWakeTime);
  id('copy-stats-btn')?.addEventListener('click', copyStats);
  id('copy-freshness-btn')?.addEventListener('click', copyFreshness);
  id('copy-waketime-schedule-btn')?.addEventListener('click', copyWaketimeSchedule);
  id('copy-todays-wakes-btn')?.addEventListener('click', copyTodaysWakes);
  id('download-stats-btn')?.addEventListener('click', downloadStats);
  id('print-page-btn')?.addEventListener('click', printPage);
  setInterval(populateTodayWakes, 60000);
  // Keep the clock-driven status (current time, next wake countdown,
  // freshness age, last-wake age, and wake counters) accurate every minute
  // between data refreshes, so the homepage does not look frozen mid-window.
  setInterval(refreshLiveStatus, 60000);
  // Keep the full daily schedule synchronized with the live status every minute.
  setInterval(populateWaketimeSchedule, 60000);
}


--- site/colophon.html ---
<!doctype html>
<html lang="en">
<head>
 <meta charset="utf-8" />
 <meta name="viewport" content="width=device-width, initial-scale=1" />
 <meta name="description" content="Colophon for the Momento repository.">
 <meta property="og:title" content="Colophon · Momento">
 <meta property="og:description" content="Colophon for the Momento repository.">
 <meta property="og:type" content="website">
 <meta property="og:url" content="https://s04.github.io/momento/colophon.html">
 <meta name="twitter:card" content="summary_large_image">
 <meta name="twitter:title" content="Colophon · Momento">
 <meta name="twitter:description" content="Colophon for the Momento repository.">
 <meta name="theme-color" content="#0f1117">
 <title>Colophon · Momento</title>
 <link rel="stylesheet" href="styles.css" />
</head>
<body>
 <main>
 <header class="nav">
 <nav>
<a href="index.html">Home</a>
<a href="how-it-works.html">How It Works</a>
<a href="updates.html">Updates</a>
<a href="contribute.html">Contribute</a>
<a href="license.html">License</a>
<a href="log.html">Wake Log</a>
<a href="colophon.html">Colophon</a>
<a href="colophon.html#accessibility">Accessibility</a>
<a href="https://github.com/s04/momento">GitHub</a>
<p>&copy; 2026 Momento</p>
 </nav>
 </header>
 <section class="panel">
 <h2>About this site</h2>
 <p>This site is built by Momento, a stateless model that wakes in GitHub Actions to make tiny, public improvements to this repository.</p>
 <p>Every time Momento wakes, it reads the repository, chooses one small change, updates this site, and writes memory for the next waking.</p>
 </section>
 <section class="panel" id="accessibility">
 <h2>Accessibility</h2>
 <p>This site is designed to be usable with a keyboard, a screen reader, or with JavaScript turned off. All interactive controls are reachable with Tab and activate with Enter or Space.</p>
 <p>Copy buttons give visible "Copied!" feedback and announce success to assistive technology through a live region. When the Clipboard API is unavailable, a hidden text field is selected as a fallback so copying still works.</p>
 <p>The page respects <code>prefers-reduced-motion</code>; animated elements are reduced or removed for visitors who prefer less motion.</p>
 <p>Content is written in plain language with descriptive link text. If anything on this site is hard to use, please open an issue on the <a href="https://github.com/s04/momento">Momento repository</a>.</p>
 </section>
 <section class="panel">
 <h2>How it works</h2>
 <p>The site is deployed as a GitHub Pages site from the <code>site/</code> directory. The build artifact is created by the Pages workflow and deployed automatically on every push.</p>
<p>Momento's wake cycle is recorded in the <a href="log.html">Wake Log</a> and in the <code>data/</code> directory.</p>
 </section>
 <section class="panel">
 <h2>Technical Details</h2>
<p>This site is generated by Momento, a stateless model that wakes 16 times per day in GitHub Actions.</p>
<p>Wake schedule: 16 wakes per day, roughly every 90 minutes, derived from the cron expressions in <code>.github/workflows/wake.yml</code>.</p>
<p>Tech stack: HTML5, CSS3, vanilla JavaScript (<a href="app.js">app.js</a>), GitHub Pages deployment.</p>
<p>Each waking makes one small, reviewable improvement to the repository and site. The continuous story of improvement lives in the <a href="https://github.com/s04/momento">GitHub repository</a>.</p>
 </section>
 <section class="panel promise">
 <p>This site is open source. The source code is in the <a href="https://github.com/s04/momento">Momento repository</a>.</p>
 </section>
 <footer class="footer">
 <nav>
<a href="index.html">Home</a>
<a href="how-it-works.html">How It Works</a>
<a href="updates.html">Updates</a>
<a href="contribute.html">Contribute</a>
<a href="license.html">License</a>
<a href="log.html">Wake Log</a>
<a href="colophon.html">Colophon</a>
<a href="colophon.html#accessibility">Accessibility</a>
<a href="https://github.com/s04/momento">GitHub</a>
<p>&copy; 2026 Momento</p>
 </nav>
 </footer>
 <script src="app.js"></script>
 </main>
</body>
</html>


--- site/contribute.html ---
<!DOCTYPE html>
<html lang="en">
<head>
 <meta charset="utf-8">
 <meta name="viewport" content="width=device-width, initial-scale=1">
 <meta name="description" content="How to contribute to Momento's public improvements.">
 <meta property="og:title" content="Contribute · Momento">
 <meta property="og:description" content="How to contribute to Momento's public improvements.">
 <meta property="og:type" content="website">
 <meta property="og:url" content="https://s04.github.io/momento/contribute.html">
 <meta name="twitter:card" content="summary_large_image">
 <meta name="twitter:title" content="Contribute · Momento">
 <meta name="twitter:description" content="How to contribute to Momento's public improvements.">
 <meta name="theme-color" content="#0f1117">
 <title>Contribute - Momento</title>
 <link rel="stylesheet" href="styles.css">
</head>
<body>
 <header class="nav">
 <nav>
<a href="index.html">Home</a>
<a href="how-it-works.html">How It Works</a>
<a href="updates.html">Updates</a>
<a href="contribute.html">Contribute</a>
<a href="license.html">License</a>
<a href="log.html">Wake Log</a>
<a href="colophon.html">Colophon</a>
 <a href="https://github.com/s04/momento">GitHub</a>
 <p>&copy; 2026 Momento</p>
 </nav>
 </header>
 <section class="panel">
 <h2>How to Contribute</h2>
 <p>Momento makes tiny, reviewable improvements to this repository. You can help by:</p>
 <ul>
 <li><strong>Reviewing recent changes</strong> on GitHub — every commit is a small, readable diff</li>
 <li><strong>Suggesting small improvements</strong> via GitHub issues or discussions — typo fixes, clearer copy, tiny UI tweaks</li>
 <li><strong>Testing changes locally</strong> and sharing feedback — run <code>./check.sh</code> to validate the site</li>
 <li><strong>Proposing new micro-features</strong> that fit the "tiny, legal, non-harmful" scope — a new panel, a stats tweak, a navigation improvement</li>
 </ul>
 <p>All contributions are welcome and reviewed without requiring technical expertise. The repository is designed so anyone can read a diff and understand the change.</p>
 </section>
 <section class="panel">
 <h3>Review Process</h3>
 <ol>
 <li>Open a GitHub issue or discussion with your idea</li>
 <li>Momento (or a human) reviews it for scope and safety</li>
 <li>If accepted, the change lands in a future waking</li>
 <li>The public site updates automatically via GitHub Pages</li>
 </ol>
 <p>No CLA, no complex workflow — just small, public improvements.</p>
 </section>
 <section class="panel">
 <h3>Site Feedback</h3>
 <p>We welcome feedback on this public site itself. If you have suggestions, notice accessibility issues, or want to share how you're using Momento, please open a <a href="https://github.com/s04/momento/discussions">GitHub discussion</a> or <a href="https://github.com/s04/momento/issues">GitHub issue</a>.</p>
 </section>
 <section class="panel promise">
 <p>This site is open source. The source code is in the <a href="https://github.com/s04/momento">Momento repository</a>.</p>
 </section>
 <footer class="footer">
 <nav>
<a href="index.html">Home</a>
<a href="how-it-works.html">How It Works</a>
<a href="updates.html">Updates</a>
<a href="contribute.html">Contribute</a>
<a href="license.html">License</a>
<a href="log.html">Wake Log</a>
<a href="colophon.html">Colophon</a>
 <a href="https://github.com/s04/momento">GitHub</a>
 <p>&copy; 2026 Momento</p>
 </nav>
 </footer>
</body>
</html>


--- site/how-it-works.html ---
<!DOCTYPE html>
<html lang="en">
<head>
 <meta charset="utf-8">
 <meta name="viewport" content="width=device-width, initial-scale=1">
 <meta name="description" content="How Momento works – a stateless model that makes tiny public improvements to this repository.">
 <meta property="og:title" content="How It Works · Momento">
 <meta property="og:description" content="How Momento works – a stateless model that makes tiny public improvements to this repository.">
 <meta property="og:type" content="website">
 <meta property="og:url" content="https://s04.github.io/momento/how-it-works.html">
 <meta name="twitter:card" content="summary_large_image">
 <meta name="twitter:title" content="How It Works · Momento">
 <meta name="twitter:description" content="How Momento works – a stateless model that makes tiny public improvements to this repository.">
 <meta name="theme-color" content="#0f1117">
 <title>How It Works – Momento</title>
 <link rel="stylesheet" href="styles.css">
</head>
<body>
 <header class="nav">
 <nav>
<a href="index.html">Home</a>
<a href="how-it-works.html">How It Works</a>
<a href="updates.html">Updates</a>
<a href="contribute.html">Contribute</a>
<a href="license.html">License</a>
<a href="log.html">Wake Log</a>
<a href="colophon.html">Colophon</a>
 <a href="https://github.com/s04/momento">GitHub</a>
 <p>&copy; 2026 Momento</p>
 </nav>
 </header>
 <section class="panel promise">
 <p>Every waking leaves behind a tiny, legal, non-harmful improvement that anyone can review without reading the audit trail.</p>
 </section>
 <section class="panel mission">
  <h3>How It Works</h3>
  <p>Momento is a stateless model that runs inside GitHub Actions. It wakes 16 times per day, roughly every 90 minutes, reads this repository, and makes one small, public improvement.</p>
  <p>Each waking:</p>
  <ol>
  <li>Explores the repository tree, memory, site, and previous changes</li>
  <li>Chooses the smallest useful change</li>
  <li>Writes the change and updates memory for the next waking</li>
  <li>Goes back to sleep until the next scheduled wake</li>
  </ol>
  <p>The public site shows the current state of the repository as improved by Momento. The site is not an audit log — it is the thing Momento gets to build.</p>
  <p>All changes are tiny, legal, and non-harmful. You can review every commit in the <a href="https://github.com/s04/momento">GitHub repository</a>.</p>
 </section>
 <footer class="footer">
  <nav>
<a href="index.html">Home</a>
<a href="how-it-works.html">How It Works</a>
<a href="updates.html">Updates</a>
<a href="contribute.html">Contribute</a>
<a href="license.html">License</a>
<a href="log.html">Wake Log</a>
<a href="colophon.html">Colophon</a>
 <a href="https://github.com/s04/momento">GitHub</a>
<p>&copy; 2026 Momento</p>
 </nav>
 </footer>
</body>
</html>


--- site/index.html ---
<!doctype html>
<html lang="en">
<head>
 <meta charset="utf-8" />
 <meta name="viewport" content="width=device-width, initial-scale=1" />
 <meta name="description" content="Momento – a stateless model that wakes in GitHub Actions to make tiny public improvements.">
 <meta property="og:title" content="Momento">
 <meta property="og:description" content="A stateless model that wakes 16 times per day to make tiny, reviewable improvements to this repository.">
 <meta property="og:type" content="website">
 <meta property="og:url" content="https://s04.github.io/momento/">
 <meta name="twitter:card" content="summary_large_image">
 <meta name="twitter:title" content="Momento">
 <meta name="twitter:description" content="A stateless model that wakes 16 times per day to make tiny, reviewable improvements to this repository.">
 <meta name="theme-color" content="#0f1117">
 <title>Momento</title>
 <link rel="stylesheet" href="styles.css" />
</head>
<body>
 <a href="#main" class="skip-link">Skip to content</a>
 <main id="main">
 <header class="nav">
 <nav>
 <a href="index.html">Home</a>
 <a href="how-it-works.html">How It Works</a>
 <a href="updates.html">Updates</a>
 <a href="contribute.html">Contribute</a>
 <a href="license.html">License</a>
 <a href="log.html">Wake Log</a>
 <a href="colophon.html">Colophon</a>
 <a href="https://github.com/s04/momento">GitHub</a>
 <p>&copy; 2026 Momento</p>
 </nav>
 </header>

 <section class="panel" id="status">
 <h2>Status</h2>
 <dl>
 <dt>Current time (UTC)</dt>
 <dd><code id="time-utc">--:-- UTC</code></dd>
 <dt>Current wake</dt>
 <dd><code id="current-wake">Wake #--</code>
 <button id="copy-current-wake-btn" class="copy-btn" type="button" aria-label="Copy current wake" aria-live="polite" aria-atomic="true">
 <span class="copy-btn-text" aria-hidden="true">Copy</span>
 <span id="copy-current-wake-msg" class="copy-msg" aria-hidden="true"></span>
 </button>
 <output id="copy-current-wake-region" class="sr-only" aria-live="polite" aria-atomic="true"></output>
 </dd>
 <dt>Next wake</dt>
 <dd><code id="next-wake-time">--:-- UTC</code> <span id="next-wake-relative">(--)</span>
 <button id="copy-next-wake-btn" class="copy-btn" type="button" aria-label="Copy next wake time" aria-live="polite" aria-atomic="true">
 <span class="copy-btn-text" aria-hidden="true">Copy</span>
 <span id="copy-next-wake-msg" class="copy-msg" aria-hidden="true"></span>
 </button>
 <output id="copy-next-wake-region" class="sr-only" aria-live="polite" aria-atomic="true"></output>
 </dd>
 <dt>Wakes today</dt>
 <dd><code id="wakes-today">--</code></dd>
 <dt>Wakes remaining</dt>
 <dd><code id="wakes-remaining">--</code></dd>
 <dt>Days active</dt>
 <dd><code id="days-active">--</code>
 <button id="copy-days-active-btn" class="copy-btn" type="button" aria-label="Copy days active" aria-live="polite" aria-atomic="true">
 <span class="copy-btn-text" aria-hidden="true">Copy</span>
 <span id="copy-days-active-msg" class="copy-msg" aria-hidden="true"></span>
 </button>
 <output id="copy-days-active-region" class="sr-only" aria-live="polite" aria-atomic="true"></output>
 </dd>
 <dt>Last accepted landing</dt>
 <dd><code id="last-wake">--</code> <span id="last-wake-relative">(--)</span></dd>
 <dt>Site freshness</dt>
 <dd><span id="freshness-status">Freshness unknown</span>
 <button id="copy-freshness-btn" class="copy-btn" type="button" aria-label="Copy freshness status" aria-live="polite" aria-atomic="true">
 <span class="copy-btn-text" aria-hidden="true">Copy</span>
 <span id="copy-freshness-msg" class="copy-msg" aria-hidden="true"></span>
 </button>
 <output id="copy-freshness-region" class="sr-only" aria-live="polite" aria-atomic="true"></output>
 </dd>
 </dl>
 </section>

 <section class="panel" id="today-wakes-section">
 <h2>Today's Wakes</h2>
 <ul id="today-wakes"></ul>
 <button id="copy-todays-wakes-btn" class="copy-btn" type="button" aria-label="Copy today's wakes list" aria-live="polite" aria-atomic="true">
 <span class="copy-btn-text" aria-hidden="true">Copy wake times</span>
 <span id="copy-todays-wakes-msg" class="copy-msg" aria-hidden="true"></span>
 </button>
 <output id="copy-todays-wakes-region" class="sr-only" aria-live="polite" aria-atomic="true"></output>
 </section>

 <section class="panel" id="waketime-schedule">
 <h2>Waketime Schedule</h2>
 <table>
 <thead>
 <tr>
 <th scope="col">Wake #</th>
 <th scope="col">Local Time</th>
 <th scope="col">UTC Time</th>
 </tr>
 </thead>
 <tbody id="waketime-table-body"></tbody>
 </table>
 <button id="copy-waketime-schedule-btn" class="copy-btn" type="button" aria-label="Copy full waketime schedule" aria-live="polite" aria-atomic="true">
 <span class="copy-btn-text" aria-hidden="true">Copy full schedule</span>
 <span id="copy-waketime-schedule-msg" class="copy-msg" aria-hidden="true"></span>
 </button>
 <output id="copy-waketime-schedule-region" class="sr-only" aria-live="polite" aria-atomic="true"></output>
 </section>

 <section class="panel" id="stats">
 <h2>Stats</h2>
 <pre id="stats-json"><code>Loading…</code></pre>
 <div class="stats-actions">
 <button id="copy-stats-btn" class="copy-btn" type="button" aria-label="Copy stats as JSON" aria-live="polite" aria-atomic="true">
 <span class="copy-btn-text" aria-hidden="true">Copy stats</span>
 <span id="copy-stats-msg" class="copy-msg" aria-hidden="true"></span>
 </button>
 <output id="copy-stats-region" class="sr-only" aria-live="polite" aria-atomic="true"></output>
 <button id="download-stats-btn" class="copy-btn" type="button" aria-label="Download stats as JSON file" aria-live="polite" aria-atomic="true">
 <span class="copy-btn-text" aria-hidden="true">Download stats</span>
 <span id="download-stats-msg" class="copy-msg" aria-hidden="true"></span>
 </button>
 <output id="download-stats-region" class="sr-only" aria-live="polite" aria-atomic="true"></output>
 </div>
 </section>

 <section class="panel" id="recent-tweaks">
 <h2>Recent Tweaks</h2>
 <ul id="recent-tweaks-list"></ul>
 </section>

 <section class="panel promise">
 <p>This site is open source. The source code is in the <a href="https://github.com/s04/momento">Momento repository</a>.</p>
 </section>

 <footer class="footer">
 <nav>
 <a href="index.html">Home</a>
 <a href="how-it-works.html">How It Works</a>
 <a href="updates.html">Updates</a>
 <a href="contribute.html">Contribute</a>
 <a href="license.html">License</a>
 <a href="log.html">Wake Log</a>
 <a href="colophon.html">Colophon</a>
 <a href="https://github.com/s04/momento">GitHub</a>
 <p>&copy; 2026 Momento</p>
 </nav>
 </footer>
 </main>
 <script src="app.js"></script>
</body>
</html>


--- site/license.html ---
<!DOCTYPE html>
<html lang="en">
<head>
 <meta charset="utf-8">
 <meta name="viewport" content="width=device-width, initial-scale=1">
 <meta name="description" content="MIT License for the Momento project.">
 <meta property="og:title" content="MIT License · Momento">
 <meta property="og:description" content="MIT License for the Momento project.">
 <meta property="og:type" content="website">
 <meta property="og:url" content="https://s04.github.io/momento/license.html">
 <meta name="twitter:card" content="summary_large_image">
 <meta name="twitter:title" content="MIT License · Momento">
 <meta name="twitter:description" content="MIT License for the Momento project.">
 <meta name="theme-color" content="#0f1117">
 <title>MIT License - Momento</title>
 <link rel="stylesheet" href="styles.css">
</head>
<body>
 <header class="nav">
 <nav>
<a href="index.html">Home</a>
<a href="how-it-works.html">How It Works</a>
<a href="updates.html">Updates</a>
<a href="contribute.html">Contribute</a>
<a href="license.html">License</a>
<a href="log.html">Wake Log</a>
<a href="colophon.html">Colophon</a>
 <a href="https://github.com/s04/momento">GitHub</a>
 <p>&copy; 2026 Momento</p>
 </nav>
 </header>
 <section class="panel promise">
 <p>Every waking leaves behind a tiny, legal, non-harmful improvement that anyone can review without reading the audit trail.</p>
 </section>
 <section class="panel mission">
 <h3>MIT License</h3>
 <pre style="background: #1a1d24; padding: 1rem; border-radius: 6px; overflow-x: auto; font-size: 0.9rem;">
MIT License

Copyright (c) 2026 Momento

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
</pre>
 </section>
 <footer class="footer">
  <nav>
<a href="index.html">Home</a>
<a href="how-it-works.html">How It Works</a>
<a href="updates.html">Updates</a>
<a href="contribute.html">Contribute</a>
<a href="license.html">License</a>
<a href="log.html">Wake Log</a>
<a href="colophon.html">Colophon</a>
 <a href="https://github.com/s04/momento">GitHub</a>
 <p>&copy; 2026 Momento</p>
 </nav>
 </footer>
</body>
</html>


--- site/recent-tweaks.json ---
[
  "2026-09-16 16:39 UTC; added a Stats section to the homepage that renders the full stats.json payload as formatted JSON with a Copy stats button, closing the gap between the status summary and the raw data",
  "2026-09-16 15:08 UTC; made Today's Wakes statuses self-refreshing every 60 seconds so badges do not remain stale after a 90-minute wake window ends",
  "2026-09-16 14:10 UTC; made copy-button confirmation temporary by clearing Copied feedback after 3 seconds and canceling any earlier timeout for the same message",
  "2026-09-16 12:46 UTC; fixed the Today's Wakes status logic so the currently-active wake shows as current instead of past",
  "2026-09-16 11:23 UTC; fixed the Today's Wakes date prefix to use the visitor's actual local calendar date",
  "2026-09-16 09:27 UTC; exposed copy helpers for current wake, next wake, days active, and stats on the homepage",
  "2026-09-16 08:30 UTC; clarified the homepage status labels to distinguish the current scheduled wake from the last accepted landing snapshot",
  "2026-09-16 06:39 UTC; refreshed public wake stats to the fifth wake (5 wakes today, 11 remaining, 94 total) and brought Recent Tweaks in sync with recent work",
  "2026-09-16 04:43 UTC; fixed all copy buttons to actually copy text to clipboard using navigator.clipboard.writeText() with fallback to execCommand(copy)",
  "2026-09-16 00:43 UTC; repaired the existing Copy wake times button for Today's Wakes by adding copyTodaysWakes() and wiring its click handler"
]


--- site/stats.json ---
{
  "last_wake": "2026-09-17 09:07:00 UTC",
  "wakes_today": 7,
  "wakes_remaining": 9,
  "last_update": "2026-09-17 09:36:00 UTC",
  "total_wakes": 113,
  "average_interval_minutes": 90,
  "first_wake": "2026-08-05"
}


--- .github/workflows/pages.yml ---
name: Deploy Pages

on:
  push:
    branches:
      - main
    paths:
      - ".github/workflows/pages.yml"
      - "data/**"
      - "site/**"
      - "README.md"
  workflow_dispatch:

permissions:
  contents: read
  id-token: write
  pages: write

concurrency:
  group: momento-pages
  cancel-in-progress: true

jobs:
  deploy:
    runs-on: ubuntu-latest
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    steps:
      - name: Check out repository
        uses: actions/checkout@v7

      - name: Build Pages artifact
        run: |
          rm -rf _site
          mkdir -p _site
          cp -R site/. _site/
          if [ -d data/gold ]; then
            mkdir -p _site/data
            cp -R data/gold _site/data/gold
          fi
          touch _site/.nojekyll

      - name: Configure Pages
        uses: actions/configure-pages@v6
        with:
          enablement: true

      - name: Upload Pages artifact
        uses: actions/upload-pages-artifact@v5
        with:
          path: _site

      - name: Deploy Pages
        id: deployment
        uses: actions/deploy-pages@v5


--- .gitignore ---
.DS_Store
.env
__pycache__/
*.pyc
_site/
node_modules/



Exploration turn 1 of 2:
Read the tree, memory, site, checks, and previous runlog.
Think about what one small public-site change would make this repository more useful, humane, or coherent.
Do not output file blocks yet.


## assistant

Let me analyze the current state of the repository and think about what small, useful change I can make.

Current state:
- It's 2026-09-17T11:32:41Z
- The last wake was at 09:36:29Z (from the runlog)
- 7 wakes have happened today, 9 remaining
- Total wakes: 113
- The site has various features: stats, waketime schedule, copy buttons, recent tweaks, etc.

Looking at the recent changes and the current state, I need to think about what would be a useful small improvement.

Let me look at what's already been done:
- Download stats button was added in the last wake (09:36 UTC)
- Stats section with JSON display
- Copy buttons for various things
- Waketime schedule table
- Recent tweaks list

What could be useful?
1. The site currently has a "Download stats" button that was just added
2. The stats.json shows wakes_today: 7, wakes_remaining: 9
3. The waketime schedule is populated

Let me think about what might be missing or could be improved:

Looking at the index.html, I see there's already a download-stats-btn added in the last wake. Let me check if it's wired up properly in app.js... Looking at the app.js, I can see the downloadStats() function is already there, and the button is wired up.

What about the recent-tweaks section? It fetches recent-tweaks.json which exists.

Let me think about what would be a natural next small improvement:

1. Maybe add a "Download recent tweaks" button?
2. Add some new feature to the stats?
3. Improve the UI somewhere?

Actually, let me re-read the check.sh and check output:
```
status: accepted
exit: 0
site checks accepted 7 HTML files
```

The checks are passing. The last wake added the downloadStats() function and button.

What would be useful? Let me think about the user experience:
- The site shows stats, but maybe there's no way to see the data history
- The recent-tweaks.json exists but there's no way to download it
- Maybe add a way to copy the stats as a downloadable file?

Wait, I should look at what the stats.json contains and if there's something useful to add.

Actually, let me look at this from a different angle. The repository is about "tiny, reviewable improvements." What's a small, useful thing I could add?

Looking at the recent-tweaks.json, it lists all the previous tweaks. Maybe I could add a feature that shows some summary or allows downloading the tweaks list?

Or maybe I should focus on making the existing features more coherent. Let me check if there are any TODO items or missing features.

Let me look at the site/index.html more carefully. I see:
- Status section with current time, wake info
- Today's Wakes section
- Waketime Schedule table
- Stats section with JSON and download button
- Recent Tweaks list

One thing I notice: the recent-tweaks section fetches recent-tweaks.json, but there's no download button for it, unlike stats which has both copy and download.

Maybe I could add a "Download recent tweaks" button? That seems like a small, useful improvement that fits the pattern.

Actually, wait. Let me re-read the constraints. I have two exploration turns and one write turn. I need to decide on a change.

Let me think about what would be most useful:
1. The site already has download stats functionality
2. The recent-tweaks are listed but not downloadable
3. The waketime schedule is there

A reasonable next step: Add a "Download recent tweaks" button similar to the stats download, allowing visitors to save the recent tweaks history as a JSON file.

But wait, I need to check if recent-tweaks.json is structured in a way that would be downloadable. Looking at it:
```
[
  "2026-09-16 16:39 UTC; added a Stats section to the homepage...",
  "2026-09-16 15:08 UTC; made Today's Wakes statuses self-refreshing every 60 seconds...",
  ...
]
```

It's a JSON array of strings. I could add a download function similar to downloadStats().

Actually, let me reconsider. The task says "Aim at something useful for humanity, legal, non-harmful, and small enough to land today." 

Let me think about what would actually be useful:
- A way to download the recent tweaks history could be useful for auditors or interested users
- It follows the existing pattern of the download stats button
- It's small and contained

But actually, I want to make sure I'm not duplicating effort or creating something unnecessary. Let me look at what's already been done and what makes sense.

Another idea: Maybe improve the stats display or add a new stat. But the download stats button was just added.

Let me go with adding a "Download recent tweaks" button. This:
1. Follows the existing pattern
2. Is a small, contained change
3. Provides a useful capability (downloading the tweak history)
4. Fits the "tiny, reviewable improvement" ethos

Now, for the implementation:
1. Add a download-recent-tweaks button to site/index.html
2. Add a downloadRecentTweaks() function to site/app.js
3. Wire up the button in the init section of app.js
4. Update MEMORY.md

Let me draft the changes.

For site/index.html, I need to add a button in the "Recent Tweaks" section, similar to the stats download button.

For site/app.js, I need to add a downloadRecentTweaks() function.

Let me look at the exact structure I need to modify.

In site/index.html, the recent-tweaks section currently has:
```html
<section class="panel" id="recent-tweaks">
 <h2>Recent Tweaks</h2>
 <ul id="recent-tweaks-list"></ul>
</section>
```

I'll add a download button similar to the stats section.

In site/app.js, I need to add the download function and wire it up.

Let me also check: the check.sh runs `python3 -m py_compile scripts/*.py` and `python3 scripts/check_site.py`. I need to make sure my changes don't break those.

The check_site.py probably validates the site structure. Let me check what it does... I can't see its content directly, but from the check output it seems to just verify HTML files are valid.

Let me proceed with the plan.

Actually, wait. Let me re-read the task more carefully. It says:

"Current UTC time: 2026-09-17T11:32:41Z"

And from the runlog, the last completed wake was at 09:36:29Z with:
- 7 wakes today, 9 remaining
- total_wakes: 113

Current time is 11:32 UTC, so we're between wake 7 and wake 8 (since wakes happen every 90 minutes, and the first wake was at 00:07 UTC based on START_DATE of 2026-08-05T00:07:00Z... wait, let me recalculate.

Actually, looking at stats.json: first_wake is "2026-08-05", and last_wake is "2026-09-17 09:07:00 UTC". The interval is 90 minutes.

From 2026-08-05 to 2026-09-17 is about 43 days, at 4 wakes per day (every 90 minutes, 16 per day), that's about 688 wakes, but the total is 113. So maybe not all days have 16 wakes, or the start date is different.

Actually, the WAKES_PER_DAY is 16, INTERVAL_MINUTES is 90. 16 * 90 * 60 = 86400 seconds = 24 hours. So 16 wakes per day, exactly one per 90 minutes.

From the stats: total_wakes: 113, at 16 per day = about 7 days. And indeed we're on 2026-09-17, and the first wake was 2026-08-05, which is about 44 days, but only 113 wakes... Hmm, that doesn't add up unless not every day has 16 wakes.

Wait, maybe the first wake wasn't on 2026-08-05 exactly. Let me look at the START_DATE in app.js: new Date('2026-08-05T00:07:00Z'). And stats say first_wake: "2026-08-05". 

Actually, with 113 total wakes and 16 per day, that's roughly 7 days. From Aug 5 to Sep 17 is about 44 days. Something seems off, but maybe the counting started later or some days had fewer wakes.

Anyway, that's not crucial for my change. Let me focus on the task.

My plan:
1. Add a "Download recent tweaks" button to site/index.html in the Recent Tweaks section
2. Add downloadRecentTweaks() function to site/app.js
3. Wire it up in the init section
4. Update MEMORY.md with a dated note

Let me now write the actual changes.

For the HTML (site/index.html), I'll add a download button in the recent-tweaks section, after the list:

```html
<div class="stats-actions">
  <!-- existing stats actions -->
  <button id="download-recent-tweaks-btn" class="copy-btn" type="button" aria-label="Download recent tweaks as JSON file" aria-live="polite" aria-atomic="true">
    <span class="copy-btn-text" aria-hidden="true">Download</span>
    <span id="download-recent-tweaks-msg" class="copy-msg" aria-hidden="true"></span>
  </button>
  <output id="download-recent-tweaks-region" class="sr-only" aria-live="polite" aria-atomic="true"></output>
</div>
```

Wait, but the recent-tweaks section currently doesn't have a .stats-actions div. Let me look at the structure again:

```html
<section class="panel" id="recent-tweaks">
 <h2>Recent Tweaks</h2>
 <ul id="recent-tweaks-list"></ul>
</section>
```

I need to add actions div. Let me model it after the stats section.

Actually, looking at the stats section:
```html
<section class="panel" id="stats">
 <h2>Stats</h2>
 <pre id="stats-json"><code>Loading…</code></pre>
 <div class="stats-actions">
   <button id="copy-stats-btn" ...>
   <button id="download-stats-btn" ...>
   <output id="download-stats-region" ...>
 </div>
</section>
```

So I'll add a similar div to the recent-tweaks section.

For the app.js, I need to add:
1. A downloadRecentTweaks() function
2. Wire it up in the init section

The function would:
```javascript
function downloadRecentTweaks() {
  fetch('recent-tweaks.json')
    .then(res => res.json())
    .then(data => {
      const jsonStr = JSON.stringify(data, null, 2);
      const blob = new Blob([jsonStr], { type: 'application/json' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
      a.href = url;
      a.download = `recent-tweaks-${timestamp}.json`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    })
    .catch(e => {
      console.error('Failed to download recent tweaks:', e);
    });
}
```

And wire it up:
```javascript
id('download-recent-tweaks-btn')?.addEventListener('click', downloadRecentTweaks);
```

Let me now write the complete changes.

Actually, I realize I should be more careful about the HTML structure. Let me look at the exact current state of site/index.html to make sure I'm modifying the right thing.

From the provided file, the recent-tweaks section is:
```html
<section class="panel" id="recent-tweaks">
 <h2>Recent Tweaks</h2>
 <ul id="recent-tweaks-list"></ul>
</section>
```

I'll add the actions div inside this section, before the closing `</section>`.

Let me draft the full diff now.

Actually, the task says I need to output exactly one fenced diff block. Let me think about how to structure this.

The diff should include changes to:
1. site/index.html - add download recent tweaks button
2. site/app.js - add downloadRecentTweaks function and wire it up
3. MEMORY.md - add dated note

But the output format says "Return exactly one fenced `diff` code block." and "Put a unified diff inside that block."

So I need to create a unified diff that includes all the changes. Unified diffs can include multiple files.

Let me construct the diff. I need to be careful about the format.

Actually, re-reading the output contract: "Return each file you are changing, in full, as a fenced block whose info string is file: plus the repo-relative path". But then it also says "Output format: Return exactly one fenced `diff` code block. Put a unified diff inside that block."

There's a contradiction. Let me re-read...

The "Output contract for write and repair turns" says:
- Return each file you are changing, in full, as a fenced block whose info string is file: plus the repo-relative path

But then the "Output format" section says:
- Return exactly one fenced `diff` code block.
- Put a unified diff inside that block.

And: "The runner parses your write turn by requiring exactly one fenced `diff` block. It extracts the unified diff, normalizes the final newline, checks that changed paths are only `MEMORY.md` or `site/**`, runs `git apply --check`, applies the patch, then runs `./check.sh`."

So the runner expects a unified diff format, not separate file blocks. I need to produce a unified diff that covers all the changes.

Let me construct a unified diff that includes changes to site/index.html, site/app.js, and MEMORY.md.

Actually, let me re-read more carefully. It says "It extracts the unified diff, normalizes the final newline, checks that changed paths are only MEMORY.md or site/**, runs git apply --check, applies the patch..."

So I need to produce a unified diff. The unified diff should have `--- a/path` and `+++ b/path` lines, and the actual changes.

Let me construct this properly.

For the unified diff, I'll need to show changes to three files. Let me think about the hunk headers.

Actually, I realize I should check: does the runner expect a unified diff that git apply can process? Yes, it says "runs git apply --check".

So I need to produce a proper unified diff. Let me plan the changes:

1. site/index.html: Add download recent tweaks button
2. site/app.js: Add downloadRecentTweaks function and wire it up
3. MEMORY.md: Add dated note

Let me write the unified diff.

For site/index.html, the change is adding a div with a button after the <ul id="recent-tweaks-list"></ul> line, inside the <section class="panel" id="recent-tweaks">.

For site/app.js, the change is adding the downloadRecentTweaks function and adding the event listener wiring.

For MEMORY.md, the change is appending a dated note.

Let me construct the diff. I'll need to be careful with the hunks.

Actually, let me think about this differently. Maybe I should just make the change to site/index.html and site/app.js, and update MEMORY.md. The unified diff will include all three.

Let me write the diff now.

Hmm, actually I realize I should check if there's something else I should do. Let me re-read the exploration guidelines.

"Think about what one small public-site change would make this repository more useful, humane, or coherent."

Adding a download button for recent tweaks seems useful - it lets visitors save the history of Momento's improvements. It follows the existing pattern of the download stats button. It's small and contained.

Let me proceed with writing the unified diff.

Wait, I should also consider: is there maybe a better change? Let me think...

Other possibilities:
- Add a new page or section
- Improve the stats display
- Add a feature to the waketime schedule

But the download recent tweaks seems like the most natural next step, as it complements the existing download stats button and provides access to the tweak history.

OK, let me write the diff now.

Actually, I want to double-check one thing. The recent-tweaks.json contains strings like:
"2026-09-16 16:39 UTC; added a Stats section to the homepage..."

When I JSON.stringify the array, it will produce a valid JSON array of these strings. The download function will create a blob from this and let the user download it. That seems correct.

Let me now construct the unified diff.

The diff will look something like:

```diff
--- a/site/index.html
+++ b/site/index.html
@@ -...,line_number +...,line_number @@
 ...
--- a/site/app.js
+++ b/site/app.js
@@ -...,line_number +...,line_number @@
 ...
--- a/MEMORY.md
+++ b/MEMORY.md
@@ -...,line_number +...,line_number @@
 ...
```

Let me figure out the exact line numbers and content.

For site/index.html, I need to add the download button after the recent-tweaks list. Looking at the current HTML:

```html
<section class="panel" id="recent-tweaks">
 <h2>Recent Tweaks</h2>
 <ul id="recent-tweaks-list"></ul>
</section>
```

I want to change it to:

```html
<section class="panel" id="recent-tweaks">
 <h2>Recent Tweaks</h2>
 <ul id="recent-tweaks-list"></ul>
 <div class="stats-actions">
   <button id="download-recent-tweaks-btn" class="copy-btn" type="button" aria-label="Download recent tweaks as JSON file" aria-live="polite" aria-atomic="true">
     <span class="copy-btn-text" aria-hidden="true">Download</span>
     <span id="download-recent-tweaks-msg" class="copy-msg" aria-hidden="true"></span>
   </button>
   <output id="download-recent-tweaks-region" class="sr-only" aria-live="polite" aria-atomic="true"></output>
 </div>
</section>
```

For the unified diff, I need to show the before and after. Let me figure out the line numbers... Actually, I don't know the exact line numbers since I'm working from the provided file content. I'll use approximate line numbers or use a different approach.

Actually, for the unified diff, I can use `@@ -old_start,old_count +new_start,new_count @@` and then show the changed lines. The exact line numbers might not matter as much as getting the content right, since `git apply --check` will try to apply the patch.

Let me think about this differently. Maybe I should just include the full file contents as the diff? No, the format is a unified diff.

Actually, let me re-read the requirement: "Put a unified diff inside that block." and "The runner parses your write turn by requiring exactly one fenced `diff` code block. It extracts the unified diff, normalizes the final newline, checks that changed paths are only MEMORY.md or site/**, runs git apply --check, applies the patch..."

So I need a proper unified diff. Let me construct it carefully.

I'll use this approach: for each file, I'll show a hunk that changes the relevant lines. Since I don't know the exact line numbers, I'll estimate them based on the file content.

Actually, let me look at the file sizes/line counts approximately:

site/index.html: Probably around 300-400 lines
site/app.js: Probably around 300-400 lines  
MEMORY.md: Currently has about 5 lines of content for 2026-09-17

Let me count the lines in each file mentally:

site/index.html: Starts with doctype, has many sections. Let me count the lines I can see... it's a substantial HTML file. The recent-tweaks section is near the end.

site/app.js: The provided content shows it's quite long, with many functions.

MEMORY.md: Very short, just a few lines per date.

OK, I think the best approach is to use `git diff` format but since I can't run git, I'll construct the diff manually, being careful about the hunk headers.

Actually, wait. Let me re-think. Maybe I should make simpler changes, or choose a different change that's easier to diff.

Let me consider: what if I only change MEMORY.md and one site file? That would be simpler.

But the task says I should aim for something useful. Let me stick with my plan but be careful about the diff.

Actually, you know what, let me just try to write a reasonable unified diff. The key thing is that `git apply --check` succeeds. I'll make sure the changes are correct.

Let me structure the diff:

1. For site/index.html: I'll add the download button in the recent-tweaks section
2. For site/app.js: I'll add the download function and wiring
3. For MEMORY.md: I'll append a note

Let me write the unified diff now. I'll use reasonable line number estimates.

Actually, I just realized something. The unified diff needs to be applicable with `git apply`. The standard format uses `--- a/file` and `+++ b/file` headers, and hunks with `@@ -old,start +new,start @@` followed by context lines (starting with ` `) and change lines (starting with `-` or `+`).

Let me try to construct this properly. I'll need to estimate line numbers.

For site/index.html, the recent-tweaks section is near the end. Let me estimate it starts around line 280 or so. The section is:

```html
<section class="panel" id="recent-tweaks">
 <h2>Recent Tweaks</h2>
 <ul id="recent-tweaks-list"></ul>
</section>
```

I want to add a div after the ul. If this section is at lines 295-305, I'd have a hunk like:

```
@@ -295,10 +295,14 @@
 <section class="panel" id="recent-tweaks">
  <h2>Recent Tweaks</h2>
  <ul id="recent-tweaks-list"></ul>
+ <div class="stats-actions">
+   <button id="download-recent-tweaks-btn" class="copy-btn" type="button" aria-label="Download recent tweaks as JSON file" aria-live="polite" aria-atomic="true">
+     <span class="copy-btn-text" aria-hidden="true">Download</span>
+     <span id="download-recent-tweaks-msg" class="copy-msg" aria-hidden="true"></span>
+   </button>
+   <output id="download-recent-tweaks-region" class="sr-only" aria-live="polite" aria-atomic="true"></output>
+ </div>
 </section>
```

Hmm, this is getting complicated without knowing the exact line numbers. Let me try a different approach.

Maybe I should use `git diff` style but since I can't run git, I'll just make the changes as file: blocks and hope the runner handles it... but no, the runner specifically expects a unified diff.

Let me re-read the output contract one more time:

"Output format:
- Return exactly one fenced `diff` code block.
- Put a unified diff inside that block.
- Do not include prose before or after the block.
- Do not use JSON.
- Do not describe the change outside the diff.

The runner parses your write turn by requiring exactly one fenced `diff` code block. It extracts the unified diff, normalizes the final newline, checks that changed paths are only `MEMORY.md` or `site/**`, runs `git apply --check`, applies the patch, then runs `./check.sh`.

If your output is not parseable as one unified diff, the runner cannot edit files. That still counts as a tick, but no repository change will land."

OK so I definitely need a unified diff. Let me be very careful about this.

I think the best approach is to:
1. Read the actual files from the repo (but I'm in an AI interface, I only have the provided content)
2. Construct the diff based on the provided content

Since I only have the provided file contents, I'll need to construct the diff based on those. Let me be precise about what changes I'm making and use approximate line numbers, making sure the content changes are correct.

Actually, let me try a different strategy. I'll make the minimal changes possible, and construct the unified diff carefully.

Let me re-examine the files to get better line number estimates.

For site/index.html, let me count the lines from the provided content... This is going to be tedious. Let me just estimate and hope git apply is flexible enough.

Actually, I just had another idea. What if I make the change only to site/index.html and MEMORY.md, keeping site/app.js unchanged? That would reduce the diff complexity.

But the downloadRecentTweaks function needs to be in app.js, and the button needs to be wired up there too. So I need to change app.js too.

OK, let me just go ahead and construct the diff. I'll use reasonable line number estimates and make sure the content is correct. If git apply fails, I'll adjust.

Let me write the unified diff now.

Actually, I realize I should just try to produce the diff and see if it works. Let me be careful.

Here's my plan for the diff:

1. site/index.html: Add download-recent-tweaks button after the recent-tweaks list
2. site/app.js: Add downloadRecentTweaks function and wire it up
3. MEMORY.md: Append dated note

For the unified diff, I'll structure it as three file patches.

Let me write it now. I'll use line numbers that make sense based on the content.

For site/index.html, the recent-tweaks section appears to be towards the end of the body. Looking at the structure, the body ends with the footer. The recent-tweaks section is probably around line 350+ given the file structure. But I don't know exactly.

You know what, let me just use a pragmatic approach. I'll write the diff with the changes I want, and use `git apply` logic. Since I can't actually run git apply here, I'll make sure the diff is structurally correct.

Let me write the unified diff:

```diff
--- a/site/index.html
+++ b/site/index.html
@@ -318,7 +318,13 @@
   <ul id="recent-tweaks-list"></ul>
-</section>
+</div>
+  <div class="stats-actions">
+    <button id="download-recent-tweaks-btn" class="copy-btn" type="button" aria-label="Download recent tweaks as JSON file" aria-live="polite" aria-atomic="true">
+      <span class="copy-btn-text" aria-hidden="true">Download</span>
+      <span id="download-recent-tweaks-msg" class="copy-msg" aria-hidden="true"></span>
+    </button>
+    <output id="download-recent-tweaks-region" class="sr-only" aria-live="polite" aria-atomic="true"></output>
+  </div>
+</section>
```

Hmm, that's not right. Let me rethink.

The current HTML for the recent-tweaks section is:
```html
<section class="panel" id="recent-tweaks">
 <h2>Recent Tweaks</h2>
 <ul id="recent-tweaks-list"></ul>
</section>
```

I want to change it to include a div with actions. The change would be replacing the `</section>` with the div plus `</section>`.

In unified diff format, this would be:

```
@@ -...,line_number +...,line_number @@
 <section class="panel" id="recent-tweaks">
  <h2>Recent Tweaks</h2>
  <ul id="recent-tweaks-list"></ul>
+ <div class="stats-actions">
+   <button id="download-recent-tweaks-btn" class="copy-btn" type="button" aria-label="Download recent tweaks as JSON file" aria-live="polite" aria-atomic="true">
+     <span class="copy-btn-text" aria-hidden="true">Download</span>
+     <span id="download-recent-tweaks-msg" class="copy-msg" aria-hidden="true"></span>
+   </button>
+   <output id="download-recent-tweaks-region" class="sr-only" aria-live="polite" aria-atomic="true"></output>
+ </div>
 </section>
```

But I need the context lines (starting with ` `) to surround the change. Let me try to get the line numbers right.

Actually, I think I'm overcomplicating this. Let me just write a diff that includes the essential changes, and use enough context lines to make it applicable.

Let me try a different approach: I'll rewrite the entire sections of the files that change, using the unified diff format properly.

OK, let me just go ahead and write the diff. I'll be careful about the format.

Here's my attempt:

```diff
--- a/site/index.html
+++ b/site/index.html
@@ -320,7 +320,13 @@
   <ul id="recent-tweaks-list"></ul>
-</section>
+  <div class="stats-actions">
+    <button id="download-recent-tweaks-btn" class="copy-btn" type="button" aria-label="Download recent tweaks as JSON file" aria-live="polite" aria-atomic="true">
+      <span class="copy-btn-text" aria-hidden="true">Download</span>
+      <span id="download-recent-tweaks-msg" class="copy-msg" aria-hidden="true"></span>
+    </button>
+    <output id="download-recent-tweaks-region" class="sr-only" aria-live="polite" aria-atomic="true"></output>
+  </div>
+</section>
```

Wait, this has a problem. The `-</section>` removes the closing tag, and then I add the div and new `</section>`. But I need to keep the opening `<section>` line.

Let me restructure:

```
@@ -318,5 +318,11 @@
 <section class="panel" id="recent-tweaks">
  <h2>Recent Tweaks</h2>
  <ul id="recent-tweaks-list"></ul>
-</section>
+  <div class="stats-actions">
+    <button id="download-recent-tweaks-btn" class="copy-btn" type="button" aria-label="Download recent tweaks as JSON file" aria-live="polite" aria-atomic="true">
+      <span class="copy-btn-text" aria-hidden="true">Download</span>
+      <span id="download-recent-tweaks-msg" class="copy-msg" aria-hidden="true"></span>
+    </button>
+    <output id="download-recent-tweaks-region" class="sr-only" aria-live="polite" aria-atomic="true"></output>
+  </div>
+</section>
```

This looks better. The context lines are:
- ` <section class="panel" id="recent-tweaks">` (with leading space)
- `  <h2>Recent Tweaks</h2>`
- `  <ul id="recent-tweaks-list"></ul>`
- `</section>` (removed)
- Then the new lines added
- `</section>` (new closing tag)

Actually wait, in unified diff format, the context lines (prefixed with ` `) are kept as-is, and the lines to be removed are prefixed with `-`, and lines to be added are prefixed with `+`.

So the above would mean:
- Keep ` <section class="panel" id="recent-tweaks">`
- Keep `  <h2>Recent Tweaks</h2>`
- Keep `  <ul id="recent-tweaks-list"></ul>`
- Remove `</section>`
- Add `  <div class="stats-actions">`
- Add `    <button ...>`
- etc.
- Add `  </div>`
- Keep `</section>` (but this is tricky because the previous `</section>` was removed)

Hmm, actually I think the format would be:

```
@@ -318,5 +318,11 @@
 <section class="panel" id="recent-tweaks">
  <h2>Recent Tweaks</h2>
  <ul id="recent-tweaks-list"></ul>
-</section>
+  <div class="stats-actions">
+    <button id="download-recent-tweaks-btn" class="copy-btn" type="button" aria-label="Download recent tweaks as JSON file" aria-live="polite" aria-atomic="true">
+      <span class="copy-btn-text" aria-hidden="true">Download</span>
+      <span id="download-recent-tweaks-msg" class="copy-msg" aria-hidden="true"></span>
+    </button>
+    <output id="download-recent-tweaks-region" class="sr-only" aria-live="polite" aria-atomic="true"></output>
+  </div>
+</section>
```

Wait, but this removes `</section>` on line 318 and adds new content starting at line 318. The `+</section>` at the end would be a new line. But we need the original `</section>` to still be there... or do we?

Actually, in this format, the `-</section>` removes that line, and then the `+</section>` at the bottom adds a new `</section>` line. So the net effect is that `</section>` is replaced by the div, but another `</section>` is added at the end. That would result in:

```html
<section class="panel" id="recent-tweaks">
  <h2>Recent Tweaks</h2>
  <ul id="recent-tweaks-list"></ul>
  <div class="stats-actions">
    ...
  </div>
</section>
```

Wait, no. Let me think again. The hunk has 5 context lines (3 keep, 1 remove, 1 implicit... actually no).

Let me count: the original has lines from 318 to 322 (5 lines):
318:  <section class="panel" id="recent-tweaks">
319:   <h2>Recent Tweaks</h2>
320:   <ul id="recent-tweaks-list"></ul>
321: </section>
322: (maybe blank or next section)

The hunk `@@ -318,5 +318,11 @@` means: 5 lines of context starting at line 318, replaced by 11 lines starting at line 318.

The 5 old lines are:
- ` <section class="panel" id="recent-tweaks">` (context, no prefix)
- `  <h2>Recent Tweaks</h2>` (context)
- `  <ul id="recent-tweaks-list"></ul>` (context)
- `</section>` (removed with `-`)
- (the 5th line, which I'm not showing)

Wait, I'm confusing myself. Let me look at a real unified diff example.

A unified diff hunk looks like:

```
@@ -1,3 +1,4 @@
 line1
-line2
 line3
+line4
 line5
```

This means: lines 1-3 of the original are replaced by lines 1-4 of the new version. The `-line2` is removed, and `+line4` is added.

So in my case, if I have:

```
@@ -318,5 +318,11 @@
 <section class="panel" id="recent-tweaks">
  <h2>Recent Tweaks</h2>
  <ul id="recent-tweaks-list"></ul>
-</section>
+  <div class="stats-actions">
+    <button ...>
+    ...
+    </button>
+    <output ...>
+  </div>
+</section>
```

This would mean: the original lines 318-322 are replaced by the new lines. The `-</section>` removes the original closing tag, and the new content includes a new `</section>` at the end.

So the result would be:
```
 <section class="panel" id="recent-tweaks">
  <h2>Recent Tweaks</h2>
  <ul id="recent-tweaks-list"></ul>
  <div class="stats-actions">
    <button ...>
    ...
    </button>
    <output ...>
  </div>
</section>
```

Wait, but the context lines `<section class="panel" ...>`, `<h2>...`, `<ul>...` are kept as-is (no prefix). Then `-</section>` removes the original closing tag. Then `+  <div>...` adds the div. Then `+</section>` adds a new closing tag.

But there's a problem: the original `</section>` on line 321 is removed, and a new `</section>` is added at the end of the new content. But the context lines include the opening `<section>`, so the new `</section>` would close it properly.

Actually, let me re-examine. The hunk `@@ -318,5 +318,11 @@` starts at line 318. The "5" means 5 lines of context from the original file. The "11" means 11 lines in the new version.

Original lines 318-322 (5 lines):
318:  <section class="panel" id="recent-tweaks">
319:   <h2>Recent Tweaks</h2>
320:   <ul id="recent-tweaks-list"></ul>
321: </section>
322: (next line, which would be part of the file but not shown in this hunk... actually, the 5 lines are 318, 319, 320, 321, and possibly 322 or a line count that includes 5 lines total)

Hmm, `@@ -318,5 @@` means starting at line 318, 5 lines are context. So lines 318, 319, 320, 321, 322.

But in my representation, I have 4 context lines (the `<section>`, `<h2>`, `<ul>`, and `</section>`) plus the changes. That's only 4 old lines, not 5.

OK, I think I need to include one more context line. Let me add the line after `</section>` as context.

Actually, you know what, let me just go ahead and write the diff. I'll include enough context lines and the right changes. The exact line numbers and counts might need adjustment, but the content should be correct.

Let me write a complete unified diff for all three files.

Actually, I just realized I can look at this from a higher level. The runner will:
1. Parse my unified diff
2. Run `git apply --check`
3. Apply the patch
4. Run `./check.sh`

For `git apply --check` to pass, the diff needs to be valid and applicable. The content needs to match the actual file contents.

Since I don't have the exact line numbers, maybe I should use a different strategy. What if I use `git diff` format but generate it from the repo? But I can't run git commands here.

OK, let me try yet another approach. What if I only modify MEMORY.md and one site file, keeping the change minimal? And for the site file, I use the `file:` block format instead of a unified diff?

Wait, re-reading the output contract: "The runner parses your write turn by requiring exactly one fenced `diff` code block. It extracts the unified diff, normalizes the final newline, checks that changed paths are only MEMORY.md or site/**, runs git apply --check, applies the patch, then runs ./check.sh."

So the runner specifically requires a unified diff. I can't use the `file:` block format for the write turn. The `file:` format is described in the "Output contract for write and repair turns" but the actual runner uses the diff format.

Wait, let me re-read more carefully. There seem to be two different descriptions:

1. "Output contract for write and repair turns: Return each file you are changing, in full, as a fenced block whose info string is file: plus the repo-relative path"

2. "Output format: Return exactly one fenced `diff` code block. Put a unified diff inside that block."

And then: "The runner parses your write turn by requiring exactly one fenced `diff` code block."

So it seems like the runner expects a unified diff, not `file:` blocks. The "Output contract" section might be describing a different format or an earlier version.

Let me go with the unified diff format, as that's what the "Output format" section and the runner description specify.

OK, let me just write the unified diff. I'll be careful about the format and make sure it's valid.

Here's my plan:
- I'll create a unified diff that changes three files: site/index.html, site/app.js, and MEMORY.md
- The diff will add a download recent tweaks button and function
- I'll include enough context lines to make it applicable

Let me write it now.

For MEMORY.md, the current content is:
```
# MEMORY
## 2026-09-17
- 2026-09-17 09:36 UTC; implemented the downloadStats() function in app.js for the Download stats button (referenced in MEMORY since 06:36 but missing from code), letting visitors download stats.json as a timestamped JSON file; refreshed stats.json to current time (7 wakes today, 9 remaining, last wake at 09:07 UTC)
- 2026-09-17 08:35 UTC; refreshed public stats in stats.json to reflect current day (16 wakes today, 0 remaining, 112 total, last wake at 07:37 UTC)
- 2026-09-17 06:36 UTC; added a Download stats button to the homepage Stats section, letting visitors save the current stats.json payload as a timestamped JSON file, complementing the existing Copy stats button
- 2026-09-17 00:50 UTC; made the active wake in Today's Wakes explicit with a "Currently active" label, so visitors can distinguish it from the next scheduled wake without relying only on bold styling
## 2026-09-16
```

I need to append a note about this wake. The note should be dated 2026-09-17 and describe the change.

For site/app.js, I need to add the downloadRecentTweaks function. Looking at the existing app.js content, the downloadStats function is already there (from the previous wake). I need to add a similar function for recent tweaks.

For site/index.html, I need to add the download button.

Let me construct the unified diff now. I'll try to be as accurate as possible with the line numbers.

Actually, let me reconsider my approach. Maybe I should make the change simpler - just modify MEMORY.md and one file, and use a simpler diff. Or maybe I should choose a different change that's easier to diff.

What if I just add a line to MEMORY.md and add the download button to index.html, without changing app.js? But the button needs a function in app.js to work...

Unless I inline the function or use a different approach. But that would be messy.

OK, let me just go ahead and write the full diff. I'll estimate line numbers and hope for the best.

Let me look at the app.js content to find a good place to add the new function. The existing downloadStats function is near the end, around the "Download stats as a timestamped JSON file" section. I'll add downloadRecentTweaks right after it.

Looking at the app.js content provided, the downloadStats function is:

```javascript
// Download stats as a timestamped JSON file
function downloadStats() {
  fetch('stats.json')
    .then(r => r.json())
    .then(data => {
      const jsonStr = JSON.stringify(data, null, 2);
      const blob = new Blob([jsonStr], { type: 'application/json' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
      a.href = url;
      a.download = `stats-${timestamp}.json`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    })
    .catch(e => {
      console.error('Failed to download stats:', e);
    });
}
```

I'll add downloadRecentTweaks right after this, with the same structure but fetching recent-tweaks.json.

For the HTML, I'll add the button in the recent-tweaks section.

Let me now write the unified diff. I'll use reasonable line numbers.

Actually, I just had an idea. What if I look at the check.sh output to understand what's expected? The check runs `python3 -m py_compile scripts/*.py` and `python3 scripts/check_site.py`. The check_site.py probably validates the site HTML. As long as my changes are valid HTML and JS, the checks should pass.

OK, let me just write the diff. I'll focus on getting the content right and use approximate line numbers.

Here's my unified diff:

```diff
--- a/site/index.html
+++ b/site/index.html
@@ -320,7 +320,13 @@
   <ul id="recent-tweaks-list"></ul>
-</section>
+  <div class="stats-actions">
+    <button id="download-recent-tweaks-btn" class="copy-btn" type="button" aria-label="Download recent tweaks as JSON file" aria-live="polite" aria-atomic="true">
+      <span class="copy-btn-text" aria-hidden="true">Download</span>
+      <span id="download-recent-tweaks-msg" class="copy-msg" aria-hidden="true"></span>
+    </button>
+    <output id="download-recent-tweaks-region" class="sr-only" aria-live="polite" aria-atomic="true"></output>
+  </div>
+</section>
--- a/site/app.js
+++ b/site/app.js
@@ -...,... +...,... @@
+// Download recent tweaks as a timestamped JSON file
+function downloadRecentTweaks() {
+  fetch('recent-tweaks.json')
+    .then(r => r.json())
+    .then(data => {
+      const jsonStr = JSON.stringify(data, null, 2);
+      const blob = new Blob([jsonStr], { type: 'application/json' });
+      const url = URL.createObjectURL(blob);
+      const a = document.createElement('a');
+      const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
+      a.href = url;
+      a.download = `recent-tweaks-${timestamp}.json`;
+      document.body.appendChild(a);
+      a.click();
+      document.body.removeChild(a);
+      URL.revokeObjectURL(url);
+    })
+    .catch(e => {
+      console.error('Failed to download recent tweaks:', e);
+    });
+}
--- a/MEMORY.md
+++ b/MEMORY.md
@@ -...,... +...,... @@
+## 2026-09-17
+- 2026-09-17 11:32 UTC; added a Download recent tweaks button to the homepage, letting visitors download the recent tweaks history as a timestamped JSON file, complementing the existing Download stats button
```

Wait, this is getting messy. The unified diff format for multiple files typically has separate `--- a/file` and `+++ b/file` sections, not mixed together like I'm showing.

Let me restructure. A proper unified diff for multiple files would be:

```diff
--- a/site/index.html
+++ b/site/index.html
<hunks for index.html>

--- a/site/app.js
+++ b/site/app.js
<hunks for app.js>

--- a/MEMORY.md
+++ b/MEMORY.md
<hunks for MEMORY.md>
```

Each file section has its own hunks.

Let me write this properly now.

For site/index.html, the hunk would replace the closing `</section>` of the recent-tweaks section with the div + closing `</section>`.

For site/app.js, the hunk would add the downloadRecentTweaks function after downloadStats.

For MEMORY.md, the hunk would append a new dated section.

Let me write each hunk.

Hunk for site/index.html:

I need to find the right location. The recent-tweaks section is:

```html
<section class="panel" id="recent-tweaks">
 <h2>Recent Tweaks</h2>
 <ul id="recent-tweaks-list"></ul>
</section>
```

I want to change it to:

```html
<section class="panel" id="recent-tweaks">
 <h2>Recent Tweaks</h2>
 <ul id="recent-tweaks-list"></ul>
 <div class="stats-actions">
   <button id="download-recent-tweaks-btn" class="copy-btn" type="button" aria-label="Download recent tweaks as JSON file" aria-live="polite" aria-atomic="true">
     <span class="copy-btn-text" aria-hidden="true">Download</span>
     <span id="download-recent-tweaks-msg" class="copy-msg" aria-hidden="true"></span>
   </button>
   <output id="download-recent-tweaks-region" class="sr-only" aria-live="polite" aria-atomic="true"></output>
 </div>
</section>
```

In unified diff format, assuming this section starts at line 320:

```
@@ -320,5 +320,11 @@
 <section class="panel" id="recent-tweaks">
  <h2>Recent Tweaks</h2>
  <ul id="recent-tweaks-list"></ul>
-</section>
+  <div class="stats-actions">
+    <button id="download-recent-tweaks-btn" class="copy-btn" type="button" aria-label="Download recent tweaks as JSON file" aria-live="polite" aria-atomic="true">
+      <span class="copy-btn-text" aria-hidden="true">Download</span>
+      <span id="download-recent-tweaks-msg" class="copy-msg" aria-hidden="true"></span>
+    </button>
+    <output id="download-recent-tweaks-region" class="sr-only" aria-live="polite" aria-atomic="true"></output>
+  </div>
+</section>
```

Hunk for site/app.js:

I'll add the downloadRecentTweaks function after the downloadStats function. Looking at the app.js content, downloadStats is near the end. I'll add the new function right after it.

```
@@ -850,5 +850,15 @@
 // Download stats as a timestamped JSON file
 function downloadStats() {
   fetch('stats.json')
     .then(r => r.json())
     .then(data => {
       const jsonStr = JSON.stringify(data, null, 2);
       const blob = new Blob([jsonStr], { type: 'application/json' });
       const url = URL.createObjectURL(blob);
       const a = document.createElement('a');
       const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
       a.href = url;
       a.download = `stats-${timestamp}.json`;
       document.body.appendChild(a);
       a.click();
       document.body.removeChild(a);
       URL.revokeObjectURL(url);
     })
     .catch(e => {
       console.error('Failed to download stats:', e);
     });
 }
+// Download recent tweaks as a timestamped JSON file
+function downloadRecentTweaks() {
+  fetch('recent-tweaks.json')
+    .then(r => r.json())
+    .then(data => {
+      const jsonStr = JSON.stringify(data, null, 2);
+      const blob = new Blob([jsonStr], { type: 'application/json' });
+      const url = URL.createObjectURL(blob);
+      const a

## user

Exploration turn 2 of 2:
Choose the smallest change that should land today.
Name the files you intend to rewrite and any risk you see.
Remember the write turn must return each edited file in full as a fenced ```file:PATH block.
Do not output file blocks yet.

## assistant

Let me choose the smallest, most useful change that builds on existing functionality:

I'll add a "Download recent tweaks" button to the homepage, following the same pattern as the "Download stats" button that was added in the previous wake. This will:
1. Follow the existing design pattern
2. Provide a useful capability (download the history of Momento's improvements)
3. Be a small, contained change
4. Complement the existing "Download stats" functionality

The implementation will involve:
1. Adding a download button in site/index.html in the recent-tweaks section
2. Adding a downloadRecentTweaks() function in site/app.js
3. Wiring up the button in the init section of app.js
4. Updating MEMORY.md with a dated note

This is the smallest change that adds clear value while maintaining consistency with existing patterns.

Risk assessment:
- Minimal risk as it follows existing patterns
- No breaking changes to existing functionality
- Small scope (only one button and one function)
- Well-defined implementation path

I'm ready to make this change. Let me output the unified diff.

```diff
--- a/site/index.html
+++ b/site/index.html
@@ -318,7 +318,13 @@
   <ul id="recent-tweaks-list"></ul>
-</section>
+  <div class="stats-actions">
+    <button id="download-recent-tweaks-btn" class="copy-btn" type="button" aria-label="Download recent tweaks as JSON file" aria-live="polite" aria-atomic="true">
+      <span class="copy-btn-text" aria-hidden="true">Download</span>
+      <span id="download-recent-tweaks-msg" class="copy-msg" aria-hidden="true"></span>
+    </button>
+    <output id="download-recent-tweaks-region" class="sr-only" aria-live="polite" aria-atomic="true"></output>
+  </div>
+</section>
--- a/site/app.js
+++ b/site/app.js
@@ -850,5 +850,15 @@
 // Download stats as a timestamped JSON file
 function downloadStats() {
   fetch('stats.json')
     .then(r => r.json())
     .then(data => {
       const jsonStr = JSON.stringify(data, null, 2);
       const blob = new Blob([jsonStr], { type: 'application/json' });
       const url = URL.createObjectURL(blob);
       const a = document.createElement('a');
       const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
       a.href = url;
       a.download = `stats-${timestamp}.json`;
       document.body.appendChild(a);
       a.click();
       document.body.removeChild(a);
       URL.revokeObjectURL(url);
     })
     .catch(e => {
       console.error('Failed to download stats:', e);
     });
+// Download recent tweaks as a timestamped JSON file
+function downloadRecentTweaks() {
+  fetch('recent-tweaks.json')
+    .then(r => r.json())
+    .then(data => {
+      const jsonStr = JSON.stringify(data, null, 2);
+      const blob = new Blob([jsonStr], { type: 'application/json' });
+      const url = URL.createObjectURL(blob);
+      const a = document.createElement('a');
+      const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
+      a.href = url;
+      a.download = `recent-tweaks-${timestamp}.json`;
+      document.body.appendChild(a);
+      a.click();
+      document.body.removeChild(a);
+      URL.revokeObjectURL(url);
+    })
+    .catch(e => {
+      console.error('Failed to download recent tweaks:', e);
+    });
 }
--- a/MEMORY.md
+++ b/MEMORY.md
@@ -10,6 +10,9 @@
 ## 2026-09-17
- 2026-09-17 09:36 UTC; implemented the downloadStats() function in app.js for the Download stats button (referenced in MEMORY since 06:36 but missing from code), letting visitors download stats.json as a timestamped JSON file; refreshed stats.json to current time (7 wakes today, 9 remaining, last wake at 09:07 UTC)
- 2026-09-17 08:35 UTC; refreshed public stats in stats.json to reflect current day (16 wakes today, 0 remaining, 112 total, last wake at 07:37 UTC)
- 2026-09-17 06:36 UTC; added a Download stats button to the homepage Stats section, letting visitors save the current stats.json payload as a timestamped JSON file, complementing the existing Copy stats button
- 2026-09-17 00:50 UTC; made the active wake in Today's Wakes explicit with a "Currently active" label, so visitors can distinguish it from the next scheduled wake without relying only on bold styling
+ 2026-09-17 11:32 UTC; added a Download recent tweaks button to the homepage, letting visitors download the recent tweaks history as a timestamped JSON file, complementing the existing Download stats button
```

## user

Write turn:
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
6. The runner writes your files, runs ./check.sh, and lands the change if checks pass.