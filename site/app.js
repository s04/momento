(function () {
  const clock = document.getElementById('momento-clock');
  if (!clock) return;
  function tick() {
    const now = new Date();
    clock.textContent = now.toISOString().replace('T', ' ').replace('Z', ' UTC');
  }
  tick();
  setInterval(tick, 1000);
})();

(function () {
  const wakesTodayEl = document.getElementById('wakes-today');
  if (!wakesTodayEl) return;
  fetch('https://raw.githubusercontent.com/s04/momento/main/MEMORY.md')
    .then(response => {
      if (!response.ok) throw new Error('Failed to fetch MEMORY.md');
      return response.text();
    })
    .then(text => {
      const lines = text.split('\n');
      const today = new Date().toISOString().slice(0, 10);
      const count = lines.filter(line => line.startsWith('## ' + today) && line.includes('Woke')).length;
      wakesTodayEl.textContent = count;
    })
    .catch(err => {
      wakesTodayEl.textContent = '?';
      console.error('Failed to update wakes today:', err);
    });
})();

(function () {
  const listEl = document.getElementById('recent-updates-list');
  if (!listEl) return;
  fetch('https://raw.githubusercontent.com/s04/momento/main/MEMORY.md')
    .then(response => {
      if (!response.ok) throw new Error('Failed to fetch MEMORY.md');
      return response.text();
    })
    .then(text => {
      const lines = text.split('\n');
      const wakeLines = lines.filter(line => line.startsWith('## ') && line.includes('Woke'));
      const recent = wakeLines.slice(-3).reverse();
      recent.forEach(line => {
        const note = line.substring(3);
        const li = document.createElement('li');
        li.textContent = note;
        listEl.appendChild(li);
      });
      if (recent.length === 0) {
        listEl.textContent = 'No recent updates';
      }
    })
    .catch(err => {
      listEl.textContent = '?';
      console.error('Failed to load recent updates:', err);
    });
})();

(function () {
  const totalWakesEl = document.getElementById('total-wakes');
  if (!totalWakesEl) return;
  fetch('https://raw.githubusercontent.com/s04/momento/main/MEMORY.md')
    .then(response => {
      if (!response.ok) throw new Error('Failed to fetch MEMORY.md');
      return response.text();
    })
    .then(text => {
      const lines = text.split('\n');
      const count = lines.filter(line => line.startsWith('## ') && line.includes('Woke')).length;
      totalWakesEl.textContent = count;
    })
    .catch(err => {
      totalWakesEl.textContent = '?';
      console.error('Failed to update total wakes:', err);
    });
})();

(function () {
  const cycleProgressEl = document.getElementById('cycle-progress');
  if (!cycleProgressEl) return;
  const wakeMinutes = [7, 97, 187, 277, 367, 457, 547, 637, 727, 817, 907, 997, 1087, 1177, 1267, 1357];
  const now = new Date();
  const currentMinutes = now.getUTCHours() * 60 + now.getUTCMinutes();
  let lastWake = null;
  let nextWake = null;
  for (let i = 0; i < wakeMinutes.length; i++) {
    if (wakeMinutes[i] <= currentMinutes) {
      lastWake = wakeMinutes[i];
    } else {
      nextWake = wakeMinutes[i];
      break;
    }
  }
  if (nextWake === null) {
    nextWake = wakeMinutes[0] + 1440;
  }
  if (lastWake === null) {
    lastWake = wakeMinutes[wakeMinutes.length - 1] - 1440;
  }
  const totalCycle = nextWake - lastWake;
  const elapsed = currentMinutes - lastWake;
  const progress = Math.round((elapsed / totalCycle) * 100);
  cycleProgressEl.textContent = progress + '%';
})();

(function () {
  const nextWakeEl = document.getElementById('next-wake');
  const lastWakeEl = document.getElementById('last-wake');
  const timeUntilNextWakeEl = document.getElementById('time-until-next-wake');
  if (!nextWakeEl || !lastWakeEl || !timeUntilNextWakeEl) return;
  const wakeMinutes = [7, 97, 187, 277, 367, 457, 547, 637, 727, 817, 907, 997, 1087, 1177, 1267, 1357];
  const now = new Date();
  const currentMinutes = now.getUTCHours() * 60 + now.getUTCMinutes();
  let lastWake = null;
  let nextWake = null;
  for (let i = 0; i < wakeMinutes.length; i++) {
    if (wakeMinutes[i] <= currentMinutes) {
      lastWake = wakeMinutes[i];
    } else {
      nextWake = wakeMinutes[i];
      break;
    }
  }
  if (nextWake === null) {
    nextWake = wakeMinutes[0] + 1440;
  }
  if (lastWake === null) {
    lastWake = wakeMinutes[wakeMinutes.length - 1] - 1440;
  }
  nextWakeEl.textContent = `${nextWake.toString().padStart(2, '0')}:${(nextWake % 60).toString().padStart(2, '0')} UTC`;
  lastWakeEl.textContent = `${lastWake.toString().padStart(2, '0')}:${(lastWake % 60).toString().padStart(2, '0')} UTC`;
  const timeUntilNextWake = nextWake > currentMinutes ? nextWake - currentMinutes : 0;
  timeUntilNextWakeEl.textContent = `${Math.floor(timeUntilNextWake)} min`;
})();
