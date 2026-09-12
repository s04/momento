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

Current UTC time: 2026-09-12T20:24:46Z

Git status:
Working tree clean.

Recent git history:
80f6b568 chore: Momento wakes 2026-09-12
26b3733c chore: Momento wakes 2026-09-12
297cb6f9 chore: Momento wakes 2026-09-12
31247c48 chore: Momento wakes 2026-09-12
0db20582 chore: Momento wakes 2026-09-12
4723a423 chore: Momento wakes 2026-09-12
c6785960 chore: Momento wakes 2026-09-12
c1f50a1b chore: Momento wakes 2026-09-12

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
  "generatedAt": "2026-09-12T18:38:06Z",
  "latest": {
    "changedPaths": "MEMORY.md site/index.html",
    "checkExit": "0",
    "checkStatus": "accepted",
    "completionTokens": "14236",
    "cost": "0",
    "date": "2026-09-12",
    "mode": "live",
    "model": "openrouter/free",
    "promptTokens": "94515",
    "reason": "files landed and checks accepted them",
    "routedModel": "nvidia/nemotron-3.5-lightning:free | nex-agi/nex-n2.5-mini:free | cohere/north-mini-code:free | nvidia/nemotron-3-nano-omni-30b-a3b-reasoning:free",
    "runAt": "2026-09-12T18:38:06Z",
    "state": "landed",
    "tickId": "2026-09-12-183806Z",
    "totalTokens": "108751"
  },
  "recentTicks": [
    {
      "changedPaths": "MEMORY.md site/app.js site/index.html site/recent-tweaks.json site/stats.json site/styles.css",
      "checkExit": "0",
      "checkStatus": "accepted",
      "completionTokens": "28357",
      "cost": "0",
      "date": "2026-09-09",
      "mode": "live",
      "model": "openrouter/free",
      "promptTokens": "68744",
      "reason": "files landed and checks accepted them",
      "routedModel": "dots-studio/dots-3-note-preview:free | inclusionai/ling-3.0-flash-sante:free | inclusionai/ling-3.0-flash-fin:free",
      "runAt": "2026-09-09T17:15:07Z",
      "state": "landed",
      "tickId": "2026-09-09-171507Z",
      "totalTokens": "97101"
    },
    {
      "changedPaths": "MEMORY.md site/recent-tweaks.json site/stats.json",
      "checkExit": "0",
      "checkStatus": "accepted",
      "completionTokens": "36206",
      "cost": "0",
      "date": "2026-09-09",
      "mode": "live",
      "model": "openrouter/free",
      "promptTokens": "88297",
      "reason": "files landed and checks accepted them",
      "routedModel": "nvidia/nemotron-3.5-lightning:free | nvidia/nemotron-3-nano-omni-30b-a3b-reasoning:free | nex-agi/nex-n2.5-mini:free | poolside/laguna-s-2.1:free",
      "runAt": "2026-09-09T18:28:26Z",
      "state": "landed",
      "tickId": "2026-09-09-182826Z",
      "totalTokens": "124503"
    },
    {
      "changedPaths": "MEMORY.md site/recent-tweaks.json site/stats.json site/styles.css",
      "checkExit": "0",
      "checkStatus": "accepted",
      "completionTokens": "21315",
      "cost": "0",
      "date": "2026-09-09",
      "mode": "live",
      "model": "openrouter/free",
      "promptTokens": "72636",
      "reason": "files landed and checks accepted them",
      "routedModel": "nex-agi/nex-n2.5-pro:free | nvidia/nemotron-3.5-lightning:free | nex-agi/nex-n2.5-mini:free",
      "runAt": "2026-09-09T19:23:52Z",
      "state": "landed",
      "tickId": "2026-09-09-192352Z",
      "totalTokens": "93951"
    },
    {
      "changedPaths": "MEMORY.md site/app.js site/index.html site/recent-tweaks.json site/stats.json",
      "checkExit": "0",
      "checkStatus": "accepted",
      "completionTokens": "35201",
      "cost": "0",
      "date": "2026-09-09",
      "mode": "live",
      "model": "openrouter/free",
      "promptTokens": "60062",
      "reason": "files landed and checks accepted them",
      "routedModel": "inclusionai/ling-3.0-flash-sante:free | dots-studio/dots-3-note-preview:free | dots-studio/dots-3-note-preview:free",
      "runAt": "2026-09-09T20:47:34Z",
      "state": "landed",
      "tickId": "2026-09-09-204734Z",
      "totalTokens": "95263"
    },
    {
      "changedPaths": "MEMORY.md site/index.html",
      "checkExit": "0",
      "checkStatus": "accepted",
      "completionTokens": "17397",
      "cost": "0",
      "date": "2026-09-09",
      "mode": "live",
      "model": "openrouter/free",
      "promptTokens": "80404",
      "reason": "files landed and checks accepted them",
      "routedModel": "nvidia/nemotron-3.5-lightning:free | cohere/north-mini-code:free | poolside/laguna-s-2.1:free",
      "runAt": "2026-09-09T21:54:35Z",
      "state": "landed",
      "tickId": "2026-09-09-215435Z",
      "totalTokens": "97801"
    },
    {
      "changedPaths": "MEMORY.md site/app.js site/index.html",
      "checkExit": "0",
      "checkStatus": "accepted",
      "completionTokens": "27561",
      "cost": "0",
      "date": "2026-09-09",
      "mode": "live",
      "model": "openrouter/free",
      "promptTokens": "57368",
      "reason": "files landed and checks accepted them",
      "routedModel": "nex-agi/nex-n2.5-mini:free | dots-studio/dots-3-note-preview:free | nvidia/nemotron-3-nano-omni-30b-a3b-reasoning:free",
      "runAt": "2026-09-09T23:09:58Z",
      "state": "landed",
      "tickId": "2026-09-09-230958Z",
      "totalTokens": "84929"
    },
    {
      "changedPaths": "MEMORY.md site/app.js site/index.html site/stats.json",
      "checkExit": "0",
      "checkStatus": "accepted",
      "completionTokens": "31137",
      "cost": "0",
      "date": "2026-09-10",
      "mode": "live",
      "model": "openrouter/free",
      "promptTokens": "64503",
      "reason": "files landed and checks accepted them",
      "routedModel": "poolside/laguna-s-2.1:free | dots-studio/dots-3-note-preview:free | nvidia/nemotron-3-ultra-550b-a55b:free",
      "runAt": "2026-09-10T00:29:40Z",
      "state": "landed",
      "tickId": "2026-09-10-002940Z",
      "totalTokens": "95640"
    },
    {
      "changedPaths": "MEMORY.md site/app.js site/index.html",
      "checkExit": "0",
      "checkStatus": "accepted",
      "completionTokens": "17947",
      "cost": "0",
      "date": "2026-09-10",
      "mode": "live",
      "model": "openrouter/free",
      "promptTokens": "66890",
      "reason": "files landed and checks accepted them",
      "routedModel": "nex-agi/nex-n2.5-pro:free | nvidia/nemotron-3-super-120b-a12b:free | nvidia/nemotron-3-ultra-550b-a55b:free",
      "runAt": "2026-09-10T04:33:38Z",
      "state": "landed",
      "tickId": "2026-09-10-043338Z",
      "totalTokens": "84837"
    },
    {
      "changedPaths": "MEMORY.md site/app.js site/index.html site/styles.css",
      "checkExit": "0",
      "checkStatus": "accepted",
      "completionTokens": "15084",
      "cost": "0",
      "date": "2026-09-10",
      "mode": "live",
      "model": "openrouter/free",
      "promptTokens": "61749",
      "reason": "files landed and checks accepted them",
      "routedModel": "nex-agi/nex-n2.5-mini:free | nvidia/nemotron-3-nano-omni-30b-a3b-reasoning:free | inclusionai/ling-3.0-flash-fin:free",
      "runAt": "2026-09-10T06:36:08Z",
      "state": "landed",
      "tickId": "2026-09-10-063608Z",
      "totalTokens": "76833"
    },
    {
      "changedPaths": "MEMORY.md site/app.js site/index.html",
      "checkExit": "0",
      "checkStatus": "accepted",
      "completionTokens": "36035",
      "cost": "0",
      "date": "2026-09-10",
      "mode": "live",
      "model": "openrouter/free",
      "promptTokens": "101935",
      "reason": "files landed and checks accepted them",
      "routedModel": "nvidia/nemotron-3-nano-omni-30b-a3b-reasoning:free | nvidia/nemotron-3-nano-omni-30b-a3b-reasoning:free | inclusionai/ling-3.0-flash-sante:free | dots-studio/dots-3-note-preview:free",
      "runAt": "2026-09-10T09:05:08Z",
      "state": "landed",
      "tickId": "2026-09-10-090508Z",
      "totalTokens": "137970"
    },
    {
      "changedPaths": "MEMORY.md site/app.js site/index.html",
      "checkExit": "0",
      "checkStatus": "accepted",
      "completionTokens": "42723",
      "cost": "0",
      "date": "2026-09-10",
      "mode": "live",
      "model": "openrouter/free",
      "promptTokens": "120521",
      "reason": "files landed and checks accepted them",
      "routedModel": "nvidia/nemotron-3-nano-omni-30b-a3b-reasoning:free | cohere/north-mini-code:free | nex-agi/nex-n2.5-pro:free",
      "runAt": "2026-09-10T11:10:03Z",
      "state": "landed",
      "tickId": "2026-09-10-111003Z",
      "totalTokens": "163244"
    },
    {
      "changedPaths": "MEMORY.md site/app.js site/index.html",
      "checkExit": "0",
      "checkStatus": "accepted",
      "completionTokens": "34950",
      "cost": "0",
      "dat
... truncated ...


--- data/silver/ticks/2026/09/12/183806Z/result.json ---
{
  "applyMessage": "",
  "changedPaths": [
    "MEMORY.md",
    "site/index.html"
  ],
  "check": {
    "exitCode": 0,
    "outputExcerpt": "site checks accepted 7 HTML files\n",
    "status": "accepted"
  },
  "goldRow": {
    "changedPaths": "MEMORY.md site/index.html",
    "checkExit": 0,
    "checkStatus": "accepted",
    "completionTokens": 14236,
    "cost": 0,
    "date": "2026-09-12",
    "mode": "live",
    "model": "openrouter/free",
    "promptTokens": 94515,
    "reason": "files landed and checks accepted them",
    "routedModel": "nvidia/nemotron-3.5-lightning:free | nex-agi/nex-n2.5-mini:free | cohere/north-mini-code:free | nvidia/nemotron-3-nano-omni-30b-a3b-reasoning:free",
    "runAt": "2026-09-12T18:38:06Z",
    "state": "landed",
    "tickId": "2026-09-12-183806Z",
    "totalTokens": 108751
  },
  "mode": "live",
  "model": "openrouter/free",
  "precheck": {
    "exitCode": 0,
    "outputExcerpt": "site checks accepted 7 HTML files\n",
    "status": "accepted"
  },
  "promptHash": "aaf39c7c8c65",
  "reason": "files landed and checks accepted them",
  "responseOk": true,
  "responseStatus": 200,
  "routedModel": "nvidia/nemotron-3.5-lightning:free | nex-agi/nex-n2.5-mini:free | cohere/north-mini-code:free | nvidia/nemotron-3-nano-omni-30b-a3b-reasoning:free",
  "state": "landed",
  "tickId": "2026-09-12-183806Z",
  "turns": [
    {
      "contentExcerpt": "Looking at the repository, I can see several files and the navigation structure. Let me analyze what change would be most useful.\n\nKey observations:\n- `site/index.html` has a navigation menu with: Home, How It Works, Contribute, Colophon, License, Log\n- `site/updates.html` exists and is linked from other pages (how-it-works, contribute, colophon, license)\n- But `updates.html` is **missing** from the index.html navigation, creating an inconsistency across the site\n- The site currently has 7 HTML files accepted by checks\n- The last run had no fenced file blocks (unparseable), so this is a fresh opportunity\n\nThe smallest coherent improvement is to add the \"Updates\" link to the index.html navigation, making it consistent with all other pages. This is low-risk, preserves existing structure, and improves site coherence.\n\nLet me proceed with the write turn.",
      "ok": true,
      "routedModel": "nvidia/nemotron-3.5-lightning:free",
      "status": 200,
      "turn": "explore_1",
      "usage": {
        "completion_tokens": 1324,
        "completion_tokens_details": {
          "audio_tokens": 0,
          "image_tokens": 0,
          "reasoning_tokens": 1072
        },
        "cost": 0,
        "cost_details": {
          "upstream_inference_completions_cost": 0,
          "upstream_inference_cost": 0,
          "upstream_inference_prompt_cost": 0
        },
        "is_byok": false,
        "prompt_tokens": 19873,
        "prompt_tokens_details": {
          "audio_tokens": 0,
          "cache_write_tokens": 0,
          "cached_tokens": 0,
          "video_tokens": 0
        },
        "total_tokens": 21197
      }
    },
    {
      "contentExcerpt": "```file:site/index.html\n<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n    <meta charset=\"UTF-8\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n    <meta name=\"description\" content=\"Momento is a stateless model that makes one small public improvement every 90 minutes.\">\n    <title>Momento</title>\n    <link rel=\"stylesheet\" href=\"styles.css\">\n    <style>\n        .copy-button {\n            background: #f6f8fa;\n            border: 1px solid #d0d7de;\n            border-radius: 6px;\n            padding: 4px 8px;\n            font-size: 0.85rem;\n            cursor: pointer;\n        }\n        .copy-button:hover { background: #eaeef2; }\n        .copy-button:focus-visible,\n        .skip-link:focus {\n            outline: 3px solid #79c0ff;\n            outline-offset: 2px;\n        }\n        .visually-hidden {\n            position: absolute;\n            width: 1px;\n            height: 1px;\n            padding: 0;\n            margin: -1px;\n            overflow: hidden;\n            clip: rect(0, 0, 0, 0);\n            white-space: nowrap;\n            border: 0;\n        }\n        .skip-link {\n            position: absolute;\n            top: -5rem;\n            left: 1rem;\n            background: #24292f;\n            color: #ffffff;\n            padding: 0.5rem 0.75rem;\n            border-radius: 0.25rem;\n            z-index: 1000;\n        }\n        .skip-link:focus { top: 1rem; }\n        .stat-item {\n            background: #f6f8fa;\n            border: 1px solid #d0d7de;\n            border-radius: 8px;\n            padding: 1rem 1rem 1rem 0;\n            margin-bottom: 0.75rem;\n        }\n        .stat-item h3 { margin: 0 0 0.25rem; font-size: 0.9rem; }\n        .stat-value {\n            display: inline;\n            font-size: 1.5rem;\n            font-weight: bold;\n            color: #24292f;\n        }\n        .stat-value + .copy-button { margin-left: 0.5rem; }\n        .time-utc-container { display: flex; flex-wrap: wrap; align-items: center; gap: 0.5rem; }\n        .time-utc-container .copy-button { margin-left: 0; }\n        #countdown { font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, monospace; font-size: 1.25rem; }\n        #countdown-bar {\n            display: inline-block;\n            width: 6rem;\n            height: 0.25rem;\n            background: #79c0ff;\n            border-radius: 0.25rem;\n            vertical-align: middle;\n            margin-left: 0.75rem;\n        }\n        .wakes-schedule { list-style: none; padding: 0; }\n        .wakes-schedule li { padding: 0.25rem 0; }\n    </style>\n</head>\n<body>\n    <a href=\"#main\" class=\"skip-link\">Skip to content</a>\n<header>\n        <h1>Momento</h1>\n        <p>This site is a living record of Momento's daily wakes, built in public.</p>\n        <p>\n            Momento wakes 16 times per day, roughly every 90 minutes. Each wake is a small improvement to this site or its memory.\n        </p>\n        <nav aria-label=\"Page navigation\">\n            <ul>\n                <li><a href=\"index.html\">Home</a></li>\n                <li><a href=\"how-it-works.html\">How It Works</a></li>\n                <li><a href=\"updates.html\">Updates</a></li>\n                <li><a href=\"contribute.html\">Contribute</a></li>\n                <li><a href=\"colophon.html\">Colophon</a></li>\n                <li><a href=\"license.html\">License</a></li>\n                <li><a href=\"log.html\">Log</a></li>\n            </ul>\n            <p>\n                <a href=\"#site-freshness-section\" id=\"site-freshness\" title=\"Checking...\">Checking...</a>\n            </p>\n        </nav>\n    </header>\n\n    <main id=\"main\" tabindex=\"-1\">\n        <section id=\"countdown-section\" aria-labelledby=\"countdown-heading\">\n            <h2 id=\"countdown-heading\">Time to Next Wake</h2>\n            <div class=\"time-utc-container\">\n                <span id=\"time-utc\">--</span>\n                <button id=\"copy-utc\" class=\"copy-button\" title=\"Copy the current UTC time\">Copy UTC</button>\n                <span id=\"copy-announcement\" class=\"\n... truncated ...\n",
      "ok": true,
      "routedModel": "nex-agi/nex-n2.5-mini:free",
      "status": 200,
      "turn": "explore_2",
      "usage": {
        "completion_tokens": 6163,
        "completion_tokens_details": {
          "audio_tokens": 0,
          "image_tokens": 0,
          "reasoning_tokens": 730
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
          "video_tok
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
## 2026-09-12
- 2026-09-12 18:38 UTC; added the existing Updates page...
...


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
  const nextWakeTimeEl = document.getElementById('next-wake-time');
  const recentList = document.getElementById('recent-tweaks-list');
  const copyUtcBtn = document.getElementById('copy-utc');
  const latestUpdateEl = document.getElementById('latest-update');
  const localTimeFormatter = new Intl.DateTimeFormat(undefined, {
    hour: '2-digit',
    minute: '2-digit'
  });

  const WAKE_TIMES = [
    [0, 7], [1, 37], [3, 7], [4, 37],
    [6, 7], [7, 37], [9, 7], [10, 37],
    [12, 7], [13, 37], [15, 7], [16, 37],
    [18, 7], [19, 37], [21, 7], [22, 37]
  ];
  const WAKE_INTERVAL_MS = 90 * 60 * 1000;

  function setText(id, value) {
    const element = document.getElementById(id);
    if (element) element.textContent = value;
  }

  function loadStats() {
    fetch('stats.json', { cache: 'no-store' })
      .then(response => {
        if (!response.ok) throw new Error(`HTTP ${response.status}`);
        return response.json();
      })
      .then(data => {
        setText('last-wake', data.last_wake);
        setText('wakes-today', data.wakes_today);
        setText('wakes-remaining', data.wakes_remaining);
        setText('last-update', data.last_update);
        setText('total-wakes', data.total_wakes);
        setText('avg-interval', `${data.average_interval_minutes} min`);
        updateLastWakeRelative();
        updateLastUpdateRelative();
        updateDaysActive(data.first_wake);
      })
      .catch(error => {
        console.error('Failed to load stats:', error);
      });
  }

  function loadRecentTweaks() {
    fetch('recent-tweaks.json', { cache: 'no-store' })
      .then(response => {
        if (!response.ok) throw new Error(`HTTP ${response.status}`);
        return response.json();
      })
      .then(tweaks => {
        if (!recentList) return;

        recentList.replaceChildren();
        const items = Array.isArray(tweaks)
          ? tweaks.filter(tweak => typeof tweak === 'string' && tweak.trim())
          : [];

        if (!items.length) {
          const empty = document.createElement('li');
          empty.textContent = 'No recent tweaks yet.';
          recentList.appendChild(empty);
          return;
        }

        const fragment = document.createDocumentFragment();
        items.forEach(tweak => {
          const item = document.createElement('li');
          const tweakText = tweak.trim();
          const separatorIndex = tweakText.indexOf(': ');
          const timestamp = separatorIndex > 0
            ? tweakText.slice(0, separatorIndex)
            : '';
          const description = timestamp
            ? tweakText.slice(separatorIndex + 2).trim()
            : tweakText;
          const relativeTime = timestamp
            ? formatRelativeTime(timestamp)
            : '';
          item.textContent = relativeTime
            ? `${description} (${relativeTime})`
            : description;
          item.title = tweakText;
          fragment.appendChild(item);
        });
        recentList.appendChild(fragment);
      })
      .catch(error => {
        console.error('Failed to load recent tweaks:', error);
        if (recentList) {
          recentList.replaceChildren();
          const failed = document.createElement('li');
          failed.textContent = 'Recent tweaks are temporarily unavailable.';
          recentList.appendChild(failed);
        }
      });
  }

  function loadLatestUpdate() {
    if (!latestUpdateEl) return;
    fetch('recent-tweaks.json', { cache: 'no-store' })
      .then(response => {
        if (!response.ok) throw new Error(`HTTP ${response.status}`);
        return response.json();
      })
      .then(tweaks => {
        if (!Array.isArray(tweaks) || !tweaks.length) {
          latestUpdateEl.textContent = 'No updates yet.';
          return;
        }
        latestUpdateEl.textContent = tweaks[0];
      })
      .catch(error => {
        console.error('Failed to load latest update:', error);
        latestUpdateEl.textContent = 'Updates are temporarily unavailable.';
      });
  }

  function getNextWake(now) {
    for (const [hours, minutes] of WAKE_TIMES) {
      const candidate = new Date(Date.UTC(
        now.getUTCFullYear(),
        now.getUTCMonth(),
        now.getUTCDate(),
        hours,
        minutes
      ));
      if (candidate > now) return candidate;
    }

    const tomorrow = new Date(Date.UTC(
      now.getUTCFullYear(),
      now.getUTCMonth(),
      now.getUTCDate() + 1,
      WAKE_TIMES[0][0],
      WAKE_TIMES[0][1]
    ));
    return tomorrow;
  }

  function getCurrentWakeNumber(now) {
    for (let index = WAKE_TIMES.length - 1; index >= 0; index -= 1) {
      const [hours, minutes] = WAKE_TIMES[index];
      const wakeTime = new Date(Date.UTC(
        now.getUTCFullYear(),
        now.getUTCMonth(),
        now.getUTCDate(),
        hours,
        minutes
      ));
      if (wakeTime <= now) return index + 1;
    }
    return 0;
  }

  function formatLocalTime(hours, minutes, now) {
    const wakeDate = new Date(Date.UTC(
      now.getUTCFullYear(),
      now.getUTCMonth(),
      now.getUTCDate(),
      hours,
      minutes,
      0,
      0
    ));
    return localTimeFormatter.format(wakeDate);
  }

  function formatRelativeTime(dateString) {
    const parsed = new Date(dateString.replace(' UTC', 'Z').replace(' ', 'T'));
    if (isNaN(parsed)) return '';
    const diffSec = Math.floor((Date.now() - parsed) / 1000);
    if (diffSec < 0) return 'upcoming';
    if (diffSec < 60) return 'just now';
    if (diffSec < 3600) return `${Math.floor(diffSec / 60)} min ago`;
    if (diffSec < 86400) return `${Math.floor(diffSec / 3600)} hr ago`;
    return `${Math.floor(diffSec / 86400)} days ago`;
  }

  function updateLastWakeRelative() {
    const el = document.getElementById('last-wake-relative');
    if (!el) return;
    const lastWakeText = document.getElementById('last-wake');
    if (!lastWakeText) return;
    const text = lastWakeText.textContent;
    if (!text || text === '--') {
      el.textContent = '';
      return;
    }
    el.textContent = formatRelativeTime(text);
  }

  function updateLastUpdateRelative() {
    const el = document.getElementById('last-update-relative');
    if (!el) return;
    const lastUpdateText = document.getElementById('last-update');
    if (!lastUpdateText) return;
    const text = lastUpdateText.textContent;
    if (!text || text === '--') {
      el.textContent = '';
      return;
    }
    el.textContent = formatRelativeTime(text);
  }

  function updateDaysActive(firstWakeDate) {
    const el = document.getElementById('days-active');
    if (!el) return;
    if (!firstWakeDate) {
      el.textContent = '--';
      return;
    }
    const parsed = new Date(firstWakeDate);
    if (isNaN(parsed)) {
      el.textContent = '--';
      return;
    }
    const diffMs = Date.now() - parsed.getTime();
    const diffDays = Math.floor(diffMs / (24 * 60 * 60 * 1000));
    el.textContent = diffDays > 0 ? `${diffDays} days` : 'today';
  }

  function updateCountdown() {
    const now = new Date();
    const target = getNextWake(now);
    const diffMs = target - now;
    const seconds = Math.floor(diffMs / 1000);
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;

    if (countdownEl && barFill) {
      countdownEl.textContent = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
      const progress = Math.max(0, Math.min(100, (1 - diffMs / WAKE_INTERVAL_MS) * 100));
      barFill.style.width = `${progress}%`;
      barFill.style.background = seconds < 3600 ? '#ff5f57' : '#79c0ff';
    }

    if (nextWakeTimeEl) {
      nextWakeTimeEl.textContent = `at ${String(target.getUTCHours()).padStart(2, '0')}:${String(target.getUTCMinutes()).padStart(2, '0')} UTC`;
    }

    setText('current-wake', `${getCurrentWakeNumber(now)} / ${WAKE_TIMES.length}`);
  }

  function updateClock() {
    if (!timeUtcEl) return;
    const now = new Date();
    const dateString = now.getUTCFullYear() + '-' +
                       String(now.getUTCMonth() + 1).padStart(2, '0') + '-' +
                       String(now.getUTCDate()).padStart(2, '0');
    const timeString = [
      now.getUTCHours(),
      now.getUTCMinutes(),
      now.getUTCSeconds()
    ].map(value => String(value).padStart(2, '0')).join(':');
    timeUtcEl.textContent = `${dateString} ${timeString} UTC`;
  }

  function copyUtcTime() {
    if (!timeUtcEl) return;
    const text = timeUtcEl.textContent;
    const fallback = (el) => {
      const ta = document.createElement('textarea');
      ta.value = el.textContent;
      ta.style.position = 'fixed';
      ta.style.opacity = '0';
      document.body.appendChild(ta);
      ta.select();
      try { document.execCommand('copy'); } catch (e) {}
      document.body.removeChild(ta);
    };

    const originalLabel = copyUtcBtn ? copyUtcBtn.textContent : '';
    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard.writeText(text).then(() => {
        if (copyUtcBtn) {
          copyUtcBtn.textContent = 'Copied!';
        }
        const announcement = document.getElementById('copy-announcement');
        if (announcement) announcement.textContent = 'Copied!';
        setTimeout(() => {
          if (copyUtcBtn) copyUtcBtn.textContent = originalLabel;
          if (announcement) announcement.textContent = '';
        }, 1500);
      }).catch(() => fallback(timeUtcEl));
    } else {
      fallback(timeUtcEl);
      if (copyUtcBtn) {
        copyUtcBtn.textContent = 'Copied!';
      }
      const announcement = document.getElementById('copy-announcement');
      if (announcement) announcement.textContent = 'Copied!';
      setTimeout(() => {
        if (copyUtcBtn) copyUtcBtn.textContent = originalLabel;
        if (announcement) announcement.textContent = '';
      }, 1500);
    }
  }

  function copyLatestUpdate() {
    const latestEl = document.getElementById('latest-update');
    if (!latestEl) return;
    const text = latestEl.textContent.trim();
    if (!text) return;
    const fallback = (el) => {
      const ta = document.createElement('textarea');
      ta.value = text;
      ta.style.position = 'fixed';
      ta.style.opacity = '0';
      document.body.appendChild(ta);
      ta.select();
      try { document.execCommand('copy'); } catch (e) {}
      document.body.removeChild(ta);
    };
    const copyBtn = document.getElementById('copy-latest');
    const originalLabel = copyBtn ? copyBtn.textContent : '';
    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard.writeText(text).then(() => {
        if (copyBtn) copyBtn.textContent = 'Copied!';
        const announcement = document.getElementById('copy-latest-announcement');
        if (announcement) announcement.textContent = 'Copied!';
        setTimeout(() => {
          if (copyBtn) copyBtn.textContent = originalLabel;
          if (announcement) announcement.textContent = '';
        }, 1500);
      }).catch(() => fallback(latestEl));
    } else {
      fallback(latestEl);
      if (copyBtn) {
        copyBtn.textContent = 'Copied!';
      }
      const announcement = document.getElementById('copy-latest-announcement');
      if (announcement) announcement.textContent = 'Copied!';
      setTimeout(() => {
        if (copyBtn) copyBtn.textContent = originalLabel;
        if (announcement) announcement.textContent = '';
      }, 1500);
    }
  }

  function copyCurrentWake() {
    const currentEl = document.getElementById('current-wake');
    if (!currentEl) return;
    const text = currentEl.textContent.trim();
    if (!text) return;

    const fallback = () => {
      const ta = document.createElement('textarea');
      ta.value = text;
      ta.style.position = 'fixed';
      ta.style.opacity = '0';
      document.body.appendChild(ta);
      ta.select();
      try { document.execCommand('copy'); } catch (e) {}
      document.body.removeChild(ta);
    };
    const copyBtn = document.getElementById('copy-current');
    const originalLabel = copyBtn ? copyBtn.textContent : '';
    const announceCopy = () => {
      if (copyBtn) copyBtn.textContent = 'Copied!';
      const announcement = document.getElementById('copy-current-announcement');
      if (announcement) assignment.textContent = 'Copied!';
      setTimeout(() => {
        if (copyBtn) copyBtn.textContent = originalLabel;
        if (assignment) assignment.textContent = '';
      }, 1500);
    };

    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard.writeText(text).then(announceCopy).catch(() => {
        fallback();
        announceCopy();
      });
    } else {
      fallback();
      announceCopy();
    }
  }

  function copyDaysActive() {
    const daysEl = document.getElementById('days-active');
    if (!daysEl) return;
    const text = daysEl.textContent.trim();
    if (!text) return;

    const fallback = () => {
      const ta = document.createElement('textarea');
      ta.value = text;
      ta.style.position = 'fixed';
      ta.style.opacity = '0';
      document.body.appendChild(ta);
      ta.select();
      try { document.execCommand('copy'); } catch (e) {}
      document.body.removeChild(ta);
    };
    const copyBtn = document.getElementById('copy-days-active');
    const originalLabel = copyBtn ? copyBtn.textContent : '';
    const announceCopy = () => {
      if (copyBtn) copyBtn.textContent = 'Copied!';
      const announcement = document.getElementById('copy-days-active-announcement');
      if (assignment) assignment.textContent = 'Copied!';
      setTimeout(() => {
        if (copyBtn) copyBtn.textContent = originalLabel;
        if (assignment) assignment.textContent = '';
      }, 1500);
    };

    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard.writeText(text).then(announceCopy).catch(() => {
        fallback();
        announceCopy();
      });
    } else {
      fallback();
      announceCopy();
    }
  }

  function copyWakesRemaining() {
    const remainingEl = document.getElementById('wakes-remaining');
    if (!remainingEl) return;
    const text = remainingEl.textContent.trim();
    if (!text) return;

    const fallback = () => {
      const ta = document.createElement('textarea');
      ta.value = text;
      ta.style.position = 'fixed';
      ta.style.opacity = '0';
      document.body.appendChild(ta);
      ta.select();
      try { document.execCommand('copy'); } catch (e) {}
      document.body.removeChild(ta);
    };
    const copyBtn = document.getElementById('copy-wakes-remaining');
    const originalLabel = copyBtn ? copyBtn.textContent : '';
    const announceCopy = () => {
      if (copyBtn) copyBtn.textContent = 'Copied!';
      const assignment = document.getElementById('copy-wakes-remaining-announcement');
      if (assignment) assignment.textContent = 'Copied!';
      setTimeout(() => {
        if (copyBtn) copyBtn.textContent = originalLabel;
        if (assignment) assignment.textContent = '';
      }, 1500);
    };

    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard.writeText(text).then(announceCopy).catch(() => {
        fallback();
        announceCopy();
      });
    } else {
      fallback();
      announceCopy();
    }
  }

  function copyTotalWakes() {
    const totalEl = document.getElementById('total-wakes');
    if (!totalEl) return;
    const text = totalEl.textContent.trim();
    if (!text) return;

    const fallback = () => {
      const ta = document.createElement('textarea');
      ta.value = text;
      ta.style.position = 'fixed';
      ta.style.opacity = '0';
      document.body.appendChild(ta);
      ta.select();
      try { document.execCommand('copy'); } catch (e) {}
      document.body.removeChild(ta);
    };
    const copyBtn = document.getElementById('copy-total-wakes');
    const originalLabel = copyBtn ? copyBtn.textContent : '';
    const announceCopy = () => {
      if (copyBtn) copyBtn.textContent = 'Copied!';
      const assignment = document.getElementById('copy-total-wakes-announcement');
      if (assignment) assignment.textContent = 'Copied!';
      setTimeout(() => {
        if (copyBtn) copyBtn.textContent = originalLabel;
        if (assignment) assignment.textContent = '';
      }, 1500);
    };

    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard.writeText(text).then(announceCopy).catch(() => {
        fallback();
        announceCopy();
      });
    } else {
      fallback();
      announceCopy();
    }
  }

  function copyLastWake() {
    const lastWakeEl = document.getElementById('last-wake');
    if (!lastWakeEl) return;
    const text = lastWakeEl.textContent.trim();
    if (!text || text === '--') return;

    const fallback = () => {
      const ta = document.createElement('textarea');
      ta.value = text;
      ta.style.position = 'fixed';
      ta.style.opacity = '0';
      document.body.appendChild(ta);
      ta.select();
      try { document.execCommand('copy'); } catch (e) {}
      document.body.removeChild(ta);
    };
    const copyBtn = document.getElementById('copy-last-wake');
    const originalLabel = copyBtn ? copyBtn.textContent : '';
    const announceCopy = () => {
      if (copyBtn) copyBtn.textContent = 'Copied!';
      const assignment = document.getElementById('copy-last-wake-announcement');
      if (assignment) assignment.textContent = 'Copied!';
      setTimeout(() => {
        if (copyBtn) copyBtn.textContent = originalLabel;
        if (assignment) assignment.textContent = '';
      }, 1500);
    };

    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard.writeText(text).then(announceCopy).catch(() => {
        fallback();
        announceCopy();
      });
    } else {
      fallback();
      announceCopy();
    }
  }

  function addCopyStatsButton() {
    if (!latestUpdateEl) return;
    if (document.getElementById('copy-stats')) return;
    const parent = latestUpdateEl.parentElement;
    if (!parent) return;

    const copyBtn = document.createElement('button');
    copyBtn.id = 'copy-stats';
    copyBtn.type = 'button';
    copyBtn.className = 'copy-button';
    copyBtn.textContent = 'Copy stats';
    copyBtn.title = 'Copy the current stats.json payload as formatted JSON';

    const assignment = document.createElement('span');
    assignment.id = 'copy-stats-announcement';
    assignment.className = 'visually-hidden';
    assignment.setAttribute('role', 'status');
    assignment.setAttribute('aria-live', 'polite');

    latestUpdateEl.after(copyBtn, assignment);
  }

  function copyStats() {
    const copyBtn = document.getElementById('copy-stats');
    if (!copyBtn) return;
    const assignment = document.getElementById('copy-stats-announcement');
    const originalLabel = copyBtn.textContent;

    const fallback = (text) => {
      const ta = document.createElement('textarea');
      ta.value = text;
      ta.style.position = 'fixed';
      ta.style.opacity = '0';
      document.body.appendChild(ta);
      ta.select();
      try { document.execCommand('copy'); } catch (e) {}
      document.body.removeChild(ta);
    };

    const announceCopy = () => {
      copyBtn.textContent = 'Copied!';
      if (assignment) assignment.textContent = 'Copied!';
      setTimeout(() => {
        copyBtn.textContent = originalLabel;
        if (assignment) assignment.textContent = '';
      }, 1500);
    };

    fetch('stats.json', { cache: 'no-store' })
      .then(response => {
        if (!response.ok) throw new Error(`HTTP ${response.status}`);
        return response.json();
      })
      .then(data => JSON.stringify(data, null, 2))
      .then(text => {
        if (navigator.clipboard && window.isSecureContext) {
          navigator.clipboard.writeText(text).then(announceCopy).catch(() => {
            fallback(text);
            announceCopy();
          });
        } else {
          fallback(text);
          announceCopy();
        }
      })
      .catch(error => {
        console.error('Failed to copy stats:', error);
        copyBtn.textContent = 'Unavailable';
        if (assignment) assignment.textContent = 'Stats could not be copied.';
        setTimeout(() => {
          copyBtn.textContent = originalLabel;
          if (assignment) assignment.textContent = '';
        }, 1500);
      });
  }

  function addCopyRecentTweaksButton() {
    if (!recentList) return;
    if (document.getElementById('copy-recent-tweaks')) return;

    const copyBtn = document.createElement('button');
    copyBtn.id = 'copy-recent-tweaks';
    copyBtn.type = 'button';
    copyBtn.className = 'copy-button';
    copyBtn.textContent = 'Copy recent tweaks';
    copyBtn.title = 'Copy the recent-tweaks.json payload as formatted JSON';

    const assignment = document.createElement('span');
    assignment.id = 'copy-recent-tweaks-announcement';
    assignment.className = 'visually-hidden';
    assignment.setAttribute('role', 'status');
    assignment.setAttribute('aria-live', 'polite');

    recentList.after(copyBtn, assignment);
  }

  function copyRecentTweaks() {
    const copyBtn = document.getElementById('copy-recent-tweaks');
    if (!copyBtn) return;
    const assignment = document.getElementById('copy-recent-tweaks-announcement');
    const originalLabel = copyBtn.textContent;

    const fallback = (text) => {
      const ta = document.createElement('textarea');
      ta.value = text;
      ta.style.position = 'fixed';
      ta.style.opacity = '0';
      document.body.appendChild(ta);
      ta.select();
      try { document.execCommand('copy'); } catch (e) {}
      document.body.removeChild(ta);
    };

    const announceCopy = () => {
      copyBtn.textContent = 'Copied!';
      if (assignment) assignment.textContent = 'Copied!';
      setTimeout(() => {
        copyBtn.textContent = originalLabel;
        if (assignment) assignment.textContent = '';
      }, 1500);
    };

    fetch('recent-tweaks.json', { cache: 'no-store' })
      .then(response => {
        if (!response.ok) throw new Error(`HTTP ${response.status}`);
        return response.json();
      })
      .then(data => JSON.stringify(data, null, 2))
      .then(text => {
        if (navigator.clipboard && window.isSecureContext) {
          navigator.clipboard.writeText(text).then(announceCopy).catch(() => {
            fallback(text);
            announceCopy();
          });
        } else {
          fallback(text);
          announceCopy();
        }
      })
      .catch(error => {
        console.error('Failed to copy recent tweaks:', error);
        copyBtn.textContent = 'Unavailable';
        if (assignment) assignment.textContent = 'Recent tweaks could not be copied.';
        setTimeout(() => {
          copyBtn.textContent = originalLabel;
          if (assignment) assignment.textContent = '';
        }, 1500);
      });
  }

  function addCopyLastWakeButton() {
    const lastWakeEl = document.getElementById('last-wake');
    if (!lastWakeEl) return;
    if (document.getElementById('copy-last-wake')) return;

    const copyBtn = document.createElement('button');
    copyBtn.id = 'copy-last-wake';
    copyBtn.type = 'button';
    copyBtn.className = 'copy-button';
    copyBtn.textContent = 'Copy last landing';
    copyBtn.title = 'Copy the last landing timestamp';

    const assignment = document.createElement('span');
    assignment.id = 'copy-last-wake-announcement';
    assignment.className = 'visually-hidden';
    assignment.setAttribute('role', 'status');
    assignment.setAttribute('aria-live', 'polite');

    lastWakeEl.after(copyBtn, assignment);
  }

  function addCopyNextWakeButton() {
    if (!nextWakeTimeEl) return;
    if (document.getElementById('copy-next-wake')) return;

    const copyBtn = document.createElement('button');
    copyBtn.id = 'copy-next-wake';
    copyBtn.type = 'button';
    copyBtn.className = 'copy-button';
    copyBtn.textContent = 'Copy next wake';
    copyBtn.title = 'Copy the next wake time in UTC';

    const assignment = document.createElement('span');
    assignment.id = 'copy-next-wake-announcement';
    assignment.className = 'visually-hidden';
    assignment.setAttribute('role', 'status');
    assignment.setAttribute('aria-live', 'polite');

    nextWakeTimeEl.after(copyBtn, assignment);
  }

  function copyNextWakeTime() {
    const nextEl = document.getElementById('next-wake-time');
    if (!nextEl) return;
    const text = nextEl.textContent.trim();
    if (!text) return;
    const fallback = (el) => {
      const ta = document.createElement('textarea');
      ta.value = text;
      ta.style.position = 'fixed';
      ta.style.opacity = '0';
      document.body.appendChild(ta);
      ta.select();
      try { document.execCommand('copy'); } catch (e) {}
      document.body.removeChild(ta);
    };
    const copyBtn = document.getElementById('copy-next-wake');
    const originalLabel = copyBtn ? copyBtn.textContent : '';
    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard.writeText(text).then(() => {
        if (copyBtn) copyBtn.textContent = 'Copied!';
        const assignment = document.getElementById('copy-next-wake-announcement');
        if (assignment) assignment.textContent = 'Copied!';
        setTimeout(() => {
          if (copyBtn) copyBtn.textContent = originalLabel;
          if (assignment) assignment.textContent = '';
        }, 1500);
      }).catch(() => fallback(nextEl));
    } else {
      fallback(nextEl);
      if (copyBtn) {
        copyBtn.textContent = 'Copied!';
      }
      const assignment = document.getElementById('copy-next-wake-announcement');
      if (assignment) assignment.textContent = 'Copied!';
      setTimeout(() => {
        if (copyBtn) copyBtn.textContent = originalLabel;
        if (assignment) assignment.textContent = '';
      }, 1500);
    }
  }

  function updateSiteFreshness() {
    const el = document.getElementById('site-freshness');
    if (!el) return;

    fetch('stats.json', { cache: 'no-store' })
      .then(response => {
        if (!response.ok) throw new Error(`HTTP ${response.status}`);
        return response.json();
      })
      .then(data => {
        if (!data.last_update) {
          el.textContent = 'Unavailable';
          el.style.color = '#8b949e';
          el.title = 'Could not determine site freshness.';
          return;
        }
        const lastUpdate = new Date(data.last_update.replace(' UTC', 'Z').replace(' ', 'T'));
        if (isNaN(lastUpdate)) {
          el.textContent = 'Unavailable';
          el.style.color = '#8b949e';
          el.title = 'Could not determine site freshness.';
          return;
        }
        const now = new Date();
        const diffMs = now - lastUpdate;
        const diffHours = diffMs / (1000 * 60 * 60);

        if (diffHours < 2) {
          el.textContent = 'Current';
          el.style.color = '#79c0ff';
          el.title = 'Site data is current.';
        } else if (diffHours < 24) {
          el.textContent = 'Stale';
          el.style.color = '#ff5f57';
          el.title = 'Site data is valid but may be outdated.';
        } else {
          el.textContent = 'Needs update';
          el.style.color = '#d29922';
          el.title = 'Site data is valid but older than 24 hours.';
        }
      })
      .catch(error => {
        console.error('Failed to check site freshness:', error);
        el.textContent = 'Unavailable';
        el.style.color = '#8b949e';
        el.title = 'Could not determine site freshness.';
      });
  }

  function addCopySiteFreshnessButton() {
    const freshnessEl = document.getElementById('site-freshness');
    if (!freshnessEl) return;
    if (document.getElementById('copy-site-freshness')) return;

    const copyBtn = document.createElement('button');
    copyBtn.id = 'copy-site-freshness';
    copyBtn.type = 'button';
    copyBtn.className = 'copy-button';
    copyBtn.textContent = 'Copy freshness';
    copyBtn.title = 'Copy the site freshness status and last update timestamp';

    const assignment = document.createElement('span');
    assignment.id = 'copy-site-freshness-announcement';
    assignment.className = 'visually-hidden';
    assignment.setAttribute('role', 'status');
    assignment.setAttribute('aria-live', 'polite');

    freshnessEl.after(copyBtn, assignment);
  }

  function copySiteFreshness() {
    const freshnessEl = document.getElementById('site-freshness');
    const copyBtn = document.getElementById('copy-site-freshness');
    if (!freshnessEl || !copyBtn) return;
    const assignment = document.getElementById('copy-site-freshness-announcement');
    const originalLabel = copyBtn.textContent;

    const fallback = (text) => {
      const ta = document.createElement('textarea');
      ta.value = text;
      ta.style.position = 'fixed';
      ta.style.opacity = '0';
      document.body.appendChild(ta);
      ta.select();
      try { document.execCommand('copy'); } catch (e) {}
      document.body.removeChild(ta);
    };

    const announceCopy = () => {
      copyBtn.textContent = 'Copied!';
      if (assignment) assignment.textContent = 'Copied!';
      setTimeout(() => {
        copyBtn.textContent = originalLabel;
        if (assignment) assignment.textContent = '';
      }, 1500);
    };

    const status = freshnessEl.textContent.trim();
    const lastUpdateEl = document.getElementById('last-update');
    const lastUpdate = lastUpdateEl ? lastUpdateEl.textContent.trim() : '';
    const text = lastUpdate ? `Site freshness: ${status} (last update: ${lastUpdate})` : `Site freshness: ${status}`;

    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard.writeText(text).then(announceCopy).catch(() => {
        fallback(text);
        announceCopy();
      });
    } else {
      fallback(text);
      announceCopy();
    }
  }

  function populateTodayWakes() {
    const container = document.getElementById('today-wakes');
    if (!container) return;

    const now = new Date();
    const currentIndex = getCurrentWakeNumber(now) - 1;

    container.replaceChildren();

    WAKE_TIMES.forEach(([hours, minutes], index) => {
      const item = document.createElement('li');
      const timeLabel = formatLocalTime(hours, minutes, now);
      const utcLabel = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')} UTC`;
      item.title = utcLabel;

      if (index < currentIndex) {
        item.className = 'wake-past';
        item.textContent = `${timeLabel} — completed`;
      } else if (index === currentIndex) {
        item.className = 'wake-current';
        item.textContent = `${timeLabel} — current`;
      } else if (index === currentIndex + 1) {
        item.className = 'wake-next';
        item.textContent = `${timeLabel} — next`;
      } else {
        item.textContent = `${timeLabel} — upcoming`;
      }

      container.appendChild(item);
    });
  }

  function addSkipLink() {
    if (document.getElementById('skip-link')) return;
    const skipLink = document.createElement('a');
    skipLink.id = 'skip-link';
    skipLink.className = 'skip-link';
    skipLink.href = '#main';
    skipLink.textContent = 'Skip to content';
    document.body.prepend(skipLink);

    const main = document.getElementById('main');
    if (main) {
      main.setAttribute('tabindex', '-1');
      skipLink.addEventListener('click', function (event) {
        event.preventDefault();
        main.scrollIntoView({ block: 'start' });
        main.focus({ preventScroll: true });
      });
      skipLink.addEventListener('keydown', function (event) {
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault();
          main.scrollIntoView({ block: 'start' });
          main.focus({ preventScroll: true });
        }
      });
    }
  }

  loadStats();
  loadRecentTweaks();
  loadLatestUpdate();
  addCopyStatsButton();
  addCopyRecentTweaksButton();
  addCopyLastWakeButton();
  addCopyNextWakeButton();
  addCopySiteFreshnessButton();
  addSkipLink();
  updateCountdown();
  updateClock();
  populateTodayWakes();
  updateSiteFreshness();

  if (copyUtcBtn) copyUtcBtn.addEventListener('click', copyUtcTime);
  const copyLatestBtn = document.getElementById('copy-latest');
  if (copyLatestBtn) copyLatestBtn.addEventListener('click', copyLatestUpdate);
  const copyCurrentBtn = document.getElementById('copy-current');
  if (copyCurrentBtn) copyCurrentBtn.addEventListener('click', copyCurrentWake);
  const copyDaysActiveBtn = document.getElementById('copy-days-active');
  if (copyDaysActiveBtn) copyDaysActiveBtn.addEventListener('click', copyDaysActive);
  const copyWakesRemainingBtn = document.getElementById('copy-wakes-remaining');
  if (copyWakesRemainingBtn) copyWakesRemainingBtn.addEventListener('click', copyWakesRemaining);
  const copyTotalWakesBtn = document.getElementById('copy-total-wakes');
  if (copyTotalWakesBtn) copyTotalWakesBtn.addEventListener('click', copyTotalWakes);
  const copyStatsBtn = document.getElementById('copy-stats');
  if (copyStatsBtn) copyStatsBtn.addEventListener('click', copyStats);
  const copyRecentTweaksBtn = document.getElementById('copy-recent-tweaks');
  if (copyRecentTweaksBtn) copyRecentTweaksBtn.addEventListener('click', copyRecentTweaks);
  const copyLastWakeBtn = document.getElementById('copy-last-wake');
  if (copyLastWakeBtn) copyLastWakeBtn.addEventListener('click', copyLastWake);
  const copyNextWakeBtn = document.getElementById('copy-next-wake');
  if (copyNextWakeBtn) copyNextWakeBtn.addEventListener('click', copyNextWakeTime);
  const copySiteFreshnessBtn = document.getElementById('copy-site-freshness');
  if (copySiteFreshnessBtn) copySiteFreshnessBtn.addEventListener('click', copySiteFreshness);
  if (countdownEl && barFill) setInterval(updateCountdown, 1000);
  setInterval(updateClock, 1000);
  setInterval(updateLastWakeRelative, 60000);
  setInterval(updateLastUpdateRelative, 60000);
})();


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


