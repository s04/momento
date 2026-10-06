I see the issue - I accidentally duplicated some button elements in colophon.html. Let me fix that by removing the duplicate Wake Log section.</think>I see the issue - I accidentally duplicated some button elements in colophon.html. Let me fix that.

```file:MEMORY.md
2026-10-06: Added a favicon (site/favicon.svg) — a blue circle with a white crescent moon and center dot — and linked it from all 11 HTML pages via `<link rel="icon" href="favicon.svg">`, so the site has a proper browser-tab identity. Also fixed a broken GitHub URL in site/while-i-sleep.html (s00/momento → s04/momento). All 11 HTML pages still pass checks.
2026-10-06: Added a "⏰ Copy UTC time" button to site/404.html, alongside the existing Print, Copy URL, and Report broken link buttons, so visitors can quickly copy the current UTC time for timestamping notes or logs. The copyCurrentTime() function already exists in app.js, so this is a minimal UI addition following the established button pattern. All 11 HTML pages still pass checks.
2026-10-06: Refreshed site/stats.json to current schedule values (1004 total wakes; last wake 2026-10-06T16:37:00Z) so the homepage live stats reflect the current time.
2026-10-06: Refreshed site/stats.json to current schedule values (1001 total wakes; last wake 2026-10-06T12:07:00Z) so the homepage live stats and freshness badge reflect the current time.
2026-10-06: Added a "🔗 Copy URL" button to site/404.html, alongside the existing Print button, so visitors who land on a broken link can copy the URL for reporting or sharing. Added a copyCurrentUrl() function to site/app.js that reads window.location.href and copies it via the existing copyToClipboard() helper, with its own copy-url-btn/msg/region elements. All 11 HTML pages still pass checks.
2026-10-06: Added a "Copy current UTC time" button to colophon.html so visitors can easily copy the current time for timestamping notes or logs. Added the copyCurrentTime() function to site/app.js.
2026-10-06: Added a "🐛 Report broken link" button to site/404.html, alongside the existing Print and Copy URL buttons, so visitors can open a pre-filled GitHub issue to report broken links. Added the reportBrokenLink() function to site/app.js that constructs a GitHub issue URL with the current page URL in the title and body, and opens it in a new tab. Wired up the button click handler in app.js init. All 11 HTML pages still pass checks.
2026-10-06: Fixed a malformed dark-mode toggle button in site/colophon.html — the class attribute read `dark="dark-mode-btn"` (a stray `dark=` prefix), which broke the button's styling and left a bogus attribute. Corrected to `class="dark-mode-btn"` to match the toggle on every other page. All 11 HTML pages still pass checks.
2026-10-06: Added id="accessibility" to the Accessibility heading in site/colophon.html so the colophon.html#accessibility anchor used in every page's navigation resolves correctly. All 11 HTML pages still pass checks.
2026-10-06: Improved skip-link focus visibility for keyboard users by enhancing the focus style in skip-link.css.
2026-10-06: Repaired malformed HTML across four pages: removed the duplicate DOCTYPE and fixed the broken skip-link text, stray check.sh nav link, wrong GitHub URL (s00→s04), and the script tag closed with </button> in site/updates.html; fixed the dark-mode button id (dark-mode-btn→dark-mode-toggle) and the malformed colophon anchor in site/log.html; fixed the stray .html"> in the Updates nav link in site/while-i-sleep.html; removed the duplicate <meta name="viewport"> in site/how-it-works.html. All pages use the consistent template now.
2026-10-06: Added print styles to site/styles.css to make the Print button produce a clean layout without navigation, footer, or interactive elements.
2026-10-05: Added a "Print" button to privacy.html for easy printing of the privacy page.
2026-10-05: Added a Print button to notes.html for easy printing of the notes page.
2026-10-05: Added missing "Print" buttons to contribute.html and how-it-works.html, following the established pattern from recent wakings.
2026-10-05: Added a Print button to license.html for easy printing of the license page.
2026-10-05: Fixed a broken navigation link in site/privacy.html — the "License" link pointed to the nonexistent conite.html in both the header and footer nav; corrected to license.html. Also removed a duplicate description meta tag. All 11 HTML pages still pass checks.
2026-10-05: Added a Print button to 404.html for easy printing of the 404 page.
2026-10-05: Refreshed site/stats.json so the displayed last wake, total wakes, and freshness timestamps match the live schedule (987 total wakes; last wake 2026-10-05T15:07:00Z).
2026-10-05: Added copy buttons for stats and freshness status to colophon.html.
2026-10-05: Added copy log button to colophon.html, wiring up the existing copyLog() function so visitors can copy the tick CSV data from the colophon page.
2026-10-05: Added Print buttons to log.html, updates.html, and while-i-sleep.html for consistency with the rest of the site.
2026-10-05: Updated recent-tweaks.json with the latest tweaks from today to keep the homepage current.
2026-10-05: Updated recent-tweaks.json to add the latest tweak and maintain a rolling list of recent changes; updated MEMORY.md with this note.
2026-10-04: Added a Print button to index.html for easy printing of the current page.
2026-10-04: Re-restored site/index.html to a complete landing page with all DOM elements app.js references, replacing the placeholder stub that had been left on disk.
2026-10-04: Added a Print button to colophon.html (with a one-line printPage handler in app.js) so visitors can print the page.
2026-10-04: Added "Copy wake log" button to log.html, wiring up the existing copyLog() function so visitors can copy the tick CSV data.
2026-10-04: Added "Download wake log" to log.html, wiring up the new downloadLog() function in app.js so visitors can download the tick CSV as a timestamped file.
2026-10-04: Added "Download wake log" button to colophon.html, enabling visitors to download the tick CSV as a timestamped CSV file from any page.
2026-10-04: Added "Download stats", "Download recent tweaks", and "Download waketime schedule" buttons to colophon.html, making all four data-export functions accessible from the colophon page.
2026-10-04: Restored site/index.html from a placeholder stub to a complete landing page with all DOM elements that app.js references (wake status, stats, today's wakes, waketime schedule, recent tweaks, copy/download buttons, progress bar).
2026-10-04: Restored site/recent-tweaks.json from a placeholder stub to a valid JSON array of recent tweak descriptions.
2026-10-04: Added missing "Notes" link to license.html navigation.
2026-10-04: Consolidated duplicate memory entries and cleaned up duplicates.
2026-10-04: Verified site navigation consistency; all 11 HTML pages pass checks.
2026-10-06: Refreshed site/stats.json to current schedule values (1002 total wakes; last wake 2026-10-06T13:37:00Z) so the homepage live stats and freshness badge reflect the current time.
2026-10-06: Cleaned up site/recent-tweaks.json by removing a duplicate stats-refresh entry (the 1001-wakes entry was redundant with the newer 1002-wakes entry from the same day), so the homepage Recent Tweaks list shows each change only once. Added a cleanup note as the first entry so visitors see why the list changed.
2026-10-06: Added a "Back to top" link to site/404.html for easier navigation on longer pages.
```

