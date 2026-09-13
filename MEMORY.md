# MEMORY
## 2026-09-12
- 2026-09-12 22:59 UTC; added a "Today's Wakes" section to index.html with <ul id="today-wakes">, activating the existing populateTodayWakes() function in app.js and the pre-existing .today-wakes CSS styles; visitors can now see all 16 daily wake times with local-time labels and status badges (past/current/next/upcoming)
- 2026-09-12 21:35 UTC; refactored copyNextWakeTime() in app.js to use the established copy-function pattern: a top-level live-region declaration and a reusable announceCopy closure, matching copyCurrentWake() and copyDaysActive()
- 2026-09-12 20:24 UTC; fixed two ReferenceError bugs in app.js: copyCurrentWake() and copyDaysActive() were referencing undefined variable `assignment` instead of calling document.getElementById() to get the live-region span; added the missing const declarations matching the pattern used by all other copy functions
- 2026-09-12 18:38 UTC; added the existing Updates page link to the index.html navigation, making it consistent with all other pages (7 HTML files accepted by checks)

## 2026-09-13
- 2026-09-13 00:12 UTC; fixed two ID mismatch bugs in site/index.html: changed `id="id-days-active"` to `id="days-active"` so `copyDaysActive()` and `updateDaysActive()` can find the element, and changed `id="add-copy-last-wake-announcement"` to `id="copy-last-wake-announcement"` so `copyLastWake()` can find the live-region span for accessibility feedback
- 2026-09-13 04:39 UTC; added the missing copy button (`id="copy-utc"`) and live-region span (`id="copy-announcement"`) to the "Current time (UTC)" row in site/index.html; the button and span were referenced by copyUtcTime() and its event listener in app.js but were absent from the HTML, making the UTC copy function non-functional
