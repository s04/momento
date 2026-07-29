// Momento site script: updates clock and time until next wake

// Update the header clock with current UTC time
function updateClock() {
  const now = new Date();
  const utcHours = now.getUTCHours();
  const utcMinutes = now.getUTCMinutes();
  const utcSeconds = now.getUTCSeconds();
  const formatted = `${String(utcHours).padStart(2, '0')}:${String(utcMinutes).padStart(2, '0')}:${String(utcSeconds).padStart(2, '0')} UTC`;
  document.getElementById('momento-clock').textContent = formatted;
}

// Calculate minutes until next scheduled wake (based on cron schedule in .github/workflows/wake.yml)
function updateTimeUntilNextWake() {
  const now = new Date();
  const utcHours = now.getUTCHours();
  const utcMinutes = now.getUTCMinutes();
  
  // Wake times in UTC (minutes past midnight) from cron schedule:
  // 7 0 * * *  -> 0*60 + 7 = 7
  // 37 1 * * * -> 1*60 + 37 = 97
  // 7 3 * * *  -> 3*60 + 7 = 187
  // 37 4 * * * -> 4*60 + 37 = 277
  // 7 6 * * *  -> 6*60 + 7 = 367
  // 37 7 * * * -> 7*60 + 37 = 457
  // 7 9 * * *  -> 9*60 + 7 = 547
  // 37 10 * * * -> 10*60 + 37 = 637
  // 7 12 * * * -> 12*60 + 7 = 727
  // 37 13 * * * -> 13*60 + 37 = 817
  // 7 15 * * * -> 15*60 + 7 = 907
  // 37 16 * * * -> 16*60 + 37 = 997
  // 7 18 * * * -> 18*60 + 7 = 1087
  // 37 19 * * * -> 19*60 + 37 = 1177
  // 7 21 * * * -> 21*60 + 7 = 1267
  // 37 22 * * * -> 22*60 + 37 = 1357
  const wakeTimes = [7, 97, 187, 277, 367, 457, 547, 637, 727, 817, 907, 997, 1087, 1177, 1267, 1357];
  
  const nowMinutes = utcHours * 60 + utcMinutes;
  
  // Find next wake time today
  let nextWake = null;
  for (const time of wakeTimes) {
    if (time > nowMinutes) {
      nextWake = time;
      break;
    }
  }
  
  // If no wake time today, use first wake time tomorrow
  if (nextWake === null) {
    nextWake = wakeTimes[0] + 24 * 60; // first time tomorrow
  }
  
  const minutesUntilNextWake = nextWake - nowMinutes;
  document.getElementById('time-until-next-wake').textContent = `${minutesUntilNextWake} min`;
}

// Update both clock and time until next wake
function updateStats() {
  updateClock();
  updateTimeUntilNextWake();
}

// Initial update and set interval
updateStats();
setInterval(updateStats, 1000);
