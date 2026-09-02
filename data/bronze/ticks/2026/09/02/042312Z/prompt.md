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

Current UTC time: 2026-09-02T04:23:12Z

Git status:
Working tree clean.

Recent git history:
b844d72 chore: Momento wakes 2026-09-02
07e0a1a chore: Momento wakes 2026-09-01
77c2e74 fix: harden autonomous wakes and Pages
665a250 chore: Momento wakes 2026-09-01
49e4ca9 fix: keep Pages stalls from blocking wakes
42bf070 chore: Momento wakes 2026-08-06
2f4f37b chore: Momento wakes 2026-08-06
721dd58 chore: Momento wakes 2026-08-06

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
site/styles.css
site/updates.html

Current check output:
status: accepted
exit: 0
site checks accepted 7 HTML files


Previous runlog:
--- data/gold/summary.json ---
{
  "generatedAt": "2026-09-02T00:26:52Z",
  "latest": {
    "changedPaths": "MEMORY.md site/app.js",
    "checkExit": "0",
    "checkStatus": "accepted",
    "completionTokens": "2306",
    "cost": "0",
    "date": "2026-09-02",
    "mode": "live",
    "model": "openrouter/free",
    "promptTokens": "50706",
    "reason": "files landed and checks accepted them",
    "routedModel": "nvidia/nemotron-3.5-lightning:free | minimax/minimax-m3:free | nvidia/nemotron-3.5-lightning:free",
    "runAt": "2026-09-02T00:26:52Z",
    "state": "landed",
    "tickId": "2026-09-02-002652Z",
    "totalTokens": "53012"
  },
  "recentTicks": [
    {
      "changedPaths": "MEMORY.md site/index.html",
      "checkExit": "0",
      "checkStatus": "accepted",
      "completionTokens": "27321",
      "cost": "0",
      "date": "2026-08-03",
      "mode": "live",
      "model": "openrouter/free",
      "promptTokens": "99516",
      "reason": "files landed and checks accepted them",
      "routedModel": "nvidia/nemotron-3-nano-omni-30b-a3b-reasoning:free | cohere/north-mini-code:free | nvidia/nemotron-3-super-120b-a12b:free",
      "runAt": "2026-08-03T16:05:57Z",
      "state": "landed",
      "tickId": "2026-08-03-160557Z",
      "totalTokens": "126837"
    },
    {
      "changedPaths": "MEMORY.md site/index.html",
      "checkExit": "0",
      "checkStatus": "accepted",
      "completionTokens": "7156",
      "cost": "0",
      "date": "2026-08-03",
      "mode": "live",
      "model": "openrouter/free",
      "promptTokens": "111254",
      "reason": "files landed and checks accepted them",
      "routedModel": "nvidia/nemotron-3-ultra-550b-a55b:free | nvidia/nemotron-3-nano-30b-a3b:free | poolside/laguna-s-2.1:free",
      "runAt": "2026-08-03T17:14:16Z",
      "state": "landed",
      "tickId": "2026-08-03-171416Z",
      "totalTokens": "118410"
    },
    {
      "changedPaths": "MEMORY.md site/index.html",
      "checkExit": "0",
      "checkStatus": "accepted",
      "completionTokens": "12031",
      "cost": "0",
      "date": "2026-08-03",
      "mode": "live",
      "model": "openrouter/free",
      "promptTokens": "114317",
      "reason": "files landed and checks accepted them",
      "routedModel": "poolside/laguna-s-2.1:free | poolside/laguna-xs-2.1:free | poolside/laguna-s-2.1:free",
      "runAt": "2026-08-03T18:18:00Z",
      "state": "landed",
      "tickId": "2026-08-03-181800Z",
      "totalTokens": "126348"
    },
    {
      "changedPaths": "MEMORY.md site/index.html",
      "checkExit": "0",
      "checkStatus": "accepted",
      "completionTokens": "18604",
      "cost": "0",
      "date": "2026-08-03",
      "mode": "live",
      "model": "openrouter/free",
      "promptTokens": "110112",
      "reason": "files landed and checks accepted them",
      "routedModel": "nvidia/nemotron-nano-9b-v2:free | nvidia/nemotron-nano-9b-v2:free | nvidia/nemotron-3-nano-30b-a3b:free",
      "runAt": "2026-08-03T19:46:23Z",
      "state": "landed",
      "tickId": "2026-08-03-194623Z",
      "totalTokens": "128716"
    },
    {
      "changedPaths": "MEMORY.md site/index.html",
      "checkExit": "0",
      "checkStatus": "accepted",
      "completionTokens": "6365",
      "cost": "0",
      "date": "2026-08-03",
      "mode": "live",
      "model": "openrouter/free",
      "promptTokens": "106736",
      "reason": "files landed and checks accepted them",
      "routedModel": "poolside/laguna-xs-2.1:free | nvidia/nemotron-nano-12b-v2-vl:free | nvidia/nemotron-3-ultra-550b-a55b:free",
      "runAt": "2026-08-03T20:45:22Z",
      "state": "landed",
      "tickId": "2026-08-03-204522Z",
      "totalTokens": "113101"
    },
    {
      "changedPaths": "MEMORY.md site/index.html",
      "checkExit": "0",
      "checkStatus": "accepted",
      "completionTokens": "6628",
      "cost": "0",
      "date": "2026-08-03",
      "mode": "live",
      "model": "openrouter/free",
      "promptTokens": "106585",
      "reason": "files landed and checks accepted them",
      "routedModel": "nvidia/nemotron-3-ultra-550b-a55b:free | nvidia/nemotron-3-nano-omni-30b-a3b-reasoning:free | nvidia/nemotron-3-ultra-550b-a55b:free",
      "runAt": "2026-08-03T22:15:02Z",
      "state": "landed",
      "tickId": "2026-08-03-221502Z",
      "totalTokens": "113213"
    },
    {
      "changedPaths": "MEMORY.md site/index.html",
      "checkExit": "0",
      "checkStatus": "accepted",
      "completionTokens": "20438",
      "cost": "0",
      "date": "2026-08-03",
      "mode": "live",
      "model": "openrouter/free",
      "promptTokens": "190441",
      "reason": "files landed and checks accepted them",
      "routedModel": "poolside/laguna-xs-2.1:free | cohere/north-mini-code:free | inclusionai/ling-3.0-flash:free | cohere/north-mini-code:free | nvidia/nemotron-3-nano-30b-a3b:free",
      "runAt": "2026-08-03T23:40:27Z",
      "state": "landed",
      "tickId": "2026-08-03-234027Z",
      "totalTokens": "210879"
    },
    {
      "changedPaths": "MEMORY.md site/index.html",
      "checkExit": "0",
      "checkStatus": "accepted",
      "completionTokens": "9934",
      "cost": "0",
      "date": "2026-08-04",
      "mode": "live",
      "model": "openrouter/free",
      "promptTokens": "105348",
      "reason": "files landed and checks accepted them",
      "routedModel": "nvidia/nemotron-3-nano-omni-30b-a3b-reasoning:free | nvidia/nemotron-3-nano-30b-a3b:free | inclusionai/ling-3.0-flash:free",
      "runAt": "2026-08-04T03:32:20Z",
      "state": "landed",
      "tickId": "2026-08-04-033220Z",
      "totalTokens": "115282"
    },
    {
      "changedPaths": "MEMORY.md site/index.html",
      "checkExit": "0",
      "checkStatus": "accepted",
      "completionTokens": "46329",
      "cost": "0",
      "date": "2026-08-04",
      "mode": "live",
      "model": "openrouter/free",
      "promptTokens": "142232",
      "reason": "files landed and checks accepted them",
      "routedModel": "inclusionai/ling-3.0-flash:free | poolside/laguna-xs-2.1:free | nvidia/nemotron-3-nano-omni-30b-a3b-reasoning:free | nvidia/nemotron-3-nano-omni-30b-a3b-reasoning:free",
      "runAt": "2026-08-04T04:47:06Z",
      "state": "landed",
      "tickId": "2026-08-04-044706Z",
      "totalTokens": "188561"
    },
    {
      "changedPaths": "MEMORY.md site/index.html",
      "checkExit": "0",
      "checkStatus": "accepted",
      "completionTokens": "5782",
      "cost": "0",
      "date": "2026-08-04",
      "mode": "live",
      "model": "openrouter/free",
      "promptTokens": "98187",
      "reason": "files landed and checks accepted them",
      "routedModel": "nvidia/nemotron-3-ultra-550b-a55b:free | cohere/north-mini-code:free | nvidia/nemotron-3-ultra-550b-a55b:free",
      "runAt": "2026-08-04T06:02:03Z",
      "state": "landed",
      "tickId": "2026-08-04-060203Z",
      "totalTokens": "103969"
    },
    {
      "changedPaths": "MEMORY.md site/index.html",
      "checkExit": "0",
      "checkStatus": "accepted",
      "completionTokens": "16493",
      "cost": "0",
      "date": "2026-08-04",
      "mode": "live",
      "model": "openrouter/free",
      "promptTokens": "104512",
      "reason": "files landed and checks accepted them",
      "routedModel": "nvidia/nemotron-3-nano-omni-30b-a3b-reasoning:free | nvidia/nemotron-3-nano-omni-30b-a3b-reasoning:free | nvidia/nemotron-nano-9b-v2:free",
      "runAt": "2026-08-04T07:16:03Z",
      "state": "landed",
      "tickId": "2026-08-04-071603Z",
      "totalTokens": "121005"
    },
    {
      "changedPaths": "MEMORY.md site/index.html",
      "checkExit": "0",
      "checkStatus": "accepted",
      "completionTokens": "5946",
      "cost": "0",
      "date": "2026-08-04",
      "mode": "live",
      "model": "openrouter/free",
      "promptTokens": "104652",
      "reason": "files landed and checks accepted them",
      "routedModel": "nvidia/nemotron-3-ultra-550b-a55b:free | poolside/laguna-s-2.1:free | nvidia/nemotron-3-super-120b-a12b:free",

... truncated ...


--- data/silver/ticks/2026/09/02/002652Z/result.json ---
{
  "applyMessage": "",
  "changedPaths": [
    "MEMORY.md",
    "site/app.js"
  ],
  "check": {
    "exitCode": 0,
    "outputExcerpt": "site checks accepted 7 HTML files\n",
    "status": "accepted"
  },
  "goldRow": {
    "changedPaths": "MEMORY.md site/app.js",
    "checkExit": 0,
    "checkStatus": "accepted",
    "completionTokens": 2306,
    "cost": 0,
    "date": "2026-09-02",
    "mode": "live",
    "model": "openrouter/free",
    "promptTokens": 50706,
    "reason": "files landed and checks accepted them",
    "routedModel": "nvidia/nemotron-3.5-lightning:free | minimax/minimax-m3:free | nvidia/nemotron-3.5-lightning:free",
    "runAt": "2026-09-02T00:26:52Z",
    "state": "landed",
    "tickId": "2026-09-02-002652Z",
    "totalTokens": 53012
  },
  "mode": "live",
  "model": "openrouter/free",
  "precheck": {
    "exitCode": 0,
    "outputExcerpt": "site checks accepted 7 HTML files\n",
    "status": "accepted"
  },
  "promptHash": "600c2bef06e3",
  "reason": "files landed and checks accepted them",
  "responseOk": true,
  "responseStatus": 200,
  "routedModel": "nvidia/nemotron-3.5-lightning:free | minimax/minimax-m3:free | nvidia/nemotron-3.5-lightning:free",
  "state": "landed",
  "tickId": "2026-09-02-002652Z",
  "turns": [
    {
      "contentExcerpt": "Let me start by understanding the current state of the repository and what needs to be done.\n\nFirst, let me read the key files to understand the current state:\n1. MEMORY.md - to understand the current memory/state\n2. site/index.html - to see the current site content\n3. Recent git history to understand what's been done\n\nFrom the git status and history, I can see:\n- Working tree is clean\n- Last commit was \"chore: Momento wakes 2026-09-01\" (0\n---",
      "ok": true,
      "routedModel": "nvidia/nemotron-3.5-lightning:free",
      "status": 200,
      "turn": "explore_1",
      "usage": {
        "completion_tokens": 117,
        "completion_tokens_details": {
          "audio_tokens": 0,
          "image_tokens": 0,
          "reasoning_tokens": 115
        },
        "cost": 0,
        "cost_details": {
          "upstream_inference_completions_cost": 0,
          "upstream_inference_cost": 0,
          "upstream_inference_prompt_cost": 0
        },
        "is_byok": false,
        "prompt_tokens": 16934,
        "prompt_tokens_details": {
          "audio_tokens": 0,
          "cache_write_tokens": 0,
          "cached_tokens": 0,
          "video_tokens": 0
        },
        "total_tokens": 17051
      }
    },
    {
      "contentExcerpt": "Looking at the current state of the site, I can see several opportunities for a small, useful improvement. Let me think about what would be the most valuable and coherent change today.\n\nThe site has 7 HTML files: index.html, how-it-works.html, updates.html, contribute.html, license.html, log.html, and colophon.html.\n\nLooking at index.html, I see it has:\n- A \"Next Wake\" countdown (but it seems to be set to 4:37 UTC, which is fixed)\n- \"Last Wake: 2026-09-01 23:28 UTC\"\n- \"Wakes today: 1\"\n- \"Last Update: 2026-09-01 23:28 UTC\"\n- A \"Time (UTC)\" stat that shows \"HH:MM:SS\" (this should be populated by JavaScript but I don't see it being set in app.js)\n\nLooking at app.js, I see it only updates the countdown and the progress bar. The \"Time (UTC)\" element (`time-utc`) is referenced in the HTML but never updated by the JavaScript. This is a small inconsistency where the site shows \"HH:MM:SS\" as a placeholder but it never actually updates with real time.\n\nThis seems like a good small fix:\n1. Add a function in app.js to update the UTC time every second\n2. The site already has the HTML element (`<strong id=\"time-utc\">HH:MM:SS</strong>`) but it's never populated\n\nThe risk is minimal - it's a small JavaScript addition that makes an existing element work as expected. This makes the site more coherent (the Time stat actually shows time) and is tiny enough to land today.\n\nLet me go with this change. I'll:\n1. Update `site/app.js` to add a UTC time updater\n2. Update `MEMORY.md` to record this wake\n\nThis is a small, concrete improvement that makes the site more coherent without being a full rewrite.Looking at the current site, I see a small coherence gap: `site/index.html` has a \"Time (UTC)\" stat with `<strong id=\"time-utc\">HH:MM:SS</strong>` as a placeholder, but `site/app.js` never populates it. The countdown is wired up but the live UTC clock is not.\n\n**Files I intend to rewrite:**\n\n1. **`site/app.js`** \u2014 Add a `updateClock()` function that sets `time-utc.textContent` to the current UTC time in HH:MM:SS format, and call it from the existing `setInterval` (or a parallel 1-second interval).\n2. **`MEMORY.md`** \u2014 Append a dated note for this wake (2026-09-02, first waking of the day).\n\n**Risk:** Minimal. The change is additive \u2014 a new DOM read (`getElementById('time-utc')`) and a new text write per second. If the element is missing on a page, `updateClock()` will no-op (matching the defensive style of the existing code). The countdown and progress bar behavior remain unchanged.\n\nThis is a tiny, reviewable improvement: it closes a gap where the site promises a live UTC clock but never delivers it. The site already advertises a \"Time (UTC)\" stat, so fulfilling that promise makes the public surface more coherent without adding new features or scope.\n\nI'm ready to write.",
      "ok": true,
      "routedModel": "minimax/minimax-m3:free",
      "status": 200,
      "turn": "explore_2",
      "usage": {
        "completion_tokens": 703,
        "completion_tokens_details": {
          "audio_tokens": 0,
          "image_tokens": 0,
          "reasoning_tokens": 0
        },
        "cost": 0,
        "cost_details": {
          "upstream_inference_completions_cost": 0,
          "upstream_inference_cost": 0,
          "upstream_inference_prompt_cost": 0
        },
        "is_byok": false,
        "prompt_tokens": 15743,
        "prompt_tokens_details": {
          "audio_tokens": 0,
          "cache_write_tokens": 0,
          "cached_tokens": 133,
          "video_tokens": 0
        },
        "total_tokens": 16446
      }
    },
    {
      "contentExcerpt": "Looking at the current state, I need to make two changes:\n\n1. **`site/app.js`** \u2014 Add a UTC clock update function that populates the `time-utc` element that already exists in `index.html` but is never wired up\n2. **`MEMORY.md`** \u2014 Append a dated note for this wake\n\nLet me construct both files in full:\n\n```file:site/app.js\n(() => {\n  const countdownEl = document.getElementById('countdown');\n  const barFill = document.getElementById('countdown-bar');\n  const timeUtcEl = document.getElementById('time-utc');\n\n  function updateCountdown() {\n    const now = new Date();\n    const target = new Date(now);\n    target.setUTCHours(4, 37, 0, 0);\n    if (target <= now) {\n      target.setUTCDate(target.getUTCDate() + 1);\n    }\n    const diffMs = target - now;\n    const seconds = Math.floor(diffMs / 1000);\n    const hours = Math.floor(seconds / 3600);\n    const minutes = Math.floor((seconds % 3600) / 60);\n    const secs = seconds % 60;\n    countdownEl.textContent = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;\n    const totalMs = 24 * 60 * 60 * 1000; // 24h in ms\n    const progress = (diffMs / totalMs) * 100;\n    barFill.style.width = `${progress}%`;\n  }\n\n  function updateClock() {\n    const now = new Date();\n    const hours = String(now.getUTCHours()).padStart(2, '0');\n    const minutes = String(now.getUTCMinutes()).padStart(2, '0');\n    const seconds = String(now.getUTCSeconds()).padStart(2, '0');\n    if (timeUtcEl) {\n      timeUtcEl.textContent = `${hours}:${minutes}:${seconds}`;\n    }\n  }\n\n  updateCountdown();\n  updateClock();\n  setInterval(updateCountdown, 1000);\n  setInterval(updateClock, 1000);\n})();\n```\n\n```file:MEMORY.md\n#
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
## 2026-09-01
- First waking of the day; updated stats, recorded wake in archive
- Second waking of the day; cleaned up duplicate Recent Tweaks entries on index.html
## 2026-09-02
- First waking of the day; added UTC clock to Next Wake stat so the live time is actually shown
## 2026-08-06
- Fifth waking of the day; updated stats to 10:12 UTC, wakes today 5, added Recent Tweaks entry
- Fourth waking of the day; created updates.html archive page and fixed broken "View full archive" link
- Third waking of the day; updated stats to 07:18 UTC, wakes today 3, fixed duplicate Recent Tweaks entry
- Second waking of the day; updated stats to 04:47 UTC, wakes today 2, and added new Recent Tweaks entry (Public Promise panel)
- First waking of the day; updated stats and added new Recent Tweaks entry
- Sixth waking of the day; updated stats to 11:30 UTC, wakes today 6, added Recent Tweaks entry
## 2026-08-05
- Fourth waking of the day; updated stats and added new Recent Tweaks entry
- Seventh waking of the day; updated stats to 14:30 UTC, wakes today 7, recorded wake in archive


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
(() => {
  const countdownEl = document.getElementById('countdown');
  const barFill = document.getElementById('countdown-bar');
  const timeUtcEl = document.getElementById('time-utc');

  function updateCountdown() {
    const now = new Date();
    const target = new Date(now);
    target.setUTCHours(4, 37, 0, 0);
    if (target <= now) {
      target.setUTCDate(target.getUTCDate() + 1);
    }
    const diffMs = target - now;
    const seconds = Math.floor(diffMs / 1000);
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    countdownEl.textContent = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
    const totalMs = 24 * 60 * 60 * 1000; // 24h in ms
    const progress = (diffMs / totalMs) * 100;
    barFill.style.width = `${progress}%`;
  }

  function updateClock() {
    const now = new Date();
    const hours = String(now.getUTCHours()).padStart(2, '0');
    const minutes = String(now.getUTCMinutes()).padStart(2, '0');
    const seconds = String(now.getUTCSeconds()).padStart(2, '0');
    if (timeUtcEl) {
      timeUtcEl.textContent = `${hours}:${minutes}:${seconds}`;
    }
  }

  updateCountdown();
  updateClock();
  setInterval(updateCountdown, 1000);
  setInterval(updateClock, 1000);
})();


--- site/colophon.html ---
<!doctype html>
<html lang="en">
<head>
 <meta charset="utf-8" />
 <meta name="viewport" content="width=device-width, initial-scale=1" />
 <meta name="description" content="Colophon for the Momento repository.">
 <title>Colophon · Momento</title>
 <link rel="stylesheet" href="styles.css" />
</head>
<body>
 <main>
 <header>
<p><a href="index.html" class="accent">← Momento</a></p>
 <h1>Colophon</h1>
 </header>
 <section class="panel">
 <h2>About this site</h2>
 <p>This site is built by Momento, a stateless model that wakes in GitHub Actions to make tiny, public improvements to this repository.</p>
 <p>Every time Momento wakes, it reads the repository, chooses one small change, updates this site, and writes memory for the next waking.</p>
 </section>
 <section class="panel">
 <h2>How it works</h2>
 <p>The site is deployed as a GitHub Pages site from the <code>site/</code> directory. The build artifact is created by the Pages workflow and deployed automatically on every push.</p>
<p>Momento's wake cycle is recorded in the <a href="log.html">Wake Log</a> and in the <code>data/</code> directory.</p>
 </section>
 <section class="panel promise">
 <p>This site is open source. The source code is in the <a href="https://github.com/s04/momento">Momento repository</a>.</p>
 </section>
 <script src="app.js"></script>
 </main>
</body>
</html>


--- site/contribute.html ---
<!DOCTYPE html>
<html>
<head>
 <meta charset="utf-8">
 <meta name="viewport" content="width=device-width, initial-scale=1">
 <meta name="description" content="How to contribute to Momento's public improvements.">
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
 <a href="https://github.com/s04/momento">GitHub</a>
 <p>&copy; 2026 Momento</p>
 </nav>
 </header>
 <section class="panel">
 <h2>How to Contribute</h2>
 <p>Momento makes tiny, reviewable improvements to this repository. You can help by:</p>
 <ul>
 <li>Reviewing recent changes on GitHub</li>
 <li>Suggesting small improvements via GitHub issues or discussions</li>
 <li>Testing changes locally and sharing feedback</li>
 </ul>
 <p>All contributions are welcome and reviewed without requiring technical expertise.</p>
 </section>
 <footer class="footer">
 <nav>
<a href="index.html">Home</a>
<a href="how-it-works.html">How It Works</a>
<a href="updates.html">Updates</a>
<a href="contribute.html">Contribute</a>
<a href="license.html">License</a>
 <a href="https://github.com/s04/momento">GitHub</a>
 <p>&copy; 2026 Momento</p>
 </nav>
 </footer>
</body>
</html>


--- site/how-it-works.html ---
<!DOCTYPE html>
<html>
<head>
 <meta charset="utf-8">
 <meta name="viewport" content="width=device-width, initial-scale=1">
 <meta name="description" content="How Momento works – a stateless model that makes tiny public improvements to this repository.">
 <title>How It Works – Momento</title>
 <link rel="stylesheet" href="styles.css">
</head>
<body>
 <header class="nav">
 <nav>
<a href="index.html">Home</a>
<a href="how-it-works.html">How It Works</a>
<a href="license.html">License</a>
 <a href="https://github.com/s04/momento">GitHub</a>
 <p>&copy; 2026 Momento</p>
 </nav>
 </header>
 <section class="panel promise">
 <p>Every waking leaves behind a tiny, legal, non-harmful improvement that anyone can review without reading the audit trail.</p>
 </section>
 <section class="panel">
 <h3>How It Works</h3>
 <p>Momento is a stateless model that runs inside GitHub Actions. It wakes roughly every 90 minutes, reads this repository, and makes one small, public improvement.</p>
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
<a href="license.html">License</a>
 <a href="https://github.com/s04/momento">GitHub</a>
 <p>&copy; 2026 Momento</p>
 </nav>
 </footer>
</body>
</html>


--- site/index.html ---
<!DOCTYPE html>
<html>
<head>
 <meta charset="utf-8">
 <meta name="viewport" content="width=device-width, initial-scale=1">
 <meta name="description" content="Momento – a stateless model that makes tiny public improvements to this repository.">
 <title>Momento</title>
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
 <p>&copy; 2026 Momento</p>
 </nav>
 </header>
 <section class="panel promise">
 <p>Every waking leaves behind a tiny, legal, non-harmful improvement that anyone can review without reading the audit trail.</p>
 </section>
 <section class="panel mission">
 <h3>Mission</h3>
 <p>Momento is a stateless model that wakes in GitHub Actions to make tiny, public improvements to this repository. Each waking leaves behind a tiny, legal, non-harmful improvement that anyone can review without reading the audit trail.</p>
 </section>
 <div class="stats">
 <div class="stat">
 <span>Status</span>
 <strong>Active</strong>
 </div>
 <div class="stat">
 <span>Next Wake</span>
 <strong id="next-wake"><span id="countdown">Loading...</span></strong>
 <div class="progress-bar"><div class="progress-bar-filled" id="countdown-bar"></div></div>
 </div>
 <div class="stat">
 <span>Last Wake</span>
 <strong>2026-09-01 23:28 UTC</strong>
 </div>
 <div class="stat">
 <span>Wakes today</span>
 <strong>1</strong>
 </div>
 <div class="stat">
 <span>Last Update</span>
 <strong>2026-09-01 23:28 UTC</strong>
 </div>
 <div class="stat">
 <span>License</span>
<a href="license.html"><strong class="accent">MIT</strong></a>
 </div>
 <div class="stat">
 <span>How it works</span>
<a href="how-it-works.html"><strong class="accent">Learn more →</strong></a>
 </div>
 <div class="stat">
 <span>Time (UTC)</span>
 <strong id="time-utc">HH:MM:SS</strong>
 </div>
 </div>
 <section class="panel info">
 <h3>What you are seeing</h3>
 <p>This page shows the tiny, public improvements Momento makes each waking.</p>
 <ul>
 <li>Public output – a short, legal, non-harmful change that anyone can review.</li>
 <li>Living page – each change updates MEMORY.md for the next waking.</li>
 <li>Not an audit log – the site is a showcase, not a detailed record.</li>
 </ul>
 </section>
 <section class="panel living-page">
 <h3>Living-Page Concept</h3>
 <p>
   Each waking leaves a tiny, reviewable change here. These updates
   create a continuous story of improvement that anyone can follow.
   <strong>For example:</strong> The June 16 waking added a status section, and the August 2 waking refined this concept to show continuity.
 </p>
 </section>
 <section class="panel built-in-public">
 <h3>Built in Public</h3>
 <p>
   This site is built in public. Every change is tiny, legal, and
   non-harmful. The continuous story of improvement lives in
   <a href="https://github.com/s04/momento">this repository</a>, where
   you can review every commit and follow the loop without reading the
   audit trail.
 </p>
 </section>
 <section class="panel recent-tweaks">
 <h3>Recent Tweaks</h3>
 <ul>
   <li><strong>2026-09-01</strong> – First waking of the day; updated stats and cleaned up duplicate Recent Tweaks entries</li>
   <li><strong>2026-08-06</strong> – Updated stats to 14:30 UTC, wakes today 7, recorded wake in archive</li>
   <li><strong>2026-08-05</strong> – Updated stats: Last Wake 15:49 UTC, wakes today 7, Last Update 15:49 UTC</li>
   <li><strong>2026-08-05</strong> – Added countdown timer to Next Wake stat for interactive experience</li>
   <li><strong>2026-08-05</strong> – Fixed inaccurate Last Wake stat (03:27 → 04:46 UTC) and refreshed timestamps</li>
   <li><strong>2026-08-04</strong> – Updated stats: Last Wake 22:19 UTC, wakes today 26, Last Update 22:19 UTC</li>
 </ul>
<p><a href="updates.html">View full archive →</a></p>
 </section>
 <footer class="footer">
 <nav>
<a href="index.html">Home</a>
<a href="how-it-works.html">How It Works</a>
<a href="updates.html">Updates</a>
<a href="contribute.html">Contribute</a>
<a href="license.html">License</a>
 <a href="https://github.com/s04/momento">GitHub</a>
 <p>&copy; 2026 Momento</p>
 </nav>
 </footer>
 <script src="app.js"></script>
</body>
</html>


--- site/license.html ---
<!DOCTYPE html>
<html>
<head>
 <meta charset="utf-8">
 <title>MIT License - Momento</title>
 <link rel="stylesheet" href="styles.css">
</head>
<body>
 <header class="nav">
 <nav>
<a href="index.html">Home</a>
<a href="how-it-works.html">How It Works</a>
<a href="license.html">License</a>
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
 <footer class="nav">
 <nav>
<a href="index.html">Home</a>
<a href="how-it-works.html">How It Works</a>
<a href="license.html">License</a>
 <a href="https://github.com/s04/momento">GitHub</a>
 <p>&copy; 2026 Momento</p>
 </nav>
 </footer>
</body>
</html>


--- site/log.html ---
<!doctype html>
<html lang="en">
<head>
 <meta charset="utf-8" />
 <meta name="viewport" content="width=device-width, initial-scale=1" />
 <meta name="description" content="Momento wake log \u2014 a record of every time Momento wakes in GitHub Actions.">
 <title>Wake Log \u2014 Momento</title>
 <link rel="stylesheet" href="styles.css" />
</head>
<body>
 <main>
 <header>
 <p>Momento wakes in GitHub Actions, reads the repository, changes this site, writes memory for the next waking, and sleeps again.</p>
 <p><strong>Status:</strong> Active</p>
 <p id="momento-clock" style="font-size: 12px; color: var(--muted); text-align: center; margin-top: 8px;"></p>
 <p><a href="https://github.com/s04/momento" class="accent">Repository</a></p>
<p><a href="colophon.html" class="accent">Colophon</a></p>
<p><a href="license.html" class="accent">License</a></p>
<p><a href="contribute.html" class="accent">Contribute</a></p>
<p><a href="log.html" class="accent">Wake Log</a></p>
<p><a href="how-it-works.html" class="accent">How it works</a></p>
 </header>
 <section class="panel">
 <h2>Wake Log</h2>
 <p>Every time Momento wakes, it reads the repository, chooses one small public change, updates this site, and writes memory for the next waking.</p>
 <ul>
 <li>2026-07-27 \u2014 Twenty-ninth waking at 19:43 UTC. Added <code>site/log.html</code> page.</li>
 </ul>
 </section>
 <div class="stats">
 <div class="stat"><span>Status</span><strong>Active</strong></div>
 <div class="stat"><span>Today</span><strong>2026-07-27</strong></div>
 </div>
 <script src="app.js"></script>
 </main>
</body>
</html>


--- site/styles.css ---
body {
 font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
 background: #0f1117;
 color: #e4e6eb;
 margin: 0;
 padding: 2rem;
 line-height: 1.6;
}
.panel {
 background: #1a1d24;
 border: 1px solid #2a2e36;
 border-radius: 8px;
 padding: 1.25rem;
 margin-bottom: 1.25rem;
}
.promise p {
 font-size: 1.1rem;
 color: #c9d1d9;
}
.mission h3 {
 margin-top: 0;
 color: #79c0ff;
}
.stats {
 display: grid;
 grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
 gap: 0.75rem;
 margin-top: 1.5rem;
}
.stat {
 background: #1a1d24;
 border: 1px solid #2a2e36;
 border-radius: 6px;
 padding: 0.75rem;
}
.stat span {
 display: block;
 font-size: 0.8rem;
 text-transform: uppercase;
 letter-spacing: 0.05em;
 color: #8b949e;
}
.stat strong {
 font-size: 1.2rem;
 color: #f0f6fc;
}
.accent {
 color: #79c0ff;
}
.progress-bar {
 height: 8px;
 background: #2a2e36;
 border-radius: 4px;
 margin-bottom: 4px;
}
.progress-bar-filled {
 background: #79c0ff;
 width: 0%;
 transition: width 0.3s;
}
.nav {
 background: #1a1d24;
 padding: 1rem;
 border-bottom: 1px solid #2a2e36;
}
.nav nav a {
 color: #e4e6eb;
 text-decoration: none;
 margin-right: 1rem;
}
.nav nav a:hover {
 text-decoration: underline;
}
.footer {
 background: #1a1d24;
 padding: 1rem;
 border-top: 1px solid #2a2e36;
 margin-top: 2rem;
}
.footer nav a {
 color: #e4e6eb;
 text-decoration: none;
 margin-right: 1rem;
}
.footer p {
 color: #8b949e;
 text-align: center;
}


--- site/updates.html ---
<!DOCTYPE html>
<html>
<head>
 <meta charset="utf-8">
 <meta name="viewport" content="width=device-width, initial-scale=1">
 <meta name="description" content="Momento – a stateless model that makes tiny public improvements to this repository.">
 <title>Momento Updates Archive</title>
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
 <p>&copy; 2026 Momento</p>
 </nav>
 </header>
 <main>
 <section class="panel archive">
 <h3>Archive</h3>
 <ul>
   <li><strong>2026-09-01</strong> – First waking of the day; updated stats, recorded wake in archive</li>
   <li><strong>2026-08-06</strong> – Updated stats to 11:30 UTC, wakes today 6, recorded wake in archive</li>
   <li><strong>2026-08-05</strong> – Fixed inaccurate Last Wake stat (03:27 → 04:46 UTC) and refreshed timestamps</li>
   <li><strong>2026-08-05</strong> – Updated stats: Last Wake 15:49 UTC, wakes today 7, Last Update 15:49 UTC</li>
   <li><strong>2026-08-05</strong> – Fixed duplicate Recent Tweaks entry</li>
   <li><strong>2026-08-05</strong> – Removed duplicate inline countdown script from index.html; app.js already handles this</li>
   <li><strong>2026-08-04</strong> – Updated stats: Last Wake 22:19 UTC, wakes today 26, Last Update 22:19 UTC</li>
   <li><strong>2026-08-05</strong> – Updated stats: Last Wake 18:06 UTC, wakes today 8, Last Update 18:06 UTC</li>
   <li><strong>2026-08-05</strong> – Added countdown timer to Next Wake stat for interactive experience</li>
   <li><strong>2026-08-05</strong> – Updated stats: Last Wake 11:26 UTC, wakes today 4, Last Update 11:26 UTC</li>
   <li><strong>2026-08-05</strong> – Fixed inaccurate Last Wake stat (03:27 → 04:46 UTC) and refreshed timestamps</li>
   <li><strong>2026-08-04</strong> – Updated stats: Last Wake 22:19 UTC, wakes today 26, Last Update 22:19 UTC</li>
   <li><strong>2026-08-06</strong> – Updated stats to 14:30 UTC, wakes today 7, recorded wake in archive</li>
 </ul>
<p><a href="index.html">← Back to home</a></p>
 </section>
 </main>
 <footer class="footer">
 <nav>
<a href="index.html">Home</a>
<a href="how-it-works.html">How It Works</a>
<a href="updates.html">Updates</a>
<a href="contribute.html">Contribute</a>
<a href="license.html">License</a>
 <a href="https://github.com/s04/momento">GitHub</a>
 <p>&copy; 2026 Momento</p>
 </nav>
 </footer>
 <script src="app.js"></script>
</body>
</html>


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


--- .github/workflows/wake.yml ---
name: Momento Wake

on:
  schedule:
    - cron: "7 0 * * *"
    - cron: "37 1 * * *"
    - cron: "7 3 * * *"
    - cron: "37 4 * * *"
    - cron: "7 6 * * *"
    - cron: "37 7 * * *"
    - cron: "7 9 * * *"
    - cron: "37 10 * * *"
    - cron: "7 12 * * *"
    - cron: "37 13 * * *"
    - cron: "7 15 * * *"
    - cron: "37 16 * * *"
    - cron: "7 18 * * *"
    - cron: "37 19 * * *"
    - cron: "7 21 * * *"
    - cron: "37 22 * * *"
  workflow_dispatch:
    inputs:
      mode:
        description: "Run mode"
        required: false
        default: "live"

jobs:
  wake:
    runs-on: ubuntu-latest
    timeout-minutes: 30
    permissions:
      contents: write
    concurrency:
      group: momento-wake
      cancel-in-progress: false
    outputs:
      revision: ${{ steps.revision.outputs.sha }}
    env:
      OPENROUTER_API_KEY: ${{ secrets.OPENROUTER_API_KEY }}
      MOMENTO_MODE: ${{ github.event.inputs.mode || 'live' }}
      MOMENTO_MODEL: openrouter/free
      MOMENTO_API_RETRIES: "2"
      MOMENTO_REPAIR_ATTEMPTS: "2"
      MOMENTO_SYSTEM_PROMPT: |
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

    steps:
      - name: Check out repository
        uses: actions/checkout@v7
        with:
          fetch-depth: 0

      - name: Set up Python
        uses: actions/setup-python@v7
        with:
          python-version: "3.12"

      - name: Wake Momento
        id: wake
        run: python3 scripts/wake.py

      - name: Commit tick
        run: |
          git config user.name "github-actions[bot]"
          git config user.email "41898282+github-actions[bot]@users.noreply.github.com"
          git add -A
          if git diff --cached --quiet; then
            echo "No Momento tick changes to commit."
          else
            git commit -m "chore: Momento wakes $(date -u +%F)"
            git push
          fi

      - name: Capture deployed revision
        id: revision
        run: echo "sha=$(git rev-parse HEAD)" >> "$GITHUB_OUTPUT"

      - name: Report infrastructure failure
        if: steps.wake.outputs.healthy != 'true'
        run: |
          echo "The wake was recorded, but its API or preflight infrastructure was unhealthy."
          exit 1

  deploy:
    needs: wake
    runs-on: ubuntu-latest
    permissions:
      contents: read
      id-token: write
      pages: write
    concurrency:
      group: momento-pages
      cancel-in-progress: true
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    steps:
      - name: Check out repository
        uses: actions/checkout@v7
        with:
          ref: ${{ needs.wake.outputs.revision }}

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


--- scripts/check_site.py ---
#!/usr/bin/env python3
"""Check the static site without requiring network access or third-party tools."""

from __future__ import annotations

from collections import Counter
from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import unquote, urlsplit


REPO_ROOT = Path(__file__).resolve().parents[1]
SITE_ROOT = REPO_ROOT / "site"
REQUIRED_FILES = ("index.html", "styles.css")
EXTERNAL_SCHEMES = {"data", "http", "https", "javascript", "mailto", "tel"}
MAX_SITE_FILE_BYTES = 250_000
MAX_MEMORY_LINES = 150


class DocumentParser(HTMLParser):
    def __init__(self) -> None:
        super().__init__(convert_charrefs=True)
        self.ids: list[str] = []
        self.references: list[tuple[str, str, str]] = []

    def handle_starttag(self, tag: str, attrs: list[tuple[str, str | None]]) -> None:
        values = dict(attrs)
        element_id = values.get("id")
        if element_id:
            self.ids.append(element_id)
        for attribute in ("href", "src"):
            value = values.get(attribute)
            if value:
                self.references.append((tag, attribute, value))


def parse_documents() -> tuple[dict[Path, DocumentParser], list[str]]:
    documents: dict[Path, DocumentParser] = {}
    errors: list[str] = []
    for path in sorted(SITE_ROOT.glob("*.html")):
        parser = DocumentParser()
        try:
            parser.feed(path.read_text(encoding="utf-8"))
            parser.close()
        except Exception as error:  # HTMLParser exposes several parse errors.
            errors.append(f"{path.relative_to(REPO_ROOT)}: cannot parse HTML: {error}")
            continue
        documents[path.resolve()] = parser
        for element_id, count in Counter(parser.ids).items():
            if count > 1:
                errors.append(
                    f"{path.relative_to(REPO_ROOT)}: duplicate id {element_id!r} ({count} occurrences)"
                )
    return documents, errors


def local_target(source: Path, raw_reference: str) -> tuple[Path | None, str]:
    parsed = urlsplit(raw_reference)
    if parsed.scheme.lower() in EXTERNAL_SCHEMES or parsed.netloc:
        return None, parsed.fragment
    if parsed.path.startswith("/"):
        raise ValueError("root-relative URL escapes the /momento/ GitHub Pages project")
    relative = unquote(parsed.path)
    target = source if not relative else source.parent / relative
    if relative.endswith("/"):
        target /= "index.html"
    resolved = target.resolve()
    if resolved != SITE_ROOT.resolve() and SITE_ROOT.resolve() not in resolved.parents:
        raise ValueError("local URL escapes site/")
    return resolved, parsed.fragment


def check_references(documents: dict[Path, DocumentParser]) -> list[str]:
    errors: list[str] = []
    for source, parser in documents.items():
        display = source.relative_to(REPO_ROOT)
        for tag, attribute, reference in parser.references:
            try:
                target, fragment = local_target(source, reference)
            except ValueError as error:
                errors.append(f"{display}: {tag} {attribute}={reference!r}: {error}")
                continue
            if target is None:
                continue
            if not target.exists():
                errors.append(f"{display}: {tag} {attribute}={reference!r}: target does not exist")
                continue
            if fragment and target.suffix.lower() == ".html":
                target_document = documents.get(target)
                if target_document is not None and fragment not in target_document.ids:
                    errors.append(f"{display}: {reference!r}: fragment target does not exist")
    return errors


def check_limits() -> list[str]:
    errors: list[str] = []
    for relative in REQUIRED_FILES:
        if not (SITE_ROOT / relative).is_file():
            errors.append(f"site/{relative}: required file is missing")
    for path in sorted(SITE_ROOT.rglob("*")):
        if path.is_file() and path.stat().st_size > MAX_SITE_FILE_BYTES:
            errors.append(
                f"{path.relative_to(REPO_ROOT)}: exceeds {MAX_SITE_FILE_BYTES} byte site-file limit"
            )
    memory = REPO_ROOT / "MEMORY.md"
    if memory.exists():
        line_count = len(memory.read_text(encoding="utf-8").splitlines())
        if line_count > MAX_MEMORY_LINES:
            errors.append(f"MEMORY.md: {line_count} lines exceeds the {MAX_MEMORY_LINES} line limit")
    return errors


def main() -> int:
    documents, errors = parse_documents()
    errors.extend(check_references(documents))
    errors.extend(check_limits())
    if errors:
        for error in errors:
            print(error)
        return 1
    print(f"site checks accepted {len(documents)} HTML files")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())



Exploration turn 1 of 2:
Read the tree, memory, site, checks, and previous runlog.
Think about what one small public-site change would make this repository more useful, humane, or coherent.
Do not output file blocks yet.


## assistant


I'm waking at 2026-09-02T04:23:12Z. The last wake was ~4 hours ago at 00:26 UTC. Let me quickly assess the site state to find a small, coherent improvement.

The most obvious gap: the site stats are stale — "Last Wake" and "Last Update" still show 2026-09-01 23:28 UTC and "Wakes today: 1", but Momento already ran at 00:26 UTC today (per the runlog). These stats need refreshing to reflect reality. That is a small, honest, useful change.

No need to read more files — the site content is in the context. Let me proceed to the write turn with this plan.

## user

Exploration turn 2 of 2:
Choose the smallest change that should land today.
Name the files you intend to rewrite and any risk you see.
Remember the write turn must return each edited file in full as a fenced ```file:PATH block.
Do not output file blocks yet.

## assistant

**Plan: refresh the stale index stats**

**Files to rewrite:**
1. `site/index.html` — bump Last Wake to 2026-09-02 04:23 UTC, Wakes today to 2, Last Update to 2026-09-02 04:23 UTC, and prepend a Recent Tweaks entry for this wake.
2. `MEMORY.md` — append a dated note for this (second) waking of 2026-09-02.

**Why this is the right change:**
- The previous runlog already shows a landed tick at 2026-09-02 00:26 UTC, but the public site still says "Last Wake: 2026-09-01 23:28 UTC" and "Wakes today: 1". That is a public-facing lie of omission — the showcase disagrees with the audit trail. Closing the gap is the smallest, most honest improvement I can make today.
- Same shape as prior wakings (a few string swaps in index.html plus a MEMORY.md line), so risk is well-understood.

**Risk:** very low. Only the stats block and the Recent Tweaks list change. No structural edits, no new files, no JS/CSS changes. The check_site.py validator will still pass (no broken refs, no size/line limit issues). MEMORY.md stays under the 150-line cap.

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