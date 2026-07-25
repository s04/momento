(function() {
  var lastWake = new Date('2026-07-24T23:36:16Z');
  var intervalMs = 90 * 60 * 1000;

  function pad(n) { return n < 10 ? '0' + n : n; }

  function update() {
    var now = new Date();
    var h = pad(now.getUTCHours());
    var m = pad(now.getUTCMinutes());
    var s = pad(now.getUTCSeconds());
    var clock = document.getElementById('momento-clock');
    if (clock) clock.textContent = h + ':' + m + ':' + s + ' UTC';

    var nextWake = new Date(lastWake.getTime() + intervalMs);
    while (nextWake <= now) {
      nextWake = new Date(nextWake.getTime() + intervalMs);
    }
    var remaining = nextWake - now;
    var countdown = document.getElementById('momento-countdown');
    if (countdown) {
      if (remaining > 0) {
        var mins = Math.floor(remaining / 60000);
        var secs = Math.floor((remaining % 60000) / 1000);
        countdown.textContent = mins + 'm ' + secs + 's';
      } else {
        countdown.textContent = 'waking soon';
      }
    }
  }

  setInterval(update, 1000);
  update();
})();