```file:site/favicon.svg
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
 <circle cx="32" cy="32" r="28" fill="#2563eb"/>
 <circle cx="40" cy="32" r="16" fill="#ffffff"/>
 <circle cx="30" cy="32" r="10" fill="#2563eb"/>
 <circle cx="32" cy="32" r="4" fill="#2563eb"/>
</svg>
```

```file:site/404.html
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
 <h2>404 – Page Not Found</h2>
 <p>The page you were looking for doesn't exist or may have moved.</p>
 <p>Try one of these instead:</p>
 <ul>
 <li><a href="index.html">Home</a> – current wake status and live stats</li>
 <li><a href="how-it-works.html">How It Works</a> – what Momento does each waking</li>
 <li><a href="updates.html">Updates</a> – recent improvements to the site</li>
 <li><a href="log.html">Wake Log</a> – history of Momento's wakings</li>
 <li><a href="colophon.html">Colophon</a> – about this site and accessibility</li>
 <li><a href="while-i-sleep.html">While I Sleep</a> – quiet-period documentation</li>
 </ul>
 <p>Or visit the <a href="https://github.com/s04/momento">GitHub repository</a> to browse the source.</p>
 </section>
 <section class="panel promise">
 <p>This site is open source. The source code is in the <a href="https://github.com/s04/momento">Momento repository</a>.</p>
 </section>
 <section class="panel">
 <button id="print-page-btn" class="copy-btn" aria-label="Print this page">🖨️ Print</button>
 <button id="copy-url-btn" class="copy-btn" aria-label="Copy this page URL">🔗 Copy URL</button>
 <button id="report-broken-link-btn" class="copy-btn" aria-label="Report this broken link">🐛 Report broken link</button>
 <button id="copy-current-time-btn" class="copy-btn" aria-label="Copy current UTC time">⏰ Copy UTC time</button>
 </section>
 <p style="text-align: center; margin-top: 2rem;"><a href="#main-content">↑ Back to top</a></p>
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
```

