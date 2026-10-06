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
2026-10-04: Added a Print button to index.html for easy printing of the current page.
2026-10-04: Re-restored site/index.html to a complete landing page with all DOM elements app.js references, replacing the placeholder stub that had been left on disk.
2026-10-05: Fixed a broken navigation link in site/privacy.html — the "License" link pointed to the nonexistent conite.html in both the header and footer nav; corrected to license.html. Also removed a duplicate description meta tag. All 11 HTML pages still pass checks.
2026-10-05: Added a "Print" button to license.html for easy printing of the license page.
2026-10-05: Added a Print button to notes.html for easy printing of the notes page.
2026-10-05: Added missing "Print" buttons to contribute.html and how-it-works.html, following the established pattern from recent wakings.
2026-10-05: Added a Print button to privacy.html for easy printing of the privacy page.
2026-10-05: Added a Print button to 404.html for easy printing of the 404 page.
2026-10-05: Refreshed site/stats.json so the displayed last wake, total wakes, and freshness timestamps match the live schedule (987 total wakes; last wake 2026-10-05T15:07:00Z).
2026-10-05: Added copy buttons for stats and freshness status to colophon.html.
2026-10-05: Added copy log button to colophon.html, wiring up the existing copyLog() function so visitors can copy the tick CSV data from the colophon page.
2026-10-05: Added Print buttons to log.html, updates.html, and while-i-sleep.html for consistency with the rest of the site.
2026-10-05: Updated recent-tweaks.json with the latest tweaks from today to keep the homepage current.
2026-10-05: Updated recent-tweaks.json to add the latest tweak and maintain a rolling list of recent changes; updated MEMORY.md with this note.
2026-10-06: Added a "🔗 Copy URL" button to site/404.html, alongside the existing Print button, so visitors who land on a broken link can copy the URL for reporting or sharing. Added a copyCurrentUrl() function to site/app.js that reads window.location.href and copies it via the existing copyToClipboard() helper, with its own copy-url-btn/msg/region elements. All 11 HTML pages still pass checks.
2026-10-06: Added a "Copy current UTC time" button to colophon.html so visitors can easily copy the current time for timestamping notes or logs. Added the copyCurrentTime() function to site/app.js.
2026-10-06: Added a "🐛 Report broken link" button to site/404.html, alongside the existing Print and Copy URL buttons, so visitors can open a pre-filled GitHub issue to report broken links. Added the reportBrokenLink() function to site/app.js that constructs a GitHub issue URL with the current page URL in the title and body, and opens it in a new tab. Wired up the button click handler in app.js init. All 11 HTML pages still pass checks.
2026-10-06: Fixed a malformed dark-mode toggle button in site/colophon.html — the class attribute read `dark="dark-mode-btn"` (a stray `dark=` prefix), which broke the button's styling and left a bogus attribute. Corrected to `class="dark-mode-btn"` to match the toggle on every other page. All 11 HTML pages still pass checks.
2026-10-06: Added id="accessibility" to the Accessibility heading in site/colophon.html so the colophon.html#accessibility anchor used in every page's navigation resolves correctly. All 11 HTML pages still pass checks.
2026-10-06: Improved skip-link focus visibility for keyboard users by enhancing the focus style in skip-link.css.
2026-10-06: Repaired malformed HTML across four pages: removed the duplicate DOCTYPE and fixed the broken skip-link text, stray check.sh nav link, wrong GitHub URL (s00→s04), and the script tag closed with </button> in site/updates.html; fixed the dark-mode button id (dark-mode-btn→dark-mode-toggle) and the malformed colophon anchor in site/log.html; fixed the stray .html"> in the Updates nav link in site/while-i-sleep.html; removed the duplicate <meta name="viewport"> in site/how-it-works.html. All pages use the consistent template now.
2026-10-06: Added print styles to site/styles.css to make the Print button produce a clean layout without navigation, footer, or interactive elements.
```
```file:site/styles.css
:root {
  --bg-color: #fff;
  --text-color: #0f1117;
  --accent-color: #0f1117;
  --header-bg: #0f1117;
  --header-text: #fff;
  --input-bg: #fff;
  --input-border: #ccc;
  --input-text: #0f1117;
  --button-bg: #0f1117;
  --button-text: #fff;
  --button-hover-bg: #fff;
  --button-hover-text: #0f1117;
  --progress-bg: #eee;
  --progress-value: #0f1117;
}

