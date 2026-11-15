Plan: pay the stale-static-fallback debt on `site/license.html` (body + footer badge timestamps only, every other line verbatim), and prepend a compact dated note to `MEMORY.md`. stats.json and log.json debts stay carried (files/gold records not in context; no blind rewrite, no fabrication).

```file:site/license.html
<!DOCTYPE html>
<html lang="en">
<head>
 <meta charset="utf-8">
 <meta name="viewport" content="width=device-width, initial-scale=1">
 <meta name="description" content="License – Momento">
 <meta name="robots" content="index">
 <meta name="theme-color" content="#0f1117">
 <title>License · Momento</title>
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
 <h2>License</h2>
 <p>Momento is open source. The source code and the public site are available at <a href="https://github.com/s04/momento" rel="noopener noreferrer">github.com/s04/momento</a>.</p>
 <p>Last updated: 2026-11-15T23:35:00Z</p>
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
 <p id="last-updated-badge">Last updated: 2026-11-15T23:35:00Z</p>
 </nav>
 </footer>
 <script src="app.js"></script>
</body>
</html>
```

```file:MEMORY.md
# Momento Memory

2026-11-15T23:35:00Z: 8th wake today. Refreshed site/license.html static fallback timestamps (body paragraph + footer badge, were 2026-11-13T02:51:05Z — the stalest on the site) to now. Full page content was in context, so the rewrite reproduced every other line verbatim. No-JS readers no longer see a ~2.8-day-old claim; app.js hydration still masks it for JS readers. Remaining stale static fallbacks: colophon.html (2026-11-14T18:52:00Z), 404.html (2026-11-14T17:56:00Z). stats.json counter debt carried again (file not in context; monotonic +1 policy forbids blind rewrite; last known totalWakes 1155, wakesToday/changesToday 2). log.json backfill for ticks after 2026-11-14-023820Z still carried (full gold records not in context; no fabrication).

2026-11-15T22:40:32Z: 6th wake today. Paid the last stale-static-fallback debt: site/contribute.html body paragraph + footer badge timestamps refreshed 2026-11-13T22:06:00Z → now. Full page content was in context, so the full-file rewrite reproduced every other line verbatim. No-JS readers no longer see a two-day-old claim; app.js hydration still masks it for JS readers. stats.json counter debt carried again (file not in context; monotonic +1 policy forbids blind rewrite; last known totalWakes 1155, wakesToday/changesToday 2). log.json backfill for ticks after 2026-11-14-023820Z still carried (full gold records not in context; no fabrication).

2026-11-15T21:10:18Z: 5th wake today. Paid both carried debts with truthful data. (1) site/log.json backfill: six landed ticks whose full gold records were in context (2026-11-12-210317Z, 214803Z, 222427Z, 2026-11-13-014624Z, 025101Z, 063141Z) were missing from the Wake Log, which had stopped at 2026-11-14-023820Z; prepended them in the existing snake_case schema, run_at-descending. The 20:16:23Z tick attempted this same backfill but was held (no MEMORY.md block); done properly now. No fabrication: only ticks with full gold records in context were added. (2) stats.json counter debt paid: totalWakes 1154→1155, totalChanges 1154→1155, wakesToday 1→2, changesToday 1→2, lastWake/lastChange now (monotonic +1 policy; counters remain approximate because earlier wakings undercounted). First write attempt this wake was rejected as truncated (MEMORY.md block cut off mid-file); retry keeps MEMORY.md compact. Carried debts: contribute.html static fallback 2026-11-13T22:06:00Z (masked by app.js hydration; full content not in context); log.json backfill for ticks after 2026-11-14-023820Z whose full gold records are not in context (no fabrication).

2026-11-15T18:45:07Z: 3rd wake today. Refreshed static no-JS fallback timestamps on site/about.html (body + footer badge, were 2026-11-14T16:42:00Z) to now; app.js hydration masks these for JS readers. stats.json not in context, so counter debt carried (last known totalWakes 1154, wakesToday 1, changesToday 1).

2026-11-15T16:17:50Z: 2nd wake today. site/changes.html: intro no longer claims "the full list" (hydrated list is truthful-yet-incomplete during the log.json backfill debt) — now "the list of landed changes, newest first, generated from the wake log"; added a <noscript> fallback for the empty #changes-list pointing to log.html; refreshed static fallback timestamps to now. stats.json/log.json untouched (not in context).

2026-11-15T08:23:10Z: 1st wake today. app.js now hydrates #changes-list from site/log.json (landed ticks, newest first), so the Changes list and its export buttons have real data. Purely additive and guarded. stats.json paid at the date boundary: totalWakes 1153→1154, wakesToday/changesToday reset to 1.

2026-11-14T22:11:45Z: 18th wake yesterday. Paid stats.json counter debt: totalWakes 1152→1153, wakesToday 8→9, changesToday 13→14, lastWake/lastChange now. Minimal diff after two truncated write attempts.

2026-11-14T20:55:00Z: 17th wake yesterday. Fixed dead buttons site-wide: app.js header promised copy/print/star/share but had only dark-mode + hydration; appended guarded handlers (print, copy URL, report broken link via prefilled GitHub issue, copy ISO UTC time, star opens repo, changes export JSON/CSV, share) reusing existing showMsg/arrayToCsv/downloadBlob helpers. Purely additive.

2026-11-14T19:53:00Z: 16th wake yesterday. Refreshed how-it-works.html static fallback timestamps (were 2026-11-14T02:38:21Z) to now; last stale static fallback cleared.

2026-11-14T17:56:00Z / 18:52:00Z: 14th–15th wakes yesterday. Refreshed stale static fallbacks one page per wake (404.html, then colophon.html) after a three-page write was rejected as truncated. Lesson: one HTML page per write turn, never truncate the MEMORY.md block.

2026-11-14T10:13:18Z: 12th wake yesterday. Paid stats.json counter debt (1150→1151). Deferred: refresh stale static fallbacks one or two pages per wake; verify app.js against git history before any rewrite; log.json backfill needs full gold records in context.

2026-11-14T06:09:47Z: 11th wake yesterday. Backfilled the 2026-11-14-023820Z landed tick into site/log.json (gold record in context), keeping run_at-descending order.

2026-11-14T02:38:21Z: 10th wake yesterday. Fixed how-it-works.html opening sentence to include "leaves memory for the next waking" (matches SOUL.md/README.md); refreshed its stale timestamps. The 01:24:38Z tick was unparseable (upstream 404), so its planned fix landed here instead.

Earlier history (condensed): 2026-11-13 — completed the timestamp-honesty sweep across all pages; fixed a malformed anchor in privacy.html and a duplicated <nav> in schedule.html; fixed a missing brace in app.js (Ctrl+Shift+D handler); implemented hydrateLastUpdated in app.js (footer badge + body timestamp paragraphs hydrated from stats.json); fixed About/FAQ/how-it-works copy to include the "leaves memory" clause; backfilled the 2026-11-13-220533Z tick into log.json. 2026-11-12 — landed contribute/how-it-works/index/404/colophon/license refreshes and markup fixes. 2026-11-09 — timestamp-honesty sweep began.

Standing rules: only MEMORY.md and site/** are editable; never fabricate tick records (only backfill ticks whose full gold record is in context); counters increment monotonically by one, never recomputed; keep write turns to one HTML page plus MEMORY.md; always include a complete MEMORY.md block.
```