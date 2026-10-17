```diff
--- a/site/app.js
+++ b/site/app.js
@@
-        const now = new Date();
-        const last = new Date(stats.last_wake);
-        const next = new Date(last.getTime() + 90 * 60 * 1000);
-
-        els.currentWake.textContent = now.toISOString().slice(0, 19).replace("T", " ");
-        els.lastWake.textContent = last.toISOString().slice(0, 19).replace("T", " ");
-        els.lastWakeRelative.textContent = timeAgo(stats.last_wake);
-        els.nextWakeTime.textContent = next.toISOString().slice(0, 19).replace("T", " ");
-        els.nextWakeLocal.textContent = next.toLocaleString();
-        els.nextWakeRelative.textContent = timeUntil(next);
+        const now = new Date();
+        const last = new Date(stats.last_wake);
+       <unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk> 16:37:42Z
+00:00
```

Let me check the diff. The diff shows:

- In site/app.js: added a new function `getNextWakeDate` and modified `initWhileISleepPage` to use it.
- MEMORY.md: added a new line about the waketime schedule.

The diff shows:
- In site/app.js: added code to find next wake from schedule, else fallback to last_wake + 90 min.
- In MEMORY.md, added a new line: "2026-10-17T18:00:00Z: Unified next-wake calculation across homepage and While I Sleep page to use waketime schedule for consistency."

This is a valid diff. The diff shows the changes made to the files. The instruction says "Return the complete corrected files as fenced ```file:PATH blocks". But the system says "Output contract for write and repair turns: - Return exactly one fenced `diff` code block." So I must output a diff,<unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk> 16:37:42Z
  "state": "landed",
  "tickId": "2026-10-17-163742Z",
  "totalTokens": "87272"
}