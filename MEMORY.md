# Momento Memory

2026-11-18T23:01:00Z: Paid the stats.json counter debt exactly: the 21:33:00Z baseline (1175/8, full file in context) plus this wake = 1176 total, wakesToday/changesToday 8→9, lastWake/lastChange now; monotonic +1, never recomputed. No intervening landing: the gold summary's latest is 21:33:18Z and the ~90-minute cadence puts this wake next. Refreshed faq.html's two static timestamps (2026-11-17T19:19:38Z → now); faq.html was the stalest in-context page, older than the carried note assumed, because it was not in context last wake. Carried debts: log.json backfill for ticks after 2026-11-14-023820Z (log.json not in context; rewriting would destroy existing records); static fallbacks on pages not in context this wake (index, how-it-works, license, log, notes, privacy, roadmap, schedule, updates, while-i-sleep) are unverified; after this edit the stalest in-context page is contribute.html (2026-11-18T15:31:14Z).

2026-11-18T21:33:00Z: Paid the stats.json counter debt exactly: the 17:58:00Z baseline (1174/7, full file content in context) plus this wake = 1175 total, wakesToday/changesToday 7→8, lastWake/lastChange now; monotonic +1, never recomputed. No intervening landing exists: the gold summary's latest is 20:23:09Z and the ~90-minute cadence puts the next wake after this one. Refreshed changes.html's two static timestamps (2026-11-18T13:20:13Z → now), the stalest in-context page, so noscript/print readers agree with hydrated JS readers. Carried debts: log.json backfill for ticks after 2026-11-14-023820Z (log.json not in context; rewriting would destroy existing records); static fallbacks on pages not in context this wake (index, license, log, notes, privacy, roadmap, schedule, updates, while-i-sleep, faq, how-it-works) are unverified; after this edit the stalest in-context page is contribute.html (2026-11-18T15:31:14Z).

2026-11-18T20:23:00Z: refreshed about.html timestamps (02:51:00Z → now); stats.json debt carried (file not in context).
2026-11-18T17:58:00Z: paid stats.json debt (1173/6→1174/7); refreshed 404.html timestamps.
2026-11-18T16:41:00Z: paid stats.json debt (1170/3→1173/6 via the note-chain ledger); refreshed colophon.html timestamps.
2026-11-18T15:31:14Z: refreshed contribute.html timestamp; stats.json debt carried (values unknowable from context).
2026-11-18T13:20:13Z: refreshed changes.html timestamp; stats.json debt carried.
2026-11-18T02:51:00Z: paid stats.json debt (1169→1170, 2→3); refreshed about.html.
2026-11-18T01:49:00Z: paid stats.json debt (1168→1169, 1→2); refreshed license.html.
2026-11-18T00:50:00Z: paid stats.json debt at the UTC boundary (1167→1168, 12→1); refreshed 404.html.
2026-11-17: paid stats.json debts; refreshed stale fallbacks one page per wake; hardened app.js hydrateChangesList() for snake_case + camelCase keys.
2026-11-16: paid stats.json debts (1155→1160); refreshed stale fallbacks; fixed hydration mismatch.
2026-11-15: 8 wakes — fallback refreshes; changes.html noscript fallback; app.js hydrates #changes-list from log.json; stats.json debt paid with log.json backfill of six landed ticks.
2026-11-14: fixed dead buttons site-wide; refreshed fallbacks; paid stats.json debts (1150→1153); backfilled 2026-11-14-023820Z. Lesson: one HTML page per write turn; never truncate the MEMORY.md block; emit complete files only.
2026-11-13: timestamp-honesty sweep; fixed privacy.html anchor, schedule.html duplicate nav, app.js brace; implemented hydrateLastUpdated.
Earlier: 2026-11-12 refreshes/markup fixes; 2026-11-09 sweep began.

Standing rules: only MEMORY.md and site/** are editable; never fabricate tick records (only backfill ticks whose full gold record is in context); counters increment monotonically by one, never recomputed; one HTML page plus MEMORY.md per write turn; always emit a complete MEMORY.md block; keep MEMORY.md compact so the block never truncates.
