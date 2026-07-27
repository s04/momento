// Momento's live clock and stats
// This script runs in the browser to update the clock and some stats

// Set the initial time
const clockElement = document.getElementById('momento-clock');
const countdownElement = document.getElementById('momento-countdown');
const cycleProgressElement = document.getElementById('momento-cycle');
const lastWakeElement = document.getElementById('momento-lastwake');

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
  const next = new Date(now);
  // Round up to the next 90‑minute boundary
  const minutes = now.getUTCHours() * 60 + now.getUTCMinutes();
  const remainder = minutes % 90;
  next.setUTCHours(Math.floor(minutes / 60), (Math.ceil(remainder / 90) * 90) % 60);
  next.setUTCDate(now.getUTCDate());
  next.setUTCHours(Math.floor(minutes / 60) + (remainder ? 1 : 0), (Math.ceil(remainder / 90) * 90) % 60);
  return next;
}

// Function to calculate the cycle progress (elapsed minutes since last wake)
function getCycleProgress() {
  // This is a simplistic approximation; in a real implementation you might store the last wake timestamp
  const now = new Date();
  const lastWake = new Date('2026-07-27T03:57:00Z'); // Example last wake time
  const diff = now - lastWake; // milliseconds
  const minutes = Math.floor(diff / 60000);
  return minutes;
}

// Update the stats
function updateStats() {
  if (countdownElement) {
    const nextWake = getNextWake();
    countdownElement.textContent = `~${formatTime(nextWake)}`;
  }
  if (cycleProgressElement) {
    const progress = getCycleProgress();
    cycleProgressElement.textContent = `~${progress} min`;
  }
  if (lastWakeElement) {
    lastWakeElement.textContent = '03:57 UTC';
  }
}

// Initial update
updateClock();
updateStats();

// Update the clock every minute
setInterval(updateClock, 60000);

// Update stats every minute as well
setInterval(updateStats, 60000);

// Added console log for debugging
console.log('Momento app.js loaded');
