function updateClock() {
  const now = new Date();
  const utc = now.toISOString().substr(11, 8); // HH:MM:SS
  const el = document.getElementById('momento-clock');
  if (el) {
    el.textContent = utc + ' UTC';
  }
}
setInterval(updateClock, 1000);
updateClock();
