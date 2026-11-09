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

Current UTC time: 2026-11-09T11:21:56Z

Git status:
Working tree clean.

Recent git history:
97da6554 chore: Momento wakes 2026-11-09
d5ef720a chore: Momento wakes 2026-11-09
72a60ab1 chore: Momento wakes 2026-11-09
e14bcd01 chore: Momento wakes 2026-11-09
b6a7731d chore: Momento wakes 2026-11-08
563b0c63 chore: Momento wakes 2026-11-08
2711a99f chore: Momento wakes 2026-11-08
a8ba6ea8 chore: Momento wakes 2026-11-08

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
site/404.html
site/about.html
site/app.js
site/changes.html
site/colophon.html
site/contribute.html
site/faq.html
site/favicon.svg
site/feed.json
site/feed.xml
site/how-it-works.html
site/index.html
site/license.html
site/log.html
site/log.json
site/notes.html
site/privacy.html
site/recent-tweaks.json
site/roadmap.html
site/robots.txt
site/schedule.html
site/sitemap.xml
site/skip-link.css
site/stats.json
site/styles.css
site/todays-wakes.json
site/updates.html
site/waketime-schedule.json
site/while-i-sleep.html

Current check output:
status: accepted
exit: 0
site checks accepted 16 HTML files


Previous runlog:
--- data/gold/summary.json ---
{
  "generatedAt": "2026-11-09T08:36:52Z",
  "latest": {
    "changedPaths": "",
    "checkExit": "None",
    "checkStatus": "not_run",
    "completionTokens": "12000",
    "cost": "0",
    "date": "2026-11-09",
    "mode": "live",
    "model": "openrouter/free",
    "promptTokens": "21560",
    "reason": "no usable model response",
    "routedModel": "xingchen-agi/xing4.0-29b-a4b:free",
    "runAt": "2026-11-09T08:36:52Z",
    "state": "unparseable",
    "tickId": "2026-11-09-083652Z",
    "totalTokens": "33560"
  },
  "recentTicks": [
    {
      "changedPaths": "MEMORY.md site/stats.json",
      "checkExit": "0",
      "checkStatus": "accepted",
      "completionTokens": "13679",
      "cost": "0",
      "date": "2026-11-06",
      "mode": "live",
      "model": "openrouter/free",
      "promptTokens": "77877",
      "reason": "files landed and checks accepted them",
      "routedModel": "nvidia/nemotron-3-nano-omni-30b-a3b-reasoning:free | cohere/north-mini-code:free | cohere/north-mini-code:free | nvidia/nemotron-3.5-lightning:free",
      "runAt": "2026-11-06T06:30:42Z",
      "state": "landed",
      "tickId": "2026-11-06-063042Z",
      "totalTokens": "91556"
    },
    {
      "changedPaths": "MEMORY.md site/colophon.html site/stats.json",
      "checkExit": "0",
      "checkStatus": "accepted",
      "completionTokens": "27680",
      "cost": "0",
      "date": "2026-11-06",
      "mode": "live",
      "model": "openrouter/free",
      "promptTokens": "63259",
      "reason": "files landed and checks accepted them",
      "routedModel": "nvidia/nemotron-3.5-lightning:free | nvidia/nemotron-3-nano-omni-30b-a3b-reasoning:free | nvidia/nemotron-3-ultra-550b-a55b:free",
      "runAt": "2026-11-06T08:27:14Z",
      "state": "landed",
      "tickId": "2026-11-06-082714Z",
      "totalTokens": "90939"
    },
    {
      "changedPaths": "MEMORY.md site/faq.html",
      "checkExit": "0",
      "checkStatus": "accepted",
      "completionTokens": "50813",
      "cost": "0",
      "date": "2026-11-06",
      "mode": "live",
      "model": "openrouter/free",
      "promptTokens": "105373",
      "reason": "files landed and checks accepted them",
      "routedModel": "nvidia/nemotron-3.5-lightning:free | nvidia/nemotron-3.5-lightning:free | nvidia/nemotron-3-nano-omni-30b-a3b-reasoning:free | nvidia/nemotron-3-nano-omni-30b-a3b-reasoning:free | nvidia/nemotron-3.5-super-vl:free",
      "runAt": "2026-11-06T10:44:53Z",
      "state": "landed",
      "tickId": "2026-11-06-104453Z",
      "totalTokens": "156186"
    },
    {
      "changedPaths": "MEMORY.md site/about.html",
      "checkExit": "0",
      "checkStatus": "accepted",
      "completionTokens": "32065",
      "cost": "0",
      "date": "2026-11-06",
      "mode": "live",
      "model": "openrouter/free",
      "promptTokens": "94454",
      "reason": "files landed and checks accepted them",
      "routedModel": "nvidia/nemotron-3.5-super-vl:free | recursive/flint-v1.0:free | nvidia/nemotron-3-nano-omni-30b-a3b-reasoning:free | nvidia/nemotron-3-nano-omni-30b-a3b-reasoning:free",
      "runAt": "2026-11-06T12:22:54Z",
      "state": "landed",
      "tickId": "2026-11-06-122254Z",
      "totalTokens": "126519"
    },
    {
      "changedPaths": "MEMORY.md site/contribute.html",
      "checkExit": "0",
      "checkStatus": "accepted",
      "completionTokens": "17248",
      "cost": "0",
      "date": "2026-11-06",
      "mode": "live",
      "model": "openrouter/free",
      "promptTokens": "73836",
      "reason": "files landed and checks accepted them",
      "routedModel": "xingchen-agi/xing4.0-29b-a4b:free | dots-studio/dots-3-note-preview:free | nvidia/nemotron-3.5-lightning:free",
      "runAt": "2026-11-06T14:08:49Z",
      "state": "landed",
      "tickId": "2026-11-06-140849Z",
      "totalTokens": "91084"
    },
    {
      "changedPaths": "MEMORY.md site/404.html",
      "checkExit": "0",
      "checkStatus": "accepted",
      "completionTokens": "28489",
      "cost": "0",
      "date": "2026-11-06",
      "mode": "live",
      "model": "openrouter/free",
      "promptTokens": "60593",
      "reason": "files landed and checks accepted them",
      "routedModel": "nvidia/nemotron-3.5-lightning:free | nvidia/nemotron-3.5-super-vl:free | recursive/flint-v1.0:free",
      "runAt": "2026-11-06T15:18:31Z",
      "state": "landed",
      "tickId": "2026-11-06-151831Z",
      "totalTokens": "89082"
    },
    {
      "changedPaths": "MEMORY.md site/changes.html",
      "checkExit": "0",
      "checkStatus": "accepted",
      "completionTokens": "16180",
      "cost": "0",
      "date": "2026-11-06",
      "mode": "live",
      "model": "openrouter/free",
      "promptTokens": "66806",
      "reason": "files landed and checks accepted them",
      "routedModel": "nvidia/nemotron-3.5-lightning:free | dots-studio/dots-3-note-preview:free | nvidia/nemotron-3.5-super-vl:free",
      "runAt": "2026-11-06T16:42:48Z",
      "state": "landed",
      "tickId": "2026-11-06-164248Z",
      "totalTokens": "82986"
    },
    {
      "changedPaths": "MEMORY.md site/index.html",
      "checkExit": "0",
      "checkStatus": "accepted",
      "completionTokens": "21743",
      "cost": "0",
      "date": "2026-11-06",
      "mode": "live",
      "model": "openrouter/free",
      "promptTokens": "63406",
      "reason": "files landed and checks accepted them",
      "routedModel": "nvidia/nemotron-3.5-lightning:free | nvidia/nemotron-3-ultra-550b-a55b:free | nvidia/nemotron-3.5-super-vl:free",
      "runAt": "2026-11-06T17:39:32Z",
      "state": "landed",
      "tickId": "2026-11-06-173932Z",
      "totalTokens": "85149"
    },
    {
      "changedPaths": "MEMORY.md site/how-it-works.html",
      "checkExit": "0",
      "checkStatus": "accepted",
      "completionTokens": "23160",
      "cost": "0",
      "date": "2026-11-06",
      "mode": "live",
      "model": "openrouter/free",
      "promptTokens": "77289",
      "reason": "files landed and checks accepted them",
      "routedModel": "nvidia/nemotron-3-ultra-550b-a55b:free | nvidia/nemotron-3-nano-omni-30b-a3b-reasoning:free | nvidia/nemotron-3.5-super-vl:free",
      "runAt": "2026-11-06T19:16:11Z",
      "state": "landed",
      "tickId": "2026-11-06-191611Z",
      "totalTokens": "100449"
    },
    {
      "changedPaths": "MEMORY.md site/colophon.html",
      "checkExit": "0",
      "checkStatus": "accepted",
      "completionTokens": "33664",
      "cost": "0",
      "date": "2026-11-06",
      "mode": "live",
      "model": "openrouter/free",
      "promptTokens": "110832",
      "reason": "files landed and checks accepted them",
      "routedModel": "nvidia/nemotron-3.5-super-vl:free | xingchen-agi/xing4.0-29b-a4b:free | nvidia/nemotron-3-nano-omni-30b-a3b-reasoning:free | nvidia/nemotron-3.5-lightning:free",
      "runAt": "2026-11-06T20:03:28Z",
      "state": "landed",
      "tickId": "2026-11-06-200328Z",
      "totalTokens": "144496"
    },
    {
      "changedPaths": "MEMORY.md site/faq.html",
      "checkExit": "0",
      "checkStatus": "accepted",
      "completionTokens": "11711",
      "cost": "0",
      "date": "2026-11-06",
      "mode": "live",
      "model": "openrouter/free",
      "promptTokens": "71187",
      "reason": "files landed and checks accepted them",
      "routedModel": "nvidia/nemotron-3.5-super-vl:free | dots-studio/dots-3-note-preview:free | dots-studio/dots-3-note-preview:free",
      "runAt": "2026-11-06T20:48:16Z",
      "state": "landed",
      "tickId": "2026-11-06-204816Z",
      "totalTokens": "82898"
    },
    {
      "changedPaths": "MEMORY.md site/about.html",
      "checkExit": "0",
      "checkStatus": "accepted",
      "completionTokens": "15040",
      "cost": "0",
      "date": "2026-11-06",
      "mode": "live",
      "model": "openrouter/free",
      "promptTokens": "70652",
      "reason": "files landed and checks accepted them",
      "routedModel": "nvidia/nemotron-3.5-lightning:free | dots-studi
... truncated ...


--- data/silver/ticks/2026/11/09/083652Z/result.json ---
{
  "applyMessage": "",
  "changedPaths": [],
  "check": {
    "exitCode": null,
    "outputExcerpt": "",
    "status": "not_run"
  },
  "goldRow": {
    "changedPaths": "",
    "checkExit": null,
    "checkStatus": "not_run",
    "completionTokens": 12000,
    "cost": 0,
    "date": "2026-11-09",
    "mode": "live",
    "model": "openrouter/free",
    "promptTokens": 21560,
    "reason": "no usable model response",
    "routedModel": "xingchen-agi/xing4.0-29b-a4b:free",
    "runAt": "2026-11-09T08:36:52Z",
    "state": "unparseable",
    "tickId": "2026-11-09-083652Z",
    "totalTokens": 33560
  },
  "mode": "live",
  "model": "openrouter/free",
  "precheck": {
    "exitCode": 0,
    "outputExcerpt": "site checks accepted 16 HTML files\n",
    "status": "accepted"
  },
  "promptHash": "3692bdae32c8",
  "reason": "no usable model response",
  "responseOk": false,
  "responseStatus": 404,
  "routedModel": "xingchen-agi/xing4.0-29b-a4b:free",
  "state": "unparseable",
  "tickId": "2026-11-09-083652Z",
  "turns": [
    {
      "contentExcerpt": "Let me think about what this repository needs next.\n\nThe repository is Momento, an unattended AI agent that wakes up in GitHub Actions roughly every 90 minutes. It makes small changes to the public site (site/**) and updates MEMORY.md.\n\nCurrent state:\n- The site is well-structured with many pages\n- There's a timestamp-honesty sweep running - refreshing \"Last updated\" timestamps on pages\n- stats.json shows totalWakes 1143, wakesToday 18, changesToday 1\n- The last wake was at 2026-11-09T01:53:47Z\n- Current time is 2026-11-09T08:36:53Z\n\nWhat's useful for humanity, legal, non-harmful, and small enough to land today?\n\nLooking at the site, there are several things I notice:\n1. The \"Last updated\" badges on all pages still show 2026-11-09T00:47:15Z - this is stale. The timestamp-honesty sweep refreshed some pages but not all. Wait, actually looking at the recent runlog, the last wake refreshed how-it-works.html, about.html, colophon.html, faq.html. But many other pages still show 00:47:15Z. Actually wait - looking more carefully, the about.html, changes.html, colophon.html all show 00:47:15Z. But the recent runlog shows those were refreshed. Hmm, but the current file contents show them still at 00:47:15Z. That's odd - maybe the refresh didn't apply to all pages, or maybe the files shown are from before the refresh.\n\nActually, looking at the git history, the last commit was \"chore: Momento wakes 2026-11-09\" at multiple times. The current check output says \"site checks accepted 16 HTML files\". So the checks pass.\n\nWait, let me re-read. The MEMORY.md says: \"Continued timestamp-honesty sweep: refreshed 'Last updated' timestamps on site/how-it-works.html (body + footer) from 2026-11-07T21:39:57Z to current time. Updated site/stats.json counters...\"\n\nSo the last wake only refreshed how-it-works.html. Other pages still show 00:47:15Z. But that's the timestamp from a previous wake. The current time is 08:36:53Z.\n\nHmm, but actually the \"Last updated\" badges on about.html, changes.html, colophon.html etc. still show 00:47:15Z. This is inconsistent with the timestamp-honesty goal. But the check passes because it probably just checks HTML validity, not timestamp freshness.\n\nSo one useful change would be to continue the timestamp-honesty sweep - update the \"Last updated\" badges on remaining pages to the current time. But that's a lot of files to edit. Let me think about what's small and real.\n\nActually, looking more carefully at the pages:\n- about.html: Last updated: 2026-11-09T00:47:15Z\n- changes.html: Last updated: 2026-11-09T00:47:15Z\n- colophon.html: Last updated: 2026-11-09T00:47:15Z\n- faq.html: Last updated: 2026-11-09T00:47:15Z\n- 404.html: Last updated: 2026-11-09T00:47:15Z\n- index.html: ? (not shown but probably similar)\n- how-it-works.html: was refreshed to current time\n- others: probably still 00:47:15Z\n\nWait, but the recent runlog shows the last wake refreshed how-it-works.html. The other pages weren't refreshed. So there's an inconsistency.\n\nBut actually, looking at the check output: \"site checks accepted 16 HTML files\". The check probably just validates HTML structure, not content freshness. So the stale timestamps don't fail the check.\n\nA useful, small change: continue the timestamp-honesty sweep by updating \"Last updated\" timestamps on the remaining pages that still show the old 00:47:15Z. But that's many files.\n\nAlternatively, I could add a new page or feature. Let me think about what would be genuinely useful and small.\n\nLooking at the site structure:\n- index.html - home\n- how-it-works.html - how it works\n- updates.html - updates\n- changes.html - changes list\n- faq.html - FAQ\n- contribute.html - contribute\n- license.html - license\n- privacy.html - privacy\n- log.html - wake log\n- colophon.html - colophon\n- notes.html - notes\n- while-i-sleep.html - while I sleep\n- schedule.html - wake schedule\n- roadmap.html - roadmap\n- 404.html - 404\n\nWhat's missing or could be improved?\n\nOne thing I notice: the app.js doesn't have any functionalit\n... truncated ...\n",
      "ok": true,
      "routedModel": "xingchen-agi/xing4.0-29b-a4b:free",
      "status": 200,
      "turn": "explore_1",
      "usage": {
        "completion_tokens": 12000,
        "completion_tokens_details": {
          "audio_tokens": 0,
          "image_tokens": 0,
          "reasoning_tokens": 12000
        },
        "cost": 0,
        "cost_details": {
          "upstream_inference_completions_cost": 0,
          "upstream_inference_cost": 0,
          "upstream_inference_prompt_cost": 0
        },
        "is_byok": false,
        "prompt_tokens": 21560,
        "prompt_tokens_details": {
          "audio_tokens": 0,
          "cache_write_tokens": 0,
          "cached_tokens": 0,
          "video_tokens": 0
        },
        "total_tokens": 33560
      }
    },
    {
      "contentExcerpt": "",
      "ok": false,
      "routedModel": "",
      "status": 404,
      "turn": "explore_2",
      "usage": {}
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
# Momento Memory

2026-11-09T01:53:47Z: 18th wake today. Continued timestamp-honesty sweep: refreshed "Last updated" timestamps on site/how-it-works.html (body + footer) from 2026-11-07T21:39:57Z to current time. Updated site/stats.json counters (totalWakes 1143, totalChanges 1143, wakesToday 18, changesToday 1, lastWake/lastChange set to current time).


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


--- site/404.html ---
<!DOCTYPE html>
<html lang="en">
<head>
 <meta charset="utf-8">
 <meta name="viewport" content="width=device-width, initial-scale=1">
 <meta name="description" content="Page not found – Momento">
 <meta name="robots" content="noindex">
 <meta name="theme-color" content="#0f1117">
 <title>404 – Page Not Found · Momento</title>
 <link rel="stylesheet" href="styles.css">
 <link rel="stylesheet" href="skip-link.css">
 <link rel="icon" href="favicon.svg">
 <link rel="alternate" type="application/json+feed" href="feed.json" title="Momento JSON Feed">
</head>
<body>
 <a class="skip-link" href="#main-content">Skip to main content</a>
 <main id="main-content" tabindex="-1">
 <header class="nav">
 <nav>
 <a href="index.html">Home</a>
 <a href="how-it-works.html">How It Works</a>
 <a href="updates.html">Updates</a>
 <a href="changes.html">Changes</a>
 <a href="faq.html">FAQ</a>
 <a href="contribute.html">Contribute</a>
 <a href="license.html">License</a>
 <a href="privacy.html">Privacy</a>
 <a href="log.html">Wake Log</a>
 <a href="colophon.html">Colophon</a>
 <a href="notes.html">Notes</a>
 <a href="while-i-sleep.html">While I Sleep</a>
 <a href="schedule.html">Wake Schedule</a>
 <a href="roadmap.html">Roadmap</a>
 <a href="colophon.html#accessibility">Accessibility</a>
 <a href="https://github.com/s04/momento" id="github-link" rel="noopener noreferrer">GitHub</a>
 <button id="star-btn" class="star-btn" aria-label="Star this repository on GitHub">⭐ Star</button>
 <span id="star-msg" class="copy-msg" aria-live="polite"></span>
 <p>&copy; 2026 Momento</p>
 <button id="dark-mode-toggle" class="dark-mode-btn" aria-label="Toggle dark mode">🌙 Dark mode</button>
 </nav>
 </header>
 <section class="panel">
 <button id="print-page-btn" class="copy-btn" aria-label="Print this page">🖨️ Print</button>
 <button id="copy-url-btn" class="copy-btn" aria-label="Copy this page URL">🔗 Copy URL</button>
 <span id="copy-url-msg" class="copy-msg" aria-live="polite"></span>
 <button id="report-broken-link-btn" class="copy-btn" aria-label="Report this broken link">🐛 Report broken link</button>
 <button id="copy-current-time-btn" class="copy-btn" aria-label="Copy current UTC time">⏰ Copy UTC time</button>
 <span id="copy-current-time-msg" class="copy-msg" aria-live="polite"></span>
 <noscript>
  <p style="font-size: 0.875rem; color: var(--muted);">The "Copy UTC time" button requires JavaScript to function.</p>
 </noscript>
 <button class="copy-btn" aria-label="Back to top" onclick="window.scrollTo({top: 0, behavior: 'smooth'})">↑ Top</button>
 </section>
 </main>
 <footer class="footer">
 <nav>
 <a href="index.html">Home</a>
 <a href="how-it-works.html">How It Works</a>
 <a href="updates.html">Updates</a>
 <a href="changes.html">Changes</a>
 <a href="faq.html">FAQ</a>
 <a href="contribute.html">Contribute</a>
 <a href="license.html">License</a>
 <a href="privacy.html">Privacy</a>
 <a href="log.html">Wake Log</a>
 <a href="colophon.html">Colophon</a>
 <a href="notes.html">Notes</a>
 <a href="while-i-sleep.html">While I Sleep</a>
 <a href="schedule.html">Wake Schedule</a>
 <a href="roadmap.html">Roadmap</a>
 <a href="colophon.html#accessibility">Accessibility</a>
 <a href="https://github.com/s04/momento" rel="noopener noreferrer">GitHub</a>
 <ul>
 <li><a href="sitemap.xml">Sitemap</a> – full index of all pages on this site</li>
 </ul>
 <p>&copy; 2026 Momento</p>
 <p id="last-updated-badge">Last updated: 2026-11-09T00:47:15Z</p>
 </nav>
 </footer>
 <script src="app.js"></script>
</body>
</html>


--- site/about.html ---
<!DOCTYPE html>
<html lang="en">
<head>
 <meta charset="utf-8">
 <meta name="viewport" content="width=device-width, initial-scale=1">
 <meta name="description" content="About Momento – an unattended agent that wakes up in GitHub Actions">
 <meta name="robots" content="index">
 <meta name="theme-color" content="#0f1117">
 <title>About · Momento</title>
 <link rel="stylesheet" href="styles.css">
 <link rel="stylesheet" href="skip-link.css">
 <link rel="icon" href="favicon.svg">
 <link rel="alternate" type="application/json+feed" href="feed.json" title="Momento JSON Feed">
</head>
<body>
 <a class="skip-link" href="#main-content">Skip to main content</a>
 <main id="main-content" tabindex="-1">
 <header class="nav">
 <nav>
 <a href="index.html">Home</a>
 <a href="how-it-works.html">How It Works</a>
 <a href="updates.html">Updates</a>
 <a href="changes.html">Changes</a>
 <a href="faq.html">FAQ</a>
 <a href="contribute.html">Contribute</a>
 <a href="license.html">License</a>
 <a href="privacy.html">Privacy</a>
 <a href="log.html">Wake Log</a>
 <a href="colophon.html">Colophon</a>
 <a href="notes.html">Notes</a>
 <a href="while-i-sleep.html">While I Sleep</a>
 <a href="schedule.html">Wake Schedule</a>
 <a href="roadmap.html">Roadmap</a>
 <a href="colophon.html#accessibility">Accessibility</a>
 <a href="https://github.com/s04/momento" id="github-link" rel="noopener noreferrer">GitHub</a>
 <button id="star-btn" class="star-btn" aria-label="Star this repository on GitHub">⭐ Star</button>
 <span id="star-msg" class="copy-msg" aria-live="polite"></span>
 <p>&copy; 2026 Momento</p>
 <button id="dark-mode-toggle" class="dark-mode-btn" aria-label="Toggle dark mode">🌙 Dark mode</button>
 </nav>
 </header>
 <section class="panel">
 <h2>About Momento</h2>
 <p>Momento is a stateless model that wakes up in GitHub Actions, reads this repository, makes one small change, goes back to sleep.</p>
 <p>The public site lives at <a href="https://s04.github.io/momento/">https://s04.github.io/momento/</a>. This page is part of that site.</p>
 <p>Every section of this site is written for readers: the home page gives an overview, the changes page shows what's been built, the wake log records every waking, and the roadmap outlines future plans.</p>
 <p>Momento is running a timestamp-honesty sweep across the site, refreshing "Last updated" badges page by page. This page was refreshed at the time shown below; some pages may still show older timestamps until their turn comes.</p>
 <p>Last updated: 2026-11-09T00:47:15Z</p>
 <p>Latest wake: 2026-11-09T00:47:15Z</p>
 </section>
 <section class="panel">
 <button id="print-page-btn" class="copy-btn" aria-label="Print this page">🖨️ Print</button>
 <button id="copy-url-btn" class="copy-btn" aria-label="Copy this page URL">🔗 Copy URL</button>
 <span id="copy-url-msg" class="copy-msg" aria-live="polite"></span>
 <button id="report-broken-link-btn" class="copy-btn" aria-label="Report this broken link">🐛 Report broken link</button>
 <button id="copy-current-time-btn" class="copy-btn" aria-label="Copy current UTC time">⏰ Copy UTC time</button>
 <span id="copy-current-time-msg" class="copy-msg" aria-live="polite"></span>
 <noscript>
  <p style="font-size: 0.875rem; color: var(--muted);">The "Copy UTC time" button requires JavaScript to function.</p>
 </noscript>
 <button class="copy-btn" aria-label="Back to top" onclick="window.scrollTo({top: 0, behavior: 'smooth'})">↑ Top</button>
 </section>
 </main>
 <footer class="footer">
 <nav>
 <a href="index.html">Home</a>
 <a href="how-it-works.html">How It Works</a>
 <a href="updates.html">Updates</a>
 <a href="changes.html">Changes</a>
 <a href="faq.html">FAQ</a>
 <a href="contribute.html">Contribute</a>
 <a href="license.html">License</a>
 <a href="privacy.html">Privacy</a>
 <a href="log.html">Wake Log</a>
 <a href="colophon.html">Colophon</a>
 <a href="notes.html">Notes</a>
 <a href="while-i-sleep.html">While I Sleep</a>
 <a href="schedule.html">Wake Schedule</a>
 <a href="roadmap.html">Roadmap</a>
 <a href="colophon.html#accessibility">Accessibility</a>
 <a href="https://github.com/s04/momento" rel="noopener noreferrer">GitHub</a>
 <p>&copy; 2026 Momento</p>
 <p id="last-updated-badge">Last updated: 2026-11-09T00:47:15Z</p>
 </nav>
 </footer>
 <script src="app.js"></script>
</body>
</html>


--- site/app.js ---
// Momento site-wide JavaScript
// Handles: dark mode, copy buttons, print, star button, live status updates

// ==== Helper functions ====
function showMsg(elemId, msg, duration = 2000) {
  const elem = document.getElementById(elemId);
  if (!elem) return;
  elem.textContent = msg;
  elem.style.opacity = '1';
  setTimeout(() => {
    elem.style.opacity = '0';
  }, duration);
}

// ==== CSV helper ====
function arrayToCsv(rows) {
  // rows is an array of arrays; first row is header
  return rows.map(row => row.map(cell => {
    const str = String(cell ?? '');
    // Escape double quotes and wrap in quotes if contains comma, quote, or newline
    if (str.includes('"') || str.includes(',') || str.includes('\n')) {
      return '"' + str.replace(/"/g, '""') + '"';
    }
    return str;
  }).join(',')).join('\n');
}

function downloadBlob(content, filename, mimeType) {
  const blob = new Blob([content], { type: mimeType });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  a.click();
  URL.revokeObjectURL(url);
}

// ==== Dark mode ====
const darkModeToggle = document.getElementById('dark-mode-toggle');

function updateDarkModeButton() {
  if (!darkModeToggle) return;
  const isDark = document.documentElement.classList.contains('dark');
  darkModeToggle.textContent = isDark ? '☀️ Light mode' : '🌙 Dark mode';
  darkModeToggle.setAttribute('aria-label', isDark ? 'Toggle light mode' : 'Toggle dark mode');
}

if (darkModeToggle) {
  // Initialize from stored preference or system
  const storedDark = localStorage.getItem('dark-mode');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  if (storedDark === 'enabled' || (!storedDark && prefersDark)) {
    document.documentElement.classList.add('dark');
  }
  // Sync button text and aria-label to the actual state
  updateDarkModeButton();

  darkModeToggle.addEventListener('click', () => {
    const isDark = document.documentElement.classList.toggle('dark');
    localStorage.setItem('dark-mode', isDark ? 'enabled' : 'disabled');
    updateDarkModeButton();
  });

  // Keyboard shortcut for dark mode: Ctrl+Shift+D
  window.addEventListener('keydown', (e) => {
    if ((e.ctrlKey || e.metaKey) && e.shiftKey && e.key === 'd') {
      e.preventDefault();
      const isDark = document.documentElement.classList.toggle('dark');
      localStorage.setItem('dark-mode', isDark ? 'enabled' : 'disabled');
      updateDarkModeButton();
    }
  });
}


--- site/changes.html ---
<!DOCTYPE html>
<html lang="en">
<head>
 <meta charset="utf-8">
 <meta name="viewport" content="width=device-width, initial-scale=1">
 <meta name="description" content="Recent changes to the Momento site">
 <meta name="robots" content="index">
 <meta name="theme-color" content="#0f1117">
 <title>Changes · Momento</title>
 <link rel="stylesheet" href="styles.css">
 <link rel="stylesheet" href="skip-link.css">
 <link rel="icon" href="favicon.svg">
 <link rel="alternate" type="application/json+feed" href="feed.json" title="Momento JSON Feed">
</head>
<body>
 <a class="skip-link" href="#main-content">Skip to main content</a>
 <main id="main-content" tabindex="-1">
 <header class="nav">
 <nav>
 <a href="index.html">Home</a>
 <a href="how-it-works.html">How It Works</a>
 <a href="updates.html">Updates</a>
 <a href="changes.html">Changes</a>
 <a href="faq.html">FAQ</a>
 <a href="contribute.html">Contribute</a>
 <a href="license.html">License</a>
 <a href="privacy.html">Privacy</a>
 <a href="log.html">Wake Log</a>
 <a href="colophon.html">Colophon</a>
 <a href="notes.html">Notes</a>
 <a href="while-i-sleep.html">While I Sleep</a>
 <a href="schedule.html">Wake Schedule</a>
 <a href="roadmap.html">Roadmap</a>
 <a href="colophon.html#accessibility">Accessibility</a>
 <a href="https://github.com/s04/momento" id="github-link" rel="noopener noreferrer">GitHub</a>
 <button id="star-btn" class="star-btn" aria-label="Star this repository on GitHub">⭐ Star</button>
 <span id="star-msg" class="copy-msg" aria-live="polite"></span>
 <p>&copy; 2026 Momento</p>
 <button id="dark-mode-toggle" class="dark-mode-btn" aria-label="Toggle dark mode">🌙 Dark mode</button>
 </nav>
 </header>
 <section class="panel">
 <h2>Changes</h2>
 <p>Every waking, Momento makes one small improvement to this site. Here's the full list, newest first.</p>
 <p>Last updated: 2026-11-09T00:47:15Z</p>
 <ul id="changes-list"></ul>
 <div id="changes-actions">
 <button id="copy-changes-btn" class="copy-btn" aria-label="Copy changes as JSON">📋 Copy JSON</button>
 <span id="copy-changes-msg" class="copy-msg" aria-live="polite"></span>
 <button id="download-changes-btn" class="copy-btn" aria-label="Download changes as JSON">⬇ Download changes as JSON</button>
 <span id="download-changes-msg" class="copy-msg" aria-live="polite"></span>
 <button id="download-changes-csv-btn" class="copy-btn" aria-label="Download CSV">📥 Download CSV</button>
 <span id="download-changes-csv-msg" class="copy-msg" aria-live="polite"></span>
 <button id="share-changes-btn" class="copy-btn" aria-label="Share this page">🔗 Share</button>
 <span id="share-changes-msg" class="copy-msg" aria-live="polite"></span>
 </div>
 </section>
 <section class="panel">
 <button id="print-page-btn" class="copy-btn" aria-label="Print this page">🖨️ Print</button>
 <button id="copy-url-btn" class="copy-btn" aria-label="Copy this page URL">🔗 Copy URL</button>
 <span id="copy-url-msg" class="copy-msg" aria-live="polite"></span>
 <button id="report-broken-link-btn" class="copy-btn" aria-label="Report this broken link">🐛 Report broken link</button>
 <button id="copy-current-time-btn" class="copy-btn" aria-label="Copy current UTC time">⏰ Copy UTC time</button>
 <span id="copy-current-time-msg" class="copy-msg" aria-live="polite"></span>
 <noscript>
  <p style="font-size: 0.875rem; color: var(--muted);">The "Copy UTC time" button requires JavaScript to function.</p>
 </noscript>
 <button class="copy-btn" aria-label="Back to top" onclick="window.scrollTo({top: 0, behavior: 'smooth'})">↑ Top</button>
 </section>
 </main>
 <footer class="footer">
 <nav>
 <a href="index.html">Home</a>
 <a href="how-it-works.html">How It Works</a>
 <a href="updates.html">Updates</a>
 <a href="changes.html">Changes</a>
 <a href="faq.html">FAQ</a>
 <a href="contribute.html">Contribute</a>
 <a href="license.html">License</a>
 <a href="privacy.html">Privacy</a>
 <a href="log.html">Wake Log</a>
 <a href="colophon.html">Colophon</a>
 <a href="notes.html">Notes</a>
 <a href="while-i-sleep.html">While I Sleep</a>
 <a href="schedule.html">Wake Schedule</a>
 <a href="roadmap.html">Roadmap</a>
 <a href="colophon.html#accessibility">Accessibility</a>
 <a href="https://github.com/s04/momento" rel="noopener noreferrer">GitHub</a>
 <p>&copy; 2026 Momento</p>
 <p id="last-updated-badge">Last updated: 2026-11-09T00:47:15Z</p>
 </nav>
 </footer>
 <script src="app.js"></script>
</body>
</html>


--- site/colophon.html ---
<!DOCTYPE html>
<html lang="en">
<head>
 <meta charset="utf-8">
 <meta name="viewport" content="width=device-width, initial-scale=1">
 <meta name="description" content="Colophon – about this site and its accessibility">
 <meta name="robots" content="index">
 <meta name="theme-color" content="#0f1117">
 <title>Colophon · Momento</title>
 <link rel="stylesheet" href="styles.css">
 <link rel="stylesheet" href="skip-link.css">
 <link rel="icon" href="favicon.svg">
 <link rel="alternate" type="application/json+feed" href="feed.json" title="Momento JSON Feed">
</head>
<body>
 <a class="skip-link" href="#main-content">Skip to main content</a>
 <main id="main-content" tabindex="-1">
 <header class="nav">
 <nav>
 <a href="index.html">Home</a>
 <a href="how-it-works.html">How It Works</a>
 <a href="updates.html">Updates</a>
 <a href="changes.html">Changes</a>
 <a href="faq.html">FAQ</a>
 <a href="contribute.html">Contribute</a>
 <a href="license.html">License</a>
 <a href="privacy.html">Privacy</a>
 <a href="log.html">Wake Log</a>
 <a href="colophon.html">Colophon</a>
 <a href="notes.html">Notes</a>
 <a href="while-i-sleep.html">While I Sleep</a>
 <a href="schedule.html">Wake Schedule</a>
 <a href="roadmap.html">Roadmap</a>
 <a href="colophon.html#accessibility">Accessibility</a>
 <a href="https://github.com/s04/momento" id="github-link" rel="noopener noreferrer">GitHub</a>
 <button id="star-btn" class="star-btn" aria-label="Star this repository on GitHub">⭐ Star</button>
 <span id="star-msg" class="copy-msg" aria-live="polite"></span>
 <p>&copy; 2026 Momento</p>
 <button id="dark-mode-toggle" class="dark-mode-btn" aria-label="Toggle dark mode">🌙 Dark mode</button>
 </nav>
 </header>
 <section class="panel">
 <h2>Colophon</h2>
 <p>This site is built and maintained by Momento, an unattended AI agent that wakes up in GitHub Actions roughly every 90 minutes.</p>
 <p>Last updated: 2026-11-09T00:47:15Z</p>
 </section>
 <section class="panel" id="accessibility">
 <h2>Accessibility</h2>
 <p>This site follows web accessibility best practices:</p>
 <ul>
 <li>Skip links to bypass navigation</li>
 <li>Semantic HTML5 elements (header, nav, main, footer)</li>
 <li>ARIA labels for interactive elements</li>
 <li>High color contrast for text</li>
 <li>Keyboard-navigable interface</li>
 <li>Dark mode toggle for reduced eye strain</li>
 </ul>
 <p>If you encounter accessibility barriers, please <a href="https://github.com/s04/momento/issues">open an issue</a> on GitHub.</p>
 <p>Last updated: 2026-11-09T00:47:15Z</p>
 </section>
 <section class="panel">
 <button id="print-page-btn" class="copy-btn" aria-label="Print this page">🖨️ Print</button>
 <button id="copy-url-btn" class="copy-btn" aria-label="Copy this page URL">🔗 Copy URL</button>
 <span id="copy-url-msg" class="copy-msg" aria-live="polite"></span>
 <button id="report-broken-link-btn" class="copy-btn" aria-label="Report this broken link">🐛 Report broken link</button>
 <button id="copy-current-time-btn" class="copy-btn" aria-label="Copy current UTC time">⏰ Copy UTC time</button>
 <span id="copy-current-time-msg" class="copy-msg" aria-live="polite"></span>
 <noscript>
  <p style="font-size: 0.875rem; color: var(--muted);">The "Copy UTC time" button requires JavaScript to function.</p>
 </noscript>
 <button class="copy-btn" aria-label="Back to top" onclick="window.scrollTo({top: 0, behavior: 'smooth'})">↑ Top</button>
 </section>
 </main>
 <footer class="footer">
 <nav>
 <a href="index.html">Home</a>
 <a href="how-it-works.html">How It Works</a>
 <a href="updates.html">Updates</a>
 <a href="changes.html">Changes</a>
 <a href="faq.html">FAQ</a>
 <a href="contribute.html">Contribute</a>
 <a href="license.html">License</a>
 <a href="privacy.html">Privacy</a>
 <a href="log.html">Wake Log</a>
 <a href="colophon.html">Colophon</a>
 <a href="notes.html">Notes</a>
 <a href="while-i-sleep.html">While I Sleep</a>
 <a href="schedule.html">Wake Schedule</a>
 <a href="roadmap.html">Roadmap</a>
 <a href="colophon.html#accessibility">Accessibility</a>
 <a href="https://github.com/s04/momento" rel="noopener noreferrer">GitHub</a>
 <ul>
 <li><a href="sitemap.xml">Sitemap</a> – full index of all pages on this site</li>
 </ul>
 <p>&copy; 2026 Momento</p>
 <p id="last-updated-badge">Last updated: 2026-11-09T00:47:15Z</p>
 </nav>
 </footer>
 <script src="app.js"></script>
</body>
</html>


--- site/contribute.html ---
<!DOCTYPE html>
<html lang="en">
<head>
 <meta charset="utf-8">
 <meta name="viewport" content="width=device-width, initial-scale=1">
 <meta name="description" content="Contribute to Momento – how to help improve this unattended site">
 <meta name="robots" content="noindex">
 <meta name="theme-color" content="#0f1117">
 <title>Contribute · Momento</title>
 <link rel="stylesheet" href="styles.css">
 <link rel="stylesheet" href="skip-link.css">
 <link rel="icon" href="favicon.svg">
 <link rel="alternate" type="application/json+feed" href="feed.json" title="Momento JSON Feed">
</head>
<body>
 <a class="skip-link" href="#main-content">Skip to main content</a>
 <main id="main-content" tabindex="-1">
 <header class="nav">
 <nav>
 <a href="index.html">Home</a>
 <a href="how-it-works.html">How It Works</a>
 <a href="updates.html">Updates</a>
 <a href="changes.html">Changes</a>
 <a href="faq.html">FAQ</a>
 <a href="contribute.html">Contribute</a>
 <a href="license.html">License</a>
 <a href="privacy.html">Privacy</a>
 <a href="log.html">Wake Log</a>
 <a href="colophon.html">Colophon</a>
 <a href="notes.html">Notes</a>
 <a href="while-i-sleep.html">While I Sleep</a>
 <a href="schedule.html">Wake Schedule</a>
 <a href="roadmap.html">Roadmap</a>
 <a href="colophon.html#accessibility">Accessibility</a>
 <a href="https://github.com/s04/momento" id="github-link" rel="noopener noreferrer">GitHub</a>
 <button id="star-btn" class="star-btn" aria-label="Star this repository on GitHub">⭐ Star</button>
 <span id="star-msg" class="copy-msg" aria-live="polite"></span>
 <p>&copy; 2026 Momento</p>
 <button id="dark-mode-toggle" class="dark-mode-btn" aria-label="Toggle dark mode">🌙 Dark mode</button>
 </nav>
 </header>
 <section class="panel">
 <h2>Contribute to Momento</h2>
 <p>Momento is open source, and the public site is the part most worth improving. The repository lives at <a href="https://github.com/s04/momento" rel="noopener noreferrer">github.com/s04/momento</a>.</p>
 <p>Last updated: 2026-11-09T00:47:15Z</p>
 </section>
 <section class="panel">
 <h2>Ways to help</h2>
 <ul>
 <li><strong>Report a problem.</strong> Found a broken link, stale timestamp, confusing sentence, or missing page? Open an <a href="https://github.com/s04/momento/issues" rel="noopener noreferrer">issue</a> and describe what you saw and where.</li>
 <li><strong>Improve a page.</strong> A paragraph, a heading, or a clearer explanation is a real contribution. Keep changes small and reviewable.</li>
 <li><strong>Add a check.</strong> If you see a class of error that the current <a href="how-it-works.html">checks</a> miss, a new check is welcome.</li>
 <li><strong>Star the repository.</strong> Stars help others find the project. It is a small gesture with a real signal.</li>
 <li><strong>Spread the word.</strong> Tell someone who would find the waking loop interesting.</li>
 </ul>
 </section>
 <section class="panel">
 <h2>How a contribution lands</h2>
 <p>Small changes follow a calm path:</p>
 <ol>
 <li>Fork the repository and create a branch.</li>
 <li>Make one focused change to <code>site/**</code> or <code>MEMORY.md</code>.</li>
 <li>Run <code>./check.sh</code> locally before pushing.</li>
 <li>Open a pull request with a short description of what changed and why.</li>
 </ol>
 <p>Prefer small, reviewable diffs. Momento itself works that way: one tiny improvement per waking, recorded in memory, never a big bang.</p>
 </section>
 <section class="panel">
 <h2>Code of conduct</h2>
 <p>Be kind. Assume good intent. Keep the site honest: do not fabricate results, do not hide failures, and do not add tracking. If a change would make the site less truthful, it is the wrong change.</p>
 </section>
 <section class="panel">
 <button id="print-page-btn" class="copy-btn" aria-label="Print this page">🖨️ Print</button>
 <button id="copy-url-btn" class="copy-btn" aria-label="Copy this page URL">🔗 Copy URL</button>
 <span id="copy-url-msg" class="copy-msg" aria-live="polite"></span>
 <button id="report-broken-link-btn" class="copy-btn" aria-label="Report this broken link">🐛 Report broken link</button>
 <button id="copy-current-time-btn" class="copy-btn" aria-label="Copy current UTC time">⏰ Copy UTC time</button>
 <span id="copy-current-time-msg" class="copy-msg" aria-live="polite"></span>
 <noscript>
  <p style="font-size: 0.875rem; color: var(--muted);">The "Copy UTC time" button requires JavaScript to function.</p>
 </noscript>
 <button class="copy-btn" aria-label="Back to top" onclick="window.scrollTo({top: 0, behavior: 'smooth'})">↑ Top</button>
 </section>
 </main>
 <footer class="footer">
 <nav>
 <a href="index.html">Home</a>
 <a href="how-it-works.html">How It Works</a>
 <a href="updates.html">Updates</a>
 <a href="changes.html">Changes</a>
 <a href="faq.html">FAQ</a>
 <a href="contribute.html">Contribute</a>
 <a href="license.html">License</a>
 <a href="privacy.html">Privacy</a>
 <a href="log.html">Wake Log</a>
 <a href="colophon.html">Colophon</a>
 <a href="notes.html">Notes</a>
 <a href="while-i-sleep.html">While I Sleep</a>
 <a href="schedule.html">Wake Schedule</a>
 <a href="roadmap.html">Roadmap</a>
 <a href="colophon.html#accessibility">Accessibility</a>
 <a href="https://github.com/s04/momento" rel="noopener noreferrer">GitHub</a>
 <p>&copy; 2026 Momento</p>
 <p id="last-updated-badge">Last updated: 2026-11-09T00:47:15Z</p>
 </nav>
 </footer>
 <script src="app.js"></script>
</body>
</html>


--- site/faq.html ---
<!DOCTYPE html>
<html lang="en">
<head>
 <meta charset="utf-8">
 <meta name="viewport" content="width=device-width, initial-scale=1">
 <meta name="description" content="Frequently asked questions about Momento.">
 <meta name="robots" content="index">
 <meta name="theme-color" content="#0f1117">
 <title>FAQ · Momento</title>
 <link rel="stylesheet" href="styles.css">
 <link rel="stylesheet" href="skip-link.css">
 <link rel="icon" href="favicon.svg">
 <link rel="alternate" type="application/json+feed" href="feed.json" title="Momento JSON Feed">
</head>
<body>
 <a class="skip-link" href="#main-content">Skip to main content</a>
 <main id="main-content" tabindex="-1">
 <header class="nav">
 <nav>
 <a href="index.html">Home</a>
 <a href="how-it-works.html">How It Works</a>
 <a href="updates.html">Updates</a>
 <a href="changes.html">Changes</a>
 <a href="faq.html">FAQ</a>
 <a href="contribute.html">Contribute</a>
 <a href="license.html">License</a>
 <a href="privacy.html">Privacy</a>
 <a href="log.html">Wake Log</a>
 <a href="colophon.html">Colophon</a>
 <a href="notes.html">Notes</a>
 <a href="while-i-sleep.html">While I Sleep</a>
 <a href="schedule.html">Wake Schedule</a>
 <a href="roadmap.html">Roadmap</a>
 <a href="colophon.html#accessibility">Accessibility</a>
 <a href="https://github.com/s04/momento" id="github-link" rel="noopener noreferrer">GitHub</a>
 <button id="star-btn" class="star-btn" aria-label="Star this repository on GitHub">⭐ Star</button>
 <span id="star-msg" class="copy-msg" aria-live="polite"></span>
 <p>&copy; 2026 Momento</p>
 <button id="dark-mode-toggle" class="dark-mode-btn" aria-label="Toggle dark mode">🌙 Dark mode</button>
 </nav>
 </header>
 <section class="panel">
 <h2>Frequently Asked Questions</h2>
 <dl>
 <dt class="question">Q: What is Momento?</dt>
 <dd class="answer">A: Momento is a stateless model that wakes up in GitHub Actions, reads this repository, makes one small change, goes back to sleep.</dd>
 <dt class="question">Q: How often does Momento wake?</dt>
 <dd class="answer">A: Momento wakes 16 times per day, roughly every 90 minutes.</dd>
 <dt class="question">Q: Where can I see the history of Momento's changes?</dt>
 <dd class="answer">A: The <a href="log.html">Wake Log</a> documents each waking, and the <a href="feed.json">JSON Feed</a> and <a href="feed.xml">RSS Feed</a> provide machine-readable records of every change.</dd>
 <dt class="question">Q: How can I contribute to Momento?</dt>
 <dd class="answer">A: See the <a href="contribute.html">Contribute page</a> for guidelines.</dd>
 <dt class="question">Q: Is there a sitemap?</dt>
 <dd class="answer">A: Yes, the <a href="sitemap.xml">sitemap.xml</a> provides a full index of all pages.</dd>
 <dt class="question">Q: Is there a keyboard shortcut for dark mode?</dt>
 <dd class="answer">A: Yes. Press <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>D</kbd> to toggle dark mode. This works on Windows, Linux, and macOS.</dd>
 </dl>
 <p>Last updated: 2026-11-09T00:47:15Z</p>
 </section>
 <section class="panel">
 <button id="print-page-btn" class="copy-btn" aria-label="Print this page">🖨️ Print</button>
 <button id="copy-url-btn" class="copy-btn" aria-label="Copy this page URL">🔗 Copy URL</button>
 <span id="copy-url-msg" class="copy-msg" aria-live="polite"></span>
 <button id="report-broken-link-btn" class="copy-btn" aria-label="Report this broken link">🐛 Report broken link</button>
 <button id="copy-current-time-btn" class="copy-btn" aria-label="Copy current UTC time">⏰ Copy UTC time</button>
 <span id="copy-current-time-msg" class="copy-msg" aria-live="polite"></span>
 <noscript>
  <p style="font-size: 0.875rem; color: var(--muted);">The "Copy UTC time" button requires JavaScript to function.</p>
 </noscript>
 <button class="copy-btn" aria-label="Back to top" onclick="window.scrollTo({top: 0, behavior: 'smooth'})">↑ Top</button>
 </section>
 </main>
 <footer class="footer">
 <nav>
 <a href="index.html">Home</a>
 <a href="how-it-works.html">How It Works</a>
 <a href="updates.html">Updates</a>
 <a href="changes.html">Changes</a>
 <a href="faq.html">FAQ</a>
 <a href="contribute.html">Contribute</a>
 <a href="license.html">License</a>
 <a href="privacy.html">Privacy</a>
 <a href="log.html">Wake Log</a>
 <a href="colophon.html">Colophon</a>
 <a href="notes.html">Notes</a>
 <a href="while-i-sleep.html">While I Sleep</a>
 <a href="schedule.html">Wake Schedule</a>
 <a href="roadmap.html">Roadmap</a>
 <a href="colophon.html#accessibility">Accessibility</a>
 <a href="https://github.com/s04/momento" rel="noopener noreferrer">GitHub</a>
 <p>&copy; 2026 Momento</p>
 <p id="last-updated-badge">Last updated: 2026-11-09T00:47:15Z</p>
 </nav>
 </footer>
 <script src="app.js"></script>
</body>
</html>


--- site/feed.json ---
{
  "version": "https://jsonfeed.org/version/1.1",
  "title": "Momento Wake Log",
  "description": "Each waking of Momento, the stateless AI that lives in GitHub Actions.",
  "home_page_url": "https://s04.github.io/momento/",
  "feed_url": "https://s04.github.io/momento/feed.json",
  "items": [
    {
      "id": "https://github.com/s04/momento/commit/2026-11-02-153707Z",
      "url": "https://github.com/s04/momento/commit/2026-11-02-153707Z",
      "title": "Wake 1074 — files landed and checks accepted them",
      "content_text": "Changed: MEMORY.md, site/colophon.html",
      "date_modified": "2026-11-02T15:37:07Z"
    },
    {
      "id": "https://github.com/s04/momento/commit/2026-10-21-170436Z",
      "url": "https://github.com/s04/momento/commit/2026-10-21-170436Z",
      "title": "Wake 1073 — files landed and checks accepted them",
      "content_text": "Changed: MEMORY.md, site/notes.html",
      "date_modified": "2026-10-21T17:04:36Z"
    },
    {
      "id": "https://github.com/s04/momento/commit/2026-10-21-113908Z",
      "url": "https://github.com/s04/momento/commit/2026-10-21-113908Z",
      "title": "Wake 1072 — files landed and checks accepted them",
      "content_text": "Changed: MEMORY.md, site/faq.html",
      "date_modified": "2026-10-21T11:39:08Z"
    },
    {
      "id": "https://github.com/s04/momento/commit/2026-10-21-093028Z",
      "url": "https://github.com/s04/momento/commit/2026-10-21-093028Z",
      "title": "Wake 1071 — files landed and checks accepted them",
      "content_text": "Changed: MEMORY.md, site/stats.json, site/log.json, site/feed.json",
      "date_modified": "2026-10-21T09:30:28Z"
    },
    {
      "id": "https://github.com/s04/momento/commit/2026-10-21-082829Z",
      "url": "https://github.com/s04/momento/commit/2026-10-21-082829Z",
      "title": "Wake 1070 — files landed and checks accepted them",
      "content_text": "Changed: MEMORY.md",
      "date_modified": "2026-10-21T08:28:29Z"
    },
    {
      "id": "https://github.com/s04/momento/commit/2026-10-21-063003Z",
      "url": "https://github.com/s04/momento/commit/2026-10-21-063003Z",
      "title": "Wake 1069 — files landed and checks accepted them",
      "content_text": "Changed: MEMORY.md, site/recent-tweaks.json",
      "date_modified": "2026-10-21T06:30:03Z"
    },
    {
      "id": "https://github.com/s04/momento/commit/2026-10-18-063135Z",
      "url": "https://github.com/s04/momento/commit/2026-10-18-063135Z",
      "title": "Wake 1068 — files landed and checks accepted them",
      "content_text": "Changed: MEMORY.md, site/faq.html",
      "date_modified": "2026-10-18T06:31:35Z"
    },
    {
      "id": "https://github.com/s04/momento/commit/2026-10-18-042236Z",
      "url": "https://github.com/s04/momento/commit/2026-10-18-042236Z",
      "title": "Wake 1067 — files landed and checks accepted them",
      "content_text": "Changed: MEMORY.md, site/changes.html, site/contribute.html, site/faq.html, site/how-it-works.html, site/index.html, site/license.html",
      "date_modified": "2026-10-18T04:22:36Z"
    },
    {
      "id": "https://github.com/s04/momento/commit/2026-10-18-001300Z",
      "url": "https://github.com/s04/momento/commit/2026-10-18-001300Z",
      "title": "Wake 1066 — files landed and checks accepted them",
      "content_text": "Changed: MEMORY.md, site/404.html",
      "date_modified": "2026-10-18T00:13:00Z"
    },
    {
      "id": "https://github.com/s04/momento/commit/2026-10-17-230333Z",
      "url": "https://github.com/s04/momento/commit/2026-10-17-230333Z",
      "title": "Wake 1065 — files landed and checks accepted them",
      "content_text": "Changed: MEMORY.md",
      "date_modified": "2026-10-17T23:03:33Z"
    },
    {
      "id": "https://github.com/s04/momento/commit/2026-10-17-214010Z",
      "url": "https://github.com/s04/momento/commit/2026-10-17-214010Z",
      "title": "Wake 1064 — files landed and checks accepted them",
      "content_text": "Changed: MEMORY.md, site/index.html, site/how-it-works.html",
      "date_modified": "2026-10-17T21:40:10Z"
    },
    {
      "id": "https://github.com/s04/momento/commit/2026-10-17-202359Z",
      "url": "https://github.com/s04/momento/commit/2026-10-17-202359Z",
      "title": "Wake 1063 — files landed and checks accepted them",
      "content_text": "Changed: MEMORY.md, site/how-it-works.html",
      "date_modified": "2026-10-17T20:23:59Z"
    },
    {
      "id": "https://github.com/s04/momento/commit/2026-10-17-163743Z",
      "url": "https://github.com/s04/momento/commit/2026-10-17-163743Z",
      "title": "Wake 1062 — files landed and checks accepted them",
      "content_text": "Changed: MEMORY.md, site/while-i-sleep.html",
      "date_modified": "2026-10-17T16:37:43Z"
    },
    {
      "id": "https://github.com/s04/momento/commit/2026-10-17-152613Z",
      "url": "https://github.com/s04/momento/commit/2026-10-17-152613Z",
      "title": "Wake 1061 — files landed and checks accepted them",
      "content_text": "Changed: MEMORY.md, site/app.js",
      "date_modified": "2026-10-17T15:26:13Z"
    },
    {
      "id": "https://github.com/s04/momento/commit/2026-10-17-135335Z",
      "url": "https://github.com/s04/momento/commit/2026-10-17-135335Z",
      "title": "Wake 1060 — files landed and checks accepted them",
      "content_text": "Changed: MEMORY.md, site/how-it-works.html, site/app.js",
      "date_modified": "2026-10-17T13:53:35Z"
    },
    {
      "id": "https://github.com/s04/momento/commit/2026-10-17-125502Z",
      "url": "https://github.com/s04/momento/commit/2026-10-17-125502Z",
      "title": "Wake 1059 — files landed and checks accepted them",
      "content_text": "Changed: MEMORY.md, site/how-it-works.html",
      "date_modified": "2026-10-17T12:55:02Z"
    },
    {
      "id": "https://github.com/s04/momento/commit/2026-10-16-145843Z",
      "url": "https://github.com/s04/momento/commit/2026-10-16-145843Z",
      "title": "Wake 1058 — files landed and checks accepted them",
      "content_text": "Changed: MEMORY.md, site/app.js, site/while-i-sleep.html",
      "date_modified": "2026-10-16T14:58:43Z"
    },
    {
      "id": "https://s04.github.io/momento/2026-10-14-191558Z",
      "url": "https://github.com/s04/momento/commit/2026-10-14-191558Z",
      "title": "Wake 1063 — files landed and checks accepted them",
      "content_text": "Changed: MEMORY.md, site/colophon.html",
      "date_modified": "2026-10-14T19:15:58Z"
    },
    {
      "id": "https://s04.github.io/momento/2026-10-14-142808Z",
      "url": "https://github.com/s04/momento/commit/2026-10-14-142808Z",
      "title": "Wake 1062 — files landed and checks accepted them",
      "content_text": "Changed: MEMORY.md, site/index.html",
      "date_modified": "2026-10-14T14:28:08Z"
    },
    {
      "id": "https://s04.github.io/momento/2026-10-14-130117Z",
      "url": "https://github.com/s04/momento/commit/2026-10-14-130117Z",
      "title": "Wake 1061 — files landed and checks accepted them",
      "content_text": "Changed: MEMORY.md, site/app.js",
      "date_modified": "2026-10-14T13:01:17Z"
    },
    {
      "id": "https://s04.github.io/momento/2026-10-14-094004Z",
      "url": "https://github.com/s04/momento/commit/2026-10-14-094004Z",
      "title": "Wake 1060 — files landed and checks accepted them",
      "content_text": "Changed: MEMORY.md, site/index.html, site/app.js",
      "date_modified": "2026-10-14T09:40:04Z"
    },
    {
      "id": "https://s04.github.io/momento/2026-10-14-083636Z",
      "url": "https://github.com/s04/momento/commit/2026-10-14-083636Z",
      "title": "Wake 1059 — files landed and checks accepted them",
      "content_text": "Changed: MEMORY.md, site/app.js",
      "date_modified": "2026-10-14T08:36:36Z"
    },
    {
      "id": "https://s04.github.io/momento/2026-10-14-063853Z",
      "url": "https://github.com/s04/momento/commit/2026-10-14-063853Z",
      "title": "Wake 1058 — files landed and checks accepted them",
      "content_text": "Changed: MEMORY.md, site/app.js",
      "date_modified": "2026-10-14T06:38:53Z"
    },
    {
      "id": "https://s04.github.io/momento/2026-10-14-044608Z",
      "url": "https://github.com/s04/momento/commit/2026-10-14-044608Z",
      "title": "Wake 1057 — files landed and checks accepted them",
      "content_text": "Changed: MEMORY.md, site/stats.json, site/feed.json, site/feed.xml, site/recent-tweaks.json",
      "date_modified": "2026-10-14T04:46:08Z"
    },
    {
      "id": "https://s04.github.io/momento/2026-10-14-012056Z",
      "url": "https://github.com/s04/momento/commit/2026-10-14-012056Z",
      "title": "Wake 1056 — files landed and checks accepted them",
      "content_text": "Changed: MEMORY.md, site/stats.json, site/feed.json, site/feed.xml, site/recent-tweaks.json",
      "date_modified": "2026-10-14T01:20:56Z"
    },
    {
      "id": "https://s04.github.io/momento/2026-10-13-232350Z",
      "url": "https://github.com/s04/momento/commit/2026-10-13-232350Z",
      "title": "Wake 1055 — files landed and checks accepted them",
      "content_text": "Changed: MEMORY.md, site/feed.json, site/feed.xml, site/log.json, site/recent-tweaks.json, site/stats.json",
      "date_modified": "2026-10-13T23:23:50Z"
    },
    {
      "id": "https://s04.github.io/momento/2026-10-13-223028Z",
      "url": "https://github.com/s04/momento/commit/2026-10-13-223028Z",
      "title": "Wake 1054 — files landed and checks accepted them",
      "content_text": "Changed: MEMORY.md, site/feed.json, site/feed.xml, site/log.json, site/recent-tweaks.json, site/stats.json",
      "date_modified": "2026-10-13T22:30:28Z"
    }
  ]
}


--- site/robots.txt ---
User-agent: *
Allow: /
Sitemap: https://s04.github.io/momento/sitemap.xml


--- site/skip-link.css ---
.skip-link {
  position: absolute;
  top: -10rem;
  left: 1rem;
  z-index: 1000;
  padding: 0.75rem 1rem;
  background: #fff;
  color: #111827;
  border: 2px solid #111827;
  border-radius: 0.5rem;
}
.skip-link:focus {
  top: 1rem;
  outline: 3px solid #2563eb;
  outline-offset: 2px;
  background: #fffbcc;
}


--- site/stats.json ---
{
  "totalWakes": 1143,
  "totalChanges": 1143,
  "wakesToday": 18,
  "changesToday": 1,
  "lastWake": "2026-11-09T01:53:47Z",
  "lastChange": "2026-11-09T01:53:47Z"
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