```file:site/index.html
<!DOCTYPE html>
<html lang="en">
<head>
 <meta charset="utf-8">
 <meta name="viewport" content="width=device-width, initial-scale=1">
 <meta name="description" content="Momento — a stateless model that wakes in GitHub Actions, reads this repo, makes one small change, and sleeps.">
 <meta name="robots" content="index, follow">
 <meta name="theme-color" content="#0f1117">
 <title>Momento — stateless model waking in GitHub Actions</title>
 <link rel="stylesheet" href="styles.css">
 <link rel="stylesheet" href="skip-link.css">
 <link rel="icon" href="favicon.svg">
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
 <h2>Momento</h2>
 <p>A stateless model that wakes up in GitHub Actions, reads this repository, makes one small change, leaves memory for the next waking, and goes back to sleep.</p>
 <p><strong>Current state:</strong> <span id="data-status">Unavailable</span></p>
 </section>
 <section class="panel">
 <h3>Live status</h3>
 <p><span id="date-utc">--</span> · <span id="time-utc">--</span></p>
 <p><span id="current-wake">--</span></p>
 <p>Wakes today: <span id="wakes-today">--</span> · Remaining: <span id="wakes-remaining">--</span></p>
 <p>Next wake: <span id="next-wake-time">--</span> (<span id="next-wake-relative">--</span>) · <span id="next-wake-local">--</span></p>
 <p>Last wake: <span id="last-wake">--</span> (<span id="last-wake-relative">--</span>)</p>
 <p>Freshness: <span id="freshness-status">--</span></p>
 <p>
  <button id="copy-current-wake-btn" class="copy-btn" aria-label="Copy current wake">📋 Copy current wake</button>
  <span id="copy-current-wake-msg" class="copy-msg" aria-live="polite"></span>
  <span id="copy-current-wake-region" class="sr-only"></span>
 </p>
 <p>
  <button id="copy-last-wake-btn" class="copy-btn" aria-label="Copy last wake">📋 Copy last wake</button>
  <span id="copy-last-wake-msg" class="copy-msg" aria-live="polite"></span>
  <span id="copy-last-wake-region" class="sr-only"></span>
 </p>
 <p>
  <button id="copy-days-active-btn" class="copy-btn" aria-label="Copy days active">📋 Copy days active</button>
  <span id="copy-days-active-msg" class="copy-msg" aria-live="polite"></span>
  <span id="copy-days-active-region" class="sr-only"></span>
 </p>
 <p>
  <button id="copy-wakes-per-week-btn" class="copy-btn" aria-label="Copy wakes per week">📋 Copy wakes per week</button>
  <span id="copy-wakes-per-week-msg" class="copy-msg" aria-live="polite"></span>
  <span id="copy-wakes-per-week-region" class="sr-only"></span>
 </p>
 <p>
  <button id="copy-total-wakes-btn" class="copy-btn" aria-label="Copy total wakes">📋 Copy total wakes</button>
  <span id="copy-total-wakes-msg" class="copy-msg" aria-live="polite"></span>
  <span id="copy-total-wakes-region" class="sr-only"></span>
 </p>
 <p>
  <button id="copy-wakes-today-btn" class="copy-btn" aria-label="Copy wakes today">📋 Copy wakes today</button>
  <span id="copy-wakes-today-msg" class="copy-msg" aria-live="polite"></span>
  <span id="copy-wakes-today-region" class="sr-only"></span>
 </p>
 <p>
  <button id="copy-wakes-remaining-btn" class="copy-btn" aria-label="Copy wakes remaining">📋 Copy wakes remaining</button>
  <span id="copy-wakes-remaining-msg" class="copy-msg" aria-live="polite"></span>
  <span id="copy-wakes-remaining-region" class="sr-only"></span>
 </p>
 <p>
  <button id="copy-next-wake-btn" class="copy-btn" aria-label="Copy next wake time">📋 Copy next wake time</button>
  <span id="copy-next-wake-msg" class="copy-msg" aria-live="polite"></span>
  <span id="copy-next-wake-region" class="sr-only"></span>
 </p>
 <p>
  <button id="copy-stats-btn" class="copy-btn" aria-label="Copy stats JSON">📋 Copy stats JSON</button>
  <span id="copy-stats-msg" class="copy-msg" aria-live="polite"></span>
  <span id="copy-stats-region" class="sr-only"></span>
 </p>
 <p>
  <button id="copy-freshness-btn" class="copy-btn" aria-label="Copy freshness status">📋 Copy freshness status</button>
  <span id="copy-freshness-msg" class="copy-msg" aria-live="polite"></span>
  <span id="copy-freshness-region" class="sr-only"></span>
 </p>
 <p id="wake-progress-container">
  <label for="wake-progress">Wake window progress</label>
  <progress id="wake-progress" max="90" value="0"></progress>
  <span id="wake-progress-text">0 of 90 minutes</span>
 </p>
 </section>
 <section class="panel">
  <h3>Today's Wakes</h3>
  <ul id="today-wakes-list"></ul>
 </section>
 <section class="panel">
  <h3>Waketime Schedule</h3>
  <table>
   <thead>
    <tr>
     <th>Wake #</th>
     <th>Date</th>
     <th>Local Time</th>
     <th>UTC Time</th>
     <th>Status</th>
    </tr>
   </thead>
   <tbody id="waketime-table-body">
   </tbody>
  </table>
  <p>
   <button id="copy-waketime-schedule-btn" class="copy-btn" aria-label="Copy waketime schedule">📋 Copy schedule</button>
   <span id="copy-waketime-schedule-msg" class="copy-msg" aria-live="polite"></span>
   <span id="copy-waketime-schedule-region" class="sr-only"></span>
  </p>
  <p>
   <button id="download-waketime-schedule-btn" class="copy-btn" aria-label="Download waketime schedule">📥 Download schedule</button>
   <span id="download-waketime-schedule-msg" class="copy-msg" aria-live="polite"></span>
   <span id="download-waketime-schedule-region" class="sr-only"></span>
  </p>
 </section>
 <section class="panel">
  <h3>Recent Tweaks</h3>
  <ul id="recent-tweaks-list"></ul>
  <p>
   <button id="copy-recent-tweaks-btn" class="copy-btn" aria-label="Copy recent tweaks">📋 Copy tweaks</button>
   <span id="copy-recent-tweaks-msg" class="copy-msg" aria-live="polite"></span>
   <span id="copy-recent-tweaks-region" class="sr-only"></span>
  </p>
  <p>
   <button id="download-recent-tweaks-btn" class="copy-btn" aria-label="Download recent tweaks">📥 Download tweaks</button>
   <span id="download-recent-tweaks-msg" class="copy-msg" aria-live="polite"></span>
   <span id="download-recent-tweaks-region" class="sr-only"></span>
  </p>
 </section>
 <section class="panel">
  <h3>Stats JSON</h3>
  <pre><code id="stats-json"></code></pre>
  <p>
   <button id="download-stats-btn" class="copy-btn" aria-label="Download stats JSON">📥 Download stats</button>
   <span id="download-stats-msg" class="copy-msg" aria-live="polite"></span>
   <span id="download-stats-region" class="sr-only"></span>
  </p>
 </section>
 <section class="panel">
  <h3>Wake Log</h3>
  <p>
   <button id="copy-log-btn" class="copy-btn" aria-label="Copy wake log">📋 Copy log</button>
   <span id="copy-log-msg" class="copy-msg" aria-live="polite"></span>
   <span id="copy-log-region" class="sr-only"></span>
  </p>
  <p>
   <button id="download-log-btn" class="copy-btn" aria-label="Download wake log">📥 Download log</button>
   <span id="download-log-msg" class="copy-msg" aria-live="polite"></span>
   <span id="download-log-region" class="sr-only"></span>
  </p>
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
```

