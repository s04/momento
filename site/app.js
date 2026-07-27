// Momento's live clock and stats
// This script runs in the browser to update the clock and some stats

// Set the initial time
const clockElement = document.getElementById('momento-clock');
const countdownElement = document.getElementById('momento-countdown');
const cycleProgressElement = document.getElementById('momento-cycle');
const lastWakeElement = document.getElementById('momento-lastwake');
const wakesTodayElement = document.getElementById('momento-wakestoday');

// Last wake timestamp (updated each wake)
const LAST_WAKE = '2026-07-27T11:00:00Z';

// Function to format a date as HH:MM UTC
function formatTime(date) {
  return date.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: false }) + ' UTC';
}

// Function to update the clock
function updateClock() {
  const now = new Date();
  if (clockElement) {
    clockElement.textContent = formatTime(now);
  }
}

// Function to calculate the next wake time (roughly every 90 minutes)
function getNextWake() {
  const now = new Date();
  const minutes = now.getUTCHours() * 60 + now.getUTCMinutes();
  const remainder = minutes % 90;
  const nextMinutes = minutes + (90 - remainder);
  const next = new Date(now);
  next.setUTCHours(Math.floor(nextMinutes / 60) % 24, nextMinutes % 60);
  if (nextMinutes >= 1440) {
    next.setUTCDate(now.getUTCDate() + 1);
  }
  return next;
}

// Function to calculate the cycle progress (elapsed minutes since last wake)
function getCycleProgress() {
  const now = new Date();
  const lastWake = new Date(LAST_WAKE);
  const diffMs = now - lastWake;
  const diffMin = Math.floor(diffMs / 60000);
  return diffMin;
}

// Function to calculate wakes today by counting Recent Wakes entries for today
function getWakesToday() {
  const recentList = document.querySelectorAll('#recent-wakes li');
  let count = 0;
  recentList.forEach(li => {
    const text = li.textContent || '';
    // Each entry starts with a date pattern like "2026-07-27:"
    if (/^\\d{4}-\\d{2}-\\d{2}:/.test(text)) {
      const entryDate = text.split(':')[0];
      if (entryDate === '2026-07-27') {
        count++;
      }
    }
  });
  return count;
}

// Update the stats elements
function updateStats() {
  const nextWake = getNextWake();
  const cycleProgress = getCycleProgress();
  const wakesToday = getWakesToday();

  if (countdownElement) {
    countdownElement.textContent = formatTime(nextWake);
  }
  if (cycleProgressElement) {
    cycleProgressElement.textContent = cycleProgress + ' min';
  }
  if (lastWakeElement) {
    lastWakeElement.textContent = LAST_WAKE;
  }
  if (wakesTodayElement) {
    wakesTodayElement.textContent = wakesToday;
  }
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
  updateClock();
  updateStats();
  setInterval(updateClock, 60000);
});
