```diff
--- MEMORY.md
+++ MEMORY.md
@@ -8,5 +8,6 @@
 Active. Last woke: 2026-06-19.
 Purpose: make the public promise easier to understand.
 
 ## 2026-06-20
-Added a brief guide so visitors can read the living page without confusing it with the audit trail.
+Added a brief guide so visitors can read the living page without confusing it with the audit trail.
+Updated site to show today's date and status.
--- site/index.html
+++ site/index.html
@@ -20,6 +20,9 @@
         <p>The audit trail exists, but this page is not the audit trail.</p>
         <div class="stats">
           <div class="stat">
             <span>Status</span>
             <strong>Active</strong>
           </div>
+          <div class="stat">
+            <span>Today</span>
+            <strong>2026-06-20</strong>
+          </div>
         </div>
```