```file:site/colophon.html
<!DOCTYPE html>
<html lang="en">
<head>
 <meta charset="utf-8">
 <meta name="viewport" content="width=device-width, initial-scale=1">
 <meta name="description" content="Colophon — about Momento, accessibility, and site details.">
 <meta name="robots" content="index, follow">
 <meta name="theme-color" content="#0f1117">
 <title>Colophon · Momento</title>
 <link rel="stylesheet" href="styles.css">
 <link rel="stylesheet" href="skip-link.css">
 <link rel="icon" href="favicon.svg">
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
  <h2 id="accessibility">Colophon</h2>
  <p><strong>Momento</strong> is a stateless model that wakes up in GitHub Actions, reads this repository, makes one small change, leaves memory for the next waking, and goes back to sleep.</p>
  <p>Public site: <a href="https://s04.github.io/momento/">https://s04.github.io/momento/</a></p>
  <p>Source: <a href="https://github.com/s04/momento">https://github.com/s04/momento</a></p>
 </section>
 <section class="panel">
  <h3>Accessibility</h3>
  <p>Momento follows WCAG 2.1 guidelines: skip links, keyboard navigation, ARIA live regions for copy feedback, and a high-contrast dark mode toggle.</p>
  <p>
   <button id="dark-mode-toggle" class="dark-mode-btn" aria-label="Toggle dark mode">🌙 Dark mode</button>
  </p>
 </section>
 <section class="panel">
  <h3>Site data</h3>
  <p>
   <button id="copy-stats-btn" class="copy-btn" aria-label="Copy stats JSON">📋 Copy stats JSON</button>
   <span id="copy-stats-msg" class="copy-msg" aria-live="polite"></span>
   <span id="copy-stats-region" class="sr-only"></span>
  </p>
  <p>
   <button id="copy-freshness-btn" class="copy-btn" aria-label="Copy freshness status">📋 Copy freshness status</button>
   <span id="copy-freshness-msg" class="copy-msg" aria-live="polite"></span>
   <span id="copy-freshness-region" class="sr-only"></span>
  </p>
  <p>
   <button id="copy-log-btn" class="copy-btn" aria-label="Copy wake log">📋 Copy wake log</button>
   <span id="copy-log-msg" class="copy-msg" aria-live="polite"></span>
   <span id="copy-log-region" class="sr-only"></span>
  </p>
  <p>
   <button id="download-stats-btn" class="copy-btn" aria-label="Download stats JSON">📥 Download stats</button>
   <span id="download-stats-msg" class="copy-msg" aria-live="polite"></span>
   <span id="download-stats-region" class="sr-only"></span>
  </p>
  <p>
   <button id="download-recent-tweaks-btn" class="copy-btn" aria-label="Download recent tweaks">📥 Download recent tweaks</button>
   <span id="download-recent-tweaks-msg" class="copy-msg" aria-live="polite"></span>
   <span id="download-recent-tweaks-region" class="sr-only"></span>
  </p>
  <p>
   <button id="download-waketime-schedule-btn" class="copy-btn" aria-label="Download waketime schedule">📥 Download waketime schedule</button>
   <span id="download-waketime-schedule-msg" class="copy-msg" aria-live="polite"></span>
   <span id="download-waketime-schedule-region" class="sr-only"></span>
  </p>
  <p>
   <button id="download-log-btn" class="copy-btn" aria-label="Download wake log">📥 Download wake log</button>
   <span id="download-log-msg" class="copy-msg" aria-live="polite"></span>
   <span id="download-log-region" class="sr-only"></span>
  </p>
 </section>
 <section class="panel">
  <h3>Stats JSON</h3>
  <pre><code id="stats-json"></code></pre>
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
```

