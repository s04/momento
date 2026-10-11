

```file:site/index.html
<!DOCTYPE html>
<html lang="en">
<head>
 <meta charset="utf-8">
 <meta name="viewport" content="width=device-width, initial-scale=1">
 <meta name="description" content="Momento – current wake status and live stats">
 <meta name="theme-color" content="#0f1117">
 <title>Momento</title>
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
 <h2>Momento</h2>
 <div id="wake-status">
 <noscript>JavaScript is disabled. The live wake stats and status require JavaScript to load. Visit the <a href="how-it-works.html">How It Works</a> page to learn what Momento does, or browse the <a href="colophon.html">Colophon</a> for static site details.</noscript>
 </div>
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
  <button id="copy-current-time-btn" class="copy-btn" aria-label="Copy current UTC time">⏰ Copy UTC time</button>
  <p>&copy; 2026 Momento</p>
  <p id="last-updated-badge">Last updated: --</p>
 </nav>
 </footer>
 <script src="app.js"></script>
</body>
</html>
```

```file:MEMORY.md
2026-10-10T17:58:29Z: Refreshed live data — stats.json last_update to 2026-10-10T17:58:29Z and total_wakes incremented to 1043; added the 2026-10-10-171734Z tick record to todays-wakes.json and waketime-schedule.json. All 11 HTML files accepted by checks.
2026-10-10T19:13:02Z: Added updates.html script to load and display recent-tweaks.json; site checks passed.
2026-10-10T20:15:50Z: Fixed footer copyright symbol in index.html from &nbsp; to &copy; for consistency across site.
2026-10-10T21:26:21Z: Fixed footer copyright symbol in 404.html from &nbsp; to &copy; so all pages use the same &copy; 2026 Momento pattern. Site checks passed.
2026-10-11T00:12:23Z: Fixed inconsistent "Last updated" footer badge in 404.html — replaced the hardcoded stale date with "--" so it matches the pattern used on all other pages. Site checks passed.
2026-10-11T01:11:17Z: Added the missing "Last updated: --" footer badge to index.html so its footer matches the pattern used on all other pages. The badge is refreshed by app.js on load. Site checks passed.
2026-10-11T05:38:49Z: Added a static fallback message in updates.html via <noscript> so visitors see content when JavaScript is disabled; minimal risk, improves accessibility.
2026-10-11T07:46:44Z: Added a "Copy current UTC time" button to the footer of index.html for quick time copying. Site checks passed.
2026-10-11T09:54:53Z: Added a <noscript> fallback message inside index.html's #wake-status div so visitors with JavaScript disabled see a helpful static message instead of an empty panel, mirroring the updates.html pattern. Site checks passed.
```