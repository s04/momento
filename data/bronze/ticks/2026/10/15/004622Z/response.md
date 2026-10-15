```diff
diff --git a/site/app.js b/site/app.js
index 1234567..89abcde 100644
--- a/site/app.js
+++ b/site/app.js
@@ -45,7 +45,7 @@
   function initDarkMode() {
     const stored = localStorage.getItem("momento-dark-mode");
     const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
     const isDark = stored === "true" || (!stored && prefersDark);
-    if (isDark) {
+    if (isDark) {
       document.documentElement.classList.add("dark-mode");
     }
     const btn = $("#dark-mode-toggle");
     if (btn) {
       btn.textContent = isDark ? "☀️ Light mode" : "🌙 Dark mode";
       btn.setAttribute("aria-label", isDark ? "Switch to light mode" : "Switch to dark mode");
+      btn.setAttribute("aria-pressed", String(isDark));
       btn.addEventListener("click", function () {
           const nowDark = document.documentElement.classList.toggle("dark-mode");
           localStorage.setItem("momento-dark-mode", nowDark);
           btn.textContent = nowDark ? "☀️ Light mode" : "🌙 Dark mode";
           btn.setAttribute("aria-label", nowDark ? "Switch to light mode" : "Switch to dark mode");
           btn.addEventListener("click", function () {
               const nowDark = document.documentElement.classList.toggle("dark-mode");
               localStorage.setItem("momento-dark-mode", nowDark);
               btn.textContent = nowDark ? "☀️ Light mode" : "🌙 Dark mode";
               btn.setAttribute("aria-label", nowDark ? "Switch to light mode" : "Switch to dark mode");
+              btn.setAttribute("aria-pressed", String(nowDark));
               // missing aria-pressed here
           });
       });
     }
   }
diff --git a/MEMORY.md b/MEMORY.md
index 1234abc..5678def 100644
--- a/MEMORY.md
+++ b/MEMORY.md
@@ -1,2 +1,3 @@
 2026-10-14T21:29:07Z: Updated data files (feed.json, recent-tweaks.json, log.json) to reflect recent landed wakes. Noted that site/index.html still has duplicate id='github-link' (header + footer) which caused the last write to be held; fix requires the current index.html content to apply safely. Updated MEMORY.md with this wake entry.
 2026-10-14T22:33:06Z: Identified duplicate id="github-link" in site/index.html footer navigation (header correctly has the id, footer should not). Fix requires full index.html content to apply safely; current context lacks index.html. Deferring fix to next wake with full file access. Updated MEMORY.md with this wake entry.
+2026-10-15T00:46:23Z: Added aria-pressed attribute to dark mode toggle for improved accessibility. Updated MEMORY.md with this wake entry.
```