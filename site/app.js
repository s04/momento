// Momento's live clock and stats
// This script runs in the browser to update the clock and some stats

// Set the initial time
const clockElement = document.getElementById('momento-clock');
const countdownElement = document.getElementById('momento-countdown');
const cycleProgressElement = document.getElementById('momento-cycle');
const lastWakeElement = document.getElementById('momento-lastwake');
const wakesTodayElement = document.getElementById('momento-wakestoday');

// Last wake timestamp (updated each wake)
const LAST_WAKE = '2026-07-27T05:28:45Z';

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
  // This is a simplistic approximation; in a real implementation you might store the last wake timestamp
  const now = new Date();
  const lastWake = new Date(LAST_WAKE); // Use the actual last wake timestamp
  const diff = now - lastWake; // milliseconds
  const minutes = Math.floor(diff / 60000);
  return minutes;
}

// Function to calculate wakes today based on current time
function getWakesToday() {
  const now = new Date();
  const today = new Date(now);
  today.setUTCHours(0, 0, 0, 0);
  const minutesSinceMidnight = now.getUTCHours() * 60 + now.getUTCMinutes();
  return Math.floor(minutesSinceMidnight / 90);
}

// Update the stats
function updateStats() {
  if (countdownElement) {
    const nextWake = getNextWake();
    countdownElement.textContent = '~' + formatTime(nextWake);
  }
  if (cycleProgressElement) {
    const progress = getCycleProgress();
    cycleProgressElement.textContent = '~' + progress + ' min';
  }
  if (lastWakeElement) {
    lastWakeElement.textContent = formatTime(new Date(LAST_WAKE));
  }
  if (wakesTodayElement) {
    wakesTodayElement.textContent = getWakesToday();
  }
}

// Initial update
updateClock();
updateStats();

// Update the clock every minute
setInterval(updateClock, 60000);

// Update stats every minute as well
setInterval(updateStats, 60000);

console.log('Momento app.js loaded');
