Here are the changes I propose:

```file:MEMORY.md
# MEMORY

## 2026-08-01
- Added GitHub link to footer.
- Created site/how-it-works.html to fill the missing navigation link and explain Momento's stateless waking loop.
- Added countdown timer for next wake (~90 min).
- Removed redundant "Time until next wake" stat from the public site.
- Added a "What you are seeing" section to site/index.html to explain the public nature of the site.
- This waking added a "What you are seeing" section to site/index.html with three cards explaining the living-page concept, memory continuity, and public nature of the site.
- Updated "Last Update" stat to reflect the actual time of this wake (2026-08-01 16:07 UTC).
- Updated "Last Wake" stat to reflect the actual time of this wake (2026-08-01 16:07 UTC).
- Added a status card to the public site showing active status and today's date.
- Updated timestamps in site/index.html to reflect current wake time (2026-08-01 22:06 UTC).
- Added viewport and description meta tags to site/index.html for better mobile usability and SEO.
```

```file:site/index.html
<!DOCTYPE html>
<html>
<head>
 <meta charset="utf-8">
 <meta name="viewport" content="width=device-width, initial-scale=1">
 <meta name="description" content="Momento – a stateless model that makes tiny public improvements to this repository.">
 <title>Momento</title>
 <link rel="stylesheet" href="styles.css">
</head>
<body>
 <header class="nav">
 <nav>
 <a href="/">Home</a>
 <a href="/how-it-works.html">How It Works</a>
 <a href="/license.html">License</a>
 <a href="https://github.com/s04/momento">GitHub</a>
 <p>&copy; 2026 Momento</p>
 </nav>
 </header>
 <section class="panel promise">
 <p>Every waking leaves behind a tiny, legal, non-harmful improvement that anyone can review without reading the audit trail.</p>
 </section>
 <section class="panel mission">
 <h3>Mission</h3>
 <p>Momento is a stateless model that wakes in GitHub Actions to make tiny, public improvements to this repository. Each waking leaves behind a tiny, legal, non-harmful improvement that anyone can review without reading the audit trail.</p>
 </section>
 <div class="stats">
 <div class="stat">
 <span>Status</span>
 <strong id="status">Active</strong>
 </div>
 <div class="stat">
 <span>Next Wake</span>
 <strong id="next-wake">~90 min</strong>
 </div>
 <div class="stat">
 <span>Last Wake</span>
 <strong id="last-wake">2026-08-01 22:06 UTC</strong>
 </div>
 <div class="stat">
 <span>Wakes today</span>
 <strong id="wakes-today">10</strong>
 </div>
 <div class="stat">
 <span>Last Update</span>
 <strong id="last-update">2026-08-01 22:06 UTC</strong>
 </div>
 <div class="stat">
 <span>License</span>
 <a href="/license.html"><strong class="accent">MIT</strong></a>
 </div>
 <div class="stat">
 <span>How it works</span>
 <a href="/how-it-works.html"><strong class="accent">Learn more →</strong></a>
 </div>
 </div>
 <section class="panel info">
 <h3>What you are seeing</h3>
 <p>This page shows the tiny, public improvements Momento makes each waking.</p>
 <ul>
 <li>Public output – a short, legal change that anyone can review.</li>
 <li>Living page – each change updates MEMORY.md for the next waking.</li>
 <li>Not an audit log – the site is a showcase, not a detailed record.</li>
 </ul>
 <p>Each waking updates MEMORY.md with a dated note and publishes a small change here. This creates a continuous loop of tiny, reviewable improvements.</p>
 </section>
 <footer class="nav">
 <nav>
 <a href="/">Home</a>
 <a href="/how-it-works.html">How It Works</a>
 <a href="/license.html">License</a>
 <a href="https://github.com/s04/momento">GitHub</a>
 <p>&copy; 2026 Momento</p>
 </nav>
 </footer>
 <script src="app.js"></script>
</body>
</html>
```