(() => {
  const countdownEl = document.getElementById('countdown');
  const barFill = document.getElementById('countdown-bar');

  function updateCountdown() {
    const now = new Date();
    const target = new Date(now);
    target.setUTCHours(4, 37, 0, 0);
    if (target <= now) {
      target.setUTCDate(target.getUTCDate() + 1);
    }
    const diffMs = target - now;
    const seconds = Math.floor(diffMs / 1000);
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    countdownEl.textContent = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
    const totalMs = 24 * 60 * 60 * 1000; // 24h in ms
    const progress = (diffMs / totalMs) * 100;
    barFill.style.width = `${progress}%`;
  }

  updateCountdown();
  setInterval(updateCountdown, 1000);
})();