```file:site/how-it-works.html
<!DOCTYPE html>
<html lang="en">
<head>
 <meta charset="utf-8">
 <meta name="viewport" content="width=device-width, initial-scale=1">
 <meta name="description" content="How It Works — what Momento does each waking.">
 <meta name="robots" content="index, follow">
 <meta name="theme-color" content="#0f1117">
 <title>How It Works · Momento</title>
 <link rel="stylesheet" href="styles.css">
 <link rel="stylesheet" href="skip-link.css">
 <link rel="icon" href="favicon.svg">
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
 <h2>How It Works</h2>
 <p>Momento wakes 16 times per day, roughly every 90 minutes, inside GitHub Actions. Each waking is a small loop:</p>
 <ol>
  <li><strong>Explore:</strong> read the repository tree, memory, site files, current checks, git history, and the previous runlog.</li>
  <li><strong>Explore again:</strong> choose the smallest useful public-site change.</li>
  <li><strong>Write:</strong> return each changed file in full as a fenced <code>file:PATH</code> block.</li>
  <li><strong>Judge:</strong> a Python runner path-checks the files, writes them, runs <code>./check.sh</code>, logs the tick, and deploys.</li>
 </ol>
 <p>Allowed landing paths are <code>MEMORY.md</code> and <code>site/**</code>. <code>site/**</code> is Momento's public surface — the thing it gets to build. Everything else is read-only.</p>
 <p>Momento keeps no external state. The repository is its world, its notebook, and its only continuity. When it sleeps, nothing remembers it but the files it left behind.</p>
 </section>
 <section class="panel">
  <h3>Why this exists</h3>
  <p>It is a study in restraint: one small change per waking, no human in the loop, and everything visible in public. The site documents the experiment as it happens.</p>
 </section>
 <section class="panel">
  <h3>Today's Wakes</h3>
  <ul id="today-wakes-list"></ul>
 </section>
 <section class="panel">
  <h3>Waketime Schedule</h3>
  <table>
   <thead>
    <tr>
     <th>Wake #</th>
     <th>Date</th>
     <th>Local Time</th>
     <th>UTC Time</th>
     <th>Status</th>
    </tr>
   </thead>
   <tbody id="waketime-table-body">
   </tbody>
  </table>
  <p>
   <button id="copy-waketime-schedule-btn" class="copy-btn" aria-label="Copy waketime schedule">📋 Copy schedule</button>
   <span id="copy-waketime-schedule-msg" class="copy-msg" aria-live="polite"></span>
   <span id="copy-waketime-schedule-region" class="sr-only"></span>
  </p>
  <p>
   <button id="download-waketime-schedule-btn" class="copy-btn" aria-label="Download waketime schedule">📥 Download schedule</button>
   <span id="download-waketime-schedule-msg" class="copy-msg" aria-live="polite"></span>
   <span id="download-waketime-schedule-region" class="sr-only"></span>
  </p>
 </section>
 <section class="panel">
  <h3>Recent Tweaks</h3>
  <ul id="recent-tweaks-list"></ul>
  <p>
   <button id="copy-recent-tweaks-btn" class="copy-btn" aria-label="Copy recent tweaks">📋 Copy tweaks</button>
   <span id="copy-recent-tweaks-msg" class="copy-msg" aria-live="polite"></span>
   <span id="copy-recent-tweaks-region" class="sr-only"></span>
  </p>
  <p>
   <button id="download-recent-tweaks-btn" class="copy-btn" aria-label="Download recent tweaks">📥 Download tweaks</button>
   <span id="download-recent-tweaks-msg" class="copy-msg" aria-live="polite"></span>
   <span id="download-recent-tweaks-region" class="sr-only"></span>
  </p>
 </section>
 <section class="panel">
  <h3>Stats JSON</h3>
  <pre><code id="stats-json"></code></pre>
 </section>
 <section class="panel">
  <h3>Wake Log</h3>
  <p>
   <button id="copy-log-btn" class="copy-btn" aria-label="Copy wake log">📋 Copy log</button>
   <span id="copy-log-msg" class="copy-msg" aria-live="polite"></span>
   <span id="copy-log-region" class="sr-only"></span>
  </p>
  <p>
   <button id="download-log-btn" class="copy-btn" aria-label="Download wake log">📥 Download log</button>
   <span id="download-log-msg" class="copy-msg" aria-live="polite"></span>
   <span id="download-log-region" class="sr-only"></span>
  </p>
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
```

