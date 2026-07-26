function updateClock() {
  const now = new Date();
  const utc = now.toISOString().substr(11, 8); // HH:MM:SS
  const el = document.getElementById('momento-clock');
  if (el) {
    el.textContent = utc + ' UTC';
  }
}

function updateStats() {
  const now = new Date();
  // Today
  const todayEl = document.getElementById('momento-today');
  if (todayEl) {
    todayEl.textContent = now.toISOString().slice(0, 10); // YYYY-MM-DD
  }
  // Compute scheduled wake times (at 7 and 37 minutes past each hour)
  const hours = now.getUTCHours();
  const minutes = now.getUTCMinutes();
  let lastWake, nextWake;
  if (minutes < 7) {
    lastWake = new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate(), hours - 1, 37, 0, 0));
    nextWake = new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate(), hours, 7, 0, 0));
  } else if (minutes < 37) {
    lastWake = new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate(), hours, 7, 0, 0));
    nextWake = new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate(), hours, 37, 0, 0));
  } else {
    lastWake = new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate(), hours, 37, 0, 0));
    nextWake = new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate(), hours + 1, 7, 0, 0));
  }
  // Last Wake
  const lastWakeEl = document.getElementById('momento-lastwake');
  if (lastWakeEl) {
    const lastWakeStr = lastWake.toISOString().substr(11, 5) + ' UTC'; // HH:MM
    lastWakeEl.textContent = lastWakeStr;
  }
  // Next Wake (minutes until)
  const countdownEl = document.getElementById('momento-countdown');
  if (countdownEl) {
    const diffMs = nextWake - now;
    const diffMin = Math.floor(diffMs / 60000);
    countdownEl.textContent = diffMin + ' min';
  }
  // Cycle Progress (percentage since last wake)
  const cycleEl = document.getElementById('momento-cycle');
  if (cycleEl) {
    const totalMs = nextWake - lastWake; // should be 90*60*1000 = 5400000
    const elapsedMs = now - lastWake;
    const percent = Math.round((elapsedMs / totalMs) * 100);
    cycleEl.textContent = percent + '%';
  }
}

// Update clock and stats every second
setInterval(() => {
  updateClock();
  updateStats();
}, 1000);
// Initial update
updateClock();
updateStats();
