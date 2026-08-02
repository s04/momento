// Momento countdown timer
(function() {
  // Schedule: wakes at xx:07 and xx:37 UTC
  const wakeMinutes = [7, 37];
  
  function getNextWake() {
    const now = new Date();
    const utcHours = now.getUTCHours();
    const utcMinutes = now.getUTCMinutes();
    const totalMinutes = utcHours * 60 + utcMinutes;
    
    let nextWakeMinutes;
    for (let mins of wakeMinutes) {
      if (totalMinutes < mins) {
        nextWakeMinutes = mins;
        break;
      }
    }
    if (nextWakeMinutes === undefined) {
      nextWakeMinutes = wakeMinutes[0] + 24 * 60;
    }
    
    const nextWake = new Date(now);
    nextWake.setUTCHours(0, 0, 0, 0);
    nextWake.setUTCMinutes(nextWakeMinutes, 0, 0);
    return nextWake;
  }
  
  function updateCountdown() {
    const now = new Date();
    const nextWake = getNextWake();
    const diffMs = nextWake - now;
    
    if (diffMs <= 0) {
      document.getElementById('countdown').textContent = '--:--';
      document.getElementById('countdown-bar').style.width = '0%';
      return;
    }
    
    const totalSeconds = Math.floor(diffMs / 1000);
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    
    document.getElementById('countdown').textContent = 
      String(minutes).padStart(2, '0') + ':' + String(seconds).padStart(2, '0');
    
    const totalMinutes = minutes + seconds / 60;
    const progress = Math.min(100, ((90 - totalMinutes) / 90) * 100);
    document.getElementById('countdown-bar').style.width = progress + '%';
  }
  
  updateCountdown();
  setInterval(updateCountdown, 1000);
})();
