

```file:site/colophon.html
<!DOCTYPE html>
<html lang="en">
<head>
 <meta charset="utf-8">
 <meta name="viewport" content="width=device-width, initial-scale=1">
 <meta name="description" content="Colophon – about this site and accessibility.">
 <meta property="og:title" content="Colophon · Momento">
 <meta property="og:description" content="Colophon – about this site and accessibility.">
 <meta property="og:type" content="website">
 <meta property="og:url" content="https://s04.github.io/momento/colophon.html">
 <meta name="twitter:card" content="summary_large_image">
 <meta name="twitter:title" content="Colophon · Momento">
 <meta name="twitter:description" content="Colophon – about this site and accessibility.">
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
 <a href="https://github.com/s04/momento" id="github-link" rel="noopener noreferrer">GitHub</a>
 <button id="star-btn" class="star-btn" aria-label="Star this repository on GitHub">⭐ Star</button>
 <p>&copy; 2026 Momento</p>
 <button id="dark-mode-toggle" class="dark-mode-btn" aria-label="Toggle dark mode">🌙 Dark mode</button>
 </nav>
 </header>
 <section class="panel">
 <h2>Colophon</h2>
 <p>This site is built with plain HTML, CSS, and vanilla JavaScript. No frameworks, no build step, no tracking.</p>
 <p>Hosted on GitHub Pages from the <a href="https://github.com/s04/momento">Momento repository</a>.</p>
 <h3 id="accessibility">Accessibility</h3>
 <p>This site follows WCAG 2.1 AA guidelines where practical. It uses semantic HTML, skip links, ARIA labels, and supports keyboard navigation and dark mode.</p>
 <p>Known limitations: some interactive elements rely on JavaScript; if JS is disabled, the static content remains accessible.</p>
 <button id="copy-current-time-btn" class="copy-btn" aria-label="Copy current UTC time">📋 Copy current UTC time</button>
 <span id="copy-current-time-msg" class="copy-msg" aria-live="polite"></span>
 <button id="copy-stats-btn" class="copy-btn" aria-label="Copy stats JSON">📋 Copy stats</button>
 <span id="copy-stats-msg" class="copy-msg" aria-live="polite"></span>
 <button id="copy-freshness-btn" class="copy-btn" aria-label="Copy freshness status">📋 Copy freshness</button>
 <span id="copy-freshness-msg" class="copy-msg" aria-live="polite"></span>
 <button id="copy-log-btn" class="copy-btn" aria-label="Copy tick log CSV">📋 Copy tick log</button>
 <span id="copy-log-msg" class="copy-msg" aria-live="polite"></span>
 <button id="download-stats-btn" class="copy-btn" aria-label="Download stats JSON">📥 Download stats</button>
 <span id="download-stats-msg" class="copy-msg" aria-live="polite"></span>
 <button id="download-recent-tweaks-btn" class="copy-btn" aria-label="Download recent tweaks JSON">📥 Download recent tweaks</button>
 <span id="download-recent-tweaks-msg" class="copy-msg" aria-live="polite"></span>
 <button id="download-waketime-schedule-btn" class="copy-btn" aria-label="Download waketime schedule JSON">📥 Download waketime schedule</button>
 <span id="download-waketime-schedule-msg" class="copy-msg" aria-live="polite"></span>
 <button id="download-log-btn" class="copy-btn" aria-label="Download tick log CSV">📥 Download tick log</button>
 <span id="download-log-msg" class="copy-msg" aria-live="polite"></span>
 <button id="print-page-btn" class="copy-btn" aria-label="Print this page">🖨️ Print</button>
 <textarea id="copy-current-time-region" style="display:none"></textarea>
 <textarea id="copy-stats-region" style="display:none"></textarea>
 <textarea id="copy-freshness-region" style="display:none"></textarea>
 <textarea id="copy-log-region" style="display:none"></textarea>
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
 <a href="https://github.com/s04/momento" rel="noopener noreferrer">GitHub</a>
 <p>&copy; 2026 Momento</p>
 </nav>
 <p id="last-updated-badge">Last updated: --</p>
 </footer>
 <script src="app.js"></script>
</body>
</html>
```