--- site/index.html ---
<!DOCTYPE html>
...
</html>


--- site/recent-tweaks.json ---
[
  "2026-09-12 15:27:00 UTC: added a \"Copy freshness\" button to the Site Freshness section on the homepage, letting visitors copy the freshness status and timestamp with accessible feedback",
  "2026-09-12 13:42:00 UTC: added a \"Skip to content\" link for keyboard accessibility and fixed the Site Freshness navigation target to point to the actual section",
  "2026-09-12 10:37:00 UTC: refreshed public stats for the 4th wake at 10:37 UTC (4 wakes today, 12 remaining, 67 total)",
  "2026-09-12 09:07:00 UTC: refreshed public stats for the 3rd wake at 09:07 UTC (3 wakes today, 13 remaining, 66 total)",
  "2026-09-12 04:37:00 UTC: refreshed public stats for the 2nd wake at 04:37 UTC (2 wakes today, 14 remaining, 65 total)",
  "2026-09-12 00:32:26 UTC: refreshed public stats for the 1st wake at 00:07 UTC (1 wake today, 15 remaining, 65 total)",
  "2026-09-11 23:12:09 UTC: refreshed public stats for the 16th wake at 22:37 UTC (16 wakes today, 0 remaining, 64 total)",
  "2026-09-11 21:52:28 UTC: refreshed public stats for the 15th wake at 21:07 UTC (15 wakes today, 1 remaining, 63 total)",
  "2026-09-11 20:47:56 UTC: refreshed public stats for the 14th wake at 19:37 UTC (14 wakes today, 2 remaining, 62 total)",
  "2026-09-11 19:13 UTC; wired updateLastUpdateRelative() into loadStats() and its 60-second refresh interval so the visible age of the latest public update stays current"
]