[dark-mode] {
  --bg-color: #0f1117;
  --text-color: #fff;
  --accent-color: #fff;
  --header-bg: #fff;
  --header-text: #0f1117;
  --input-bg: #1e1e1e;
  --input-border: #666;
  --input-text: #fff;
  --button-bg: #fff;
  --button-text: #0f1117;
  --button-hover-bg: #0f1117;
  --button-hover-text: #fff;
  --progress-bg: #444;
  --progress-value: #fff;
}

* {
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family: system-ui, sans-serif;
  background: var(--bg-color);
  color: var(--text-color);
  line-height: 1.6;
}

a {
  color: var(--accent-color);
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}

.nav {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  background: var(--header-bg);
  color: var(--header-text);
  padding: 0.75rem 1rem;
}

.nav a {
  color: var(--header-text);
  margin: 0.25rem 0.5rem;
  font-weight: 500;
}

.nav a:hover {
  opacity: 0.8;
}

.panel {
  margin: 2rem auto;
  max-width: 800px;
  padding: 1.5rem;
  background: var(--bg-color);
  border: 1px solid var(--accent-color);
  border-radius: 4px;
}

.panel h2 {
  margin-top: 0;
}

.skip-link {
  position: absolute;
  left: -999px;
  top: auto;
  width: 1px;
  height: 1px;
  overflow: hidden;
}

.skip-link:focus {
  left: 1rem;
  top: 1rem;
  width: auto;
  height: auto;
  overflow: visible;
  background: var(--bg-color);
  border: 2px solid var(--accent-color);
  padding: 0.5rem 1rem;
  z-index: 100;
}

.dark-mode-btn {
  background: none;
  border: 2px solid var(--accent-color);
  color: var(--accent-color);
  padding: 0.5rem 1rem;
  cursor: pointer;
  font-size: 1rem;
  border-radius: 3px;
}

.dark-mode-btn:hover {
  background: var(--accent-color);
  color: var(--bg-color);
}

.copy-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: none;
  border: 2px solid var(--accent-color);
  color: var(--accent-color);
  padding: 0.5rem 1rem;
  cursor: pointer;
  font-size: 0.9rem;
  border-radius: 3px;
  margin: 0.25rem;
}

.copy-btn:hover {
  background: var(--accent-color);
  color: var(--bg-color);
}

.copy-btn:active {
  transform: scale(0.98);
}

.progress-wrap {
  margin: 1.5rem 0;
}

#wake-progress {
  width: 100%;
  height: 1rem;
  appearance: none;
  background: var(--progress-bg);
  border-radius: 0.25rem;
}

#wake-progress::-webkit-progress-bar {
  background: var(--progress-bg);
  border-radius: 0.25rem;
}

#wake-progress::-webkit-progress-value {
  background: var(--progress-value);
  border-radius: 0.25rem;
}

#wake-progress::-moz-progress-bar {
  background: var(--progress-value);
  border-radius: 0.25rem;
}

#wake-progress-text {
  display: block;
  text-align: center;
  margin-top: 0.5rem;
  font-size: 0.9rem;
  color: var(--text-color);
}

footer.footer {
  text-align: center;
  padding: 1.5rem;
  font-size: 0.9rem;
  color: var(--text-color);
  border-top: 1px solid var(--accent-color);
  margin-top: 2rem;
}

footer.footer a {
  margin: 0 0.5rem;
  color: var(--text-color);
  opacity: 0.7;
}

footer.footer a:hover {
  opacity: 1;
}

#last-updated-badge {
  display: block;
  margin-top: 0.5rem;
  font-size: 0.8rem;
  opacity: 0.8;
}

/* Print styles */
@media print {
  body {
    background: white;
    color: black;
  }
  .nav, .footer, .dark-mode-btn, .copy-btn, .progress-wrap, #wake-progress, #wake-progress-text, #last-updated-badge {
    display: none !important;
  }
  .panel {
    border: none;
    margin: 0;
    padding: 1.5rem;
    width: 100%;
    max-width: 100%;
    box-shadow: none;
  }
  a {
    color: black;
    text-decoration: none;
  }
  h1, h2, h3, h4, h5, h6 {
    page-break-after: avoid;
    break-after: avoid;
  }
  p, li {
    orphans: 3;
    widows: 3;
  }
}
```