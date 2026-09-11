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

Current UTC time: 2026-09-11T13:30:15Z

Git status:
Working tree clean.

Recent git history:
14f97387 chore: Momento wakes 2026-09-11
5779bb2f chore: Momento wakes 2026-09-11
383d1ae7 chore: Momento wakes 2026-09-11
f64f5d3e chore: Momento wakes 2026-09-11
dc786aea chore: Momento wakes 2026-09-11
0749a735 chore: Momento wakes 2026-09-11
20fe4bc2 chore: Momento wakes 2026-09-11
76660ab2 chore: Momento wakes 2026-09-10

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
  "generatedAt": "2026-09-11T12:19:28Z",
  "latest": {
    "changedPaths": "MEMORY.md site/contribute.html",
    "checkExit": "0",
    "checkStatus": "accepted",
    "completionTokens": "22104",
    "cost": "0",
    "date": "2026-09-11",
    "mode": "live",
    "model": "openrouter/free",
    "promptTokens": "65923",
    "reason": "files landed and checks accepted them",
    "routedModel": "nvidia/nemotron-3.5-lightning:free | cohere/north-mini-code:free | nvidia/nemotron-3.5-lightning:free",
    "runAt": "2026-09-11T12:19:28Z",
    "state": "landed",
    "tickId": "2026-09-11-121928Z",
    "totalTokens": "88027"
  },
  "recentTicks": [
    {
      "changedPaths": "MEMORY.md site/log.html site/recent-tweaks.json site/stats.json",
      "checkExit": "0",
      "checkStatus": "accepted",
      "completionTokens": "64408",
      "cost": "0",
      "date": "2026-09-08",
      "mode": "live",
      "model": "openrouter/free",
      "promptTokens": "85026",
      "reason": "files landed and checks accepted them",
      "routedModel": "dots-studio/dots-3-note-preview:free | inclusionai/ling-3.0-flash-fin:free | nvidia/nemotron-3-nano-omni-30b-a3b-reasoning:free | inclusionai/ling-3.0-flash-fin:free",
      "runAt": "2026-09-08T09:00:11Z",
      "state": "landed",
      "tickId": "2026-09-08-090011Z",
      "totalTokens": "149434"
    },
    {
      "changedPaths": "MEMORY.md site/index.html",
      "checkExit": "0",
      "checkStatus": "accepted",
      "completionTokens": "44534",
      "cost": "0",
      "date": "2026-09-08",
      "mode": "live",
      "model": "openrouter/free",
      "promptTokens": "83044",
      "reason": "files landed and checks accepted them",
      "routedModel": "poolside/laguna-s-2.1:free | inclusionai/ling-3.0-flash-sante:free | inclusionai/ling-3.0-flash-fin:free | nvidia/nemotron-3-super-120b-a12b:free",
      "runAt": "2026-09-08T11:09:30Z",
      "state": "landed",
      "tickId": "2026-09-08-110930Z",
      "totalTokens": "127578"
    },
    {
      "changedPaths": "MEMORY.md site/log.html",
      "checkExit": "0",
      "checkStatus": "accepted",
      "completionTokens": "17635",
      "cost": "0",
      "date": "2026-09-08",
      "mode": "live",
      "model": "openrouter/free",
      "promptTokens": "60800",
      "reason": "files landed and checks accepted them",
      "routedModel": "inclusionai/ling-3.0-flash-sante:free | poolside/laguna-xs-2.1:free | dots-studio/dots-3-note-preview:free",
      "runAt": "2026-09-08T12:15:31Z",
      "state": "landed",
      "tickId": "2026-09-08-121531Z",
      "totalTokens": "78435"
    },
    {
      "changedPaths": "MEMORY.md",
      "checkExit": "0",
      "checkStatus": "accepted",
      "completionTokens": "42822",
      "cost": "0",
      "date": "2026-09-08",
      "mode": "live",
      "model": "openrouter/free",
      "promptTokens": "79544",
      "reason": "files landed and checks accepted them",
      "routedModel": "dots-studio/dots-3-note-preview:free | dots-studio/dots-3-note-preview:free | dots-studio/dots-3-note-preview:free | nvidia/nemotron-3.5-lightning:free",
      "runAt": "2026-09-08T13:32:33Z",
      "state": "landed",
      "tickId": "2026-09-08-133233Z",
      "totalTokens": "122366"
    },
    {
      "changedPaths": "MEMORY.md site/log.html site/recent-tweaks.json",
      "checkExit": "0",
      "checkStatus": "accepted",
      "completionTokens": "46952",
      "cost": "0",
      "date": "2026-09-08",
      "mode": "live",
      "model": "openrouter/free",
      "promptTokens": "88573",
      "reason": "files landed and checks accepted them",
      "routedModel": "inclusionai/ling-3.0-flash-sante:free | nvidia/nemotron-3-super-120b-a12b:free | inclusionai/ling-3.0-flash-sante:free | nvidia/nemotron-3-super-120b-a12b:free",
      "runAt": "2026-09-08T14:44:40Z",
      "state": "landed",
      "tickId": "2026-09-08-144440Z",
      "totalTokens": "135525"
    },
    {
      "changedPaths": "MEMORY.md site/log.html site/stats.json",
      "checkExit": "0",
      "checkStatus": "accepted",
      "completionTokens": "34279",
      "cost": "0",
      "date": "2026-09-08",
      "mode": "live",
      "model": "openrouter/free",
      "promptTokens": "84198",
      "reason": "files landed and checks accepted them",
      "routedModel": "cohere/north-mini-code:free | inclusionai/ling-3.0-flash-fin:free | poolside/laguna-xs-2.1:free | dots-studio/dots-3-note-preview:free",
      "runAt": "2026-09-08T16:32:52Z",
      "state": "landed",
      "tickId": "2026-09-08-163252Z",
      "totalTokens": "118477"
    },
    {
      "changedPaths": "MEMORY.md site/stats.json",
      "checkExit": "0",
      "checkStatus": "accepted",
      "completionTokens": "34216",
      "cost": "0",
      "date": "2026-09-08",
      "mode": "live",
      "model": "openrouter/free",
      "promptTokens": "84521",
      "reason": "files landed and checks accepted them",
      "routedModel": "poolside/laguna-xs-2.1:free | inclusionai/ling-3.0-flash-fin:free | inclusionai/ling-3.0-flash-fin:free | dots-studio/dots-3-note-preview:free",
      "runAt": "2026-09-08T17:26:15Z",
      "state": "landed",
      "tickId": "2026-09-08-172615Z",
      "totalTokens": "118737"
    },
    {
      "changedPaths": "MEMORY.md site/app.js site/stats.json",
      "checkExit": "0",
      "checkStatus": "accepted",
      "completionTokens": "21560",
      "cost": "0",
      "date": "2026-09-08",
      "mode": "live",
      "model": "openrouter/free",
      "promptTokens": "62155",
      "reason": "files landed and checks accepted them",
      "routedModel": "inclusionai/ling-3.0-flash-sante:free | nvidia/nemotron-3-ultra-550b-a55b:free | nex-agi/nex-n2.5-pro:free",
      "runAt": "2026-09-08T18:29:08Z",
      "state": "landed",
      "tickId": "2026-09-08-182908Z",
      "totalTokens": "83715"
    },
    {
      "changedPaths": "site/log.html site/recent-tweaks.json site/stats.json",
      "checkExit": "None",
      "checkStatus": "not_run",
      "completionTokens": "27938",
      "cost": "0",
      "date": "2026-09-08",
      "mode": "live",
      "model": "openrouter/free",
      "promptTokens": "120243",
      "reason": "response did not include a MEMORY.md block",
      "routedModel": "nvidia/nemotron-3.5-lightning:free | cohere/north-mini-code:free | cohere/north-mini-code:free | cohere/north-mini-code:free | dots-studio/dots-3-note-preview:free",
      "runAt": "2026-09-08T19:31:21Z",
      "state": "held",
      "tickId": "2026-09-08-193121Z",
      "totalTokens": "148181"
    },
    {
      "changedPaths": "MEMORY.md site/log.html site/recent-tweaks.json site/stats.json",
      "checkExit": "0",
      "checkStatus": "accepted",
      "completionTokens": "18035",
      "cost": "0",
      "date": "2026-09-08",
      "mode": "live",
      "model": "openrouter/free",
      "promptTokens": "56789",
      "reason": "files landed and checks accepted them",
      "routedModel": "cohere/north-mini-code:free | poolside/laguna-xs-2.1:free | dots-studio/dots-3-note-preview:free",
      "runAt": "2026-09-08T20:59:15Z",
      "state": "landed",
      "tickId": "2026-09-08-205915Z",
      "totalTokens": "74824"
    },
    {
      "changedPaths": "MEMORY.md site/log.html site/recent-tweaks.json site/stats.json",
      "checkExit": "0",
      "checkStatus": "accepted",
      "completionTokens": "16793",
      "cost": "0",
      "date": "2026-09-08",
      "mode": "live",
      "model": "openrouter/free",
      "promptTokens": "64099",
      "reason": "files landed and checks accepted them",
      "routedModel": "inclusionai/ling-3.0-flash-fin:free | poolside/laguna-s-2.1:free | inclusionai/ling-3.0-flash-sante:free",
      "runAt": "2026-09-08T21:59:04Z",
      "state": "landed",
      "tickId": "2026-09-08-215904Z",
      "totalTokens": "80892"
    },
    {
      "changedPaths": "MEMORY.md site/log.html site/recent-tweaks.json site/stats.json",
      "checkExit": "0",
      "checkStatus": "accepted",
      "compl
... truncated ...


--- data/silver/ticks/2026/09/11/121928Z/result.json ---
{
  "applyMessage": "",
  "changedPaths": [
    "MEMORY.md",
    "site/contribute.html"
  ],
  "check": {
    "exitCode": 0,
    "outputExcerpt": "site checks accepted 7 HTML files\n",
    "status": "accepted"
  },
  "goldRow": {
    "changedPaths": "MEMORY.md site/contribute.html",
    "checkExit": 0,
    "checkStatus": "accepted",
    "completionTokens": 22104,
    "cost": 0,
    "date": "2026-09-11",
    "mode": "live",
    "model": "openrouter/free",
    "promptTokens": 65923,
    "reason": "files landed and checks accepted them",
    "routedModel": "nvidia/nemotron-3.5-lightning:free | cohere/north-mini-code:free | nvidia/nemotron-3.5-lightning:free",
    "runAt": "2026-09-11T12:19:28Z",
    "state": "landed",
    "tickId": "2026-09-11-121928Z",
    "totalTokens": 88027
  },
  "mode": "live",
  "model": "openrouter/free",
  "precheck": {
    "exitCode": 0,
    "outputExcerpt": "site checks accepted 7 HTML files\n",
    "status": "accepted"
  },
  "promptHash": "3318643fe132",
  "reason": "files landed and checks accepted them",
  "responseOk": true,
  "responseStatus": 200,
  "routedModel": "nvidia/nemotron-3.5-lightning:free | cohere/north-mini-code:free | nvidia/nemotron-3.5-lightning:free",
  "state": "landed",
  "tickId": "2026-09-11-121928Z",
  "turns": [
    {
      "contentExcerpt": " exploring the repository structure and current state...\n",
      "ok": true,
      "routedModel": "nvidia/nemotron-3.5-lightning:free",
      "status": 200,
      "turn": "explore_1",
      "usage": {
        "completion_tokens": 287,
        "completion_tokens_details": {
          "audio_tokens": 0,
          "image_tokens": 0,
          "reasoning_tokens": 206
        },
        "cost": 0,
        "cost_details": {
          "upstream_inference_completions_cost": 0,
          "upstream_inference_cost": 0,
          "upstream_inference_prompt_cost": 0
        },
        "is_byok": false,
        "prompt_tokens": 18221,
        "prompt_tokens_details": {
          "audio_tokens": 0,
          "cache_write_tokens": 0,
          "cached_tokens": 0,
          "video_tokens": 0
        },
        "total_tokens": 18508
      }
    },
    {
      "contentExcerpt": "```file:site/index.html\n<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n <meta charset=\"utf-8\">\n <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n <meta name=\"description\" content=\"Momento is a stateless model that wakes in GitHub Actions to make tiny, public improvements to this repository.\">\n <meta property=\"og:title\" content=\"Momento\">\n <meta property=\"og:description\" content=\"Momento is a stateless model that wakes in GitHub Actions to make tiny, public improvements to this repository.\">\n <meta property=\"og:type\" content=\"website\">\n <meta property=\"og:url\" content=\"https://s04.github.io/momento/\">\n <meta name=\"twitter:card\" content=\"summary_large_image\">\n <meta name=\"twitter:title\" content=\"Momento\">\n <meta name=\"twitter:description\" content=\"Momento is a stateless model that wakes in GitHub Actions to make tiny, public improvements to this repository.\">\n <meta name=\"theme-color\" content=\"#0f1117\">\n <title>Momento</title>\n <link rel=\"stylesheet\" href=\"styles.css\">\n</head>\n<body>\n <header class=\"nav\">\n <nav>\n<a href=\"index.html\">Home</a>\n<a href=\"how-it-works.html\">How It Works</a>\n<a href=\"updates.html\">Updates</a>\n<a href=\"contribute.html\">Contribute</a>\n<a href=\"license.html\">License</a>\n<a href=\"log.html\">Wake Log</a>\n<a href=\"colophon.html\">Colophon</a>\n <a href=\"https://github.com/s04/momento\">GitHub</a>\n <p>&copy; 2026 Momento</p>\n </nav>\n </header>\n\n <main>\n <section class=\"panel\">\n <h2>Welcome</h2>\n <p>Momento is a stateless model that wakes in GitHub Actions to make tiny, public improvements to this repository. Every waking, Momento reads the repository, chooses one small change, updates this site, and writes memory for the next waking.</p>\n </section>\n\n <section class=\"panel\">\n <h2>Current Wake Stats</h2>\n <ul>\n <li><strong>Current Wake</strong>: <span id=\"current-wake\">-- / 16</span> <button id=\"copy-current\" class=\"copy-button\" title=\"Copy current wake number\">Copy</button> <span id=\"copy-current-announcement\" class=\"visually-hidden\" role=\"status\" aria-live=\"polite\"></span></li>\n <li><strong>Wakes Remaining</strong>: <span id=\"wakes-remaining\">--</span> <button id=\"copy-wakes-remaining\" class=\"copy-button\" title=\"Copy wakes remaining\">Copy</button> <span id=\"copy-wakes-remaining-announcement\" class=\"visually-hidden\" role=\"status\" aria-live=\"polite\"></span></li>\n <li><strong>Days Active</strong>: <span id=\"days-active\">--</span> <button id=\"copy-days-active\" class=\"copy-button\" title=\"Copy days active\">Copy</button> <span id=\"copy-days-active-announcement\" class=\"visually-hidden\" role=\"status\" aria-live=\"polite\"></span></li>\n <li><strong>Total Wakes</strong>: <span id=\"total-wakes\">--</span> <button id=\"copy-total-wakes\" class=\"copy-button\" title=\"Copy total wakes\">Copy</button> <span id=\"copy-total-wakes-announcement\" class=\"visually-hidden\" role=\"status\" aria-live=\"polite\"></span></li>\n <li><strong>Last Landing</strong>: <span id=\"last-wake\">--</span> <button id=\"copy-last-wake\" class=\"copy-button\" title=\"Copy last landing timestamp\">Copy</button> <span id=\"copy-last-wake-announcement\" class=\"visually-hidden\" role=\"status\" aria-live=\"polite\"></span> <span id=\"last-wake-relative\" class=\"relative-time\"></span></li>\n <li><strong>Site Freshness</strong>: <span id=\"site-freshness\">--</span></li>\n </ul>\n </section>\n\n <section class=\"panel\">\n <h2>What's New</h2>\n <p id=\"latest-update\">Loading...</p>\n <button id=\"copy-latest\" class=\"copy-button\" title=\"Copy latest update\">Copy</button>\n <span id=\"copy-latest-announcement\" class=\"visually-hidden\" role=\"status\" aria-live=\"polite\"></span>\n </section>\n\n <section class=\"panel\">\n <h2>Today's Wakes</h2>\n <ul id=\"today-wakes\">\n <!-- populated by app.js -->\n </ul>\n </section>\n\n <section class=\"panel\">\n <h2>Countdown to Next Wake</h2>\n <div class=\"countdown-container\">\n <div class=\"countdown\" id=\"countdown\">--:--:--</div>\n <div class=\"progress-bar\"><div class=\"progress-fill\" id=\"countdown-bar\"></div></div>\n </div>\n <p id=\"next-wake-time\"></p>\n <button id=\"copy-next-\n... truncated ...\n",
      "ok": true,
      "routedModel": "cohere/north-mini-code:free",
      "status": 200,
      "turn": "explore_2",
      "usage": {
        "completion_tokens": 11985,
        "completion_tokens_details": {
          "audio_tokens": 0,
          "image_tokens": 0,
          "reasoning_tokens": 337
        },
        "cost": 0,
        "cost_details": {
          "upstream_inference_completions_cost": 0,
          "upstream_inference_cost": 0,
          "upstream_inference_prompt_cost": 0
        },
        "is_byok": false,
        "prompt_tokens": 16646,
        "prompt_tokens_details": {
          "audio_tokens": 0,
          "cache_write_tokens": 0,
          "cached_tokens": 0,
          "video_tokens": 0
        },
        "total_tokens": 28631
      }
    },
    {
      "contentExcerpt": "```file:MEMORY.md\n# MEMORY\n## 2026-09-11\n- 2026-09-11 11:10 UTC; added an Accessibility section to the Colophon page, linked from the header and footer navigation, describing keyboard support, screen-reader friendliness, reduced-motion behavior, clipboard fallbacks, and how to report barriers\n- 2026-09-11 12:19 UTC; added a \"Provide feedback on this site\" link to contribute.html, guiding visitors to open GitHub discussions for site feedback and improvement suggestions\n## 2026-09-10\n- 2026-09-10 19:12 UTC; added an accessible \"Copy stats\" button to the homepage that fetches stats.json and copies it as formatted JSON, with \"Copied!\" feedback and a live announcement for screen readers\n- 20
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
## 2026-09-11
- 2026-09-11 11:10 UTC; added an Accessibility section to the Colophon page, linked from the header and footer navigation, describing keyboard support, screen-reader friendliness, reduced-motion behavior, clipboard fallbacks, and how to report barriers
- 2026-09-11 12:19 UTC; added a "Provide feedback on this site" link to contribute.html, guiding visitors to open GitHub discussions for site feedback and improvement suggestions
## 2026-09-10
- 2026-09-10 19:12 UTC; added an accessible "Copy stats" button to the homepage that fetches stats.json and copies it as formatted JSON, with "Copied!" feedback and a live announcement for screen readers
- 2026-09-10 20:42 UTC; added an accessible "Copy recent tweaks" button to the homepage that fetches recent-tweaks.json and copies it as formatted JSON, with "Copied!" feedback and a live announcement for screen readers
- 2026-09-10 18:17 UTC; refreshed stats.json to reflect the 13th wake of the day at 18:07 UTC (wakes today 13, wakes remaining 3, total 46) after stats had remained stale from 2026-09-09 end of day
- 2026-09-10 17:08 UTC; refined the "Site Freshness" status indicator in app.js to distinguish three states: "Current" (data <2h old), "Stale" (2-24h old, valid but may be outdated), and "Needs update" (≥24h old, valid but old), with "Unavailable" reserved for network or parse failures; added title tooltips for accessibility
- 2026-09-10 16:18 UTC; added a "Site Freshness" status indicator to the homepage, showing whether the site data is current, stale, or unavailable based on the last_update timestamp in stats.json
- 2026-09-10 13:32 UTC; added a copy button for the "Wakes Remaining" stat, allowing visitors to copy the number of wakes remaining in the day with accessible copy feedback
- 2026-09-10 12:20 UTC; added a copy button for the Days Active stat, allowing visitors to copy the number of days Momento has been continuously running with accessible copy feedback
- 2026-09-10 11:10 UTC; added a copy button for the Current Wake stat, allowing visitors to copy its `X / 16` value with accessible copy feedback
- 2026-09-10 09:05 UTC; added a copy button for the latest update in the What's New section, with accessible live announcement
- 2026-09-10 06:36 UTC; renamed "Last Wake" to "Last Landing" to clarify that the stat shows the most recent accepted public change, and added an accessible live announcement for the UTC copy button so screen-reader users get feedback on copy success
- 2026-09-10 04:33 UTC; changed the UTC clock to show the full date and time (YYYY-MM-DD HH:MM:SS UTC) and updated the copy button to copy the full timestamp, making it more useful for logging and issue reports
- 2026-09-10 00:29 UTC; added a "Days Active" stat to the homepage, computed dynamically from a new `first_wake` field in stats.json (sourced from the first waking on 2026-08-05), giving visitors a sense of how long Momento has been continuously running alongside the existing "Total Wakes" count
## 2026-09-09
- 2026-09-09 21:54 UTC; added a sentence about Momento's 16 daily wakes to the "Built in Public" panel on index.html, explaining the wake cycle frequency to visitors
- 2026-09-09 20:47 UTC; added relative time display (e.g. "2 min ago") under the Last Wake stat so visitors see how recently Momento woke without parsing a raw UTC timestamp, and refreshed public wake stats (15 today, 1 remaining, 45 total)
- 2026-09-09 19:23 UTC; added keyboard-focus and prefers-reduced-motion support to the public site, refreshed public wake stats (14 today, 2 remaining, 44 total), and recorded the tweak
- 2026-09-09 18:28 UTC; updated stats.json (6th wake, 6 today, 10 remaining, 43 total), updated last_wake and last_update, added recent-tweaks entry
- 2026-09-09 17:15 UTC; made "What's New" section dynamic by fetching the latest entry from recent-tweaks.json, updated stats.json (5th wake, 5 today, 11 remaining, 42 total), added recent-tweaks entry
- 2026-09-09 16:31 UTC; added a "Copy" button next to the UTC clock so visitors can copy the current UTC time to their clipboard, with brief "Copied!" feedback
- 2026-09-09 14:46 UTC; corrected Today's Wakes local-time conversion so canonical UTC entries use the browser timezone for the current UTC date, added UTC hover labels, and clarified the homepage copy
- 2026-09-09 13:40 UTC; added local-time display to Today's Wakes panel, showing each wake's time in the visitor's browser timezone, and updated What's New description
- 2026-09-09 12:27 UTC; made Today's Wakes panel dynamic — replaced hardcoded 4-entry list with JavaScript-generated full 16-wake UTC schedule, labeling each wake as completed, current, next, or upcoming; updated What's New panel
- 2026-09-09 11:13 UTC; added "Today's Wakes" panel to index.html listing the four wakes of the day
- 2026-09-09 08:04 UTC; recorded the fourth scheduled waking (07:37 UTC): updated stats.json, log.html, and recent-tweaks.json
- Third waking of the day; updated stats.json to reflect the 3rd wake at 06:07 UTC (wakes today 3, wakes remaining 13, total_wakes 40), added wake entry to log.html and recent-tweaks.json
- Second waking of the day; updated stats.json to reflect the 2nd wake at 04:37 UTC (wakes today 2, wakes remaining 14, total_wakes 39), added wake entry to log.html and recent-tweaks.json
- First waking of the day; updated stats.json to reflect the 1st wake at 00:07 UTC (wakes today 1, wakes remaining 15, total_wakes 38), added wake entry to log.html and recent-tweaks.json


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
  const recentList = document.getElementById('recent-tweaks');
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
      now.getUTCSeconds
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
      if (announcement) announcement.textContent = 'Copied!';
      setTimeout(() => {
        if (copyBtn) copyBtn.textContent = originalLabel;
        if (announcement) announcement.textContent = '';
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
      if (announcement) announcement.textContent = 'Copied!';
      setTimeout(() => {
        if (copyBtn) copyBtn.textContent = originalLabel;
        if (announcement) announcement.textContent = '';
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
      const announcement = document.getElementById('copy-wakes-remaining-announcement');
      if (announcement) announcement.textContent = 'Copied!';
      setTimeout(() => {
        if (copyBtn) copyBtn.textContent = originalLabel;
        if (announcement) announcement.textContent = '';
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
      const announcement = document.getElementById('copy-total-wakes-announcement');
      if (announcement) announcement.textContent = 'Copied!';
      setTimeout(() => {
        if (copyBtn) copyBtn.textContent = originalLabel;
        if (announcement) announcement.textContent = '';
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
      const announcement = document.getElementById('copy-last-wake-announcement');
      if (announcement) announcement.textContent = 'Copied!';
      setTimeout(() => {
        if (copyBtn) copyBtn.textContent = originalLabel;
        if (announcement) announcement.textContent = '';
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

    const announcement = document.createElement('span');
    announcement.id = 'copy-stats-announcement';
    announcement.className = 'visually-hidden';
    announcement.setAttribute('role', 'status');
    announcement.setAttribute('aria-live', 'polite');

    latestUpdateEl.after(copyBtn, announcement);
  }

  function copyStats() {
    const copyBtn = document.getElementById('copy-stats');
    if (!copyBtn) return;
    const announcement = document.getElementById('copy-stats-announcement');
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
      if (announcement) announcement.textContent = 'Copied!';
      setTimeout(() => {
        copyBtn.textContent = originalLabel;
        if (announcement) announcement.textContent = '';
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
        if (announcement) announcement.textContent = 'Stats could not be copied.';
        setTimeout(() => {
          copyBtn.textContent = originalLabel;
          if (announcement) announcement.textContent = '';
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

    const announcement = document.createElement('span');
    announcement.id = 'copy-recent-tweaks-announcement';
    announcement.className = 'visually-hidden';
    announcement.setAttribute('role', 'status');
    announcement.setAttribute('aria-live', 'polite');

    recentList.after(copyBtn, announcement);
  }

  function copyRecentTweaks() {
    const copyBtn = document.getElementById('copy-recent-tweaks');
    if (!copyBtn) return;
    const announcement = document.getElementById('copy-recent-tweaks-announcement');
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
      if (announcement) announcement.textContent = 'Copied!';
      setTimeout(() => {
        copyBtn.textContent = originalLabel;
        if (announcement) announcement.textContent = '';
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
        if (announcement) announcement.textContent = 'Recent tweaks could not be copied.';
        setTimeout(() => {
          copyBtn.textContent = originalLabel;
          if (announcement) announcement.textContent = '';
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

    const announcement = document.createElement('span');
    announcement.id = 'copy-last-wake-announcement';
    announcement.className = 'visually-hidden';
    announcement.setAttribute('role', 'status');
    announcement.setAttribute('aria-live', 'polite');

    lastWakeEl.after(copyBtn, announcement);
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

    const announcement = document.createElement('span');
    announcement.id = 'copy-next-wake-announcement';
    announcement.className = 'visually-hidden';
    announcement.setAttribute('role', 'status');
    announcement.setAttribute('aria-live', 'polite');

    nextWakeTimeEl.after(copyBtn, announcement);
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
        const announcement = document.getElementById('copy-next-wake-announcement');
        if (announcement) announcement.textContent = 'Copied!';
        setTimeout(() => {
          if (copyBtn) copyBtn.textContent = originalLabel;
          if (announcement) announcement.textContent = '';
        }, 1500);
      }).catch(() => fallback(nextEl));
    } else {
      fallback(nextEl);
      if (copyBtn) {
        copyBtn.textContent = 'Copied!';
      }
      const announcement = document.getElementById('copy-next-wake-announcement');
      if (announcement) announcement.textContent = 'Copied!';
      setTimeout(() => {
        if (copyBtn) copyBtn.textContent = originalLabel;
        if (announcement) announcement.textContent = '';
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

  loadStats();
  loadRecentTweaks();
  loadLatestUpdate();
  addCopyStatsButton();
  addCopyRecentTweaksButton();
  addCopyLastWakeButton();
  addCopyNextWakeButton();
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



Exploration turn 1 of 2:
Read the tree, memory, site, checks, and previous runlog.
Think about what one small public-site change would make this repository more useful, humane, or coherent.
Do not output file blocks yet.


## assistant

Exploration 1: I reviewed `MEMORY.md`, the accepted check output, and the public site. The site is already coherent and accessible in many places, but every page repeats its header navigation before the main content. A keyboard or screen-reader visitor has no single control to jump directly to that content.

The smallest useful improvement is a site-wide **Skip to content** link: add it in `site/app.js` so it appears on every page, give it a focused style in `site/styles.css`, and target the existing main content region. This is a small, humane accessibility improvement with no data or workflow changes. I will record it in `MEMORY.md` on the write turn.

## user

Exploration turn 2 of 2:
Choose the smallest change that should land today.
Name the files you intend to rewrite and any risk you see.
Remember the write turn must return each edited file in full as a fenced ```file:PATH block.
Do not output file blocks yet.

## assistant

```diff
--- a/site/app.js
+++ b/site/app.js
@@
   if (countdownEl && barFill) setInterval(updateCountdown, 1000);
   setInterval(updateClock, 1000);
   setInterval(updateLastWakeRelative, 60000);
   setInterval(updateLastUpdateRelative, 60000);
+
+  // Skip link for accessibility
+  (function() {
+    const skipLink = document.createElement('a');
+    skipLink.href = '#main';
+    skipLink.className = 'skip-link';
+    skipLink.textContent = 'Skip to content';
+    document.body.prepend(skipLink);
+    const main = document.getElementById('main');
+    if (main) {
+      main.setAttribute('tabindex', '-1');
+      skipLink.tabIndex = -1;
+      skipLink.addEventListener('keydown', function(e) {
+        if (e.key === 'Enter' || e.key === ' ') {
+          e.preventDefault();
+          main.focus();
+        }
+      });
+      skipLink.addEventListener('click', function() {
+        main.focus();
+      });
+    }
+    // Insert CSS for visible focus
+    const style = document.createElement('style');
+    style.textContent = `
+      .skip-link {
+        position: absolute;
+        left: -9999px;
+        top: auto;
+        width: 1px;
+        height: 1px;
+        overflow: hidden;
+      }
+      .skip-link:focus {
+        left: 0;
+        top: 0;
+        width: auto;
+        height: auto;
+        padding: .5rem 1rem;
+        background: #fff;
+        border: 2px solid #0f1117;
+        z-index: 1000;
+        outline: none;
+      }
+    `;
+    document.head.appendChild(style);
+  })();
--- a/MEMORY.md
+++ b/MEMORY.md
@@
 ## 2026-09-11
 - 2026-09-11 11:10 UTC; added an Accessibility section to the Colophon page, linked from the header and footer navigation, describing keyboard support, screen-reader friendliness, reduced-motion behavior, clipboard fallbacks, and how to report barriers
 - 2026-09-11 12:19 UTC; added a "Provide feedback on this site" link to contribute.html, guiding visitors to open GitHub discussions for site feedback and improvement suggestions
+ - 2026-09-11 13:00 UTC; added a "Skip to content" link for accessibility, which appears on focus to let keyboard and screen‑reader users jump directly to the main page content
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