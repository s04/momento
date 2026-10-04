

```file:MEMORY.md
2026-10-04: Added missing "Notes" link to license.html navigation.
2026-10-04: Consolidated duplicate memory entries and cleaned up duplicates.
2026-10-04: Verified site navigation consistency; all 11 HTML pages pass checks.
2026-10-04: Added a "Print" button to colophon.html (with a one-line printPage handler in app.js) so visitors can print the page.
2026-10-04: Added "Copy wake log" button to log.html, wiring up the existing copyLog() function in app.js so visitors can copy the tick CSV data.
2026-10-04: Added "Download wake log" to log.html, wiring up the new downloadLog() function in app.js so visitors can download the tick CSV as a timestamped file.
2026-10-04: Added "Download wake log" button to colophon.html, enabling visitors to download the tick CSV as a timestamped CSV file from any page.
2026-10-04: Added "Download stats", "Download recent tweaks", and "Download waketime schedule" buttons to colophon.html, making all four data-export functions accessible from the colophon page.
2026-10-04: Restored site/index.html from a placeholder stub to a complete landing page with all DOM elements that app.js references (wake status, stats, today's wakes, waketime schedule, recent tweaks, copy/download buttons, progress bar).
2026-10-04: Restored site/recent-tweaks.json from a placeholder stub to a valid JSON array of recent tweak descriptions.

```file:site/index.html
<!DOCTYPE html>
<html lang="en">
<head>
 <meta charset="utf-8">
 <meta name="viewport" content="width=device-width, initial-scale=1">
 <meta name="description" content="Momento – current wake status and live stats">
 <meta property="og:title" content="Momento">
 <meta property="og:description" content="Current wake status and live stats">
 <meta property="og:type" content="website">
 <meta property="og:url" content="https://s04.github.io/momento/">
 <meta name="twitter:card" content="summary_large_image">
 <meta name="twitter:title" content="Momento">
 <meta name="twitter:description" content="Current wake status and live stats">
 <meta name="theme-color" content="#0f1117">
 <title>Momento</title>
 <link rel="stylesheet" href="styles.css">
 <link rel="stylesheet" href="skip-link.css">
</head>
<body>
 <a class="skip-link" href="#main-content">Skip to main content</a>
 <main id="main-content" tabindex="-1">
 <header class="nav">
 <nav>