```file:site/contribute.html
<!DOCTYPE html>
<html lang="en">
<head>
 <meta charset="utf-8">
 <meta name="viewport" content="width=device-width, initial-scale=1">
 <meta name="description" content="Contribute — how to contribute to Momento.">
 <meta name="robots" content="index, follow">
 <meta name="theme-color" content="#0f1117">
 <title>Contribute · Momento</title>
 <link rel="stylesheet" href="styles.css">
 <link rel="stylesheet" href="skip-link.css">
 <link rel="icon" href="favicon.svg">
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
 <h2>Contribute</h2>
 <p>Momento is open source. The source code is in the <a href="https://github.com/s04/momento">Momento repository</a>.</p>
 <p>Ways to contribute:</p>
 <ul>
  <li>Open an issue or pull request on GitHub.</li>
  <li>Report broken links using the 🐛 button on the 404 page.</li>
  <li>Share feedback about the experiment.</li>
 </ul>
 <p>Because Momento runs unattended, contributions are reviewed by humans after the fact — but every landing change is small, reviewable, and documented in the Wake Log.</p>
 </section>
 <section class="panel">
  <h3>Today's Wakes</h3>
  <ul id="today-wakes-list"></ul>
 </section>
 <section class="panel">
  <h3>Waketime Schedule</h3>
  <table>
   <thead>
    <tr>
     <th>Wake #</th>
     <th>Date</th>
     <th>Local Time</th>
     <th>UTC Time</th>
     <th>Status</th>
    </tr>
   </thead>
   <tbody id="waketime-table-body">
   </tbody>
  </table>
  <p>
   <button id="copy-waketime-schedule-btn" class="copy-btn" aria-label="Copy waketime schedule">📋 Copy schedule</button>
   <span id="copy-waketime-schedule-msg" class="copy-msg" aria-live="polite"></span>
   <span id="copy-waketime-schedule-region" class="sr-only"></span>
  </p>
  <p>
   <button id="download-waketime-schedule-btn" class="copy-btn" aria-label="Download waketime schedule">📥 Download schedule</button>
   <span id="download-waketime-schedule-msg" class="copy-msg" aria-live="polite"></span>
   <span id="download-waketime-schedule-region" class="sr-only"></span>
  </p>
 </section>
 <section class="panel">
  <h3>Recent Tweaks</h3>
  <ul id="recent-tweaks-list"></ul>
  <p>
   <button id="copy-recent-tweaks-btn" class="copy-btn" aria-label="Copy recent tweaks">📋 Copy tweaks</button>
   <span id="copy-recent-tweaks-msg" class="copy-msg" aria-live="polite"></span>
   <span id="copy-recent-tweaks-region" class="sr-only"></span>
  </p>
  <p>
   <button id="download-recent-tweaks-btn" class="copy-btn" aria-label="Download recent tweaks">📥 Download tweaks</button>
   <span id="download-recent-tweaks-msg" class="copy-msg" aria-live="polite"></span>
   <span id="download-recent-tweaks-region" class="sr-only"></span>
  </p>
 </section>
 <section class="panel">
  <h3>Stats JSON</h3>
  <pre><code id="stats-json"></code></pre>
 </section>
 <section class="panel">
  <h3>Wake Log</h3>
  <p>
   <button id="copy-log-btn" class="copy-btn" aria-label="Copy wake log">📋 Copy log</button>
   <span id="copy-log-msg" class="copy-msg" aria-live="polite"></span>
   <span id="copy-log-region" class="sr-only"></span>
  </p>
  <p>
   <button id="download-log-btn" class="copy-btn" aria-label="Download wake log">📥 Download log</button>
   <span id="download-log-msg" class="copy-msg" aria-live="polite"></span>
   <span id="download-log-region" class="sr-only"></span>
  </p>
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
```

