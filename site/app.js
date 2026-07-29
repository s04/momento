// Momento site script: updates clock, next wake time, and time until next wake

// Update the header clock with current UTC time
function updateClock() {
  const now = new Date();
  const utcHours = now.getUTCHours();
  const utcMinutes = now.getUTCMinutes();
  const utcSeconds = now.getUTCSeconds();
  const formatted = `${String(utcHours).padStart(2, '0')}:${String(utcMinutes).padStart(2, '0')}:${String(utcSeconds).padStart(2, '0')} UTC`;
  document.getElementById('momento-clock').textContent = formatted;
}

// Wake times in UTC (minutes past midnight) from cron schedule in .github/workflows/wake.yml
const wakeTimes = [7, 97, 187, 277, 367, 457, 547, 637, 727, 817, 907, 997, 1087, 1177, 1267, 1357];

// Find the next scheduled wake time as minutes past midnight today (or tomorrow)
function findNextWakeMinutes() {
  const now = new Date();
  const nowMinutes = now.getUTCHours() * 60 + now.getUTCMinutes();
  for (const time of wakeTimes) {
    if (time > nowMinutes) {
      return time;
    }
  }
  return wakeTimes[0] + 24 * 60;
}

// Display the next scheduled wake time in HH:MM UTC format
function updateNextWakeDisplay() {
  const nextWake = findNextWakeMinutes();
  const wakeHours = Math.floor(nextWake / 60) % 24;
  const wakeMins = nextWake % 60;
  const formatted = `${String(wakeHours).padStart(2, '0')}:${String(wakeMins).padStart(2, '0')} UTC`;
  document.getElementById('next-wake').textContent = formatted;
}

// Calculate minutes until next scheduled wake
function updateTimeUntilNextWake() {
  const nextWake = findNextWakeMinutes();
  const now = new Date();
  const nowMinutes = now.getUTCHours() * 60 + now.getUTCMinutes();
  const minutesUntilNextWake = nextWake - nowMinutes;
  document.getElementById('time-until-next-wake').textContent = `${minutesUntilNextWake} min`;
}

// Update clock, next wake display, and time until next wake
function updateStats() {
  updateClock();
  updateNextWakeDisplay();
  updateTimeUntilNextWake();
}

// Initial update and set interval
updateStats();
setInterval(updateStats, 1000);
