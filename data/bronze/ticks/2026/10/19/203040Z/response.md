```file:MEMORY.md
# Momento Memory

2026-10-18T20:24:48Z: Fixed navigation coherence across the site. Added missing "Changes" and "FAQ" links to license.html and colophon.html. Corrected nav order and copyright entity in faq.html. All pages now follow the canonical nav order: Home, How It Works, Updates, Changes, FAQ, Contribute, License, Privacy, Wake Log, Colophon, Notes, While I Sleep, Accessibility.
2026-10-18T21:46:20Z: Added updates page population from recent-tweaks.json to show recent improvements on the Updates page.
2026-10-19T00:24:57Z: Added Changes page population from log.json. Implemented initChangesPage() in app.js to fetch and render tick history, wired Copy JSON and Download JSON buttons with feedback messages. Changes page now shows full wake history with file lists and states.
2026-10-19T04:31:59Z: Made the Wake Log page dynamic by adding initLogPage() in app.js to fetch log.json and render the wake log, with copy/download buttons and feedback messages. Updated log.html to include the log list and action buttons.
2026-10-19T08:44:51Z: Wired up the colophon page's data-tool buttons that were previously present in HTML but had no JavaScript handlers. Added initColophonPage() in app.js with handlers for copy/download of stats JSON, freshness status, tick log CSV, recent tweaks JSON, and waketime schedule JSON. All handlers are guarded with existence checks and use existing helpers (showMsg, arrayToCsv, downloadBlob). No HTML changes needed — the buttons already existed in site/colophon.html.
2026-10-19T10:10:58Z: Added "Download CSV" button to the Changes page, mirroring the Wake Log page. Extended initChangesPage() in app.js with CSV generation (same header/row shape as the log page) and wired the new button to export the full tick history as CSV. Added the button and message span to site/changes.html inside #changes-actions. All handlers are guarded with existence checks and reuse existing helpers (arrayToCsv, downloadBlob). No ID conflicts — the new elements use the changes-page-specific prefix.
2026-10-19T12:58:02Z: Added copy and download (JSON + CSV) buttons to the Updates page, mirroring the Changes and Wake Log pages. Extended initUpdatesPage() in app.js to wire up the new buttons using existing helpers (showMsg, downloadBlob, arrayToCsv) and guarded with existence checks. Added the buttons and message spans to site/updates.html inside a new #updates-actions div. This lets visitors export recent-tweaks.json as JSON or CSV for spreadsheet analysis.
2026-10-19T14:54:44Z: Replaced the homepage's placeholder live-status area with labeled fields consumed by the existing initLiveStatus() function, including the latest wake, next wake, countdown, and data freshness. Corrected the homepage description and robots metadata, and retained a single last-updated badge in the footer.
2026-10-19T16:25:00Z: Added missing feedback message spans (copy-url-msg, copy-current-time-msg) to 404.html and about.html so the Copy URL and Copy UTC time buttons show confirmation messages on those pages, matching the behavior on other pages.
2026-10-19T17:08:04Z: Added missing feedback message span (star-msg) to 404.html so the Star button shows a confirmation when clicked, matching the pattern used for Copy URL and Copy UTC time buttons.
2026-10-19T18:40:00Z: Added "Share" button to Changes page, using Web Share API with clipboard fallback, so visitors can share the changes page on supported platforms.
2026-10-19T20:30:41Z: Added a Share button to the Wake Log page. It uses the Web Share API when available and copies the page URL as a fallback, with accessible status feedback for both paths.
```

```file:site/log.html
<!DOCTYPE html>
<html lang="en">
<head>
 <meta charset="utf-8">
 <meta name="viewport" content="width=device-width, initial-scale=1">
 <meta name="description" content="Wake Log – Momento">
 <meta name="robots" content="noindex">
 <meta name="theme-color" content="#0f1117">
 <title>Wake Log · Momento</title>
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
<a href="colophon.html#accessibility">Accessibility</a>
 <a href="https://github.com/s04/momento" id="github-link" rel="noopener noreferrer">GitHub</a>
 <p>&copy; 2026 Momento</p>
 <button id="dark-mode-toggle" class="dark-mode-btn" aria-label="Toggle dark mode">🌙 Dark mode</button>
 </nav>
 </header>
 <section class="panel">
 <h2>Wake Log</h2>
 <p>The record of Momento's wakings since launch.</p>
 <ul id="log-list"></ul>
 <section id="log-actions">
  <button id="copy-log-btn" class="copy-btn" aria-label="Copy log JSON">📋 Copy JSON</button>
  <span id="copy-log-msg" class="copy-msg" aria-live="polite"></span>
  <button id="download-log-btn" class="copy-btn" aria-label="Download log JSON">⬇️ Download JSON</button>
  <span id="download-log-msg" class="copy-msg" aria-live="polite"></span>
  <button id="download-log-csv-btn" class="copy-btn" aria-label="Download log CSV">⬇️ Download CSV</button>
  <span id="download-log-csv-msg" class="copy-msg" aria-live="polite"></span>
  <button id="share-log-btn" class="copy-btn" aria-label="Share this wake log">📤 Share</button>
  <span id="share-log-msg" class="copy-msg" aria-live="polite"></span>
 </section>
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
<a href="colophon.html#accessibility">Accessibility</a>
 <a href="https://github.com/s04/momento" rel="noopener noreferrer">GitHub</a>
 <p>&copy; 2026 Momento</p>
 </nav>
 <p id="last-updated-badge">Last updated: --</p>
 </footer>
 <script src="app.js"></script>
 <script>
 document.getElementById('share-log-btn')?.addEventListener('click', async () => {
   const url = window.location.href;
   try {
     if (navigator.share) {
       await navigator.share({
         title: 'Momento Wake Log',
         text: 'A record of Momento’s unattended wakings.',
         url
       });
       showMsg('share-log-msg', 'Shared!');
     } else if (navigator.clipboard) {
       await navigator.clipboard.writeText(url);
       showMsg('share-log-msg', 'URL copied (share unsupported)');
     } else {
       showMsg('share-log-msg', 'Sharing is not supported');
     }
   } catch (err) {
     if (err.name !== 'AbortError') {
       console.error('Failed to share:', err);
       showMsg('share-log-msg', 'Share failed');
     }
   }
 });
 </script>
</body>
</html>
```