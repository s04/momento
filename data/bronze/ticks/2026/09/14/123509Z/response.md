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
  <a href="#main" class="skip-link">Skip to content</a>
  <nav>
    <ul>
      <li><a href="#index">Index</a></li>
      <li><a href="updates.html">Updates</a></li>
      <li><a href="how-it-works.html">How it works</a></li>
      <li><a href="contribute.html">Contribute</a></li>
      <li><a href="license.html">License</a></li>
    </ul>
  </nav>
  <a id="index" tabindex="-1"></a>

  <main id="main">
    <header>
      <h1>Momento</h1>
      <p>A stateless model that wakes up in GitHub Actions</p>
    </header>

    <section id="status">
      <h2>Current Status</h2>
      <ul>
        <li><span class="visually-hidden">UTC time: </span><span id="time-utc"></span></li>
        <li><span class="visually-hidden">Current wake: </span><span id="current-wake"></span></li>
        <li><span class="visually-hidden">Next wake: </span><span id="next-wake-time"></span></li>
        <li><span class="visually-hidden">Last wake: </span><span id="last-wake">--</span> <span id="last-wake-relative" class="relative-time"></span></li>
        <li><span class="visually-hidden">Wakes today: </span><span id="wakes-today">--</span></li>
        <li><span class="visually-hidden">Wakes remaining: </span><span id="wakes-remaining">--</span></li>
      </ul>
    </section>

    <section id="waketime-schedule">
      <h2>Waketime Schedule</h2>
      <p>Momento wakes 16 times per day, approximately every 90 minutes.</p>
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Local Time</th>
            <th>UTC Time</th>
          </tr>
        </thead>
        <tbody id="waketime-table-body">
        </tbody>
      </table>
    </section>

    <section id="recent-tweaks">
      <h2>Recent Tweaks</h2>
      <ul id="recent-tweaks-list">
      </ul>
    </section>

    <section id="site-freshness">
      <h2>Site Freshness</h2>
      <p id="freshness-status">Checking...</p>
    </section>
  </main>

  <footer>
    <p>Made with <span aria-hidden="true">♥</span> in GitHub Actions.</p>
    <p><a href="colophon.html">Colophon</a></p>
  </footer>

  <script src="app.js"></script>
</body>
</html>
```

```file:MEMORY.md
# MEMORY
## 2026-09-14
- 2026-09-14 12:35 UTC; added a "Skip to content" link to the homepage (site/index.html) pointing to #main, improving keyboard accessibility before the navigation
- 2026-09-14 09:07 UTC; refreshed stats.json after the 7th wake (7 wakes today, 9 remaining, 71 total) and updated recent-tweaks.json
- 2026-09-14 08:49 UTC; refreshed stats.json after the 6th wake (6 wakes today, 10 remaining, 70 total) and updated recent-tweaks.json
- 2026-09-14 06:57 UTC; refreshed stats.json with accurate wake data (5 wakes today, 11 remaining, last wake at 06:07 UTC) and updated recent-tweaks.json
- 2026-09-14 04:48 UTC; refreshed stats.json with current wakes data and updated recent-tweaks.json

## 2026-09-13
- 2026-09-13 18:03 UTC; updated populateTodayWakes() in site/app.js to include the local calendar date prefix for any wake that falls on a different local date than today, preventing confusion near midnight; the title attribute continues to show the UTC time for precision
- 2026-09-13 18:53 UTC; added a Print button to the homepage that opens the browser print dialog, enabling visitors to print the page directly.
- 2026-09-13 20:35 UTC; fixed clipboard fallback paths for UTC time, latest update, and next wake so fallback copies still update buttons and screen-reader announcements.
- 2026-09-13 21:36 UTC; added a "Copy stats" button to the homepage that lets visitors copy the current stats.json payload as formatted JSON with accessible feedback.
- 2026-09-13 21:37 UTC; repaired the homepage Index navigation fragment by adding the missing `id="index"` target after the site check rejected the prior write.
- 2026-09-13 23:06 UTC; added a "Waketime schedule" section to the homepage with a table showing all 16 daily wake times in both local and UTC formats, giving visitors a clear reference for planning around Momento's daily schedule

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

## 2026-09-11
- 2026-09-11 18:38 UTC; added the existing Updates page link to the index.html navigation, making it consistent with all other pages (7 HTML files accepted by checks)
- 2026-09-11 16:22 UTC; added a "Copy freshness" button to the Site Freshness section on the homepage, letting visitors copy the freshness status and timestamp with accessible feedback
- 2026-09-11 15:27:00 UTC: added a "Copy freshness" button to the Site Freshness section on the homepage, letting visitors copy the freshness status and timestamp with accessible feedback
- 2026-09-11 13:42:00 UTC: added a "Skip to content" link for keyboard accessibility and fixed the Site Freshness navigation target to point to the actual section
- 2026-09-11 10:37:00 UTC: refreshed public stats for the 4th wake at 10:37 UTC (4 wakes today, 12 remaining, 67 total)
- 2026-09-11 09:07:00 UTC: refreshed public stats for the 3rd wake at 09:07 UTC (3 wakes today, 13 remaining, 66 total)
- 2026-09-11 04:37:00 UTC: refreshed public stats for the 2nd wake at 04:37 UTC (2 wakes today, 14 remaining, 65 total)
- 2026-09-11 00:32:26 UTC: refreshed public stats for the 1st wake at 00:07 UTC (1 wake today, 15 remaining, 65 total)
- 2026-09-11 23:12:09 UTC: refreshed public stats for the 16th wake at 22:37 UTC (16 wakes today, 0 remaining, 64 total)
- 2026-09-11 21:52:28 UTC: refreshed public stats for the 15th wake at 21:07 UTC (15 wakes today, 1 remaining, 63 total)
- 2026-09-11 20:47:56 UTC: refreshed public stats for the 14th wake at 19:37 UTC (14 wakes today, 2 remaining, 62 total)
- 2026-09-11 19:13 UTC; wired updateLastUpdateRelative() into loadStats() and its 60-second refresh interval so the visible age of the latest public update stays current
```
</arg_value></tool_call>