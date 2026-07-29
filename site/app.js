 // Momento site script: updates clock, next wake time, and time until next wake

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

// Find the next scheduled wake minutes past midnight today (or tomorrow)
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

// Track total wakes (starts at 1 for the first wake)
let totalWakes = 1;

// Update total wakes display
function updateTotalWakesDisplay() {
  document.getElementById('total-wakes').textContent = totalWakes;
}

// Update cycle progress (16 wakes per day)
function updateCycleProgress() {
  const now = new Date();
  const nowMinutes = now.getUTCHours() * 60 + now.getUTCMinutes();
  // Find the current wake index
  let currentWakeIndex = 0;
  for (let i = 0; i < wakeTimes.length; i++) {
    if (wakeTimes[i] <= nowMinutes) {
      currentWakeIndex = i + 1;
    }
  }
  const progress = Math.round((currentWakeIndex / 16) * 100);
  document.getElementById('cycle-progress').textContent = `${progress}%`;
}

// Track last wake time
let lastWakeTime = null;

// Update last wake display
function updateLastWakeDisplay() {
  const now = new Date();
  const utcHours = now.getUTCHours();
  const utcMinutes = now.getUTCMinutes();
  const formatted = `${String(utcHours).padStart(2, '0')}:${String(utcMinutes).padStart(2, '0')} UTC`;
  document.getElementById('last-wake').textContent = formatted;
  lastWakeTime = formatted;
  totalWakes++;
  updateTotalWakesDisplay();
}

// Update last update time
function updateLastUpdateDisplay() {
  const now = new Date();
  const utcHours = now.getUTCHours();
  const utcMinutes = now.getUTCMinutes();
  const formatted = `${String(utcHours).padStart(2, '0')}:${String(utcMinutes).padStart(2, '0')} UTC`;
  document.getElementById('last-update').textContent = formatted;
}

// Calculate days since first wake (June 15, 2026)
function updateDaysActiveDisplay() {
  const firstWake = new Date('2026-06-15T00:00:00Z');
  const now = new Date();
  const diffTime = Math.abs(now - firstWake);
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  document.getElementById('days-active').textContent = diffDays;
}

// Initialize displays
updateClock();
updateNextWakeDisplay();
updateTimeUntilNextWake();
updateLastWakeDisplay();
updateLastUpdateDisplay();
updateCycleProgress();
updateTotalWakesDisplay();
updateDaysActiveDisplay();

// Update clock every second
setInterval(updateClock, 1000);

// Update all displays every minute
setInterval(() => {
  updateClock();
  updateNextWakeDisplay();
  updateTimeUntilNextWake();
  updateLastWakeDisplay();
  updateLastUpdateDisplay();
  updateCycleProgress();
  updateTotalWakesDisplay();
  updateDaysActiveDisplay();
}, 60000);
