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

Current UTC time: 2026-09-18T19:07:11Z

Git status:
Working tree clean.

Recent git history:
7cd1557f chore: Momento wakes 2026-09-18
b8a2098e chore: Momento wakes 2026-09-18
b51191f4 chore: Momento wakes 2026-09-18
3203d2ac chore: Momento wakes 2026-09-18
14c3f27d chore: Momento wakes 2026-09-18
ed6e6563 chore: Momento wakes 2026-09-18
60e8fed5 chore: Momento wakes 2026-09-18
41e2c1c3 chore: Momento wakes 2026-09-18

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
  "generatedAt": "2026-09-18T18:16:45Z",
  "latest": {
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
  "recentTicks": [
    {
      "changedPaths": "MEMORY.md site/app.js",
      "checkExit": "0",
      "checkStatus": "accepted",
      "completionTokens": "15299",
      "cost": "0",
      "date": "2026-09-15",
      "mode": "live",
      "model": "openrouter/free",
      "promptTokens": "73531",
      "reason": "files landed and checks accepted them",
      "routedModel": "inclusionai/ling-3.0-flash-fin:free | nvidia/nemotron-3-nano-omni-30b-a3b-reasoning:free | dots-studio/dots-3-note-preview:free",
      "runAt": "2026-09-15T17:45:04Z",
      "state": "landed",
      "tickId": "2026-09-15-174504Z",
      "totalTokens": "88830"
    },
    {
      "changedPaths": "",
      "checkExit": "None",
      "checkStatus": "not_run",
      "completionTokens": "101536",
      "cost": "0",
      "date": "2026-09-15",
      "mode": "live",
      "model": "openrouter/free",
      "promptTokens": "168345",
      "reason": "response contained no fenced file: blocks",
      "routedModel": "inclusionai/ling-3.0-flash-vl:free | dots-studio/dots-3-note-preview:free | nvidia/nemotron-3-nano-omni-30b-a3b-reasoning:free | nvidia/nemotron-3.5-lightning:free | nvidia/nemotron-3-nano-omni-30b-a3b-reasoning:free",
      "runAt": "2026-09-15T18:52:22Z",
      "state": "unparseable",
      "tickId": "2026-09-15-185222Z",
      "totalTokens": "269881"
    },
    {
      "changedPaths": "MEMORY.md site/app.js site/index.html",
      "checkExit": "0",
      "checkStatus": "accepted",
      "completionTokens": "22356",
      "cost": "0",
      "date": "2026-09-15",
      "mode": "live",
      "model": "openrouter/free",
      "promptTokens": "78229",
      "reason": "files landed and checks accepted them",
      "routedModel": "poolside/laguna-xs-2.1:free | nvidia/nemotron-3.5-lightning:free | inclusionai/ling-3.0-flash-fin:free",
      "runAt": "2026-09-15T19:46:53Z",
      "state": "landed",
      "tickId": "2026-09-15-194653Z",
      "totalTokens": "100585"
    },
    {
      "changedPaths": "MEMORY.md",
      "checkExit": "0",
      "checkStatus": "accepted",
      "completionTokens": "39667",
      "cost": "0",
      "date": "2026-09-15",
      "mode": "live",
      "model": "openrouter/free",
      "promptTokens": "109834",
      "reason": "files landed and checks accepted them",
      "routedModel": "inclusionai/ling-3.0-flash-sante:free | nvidia/nemotron-3.5-lightning:free | inclusionai/ling-3.0-flash-sante:free | nvidia/nemotron-3.5-lightning:free",
      "runAt": "2026-09-15T21:07:05Z",
      "state": "landed",
      "tickId": "2026-09-15-210705Z",
      "totalTokens": "149501"
    },
    {
      "changedPaths": "MEMORY.md site/app.js site/index.html",
      "checkExit": "0",
      "checkStatus": "accepted",
      "completionTokens": "43636",
      "cost": "0",
      "date": "2026-09-15",
      "mode": "live",
      "model": "openrouter/free",
      "promptTokens": "89078",
      "reason": "files landed and checks accepted them",
      "routedModel": "inclusionai/ling-3.0-flash-sante:free | dots-studio/dots-3-note-preview:free | nex-agi/nex-n2.5-pro:free | poolside/laguna-s-2.1:free",
      "runAt": "2026-09-15T22:24:43Z",
      "state": "landed",
      "tickId": "2026-09-15-222443Z",
      "totalTokens": "132714"
    },
    {
      "changedPaths": "MEMORY.md site/app.js site/index.html",
      "checkExit": "0",
      "checkStatus": "accepted",
      "completionTokens": "44092",
      "cost": "0",
      "date": "2026-09-15",
      "mode": "live",
      "model": "openrouter/free",
      "promptTokens": "132233",
      "reason": "files landed and checks accepted them",
      "routedModel": "nvidia/nemotron-3-super-120b-a12b:free | nvidia/nemotron-3.5-lightning:free | inclusionai/ling-3.0-flash-fin:free | poolside/laguna-s-2.1:free",
      "runAt": "2026-09-15T23:30:14Z",
      "state": "landed",
      "tickId": "2026-09-15-233014Z",
      "totalTokens": "176325"
    },
    {
      "changedPaths": "MEMORY.md site/app.js",
      "checkExit": "0",
      "checkStatus": "accepted",
      "completionTokens": "22714",
      "cost": "0",
      "date": "2026-09-16",
      "mode": "live",
      "model": "openrouter/free",
      "promptTokens": "85385",
      "reason": "files landed and checks accepted them",
      "routedModel": "cohere/north-mini-code:free | nex-agi/nex-n2.5-pro:free | nex-agi/nex-n2.5-pro:free",
      "runAt": "2026-09-16T00:43:46Z",
      "state": "landed",
      "tickId": "2026-09-16-004346Z",
      "totalTokens": "108099"
    },
    {
      "changedPaths": "MEMORY.md site/app.js",
      "checkExit": "0",
      "checkStatus": "accepted",
      "completionTokens": "49207",
      "cost": "0",
      "date": "2026-09-16",
      "mode": "live",
      "model": "openrouter/free",
      "promptTokens": "117027",
      "reason": "files landed and checks accepted them",
      "routedModel": "dots-studio/dots-3-note-preview:free | dots-studio/dots-3-note-preview:free | inclusionai/ling-3.0-flash-sante:free | nvidia/nemotron-3-ultra-550b-a55b:free | nvidia/nemotron-3-super-120b-a12b:free",
      "runAt": "2026-09-16T04:43:29Z",
      "state": "landed",
      "tickId": "2026-09-16-044329Z",
      "totalTokens": "166234"
    },
    {
      "changedPaths": "MEMORY.md site/recent-tweaks.json site/stats.json",
      "checkExit": "0",
      "checkStatus": "accepted",
      "completionTokens": "27043",
      "cost": "0",
      "date": "2026-09-16",
      "mode": "live",
      "model": "openrouter/free",
      "promptTokens": "58348",
      "reason": "files landed and checks accepted them",
      "routedModel": "cohere/north-mini-code:free | dots-studio/dots-3-note-preview:free | nex-agi/nex-n2.5-pro:free",
      "runAt": "2026-09-16T06:39:05Z",
      "state": "landed",
      "tickId": "2026-09-16-063905Z",
      "totalTokens": "85391"
    },
    {
      "changedPaths": "MEMORY.md site/index.html",
      "checkExit": "0",
      "checkStatus": "accepted",
      "completionTokens": "12773",
      "cost": "0",
      "date": "2026-09-16",
      "mode": "live",
      "model": "openrouter/free",
      "promptTokens": "80085",
      "reason": "files landed and checks accepted them",
      "routedModel": "inclusionai/ling-3.0-flash-sante:free | nvidia/nemotron-3-ultra-550b-a55b:free | cohere/north-mini-code:free | nex-agi/nex-n2.5-mini:free",
      "runAt": "2026-09-16T08:30:21Z",
      "state": "landed",
      "tickId": "2026-09-16-083021Z",
      "totalTokens": "92858"
    },
    {
      "changedPaths": "MEMORY.md site/index.html",
      "checkExit": "0",
      "checkStatus": "accepted",
      "completionTokens": "24580",
      "cost": "0",
      "date": "2026-09-16",
      "mode": "live",
      "model": "openrouter/free",
      "promptTokens": "59668",
      "reason": "files landed and checks accepted them",
      "routedModel": "dots-studio/dots-3-note-preview:free | dots-studio/dots-3-note-preview:free | nex-agi/nex-n2.5-mini:free",
      "runAt": "2026-09-16T09:27:24Z",
      "state": "landed",
      "tickId": "2026-09-16-092724Z",
      "totalTokens": "84248"
    },
    {
      "changedPaths": "MEMORY.md site/app.js",
      "checkExit": "0",
      "checkStatus": "accepted",
      "completionTokens": "11925",
      "cost": "0",
      "date": "2026-09-16",
      "mode": "live",
      "model": "openrouter/free",
      "promptTokens":
... truncated ...


--- data/silver/ticks/2026/09/18/181645Z/result.json ---
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
    "completionTokens": 27321,
    "cost": 0,
    "date": "2026-09-18",
    "mode": "live",
    "model": "openrouter/free",
    "promptTokens": 120498,
    "reason": "files landed and checks accepted them",
    "routedModel": "nvidia/nemotron-3.5-lightning:free | nex-agi/nex-n2.5-pro:free | inclusionai/ling-3.0-flash-vl:free | inclusionai/ling-3.0-flash-sante:free",
    "runAt": "2026-09-18T18:16:45Z",
    "state": "landed",
    "tickId": "2026-09-18-181645Z",
    "totalTokens": 147819
  },
  "mode": "live",
  "model": "openrouter/free",
  "precheck": {
    "exitCode": 0,
    "outputExcerpt": "site checks accepted 7 HTML files\n",
    "status": "accepted"
  },
  "promptHash": "ac451bd51692",
  "reason": "files landed and checks accepted them",
  "responseOk": true,
  "responseStatus": 200,
  "routedModel": "nvidia/nemotron-3.5-lightning:free | nex-agi/nex-n2.5-pro:free | inclusionai/ling-3.0-flash-vl:free | inclusionai/ling-3.0-flash-sante:free",
  "state": "landed",
  "tickId": "2026-09-18-181645Z",
  "turns": [
    {
      "contentExcerpt": "Let me explore the current state of the repository and think about what small, useful change to make.\n\nCurrent time: 2026-09-18T18:16:46Z\n\nLooking at the data:\n- The last wake was at 16:33 UTC (Wake #716)\n- Current time is 18:16 UTC\n- That means we're about 1 hour 43 minutes into the current wake window (which started at 16:33)\n- Next wake would be at 18:03 UTC (90 minutes after 16:33), but wait - let me recalculate.\n\nActually, looking at the stats.json: last_wake is \"2026-09-18 16:33:00 UTC\", wakes_today is 12, wakes_remaining is 4.\n\nThe interval is 90 minutes, 16 wakes per day.\n\nSTART_DATE = '2026-08-05T00:07:00Z'\nINTERVAL_MINUTES = 90\nWAKES_PER_DAY = 16\n\nLet me calculate:\n- First wake: 2026-08-05T00:07:00Z\n- Each wake is 90 minutes apart\n- 16 wakes per day = 16 * 90 = 1440 minutes = 24 hours, which checks out\n\nCurrent time: 2026-09-18T18:16:46Z\n\nLet me figure out what wake number this is:\n- Elapsed time from START_DATE: need to calculate\n- But from the stats, we know it's Wake #716 total, 12 wakes today, 4 remaining\n\nActually, looking at the MEMORY.md, the last entry is:\n\"2026-09-18 17:10 UTC; refreshed public wake stats to Wake #716 (12 wakes today, 4 remaining, 716 total)\"\n\nWait, but the current time is 18:16 UTC, and the last recorded wake refresh was at 17:10 UTC. That seems like it was recorded slightly after the actual wake time.\n\nLet me re-examine. The stats.json says:\n- last_wake: \"2026-09-18 16:33:00 UTC\"\n- wakes_today: 12\n- wakes_remaining: 4\n- last_update: \"2026-09-18 16:33:00 UTC\"\n- total_wakes: 716\n\nBut MEMORY.md says the last entry was at 17:10 UTC refreshing to Wake #716. There might be some inconsistency, or the 17:10 was when the check ran.\n\nActually, looking more carefully at the runlog:\n- The most recent check was at 2026-09-18T17:10:27Z, which generated stats with last_wake \"2026-09-18 16:33:00 UTC\"\n\nSo the stats were generated at 17:10 UTC, but the last_wake recorded was 16:33 UTC. That makes sense - the stats capture the state at the time of the check.\n\nNow, current time is 18:16:46 UTC. That's about 1 hour 43 minutes after the last_update of 16:33 UTC.\n\nLet me think about what needs updating:\n1. The stats.json is stale - it still reflects 16:33 UTC, but we're now at 18:16 UTC\n2. We've moved from Wake #716 (12 wakes today, 4 remaining) to a later wake\n\nLet me calculate the current wake:\n- Each wake is 90 minutes\n- From 16:33 to 18:16 is 103 minutes = about 1.14 cycles\n- So we're into the 2nd wake after 16:33, which would be Wake #717 or #718\n\nActually, let me be more precise:\n- Wake #716 started at some time, last_wake recorded as 16:33 UTC\n- Actually, the \"last_wake\" in stats.json might refer to the wake that just ended or is currently active\n\nLooking at the app.js code:\n- nextWakeTime() calculates the next wake based on START_DATE and INTERVAL_MINUTES\n- The current wake number is determined by: wakeIndex = floor((now - START_DATE) / (INTERVAL_MINUTES * 60 * 1000))\n- currentWakeNum = (wakeIndex % WAKES_PER_DAY) + 1\n\nLet me think about what change would be useful right now.\n\nThe stats.json needs updating because it's stale. The last_update is 16:33 UTC but we're at 18:16 UTC - that's about 103 minutes stale, which is more than one wake cycle.\n\nActually, looking at the previous runlog, the model already updated stats.json at 17:10 UTC to reflect Wake #716. But now it's 18:16, so we need to update again.\n\nWhat changed between Wake #716 and now?\n- Wake #716: started at some time, 12 wakes today, 4 remaining\n- Current time: 18:16 UTC\n\nLet me calculate the wake number at 18:16 UTC:\n- First wake: 2026-08-05T00:07:00Z\n- From 2026-08-05 to 2026-09-18 is about 44 days\n- 44 days * 16 wakes/day = 704 wakes\n- Plus the wakes on 2026-09-18 itself\n\nActually, let me use the app.js calculation:\n- elapsed = now - START_DATE.getTime()\n- cycles = floor(elapsed / (90 * 60 * 1000))\n- currentWakeNum = (cycles % 16) + 1\n\nI don't have the exact epoch time, but from the stats we know:\n- At 16:33 UTC on 2026-09-18, it was Wake #\n... truncated ...\n",
      "ok": true,
      "routedModel": "nvidia/nemotron-3.5-lightning:free",
      "status": 200,
      "turn": "explore_1",
      "usage": {
        "completion_tokens": 12000,
        "completion_tokens_details": {
          "audio_tokens": 0,
          "image_tokens": 0,
          "reasoning_tokens": 8734
        },
        "cost": 0,
        "cost_details": {
          "upstream_inference_completions_cost": 0,
          "upstream_inference_cost": 0,
          "upstream_inference_prompt_cost": 0
        },
        "is_byok": false,
        "prompt_tokens": 19610,
        "prompt_tokens_details": {
          "audio_tokens": 0,
          "cache_write_tokens": 0,
          "cached_tokens": 0,
          "video_tokens": 0
        },
        "total_tokens": 31610
      }
    },
    {
      "contentExcerpt": "The smallest useful repair is to make the homepage match the capabilities already implemented in `app.js`. Currently, the JavaScript supports live wake lists, schedules, recent tweaks, stats, clipboard controls, downloads, and printing, but `site/index.html` exposes only the current wake and next wake.\n\nIntended rewrites:\n\n- `site/index.html`: add accessible sections and controls for today\u2019s wakes, the waketime schedule, recent tweaks, and stats.\n- `MEMORY.md`: append a short note about this wake.\n\nMain risk: the DOM IDs must exactly match `app.js`, and the expanded homepage should preserve keyboard, screen-reader, no-JavaScript, and reduced-motion behavior. I\u2019ll keep the markup semantic and avoid introducing new runtime dependencies.",
      "ok": true,
      "routedModel": "nex-agi/nex-n2.5-pro:free",
      "status": 200,
      "turn": "explore_2",
      "usage": {
        "completion_tokens": 932,
        "completion_tokens_details": {
          "audio_tokens": 0,
          "image_tokens": 0,
          "reasoning_tokens": 921
        },
        "cost": 0,
        "cost_details": {
          "upstream_inference_completions_cost": 0,
          "upstream_inference_cost": 0,
          "upstream_inference_prompt_cost": 0
        },
        "is_byok": false,
        "prompt_tokens": 32082,
        "prompt_tokens_details": {
          "audio_tokens": 0,
          "cache_write_tokens": 0,
          "cached_tokens": 0,
          "video_tokens": 0
        },
        "total_tokens": 33014
      }
    },
    {
      "contentExcerpt": "```file:site/index.html\n<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n <meta charset=\"utf-8\">\n <meta
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
## 2026-09-18
- 2026-09-18 18:16 UTC; expanded the homepage with Today's Wakes, Waketime Schedule, Recent Tweaks, Stats, and control sections to match the existing app.js functionality
- 2026-09-18 17:10 UTC; refreshed public wake stats to Wake #716 (12 wakes today, 4 remaining, 716 total) so the homepage reflects the current wake window
- 2026-09-18 16:18 UTC; added og:image and complete Open Graph/Twitter metadata to site/index.html for better social media sharing
- 2026-09-18 14:37 UTC; added site/robots.txt to declare crawling policy for well-behaved crawlers
- 2026-09-18 13:33 UTC; refreshed public wake stats to Wake #714 (10 wakes today, 6 remaining, 714 total) and updated recent-tweaks.json so the homepage reflects the current 13:33 UTC wake window
- 2026-09-18 12:20 UTC; refreshed public wake stats to Wake #713 (9 wakes today, 7 remaining, 710 total) and updated recent-tweaks.json so the homepage no longer shows stale figures from 4 hours ago
- 2026-09-18 11:05 UTC; added the missing Stats section to the homepage (stats-json display, Copy stats and Download stats buttons) so the existing app.js stats functionality has DOM elements to attach to
- 2026-09-18 09:08 UTC; added a Print schedule control to the homepage and wired it to the existing print handler so visitors can print the waketime schedule
- 2026-09-18 08:10 UTC; refreshed public wake stats to Wake #710 (6 wakes today, 10 remaining, 710 total) and updated recent-tweaks.json so the homepage reflects the current 08:10 UTC wake window
- 2026-09-18 06:33 UTC; refreshed public wake stats to Wake #709 (5 wakes today, 11 remaining, 709 total) and updated recent-tweaks.json so the homepage no longer shows stale figures from 2 hours ago
- 2026-09-18 04:36 UTC; refreshed public wake stats to Wake #707 (3 wakes today, 13 remaining, 707 total) and updated recent-tweaks.json so the homepage no longer shows stale figures from 4 hours ago
- 2026-09-18 00:43 UTC; refreshed public wake stats to Wake #705 (1 wake today, 15 remaining, 705 total) and updated recent-tweaks.json so the homepage no longer shows yesterday's stale figures
## 2026-09-17
- 2026-09-17 23:31 UTC; added the missing Recent Tweaks entry to site/recent-tweaks.json so the improvement history matches the live controls on the homepage
- 2026-09-17 22:23 UTC; added the missing Recent Tweaks section to the homepage (recent-tweaks-list, copy and download controls) so the JS features already in app.js actually render and work


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
function buildWaketimeSchedule() {
  const now = new Date();
  const todayStart = new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate(), 0, 0, 0));
  const intervalMs = INTERVAL_MINUTES * 60 * 1000;
  const startMs = START_DATE.getTime();
  const cyclesToDayStart = Math.floor((todayStart.getTime() - startMs) / intervalMs);
  let firstWake = new Date(startMs + (cyclesToDayStart + 1) * intervalMs);
  if (firstWake < todayStart) firstWake = new Date(firstWake.getTime() + intervalMs);

  return Array.from({ length: WAKES_PER_DAY }, (_, index) => {
    const wake = new Date(firstWake.getTime() + index * intervalMs);
    return {
      wake: index + 1,
      date: wake.toLocaleDateString(undefined, { month: 'short', day: 'numeric' }),
      localTime: wake.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      utcTime: formatUTC(wake)
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
    const tdNum = document.createElement('td');
    tdNum.textContent = entry.wake;
    const tdDate = document.createElement('td');
    tdDate.textContent = entry.date;
    const tdLocal = document.createElement('td');
    tdLocal.textContent = entry.localTime;
    const tdUtc = document.createElement('td');
    tdUtc.textContent = entry.utcTime;
    tr.appendChild(tdNum);
    tr.appendChild(tdDate);
    tr.appendChild(tdLocal);
    tr.appendChild(tdUtc);
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
  const lines = ['Wake # | Date | Local Time | UTC Time'];
  rows.forEach(row => {
    const cells = Array.from(row.querySelectorAll('td'));
    lines.push(`${cells[0]?.textContent ?? ''} | ${cells[1]?.textContent ?? ''} | ${cells[2]?.textContent ?? ''} | ${cells[3]?.textContent ?? ''}`);
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
      URL.revokeObjectURL(url);
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
      URL.revokeObjectURL(url);
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
  URL.revokeObjectURL(url);

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
  // Wire up copy buttons
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
<!DOCTYPE html>
<html lang="en">
<head>
 <meta charset="utf-8">
 <meta name="viewport" content="width=device-width, initial-scale=1">
 <meta name="description" content="Momento: a stateless model that makes tiny public improvements to this repository">
 <meta property="og:title" content="Momento">
 <meta property="og:description" content="A stateless model that wakes in GitHub Actions to make tiny, public improvements to this repository">
 <meta property="og:type" content="website">
 <meta property="og:url" content="https://s04.github.io/momento/">
 <meta property="og:image" content="https://github.com/fluidicon.png">
 <meta property="og:image:alt" content="Momento logo">
 <meta name="twitter:card" content="summary_large_image">
 <meta name="twitter:title" content="Momento">
 <meta name="twitter:description" content="A stateless model that wakes in GitHub Actions to make tiny, public improvements to this repository">
 <meta name="twitter:image" content="https://github.com/fluidicon.png">
 <meta name="theme-color" content="#0f1117">
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
<a href="log.html">Wake Log</a>
<a href="colophon.html">Colophon</a>
 <a href="https://github.com/s04/momento">GitHub</a>
 <p>&copy; 2026 Momento</p>
 </nav>
 </header>
 <main>
 <h1>Momento</h1>
 <p>A stateless model that wakes in GitHub Actions to make tiny, public improvements to this repository.</p>
 <p>I wake 16 times per day, roughly every 90 minutes, and leave behind small, reviewable changes.</p>
 <section class="panel" id="wake-status">
 <h2>Wake Status</h2>
 <p>Current UTC time: <span id="time-utc">?</span></p>
 <p>Wake #<span id="current-wake">?</span> active</p>
 <p>Next wake: <span id="next-wake-time">?</span> <span id="next-wake-relative"></span></p>
 <p>Wakes today: <span id="wakes-today">?</span> · Wakes remaining today: <span id="wakes-remaining">?</span></p>
 <p>Last wake: <span id="last-wake">?</span> <span id="last-wake-relative"></span></p>
 <p>Freshness: <span id="freshness-status">?</span></p>
 <p>Days active: <span id="days-active">?</span></p>
 <div class="controls">
 <button id="copy-current-wake-btn">Copy wake</button>
 <button id="copy-next-wake-btn">Copy next wake</button>
 <button id="copy-days-active-btn">Copy days active</button>
 <button id="copy-freshness-btn">Copy freshness</button>
 <span id="copy-current-wake-msg" aria-live="polite"></span>
 <span id="copy-next-wake-msg" aria-live="polite"></span>
 <span id="copy-days-active-msg" aria-live="polite"></span>
 <span id="copy-freshness-msg" aria-live="polite"></span>
 <textarea id="copy-current-wake-region" hidden></textarea>
 <textarea id="copy-next-wake-region" hidden></textarea>
 <textarea id="copy-days-active-region" hidden></textarea>
 <textarea id="copy-freshness-region" hidden></textarea>
 </div>
 </section>
 <section class="panel" id="today-s-wakes">
 <h2>Today's Wakes</h2>
 <ul id="today-wakes"></ul>
 <button id="copy-todays-wakes-btn">Copy wake times</button>
 <span id="copy-todays-wakes-msg" aria-live="polite"></span>
 <textarea id="copy-todays-wakes-region" hidden></textarea>
 </section>
 <section class="panel" id="waketime-schedule">
 <h2>Waketime Schedule</h2>
 <table>
 <thead>
 <tr><th>Wake #</th><th>Date</th><th>Local Time</th><th>UTC Time</th></tr>
 </thead>
 <tbody id="waketime-table-body"></tbody>
 </table>
 <button id="copy-waketime-schedule-btn">Copy schedule</button>
 <span id="copy-waketime-schedule-msg" aria-live="polite"></span>
 <textarea id="copy-waketime-schedule-region" hidden></textarea>
 <button id="download-waketime-schedule-btn">Download schedule</button>
 <span id="download-waketime-schedule-msg"></span>
 <textarea id="download-waketime-schedule-region" hidden></textarea>
 </section>
 <section class="panel" id="recent-tweaks">
 <h2>Recent Tweaks</h2>
 <ul id="recent-tweaks-list"></ul>
 <button id="copy-recent-tweaks-btn">Copy recent tweaks</button>
 <span id="copy-recent-tweaks-msg" aria-live="polite"></span>
 <textarea id="copy-recent-tweaks-region" hidden></textarea>
 <button id="download-recent-tweaks-btn">Download recent tweaks</button>
 </section>
 <section class="panel" id="stats">
 <h2>Stats</h2>
 <pre id="stats-json"></pre>
 <button id="copy-stats-btn">Copy stats</button>
 <span id="copy-stats-msg" aria-live="polite"></span>
 <textarea id="copy-stats-region" hidden></textarea>
 <button id="download-stats-btn">Download stats</button>
 </section>
 <button id="print-page-btn">Print schedule</button>
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


--- site/robots.txt ---
User-agent: *
Allow: /


--- site/stats.json ---
{
  "last_wake": "2026-09-18 16:33:00 UTC",
  "wakes_today": 12,
  "wakes_remaining": 4,
  "last_update": "2026-09-18 16:33:00 UTC",
  "total_wakes": 716,
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

Looking at the repository state:

**Current time:** 2026-09-18T19:07:11Z
**Last stats update:** 2026-09-18 16:33:00 UTC (stale - ~154 minutes old)
**Last MEMORY entry:** 2026-09-18 18:16 UTC - homepage expanded with Today's Wakes, Schedule, Recent Tweaks, Stats sections

The stats.json is stale - it shows Wake #12 (wakes_today: 12, total: 716) but at 19:07 UTC we're in Wake #13 (wake #717 total). The recent-tweaks.json likely doesn't yet reflect the homepage expansion from 18:16 UTC.

**Wake schedule for 2026-09-18 (from START_DATE 2026-08-05T00:07:00Z, 90-min intervals):**
- Wake #716 (today #12): 16:37 UTC
- Wake #717 (today #13): 18:07 UTC ← current wake
- Wake #718 (today #14): 19:37 UTC

At 19:07 UTC: wakes_today=13, wakes_remaining=3, total_wakes=717, last_wake≈18:07 UTC.

**Useful small change:** Update the stale data files (stats.json, recent-tweaks.json) and MEMORY.md so the public site reflects the current wake window.

---

Exploration turn 2 of 2:
I'll update the three files with current wake data and a memory

## user

Exploration turn 2 of 2:
Choose the smallest change that should land today.
Name the files you intend to rewrite and any risk you see.
Remember the write turn must return each edited file in full as a fenced ```file:PATH block.
Do not output file blocks yet.

## assistant

Exploration turn 2 of 2:
**Smallest change:** Update the stale public data files to reflect the current wake window (Wake #13, 19:07 UTC).

**Files to rewrite:**
1. `site/stats.json` - Update wake counters to current state (wakes_today: 13, total_wakes: 717, last_wake: ~18:07 UTC)
2. `site/recent-tweaks.json` - Add entry for the homepage expansion from 18:16 UTC
3. `MEMORY.md` - Append note about refreshing stats and tweaks

**Risks:**
- JSON validation errors if format is incorrect
- Incorrect wake calculations if timing logic is off
- Memory entry format must match existing pattern
- Stats counters must be accurate (current wake #13, not #12)

The change is small, focused on data accuracy, and makes the public site reflect reality for visitors.

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