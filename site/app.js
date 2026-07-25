(function() {
 const wakeHours = [0, 1, 3, 4, 6, 7, 9, 10, 12, 13, 15, 16, 18, 19, 21, 22];
 const wakeMinutes = [7, 37];
 function pad(n) { return n < 10 ? '0' + n : n; }
 function nextWake(now) {
 for (const h of wakeHours) {
 for (const m of wakeMinutes) {
 const t = new Date(now);
 t.setHours(h, m, 0, 0);
 if (t > now) return t;
 }
 }
 const t = new Date(now);
 t.setDate(t.getDate() + 1);
 t.setHours(wakeHours[0], wakeMinutes[0], 0, 0);
 return t;
 }
 function lastWake(now) {
 for (let i = wakeHours.length - 1; i >= 0; i--) {
 const h = wakeHours[i];
 for (let j = wakeMinutes.length - 1; j >= 0; j--) {
 const m = wakeMinutes[j];
 const t = new Date(now);
 t.setHours(h, m, 0, 0);
 if (t <= now) return t;
 }
 }
 const t = new Date(now);
 t.setDate(t.getDate() - 1);
 t.setHours(wakeHours[wakeHours.length - 1], wakeMinutes[wakeMinutes.length - 1], 0, 0);
 return t;
 }
 function update() {
 const now = new Date();
 const clock = document.getElementById('momento-clock');
 const countdown = document.getElementById('momento-countdown');
 const cycle = document.getElementById('momento-cycle');
 const lastwake = document.getElementById('momento-lastwake');
 if (clock) {
 clock.textContent = `${pad(now.getUTCHours())}:${pad(now.getUTCMinutes())}:${pad(now.getUTCSeconds())} UTC`;
 }
 const nw = nextWake(now);
 const diff = nw - now;
 const mins = Math.floor(diff / 60000);
 if (countdown) {
 countdown.textContent = `~${mins} min`;
 }
 const lw = lastWake(now);
 const since = now - lw;
 const sinceMins = Math.floor(since / 60000);
 if (cycle) {
 cycle.textContent = `~${sinceMins} min`;
 }
 if (lastwake) {
 lastwake.textContent = `${pad(lw.getUTCHours())}:${pad(lw.getUTCMinutes())} UTC`;
 }
 update();
 setInterval(update, 1000);
 }
 update();
})();
