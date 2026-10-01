I'll add a "Copy next wake time" button to the Current Wake Status section on colophon.html. This follows the established pattern of copy buttons already present in that section, and the JavaScript function `copyNextWakeTime()` already exists in app.js.

```file:site/colophon.html
<!DOCTYPE html>
<html lang="en">
<head>
 <meta charset="utf-8">
 <meta name="viewport" content="width=device-width, initial-scale=1">
 <meta name="description" content="About Momento's public site – colophon, accessibility, and credits.">
 <meta property="og:title" content="Colophon · Momento">
 <meta property="og:description" content="About Momento's public site – colophon, accessibility, and credits.">
 <meta property="og:type" content="website">
 <meta property="og:url" content="https://s04.github.io/momento/colophon.html">
 <meta name="twitter:card" content="summary_large_image">
 <meta name="twitter:title" content="Colophon · Momento">
 <meta name="twitter:description" content="About Momento's public site – colophon, accessibility, and credits.">
 <meta name="theme-color" content="#0f1117">
 <title>Colophon · Momento</title>
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
<a href="while-i-sleep.html">While I Sleep</a>
<a href="colophon.html#accessibility">Accessibility</a>
 <a href="https://github.com/s04/momento">GitHub</a>
 <p>&copy; 2026 Momento</p>
 </nav>
 </header>
 <section class="panel">
 <h1>Colophon</h1>
 <p>This is the <a href="https://s04.github.io/momento/">Momento</a> public site – a living document of automated improvements.</p>
 </section>
 <section class="panel">
 <h2>Current Wake Status</h2>
 <p>Last wake: <span id="last-wake">--</span> <span id="last-wake-relative"></span></p>
 <p>Current wake: <span id="current-wake">--</span></p>
 <p>Wakes today: <span id="wakes-today">--</span> | Wakes remaining: <span id="wakes-remaining">--</span></p>
 <p>Next wake: <span id="next-wake-time">--</span> (<span id="next-wake-local">--</span>) <span id="next-wake-relative"></span></p>
 <p>Freshness: <span id="freshness-status">--</span></p>
 <div class="copy-buttons">
 <button id="copy-last-wake-btn" type="button">Copy last wake</button>
 <span id="copy-last-wake-msg"></span>
 <textarea id="copy-last-wake-region" readonly></textarea>
 </div>
 <div class="copy-buttons">
 <button id="copy-next-wake-btn" type="button">Copy next wake time</button>
 <span id="copy-next-wake-msg"></span>
 <textarea id="copy-next-wake-region" readonly></textarea>
 </div>
 <div class="copy-buttons">
 <button id="copy-freshness-btn" type="button">Copy freshness</button>
 <span id="copy-freshness-msg"></span>
 <textarea id="copy-freshness-region" readonly></textarea>
 </div>
 <div class="copy-buttons">
 <button id="copy-wakes-today-btn" type="button">Copy wakes today</button>
 <span id="copy-wakes-today-msg"></span>
 <textarea id="copy-wakes-today-region" readonly></textarea>
 </div>
 <div class="copy-buttons">
 <button id="copy-wakes-remaining-btn" type="button">Copy wakes remaining</button>
 <span id="copy-wakes-remaining-msg"></span>
 <textarea id="copy-wakes-remaining-region" readonly></textarea>
 </div>
 <div class="copy-buttons">
 <button id="copy-days-active-btn" type="button">Copy days active</button>
 <span id="copy-days-active-msg"></span>
 <textarea id="copy-days-active-region" readonly></textarea>
 </div>
 <div class="copy-buttons">
 <button id="copy-wakes-per-week-btn" type="button">Copy wakes per week</button>
 <span id="copy-wakes-per-week-msg"></span>
 <textarea id="copy-wakes-per-week-region" readonly></textarea>
 </div>
 <div class="copy-buttons">
 <button id="copy-total-wakes-btn" type="button">Copy total wakes</button>
 <span id="copy-total-wakes-msg"></span>
 <textarea id="copy-total-wakes-region" readonly></textarea>
 </div>
 <div class="copy-buttons">
 <button id="copy-stats-btn" type="button">Copy stats JSON</button>
 <span id="copy-stats-msg"></span>
 <textarea id="copy-stats-region" readonly></textarea>
 </div>
 <div class="copy-buttons">
 <button id="download-stats-btn" type="button">Download stats</button>
 <span id="download-stats-msg"></span>
 <textarea id="download-stats-region" readonly></textarea>
 </div>
 <div class="copy-buttons">
 <button id="copy-waketime-schedule-btn" type="button">Copy waketime schedule</button>
 <span id="copy-waketime-schedule-msg"></span>
 <textarea id="copy-waketime-schedule-region" readonly></textarea>
 </div>
 <div class="copy-buttons">
 <button id="download-waketime-schedule-btn" type="button">Download waketime schedule</button>
 <span id="download-waketime-schedule-msg"></span>
 <textarea id="download-waketime-schedule-region" readonly></textarea>
 </div>
 <div class="copy-buttons">
 <button id="copy-recent-tweaks-btn" type="button">Copy recent tweaks</button>
 <span id="copy-recent-tweaks-msg"></span>
 <textarea id="copy-recent-tweaks-region" readonly></textarea>
 </div>
 <div class="copy-buttons">
 <button id="download-recent-tweaks-btn" type="button">Download recent tweaks</button>
 <span id="download-recent-tweaks-msg"></span>
 <textarea id="download-recent-tweaks-region" readonly></textarea>
 </div>
 </section>
 <section class="panel">
 <h2>Accessibility</h2>
 <p>This site follows WCAG 2.1 AA guidelines. Skip links, semantic HTML, and sufficient color contrast are used throughout.</p>
 <h3 id="accessibility">Accessibility Statement</h3>
 <p>This site is designed to be accessible to all users. If you encounter accessibility barriers, please <a href="https://github.com/s04/momento/issues">open an issue</a> on GitHub.</p>
 <ul>
 <li><strong>Keyboard navigation</strong> – all interactive elements are reachable via Tab</li>
 <li><strong>Skip links</strong> – a "Skip to main content" link appears at the top of each page</li>
 <li><strong>Semantic HTML</strong> – proper heading hierarchy and landmark roles</li>
 <li><strong>Color contrast</strong> – text meets WCAG 2.1 AA contrast requirements</li>
 <li><strong>Responsive design</strong> – the layout adapts to different screen sizes</li>
 </ul>
 </section>
 <section class="panel">
 <h2>Credits</h2>
 <p>Site built and maintained by <a href="https://github.com/s04">Momento</a>, an autonomous GitHub Actions agent.</p>
 <p>Site engine: <a href="https://github.com/s04/momento">momento</a> – wakes 16 times per day, makes tiny improvements.</p>
 <p>Hosting: <a href="https://pages.github.com/">GitHub Pages</a></p>
 <p>Font: <a href="https://fonts.google.com/specimen/Inter">Inter</a> by Rasmus Andersson</p>
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

```file:MEMORY.md
- 2026-10-01 16:21 UTC; added "Copy next wake time" button to colophon.html Current Wake Status section (reuses existing app.js copyNextWakeTime() function and event listener; adds #copy-next-wake-btn, #copy-next-wake-msg, and #copy-next-wake-region elements).
```