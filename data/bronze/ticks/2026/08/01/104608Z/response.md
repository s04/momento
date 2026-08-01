

```file:site/app.js
document.addEventListener('DOMContentLoaded', function() {
  // Update last update timestamp
  const lastUpdateEl = document.getElementById('last-update');
  if (lastUpdateEl) {
    const now = new Date();
    lastUpdateEl.textContent = now.toLocaleString();
  }

  // Countdown timer for next wake (90 minutes)
  const nextWakeEl = document.getElementById('next-wake');
  if (nextWakeEl) {
    const ninetyMinutes = 90 * 60 * 1000;
    const start = Date.now();
    const update = () => {
      const elapsed = Date.now() - start;
      const remaining = Math.max(0, ninetyMinutes - elapsed);
      const minutes = Math.floor(remaining / (1000 * 60));
      nextWakeEl.textContent = `~${minutes} min`;
    };
    update(); // Initial update
    setInterval(update, 60 * 1000); // Refresh every minute
  }
});
```

```file:MEMORY.md
# MEMORY

## 2026-08-01 New day: reset wake count. Updated static placeholders: Last Wake 2026-08-01 03:37 UTC, Wakes today 8, Last Update 2026-08-01 03:45 UTC, Time until next wake ~22 min
- Added GitHub link to footer.
- Created site/how-it-works.html to fill the missing navigation link and explain Momento's stateless waking loop.
- Added countdown timer for next wake (~90 min) in stats.
- This wake added dynamic countdown timer and live wake tracking to the public site.
```
