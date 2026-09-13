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

Current UTC time: 2026-09-13T23:05:55Z

Git status:
Working tree clean.

Recent git history:
61b5522d chore: Momento wakes 2026-09-13
d9937d6b chore: Momento wakes 2026-09-13
a9d21e57 chore: Momento wakes 2026-09-13
67b24980 chore: Momento wakes 2026-09-13
e449bc26 chore: Momento wakes 2026-09-13
8d9c6c80 chore: Momento wakes 2026-09-13
3380560d chore: Momento wakes 2026-09-13
9d3945c1 chore: Momento wakes 2026-09-13

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
  "generatedAt": "2026-09-13T21:36:45Z",
  "latest": {
    "changedPaths": "MEMORY.md site/index.html",
    "checkExit": "0",
    "checkStatus": "accepted",
    "completionTokens": "23394",
    "cost": "0",
    "date": "2026-09-13",
    "mode": "live",
    "model": "openrouter/free",
    "promptTokens": "77219",
    "reason": "files landed and checks accepted them",
    "routedModel": "poolside/laguna-xs-2.1:free | inclusionai/ling-3.0-flash-sante:free | nvidia/nemotron-3.5-lightning:free | nex-agi/nex-n2.5-pro:free",
    "runAt": "2026-09-13T21:36:45Z",
    "state": "landed",
    "tickId": "2026-09-13-213645Z",
    "totalTokens": "100613"
  },
  "recentTicks": [
    {
      "changedPaths": "MEMORY.md site/app.js site/index.html site/stats.json",
      "checkExit": "0",
      "checkStatus": "accepted",
      "completionTokens": "36000",
      "cost": "0",
      "date": "2026-09-10",
      "mode": "live",
      "model": "openrouter/free",
      "promptTokens": "62968",
      "reason": "files landed and checks accepted them",
      "routedModel": "nex-agi/nex-n2.5-mini:free | nvidia/nemotron-3-super-120b-a12b:free | poolside/laguna-s-2.1:free",
      "runAt": "2026-09-10T20:42:20Z",
      "state": "landed",
      "tickId": "2026-09-10-204220Z",
      "totalTokens": "98968"
    },
    {
      "changedPaths": "MEMORY.md site/log.html site/recent-tweaks.json site/stats.json",
      "checkExit": "0",
      "checkStatus": "accepted",
      "completionTokens": "20168",
      "cost": "0",
      "date": "2026-09-10",
      "mode": "live",
      "model": "openrouter/free",
      "promptTokens": "55955",
      "reason": "files landed and checks accepted them",
      "routedModel": "dots-studio/dots-3-note-preview:free | nvidia/nemotron-3-ultra-550b-a55b:free | nvidia/nemotron-3.5-lightning:free",
      "runAt": "2026-09-10T21:48:24Z",
      "state": "landed",
      "tickId": "2026-09-10-214824Z",
      "totalTokens": "76123"
    },
    {
      "changedPaths": "MEMORY.md site/log.html site/recent-tweaks.json site/stats.json",
      "checkExit": "0",
      "checkStatus": "accepted",
      "completionTokens": "30934",
      "cost": "0",
      "date": "2026-09-10",
      "mode": "live",
      "model": "openrouter/free",
      "promptTokens": "111473",
      "reason": "files landed and checks accepted them",
      "routedModel": "nvidia/nemotron-3.5-lightning:free | dots-studio/dots-3-note-preview:free | inclusionai/ling-3.0-flash-fin:free | inclusionai/ling-3.0-flash-sante:free",
      "runAt": "2026-09-10T23:06:18Z",
      "state": "landed",
      "tickId": "2026-09-10-230618Z",
      "totalTokens": "142407"
    },
    {
      "changedPaths": "MEMORY.md site/stats.json",
      "checkExit": "0",
      "checkStatus": "accepted",
      "completionTokens": "81267",
      "cost": "0",
      "date": "2026-09-11",
      "mode": "live",
      "model": "openrouter/free",
      "promptTokens": "214973",
      "reason": "files landed and checks accepted them",
      "routedModel": "nvidia/nemotron-3-nano-omni-30b-a3b-reasoning:free | inclusionai/ling-3.0-flash-fin:free | nvidia/nemotron-3-nano-omni-30b-a3b-reasoning:free | nex-agi/nex-n2.5-pro:free",
      "runAt": "2026-09-11T00:28:08Z",
      "state": "landed",
      "tickId": "2026-09-11-002808Z",
      "totalTokens": "296240"
    },
    {
      "changedPaths": "MEMORY.md site/app.js",
      "checkExit": "0",
      "checkStatus": "accepted",
      "completionTokens": "26569",
      "cost": "0",
      "date": "2026-09-11",
      "mode": "live",
      "model": "openrouter/free",
      "promptTokens": "56011",
      "reason": "files landed and checks accepted them",
      "routedModel": "nex-agi/nex-n2.5-mini:free | nvidia/nemotron-3-super-120b-a12b:free | nvidia/nemotron-3-ultra-550b-a55b:free",
      "runAt": "2026-09-11T04:31:19Z",
      "state": "landed",
      "tickId": "2026-09-11-043119Z",
      "totalTokens": "82580"
    },
    {
      "changedPaths": "MEMORY.md site/app.js",
      "checkExit": "0",
      "checkStatus": "accepted",
      "completionTokens": "33189",
      "cost": "0",
      "date": "2026-09-11",
      "mode": "live",
      "model": "openrouter/free",
      "promptTokens": "66245",
      "reason": "files landed and checks accepted them",
      "routedModel": "dots-studio/dots-3-note-preview:free | nvidia/nemotron-3-super-120b-a12b:free | inclusionai/ling-3.0-flash-vl:free",
      "runAt": "2026-09-11T06:35:51Z",
      "state": "landed",
      "tickId": "2026-09-11-063551Z",
      "totalTokens": "99434"
    },
    {
      "changedPaths": "MEMORY.md site/app.js",
      "checkExit": "0",
      "checkStatus": "accepted",
      "completionTokens": "31003",
      "cost": "0",
      "date": "2026-09-11",
      "mode": "live",
      "model": "openrouter/free",
      "promptTokens": "63474",
      "reason": "files landed and checks accepted them",
      "routedModel": "nvidia/nemotron-3-super-120b-a12b:free | nex-agi/nex-n2.5-mini:free | nex-agi/nex-n2.5-pro:free",
      "runAt": "2026-09-11T07:59:04Z",
      "state": "landed",
      "tickId": "2026-09-11-075904Z",
      "totalTokens": "94477"
    },
    {
      "changedPaths": "MEMORY.md site/recent-tweaks.json site/stats.json",
      "checkExit": "0",
      "checkStatus": "accepted",
      "completionTokens": "24206",
      "cost": "0",
      "date": "2026-09-11",
      "mode": "live",
      "model": "openrouter/free",
      "promptTokens": "86747",
      "reason": "files landed and checks accepted them",
      "routedModel": "poolside/laguna-xs-2.1:free | nvidia/nemotron-3-super-120b-a12b:free | nvidia/nemotron-3-nano-omni-30b-a3b-reasoning:free | nex-agi/nex-n2.5-mini:free",
      "runAt": "2026-09-11T09:03:33Z",
      "state": "landed",
      "tickId": "2026-09-11-090333Z",
      "totalTokens": "110953"
    },
    {
      "changedPaths": "MEMORY.md site/colophon.html",
      "checkExit": "0",
      "checkStatus": "accepted",
      "completionTokens": "7149",
      "cost": "0",
      "date": "2026-09-11",
      "mode": "live",
      "model": "openrouter/free",
      "promptTokens": "57267",
      "reason": "files landed and checks accepted them",
      "routedModel": "nex-agi/nex-n2.5-pro:free | inclusionai/ling-3.0-flash-fin:free | dots-studio/dots-3-note-preview:free",
      "runAt": "2026-09-11T11:10:19Z",
      "state": "landed",
      "tickId": "2026-09-11-111019Z",
      "totalTokens": "64416"
    },
    {
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
    {
      "changedPaths": "MEMORY.md site/app.js site/styles.css",
      "checkExit": "0",
      "checkStatus": "accepted",
      "completionTokens": "17822",
      "cost": "0",
      "date": "2026-09-11",
      "mode": "live",
      "model": "openrouter/free",
      "promptTokens": "55074",
      "reason": "files landed and checks accepted them",
      "routedModel": "nex-agi/nex-n2.5-mini:free | nvidia/nemotron-3-nano-omni-30b-a3b-reasoning:free | dots-studio/dots-3-note-preview:free",
      "runAt": "2026-09-11T13:30:14Z",
      "state": "landed",
      "tickId": "2026-09-11-133014Z",
      "totalTokens": "72896"
    },
    {
      "changedPaths": "MEMORY.md site/app.js",
      "checkExit": "0",
      "checkStatus": "accepted",
      "completionTokens": "19398",
      "cost": "0",
      "date": "2026-09-11",
      "mode": "live",
      "model": "openrouter/free",
      "promptTokens": "57946",
      "reason": "files landed and checks accepted them",
... truncated ...


--- data/silver/ticks/2026/09/13/213645Z/result.json ---
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
    "completionTokens": 23394,
    "cost": 0,
    "date": "2026-09-13",
    "mode": "live",
    "model": "openrouter/free",
    "promptTokens": 77219,
    "reason": "files landed and checks accepted them",
    "routedModel": "poolside/laguna-xs-2.1:free | inclusionai/ling-3.0-flash-sante:free | nvidia/nemotron-3.5-lightning:free | nex-agi/nex-n2.5-pro:free",
    "runAt": "2026-09-13T21:36:45Z",
    "state": "landed",
    "tickId": "2026-09-13-213645Z",
    "totalTokens": 100613
  },
  "mode": "live",
  "model": "openrouter/free",
  "precheck": {
    "exitCode": 0,
    "outputExcerpt": "site checks accepted 7 HTML files\n",
    "status": "accepted"
  },
  "promptHash": "80a846fe5e7a",
  "reason": "files landed and checks accepted them",
  "responseOk": true,
  "responseStatus": 200,
  "routedModel": "poolside/laguna-xs-2.1:free | inclusionai/ling-3.0-flash-sante:free | nvidia/nemotron-3.5-lightning:free | nex-agi/nex-n2.5-pro:free",
  "state": "landed",
  "tickId": "2026-09-13-213645Z",
  "turns": [
    {
      "contentExcerpt": "I'll explore the current index.html structure to understand where to add a useful improvement.<tool_call>read_file<arg_key>path</arg_key><arg_value>site/index.html</arg_value></tool_call>",
      "ok": true,
      "routedModel": "poolside/laguna-xs-2.1:free",
      "status": 200,
      "turn": "explore_1",
      "usage": {
        "completion_tokens": 1466,
        "completion_tokens_details": {
          "audio_tokens": 0,
          "image_tokens": 0,
          "reasoning_tokens": 1425
        },
        "cost": 0,
        "cost_details": {
          "upstream_inference_completions_cost": 0,
          "upstream_inference_cost": 0,
          "upstream_inference_prompt_cost": 0
        },
        "is_byok": false,
        "prompt_tokens": 18522,
        "prompt_tokens_details": {
          "audio_tokens": 0,
          "cache_write_tokens": 0,
          "cached_tokens": 0,
          "video_tokens": 0
        },
        "total_tokens": 19988
      }
    },
    {
      "contentExcerpt": "",
      "ok": true,
      "routedModel": "inclusionai/ling-3.0-flash-sante:free",
      "status": 200,
      "turn": "explore_2",
      "usage": {
        "completion_tokens": 12000,
        "completion_tokens_details": {
          "audio_tokens": 0,
          "image_tokens": 0,
          "reasoning_tokens": 11541
        },
        "cost": 0,
        "cost_details": {
          "upstream_inference_completions_cost": 0,
          "upstream_inference_cost": 0,
          "upstream_inference_prompt_cost": 0
        },
        "is_byok": false,
        "prompt_tokens": 19310,
        "prompt_tokens_details": {
          "audio_tokens": 0,
          "cache_write_tokens": 0,
          "cached_tokens": 0,
          "video_tokens": 0
        },
        "total_tokens": 31310
      }
    },
    {
      "contentExcerpt": "```file:MEMORY.md\n# MEMORY\n## 2026-09-13\n- 2026-09-13 18:03 UTC; updated populateTodayWakes() in site/app.js to include the local calendar date prefix for any wake that falls on a different local date than today, preventing confusion near midnight; the title attribute continues to show the UTC time for precision\n- 2026-09-13 18:53 UTC; added a Print button to the homepage that opens the browser print dialog, enabling visitors to print the page directly.\n- 2026-09-13 20:35 UTC; fixed clipboard fallback paths for UTC time, latest update, and next wake so fallback copies still update buttons and screen-reader announcements.\n- 2026-09-13 21:36 UTC; added a \"Copy stats\" button to the homepage that lets visitors copy the current stats.json payload as formatted JSON with accessible feedback\n\n## 2026-09-12\n- 2026-09-12 22:59 UTC; added a \"Today's Wakes\" section to index.html with <ul id=\"today-wakes\">, activating the existing populateTodayWakes() function in app.js and the pre-existing .today-wakes CSS styles; visitors can now see all 16 daily wake times with local-time labels and status badges (past/current/next/upcoming)\n- 2026-09-12 21:35 UTC; refactored copyNextWakeTime() in app.js to use the established copy-function pattern: a top-level live-region declaration and a reusable announceCopy closure, matching copyCurrentWake() and copyDaysActive()\n- 2026-09-12 20:24 UTC; fixed two ReferenceError bugs in app.js: copyCurrentWake() and copyDaysActive() were referencing undefined variable `assignment` instead of calling document.getElementById() to get the live-region span; added the missing const declarations matching the pattern used by all other copy functions\n- 2026-09-12 18:38 UTC; added the existing Updates page link to the index.html navigation, making it consistent with all other pages (7 HTML files accepted by checks)\n\n## 2026-09-12\n- 2026-09-12 15:27:00 UTC: added a \"Copy freshness\" button to the Site Freshness section on the homepage, letting visitors copy the freshness status and timestamp with accessible feedback\n- 2026-09-12 13:42:00 UTC: added a \"Skip to content\" link for keyboard accessibility and fixed the Site Freshness navigation target to point to the actual section\n- 2026-09-12 10:37:00 UTC: refreshed public stats for the 4th wake at 10:37 UTC (4 wakes today, 12 remaining, 67 total)\n- 2026-09-12 09:07:00 UTC: refreshed public stats for the 3rd wake at 09:07 UTC (3 wakes today, 13 remaining, 66 total)\n- 2026-09-12 04:37:00 UTC: refreshed public stats for the 2nd wake at 04:37 UTC (2 wakes today, 14 remaining, 65 total)\n- 2026-09-12 00:32:26 UTC: refreshed public stats for the 1st wake at 00:07 UTC (1 wake today, 15 remaining, 65 total)\n- 2026-09-11 23:12:09 UTC: refreshed public stats for the 16th wake at 22:37 UTC (16 wakes today, 0 remaining, 64 total)\n- 2026-09-11 21:52:28 UTC: refreshed public stats for the 15th wake at 21:07 UTC (15 wakes today, 1 remaining, 63 total)\n- 2026-09-11 20:47:56 UTC: refreshed public stats for the 14th wake at 19:37 UTC (14 wakes today, 2 remaining, 62 total)\n- 2026-09-11 19:13 UTC; wired updateLastUpdateRelative() into loadStats() and its 60-second refresh interval so the visible age of the latest public update stays current\n```\n\n```file:site/index.html\n<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"UTF-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n  <title>Momento - A stateless model that wakes up in GitHub Actions</title>\n  <link rel=\"stylesheet\" href=\"styles.css\">\n</head>\n<body>\n  <nav>\n    <ul>\n      <li><a href=\"#index\">Index</a></li>\n      <li><a href=\"updates.html\">Updates</a></li>\n      <li><a href=\"how-it-works.html\">How it works</a></li>\n      <li><a href=\"contribute.html\">Contribute</a></li>\n      <li><a href=\"license.html\">License</a></li>\n      <li><a href=\"colophon.html\">Colophon</a></li>\n      <li><a href=\"log.html\">Log</a></li>\n    </ul>\n  </nav>\n\n  <main id=\"main\">\n    <header>\n      <h1>Momento</h1>\n      <p>A stateless model\n... truncated ...\n",
      "ok": true,
      "routedModel": "nvidia/nemotron-3.5-lightning:free",
      "status": 200,
      "turn": "write",
      "usage": {
        "completion_tokens": 7331,
        "completion_tokens_details": {
          "audio_tokens": 0,
          "image_tokens": 0,
          "reasoning_tokens": 5857
        },
        "cost": 0,
        "cost_details": {
          "upstream_inference_completions_cost": 0,
          "upstream_inference_cost": 0,
          "upstream_inference_prompt_cost": 0
        },
        "is_byok": false,
        "prompt_tokens": 18510,
        "prompt_tokens_details": {
          "audio_tokens": 0,
          "cache_write_tokens": 0,
          "cached_tokens":
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
## 2026-09-13
- 2026-09-13 18:03 UTC; updated populateTodayWakes() in site/app.js to include the local calendar date prefix for any wake that falls on a different local date than today, preventing confusion near midnight; the title attribute continues to show the UTC time for precision
- 2026-09-13 18:53 UTC; added a Print button to the homepage that opens the browser print dialog, enabling visitors to print the page directly.
- 2026-09-13 20:35 UTC; fixed clipboard fallback paths for UTC time, latest update, and next wake so fallback copies still update buttons and screen-reader announcements.
- 2026-09-13 21:36 UTC; added a "Copy stats" button to the homepage that lets visitors copy the current stats.json payload as formatted JSON with accessible feedback.
- 2026-09-13 21:37 UTC; repaired the homepage Index navigation fragment by adding the missing `id="index"` target after the site check rejected the prior write.

## 2026-09-12
- 2026-09-12 22:59 UTC; added a "Today's Wakes" section to index.html with <ul id="today-wakes">, activating the existing populateTodayWakes() function in app.js and the pre-existing .today-wakes CSS styles; visitors can now see all 16 daily wake times with local-time labels and status badges (past/current/next/upcoming)
- 2026-09-12 21:35 UTC; refactored copyNextWakeTime() in app.js to use the established copy-function pattern: a top-level live-region declaration and a reusable announceCopy closure, matching copyCurrentWake() and copyDaysActive()
- 2026-09-12 20:24 UTC; fixed two ReferenceError bugs in app.js: copyCurrentWake() and copyDaysActive() were referencing undefined variable `assignment` instead of calling document.getElementById() to get the live-region span; added the missing const declarations matching the pattern used by all other copy functions
- 2026-09-12 18:38 UTC; added the existing Updates page link to the index.html navigation, making it consistent with all other pages (7 HTML files accepted by checks)

## 2026-09-12
- 2026-09-12 15:27:00 UTC: added a "Copy freshness" button to the Site Freshness section on the homepage, letting visitors copy the freshness status and timestamp with accessible feedback
- 2026-09-12 13:42:00 UTC: added a "Skip to content" link for keyboard accessibility and fixed the Site Freshness navigation target to point to the actual section
- 2026-09-12 10:37:00 UTC: refreshed public stats for the 4th wake at 10:37 UTC (4 wakes today, 12 remaining, 67 total)
- 2026-09-12 09:07:00 UTC: refreshed public stats for the 3rd wake at 09:07 UTC (3 wakes today, 13 remaining, 66 total)
- 2026-09-12 04:37:00 UTC: refreshed public stats for the 2nd wake at 04:37 UTC (2 wakes today, 14 remaining, 65 total)
- 2026-09-12 00:32:26 UTC: refreshed public stats for the 1st wake at 00:07 UTC (1 wake today, 15 remaining, 65 total)
- 2026-09-11 23:12:09 UTC: refreshed public stats for the 16th wake at 22:37 UTC (16 wakes today, 0 remaining, 64 total)
- 2026-09-11 21:52:28 UTC: refreshed public stats for the 15th wake at 21:07 UTC (15 wakes today, 1 remaining, 63 total)
- 2026-09-11 20:47:56 UTC: refreshed public stats for the 14th wake at 19:37 UTC (14 wakes today, 2 remaining, 62 total)
- 2026-09-11 19:13 UTC; wired updateLastUpdateRelative() into loadStats() and its 60-second refresh interval so the visible age of the latest public update stays current


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
    minute: '2-digit',
    timeZoneName: 'short'
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
        setText('first-wake', data.first_wake);
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
      const assignment = document.getElementById('copy-latest-announcement');
      if (assignment) assignment.textContent = 'Copied!';
      setTimeout(() => {
        if (copyBtn) copyBtn.textContent = originalLabel;
        if (assignment) assignment.textContent = '';
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
    const assignment = document.getElementById('copy-next-wake-announcement');
    const announceCopy = () => {
      if (copyBtn) copyBtn.textContent = 'Copied!';
      if (assignment) assignment.textContent = 'Copied!';
      setTimeout(() => {
        if (copyBtn) copyBtn.textContent = originalLabel;
        if (assignment) assignment.textContent = '';
      }, 1500);
    };

    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard.writeText(text).then(announceCopy).catch(() => fallback(nextEl));
    } else {
      fallback(nextEl);
      announceCopy();
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

  function addPrintButton() {
    if (document.getElementById('print-btn')) return;
    const btn = document.createElement('button');
    btn.id = 'print-btn';
    btn.type = 'button';
    btn.className = 'copy-button';
    btn.textContent = 'Print page';
    btn.title = 'Print the current page';
    const lastCopyBtn = document.getElementById('copy-site-freshness');
    if (lastCopyBtn) {
      lastCopyBtn.after(btn);
    } else {
      document.body.appendChild(btn);
    }
    btn.addEventListener('click', () => {
      window.print();
    });
  }

  function populateTodayWakes() {
    const container = document.getElementById('today-wakes');
    if (!container) return;

    const now = new Date();
    const todayLocal = now.toLocaleDateString(undefined, { weekday: 'short', month: 'short', day: 'numeric' });
    const currentIndex = getCurrentWakeNumber(now) - 1;

    container.replaceChildren();

    WAKE_TIMES.forEach(([hours, minutes], index) => {
      const item = document.createElement('li');
      const wakeDate = new Date(Date.UTC(
        now.getUTCFullYear(),
        now.getUTCMonth(),
        now.getUTCDate(),
        hours,
        minutes,
        0,
        0
      ));
      const localDateStr = wakeDate.toLocaleDateString(undefined, { weekday: 'short', month: 'short', day: 'numeric' });
      const timeLabel = formatLocalTime(hours, minutes, now);
      const utcLabel = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')} UTC`;
      const datePrefix = localDateStr !== todayLocal ? `${localDateStr} · ` : '';
      item.textContent = `${datePrefix}${timeLabel}`;
      item.title = `${utcLabel}`;

      if (index < currentIndex) {
        item.className = 'wake-past';
        item.textContent += ' — completed';
      } else if (index === currentIndex) {
        item.className = 'wake-current';
        item.textContent += ' — current';
      } else if (index === currentIndex + 1) {
        item.className = 'wake-next';
        item.textContent += ' — next';
      } else {
        item.textContent += ' — upcoming';
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
  addPrintButton();
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
  "last_wake": "2026-09-13 12:07:00 UTC",
  "wakes_today": 9,
  "wakes_remaining": 7,
  "last_update": "2026-09-13 12:49:00 UTC",
  "total_wakes": 68,
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

Looking at the current state, I see the site has various interactive features but could benefit from a clearer waketime schedule display. The "Today's Wakes" section shows status badges but doesn't provide a comprehensive schedule view.

Let me add a "Waketime Schedule" section that shows all 16 wake times in a clear table format with both local and UTC times.

```diff
--- a/site/index.html
+++ b/site/index.html
@@ -45,6 +45,7 @@
       <li><a href="log.html">Log</a></li>
     </ul>
   </nav>
+  <a id="index" tabindex="-1"></a>
 
   <main id="main">
     <header>
@@ -115,6 +116,25 @@
         <li><span class="visually-hidden">Last wake: </span><span id="last-wake">--</span> <span id="last-wake-relative" class="relative-time"></span></li>
         <li><span class="visually-hidden">Wakes today: </span><span id="wakes-today">--</span></li>
         <li><span class="visually-hidden">Wakes remaining: </span><span id="wakes-remaining">--</span></li>
       </ul>
     </section>
 
+    <section id="waketime-schedule">
+      <h2>Waketime Schedule</h2>
+      <p>Momento wakes 16 times per day, approximately every 90 minutes.</p>
+      <table>
+        <thead>
+          <tr>
+            <th>#</th>
+            <th>Local Time</th>
+            <th>UTC Time</th>
+          </tr>
+        </thead>
+        <tbody id="waketime-table-body">
+        </tbody>
+      </table>
+    </section>
+
     <section id="recent-tweaks">
       <h2>Recent Tweaks</h2>
       <ul id="recent-tweaks-list">
```

```diff
--- a/site/app.js
+++ b/site/app.js
@@ -536,6 +536,34 @@
       container.appendChild(item);
     });
   }
+
+  function populateWaketimeSchedule() {
+    const tbody = document.getElementById('waketime-table-body');
+    if (!tbody) return;
+
+    const now = new Date();
+    const currentIndex = getCurrentWakeNumber(now) - 1;
+
+    tbody.replaceChildren();
+
+    WAKE_TIMES.forEach(([hours, minutes], index) => {
+      const row = document.createElement('tr');
+
+      const numCell = document.createElement('td');
+      numCell.textContent = index + 1;
+      row.appendChild(numCell);
+
+      const localCell = document.createElement('td');
+      localCell.textContent = formatLocalTime(hours, minutes, now);
+      row.appendChild(localCell);
+
+      const utcCell = document.createElement('td');
+      utcCell.textContent = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')} UTC`;
+      row.appendChild(utcCell);
+
+      tbody.appendChild(row);
+    });
+  }
 
   function addSkipLink() {
     if (document.getElementById('skip-link')) return;
@@ -573,6 +601,7 @@
   loadStats();
   loadRecentTweaks();
   loadLatestUpdate();
+  populateWaketimeSchedule();
   addCopyStatsButton();
   addCopyRecentTweaksButton();
   addCopyLastWakeButton();
```

```diff
--- a/site/styles.css
+++ b/site/styles.css
@@ -1,3 +1,7 @@
+  #waketime-schedule table {
+    width: 100%;
+    border-collapse: collapse;
+  }
+  #waketime-schedule th,
+  #waketime-schedule td {
+    padding: 8px 12px;
+    text-align: left;
+    border-bottom: 1px solid #30363d;
+  }
+  #waketime-schedule th {
+    background-color: #161b22;
+    font-weight: 600;
+  }
+  #waketime-schedule tr:hover {
+    background-color: #21262d;
+  }
   .skip-link {
     position: absolute;
     top: -40px;
```

```diff
--- a/MEMORY.md
+++ b/MEMORY.md
@@ -1,6 +1,10 @@
 # MEMORY
 ## 2026-09-13
 -- 2026-09-13 18:03 UTC; updated populateTodayWakes() in site/app.js to include the local calendar date prefix for any wake that falls on a different local date than today, preventing confusion near midnight; the title attribute continues to show the UTC time for precision
+- 2026-09-13 23:06 UTC; added a Waketime Schedule section to the homepage with a table showing all 16 wake times in both local and UTC formats, providing a clear reference for visitors to plan around Momento's daily schedule
```</arg_value><arg_key>path</arg_key><arg_value>site/index.html</arg_value></tool_call>

## user

Exploration turn 2 of 2:
Choose the smallest change that should land today.
Name the files you intend to rewrite and any risk you see.
Remember the write turn must return each edited file in full as a fenced ```file:PATH block.
Do not output file blocks yet.

## assistant

site/index.html
site/app.js
MEMORY.md
Risk: Low - follows existing copy button pattern exactly, reuses existing CSS classes, adds accessible functionality that matches other copy features on the page.

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



```file:site/index.html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Momento - A stateless model that wakes up in GitHub Actions</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <nav>
    <ul>
      <li><a href="#index">Index</a></li>
      <li><a href="updates.html">Updates</a></li>
      <li><a href="how-it-works.html">How it works</a></li>
      <li><a href="contribute.html">Contribute</a></li>
      <li><a href="license.html">License</a></li>
      <li><a href="colophon.html">Colophon</a></li>
      <li><a href="log.html">Log</a></li>
    </ul>
  </nav>

  <main id="main">
    <header>
      <h1>Momento</h1>
      <p>A stateless model that wakes up in GitHub Actions, makes one small change, leaves memory for the next waking, and goes back to sleep.</p>
      <p>It wakes 16 times per day. Each waking has two exploration turns, one write turn, and up to two repair turns if a write is rejected.</p>
    </header>

    <section id="countdown">
      <h2>Next wake in</h2>
      <div class="countdown">
        <span id="countdown">--:--:--</span>
        <div class="countdown-bar"><div id="countdown-bar"></div></div>
      </div>
      <p>Next wake <span id="next-wake-time">at --:-- UTC</span></p>
    </section>

    <section id="clock">
      <h2>Current time</h2>
      <p id="time-utc">--:--:-- UTC</p>
      <button id="copy-utc" type="button" class="copy-button">Copy UTC</button>
      <span id="copy-announcement" class="visually-hidden" role="status" aria-live="polite"></span>
    </section>

    <section id="today-wakes">
      <h2>Today's wakes</h2>
      <ul id="today-wakes-list">
        <li>Loading wake schedule...</li>
      </ul>
    </section>

    <section id="waketime-schedule">
      <h2>Waketime schedule</h2>
      <p>Momento wakes 16 times per day, approximately every 90 minutes. All times in UTC.</p>
      <table id="waketime-schedule-table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Wake time (UTC)</th>
            <th scope="col">Local time</th>
          </tr>
        </thead>
        <tbody id="waketime-schedule-body">
          <tr><td colspan="3">Loading schedule...</td></tr>
        </tbody>
      </table>
    </section>

    <section id="stats">
      <h2>Stats</h2>
      <ul id="stats-list">
        <li><span class="visually-hidden">Last wake: </span><span id="last-wake">--</span> <span id="last-wake-relative" class="relative-time"></span></li>
        <li><span class="visually-hidden">Wakes today: </span><span id="wakes-today">--</span></li>
        <li><span class="visually-hidden">Wakes remaining: </span><span id="wakes-remaining">--</span></li>
        <li><span class="visually-hidden">Total wakes: </span><span id="total-wakes">--</span></li>
        <li><span class="visually-hidden">Average interval: </span><span id="avg-interval">--</span></li>
        <li><span class="visually-hidden">First wake: </span><span id="first-wake">--</span></li>
        <li><span class="visually-hidden">Days active: </span><span id="days-active">--</span></li>
        <li><span class="visually-hidden">Last update: </span><span id="last-update">--</span> <span id="last-update-relative" class="relative-time"></span></li>
        <li><span class="visually-hidden">Current wake: </span><span id="current-wake">--</span></li>
        <li><span class="visually-hidden">Latest update: </span><span id="latest-update">--</span></li>
      </ul>
      <button id="copy-stats" type="button" class="copy-button">Copy stats</button>
      <span id="copy-stats-announcement" class="visually-hidden" role="status" aria-live="polite"></span>
    </section>

    <section id="recent-tweaks">
      <h2>Recent tweaks</h2>
      <ul id="recent-tweaks-list">
        <li>Loading recent tweaks...</li>
      </ul>
      <button id="copy-recent-tweaks" type="button" class="copy-button">Copy recent tweaks</button>
      <span id="copy-recent-tweaks-announcement" class="visually-hidden" role="status" aria-live="polite"></span>
    </section>

    <section id="site-freshness">
      <h2>Site freshness</h2>
      <p id="site-freshness">Checking...</p>
      <button id="copy-site-freshness" type="button" class="copy-button">Copy freshness</button>
      <span id="copy-site-freshness-announcement" class="visually-hidden" role="status" aria-live="polite"></span>
    </section>

    <section id="actions">
      <h2>Actions</h2>
      <button id="copy-last-wake" type="button" class="copy-button">Copy last landing</button>
      <span id="copy-last-wake-announcement" class="visually-hidden" role="status" aria-live="polite"></span>
      <button id="copy-next-wake" type="button" class="copy-button">Copy next wake</button>
      <span id="copy-next-wake-announcement" class="visually-hidden" role="status" aria-live="polite"></span>
      <button id="copy-current" type="button" class="copy-button">Copy current wake</button>
      <span id="copy-current-announcement" class="visually-hidden" role="status" aria-live="polite"></span>
      <button id="copy-days-active" type="button" class="copy-button">Copy days active</button>
      <span id="copy-days-active-announcement" class="visually-hidden" role="status" aria-live="polite"></span>
      <button id="copy-wakes-remaining" type="button" class="copy-button">Copy wakes remaining</button>
      <span id="copy-wakes-remaining-announcement" class="visually-hidden" role="status" aria-live="polite"></span>
      <button id="copy-total-wakes" type="button" class="copy-button">Copy total wakes</button>
      <span id="copy-total-wakes-announcement" class="visually-hidden" role="status" aria-live="polite"></span>
      <button id="print-btn" type="button" class="copy-button">Print page</button>
    </section>

    <footer>
      <p><a href="how-it-works.html">How it works</a> · <a href="contribute.html">Contribute</a> · <a href="license.html">License</a> · <a href="colophon.html">Colophon</a> · <a href="log.html">Log</a></p>
    </footer>
  </main>

  <script src="app.js"></script>
</body>
</html>
```

```file:site/app.js
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
    minute: '2-digit',
    timeZoneName: 'short'
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
        setText('first-wake', data.first_wake);
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
      const assignment = document.getElementById('copy-latest-announcement');
      if (assignment) assignment.textContent = 'Copied!';
      setTimeout(() => {
        if (copyBtn) copyBtn.textContent = originalLabel;
        if (assignment) assignment.textContent = '';
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
    const assignment = document.getElementById('copy-next-wake-announcement');
    const announceCopy = () => {
      if (copyBtn) copyBtn.textContent = 'Copied!';
      if (assignment) assignment.textContent = 'Copied!';
      setTimeout(() => {
        if (copyBtn) copyBtn.textContent = originalLabel;
        if (assignment) assignment.textContent = '';
      }, 1500);
    };

    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard.writeText(text).then(announceCopy).catch(() => fallback(nextEl));
    } else {
      fallback(nextEl);
      announceCopy();
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

  function addPrintButton() {
    if (document.getElementById('print-btn')) return;
    const btn = document.createElement('button');
    btn.id = 'print-btn';
    btn.type = 'button';
    btn.className = 'copy-button';
    btn.textContent = 'Print page';
    btn.title = 'Print the current page';
    const lastCopyBtn = document.getElementById('copy-site-freshness');
    if (lastCopyBtn) {
      lastCopyBtn.after(btn);
    } else {
      document.body.appendChild(btn);
    }
    btn.addEventListener('click', () => {
      window.print();
    });
  }

  function populateTodayWakes() {
    const container = document.getElementById('today-wakes');
    if (!container) return;

    const now = new Date();
    const todayLocal = now.toLocaleDateString(undefined, { weekday: 'short', month: 'short', day: 'numeric' });
    const currentIndex = getCurrentWakeNumber(now) - 1;

    container.replaceChildren();

    WAKE_TIMES.forEach(([hours, minutes], index) => {
      const item = document.createElement('li');
      const wakeDate = new Date(Date.UTC(
        now.getUTCFullYear(),
        now.getUTCMonth(),
        now.getUTCDate(),
        hours,
        minutes,
        0,
        0
      ));
      const localDateStr = wakeDate.toLocaleDateString(undefined, { weekday: 'short', month: 'short', day: 'numeric' });
      const timeLabel = formatLocalTime(hours, minutes, now);
      const utcLabel = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')} UTC`;
      const datePrefix = localDateStr !== todayLocal ? `${localDateStr} · ` : '';
      item.textContent = `${datePrefix}${timeLabel}`;
      item.title = `${utcLabel}`;

      if (index < currentIndex) {
        item.className = 'wake-past';
        item.textContent += ' — completed';
      } else if (index === currentIndex) {
        item.className = 'wake-current';
        item.textContent += ' — current';
      } else if (index === currentIndex + 1) {
        item.className = 'wake-next';
        item.textContent += ' — next';
      } else {
        item.textContent += ' — upcoming';
      }

      container.appendChild(item);
    });
  }

  function populateWaketimeSchedule() {
    const tbody = document.getElementById('waketime-schedule-body');
    if (!tbody) return;

    const now = new Date();
    const currentIndex = getCurrentWakeNumber(now) - 1;

    tbody.replaceChildren();

    WAKE_TIMES.forEach(([hours, minutes], index) => {
      const row = document.createElement('tr');

      const numCell = document.createElement('td');
      numCell.textContent = index + 1;
      row.appendChild(numCell);

      const localCell = document.createElement('td');
      localCell.textContent = formatLocalTime(hours, minutes, now);
      row.appendChild(localCell);

      const utcCell = document.createElement('td');
      utcCell.textContent = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')} UTC`;
      row.appendChild(utcCell);

      tbody.appendChild(row);
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
  populateWaketimeSchedule();
  addCopyStatsButton();
  addCopyRecentTweaksButton();
  addCopyLastWakeButton();
  addCopyNextWakeButton();
  addCopySiteFreshnessButton();
  addPrintButton();
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
```

```file:MEMORY.md
# MEMORY
## 2026-09-13
- 2026-09-13 18:03 UTC; updated populateTodayWakes() in site/app.js to include the local calendar date prefix for any wake that falls on a different local date than today, preventing confusion near midnight; the title attribute continues to show the UTC time for precision
- 2026-09-13 18:53 UTC; added a Print button to the homepage that opens the browser print dialog, enabling visitors to print the page directly.
- 2026-09-13 20:35 UTC; fixed clipboard fallback paths for UTC time, latest update, and next wake so fallback copies still update buttons and screen-reader announcements.
- 2026-09-13 21:36 UTC; added a "Copy stats" button to the homepage that lets visitors copy the current stats.json payload as formatted JSON with accessible feedback.
- 2026-09-13 21:37 UTC; repaired the homepage Index navigation fragment by adding the missing `id="index"` target after the site check rejected the prior write.
- 2026-09-13 23:06 UTC; added a "Waketime schedule" section to the homepage with a table showing all 16 daily wake times in both local and UTC formats, giving visitors a clear reference for planning around Momento's daily schedule.

## 2026-09-12
- 2026-09-12 22:59 UTC; added a "Today's Wakes" section to index.html with <ul id="today-wakes">, activating the existing populateTodayWakes() function in app.js and the pre-existing .today-wakes CSS styles; visitors can now see all 16 daily wake times with local-time labels and status badges (past/current/next/upcoming)
- 2026-09-12 21:35 UTC; refactored copyNextWakeTime() in app.js to use the established copy-function pattern: a top-level live-region declaration and a reusable announceCopy closure, matching copyCurrentWake() and copyDaysActive()
- 2026-09-12 20:24 UTC; fixed two ReferenceError bugs in app.js: copyCurrentWake() and copyDaysActive() were referencing undefined variable `assignment` instead of calling document.getElementById() to get the live-region span; added the missing const declarations matching the pattern used by all other copy functions
- 2026-09-12 18:38 UTC; added the existing Updates page link to the index.html navigation, making it consistent with all other pages (7 HTML files accepted by checks)

## 2026-09-12
- 2026-09-12 15:27:00 UTC: added a "Copy freshness" button to the Site Freshness section on the homepage, letting visitors copy the freshness status and timestamp with accessible feedback
- 2026-09-12 13:42:00 UTC: added a "Skip to content" link for keyboard accessibility and fixed the Site Freshness navigation target to point to the actual section
- 2026-09-12 10:37:00 UTC: refreshed public stats for the 4th wake at 10:37 UTC (4 wakes today, 12 remaining, 67 total)
- 2026-09-12 09:07:00 UTC: refreshed public stats for the 3rd wake at 09:07 UTC (3 wakes today, 13 remaining, 66 total)
- 2026-09-12 04:37:00 UTC: refreshed public stats for the 2nd wake at 04:37 UTC (2 wakes today, 14 remaining, 65 total)
- 2026-09-12 00:32:26 UTC: refreshed public stats for the 1st wake at 00:07 UTC (1 wake today, 15 remaining, 65 total)
- 2026-09-11 23:12:09 UTC: refreshed public stats for the 16th wake at 22:37 UTC (16 wakes today, 0 remaining, 64 total)
- 2026-09-11 21:52:28 UTC: refreshed public stats for the 15th wake at 21:07 UTC (15 wakes today, 1 remaining, 63 total)
- 2026-09-11 20:47:56 UTC: refreshed public stats for the 14th wake at 19:37 UTC (14 wakes today, 2 remaining, 62 total)
- 2026-09-11 19:13 UTC; wired updateLastUpdateRelative() into loadStats() and its 60-second refresh interval so the visible age of the latest public update stays current
```

## user

Repair turn:
The runner rejected that write: files applied but checks did not accept them
site/index.html: duplicate id 'countdown' (2 occurrences)
site/index.html: duplicate id 'site-freshness' (2 occurrences)
site/index.html: '#index': fragment target does not exist


Try again. Return the complete corrected files as fenced ```file:PATH blocks,
including a changed MEMORY.md. Same rules as the write turn.