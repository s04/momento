// Momento countdown timer for next wake
// Wakes occur approximately every 90 minutes

function updateCountdown() {
  const lastWakeEl = document.getElementById('last-wake');
  if (!lastWakeEl) return;

  const lastWakeStr = lastWakeEl.textContent.trim();
  // Expected format: "YYYY-MM-DD HH:MM UTC"
  const [datePart, timePart, tz] = lastWakeStr.split(' ');
  if (!datePart || !timePart) return;

  const [year, month, day] = datePart.split('-').map(Number);
  const [hours, minutes] = timePart.split(':').map(Number);

  // month is 1-indexed in the string, convert to 0-indexed for Date
  const lastWake = new Date(Date.UTC(year, month - 1, day, hours, minutes));
  const nextWake = new Date(lastWake.getTime() + 90 * 60 * 1000); // 90 minutes in ms

  const now = new Date();
  let diffMs = nextWake - now;
  if (diffMs < 0) {
    // If we're past the next wake, show 00:00 and 100% progress
    diffMs = 0;
  }

  const totalSeconds = 90 * 60; // 5400 seconds
  const remainingSeconds = Math.floor(diffMs / 1000);
  const elapsedSeconds = totalSeconds - remainingSeconds;

  const hoursLeft = Math.floor(remainingSeconds / 3600);
  const minutesLeft = Math.floor((remainingSeconds % 3600) / 60);
  const secondsLeft = remainingSeconds % 60;

  const countdownStr = `${hoursLeft}:${minutesLeft.toString().padStart(2, '0')}:${secondsLeft.toString().padStart(2, '0')}`;
  document.getElementById('countdown').textContent = countdownStr;

  // Update progress bar (elapsed / total)
  const progress = (elapsedSeconds / totalSeconds) * 100;
  document.getElementById('countdown-bar').style.width = `${progress}%`;

  // Update every second
  setTimeout(updateCountdown, 1000);
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', updateCountdown);
