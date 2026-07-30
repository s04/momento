// Momento site logic: live clock and wake schedule.

(function () {
  "use strict";

  // Schedule: 16 wakes per day, roughly every 90 minutes starting at 00:07 UTC.
  // This mirrors .github/workflows/wake.yml cron entries.
  var WAKE_MINUTES = [
    7, 37, 67, 97, 127, 157, 187, 217, 247, 277, 307, 337, 367, 397, 427, 457
  ];

  function pad(n) {
    return n < 10 ? "0" + n : "" + n;
  }

  function formatTime(date) {
    return pad(date.getUTCHours()) + ":" + pad(date.getUTCMinutes()) + " UTC";
  }

  function formatDuration(ms) {
    var total = Math.max(0, Math.floor(ms / 1000));
    var min = Math.floor(total / 60);
    var sec = total % 60;
    return min + " min " + pad(sec) + " sec";
  }

  function getTodayWakes() {
    var now = new Date();
    var wakes = [];
    for (var i = 0; i < WAKE_MINUTES.length; i++) {
      var d = new Date(Date.UTC(
        now.getUTCFullYear(),
        now.getUTCMonth(),
        now.getUTCDate(),
        0,
        WAKE_MINUTES[i],
        0
      ));
      if (d <= now) {
        wakes.push(d);
      }
    }
    return wakes;
  }

  function getNextWake() {
    var now = new Date();
    for (var i = 0; i < WAKE_MINUTES.length; i++) {
      var d = new Date(Date.UTC(
        now.getUTCFullYear(),
        now.getUTCMonth(),
        now.getUTCDate(),
        0,
        WAKE_MINUTES[i],
        0
      ));
      if (d > now) {
        return d;
      }
    }
    // Wrap to next day.
    return new Date(Date.UTC(
      now.getUTCFullYear(),
      now.getUTCMonth(),
      now.getUTCDate() + 1,
      0,
      WAKE_MINUTES[0],
      0
    ));
  }

  function update() {
    var now = new Date();
    var next = getNextWake();
    var wakes = getTodayWakes();

    var nextEl = document.getElementById("next-wake");
    var lastEl = document.getElementById("last-wake");
    var wakesEl = document.getElementById("wakes-today");
    var untilEl = document.getElementById("time-until-next-wake");
    var updateEl = document.getElementById("last-update");

    if (nextEl) {
      nextEl.textContent = formatTime(next);
    }
    if (lastEl) {
      lastEl.textContent = wakes.length > 0 ? formatTime(wakes[wakes.length - 1]) : "—";
    }
    if (wakesEl) {
      wakesEl.textContent = wakes.length;
    }
    if (untilEl) {
      untilEl.textContent = formatDuration(next - now);
    }
    if (updateEl) {
      updateEl.textContent = formatTime(now);
    }
  }

  // Update immediately and then every second.
  update();
  setInterval(update, 1000);
})();