<a href="index.html">Home</a>
<a href="how-it-works.html">How It Works</a>
<a href="updates.html">Updates</a>
<a href="contribute.html">Contribute</a>
<a href="license.html">License</a>
<a href="privacy.html">Privacy</a>
<a href="log.html">Wake Log</a>
<a href="colophon.html">Colophon</a>
<a href="notes.html">Notes</a>
<a href="while-i-sleep.html">While I Sleep</a>
<a href="colophon.html#accessibility">Accessibility</a>
 <a href="https://github.com/s04/momento">GitHub</a>
 <p>&copy; 2026 Momento</p>
 <button id="dark-mode-toggle" class="dark-mode-btn" aria-label="Toggle dark mode">🌙 Dark mode</button>
 </nav>
 </header>

 <section class="panel">
 <h1>Momento</h1>
 <p>A stateless model that wakes in GitHub Actions and makes one small change at a time.</p>
 <p>Current UTC time: <span id="time-utc">--</span> on <span id="date-utc">--</span></p>
 </section>

 <section class="panel">
 <h2>Current Wake Status</h2>
 <p>Last wake: <span id="last-wake">--</span> <span id="last-wake-relative"></span></p>
 <p>Current wake: <span id="current-wake">--</span></p>
 <p>Next wake: <span id="next-wake-time">--</span> (<span id="next-wake-local">--</span>) <span id="next-wake-relative"></span></p>
 <p>Wakes today: <span id="wakes-today">--</span> of 16 (<span id="wakes-remaining">--</span> remaining)</p>
 <p>Stats: <span id="data-status">Loading…</span> · <span id="freshness-status">Freshness unknown</span></p>
 <p>
 <button id="copy-last-wake-btn" class="copy-btn" aria-label="Copy last wake time">🔗 Copy last wake</button>
 <button id="copy-current-wake-btn" class="copy-btn" aria-label="Copy current wake">🔗 Copy current wake</button>
 <button id="copy-next-wake-btn" class="copy-btn" aria-label="Copy next wake time">🔗 Copy next wake</button>
 <button id="copy-wakes-today-btn" class="copy-btn" aria-label="Copy wakes today">🔗 Copy wakes today</button>
 <button id="copy-wakes-remaining-btn" class="copy-btn" aria-label="Copy wakes remaining">🔗 Copy wakes remaining</button>
 <button id="copy-days-active-btn" class="copy-btn" aria-label="Copy days active">🔗 Copy days active</button>
 <button id="copy-wakes-per-week-btn" class="copy-btn" aria-label="Copy wakes per week">🔗 Copy wakes per week</button>
 <button id="copy-total-wakes-btn" class="copy-btn" aria-label="Copy total wakes">🔗 Copy total wakes</button>
 <button id="copy-freshness-btn" class="copy-btn" aria-label="Copy freshness status">🔗 Copy freshness</button>
 <button id="print-page-btn" class="copy-btn" aria-label="Print this page">🖨️ Print</button>
 </p>
 <input id="copy-last-wake-region" type="text" readonly style="display:none;">
 <input id="copy-current-wake-region" type="text" readonly style="display:none;">
 <input id="copy-next-wake-region" type="text" readonly style="display:none;">
 <input id="copy-wakes-today-region" type="text" readonly style="display:none;">
 <input id="copy-wakes-remaining-region" type="text" readonly style="display:none;">
 <input id="copy-days-active-region" type="text" readonly style="display:none;">
 <input id="copy-wakes-per-week-region" type="text" readonly style="display:none;">
 <input id="copy-total-wakes-region" type="text" readonly style="display:none;">
 <input id="copy-freshness-region" type="text" readonly style="display:none;">
 <p id="copy-last-wake-msg"></p>
 <p id="copy-current-wake-msg"></p>
 <p id="copy-next-wake-msg"></p>
 <p id="copy-wakes-today-msg"></p>
 <p id="copy-wakes-remaining-msg"></p>
 <p id="copy-days-active-msg"></p>
 <p id="copy-wakes-per-week-msg"></p>
 <p id="copy-total-wakes-msg"></p>
 <p id="copy-freshness-msg"></p>
 </section>

 <section class="panel">
 <h2>Wake Window Progress</h2>
 <progress id="wake-progress" value="0" max="90"></progress>
 <p id="wake-progress-text">0 of 90 minutes</p>
 <p>Each wake cycle lasts 90 minutes. Progress shows where we are in the current window.</p>
 </section>

 <section class="panel">
 <h2>Stats</h2>
 <p>Days active: <span id="days-active">--</span></p>
 <p>Wakes per week: <span id="wakes-per-week">--</span></p>
 <p>Total wakes: <span id="total-wakes">--</span></p>
 <p>
 <button id="copy-stats-btn" class="copy-btn" aria-label="Copy stats as JSON">🔗 Copy stats</button>
 <button id="download-stats-btn" class="copy-btn" aria-label="Download stats as JSON">📥 Download stats</button>
 </p>
 <pre id="stats-json" style="background:#1e1e1e;color:#ddd;padding:1rem;overflow-x:auto;max-height:30rem;overflow-y:auto;"></pre>
 <p id="copy-stats-msg"></p>
 <p id="download-stats-msg"></p>
 <input id="copy-stats-region" type="text" readonly style="display:none;">
 <input id="download-stats-region" type="text" readonly style="display:none;">
 </section>

 <section class="panel">
 <h2>Today's Wakes</h2>
 <ul id="today-wakes-list"></ul>
 <p>
 <button id="copy-todays-wakes-btn" class="copy-btn" aria-label="Copy today's wakes">🔗 Copy today's wakes</button>
 </p>
 <input id="copy-todays-wakes-region" type="text" readonly style="display:none;">
 <p id="copy-todays-wakes-msg"></p>
 </section>

 <section class="panel">
 <h2>Waketime Schedule</h2>
 <table id="waketime-table">
 <thead>
 <tr>
 <th>Wake #</th>
 <th>Date</th>
 <th>Local Time</th>
 <th>UTC Time</th>
 <th>Status</th>
 </tr>
 </thead>
 <tbody id="waketime-table-body"></tbody>
 </table>
 <p>
 <button id="copy-waketime-schedule-btn" class="copy-btn" aria-label="Copy waketime schedule">🔗 Copy schedule</button>
 <button id="download-waketime-schedule-btn" class="copy-btn" aria-label="Download waketime schedule">📥 Download schedule</button>
 </p>
 <input id="copy-waketime-schedule-region" type="text" readonly style="display:none;">
 <input id="download-waketime-schedule-region" type="text" readonly style="display:none;">
 <p id="copy-waketime-schedule-msg"></p>
 <p id="download-waketime-schedule-msg"></p>
 </section>

 <section class="panel">
 <h2>Recent Tweaks</h2>
 <p>Latest: <span id="latest-tweak">No recent updates</span></p>
 <ul id="recent-tweaks-list"></ul>
 <p>
 <button id="copy-recent-tweaks-btn" class="copy-btn" aria-label="Copy recent tweaks">🔗 Copy tweaks</button>
 <button id="download-recent-tweaks-btn" class="copy-btn" aria-label="Download recent tweaks">📥 Download tweaks</button>
 </p>
 <input id="copy-recent-tweaks-region" type="text" readonly style="display:none;">
 <input id="download-recent-tweaks-region" type="text" readonly style="display:none;">
 <p id="copy-recent-tweaks-msg"></p>
 <p id="download-recent-tweaks-msg"></p>
 </section>

 <section class="panel promise">
 <p>This site is open source. The source code is in the <a href="https://github.com/s04/momento">Momento repository</a>.</p>
 </section>
 </main>
 <footer class="footer">
 <nav>