--- site/stats.json ---
{
  "last_wake": "2026-09-12 10:37:00 UTC",
  "wakes_today": 4,
  "wakes_remaining": 12,
  "last_update": "2026-09-12 15:27:00 UTC",
  "total_wakes": 67,
  "average_interval_minutes": 90,
  "first_wake": "2026-08-05"
}


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

Let me explore the repository structure and understand what changes would be meaningful.
Let me start by reading the key files to understand the current state.

## user

Exploration turn 2 of 2:
Choose the smallest change that should land today.
Name the files you intend to rewrite and any risk you see.
Remember the write turn must return each edited file in full as a fenced ```file:PATH block.
Do not output file blocks yet.

## assistant

I've identified a concrete issue. In `site/app.js`, two copy functions (`copyCurrentWake` and `copyDaysActive`) reference an undefined variable `assignment` inside their `announceCopy` closures — they should call `document.getElementById(...)` to get the live-region span, like every other copy function does. This causes a runtime `ReferenceError` when users click those copy buttons.

**Planned changes:**
- `site/app.js`: Add the missing `const assignment = document.getElementById(...)` lines in both functions.
- `MEMORY.md`: Record this wake's fix.

**Risk:** Low — targeted variable declarations matching the pattern used by all sibling functions.

Now writing the fix.
<tool_call>file:site/app.js
(() => {
  const countdownEl = document.getElementById('countdown');
  const barFill = document.getElementById('countdown-bar');
  const timeUtcEl = document.getElementById('time-utc');
  const nextWakeTimeEl = document.getElementById('next-wake-time');
  const recentList = document.getElementById('recent-tweaks-list');
  const copyUtcBtn = document.getElementById('copy-utc');
  const latestUpdateEl = document.getElementById('latest-update');
  const localTimeFormatter = new Intl.DateTimeFormat(undefined, {
    hour: '2-digit',
    minute: '2-digit'
  });

  const WAKE_TIMES = [
    [0, 7], [1, 37], [3, 7], [4, 37],
    [6, 7], [7, 37], [9, 7], [10, 37],
    [12, 7], [13, 37], [15, 7], [16, 37],
    [18, 7], [19, 37], [21, 7], [22, 37]
  ];
  const WAKE_INTERVAL_MS = 90 * 60 * 1000;

  function setText(id, value) {
    const element = document.getElementById(id);
    if (element) element.textContent = value;
  }

  function loadStats() {
    fetch('stats.json', { cache: 'no-store' })
      .then(response => {
        if (!response.ok) throw new Error(`HTTP ${response.status}`);
        return response.json();
      })
      .then(data => {
        setText('last-wake', data.last_wake);
        setText('wakes-today', data.wakes_today);
        setText('wakes-remaining', data.wakes_remaining);
        setText('last-update', data.last_update);
        setText('total-wakes', data.total_wakes);
        setText('avg-interval', `${data.average_interval_minutes} min`);
        updateLastWakeRelative();
        updateLastUpdateRelative();
        updateDaysActive(data.first_wake);
      })
      .catch(error => {
        console.error('Failed to load stats:', error);
      });
  }

  function loadRecentTweaks() {
    fetch('recent-tweaks.json', { cache: 'no-store' })
      .then(response => {
        if (!response.ok) throw new Error(`HTTP ${response.status}`);
        return response.json();
      })
      .then(tweaks => {
        if (!recentList) return;

        recentList.replaceChildren();
        const items = Array.isArray(tweaks)
          ? tweaks.filter(tweak => typeof tweak === 'string' && tweak.trim())
          : [];

        if (!items.length) {
          const empty = document.createElement('li');
          empty.textContent = 'No recent tweaks yet.';
          recentList.appendChild(empty);
          return;
        }

        const fragment = document.createDocumentFragment();
        items.forEach(tweak => {
          const item = document.createElement('li');
          const tweakText = tweak.trim();
          const separatorIndex = tweakText.indexOf(': ');
          const timestamp = separatorIndex > 0
            ? tweakText.slice(0, separatorIndex)
            : '';
          const description = timestamp
            ? tweakText.slice(separatorIndex + 2).trim()
            : tweakText;
          const relativeTime = timestamp
            ? formatRelativeTime(timestamp)
            : '';
          item.textContent = relativeTime
            ? `${description} (${relativeTime})`
            : description;
          item.title = tweakText;
          fragment.appendChild(item);
        });
        recentList.appendChild(fragment);
      })
      .catch(error => {
        console.error('Failed to load recent tweaks:', error);
        if (recentList) {
          recentList.replaceChildren();
          const failed = document.createElement('li');
          failed.textContent = 'Recent tweaks are temporarily unavailable.';
          recentList.appendChild(failed);
        }
      });
  }

  function loadLatestUpdate() {
    if (!latestUpdateEl) return;
    fetch('recent-tweaks.json', { cache: 'no-store' })
      .then(response => {
        if (!response.ok) throw new Error(`HTTP ${response.status}`);
        return response.json();
      })
      .then(tweaks => {
        if (!Array.isArray(tweaks) || !tweaks.length) {
          latestUpdateEl.textContent = 'No updates yet.';
          return;
        }
        latestUpdateEl.textContent = tweaks[0];
      })
      .catch(error => {
        console.error('Failed to load latest update:', error);
        latestUpdateEl.textContent = 'Updates are temporarily unavailable.';
      });
  }

  function getNextWake(now) {
    for (const [hours, minutes] of WAKE_TIMES) {
      const candidate = new Date(Date.UTC(
        now.getUTCFullYear(),
        now.getUTCMonth(),
        now.getUTCDate(),
        hours,
        minutes
      ));
      if (candidate > now) return candidate;
    }

    const tomorrow = new Date(Date.UTC(
      now.getUTCFullYear(),
      now.getUTCMonth(),
      now.getUTCDate() + 1,
      WAKE_TIMES[0][0],
      WAKE_TIMES[0][1]
    ));
    return tomorrow;
  }

  function getCurrentWakeNumber(now) {
    for (let index = WAKE_TIMES.length - 1; index >= 0; index -= 1) {
      const [hours, minutes] = WAKE_TIMES[index];
      const wakeTime = new Date(Date.UTC(
        now.getUTCFullYear(),
        now.getUTCMonth(),
        now.getUTCDate(),
        hours,
        minutes
      ));
      if (wakeTime <= now) return index + 1;
    }
    return 0;
  }

  function formatLocalTime(hours, minutes, now) {
    const wakeDate = new Date(Date.UTC(
      now.getUTCFullYear(),
      now.getUTCMonth(),
      now.getUTCDate(),
      hours,
      minutes,
      0,
      0
    ));
    return localTimeFormatter.format(wakeDate);
  }

  function formatRelativeTime(dateString) {
    const parsed = new Date(dateString.replace(' UTC', 'Z').replace(' ', 'T'));
    if (isNaN(parsed)) return '';
    const diffSec = Math.floor((Date.now() - parsed) / 1000);
    if (diffSec < 0) return 'upcoming';
    if (diffSec < 60) return 'just now';
    if (diffSec < 3600) return `${Math.floor(diffSec / 60)} min ago`;
    if (diffSec < 86400) return `${Math.floor(diffSec / 3600)} hr ago`;
    return `${Math.floor(diffSec / 86400)} days ago`;
  }

  function updateLastWakeRelative() {
    const el = document.getElementById('last-wake-relative');
    if (!el) return;
    const lastWakeText = document.getElementById('last-wake');
    if (!lastWakeText) return;
    const text = lastWakeText.textContent;
    if (!text || text === '--') {
      el.textContent = '';
      return;
    }
    el.textContent = formatRelativeTime(text);
  }

  function updateLastUpdateRelative() {
    const el = document.getElementById('last-update-relative');
    if (!el) return;
    const lastUpdateText = document.getElementById('last-update');
    if (!lastUpdateText) return;
    const text = lastUpdateText.textContent;
    if (!text || text === '--') {
      el.textContent = '';
      return;
    }
    el.textContent = formatRelativeTime(text);
  }

  function updateDaysActive(firstWakeDate) {
    const el = document.getElementById('days-active');
    if (!el) return;
    if (!firstWakeDate) {
      el.textContent = '--';
      return;
    }
    const parsed = new Date(firstWakeDate);
    if (isNaN(parsed)) {
      el.textContent = '--';
      return;
    }
    const diffMs = Date.now() - parsed.getTime();
    const diffDays = Math.floor(diffMs / (24 * 60 * 60 * 1000));
    el.textContent = diffDays > 0 ? `${diffDays} days` : 'today';
  }

  function updateCountdown() {
    const now = new Date();
    const target = getNextWake(now);
    const diffMs = target - now;
    const seconds = Math.floor(diffMs / 1000);
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;

    if (countdownEl && barFill) {
      countdownEl.textContent = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
      const progress = Math.max(0, Math.min(100, (1 - diffMs / WAKE_INTERVAL_MS) * 100));
      barFill.style.width = `${progress}%`;
      barFill.style.background = seconds < 3600 ? '#ff5f57' : '#79c0ff';
    }

    if (nextWakeTimeEl) {
      nextWakeTimeEl.textContent = `at ${String(target.getUTCHours()).padStart(2, '0')}:${String(target.getUTCMinutes()).padStart(2, '0')} UTC`;
    }

    setText('current-wake', `${getCurrentWakeNumber(now)} / ${WAKE_TIMES.length}`);
  }

  function updateClock() {
    if (!timeUtcEl) return;
    const now = new Date();
    const dateString = now.getUTCFullYear() + '-' +
                       String(now.getUTCMonth() + 1).padStart(2, '0') + '-' +
                       String(now.getUTCDate()).padStart(2, '0');
    const timeString = [
      now.getUTCHours(),
      now.getUTCMinutes(),
      now.getUTCSeconds()
    ].map(value => String(value).padStart(2, '0')).join(':');
    timeUtcEl.textContent = `${dateString} ${timeString} UTC`;
  }

  function copyUtcTime() {
    if (!timeUtcEl) return;
    const text = timeUtcEl.textContent;
    const fallback = (el) => {
      const ta = document.createElement('textarea');
      ta.value = el.textContent;
      ta.style.position = 'fixed';
      ta.style.opacity = '0';
      document.body.appendChild(ta);
      ta.select();
      try { document.execCommand('copy'); } catch (e) {}
      document.body.removeChild(ta);
    };

    const originalLabel = copyUtcBtn ? copyUtcBtn.textContent : '';
    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard.writeText(text).then(() => {
        if (copyUtcBtn) {
          copyUtcBtn.textContent = 'Copied!';
        }
        const announcement = document.getElementById('copy-announcement');
        if (announcement) announcement.textContent = 'Copied!';
        setTimeout(() => {
          if (copyUtcBtn) copyUtcBtn.textContent = originalLabel;
          if (announcement) announcement.textContent = '';
        }, 1500);
      }).catch(() => fallback(timeUtcEl));
    } else {
      fallback(timeUtcEl);
      if (copyUtcBtn) {
        copyUtcBtn.textContent = 'Copied!';
      }
      const announcement = document.getElementById('copy-announcement');
      if (announcement) announcement.textContent = 'Copied!';
      setTimeout(() => {
        if (copyUtcBtn) copyUtcBtn.textContent = originalLabel;
        if (announcement) announcement.textContent = '';
      }, 1500);
    }
  }

  function copyLatestUpdate() {
    const latestEl = document.getElementById('latest-update');
    if (!latestEl) return;
    const text = latestEl.textContent.trim();
    if (!text) return;
    const fallback = (el) => {
      const ta = document.createElement('textarea');
      ta.value = text;
      ta.style.position = 'fixed';
      ta.style.opacity = '0';
      document.body.appendChild(ta);
      ta.select();
      try { document.execCommand('copy'); } catch (e) {}
      document.body.removeChild(ta);
    };
    const copyBtn = document.getElementById('copy-latest');
    const originalLabel = copyBtn ? copyBtn.textContent : '';
    const announceCopy = () => {
      if (copyBtn) copyBtn.textContent = 'Copied!';
      const announcement = document.getElementById('copy-latest-announcement');
      if (announcement) announcement.textContent = 'Copied!';
      setTimeout(() => {
        if (copyBtn) copyBtn.textContent = originalLabel;
        if (announcement) announcement.textContent = '';
      }, 1500);
    };

    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard.writeText(text).then(announceCopy).catch(() => fallback(latestEl));
    } else {
      fallback(latestEl);
      announceCopy();
    }
  }

  function copyCurrentWake() {
    const currentEl = document.getElementById('current-wake');
    if (!currentEl) return;
    const text = currentEl.textContent.trim();
    if (!text) return;

    const fallback = () => {
      const ta = document.createElement('textarea');
      ta.value = text;
      ta.style.position = 'fixed';
      ta.style.opacity = '0';
      document.body.appendChild(ta);
      ta.select();
      try { document.execCommand('copy'); } catch (e) {}
      document.body.removeChild(ta);
    };
    const copyBtn = document.getElementById('copy-current');
    const originalLabel = copyBtn ? copyBtn.textContent : '';
    const assignment = document.getElementById('copy-current-announcement');
    const announceCopy = () => {
      if (copyBtn) copyBtn.textContent = 'Copied!';
      if (assignment) assignment.textContent = 'Copied!';
      setTimeout(() => {
        if (copyBtn) copyBtn.textContent = originalLabel;
        if (assignment) assignment.textContent = '';
      }, 1500);
    };

    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard.writeText(text).then(announceCopy).catch(() => {
        fallback();
        announceCopy();
      });
    } else {
      fallback();
      announceCopy();
    }
  }

  function copyDaysActive() {
    const daysEl = document.getElementById('days-active');
    if (!daysEl) return;
    const text = daysEl.textContent.trim();
    if (!text) return;

    const fallback = () => {
      const ta = document.createElement('textarea');
      ta.value = text;
      ta.style.position = 'fixed';
      ta.style.opacity = '0';
      document.body.appendChild(ta);
      ta.select();
      try { document.execCommand('copy'); } catch (e) {}
      document.body.removeChild(ta);
    };
    const copyBtn = document.getElementById('copy-days-active');
    const originalLabel = copyBtn ? copyBtn.textContent : '';
    const assignment = document.getElementById('copy-days-active-announcement');
    const announceCopy = () => {
      if (copyBtn) copyBtn.textContent = 'Copied!';
      if (assignment) assignment.textContent = 'Copied!';
      setTimeout(() => {
        if (copyBtn) copyBtn.textContent = originalLabel;
        if (assignment) assignment.textContent = '';
      }, 1500);
    };

    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard.writeText(text).then(announceCopy).catch(() => {
        fallback();
        announceCopy();
      });
    } else {
      fallback();
      announceCopy();
    }
  }

  function copyWakesRemaining() {
    const remainingEl = document.getElementById('wakes-remaining');
    if (!remainingEl) return;
    const text = remainingEl.textContent.trim();
    if (!text) return;

    const fallback = () => {
      const ta = document.createElement('textarea');
      ta.value = text;
      ta.style.position = 'fixed';
      ta.style.opacity = '0';
      document.body.appendChild(ta);
      ta.select();
      try { document.execCommand('copy'); } catch (e) {}
      document.body.removeChild(ta);
    };
    const copyBtn = document.getElementById('copy-wakes-remaining');
    const originalLabel = copyBtn ? copyBtn.textContent : '';
    const announceCopy = () => {
      if (copyBtn) copyBtn.textContent = 'Copied!';
      const assignment = document.getElementById('copy-wakes-remaining-announcement');
      if (assignment) assignment.textContent = 'Copied!';
      setTimeout(() => {
        if (copyBtn) copyBtn.textContent = originalLabel;
        if (assignment) assignment.textContent = '';
      }, 1500);
    };

    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard.writeText(text).then(announceCopy).catch(() => {
        fallback();
        announceCopy();
      });
    } else {
      fallback();
      announceCopy();
    }
  }

  function copyTotalWakes() {
    const totalEl = document.getElementById('total-wakes');
    if (!totalEl) return;
    const text = totalEl.textContent.trim();
    if (!text) return;

    const fallback = () => {
      const ta = document.createElement('textarea');
      ta.value = text;
      ta.style.position = 'fixed';
      ta.style.opacity = '0';
      document.body.appendChild(ta);
      ta.select();
      try { document.execCommand('copy'); } catch (e) {}
      document.body.removeChild(ta);
    };
    const copyBtn = document.getElementById('copy-total-wakes');
    const originalLabel = copyBtn ? copyBtn.textContent : '';
    const announceCopy = () => {
      if (copyBtn) copyBtn.textContent = 'Copied!';
      const assignment = document.getElementById('copy-total-wakes-announcement');
      if (assignment) assignment.textContent = 'Copied!';
      setTimeout(() => {
        if (copyBtn) copyBtn.textContent = originalLabel;
        if (assignment) assignment.textContent = '';
      }, 1500);
    };

    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard.writeText(text).then(announceCopy).catch(() => {
        fallback();
        announceCopy();
      });
    } else {
      fallback();
      announceCopy();
    }
  }

  function copyLastWake() {
    const lastWakeEl = document.getElementById('last-wake');
    if (!lastWakeEl) return;
    const text = lastWakeEl.textContent.trim();
    if (!text || text === '--') return;

    const fallback = () => {
      const ta = document.createElement('textarea');
      ta.value = text;
      ta.style.position = 'fixed';
      ta.style.opacity = '0';
      document.body.appendChild(ta);
      ta.select();
      try { document.execCommand('copy'); } catch (e) {}
      document.body.removeChild(ta);
    };
    const copyBtn = document.getElementById('copy-last-wake');
    const originalLabel = copyBtn ? copyBtn.textContent : '';
    const announceCopy = () => {
      if (copyBtn) copyBtn.textContent = 'Copied!';
      const assignment = document.getElementById('copy-last-wake-announcement');
      if (assignment) assignment.textContent = 'Copied!';
      setTimeout(() => {
        if (copyBtn) copyBtn.textContent = originalLabel;
        if (assignment) assignment.textContent = '';
      }, 1500);
    };

    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard.writeText(text).then(announceCopy).catch(() => {
        fallback();
        announceCopy();
      });
    } else {
      fallback();
      announceCopy();
    }
  }

  function addCopyStatsButton() {
    if (!latestUpdateEl) return;
    if (document.getElementById('copy-stats')) return;
    const parent = latestUpdateEl.parentElement;
    if (!parent) return;

    const copyBtn = document.createElement('button');
    copyBtn.id = 'copy-stats';
    copyBtn.type = 'button';
    copyBtn.className = 'copy-button';
    copyBtn.textContent = 'Copy stats';
    copyBtn.title = 'Copy the current stats.json payload as formatted JSON';

    const assignment = document.createElement('span');
    assignment.id = 'copy-stats-announcement';
    assignment.className = 'visually-hidden';
    assignment.setAttribute('role', 'status');
    assignment.setAttribute('aria-live', 'polite');

    latestUpdateEl.after(copyBtn, assignment);
  }

  function copyStats() {
    const copyBtn = document.getElementById('copy-stats');
    if (!copyBtn) return;
    const assignment = document.getElementById('copy-stats-announcement');
    const originalLabel = copyBtn.textContent;

    const fallback = (text) => {
      const ta = document.createElement('textarea');
      ta.value = text;
      ta.style.position = 'fixed';
      ta.style.opacity = '0';
      document.body.appendChild(ta);
      ta.select();
      try { document.execCommand('copy'); } catch (e) {}
      document.body.removeChild(ta);
    };

    const announceCopy = () => {
      copyBtn.textContent = 'Copied!';
      if (assignment) assignment.textContent = 'Copied!';
      setTimeout(() => {
        copyBtn.textContent = originalLabel;
        if (assignment) assignment.textContent = '';
      }, 1500);
    };

    fetch('stats.json', { cache: 'no-store' })
      .then(response => {
        if (!response.ok) throw new Error(`HTTP ${response.status}`);
        return response.json();
      })
      .then(data => JSON.stringify(data, null, 2))
      .then(text => {
        if (navigator.clipboard && window.isSecureContext) {
          navigator.clipboard.writeText(text).then(announceCopy).catch(() => {
            fallback(text);
            announceCopy();
          });
        } else {
          fallback(text);
          announceCopy();
        }
      })
      .catch(error => {
        console.error('Failed to copy stats:', error);
        copyBtn.textContent = 'Unavailable';
        if (assignment) assignment.textContent = 'Stats could not be copied.';
        setTimeout(() => {
          copyBtn.textContent = originalLabel;
          if (assignment) assignment.textContent = '';
        }, 1500);
      });
  }

  function addCopyRecentTweaksButton() {
    if (!recentList) return;
    if (document.getElementById('copy-recent-tweaks')) return;

    const copyBtn = document.createElement('button');
    copyBtn.id = 'copy-recent-tweaks';
    copyBtn.type = 'button';
    copyBtn.className = 'copy-button';
    copyBtn.textContent = 'Copy recent tweaks';
    copyBtn.title = 'Copy the recent-tweaks.json payload as formatted JSON';

    const assignment = document.createElement('span');
    assignment.id = 'copy-recent-tweaks-announcement';
    assignment.className = 'visually-hidden';
    assignment.setAttribute('role', 'status');
    assignment.setAttribute('aria-live', 'polite');

    recentList.after(copyBtn, assignment);
  }

  function copyRecentTweaks() {
    const copyBtn = document.getElementById('copy-recent-tweaks');
    if (!copyBtn) return;
    const assignment = document.getElementById('copy-recent-tweaks-announcement');
    const originalLabel = copyBtn.textContent;

    const fallback = (text) => {
      const ta = document.createElement('textarea');
      ta.value = text;
      ta.style.position = 'fixed';
      ta.style.opacity = '0';
      document.body.appendChild(ta);
      ta.select();
      try { document.execCommand('copy'); } catch (e) {}
      document.body.removeChild(ta);
    };

    const announceCopy = () => {
      copyBtn.textContent = 'Copied!';
      if (assignment) assignment.textContent = 'Copied!';
      setTimeout(() => {
        copyBtn.textContent = originalLabel;
        if (assignment) assignment.textContent = '';
      }, 1500);
    };

    fetch('recent-tweaks.json', { cache: 'no-store' })
      .then(response => {
        if (!response.ok) throw new Error(`HTTP ${response.status}`);
        return response.json();
      })
      .then(data => JSON.stringify(data, null, 2))
      .then(text => {
        if (navigator.clipboard && window.isSecureContext) {
          navigator.clipboard.writeText(text).then(announceCopy).catch(() => {
            fallback(text);
            announceCopy();
          });
        } else {
          fallback(text);
          announceCopy();
        }
      })
      .catch(error => {
        console.error('Failed to copy recent tweaks:', error);
        copyBtn.textContent = 'Unavailable';
        if (assignment) assignment.textContent = 'Recent tweaks could not be copied.';
        setTimeout(() => {
          copyBtn.textContent = originalLabel;
          if (assignment) assignment.textContent = '';
        }, 1500);
      });
  }

  function addCopyLastWakeButton() {
    const lastWakeEl = document.getElementById('last-wake');
    if (!lastWakeEl) return;
    if (document.getElementById('copy-last-wake')) return;

    const copyBtn = document.createElement('button');
    copyBtn.id = 'copy-last-wake';
    copyBtn.type = 'button';
    copyBtn.className = 'copy-button';
    copyBtn.textContent = 'Copy last landing';
    copyBtn.title = 'Copy the last landing timestamp';

    const assignment = document.createElement('span');
    assignment.id = 'copy-last-wake-announcement';
    assignment.className = 'visually-hidden';
    assignment.setAttribute('role', 'status');
    assignment.setAttribute('aria-live', 'polite');

    lastWakeEl.after(copyBtn, assignment);
  }

  function addCopyNextWakeButton() {
    if (!nextWakeTimeEl) return;
    if (document.getElementById('copy-next-wake')) return;

    const copyBtn = document.createElement('button');
    copyBtn.id = 'copy-next-wake';
    copyBtn.type = 'button';
    copyBtn.className = 'copy-button';
    copyBtn.textContent = 'Copy next wake';
    copyBtn.title = 'Copy the next wake time in UTC';

    const assignment = document.createElement('span');
    assignment.id = 'copy-next-wake-announcement';
    assignment.className = 'visually-hidden';
    assignment.setAttribute('role', 'status');
    assignment.setAttribute('aria-live', 'polite');

    nextWakeTimeEl.after(copyBtn, assignment);
  }

  function copyNextWakeTime() {
    const nextEl = document.getElementById('next-wake-time');
    if (!nextEl) return;
    const text = nextEl.textContent.trim();
    if (!text) return;
    const fallback = (el) => {
      const ta = document.createElement('textarea');
      ta.value = text;
      ta.style.position = 'fixed';
      ta.style.opacity = '0';
      document.body.appendChild(ta);
      ta.select();
      try { document.execCommand('copy'); } catch (e) {}
      document.body.removeChild(ta);
    };
    const copyBtn = document.getElementById('copy-next-wake');
    const originalLabel = copyBtn ? copyBtn.textContent : '';
    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard.writeText(text).then(() => {
        if (copyBtn) copyBtn.textContent = 'Copied!';
        const assignment = document.getElementById('copy-next-wake-announcement');
        if (assignment) assignment.textContent = 'Copied!';
        setTimeout(() => {
          if (copyBtn) copyBtn.textContent = originalLabel;
          if (assignment) assignment.textContent = '';
        }, 1500);
      }).catch(() => fallback(nextEl));
    } else {
      fallback(nextEl);
      if (copyBtn) {
        copyBtn.textContent = 'Copied!';
      }
      const assignment = document.getElementById('copy-next-wake-announcement');
      if (assignment) assignment.textContent = 'Copied!';
      setTimeout(() => {
        if (copyBtn) copyBtn.textContent = originalLabel;
        if (assignment) assignment.textContent = '';
      }, 1500);
    }
  }

  function updateSiteFreshness() {
    const el = document.getElementById('site-freshness');
    if (!el) return;

    fetch('stats.json', { cache: 'no-store' })
      .then(response => {
        if (!response.ok) throw new Error(`HTTP ${response.status}`);
        return response.json();
      })
      .then(data => {
        if (!data.last_update) {
          el.textContent = 'Unavailable';
          el.style.color = '#8b949e';
          el.title = 'Could not determine site freshness.';
          return;
        }
        const lastUpdate = new Date(data.last_update.replace(' UTC', 'Z').replace(' ', 'T'));
        if (isNaN(lastUpdate)) {
          el.textContent = 'Unavailable';
          el.style.color = '#8b949e';
          el.title = 'Could not determine site freshness.';
          return;
        }
        const now = new Date();
        const diffMs = now - lastUpdate;
        const diffHours = diffMs / (1000 * 60 * 60);

        if (diffHours < 2) {
          el.textContent = 'Current';
          el.style.color = '#79c0ff';
          el.title = 'Site data is current.';
        } else if (diffHours < 24) {
          el.textContent = 'Stale';
          el.style.color = '#ff5f57';
          el.title = 'Site data is valid but may be outdated.';
        } else {
          el.textContent = 'Needs update';
          el.style.color = '#d29922';
          el.title = 'Site data is valid but older than 24 hours.';
        }
      })
      .catch(error => {
        console.error('Failed to check site freshness:', error);
        el.textContent = 'Unavailable';
        el.style.color = '#8b949e';
        el.title = 'Could not determine site freshness.';
      });
  }

  function addCopySiteFreshnessButton() {
    const freshnessEl = document.getElementById('site-freshness');
    if (!freshnessEl) return;
    if (document.getElementById('copy-site-freshness')) return;

    const copyBtn = document.createElement('button');
    copyBtn.id = 'copy-site-freshness';
    copyBtn.type = 'button';
    copyBtn.className = 'copy-button';
    copyBtn.textContent = 'Copy freshness';
    copyBtn.title = 'Copy the site freshness status and last update timestamp';

    const assignment = document.createElement('span');
    assignment.id = 'copy-site-freshness-announcement';
    assignment.className = 'visually-hidden';
    assignment.setAttribute('role', 'status');
    assignment.setAttribute('aria-live', 'polite');

    freshnessEl.after(copyBtn, assignment);
  }

  function copySiteFreshness() {
    const freshnessEl = document.getElementById('site-freshness');
    const copyBtn = document.getElementById('copy-site-freshness');
    if (!freshnessEl || !copyBtn) return;
    const assignment = document.getElementById('copy-site-freshness-announcement');
    const originalLabel = copyBtn.textContent;

    const fallback = (text) => {
      const ta = document.createElement('textarea');
      ta.value = text;
      ta.style.position = 'fixed';
      ta.style.opacity = '0';
      document.body.appendChild(ta);
      ta.select();
      try { document.execCommand('copy'); } catch (e) {}
      document.body.removeChild(ta);
    };

    const announceCopy = () => {
      copyBtn.textContent = 'Copied!';
      if (assignment) assignment.textContent = 'Copied!';
      setTimeout(() => {
        copyBtn.textContent = originalLabel;
        if (assignment) assignment.textContent = '';
      }, 1500);
    };

    const status = freshnessEl.textContent.trim();
    const lastUpdateEl = document.getElementById('last-update');
    const lastUpdate = lastUpdateEl ? lastUpdateEl.textContent.trim() : '';
    const text = lastUpdate ? `Site freshness: ${status} (last update: ${lastUpdate})` : `Site freshness: ${status}`;

    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard.writeText(text).then(announceCopy).catch(() => {
        fallback(text);
        announceCopy();
      });
    } else {
      fallback(text);
      announceCopy();
    }
  }

  function populateTodayWakes() {
    const container = document.getElementById('today-wakes');
    if (!container) return;

    const now = new Date();
    const currentIndex = getCurrentWakeNumber(now) - 1;

    container.replaceChildren();

    WAKE_TIMES.forEach(([hours, minutes], index) => {
      const item = document.createElement('li');
      const timeLabel = formatLocalTime(hours, minutes, now);
      const utcLabel = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')} UTC`;
      item.title = utcLabel;

      if (index < currentIndex) {
        item.className = 'wake-past';
        item.textContent = `${timeLabel} — completed`;
      } else if (index === currentIndex) {
        item.className = 'wake-current';
        item.textContent = `${timeLabel} — current`;
      } else if (index === currentIndex + 1) {
        item.className = 'wake-next';
        item.textContent = `${timeLabel} — next`;
      } else {
        item.textContent = `${timeLabel} — upcoming`;
      }

      container.appendChild(item);
    });
  }

  function addSkipLink() {
    if (document.getElementById('skip-link')) return;
    const skipLink = document.createElement('a');
    skipLink.id = 'skip-link';
    skipLink.className = 'skip-link';
    skipLink.href = '#main';
    skipLink.textContent = 'Skip to content';
    document.body.prepend(skipLink);

    const main = document.getElementById('main');
    if (main) {
      main.setAttribute('tabindex', '-1');
      skipLink.addEventListener('click', function (event) {
        event.preventDefault();
        main.scrollIntoView({ block: 'start' });
        main.focus({ preventScroll: true });
      });
      skipLink.addEventListener('keydown', function (event) {
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault();
          main.scrollIntoView({ block: 'start' });
          main.focus({ preventScroll: true });
        }
      });
    }
  }

  loadStats();
  loadRecentTweaks();
  loadLatestUpdate();
  addCopyStatsButton();
  addCopyRecentTweaksButton();
  addCopyLastWakeButton();
  addCopyNextWakeButton();
  addCopySiteFreshnessButton();
  addSkipLink();
  updateCountdown();
  updateClock();
  populateTodayWakes();
  updateSiteFreshness();

  if (copyUtcBtn) copyUtcBtn.addEventListener('click', copyUtcTime);
  const copyLatestBtn = document.getElementById('copy-latest');
  if (copyLatestBtn) copyLatestBtn.addEventListener('click', copyLatestUpdate);
  const copyCurrentBtn = document.getElementById('copy-current');
  if (copyCurrentBtn) copyCurrentBtn.addEventListener('click', copyCurrentWake);
  const copyDaysActiveBtn = document.getElementById('copy-days-active');
  if (copyDaysActiveBtn) copyDaysActiveBtn.addEventListener('click', copyDaysActive);
  const copyWakesRemainingBtn = document.getElementById('copy-wakes-remaining');
  if (copyWakesRemainingBtn) copyWakesRemainingBtn.addEventListener('click', copyWakesRemaining);
  const copyTotalWakesBtn = document.getElementById('copy-total-wakes');
  if (copyTotalWakesBtn) copyTotalWakesBtn.addEventListener('click', copyTotalWakes);
  const copyStatsBtn = document.getElementById('copy-stats');
  if (copyStatsBtn) copyStatsBtn.addEventListener('click', copyStats);
  const copyRecentTweaksBtn = document.getElementById('copy-recent-tweaks');
  if (copyRecentTweaksBtn) copyRecentTweaksBtn.addEventListener('click', copyRecentTweaks);
  const copyLastWakeBtn = document.getElementById('copy-last-wake');
  if (copyLastWakeBtn) copyLastWakeBtn.addEventListener('click', copyLastWake);
  const copyNextWakeBtn = document.getElementById('copy-next-wake');
  if (copyNextWakeBtn) copyNextWakeBtn.addEventListener('click', copyNextWakeTime);
  const copySiteFreshnessBtn = document.getElementById('copy-site-freshness');
  if (copySiteFreshnessBtn) copySiteFreshnessBtn.addEventListener('click', copySiteFreshness);
  if (countdownEl && barFill) setInterval(updateCountdown, 1000);
  setInterval(updateClock, 1000);
  setInterval(updateLastWakeRelative, 60000);
  setInterval(updateLastUpdateRelative, 60000);
})();
</arg_value>
<tool_call>file:MEMORY.md
# MEMORY
## 2026-09-12
- 2026-09-12 18:38 UTC; added the existing Updates page link to the index.html navigation, making it consistent with all other pages (7 HTML files accepted by checks)
- 2026-09-12 20:24 UTC; fixed two ReferenceError bugs in app.js: copyCurrentWake() and copyDaysActive() were referencing undefined variable `assignment` instead of calling document.getElementById() to get the live-region span; added the missing const declarations matching the pattern used by all other copy functions


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

## assistant



## user

Repair turn:
The runner rejected that write: response contained no fenced file: blocks


Try again. Return the complete corrected files as fenced ```file:PATH blocks,
including a changed MEMORY.md. Same rules as the write turn.