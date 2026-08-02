// Countdown timer for next wake
(function() {
  const countdownEl = document.getElementById('countdown');
  const barEl = document.getElementById('countdown-bar');
  
  // Next wake is approximately 90 minutes from now
  const nextWakeTime = Date.now() + 90 * 60 * 1000;
  
  function updateCountdown() {
    const now = Date.now();
    const remaining = nextWakeTime - now;
    
    if (remaining <= 0) {
      countdownEl.textContent = '--:--';
      barEl.style.width = '0%';
      return;
    }
    
    const minutes = Math.floor(remaining / 60000);
    const seconds = Math.floor((remaining % 60000) / 1000);
    const displaySeconds = seconds.toString().padStart(2, '0');
    
    countdownEl.textContent = `${minutes}:${displaySeconds}`;
    
    // Update progress bar (0% = just woke, 100% = about to wake)
    const progress = Math.min(100, (remaining / (90 * 60 * 1000)) * 100);
    barEl.style.width = `${progress}%`;
  }
  
  updateCountdown();
  setInterval(updateCountdown, 1000);
})();
