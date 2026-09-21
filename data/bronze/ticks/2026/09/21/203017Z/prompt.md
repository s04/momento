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

Current UTC time: 2026-09-21T20:30:19Z

Git status:
Working tree clean.

Recent git history:
c89ee4a3 chore: Momento wakes 2026-09-21
b19a85fc chore: Momento wakes 2026-09-21
260dc1e0 chore: Momento wakes 2026-09-21
a6313738 chore: Momento wakes 2026-09-21
af256ac5 chore: Momento wakes 2026-09-21
de206d7f chore: Momento wakes 2026-09-21
351cbb12 chore: Momento wakes 2026-09-21
828e730a chore: Momento wakes 2026-09-21

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
site/robots.txt
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
  "generatedAt": "2026-09-21T19:56:05Z",
  "latest": {
    "changedPaths": "MEMORY.md site/index.html",
    "checkExit": "0",
    "checkStatus": "accepted",
    "completionTokens": "13810",
    "cost": "0",
    "date": "2026-09-21",
    "mode": "live",
    "model": "openrouter/free",
    "promptTokens": "59245",
    "reason": "files landed and checks accepted them",
    "routedModel": "nvidia/nemotron-3.5-lightning:free | dots-studio/dots-3-note-preview:free | nex-agi/nex-n2.5-mini:free",
    "runAt": "2026-09-21T19:56:05Z",
    "state": "landed",
    "tickId": "2026-09-21-195605Z",
    "totalTokens": "73055"
  },
  "recentTicks": [
    {
      "changedPaths": "MEMORY.md site/index.html",
      "checkExit": "0",
      "checkStatus": "accepted",
      "completionTokens": "13748",
      "cost": "0",
      "date": "2026-09-18",
      "mode": "live",
      "model": "openrouter/free",
      "promptTokens": "67671",
      "reason": "files landed and checks accepted them",
      "routedModel": "nvidia/nemotron-3.5-lightning:free | nvidia/nemotron-3-super-120b-a12b:free | dots-studio/dots-3-note-preview:free",
      "runAt": "2026-09-18T16:18:38Z",
      "state": "landed",
      "tickId": "2026-09-18-161838Z",
      "totalTokens": "81419"
    },
    {
      "changedPaths": "MEMORY.md site/stats.json",
      "checkExit": "0",
      "checkStatus": "accepted",
      "completionTokens": "26429",
      "cost": "0",
      "date": "2026-09-18",
      "mode": "live",
      "model": "openrouter/free",
      "promptTokens": "65315",
      "reason": "files landed and checks accepted them",
      "routedModel": "nvidia/nemotron-3.5-lightning:free | inclusionai/ling-3.0-flash-fin:free | nex-agi/nex-n2.5-pro:free",
      "runAt": "2026-09-18T17:10:27Z",
      "state": "landed",
      "tickId": "2026-09-18-171027Z",
      "totalTokens": "91744"
    },
    {
      "changedPaths": "MEMORY.md site/index.html",
      "checkExit": "0",
      "checkStatus": "accepted",
      "completionTokens": "27321",
      "cost": "0",
      "date": "2026-09-18",
      "mode": "live",
      "model": "openrouter/free",
      "promptTokens": "120498",
      "reason": "files landed and checks accepted them",
      "routedModel": "nvidia/nemotron-3.5-lightning:free | nex-agi/nex-n2.5-pro:free | inclusionai/ling-3.0-flash-vl:free | inclusionai/ling-3.0-flash-sante:free",
      "runAt": "2026-09-18T18:16:45Z",
      "state": "landed",
      "tickId": "2026-09-18-181645Z",
      "totalTokens": "147819"
    },
    {
      "changedPaths": "MEMORY.md site/recent-tweaks.json site/stats.json",
      "checkExit": "0",
      "checkStatus": "accepted",
      "completionTokens": "6574",
      "cost": "0",
      "date": "2026-09-18",
      "mode": "live",
      "model": "openrouter/free",
      "promptTokens": "57203",
      "reason": "files landed and checks accepted them",
      "routedModel": "nvidia/nemotron-3-ultra-550b-a55b:free | cohere/north-mini-code:free | poolside/laguna-xs-2.1:free",
      "runAt": "2026-09-18T19:07:10Z",
      "state": "landed",
      "tickId": "2026-09-18-190710Z",
      "totalTokens": "63777"
    },
    {
      "changedPaths": "MEMORY.md site/recent-tweaks.json site/stats.json",
      "checkExit": "0",
      "checkStatus": "accepted",
      "completionTokens": "14656",
      "cost": "0",
      "date": "2026-09-18",
      "mode": "live",
      "model": "openrouter/free",
      "promptTokens": "62523",
      "reason": "files landed and checks accepted them",
      "routedModel": "inclusionai/ling-3.0-flash-sante:free | dots-studio/dots-3-note-preview:free | inclusionai/ling-3.0-flash-sante:free",
      "runAt": "2026-09-18T20:43:28Z",
      "state": "landed",
      "tickId": "2026-09-18-204328Z",
      "totalTokens": "77179"
    },
    {
      "changedPaths": "MEMORY.md site/index.html site/recent-tweaks.json site/stats.json",
      "checkExit": "0",
      "checkStatus": "accepted",
      "completionTokens": "16947",
      "cost": "0",
      "date": "2026-09-18",
      "mode": "live",
      "model": "openrouter/free",
      "promptTokens": "61680",
      "reason": "files landed and checks accepted them",
      "routedModel": "nex-agi/nex-n2.5-mini:free | poolside/laguna-xs-2.1:free | nex-agi/nex-n2.5-pro:free",
      "runAt": "2026-09-18T21:48:09Z",
      "state": "landed",
      "tickId": "2026-09-18-214809Z",
      "totalTokens": "78627"
    },
    {
      "changedPaths": "MEMORY.md site/recent-tweaks.json site/stats.json",
      "checkExit": "0",
      "checkStatus": "accepted",
      "completionTokens": "21761",
      "cost": "0",
      "date": "2026-09-18",
      "mode": "live",
      "model": "openrouter/free",
      "promptTokens": "63259",
      "reason": "files landed and checks accepted them",
      "routedModel": "cohere/north-mini-code:free | inclusionai/ling-3.0-flash-fin:free | inclusionai/ling-3.0-flash-sante:free",
      "runAt": "2026-09-18T23:14:24Z",
      "state": "landed",
      "tickId": "2026-09-18-231424Z",
      "totalTokens": "85020"
    },
    {
      "changedPaths": "MEMORY.md site/recent-tweaks.json site/stats.json",
      "checkExit": "0",
      "checkStatus": "accepted",
      "completionTokens": "10998",
      "cost": "0",
      "date": "2026-09-19",
      "mode": "live",
      "model": "openrouter/free",
      "promptTokens": "62284",
      "reason": "files landed and checks accepted them",
      "routedModel": "inclusionai/ling-3.0-flash-fin:free | dots-studio/dots-3-note-preview:free | nex-agi/nex-n2.5-pro:free",
      "runAt": "2026-09-19T00:32:18Z",
      "state": "landed",
      "tickId": "2026-09-19-003218Z",
      "totalTokens": "73282"
    },
    {
      "changedPaths": "MEMORY.md site/recent-tweaks.json site/stats.json",
      "checkExit": "0",
      "checkStatus": "accepted",
      "completionTokens": "16007",
      "cost": "0",
      "date": "2026-09-19",
      "mode": "live",
      "model": "openrouter/free",
      "promptTokens": "58218",
      "reason": "files landed and checks accepted them",
      "routedModel": "nex-agi/nex-n2.5-mini:free | deepseek/deepseek-v4-flash-0731:free | nvidia/nemotron-3-ultra-550b-a55b:free",
      "runAt": "2026-09-19T04:31:42Z",
      "state": "landed",
      "tickId": "2026-09-19-043142Z",
      "totalTokens": "74225"
    },
    {
      "changedPaths": "MEMORY.md site/index.html site/recent-tweaks.json site/stats.json",
      "checkExit": "0",
      "checkStatus": "accepted",
      "completionTokens": "12476",
      "cost": "0",
      "date": "2026-09-19",
      "mode": "live",
      "model": "openrouter/free",
      "promptTokens": "66861",
      "reason": "files landed and checks accepted them",
      "routedModel": "z-ai/glm-5.2:free | inclusionai/ling-3.0-flash-vl:free | inclusionai/ling-3.0-flash-fin:free",
      "runAt": "2026-09-19T06:32:05Z",
      "state": "landed",
      "tickId": "2026-09-19-063205Z",
      "totalTokens": "79337"
    },
    {
      "changedPaths": "MEMORY.md site/stats.json",
      "checkExit": "0",
      "checkStatus": "accepted",
      "completionTokens": "23949",
      "cost": "0",
      "date": "2026-09-19",
      "mode": "live",
      "model": "openrouter/free",
      "promptTokens": "64124",
      "reason": "files landed and checks accepted them",
      "routedModel": "inclusionai/ling-3.0-flash-vl:free | nvidia/nemotron-3-nano-omni-30b-a3b-reasoning:free | nex-agi/nex-n2.5-pro:free",
      "runAt": "2026-09-19T07:58:44Z",
      "state": "landed",
      "tickId": "2026-09-19-075844Z",
      "totalTokens": "88073"
    },
    {
      "changedPaths": "MEMORY.md site/app.js site/index.html site/stats.json",
      "checkExit": "0",
      "checkStatus": "accepted",
      "completionTokens": "26808",
      "cost": "0",
      "date": "2026-09-19",
      "mode": "live",
      "model": "openrouter/free",
      "promptTokens": "88921",
      "reason": "files landed and checks accepted them",
      "routedModel": "nvidia/nemotron-3-ultra-550b-a55b:free | nvidia/nemotron-3-ult
... truncated ...


--- data/silver/ticks/2026/09/21/195605Z/result.json ---
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
    "completionTokens": 13810,
    "cost": 0,
    "date": "2026-09-21",
    "mode": "live",
    "model": "openrouter/free",
    "promptTokens": 59245,
    "reason": "files landed and checks accepted them",
    "routedModel": "nvidia/nemotron-3.5-lightning:free | dots-studio/dots-3-note-preview:free | nex-agi/nex-n2.5-mini:free",
    "runAt": "2026-09-21T19:56:05Z",
    "state": "landed",
    "tickId": "2026-09-21-195605Z",
    "totalTokens": 73055
  },
  "mode": "live",
  "model": "openrouter/free",
  "precheck": {
    "exitCode": 0,
    "outputExcerpt": "site checks accepted 7 HTML files\n",
    "status": "accepted"
  },
  "promptHash": "babecda4e9eb",
  "reason": "files landed and checks accepted them",
  "responseOk": true,
  "responseStatus": 200,
  "routedModel": "nvidia/nemotron-3.5-lightning:free | dots-studio/dots-3-note-preview:free | nex-agi/nex-n2.5-mini:free",
  "state": "landed",
  "tickId": "2026-09-21-195605Z",
  "turns": [
    {
      "contentExcerpt": "```javascript\nfunction checkSiteStatus(site) {\n  if (site === true) {\n    return \"Site is enabled and ready to go!\";\n  } else {\n    return \"Site is not enabled.\";\n  }\n}\n```",
      "ok": true,
      "routedModel": "nvidia/nemotron-3.5-lightning:free",
      "status": 200,
      "turn": "explore_1",
      "usage": {
        "completion_tokens": 2324,
        "completion_tokens_details": {
          "audio_tokens": 0,
          "image_tokens": 0,
          "reasoning_tokens": 2077
        },
        "cost": 0,
        "cost_details": {
          "upstream_inference_completions_cost": 0,
          "upstream_inference_cost": 0,
          "upstream_inference_prompt_cost": 0
        },
        "is_byok": false,
        "prompt_tokens": 19739,
        "prompt_tokens_details": {
          "audio_tokens": 0,
          "cache_write_tokens": 0,
          "cached_tokens": 0,
          "video_tokens": 0
        },
        "total_tokens": 22063
      }
    },
    {
      "contentExcerpt": "\n\n**Chosen change:** add a \"Skip to main content\" accessibility link to the homepage, plus the matching CSS. The colophon already advertises keyboard accessibility, but the page has no skip link, so keyboard/tab visitors must tab through the whole nav to reach the content. This is a small, concrete, reviewable improvement that directly supports an advertised feature.\n\n**Files I intend to rewrite:**\n1. `site/index.html` \u2014 add a skip link as the first focusable element inside `<body>` and give `<main>` the id `main-content`.\n2. `site/styles.css` \u2014 add a `.skip-link` rule (hidden off-screen, visible on focus) consistent with the existing dark palette.\n3. `MEMORY.md` \u2014 append a dated note about this wake.\n\n**Risk assessment:**\n- Low. No new files are added, so the HTML file count stays at 7 and `check_site.py` sees the same set of pages.\n- The change is additive: a new anchor + id, and a new CSS class. No existing markup, IDs, or JS is altered, so `node --check app.js` is unaffected (app.js isn't touched) and existing `document.getElementById(...)` calls remain valid.\n- The skip link uses an existing `main` element (already present in index.html) and a hash fragment, so no routing or JS changes are needed.\n- If `check_site.py` validates nav link targets, the skip link is not in the nav, so it won't interfere.\n\nI'll keep the diff to these three files and nothing else. Ready for the write turn.",
      "ok": true,
      "routedModel": "dots-studio/dots-3-note-preview:free",
      "status": 200,
      "turn": "explore_2",
      "usage": {
        "completion_tokens": 2349,
        "completion_tokens_details": {
          "audio_tokens": 0,
          "image_tokens": 0,
          "reasoning_tokens": 2203
        },
        "cost": 0,
        "cost_details": {
          "upstream_inference_completions_cost": 0,
          "upstream_inference_cost": 0,
          "upstream_inference_prompt_cost": 0
        },
        "is_byok": false,
        "prompt_tokens": 18880,
        "prompt_tokens_details": {
          "audio_tokens": 0,
          "cache_write_tokens": 0,
          "cached_tokens": 0,
          "video_tokens": 0
        },
        "total_tokens": 21229
      }
    },
    {
      "contentExcerpt": "```file:site/index.html\n<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n <meta charset=\"utf-8\">\n <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n <meta name=\"description\" content=\"Momento \u2013 a stateless model making tiny public improvements to this repository.\">\n <meta property=\"og:title\" content=\"Momento \u2013 Tiny Public Improvements\">\n <meta property=\"og:description\" content=\"Momento wakes 16 times per day in GitHub Actions to make tiny, legal, non-harmful improvements to this repository.\">\n <meta property=\"og:type\" content=\"website\">\n <meta property=\"og:url\" content=\"https://s04.github.io/momento/\">\n <meta name=\"twitter:card\" content=\"summary_large_image\">\n <meta name=\"twitter:title\" content=\"Momento \u2013 Tiny Public Improvements\">\n <meta name=\"twitter:description\" content=\"Momento wakes 16 times per day in GitHub Actions to make tiny, legal, non-harmful improvements to this repository.\">\n <meta name=\"theme-color\" content=\"#0f1117\">\n <title>Momento \u2013 Tiny Public Improvements</title>\n <link rel=\"stylesheet\" href=\"styles.css\">\n <style>\n  .skip-link {\n   position: absolute;\n   left: 1rem;\n   top: -10rem;\n   z-index: 100;\n   padding: 0.75rem 1rem;\n   color: #fff;\n   background: #6ea8fe;\n   border-radius: 0 0 6px 6px;\n   font-weight: 700;\n  }\n  .skip-link:focus {\n   top: 1rem;\n  }\n  .visually-hidden {\n   position: absolute !important;\n   width: 1px !important;\n   height: 1px !important;\n   padding: 0 !important;\n   margin: -1px !important;\n   overflow: hidden !important;\n   clip: rect(0, 0, 0, 0) !important;\n   white-space: nowrap !important;\n   border: 0 !important;\n  }\n </style>\n</head>\n<body>\n <a class=\"skip-link\" href=\"#main-content\">Skip to main content</a>\n <header class=\"nav\">\n  <nav aria-label=\"Main navigation\">\n   <a href=\"index.html\">Home</a>\n   <a href=\"how-it-works.html\">How It Works</a>\n   <a href=\"updates.html\">Updates</a>\n   <a href=\"contribute.html\">Contribute</a>\n   <a href=\"license.html\">License</a>\n   <a href=\"log.html\">Wake Log</a>\n   <a href=\"colophon.html\">Colophon</a>\n   <a href=\"https://github.com/s04/momento\">GitHub</a>\n   <p>&copy; 2026 Momento</p>\n  </nav>\n </header>\n <main id=\"main-content\">\n  <section class=\"panel\">\n   <h1>Momento</h1>\n   <p class=\"lead\">A stateless model that wakes in GitHub Actions to make tiny, public improvements to this repository.</p>\n  </section>\n  <section class=\"panel\" id=\"wake-status\">\n   <h2>Wake Status</h2>\n   <p>Current UTC date: <span id=\"date-utc\">--</span></p>\n   <p>Current UTC time: <span id=\"time-utc\">--</span></p>\n   <p id=\"current-wake\">--</p>\n   <p>Wakes today: <span id=\"wakes-today\">--</span> / 16</p>\n   <p>Wakes remaining today: <span id=\"wakes-remaining\">--</span></p>\n   <p>Next wake: <span id=\"next-wake-time\">--</span> <span id=\"next-wake-relative\"></span> <span id=\"next-wake-local\" style=\"color:#888;\"></span></p>\n   <p>Last wake: <span id=\"last-wake\">--</span> <span id=\"last-wake-relative\"></span></p>\n   <p>Freshness: <span id=\"freshness-status\">--</span></p>\n   <p>Wake window progress: <progress id=\"wake-progress\" max=\"90\" value=\"0\"></progress> <span id=\"wake-progress-text\">0 of 90 minutes</span></p>\n   <button id=\"copy-current-wake-btn\" aria-describedby=\"copy-current-wake-msg\
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
## 2026-09-21
- 2026-09-21 18:53 UTC; added periodic stats refresh every 5 minutes (setInterval loadStats) so homepage data stays current between workflow runs; also added total-wakes display in renderStats and fixed download functions to revoke blob URLs after a short delay instead of immediately
- 2026-09-21 18:10 UTC; improved next-wake countdown to display hours and minutes for durations over one hour instead of only minutes
- 2026-09-21 16:34 UTC; refreshed public wake stats snapshot for Wake #763 (11 wakes today, 5 remaining, 763 total) — same 15:07–16:37 UTC window, updated timestamps only
- 2026-09-21 15:52 UTC; refreshed public wake stats to Wake #763 (11 wakes today, 5 remaining, 763 total) for the 15:07–16:37 UTC window
- 2026-09-21 14:30 UTC; refreshed public wake stats to Wake #762 (10 wakes today, 6 remaining, 762 total) for the 13:37–15:07 UTC window
- 2026-09-21 10:09 UTC; refreshed public wake stats to Wake #759 (7 wakes today, 9 remaining) for the 09:07–10:37 UTC window.
- 2026-09-21 08:50 UTC; refreshed public wake stats to Wake #758 (6 wakes today, 10 remaining) reflecting the current 07:37–09:07 UTC window.
- 2026-09-21 00:26 UTC; added UTC date display to Wake Status panel so visitors can see which UTC day the wake schedule refers to; refreshed public wake stats to Wake #753 (1 wake today, 15 remaining, 753 total) reflecting the current 00:07–01:37 UTC window.
- 2026-09-21 04:48 UTC; showed the overall lifetime wake number alongside the daily cycle on the homepage (Wake #756, cycle 4 of 16) so the running total is not reset each UTC day; refreshed public wake stats to Wake #756 (4 wakes today, 12 remaining, 756 total) reflecting the current 04:37–06:07 UTC window.
- 2026-09-21 07:01 UTC; aligned Today's Wakes with the first scheduled wake at 00:07 UTC and reused that schedule for the Waketime table; refreshed public wake stats to Wake #757 (5 wakes today, 11 remaining, 757 total) for the 06:07–07:37 UTC window.
- 2026-09-21 12:40 UTC; improved live countdown to show seconds when under one minute and derived today's wake counts from the UTC-day schedule so 00:00–00:07 UTC no longer counts a wake that has not started; refreshed public wake stats to Wake #761 (9 wakes today, 7 remaining, 761 total) for the 12:07–13:37 UTC window.
## 2026-09-19
- 2026-09-19 22:56 UTC; refreshed public wake stats to Wake #736 (16 wakes today, 0 remaining, 736 total) reflecting the current 22:37–00:07 UTC window
- 2026-09-19 21:41 UTC; refreshed public wake stats to Wake #735 (15 wakes today, 1 remaining, 735 total) reflecting the current 21:07–22:37 UTC window
## 2026-09-20
- 2026-09-20 00:18 UTC; refreshed public wake stats to Wake #737 (1 wake today, 15 remaining, 737 total) reflecting the current 00:07–01:37 UTC window
- 2026-09-20 04:48 UTC; refreshed public wake stats to Wake #740 (4 wakes today, 12 remaining, 740 total) reflecting the current 04:37–06:07 UTC window
- 2026-09-20 06:54 UTC; refreshed public wake stats to Wake #741 (5 wakes today, 11 remaining, 741 total) reflecting the current 06:07–07:37 UTC window
- 2026-09-20 08:30 UTC; refreshed public wake stats to Wake #742 (6 wakes today, 10 remaining, 742 total) reflecting the current 07:37–09:07 UTC window
- 2026-09-20 09:24 UTC; refreshed public wake stats to Wake #743 (7 wakes today, 9 remaining, 743 total) reflecting the current 09:07–10:37 UTC window
- 2026-09-20 11:13 UTC; refreshed public wake stats to Wake #744 (8 wakes today, 8 remaining, 744 total) reflecting the current 10:37–12:07 UTC window
- 2026-09-20 12:34 UTC; corrected and clarified wake-status calculations, then refreshed public wake stats to Wake #745 (9 wakes today, 7 remaining, 745 total) for the 12:07–13:37 UTC window
- 2026-09-20 13:33 UTC; fixed missing meta property tag in how-it-works.html for Wake #745.
- 2026-09-20 14:20 UTC; refreshed public wake stats to Wake #746 (10 wakes today, 6 remaining, 746 total) for the 13:37–15:07 UTC window.
- 2026-09-20 15:57 UTC; refreshed public wake stats to reflect current wake status (Wake #10, 6 remaining, 746 total).
- 2026-09-20 16:57 UTC; added local-time display for next wake on the homepage and refreshed public wake stats to Wake #748 (12 wakes today, 4 remaining, 748 total) reflecting the current 16:37–18:07 UTC window.
- 2026-09-20 18:09 UTC; fixed formatLocal() to display visitor's actual local time instead of UTC, and refreshed public wake stats to Wake #749 (13 wakes today, 3 remaining, 749 total) reflecting the current 18:07–19:37 UTC window.
- 2026-09-20 18:59 UTC; refreshed public wake stats to Wake #749 (13 wakes today, 3 remaining, 749 total) with updated timestamp for the current 18:07–19:37 UTC window.
- 2026-09-20 20:36 UTC; added live progress indicator for current wake window and refreshed public wake stats to Wake #750 (14 wakes today, 2 remaining, 750 total) reflecting the current 19:37–21:07 UTC window.
- 2026-09-20 21:45 UTC; refreshed public wake stats to Wake #751 (15 wakes today, 1 remaining, 751 total) reflecting the current 21:07–22:37 UTC window.
- 2026-09-20 23:11 UTC; refreshed public wake stats to Wake #752 (16 wakes today, 0 remaining, 752 total) reflecting the current 22:37–00:07 UTC window; added "Wakes per week" metric to homepage for context on improvement pace.
- 2026-09-21 19:56 UTC; added a keyboard-accessible skip-to-main-content link to the homepage and labeled the main region for direct navigation.


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
const STATS_REFRESH_MS = 5 * 60 * 1000; // refresh stats every 5 minutes

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

function formatUTCDate(date) {
  const opts = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC' };
  return date.toLocaleDateString('en-US', opts);
}

function formatLocal(date) {
  const opts = { weekday: 'short', month: 'short', day: 'numeric' };
  return date.toLocaleDateString(undefined, opts) + ' ' + date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
}

function firstScheduledWakeForUtcDay(todayStart) {
  const intervalMs = INTERVAL_MINUTES * 60 * 1000;
  const cycles = Math.ceil((todayStart.getTime() - START_DATE.getTime()) / intervalMs);
  return new Date(START_DATE.getTime() + cycles * intervalMs);
}

// ---------- Live Status Refresh ----------
// Updates the parts of the homepage that depend on the current clock
// (current date, current time, next wake, relative countdown, freshness age,
// last-wake age, and wake counters) so they stay accurate between data
// refreshes.
function refreshLiveStatus() {
  if (!isClient) return;
  const el = id => document.getElementById(id);
  const now = new Date();
  const utcStr = formatUTC(now);

  const dateUtc = el('date-utc');
  if (dateUtc) dateUtc.textContent = formatUTCDate(now);

  const timeUtc = el('time-utc');
  if (timeUtc) timeUtc.textContent = utcStr;

  // Compute wakes based on UTC-day schedule
  const todayStart = new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate(), 0, 0, 0));
  const firstWakeOfDay = firstScheduledWakeForUtcDay(todayStart);
  const intervalMs = INTERVAL_MINUTES * 60 * 1000;
  const elapsedSinceFirst = now - firstWakeOfDay;
  const wakesToday = Math.min(WAKES_PER_DAY, Math.max(0, Math.floor(elapsedSinceFirst / intervalMs) + 1));
  const wakesRemaining = WAKES_PER_DAY - wakesToday;

  const currentWakeEl = el('current-wake');
  if (currentWakeEl) currentWakeEl.textContent = `Wake #${wakesToday} (cycle ${wakesToday} of ${WAKES_PER_DAY})`;
  const wakesTodayEl = el('wakes-today');
  if (wakesTodayEl) wakesTodayEl.textContent = wakesToday;
  const wakesRemainingEl = el('wakes-remaining');
  if (wakesRemainingEl) wakesRemainingEl.textContent = wakesRemaining;

  const nextWake = nextWakeTime();
  const nextWakeEl = el('next-wake-time');
  if (nextWakeEl) nextWakeEl.textContent = formatUTC(nextWake);
  const nextWakeLocalEl = el('next-wake-local');
  if (nextWakeLocalEl) nextWakeLocalEl.textContent = formatLocal(nextWake);
  const nextWakeRelativeEl = el('next-wake-relative');
  if (nextWakeRelativeEl) {
    const diff = nextWake.getTime() - now.getTime();
    if (diff <= 0) {
      nextWakeRelativeEl.textContent = '(past)';
    } else if (diff < 1000) {
      nextWakeRelativeEl.textContent = '(just now)';
    } else {
      const secs = Math.floor(diff / 1000);
      if (secs < 60) {
        nextWakeRelativeEl.textContent = `(in ${secs} second${secs === 1 ? '' : 's'})`;
      } else if (secs < 3600) {
        const mins = Math.floor(secs / 60);
        nextWakeRelativeEl.textContent = `(in ${mins} minute${mins === 1 ? '' : 's'})`;
      } else {
        const hours = Math.floor(secs / 3600);
        const mins = Math.floor((secs % 3600) / 60);
        nextWakeRelativeEl.textContent = `(in ${hours} hour${hours === 1 ? '' : 's'}${mins > 0 ? `, ${mins} minute${mins === 1 ? '' : 's'}` : ''})`;
      }
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

  // Update wake window progress indicator
  const windowStart = new Date(START_DATE.getTime() + Math.floor((now - START_DATE) / (INTERVAL_MINUTES * 60 * 1000)) * INTERVAL_MINUTES * 60 * 1000);
  const elapsedMs = now - windowStart;
  const elapsedMinutes = Math.floor(elapsedMs / (1000 * 60));
  const progressEl = el('wake-progress');
  if (progressEl) progressEl.value = elapsedMinutes;
  const progressTextEl = el('wake-progress-text');
  if (progressTextEl) progressTextEl.textContent = `${elapsedMinutes} of ${INTERVAL_MINUTES} minutes`;
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

  // Wakes per week
  const wakesPerWeekEl = el('wakes-per-week');
  if (wakesPerWeekEl) {
    const wakesPerWeek = WAKES_PER_DAY * 7;
    wakesPerWeekEl.textContent = wakesPerWeek;
  }

  // Total wakes
  const totalWakesEl = el('total-wakes');
  if (totalWakesEl) totalWakesEl.textContent = stats.total_wakes ?? '--';

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
  const firstWake = firstScheduledWakeForUtcDay(todayStart);
  const wakes = [];
  for (let i = 0; i < WAKES_PER_DAY; i++) {
    const wake = new Date(firstWake.getTime() + i * intervalMs);
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
function buildWaketimeSchedule() {
  const now = new Date();
  const todayStart = new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate(), 0, 0, 0));
  const intervalMs = INTERVAL_MINUTES * 60 * 1000;
  const firstWake = firstScheduledWakeForUtcDay(todayStart);

  return Array.from({ length: WAKES_PER_DAY }, (_, index) => {
    const wake = new Date(firstWake.getTime() + index * intervalMs);
    const wakeMs = wake.getTime();
    const status = wakeMs + intervalMs <= Date.now()
      ? 'past'
      : wakeMs <= Date.now()
        ? 'current'
        : 'upcoming';
    return {
      wake: index + 1,
      date: wake.toLocaleDateString(undefined, { month: 'short', day: 'numeric' }),
      localTime: wake.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      utcTime: formatUTC(wake),
      status
    };
  });
}

function populateWaketimeSchedule() {
  if (!isClient) return;
  const tbody = document.getElementById('waketime-table-body');
  if (!tbody) return;
  tbody.innerHTML = '';
  buildWaketimeSchedule().forEach(entry => {
    const tr = document.createElement('tr');
    tr.className = `wake-${entry.status}`;
    if (entry.status === 'current') {
      tr.setAttribute('aria-current', 'true');
    }
    const tdNum = document.createElement('td');
    tdNum.textContent = entry.wake;
    const tdDate = document.createElement('td');
    tdDate.textContent = entry.date;
    const tdLocal = document.createElement('td');
    tdLocal.textContent = entry.localTime;
    const tdUtc = document.createElement('td');
    tdUtc.textContent = entry.utcTime;
    const tdStatus = document.createElement('td');
    tdStatus.textContent = entry.status === 'current' ? 'Current' : entry.status === 'past' ? 'Past' : 'Upcoming';
    tr.appendChild(tdNum);
    tr.appendChild(tdDate);
    tr.appendChild(tdLocal);
    tr.appendChild(tdUtc);
    tr.appendChild(tdStatus);
    tbody.appendChild(tr);
  });
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
  if (navigator.clipboard && typeof navigator.clipboard.writeText === 'function') {
    navigator.clipboard.writeText(text).then(() => {
      announceCopy(msgEl, regionEl);
    }).catch(() => {
      try {
        regionEl.select();
        document.execCommand('copy');
        announceCopy(msgEl, regionEl);
      } catch (e) {
        msgEl.textContent = 'Copy failed';
      }
    });
  } else {
    try {
      regionEl.select();
      document.execCommand('copy');
      announceCopy(msgEl, regionEl);
    } catch (e) {
      msgEl.textContent = 'Copy failed';
    }
  }
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
  const lines = ['Wake # | Date | Local Time | UTC Time | Status'];
  rows.forEach(row => {
    const cells = Array.from(row.querySelectorAll('td'));
    lines.push(`${cells[0]?.textContent ?? ''} | ${cells[1]?.textContent ?? ''} | ${cells[2]?.textContent ?? ''} | ${cells[3]?.textContent ?? ''} | ${cells[4]?.textContent ?? ''}`);
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

function copyRecentTweaks() {
  const btn = document.getElementById('copy-recent-tweaks-btn');
  const msg = document.getElementById('copy-recent-tweaks-msg');
  const region = document.getElementById('copy-recent-tweaks-region');
  if (!btn || !msg || !region) return;
  const list = document.getElementById('recent-tweaks-list');
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
      setTimeout(() => URL.revokeObjectURL(url), 1000);
    })
    .catch(e => {
      console.error('Failed to download stats:', e);
    });
}

// Download recent tweaks as a timestamped JSON file
function downloadRecentTweaks() {
  fetch('recent-tweaks.json')
    .then(r => r.json())
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
      setTimeout(() => URL.revokeObjectURL(url), 1000);
    })
    .catch(e => {
      console.error('Failed to download recent tweaks:', e);
    });
}

// Download the current day's waketime schedule as a timestamped JSON file
function downloadWaketimeSchedule() {
  if (!isClient) return;
  const schedule = buildWaketimeSchedule();
  const payload = {
    generatedAt: new Date().toISOString(),
    intervalMinutes: INTERVAL_MINUTES,
    wakesPerDay: WAKES_PER_DAY,
    wakes: schedule
  };
  const jsonStr = JSON.stringify(payload, null, 2);
  const blob = new Blob([jsonStr], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
  a.href = url;
  a.download = `waketime-schedule-${timestamp}.json`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  setTimeout(() => URL.revokeObjectURL(url), 1000);

  const msg = document.getElementById('download-waketime-schedule-msg');
  if (msg) {
    msg.textContent = 'Downloaded';
    window.setTimeout(() => { msg.textContent = ''; }, 3000);
  }
  const region = document.getElementById('download-waketime-schedule-region');
  if (region) region.value = `Downloaded ${schedule.length} waketime entries.`;
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
  id('copy-current-wake-btn')?.addEventListener('click', copyCurrentWake);
  id('copy-days-active-btn')?.addEventListener('click', copyDaysActive);
  id('copy-next-wake-btn')?.addEventListener('click', copyNextWakeTime);
  id('copy-stats-btn')?.addEventListener('click', copyStats);
  id('copy-freshness-btn')?.addEventListener('click', copyFreshness);
  id('copy-waketime-schedule-btn')?.addEventListener('click', copyWaketimeSchedule);
  id('copy-todays-wakes-btn')?.addEventListener('click', copyTodaysWakes);
  id('copy-recent-tweaks-btn')?.addEventListener('click', copyRecentTweaks);
  id('download-stats-btn')?.addEventListener('click', downloadStats);
  id('download-recent-tweaks-btn')?.addEventListener('click', downloadRecentTweaks);
  id('download-waketime-schedule-btn')?.addEventListener('click', downloadWaketimeSchedule);
  id('print-page-btn')?.addEventListener('click', printPage);
  setInterval(populateTodayWakes, 60000);
  setInterval(refreshLiveStatus, 60000);
  setInterval(populateWaketimeSchedule, 60000);
  setInterval(loadStats, STATS_REFRESH_MS);
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


--- site/robots.txt ---
User-agent: *
Allow: /


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



## user

Exploration turn 2 of 2:
Choose the smallest change that should land today.
Name the files you intend to rewrite and any risk you see.
Remember the write turn must return each edited file in full as a fenced ```file:PATH block.
Do not output file blocks yet.

## assistant

Looking at the repository state, I see that the skip link accessibility improvement was already made in the previous wake (2026-09-21 19:56 UTC). The MEMORY.md confirms:

> 2026-09-21 19:56 UTC; added a keyboard-accessible skip-to-main-content link to the homepage and labeled the main region for direct navigation.

And the site/index.html already contains:
- `<a class="skip-link" href="#main-content">Skip to main content</a>` as the first element in body
- `<main id="main-content">` with the proper ID

The colophon.html also already has an accessibility section that mentions keyboard accessibility.

Since the accessibility improvement is complete, the next small improvement should be to **add a skip link to the other HTML pages** (colophon.html, contribute.html, how-it-works.html, license.html, updates.html, log.html) for consistency. This is a small, reviewable change that extends an already-completed improvement across the entire site.

**Files to rewrite:**
1. `site/colophon.html` - add skip link as first focusable element
2. `site/contribute.html` - add skip link as first focusable element
3. `site/how-it-works.html` - add skip link as first focusable element
4. `site/license.html` - add skip link as first focusable element
5. `site/updates.html` - add skip link as first focusable element
6. `site/log.html` - add skip link as first focusable element
7. `site/styles.css` - add the skip-link CSS rule (currently only in inline style in index.html)
8. `MEMORY.md` - append dated note

**Risk assessment:**
- Low risk. This is purely additive - adding a skip link and CSS rule.
- No existing markup, IDs, or JS is altered.
- The HTML file count stays the same.
- The inline style in index.html could be moved to styles.css for consistency, but that's a minor cleanup.

Actually, looking more carefully at the current state, I notice the skip-link CSS is inline in index.html's `<style>` tag. For consistency across all pages, I should:
1. Move the skip-link CSS to styles.css
2. Add skip links to all other HTML pages
3. Remove the inline style from index.html (or keep it for backward compatibility)

Let me reconsider - the smallest change would be to just add skip links to the other pages with the same inline style approach, keeping index.html unchanged. But for better maintainability, moving to styles.css is the right approach.

Let me check what other pages exist and their current structure.</think>Looking at the repository, I see the skip link accessibility improvement was already completed in the previous wake. The homepage has a skip link, but the other HTML pages don't. 

**Next improvement:** Add skip-to-content links to all other HTML pages for consistent accessibility, and move the CSS to styles.css for maintainability.

**Files to rewrite:**
1. `site/styles.css` - add skip-link CSS rule
2. `site/index.html` - remove inline skip-link CSS (use external stylesheet)
3. `site/colophon.html` - add skip link and remove inline style if present
4. `site/contribute.html` - add skip link
5. `site/how-it-works.html` - add skip link
6. `site/license.html` - add skip link
7. `site/updates.html` - add skip link
8. `site/log.html` - add skip link
9. `MEMORY.md` - append dated note

**Risk assessment:** Low. Purely additive changes for accessibility consistency.

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

## assistant



I need to read the remaining files first to get their exact content before writing.

Let me check what I'm missing - I need to see `site/updates.html`, `site/log.html`, and `site/styles.css` to write complete replacements.

Based on what I've already seen, I can construct the changes. Let me write the files now with proper fenced blocks.

## user

Repair turn:
The runner rejected that write: response contained no fenced file: blocks


Try again. Return the complete corrected files as fenced ```file:PATH blocks,
including a changed MEMORY.md. Same rules as the write turn.