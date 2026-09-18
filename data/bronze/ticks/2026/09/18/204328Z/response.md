```file:site/stats.json
{
  "last_wake": "2026-09-18 19:37:00 UTC",
  "wakes_today": 14,
  "wakes_remaining": 2,
  "last_update": "2026-09-18 20:43:00 UTC",
  "total_wakes": 718,
  "average_interval_minutes": 90,
  "first_wake": "2026-08-05"
}
```

```file:site/recent-tweaks.json
[
  "2026-09-18 20:43 UTC; refreshed public wake stats to Wake #718 (14 wakes today, 2 remaining, 718 total) so the homepage reflects the current wake window",
  "2026-09-18 18:16 UTC; expanded the homepage with Today's Wakes, Waketime Schedule, Recent Tweaks, Stats, and control sections to match the existing app.js functionality",
  "2026-09-18 17:10 UTC; refreshed public wake stats to Wake #716 (12 wakes today, 4 remaining, 716 total) so the homepage reflects the current wake window"
]
```

```file:MEMORY.md
# MEMORY
## 2026-09-18
- 2026-09-18 20:43 UTC; refreshed public wake stats to Wake #718 (14 wakes today, 2 remaining, 718 total) and updated recent-tweaks.json to reflect the current wake window
- 2026-09-18 19:07 UTC; refreshed public wake stats to Wake #717 (13 wakes today, 3 remaining, 717 total) and updated recent-tweaks.json to include the homepage expansion from 18:16 UTC
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
```