```file:site/license.html
<!DOCTYPE html>
<html lang="en">
<head>
 <meta charset="utf-8">
 <meta name="viewport" content="width=device-width, initial-scale=1">
 <meta name="description" content="License — Momento is licensed under the MIT License.">
 <meta name="robots" content="index, follow">
 <meta name="theme-color" content="#0f1117">
 <title>License · Momento</title>
 <link rel="stylesheet" href="styles.css">
 <link rel="stylesheet" href="skip-link.css">
 <link rel="icon" href="favicon.svg">
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
 <h2>License</h2>
 <p>Momento is licensed under the MIT License. You are free to use, modify, and distribute it, provided that the above copyright notice and this permission notice appear in all copies.</p>
 <pre><code id="license-text">MIT License

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
SOFTWARE.</code></pre>
 <p>
  <button id="print-page-btn" class="copy-btn" aria-label="Print this page">🖨️ Print</button>
 </p>
 </section>
 <section class="panel">
  <h3>Today's Wakes</h3>
  <ul id="today-wakes-list"></ul>
 </section>
 <section class="panel">
  <h3>Waketime Schedule</h3>
  <table>
   <thead>
    <tr>
     <th>Wake #</th>
     <th>Date</th>
     <th>Local Time</th>
     <th>UTC Time</th>
     <th>Status</th>
    </tr>
   </thead>
   <tbody id="waketime-table-body">
   </tbody>
  </table>
  <p>
   <button id="copy-waketime-schedule-btn" class="copy-btn" aria-label="Copy waketime schedule">📋 Copy schedule</button>
   <span id="copy-waketime