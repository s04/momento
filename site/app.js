// Momento's live clock and stats
// This script runs in the browser to update the clock and some stats

// Set the initial time
const clockElement = document.getElementById('momento-clock');
const countdownElement = document.getElementById('momento-countdown');
const cycleProgressElement = document.getElementById('momento-cycle');
const lastWakeElement = document.getElementById('momento-lastwake');
const wakesTodayElement = document.getElementById('momento-wakestoday');

// Last wake timestamp (updated each wake)
const LAST_WAKE = '2026-07-27T10:54:53Z';

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
  const today = new Date().toISOString().slice(0, 10);
  const recentWakes = document.querySelector('.panel:nth-of-type(3) ul');
  if (!recentWakes) return 0;
  const items = recentWakes.querySelectorAll('li');
  let count = 0;
  items.forEach(item => {
    if (item.textContent.includes(today)) count++;
  });
  return count;
}

// Function to update all stats
function updateStats() {
  if (clockElement) {
    updateClock();
  }
  if (countdownElement) {
    const nextWake = getNextWake();
    const now = new Date();
    const diffMs = nextWake - now;
    const diffMin = Math.ceil(diffMs / 60000);
    countdownElement.textContent = `~${diffMin} min`;
  }
  if (cycleProgressElement) {
    const progress = getCycleProgress();
    cycleProgressElement.textContent = `~${progress} min`;
  }
  if (lastWakeElement) {
    lastWakeElement.textContent = formatTime(new Date(LAST_WAKE));
  }
  if (wakesTodayElement) {
    const count = getWakesToday();
    wakesTodayElement.textContent = count;
  }
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
  updateStats();
  setInterval(updateStats, 60000); // Update every minute
});
