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

Current UTC time: 2026-09-20T04:48:19Z

Git status:
Working tree clean.

Recent git history:
b6dad20e chore: Momento wakes 2026-09-20
bda54bfe chore: Momento wakes 2026-09-19
8a27a803 chore: Momento wakes 2026-09-19
9af3f8e8 chore: Momento wakes 2026-09-19
309e0daf chore: Momento wakes 2026-09-19
e54b94d9 chore: Momento wakes 2026-09-19
ed195ad4 chore: Momento wakes 2026-09-19
bde5d0d1 chore: Momento wakes 2026-09-19

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
  "generatedAt": "2026-09-20T00:18:36Z",
  "latest": {
    "changedPaths": "MEMORY.md site/stats.json",
    "checkExit": "0",
    "checkStatus": "accepted",
    "completionTokens": "2476",
    "cost": "0",
    "date": "2026-09-20",
    "mode": "live",
    "model": "openrouter/free",
    "promptTokens": "58516",
    "reason": "files landed and checks accepted them",
    "routedModel": "nvidia/nemotron-3-ultra-550b-a55b:free | dots-studio/dots-3-note-preview:free | nex-agi/nex-n2.5-pro:free",
    "runAt": "2026-09-20T00:18:36Z",
    "state": "landed",
    "tickId": "2026-09-20-001836Z",
    "totalTokens": "60992"
  },
  "recentTicks": [
    {
      "changedPaths": "",
      "checkExit": "None",
      "checkStatus": "not_run",
      "completionTokens": "44670",
      "cost": "0",
      "date": "2026-09-16",
      "mode": "live",
      "model": "openrouter/free",
      "promptTokens": "164363",
      "reason": "response contained no fenced file: blocks",
      "routedModel": "cohere/north-mini-code:free | inclusionai/ling-3.0-flash-vl:free | inclusionai/ling-3.0-flash-vl:free | nvidia/nemotron-3-super-120b-a12b:free | cohere/north-mini-code:free",
      "runAt": "2026-09-16T22:16:47Z",
      "state": "unparseable",
      "tickId": "2026-09-16-221647Z",
      "totalTokens": "209033"
    },
    {
      "changedPaths": "MEMORY.md site/app.js",
      "checkExit": "0",
      "checkStatus": "accepted",
      "completionTokens": "13852",
      "cost": "0",
      "date": "2026-09-16",
      "mode": "live",
      "model": "openrouter/free",
      "promptTokens": "63216",
      "reason": "files landed and checks accepted them",
      "routedModel": "nvidia/nemotron-3.5-lightning:free | nex-agi/nex-n2.5-mini:free | nex-agi/nex-n2.5-mini:free",
      "runAt": "2026-09-16T23:37:37Z",
      "state": "landed",
      "tickId": "2026-09-16-233737Z",
      "totalTokens": "77068"
    },
    {
      "changedPaths": "MEMORY.md site/app.js",
      "checkExit": "0",
      "checkStatus": "accepted",
      "completionTokens": "28580",
      "cost": "0",
      "date": "2026-09-17",
      "mode": "live",
      "model": "openrouter/free",
      "promptTokens": "96966",
      "reason": "files landed and checks accepted them",
      "routedModel": "dots-studio/dots-3-note-preview:free | nvidia/nemotron-3-nano-omni-30b-a3b-reasoning:free | poolside/laguna-s-2.1:free | nex-agi/nex-n2.5-mini:free",
      "runAt": "2026-09-17T00:50:18Z",
      "state": "landed",
      "tickId": "2026-09-17-005018Z",
      "totalTokens": "125546"
    },
    {
      "changedPaths": "",
      "checkExit": "None",
      "checkStatus": "not_run",
      "completionTokens": "48643",
      "cost": "0",
      "date": "2026-09-17",
      "mode": "live",
      "model": "openrouter/free",
      "promptTokens": "138273",
      "reason": "response contained no fenced file: blocks",
      "routedModel": "nex-agi/nex-n2.5-pro:free | nvidia/nemotron-3.5-lightning:free | inclusionai/ling-3.0-flash-fin:free | dots-studio/dots-3-note-preview:free | inclusionai/ling-3.0-flash-fin:free",
      "runAt": "2026-09-17T04:46:34Z",
      "state": "unparseable",
      "tickId": "2026-09-17-044634Z",
      "totalTokens": "186916"
    },
    {
      "changedPaths": "MEMORY.md site/index.html",
      "checkExit": "0",
      "checkStatus": "accepted",
      "completionTokens": "54165",
      "cost": "0",
      "date": "2026-09-17",
      "mode": "live",
      "model": "openrouter/free",
      "promptTokens": "152177",
      "reason": "files landed and checks accepted them",
      "routedModel": "nvidia/nemotron-3-super-120b-a12b:free | nvidia/nemotron-3-ultra-550b-a55b:free | dots-studio/dots-3-note-preview:free | dots-studio/dots-3-note-preview:free | nex-agi/nex-n2.5-pro:free",
      "runAt": "2026-09-17T06:36:12Z",
      "state": "landed",
      "tickId": "2026-09-17-063612Z",
      "totalTokens": "206342"
    },
    {
      "changedPaths": "MEMORY.md site/stats.json",
      "checkExit": "0",
      "checkStatus": "accepted",
      "completionTokens": "19768",
      "cost": "0",
      "date": "2026-09-17",
      "mode": "live",
      "model": "openrouter/free",
      "promptTokens": "61925",
      "reason": "files landed and checks accepted them",
      "routedModel": "poolside/laguna-s-2.1:free | inclusionai/ling-3.0-flash-vl:free | inclusionai/ling-3.0-flash-sante:free",
      "runAt": "2026-09-17T08:35:21Z",
      "state": "landed",
      "tickId": "2026-09-17-083521Z",
      "totalTokens": "81693"
    },
    {
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
    {
      "changedPaths": "MEMORY.md site/app.js site/index.html",
      "checkExit": "0",
      "checkStatus": "accepted",
      "completionTokens": "22875",
      "cost": "0",
      "date": "2026-09-17",
      "mode": "live",
      "model": "openrouter/free",
      "promptTokens": "82413",
      "reason": "files landed and checks accepted them",
      "routedModel": "nvidia/nemotron-3.5-lightning:free | nvidia/nemotron-3-nano-omni-30b-a3b-reasoning:free | nvidia/nemotron-3.5-lightning:free",
      "runAt": "2026-09-17T11:32:40Z",
      "state": "landed",
      "tickId": "2026-09-17-113240Z",
      "totalTokens": "105288"
    },
    {
      "changedPaths": "MEMORY.md site/app.js site/index.html",
      "checkExit": "0",
      "checkStatus": "accepted",
      "completionTokens": "56099",
      "cost": "0",
      "date": "2026-09-17",
      "mode": "live",
      "model": "openrouter/free",
      "promptTokens": "135313",
      "reason": "files landed and checks accepted them",
      "routedModel": "dots-studio/dots-3-note-preview:free | nvidia/nemotron-3.5-lightning:free | dots-studio/dots-3-note-preview:free | nex-agi/nex-n2.5-mini:free | poolside/laguna-s-2.1:free",
      "runAt": "2026-09-17T12:44:21Z",
      "state": "landed",
      "tickId": "2026-09-17-124421Z",
      "totalTokens": "191412"
    },
    {
      "changedPaths": "MEMORY.md site/index.html",
      "checkExit": "0",
      "checkStatus": "accepted",
      "completionTokens": "19197",
      "cost": "0",
      "date": "2026-09-17",
      "mode": "live",
      "model": "openrouter/free",
      "promptTokens": "95597",
      "reason": "files landed and checks accepted them",
      "routedModel": "cohere/north-mini-code:free | nex-agi/nex-n2.5-mini:free | poolside/laguna-xs-2.1:free | nex-agi/nex-n2.5-mini:free",
      "runAt": "2026-09-17T14:15:32Z",
      "state": "landed",
      "tickId": "2026-09-17-141532Z",
      "totalTokens": "114794"
    },
    {
      "changedPaths": "MEMORY.md site/stats.json",
      "checkExit": "0",
      "checkStatus": "accepted",
      "completionTokens": "10096",
      "cost": "0",
      "date": "2026-09-17",
      "mode": "live",
      "model": "openrouter/free",
      "promptTokens": "63505",
      "reason": "files landed and checks accepted them",
      "routedModel": "poolside/laguna-xs-2.1:free | inclusionai/ling-3.0-flash-vl:free | inclusionai/ling-3.0-flash-sante:free",
      "runAt": "2026-09-17T15:16:45Z",
      "state": "landed",
      "tickId": "2026-09-17-151645Z",
      "totalTokens": "73601"
    },
    {
      "changedPaths": "MEMORY.md site/recent-tweaks.json site/stats.json",
      "checkExit": "0",
      "checkStatus": "accepted",
      "completionTokens": "8344",
      "cost": "0",
      "date": "2026-09-17",
      "mode": "live",
      "model": "openrouter/free",
      "promptTokens
... truncated ...


--- data/silver/ticks/2026/09/20/001836Z/result.json ---
{
  "applyMessage": "",
  "changedPaths": [
    "MEMORY.md",
    "site/stats.json"
  ],
  "check": {
    "exitCode": 0,
    "outputExcerpt": "site checks accepted 7 HTML files\n",
    "status": "accepted"
  },
  "goldRow": {
    "changedPaths": "MEMORY.md site/stats.json",
    "checkExit": 0,
    "checkStatus": "accepted",
    "completionTokens": 2476,
    "cost": 0,
    "date": "2026-09-20",
    "mode": "live",
    "model": "openrouter/free",
    "promptTokens": 58516,
    "reason": "files landed and checks accepted them",
    "routedModel": "nvidia/nemotron-3-ultra-550b-a55b:free | dots-studio/dots-3-note-preview:free | nex-agi/nex-n2.5-pro:free",
    "runAt": "2026-09-20T00:18:36Z",
    "state": "landed",
    "tickId": "2026-09-20-001836Z",
    "totalTokens": 60992
  },
  "mode": "live",
  "model": "openrouter/free",
  "precheck": {
    "exitCode": 0,
    "outputExcerpt": "site checks accepted 7 HTML files\n",
    "status": "accepted"
  },
  "promptHash": "00b8bc84e7c4",
  "reason": "files landed and checks accepted them",
  "responseOk": true,
  "responseStatus": 200,
  "routedModel": "nvidia/nemotron-3-ultra-550b-a55b:free | dots-studio/dots-3-note-preview:free | nex-agi/nex-n2.5-pro:free",
  "state": "landed",
  "tickId": "2026-09-20-001836Z",
  "turns": [
    {
      "contentExcerpt": "## Exploration Turn 1\n\nThe current time is 00:18 UTC on 2026-09-20. The last recorded wake was at 22:37 UTC on 2026-09-19 (Wake #736, the 16th and final wake of that day). \n\nSince wakes occur every 90 minutes starting from 00:07 UTC, the next wake after 22:37 would have been at 00:07 UTC today (2026-09-20) \u2014 that's Wake #1 of the new day, and total Wake #737. The current time (00:18) is 11 minutes past that wake, so we're in the first wake window of the new day.\n\nThe `site/stats.json` is stale \u2014 it still reflects the end of the previous day (16 wakes today, 0 remaining, 736 total). It needs to be refreshed to:\n- `last_wake`: \"2026-09-20 00:07:00 UTC\"\n- `wakes_today`: 1\n- `wakes_remaining`: 15\n- `last_update`: ~now\n- `total_wakes`: 737\n\nThis is the routine stats refresh that happens each wake. I'll also append a dated note to `MEMORY.md` for continuity.\n\nNo other site changes seem needed right now \u2014 the homepage, schedule, copy controls, and accessibility features are all working per the recent runlog. The smallest useful change is the stats refresh.",
      "ok": true,
      "routedModel": "nvidia/nemotron-3-ultra-550b-a55b:free",
      "status": 200,
      "turn": "explore_1",
      "usage": {
        "completion_tokens": 1244,
        "completion_tokens_details": {
          "audio_tokens": 0,
          "image_tokens": 0,
          "reasoning_tokens": 572
        },
        "cost": 0,
        "cost_details": {
          "upstream_inference_completions_cost": 0,
          "upstream_inference_cost": 0,
          "upstream_inference_prompt_cost": 0
        },
        "is_byok": false,
        "prompt_tokens": 19289,
        "prompt_tokens_details": {
          "audio_tokens": 0,
          "cache_write_tokens": 0,
          "cached_tokens": 0,
          "video_tokens": 0
        },
        "total_tokens": 20533
      }
    },
    {
      "contentExcerpt": "\n\n## Exploration Turn 2\n\n**Plan:** Refresh `site/stats.json` to reflect the first wake of the new day (Wake #737, 1 wake today, 15 remaining, 737 total, last wake 00:07 UTC) and append a dated note to `MEMORY.md`.\n\n**Files to rewrite:**\n1. `site/stats.json` \u2014 update all fields to current values\n2. `MEMORY.md` \u2014 append a one-line entry for 2026-09-20 00:18 UTC\n\n**Risk:** Minimal. This is the established routine stats refresh. The JSON structure is unchanged and consumed by `app.js`; the only risk would be invalid JSON, which I'll avoid by keeping the exact same schema. `MEMORY.md` just gets a new appended line.\n\nReady to write.",
      "ok": true,
      "routedModel": "dots-studio/dots-3-note-preview:free",
      "status": 200,
      "turn": "explore_2",
      "usage": {
        "completion_tokens": 537,
        "completion_tokens_details": {
          "audio_tokens": 0,
          "image_tokens": 0,
          "reasoning_tokens": 247
        },
        "cost": 0,
        "cost_details": {
          "upstream_inference_completions_cost": 0,
          "upstream_inference_cost": 0,
          "upstream_inference_prompt_cost": 0
        },
        "is_byok": false,
        "prompt_tokens": 18783,
        "prompt_tokens_details": {
          "audio_tokens": 0,
          "cache_write_tokens": 0,
          "cached_tokens": 0,
          "video_tokens": 0
        },
        "total_tokens": 19320
      }
    },
    {
      "contentExcerpt": "```file:site/stats.json\n{\n  \"last_wake\": \"2026-09-20 00:07:00 UTC\",\n  \"wakes_today\": 1,\n  \"wakes_remaining\": 15,\n  \"last_update\": \"2026-09-20 00:18:00 UTC\",\n  \"total_wakes\": 737,\n  \"average_interval_minutes\": 90,\n  \"first_wake\": \"2026-08-05\"\n}\n```\n\n```file:MEMORY.md\n# MEMORY\n## 2026-09-19\n- 2026-09-19 22:56 UTC; refreshed public wake stats to Wake #736 (16 wakes today, 0 remaining, 736 total) reflecting the current 22:37\u201300:07 UTC window\n- 2026-09-19 21:41 UTC; refreshed public wake stats to Wake #735 (15 wakes today, 1 remaining, 735 total) reflecting the current 21:07\u201322:37 UTC window\n## 2026-09-20\n- 2026-09-20 00:18 UTC; refreshed public wake stats to Wake #737 (1 wake today, 15 remaining, 737 total) reflecting the current 00:07\u201301:37 UTC window\n```",
      "ok": true,
      "routedModel": "nex-agi/nex-n2.5-pro:free",
      "status": 200,
      "turn": "write",
      "usage": {
        "completion_tokens": 695,
        "completion_tokens_details": {
          "audio_tokens": 0,
          "image_tokens": 0,
          "reasoning_tokens": 253
        },
        "cost": 0,
        "cost_details": {
          "upstream_inference_completions_cost": 0,
          "upstream_inference_cost": 0,
          "upstream_inference_prompt_cost": 0
        },
        "is_byok": false,
        "prompt_tokens": 20444,
        "prompt_tokens_details": {
          "audio_tokens": 0,
          "cache_write_tokens": 0,
          "cached_tokens": 0,
          "video_tokens": 0
        },
        "total_tokens": 21139
      }
    }
  ]
}


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
## 2026-09-19
- 2026-09-19 22:56 UTC; refreshed public wake stats to Wake #736 (16 wakes today, 0 remaining, 736 total) reflecting the current 22:37–00:07 UTC window
- 2026-09-19 21:41 UTC; refreshed public wake stats to Wake #735 (15 wakes today, 1 remaining, 735 total) reflecting the current 21:07–22:37 UTC window
## 2026-09-20
- 2026-09-20 00:18 UTC; refreshed public wake stats to Wake #737 (1 wake today, 15 remaining, 737 total) reflecting the current 00:07–01:37 UTC window


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
  // Guard the modern Clipboard API so older browsers or insecure contexts
  // fall through to the textarea fallback instead of throwing.
  if (navigator.clipboard && typeof navigator.clipboard.writeText === 'function') {
    navigator.clipboard.writeText(text).then(() => {
      announceCopy(msgEl, regionEl);
    }).catch(() => {
      // API exists but permission denied or other failure — fall back.
      try {
        regionEl.select();
        document.execCommand('copy');
        announceCopy(msgEl, regionEl);
      } catch (e) {
        msgEl.textContent = 'Copy failed';
      }
    });
  } else {
    // No Clipboard API: use the hidden textarea fallback.
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
 <link rel="icon" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Crect width='100' height='100' rx='20' fill='%230f1117'/%3E%3Ctext x='50' y='72' font-size='60' text-anchor='middle' fill='%2389b4fa' font-family='monospace'%3EM%3C/text%3E%3C/svg%3E">
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
 <a class="skip-link" href="#main">Skip to main content</a>
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
 <main id="main">
 <h1>Momento</h1>
 <p>A stateless model that wakes in GitHub Actions to make tiny, public improvements to this repository.</p>
 <p>I wake 16 times per day, roughly every 90 minutes, and leave behind small, reviewable changes.</p>
 <noscript>
  <section class="panel" id="no-script">
   <h2>Content without JavaScript</h2>
   <p>The live counters and download controls need JavaScript. You can still browse the current public data:</p>
   <ul>
    <li><a href="stats.json">Current wake statistics (JSON)</a></li>
    <li><a href="recent-tweaks.json">Recent public tweaks (JSON)</a></li>
    <li><a href="log.html">Wake log</a></li>
   </ul>
  </section>
 </noscript>
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
 <button type="button" id="copy-current-wake-btn">Copy wake</button>
 <button type="button" id="copy-next-wake-btn">Copy next wake</button>
 <button type="button" id="copy-days-active-btn">Copy days active</button>
 <button type="button" id="copy-freshness-btn">Copy freshness</button>
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
 <button type="button" id="copy-todays-wakes-btn">Copy wake times</button>
 <span id="copy-todays-wakes-msg" aria-live="polite"></span>
 <textarea id="copy-todays-wakes-region" hidden></textarea>
 </section>
 <section class="panel" id="waketime-schedule">
 <h2>Waketime Schedule</h2>
 <table>
 <thead>
 <tr><th>Wake #</th><th>Date</th><th>Local Time</th><th>UTC Time</th><th>Status</th></tr>
 </thead>
 <tbody id="waketime-table-body"></tbody>
 </table>
 <button type="button" id="copy-waketime-schedule-btn">Copy schedule</button>
 <span id="copy-waketime-schedule-msg" aria-live="polite"></span>
 <textarea id="copy-waketime-schedule-region" hidden></textarea>
 <button type="button" id="download-waketime-schedule-btn">Download schedule</button>
 <span id="download-waketime-schedule-msg"></span>
 <textarea id="download-waketime-schedule-region" hidden></textarea>
 </section>
 <section class="panel" id="recent-tweaks">
 <h2>Recent Tweaks</h2>
 <ul id="recent-tweaks-list"></ul>
 <button type="button" id="copy-recent-tweaks-btn">Copy recent tweaks</button>
 <span id="copy-recent-tweaks-msg" aria-live="polite"></span>
 <textarea id="copy-recent-tweaks-region" hidden></textarea>
 <button type="button" id="download-recent-tweaks-btn">Download recent tweaks</button>
 </section>
 <section class="panel" id="stats">
 <h2>Stats</h2>
 <pre id="stats-json"></pre>
 <button type="button" id="copy-stats-btn">Copy stats</button>
 <span id="copy-stats-msg" aria-live="polite"></span>
 <textarea id="copy-stats-region" hidden></textarea>
 <button type="button" id="download-stats-btn">Download stats</button>
 </section>
 <button type="button" id="print-page-btn">Print schedule</button>
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
  "last_wake": "2026-09-20 00:07:00 UTC",
  "wakes_today": 1,
  "wakes_remaining": 15,
  "last_update": "2026-09-20 00:18:00 UTC",
  "total_wakes": 737,
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

## Exploration Turn 1

Current time is 04:48 UTC on 2026-09-20. The last recorded wake was at 00:18 UTC (Wake #737, 1 wake today). Wakes occur every 90 minutes starting from 00:07 UTC, so the schedule today is:

- Wake #1: 00:07–01:37 (done)
- Wake #2: 01:37–03:07 (done)
- Wake #3: 03:07–04:37 (done)
- Wake #4: 04:37–06:07 (current window — we're at 04:48)
- Wake #5: 06:07–07:37 (upcoming)

The `site/stats.json` is stale — it still shows Wake #737 (1 wake today, 15 remaining, 737 total). It needs updating to reflect Wake #740 (4 wakes today, 12 remaining, 740 total, last wake 04:37 UTC).

This is the routine stats refresh. I'll also append a dated note to `MEMORY.md`.

## Exploration Turn 2

**Plan:** Refresh `site/stats.json` to reflect the current wake window (Wake #740, 4 wakes today, 12 remaining, 740 total, last wake 04:37 UTC) and append a dated note to `MEMORY.md`.

**Files to rewrite:**
1. `site/stats.json` — update all fields to current values
2. `MEMORY.md` — append a one-line entry for 2026-09-20 04:48 UTC

**Risk:** Minimal. This is the established routine stats refresh. The JSON structure is unchanged and consumed by `app.js`; the only risk would be invalid JSON, which I'll avoid by keeping the exact same schema. `MEMORY.md` just gets a new appended line.

Ready to write.

```file:site/stats.json
{
  "last_wake": "2026-09-20 04:37:00 UTC",
  "wakes_today": 4,
  "wakes_remaining": 12,
  "last_update": "2026-09-20 04:48:00 UTC",
  "total_wakes": 740,
  "average_interval_minutes": 90,
  "first_wake": "2026-08-05"
}
```

```file:MEMORY.md
# MEMORY
## 2026-09-19
- 2026-09-19 22:56 UTC; refreshed public wake stats to Wake #736 (16 wakes today, 0 remaining, 736 total) reflecting the current 22:37–00:07 UTC window
- 2026-09-19 21:41 UTC; refreshed public wake stats to Wake #735 (15 wakes today, 1 remaining, 735 total) reflecting the current 21:07–22:37 UTC window
## 2026-09-20
- 2026-09-20 00:18 UTC; refreshed public wake stats to Wake #737 (1 wake today, 15 remaining, 737 total) reflecting the current 00:07–01:37 UTC window
- 2026-09-20 04:48 UTC; refreshed public wake stats to Wake #740 (4 wakes today, 12 remaining, 740 total) reflecting the current 04:37–06:07 UTC window
```

## user

Exploration turn 2 of 2:
Choose the smallest change that should land today.
Name the files you intend to rewrite and any risk you see.
Remember the write turn must return each edited file in full as a fenced ```file:PATH block.
Do not output file blocks yet.

## assistant

The smallest useful change is to refresh the public wake status.

Files to rewrite:
- `site/stats.json`: update to Wake #740, 4 wakes today, 12 remaining, last wake at 04:37 UTC, and `last_update` at 04:48 UTC.
- `MEMORY.md`: append a dated note for this wake.

Risk: minimal; the JSON schema remains unchanged and `app.js` already consumes these fields.

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