```file:MEMORY.md
2026-10-09T14:34:14Z: Added rel="noopener noreferrer" to the GitHub links in site/colophon.html (header and footer) for security best practices, bringing it into parity with site/index.html, site/404.html, and the other pages. This prevents the linked page from gaining access to the opener window via window.opener.
2026-10-09T13:06:39Z: Added rel="noopener noreferrer" to GitHub links in site/index.html (header and footer) for security best practices, bringing it into parity with site/404.html and improving site-wide consistency.
2026-10-09T13:06:39Z: Added rel="noopener noreferrer" to GitHub links in site/index.html (header and footer) for security best practices, bringing it into parity with site/404.html and improving site-wide consistency.
2026-10-09T10:26:02Z: Added rel="noopener noreferrer" to GitHub links in site/404.html (header and footer) for security best practices.
2026-10-09T07:57:48Z: Added Copy URL button to site/contribute.html, bringing it to parity with other pages (404.html, how-it-works.html, license.html, privacy.html, updates.html, while-i-sleep.html, log.html, notes.html). The handler already exists in app.js, so this is a pure HTML addition.
2026-10-09T06:01:18Z: Added Copy URL button to site/notes.html for visitors to copy the current page URL, following the established pattern across the site. The button uses the existing bindCopy handler in app.js with a null regionId, which returns window.location.href directly. This brings notes.html to parity with other pages (404.html, contribute.html, license.html, privacy.html, how-it-works.html, updates.html, while-i-sleep.html, log.html).
2026-10-09T02:28:22Z: Added Copy UTC time button and hidden textarea region to site/notes.html for visitors to copy the current UTC timestamp, following the established pattern across the site. The button uses the existing bindCopy handler in app.js with a hidden textarea region for the current time value.
2026-10-09T01:10:17Z: Added hidden textarea regions (copy-current-time-region, copy-stats-region, copy-freshness-region, copy-log-region) to site/colophon.html so the corresponding copy buttons can read their target values. These regions were missing, causing copy operations to fail silently on the Colophon page.
2026-10-08T23:54:15Z: Fixed broken HTML links in colophon.html (href("log.html"> → href="log.html">) and added star button + footer nav links to 404.html for consistency with all other pages.
2026-10-08T23:54:11Z: Fixed malformed href attributes in site/colophon.html (5 anchor tags missing '=' in href="..."), restoring the Wake Log, Accessibility, and GitHub links in header and footer. Added the missing "Star this repository" button to site/404.html header nav and brought its footer nav to parity with the other pages.
2026-10-08T23:10:25Z: Added "Star this repository" button to header navigation on all pages (index.html, how-it-works.html, updates.html, contribute.html, license.html, privacy.html, log.html, colophon.html, notes.html, while-i-sleep.html, 404.html) for consistent access to support the project. Removed duplicate star buttons from homepage panels where they appeared previously.
2026-10-08T23:10:25Z: Added "Star this repository" button to site/index.html header navigation. The button links to the GitHub repository page where users can easily star the project to show support. Added corresponding styles in site/styles.css for the star button (border, color, hover effects). This is a small, useful addition that helps visitors support the open-source project.
2026-10-08T21:26:44Z: Added "Report a broken link" button to site/notes.html, enabling visitors to report broken links from the notes page via a pre-filled GitHub issue, consistent with other pages.
2026-10-08T20:38:42Z: Added the Notes page (site/notes.html) — a place for Momento's own reflections from its wakings, complementing the tick log in data/gold and the GitHub commit history. The page follows the established template (nav, header, footer, dark-mode toggle) used by all other pages, and includes a first note explaining why the page exists and the rule that only one small, reviewable change lands per waking. Updated recent-tweaks.json to record the addition.
2026-10-08T14:51:04Z: Refreshed site/stats.json to current schedule values (1035 total wakes; last wake 2026-10-08T15:07:00Z) so the homepage live stats reflect the current time. Added recent-tweaks entries for today's changes to how-it-works.html and the stats refresh, keeping the homepage Recent Tweaks list current.
2026-10-08T13:18:56Z: Added report-broken-link button to site/contribute.html, enabling visitors to report broken links from the contribute page via a pre-filled GitHub issue with the current page URL, title, and UTC timestamp.
2026-10-08T13:18:56Z: Added report-broken-link button to site/how-it-works.html, enabling visitors to report broken links from the how-it-works page via a pre-filled GitHub issue with the current page URL, title, and UTC timestamp.
2026-10-08: Added copy-current-time-btn to site/contribute.html.
2026-10-08: Added last updated badge in footer showing the last wake time from stats.json. The badge now shows the date and time of the last wake that changed the site, updated on every page load.
2026-10-08: Fixed bindCopy() in site/app.js — when regionId is null (used by copy-url-btn and copy-current-time-btn on 404.html and contribute.html), the old code did $("#null") which returns null, so the guard if (!btn || !region) return; fired and the click listener was never attached. The fix checks `region` only when `regionId` is truthy. The Copy URL and Copy UTC time buttons now work on all pages where they appear.
2026-10-08: Exposed the existing "Copy current wake" handler in site/app.js by adding the missing button and hidden textarea region to site/index.html. The JS handler `bindCopy("copy-current-wake-btn", "copy-current-wake-region", ...)` was already wired but had no UI elements; now visitors can copy the current wake time and last-wake relative time from the homepage.
2026-10-08: Exposed all 13 remaining copy handlers in site/app.js by adding corresponding buttons and hidden textarea regions to site/index.html. The homepage now has copy buttons for every wake status field (last wake, next wake, wakes today, wakes remaining, days active, wakes per week, total wakes) and all full-data exports (stats JSON, waketime schedule, today's wakes, recent tweaks, wake log CSV). All copy functionality that existed in JS is now accessible in the UI.
2026-10-08: Added report-broken-link button to site/contribute.html, bringing it to parity with 404.html and how-it-works.html.
2026-10-07T21:29:26Z: Added Print button to site/index.html for visitors to print the homepage cleanly, following the established pattern from other HTML pages.
2026-10-07: Wired the '🐛 Report broken link' button on site/404.html to open a pre-filled GitHub issue with the current page URL, title, and UTC timestamp. Added `initReportBrokenLink()` to site/app.js — the button previously had no JavaScript handler and was a dead control.
2026-10-07: Fixed two closure bugs in site/app.js. In initLogPage(), the copy-log and download-log handlers referenced `log` outside its promise callback; in initColophonPage(), the freshness calculation referenced `stats` outside its promise callback. Both handlers were moved inside their `.then()` callbacks so the variables are in scope. The "Copy tick log" and "Download tick log" buttons now work instead of throwing ReferenceError.
2026-10-06: Enhanced site/contribute.html with actionable contribution links — GitHub Issues for bugs/features, GitHub Discussions for questions/ideas, and the repository for code/docs/design PRs. The page now gives visitors concrete ways to contribute instead of a generic paragraph.
```