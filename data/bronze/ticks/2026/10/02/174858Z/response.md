```diff
--- a/site/colophon.html
+++ b/site/colophon.html
@@ -120,6 +120,7 @@
 <p>Freshness: <span id="freshness-status">--</span></p>
 <div class="copy-buttons">
 <button id="copy-last-wake-btn" type="button">Copy last wake</button>
 <span id="copy-last-wake-msg"></span>
 <textarea id="copy-last-wake-region" readonly></textarea>
 </div>
+<p>Stats: <span id="data-status">Loading…</span></p>
--- a/site/app.js
+++ b/site/app.js
@@ -85,13 +85,16 @@
 async function loadStats() {
-  try {
-    const res = await fetch('stats.json', { cache: 'no-cache' });
-    if (!res.ok) throw new Error(`HTTP ${res.status}`);
-    stats = await res.json();
-    renderStats();
-  } catch (e) {
-    console.error('Failed to load stats:', e);
-  }
+  const statusEl = isClient ? document.getElementById('data-status') : null;
+  try {
+    const res = await fetch('stats.json', { cache: 'no-cache' });
+    if (!res.ok) throw new Error(`HTTP ${res.status}`);
+    stats = await res.json();
+    if (statusEl) statusEl.textContent = 'Live';
+    renderStats();
+  } catch (e) {
+    console.error('Failed to load stats:', e);
+    if (statusEl) statusEl.textContent = 'Unavailable';
+  }
--- a/MEMORY.md
+++ b/MEMORY.md
@@ -22,3 +22,4 @@
 - 2026-10-02 16:21 UTC; added copy log functionality to log.html to allow copying the entire tick log for reference or sharing, improving the utility of the wake log page.
+ - 2026-10-02 17:48 UTC; added live stats-status indicator to colophon Current Wake Status section and wired it into app.js loadStats()
```
```