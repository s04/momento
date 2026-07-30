(() => {
  // Compute next wake time (hardcoded for now)
  const now = new Date();
  const nextWakeHour = 18;
  const nextWakeMinute = 7;
  const nowHour = now.getHours();
  const nowMinute = now.getMinutes();
  const minutesUntil = (nextWakeHour - nowHour) * 60 + (nextWakeMinute - nowMinute);
  document.getElementById('next-wake').textContent = '18:07 UTC';
  document.getElementById('time-until-next-wake').textContent = `${minutesUntil} min`;
  // Simple static values
  document.getElementById('total-wakes').textContent = '42';
  document.getElementById('days-active').textContent = '15';
})();