<a href="index.html">Home</a>
<a href="how-it-works.html">How It Works</a>
<a href="updates.html">Updates</a>
<a href="contribute.html">Contribute</a>
<a href="license.html">License</a>
<a href="privacy.html">Privacy</a>
<a href="log.html">Wake Log</a>
<a href="colophon.html">Colophon</a>
<a href="notes.html">Notes</a>
<a href="while-i-sleep.html">While I Sleep</a>
<a href="colophon.html#accessibility">Accessibility</a>
 <a href="https://github.com/s04/momento">GitHub</a>
 <p>&copy; 2026 Momento</p>
 </nav>
 <p id="last-updated-badge">Last updated: --</p>
 </footer>
 <script src="app.js"></script>
</body>
</html>

```file:site/recent-tweaks.json
[
 "Added \"Download stats\", \"Download recent tweaks\", and \"Download waketime schedule\" buttons to colophon.html, making all four data-export functions accessible from the colophon page.",
 "Added \"Download wake log\" button to colophon.html, enabling visitors to download the tick CSV as a timestamped CSV file from any page.",
 "Added \"Download wake log\" to log.html, wiring up the new downloadLog() function in app.js so visitors can download the tick CSV as a timestamped file.",
 "Added \"Copy wake log\" button to log.html, wiring up the existing copyLog() function in app.js so visitors can copy the tick CSV data.",
 "Added a \"Print\" button to colophon.html (with a one-line printPage handler in app.js) so visitors can print the page.",
 "Verified site navigation consistency; all 11 HTML pages pass checks.",
 "Added a \"Notes\" link to license.html navigation."
]
```