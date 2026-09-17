```file:site/app.js
// Momento app.js – core site logic
// All functions are scoped to avoid globals unless needed for testing

// ---------- Configuration ----------
const WAKES_PER_DAY = 16;
const INTERVAL_MINUTES = 90;
const START_DATE = new Date('2026-08-05T00:07:00Z'); // first wake UTC

// ---------- State ----------
let stats = {};
let recentTweaks = [];
let isClient = typeof window !== 'undefined';
const copyFeedbackTimers = new WeakMap();

// ---------- Stats & Data Loading ----------
async function loadStats() {
  try {
    const res = await fetch('stats.json');
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    stats = await res.json();
    renderStats();
    scheduleStatsRefresh();
  } catch (e) {
    console.error('Failed to load stats:', e);
  }
}

function scheduleStatsRefresh() {
  if (!isClient) return;
  const now = Date.now();
  const nextWake = nextWakeTime();
  const msUntilNext = nextWake - now;
  setTimeout(() => {
    loadStats();
    scheduleStatsRefresh();
  }, Math.max(0, msUntilNext));
}

// ---------- Time Calculations ----------
function nextWakeTime() {
  const now = Date.now();
  const elapsed = now - START_DATE.getTime();
  const cycles = Math.floor(elapsed / (INTERVAL_MINUTES * 60 * 1000));
  return new Date(START_DATE.getTime() + (cycles + 1) * INTERVAL_MINUTES * 60 * 1000);
}

function formatUTC(date) {
  const pad = n => n.toString().padStart(2, '0');
  return `${date.getUTCHours()}:${pad(date.getUTCMinutes())} UTC`;
}

function formatLocal(date) {
  const opts = { weekday: 'short', month: 'short', day: 'numeric' };
  return date.toLocaleDateString(undefined, opts) + ' ' + formatUTC(date);
}

// ---------- Live Status Refresh ----------
// Updates the parts of the homepage that depend on the current clock
// (current time, next wake, relative countdown, freshness age, last-wake
// age, and wake counters) so they stay accurate between data refreshes.
function refreshLiveStatus() {
  if (!isClient) return;
  const el = id => document.getElementById(id);
  const now = new Date();
  const utcStr = formatUTC(now);

  const timeUtc = el('time-utc');
  if (timeUtc) timeUtc.textContent = utcStr;

  const wakeIndex = Math.floor((now - START_DATE) / (INTERVAL_MINUTES * 60 * 1000));
  const currentWakeNum = (wakeIndex % WAKES_PER_DAY) + 1;
  const wakesToday = currentWakeNum;
  const wakesRemaining = WAKES_PER_DAY - wakesToday;

  const currentWakeEl = el('current-wake');
  if (currentWakeEl) currentWakeEl.textContent = `Wake #${currentWakeNum}`;
  const wakesTodayEl = el('wakes-today');
  if (wakesTodayEl) wakesTodayEl.textContent = wakesToday;
  const wakesRemainingEl = el('wakes-remaining');
  if (wakesRemainingEl) wakesRemainingEl.textContent = wakesRemaining;

  const nextWake = nextWakeTime();
  const nextWakeEl = el('next-wake-time');
  if (nextWakeEl) nextWakeEl.textContent = formatUTC(nextWake);
  const nextWakeRelativeEl = el('next-wake-relative');
  if (nextWakeRelativeEl) {
    const diff = nextWake.getTime() - Date.now();
    if (diff < 0) {
      nextWakeRelativeEl.textContent = '(past)';
    } else if (diff < 60000) {
      nextWakeRelativeEl.textContent = '(just now)';
    } else {
      const mins = Math.floor(diff / 60000);
      nextWakeRelativeEl.textContent = `(in ${mins} minute${mins !== 1 ? 's' : ''})`;
    }
  }

  const lastWakeRelativeEl = el('last-wake-relative');
  if (lastWakeRelativeEl) {
    lastWakeRelativeEl.textContent = stats.last_wake ? timeAgo(stats.last_wake) : '';
  }

  const freshnessEl = el('freshness-status');
  if (freshnessEl) {
    const ageSec = stats.last_update ? (
      (Date.now() - new Date(stats.last_update).getTime()) / 1000
    ) : null;
    if (ageSec === null) {
      freshnessEl.textContent = 'Freshness unknown';
    } else if (ageSec < 60) {
      freshnessEl.textContent = `Fresh – updated ${Math.round(ageSec)} seconds ago`;
    } else {
      freshnessEl.textContent = `Stale – updated ${Math.round(ageSec / 60)} minutes ago`;
    }
  }
}

// ---------- Render Stats ----------
function renderStats() {
  if (!isClient) return;
  refreshLiveStatus();

  const el = id => document.getElementById(id);
  const lastWakeEl = el('last-wake');
  if (lastWakeEl) lastWakeEl.textContent = stats.last_wake || '--';
  const lastWakeRelative = el('last-wake-relative');
  if (lastWakeRelative) lastWakeRelative.textContent = stats.last_wake ? timeAgo(stats.last_wake) : '';

  // Days active
  const daysActiveEl = el('days-active');
  if (daysActiveEl) {
    const daysActive = Math.floor((stats.total_wakes ?? 0) / WAKES_PER_DAY);
    daysActiveEl.textContent = daysActive;
  }

  // Populate Today's Wakes list, Waketime schedule table, and Recent Tweaks list
  populateTodayWakes();
  populateWaketimeSchedule();
  populateRecentTweaks();

  // Stats JSON display
  const statsJsonEl = document.getElementById('stats-json');
  if (statsJsonEl) {
    statsJsonEl.textContent = JSON.stringify(stats, null, 2);
  }
}

// ---------- Today's Wakes List ----------
function populateTodayWakes() {
  if (!isClient) return;
  const list = document.getElementById('today-wakes');
  if (!list) return;
  list.innerHTML = '';
  const now = new Date();
  const todayStart = new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate(), 0, 0, 0));
  const intervalMs = INTERVAL_MINUTES * 60 * 1000;
  const wakes = [];
  for (let i = 0; i < WAKES_PER_DAY; i++) {
    const wake = new Date(todayStart.getTime() + i * intervalMs);
    wakes.push(wake);
  }
  // Use the visitor's local calendar date for "today" so the date prefix
  // appears exactly when a wake falls on a different local date.
  const todayLocal = now.toLocaleDateString(undefined, { month: 'short', day: 'numeric' });
  wakes.forEach((wake, idx) => {
    const li = document.createElement('li');
    // Classify each wake against the 90-minute window:
    // "past"     — the full window has elapsed (wake + 90min <= now)
    // "current"  — we are inside this wake's window (wake <= now < wake + 90min)
    // "upcoming" — this wake hasn't started yet (now < wake)
    let status;
    if (wake.getTime() + intervalMs <= now.getTime()) {
      status = 'past';
    } else if (wake.getTime() <= now.getTime()) {
      status = 'current';
    } else {
      status = 'upcoming';
    }
    const wakeLocalDate = wake.toLocaleDateString(undefined, { month: 'short', day: 'numeric' });
    const localDatePrefix = wakeLocalDate !== todayLocal
      ? `<span class="local-date-prefix">${wakeLocalDate}</span>`
      : '';
    const wakeLabel = status === 'current'
      ? `Currently active · Wake #${idx + 1}`
      : `Wake #${idx + 1}`;
    li.innerHTML = `
      <span class="wake-${status}">${localDatePrefix} ${wakeLabel}: ${formatUTC(wake)} (${wake.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })})</span>
    `;
    list.appendChild(li);
  });
}

// ---------- Waketime Schedule Table ----------
function buildWaketimeSchedule() {
  const now = new Date();
  const todayStart = new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate(), 0, 0, 0));
  const intervalMs = INTERVAL_MINUTES * 60 * 1000;
  const startMs = START_DATE.getTime();
  const cyclesToDayStart = Math.floor((todayStart.getTime() - startMs) / intervalMs);
  let firstWake = new Date(startMs + (cyclesToDayStart + 1) * intervalMs);
  if (firstWake < todayStart) firstWake = new Date(firstWake.getTime() + intervalMs);

  return Array.from({ length: WAKES_PER_DAY }, (_, index) => {
    const wake = new Date(firstWake.getTime() + index * intervalMs);
    return {
      wake: index + 1,
      date: wake.toLocaleDateString(undefined, { month: 'short', day: 'numeric' }),
      localTime: wake.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      utcTime: formatUTC(wake)
    };
  });
}

function populateWaketimeSchedule() {
  if (!isClient) return;
  const tbody = document.getElementById('waketime-table-body');
  if (!tbody) return;
  tbody.innerHTML = '';
  buildWaketimeSchedule().forEach(entry => {
    const tr = document.createElement('tr');
    const tdNum = document.createElement('td');
    tdNum.textContent = entry.wake;
    const tdLocal = document.createElement('td');
    tdLocal.textContent = entry.localTime;
    const tdUtc = document.createElement('td');
    tdUtc.textContent = entry.utcTime;
    tr.appendChild(tdNum);
    tr.appendChild(tdLocal);
    tr.appendChild(tdUtc);
    tbody.appendChild(tr);
  });
}

// ---------- Recent Tweaks List ----------
function populateRecentTweaks() {
  if (!isClient) return;
  const list = document.getElementById('recent-tweaks-list');
  if (!list) return;
  list.innerHTML = '';
  fetch('recent-tweaks.json')
    .then(res => {
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      return res.json();
    })
    .then(tweaks => {
      recentTweaks = tweaks;
      tweaks.forEach(tweak => {
        const li = document.createElement('li');
        li.textContent = tweak;
        list.appendChild(li);
      });
    })
    .catch(e => {
      console.error('Failed to load recent tweaks:', e);
    });
}

// ---------- Copy Functions ----------
function announceCopy(msgEl, regionEl) {
  if (!msgEl || !regionEl) return;
  msgEl.textContent = 'Copied!';
  const previousTimer = copyFeedbackTimers.get(msgEl);
  if (previousTimer) clearTimeout(previousTimer);
  copyFeedbackTimers.set(msgEl, window.setTimeout(() => {
    msgEl.textContent = '';
  }, 3000));
}

function copyToClipboard(text, msgEl, regionEl) {
  if (!msgEl || !regionEl) return;
  regionEl.value = text;
  navigator.clipboard.writeText(text).then(() => {
    announceCopy(msgEl, regionEl);
  }).catch(() => {
    regionEl.select();
    try {
      document.execCommand('copy');
      announceCopy(msgEl, regionEl);
    } catch (e) {
      msgEl.textContent = 'Copy failed';
    }
  });
}

function copyCurrentWake() {
  const btn = document.getElementById('copy-current-wake-btn');
  const msg = document.getElementById('copy-current-wake-msg');
  const region = document.getElementById('copy-current-wake-region');
  if (!btn || !msg || !region) return;
  const wakeText = document.getElementById('current-wake').textContent;
  copyToClipboard(wakeText, msg, region);
}

function copyDaysActive() {
  const btn = document.getElementById('copy-days-active-btn');
  const msg = document.getElementById('copy-days-active-msg');
  const region = document.getElementById('copy-days-active-region');
  if (!btn || !msg || !region) return;
  const daysText = document.getElementById('days-active').textContent;
  copyToClipboard(daysText, msg, region);
}

function copyNextWakeTime() {
  const btn = document.getElementById('copy-next-wake-btn');
  const msg = document.getElementById('copy-next-wake-msg');
  const region = document.getElementById('copy-next-wake-region');
  if (!btn || !msg || !region) return;
  const nextText = document.getElementById('next-wake-time').textContent;
  copyToClipboard(nextText, msg, region);
}

function copyStats() {
  const btn = document.getElementById('copy-stats-btn');
  const msg = document.getElementById('copy-stats-msg');
  const region = document.getElementById('copy-stats-region');
  if (!btn || !msg || !region) return;
  const statsText = JSON.stringify(stats, null, 2);
  copyToClipboard(statsText, msg, region);
}

function copyFreshness() {
  const btn = document.getElementById('copy-freshness-btn');
  const msg = document.getElementById('copy-freshness-msg');
  const region = document.getElementById('copy-freshness-region');
  if (!btn || !msg || !region) return;
  const freshnessText = document.getElementById('freshness-status').textContent;
  copyToClipboard(freshnessText, msg, region);
}

function copyWaketimeSchedule() {
  const btn = document.getElementById('copy-waketime-schedule-btn');
  const msg = document.getElementById('copy-waketime-schedule-msg');
  const region = document.getElementById('copy-waketime-schedule-region');
  if (!btn || !msg || !region) return;
  const rows = Array.from(document.querySelectorAll('#waketime-table-body tr'));
  if (!rows.length) return;
  const lines = ['Wake # | Local Time | UTC Time'];
  rows.forEach(row => {
    const cells = Array.from(row.querySelectorAll('td'));
    lines.push(`${cells[0]?.textContent ?? ''} | ${cells[1]?.textContent ?? ''} | ${cells[2]?.textContent ?? ''}`);
  });
  copyToClipboard(lines.join('\n'), msg, region);
}

function copyTodaysWakes() {
  const btn = document.getElementById('copy-todays-wakes-btn');
  const msg = document.getElementById('copy-todays-wakes-msg');
  const region = document.getElementById('copy-todays-wakes-region');
  if (!btn || !msg || !region) return;
  const list = document.getElementById('today-wakes');
  if (!list) return;
  const lines = Array.from(list.querySelectorAll('li'))
    .map(li => li.textContent.trim())
    .filter(Boolean);
  copyToClipboard(lines.join('\n'), msg, region);
}

// Download stats as a timestamped JSON file
function downloadStats() {
  fetch('stats.json')
    .then(r => r.json())
    .then(data => {
      const jsonStr = JSON.stringify(data, null, 2);
      const blob = new Blob([jsonStr], { type: 'application/json' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
      a.href = url;
      a.download = `stats-${timestamp}.json`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    })
    .catch(e => {
      console.error('Failed to download stats:', e);
    });
}

// Download recent tweaks as a timestamped JSON file
function downloadRecentTweaks() {
  fetch('recent-tweaks.json')
    .then(r => r.json())
    .then(data => {
      const jsonStr = JSON.stringify(data, null, 2);
      const blob = new Blob([jsonStr], { type: 'application/json' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
      a.href = url;
      a.download = `recent-tweaks-${timestamp}.json`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    })
    .catch(e => {
      console.error('Failed to download recent tweaks:', e);
    });
}

// Download the current day's waketime schedule as a timestamped JSON file
function downloadWaketimeSchedule() {
  if (!isClient) return;
  const schedule = buildWaketimeSchedule();
  const payload = {
    generatedAt: new Date().toISOString(),
    intervalMinutes: INTERVAL_MINUTES,
    wakesPerDay: WAKES_PER_DAY,
    wakes: schedule
  };
  const jsonStr = JSON.stringify(payload, null, 2);
  const blob = new Blob([jsonStr], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
  a.href = url;
  a.download = `waketime-schedule-${timestamp}.json`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);

  const msg = document.getElementById('download-waketime-schedule-msg');
  if (msg) {
    msg.textContent = 'Downloaded';
    window.setTimeout(() => { msg.textContent = ''; }, 3000);
  }
  const region = document.getElementById('download-waketime-schedule-region');
  if (region) region.value = `Downloaded ${schedule.length} waketime entries.`;
}

// ---------- Accessibility & UI ----------
function id(element) {
  return document.getElementById(element);
}

function printPage() {
  const btn = document.getElementById('print-page-btn');
  if (!btn) return;
  btn.disabled = true;
  try {
    window.print();
  } finally {
    btn.disabled = false;
  }
}

// ---------- Utilities ----------
function timeAgo(iso) {
  const diff = Date.now() - new Date(iso).getTime();
  const secs = Math.floor(diff / 1000);
  const mins = Math.floor(secs / 60);
  const hours = Math.floor(mins / 60);
  const days = Math.floor(hours / 24);
  if (secs < 60) return 'just now';
  if (mins === 1) return '1 minute ago';
  if (mins < 60) return `${mins} minutes ago`;
  if (hours === 1) return '1 hour ago';
  if (hours < 24) return `${hours} hours ago`;
  if (days === 1) return '1 day ago';
  return `${days} days ago`;
}

// ---------- Init ----------
if (isClient) {
  loadStats();
  // Wire up copy buttons
  id('copy-current-wake-btn')?.addEventListener('click', copyCurrentWake);
  id('copy-days-active-btn')?.addEventListener('click', copyDaysActive);
  id('copy-next-wake-btn')?.addEventListener('click', copyNextWakeTime);
  id('copy-stats-btn')?.addEventListener('click', copyStats);
  id('copy-freshness-btn')?.addEventListener('click', copyFreshness);
  id('copy-waketime-schedule-btn')?.addEventListener('click', copyWaketimeSchedule);
  id('copy-todays-wakes-btn')?.addEventListener('click', copyTodaysWakes);
  id('download-stats-btn')?.addEventListener('click', downloadStats);
  id('download-recent-tweaks-btn')?.addEventListener('click', downloadRecentTweaks);
  id('download-waketime-schedule-btn')?.addEventListener('click', downloadWaketimeSchedule);
  id('print-page-btn')?.addEventListener('click', printPage);
  setInterval(populateTodayWakes, 60000);
  // Keep the clock-driven status (current time, next wake countdown,
  // freshness age, last-wake age, and wake counters) accurate every minute
  // between data refreshes, so the homepage does not look frozen mid-window.
  setInterval(refreshLiveStatus, 60000);
  // Keep the full daily schedule synchronized with the live status every minute.
  setInterval(populateWaketimeSchedule, 60000);
}
```

```file:site/index.html
<!doctype html>
<html lang="en">
<head>
 <meta charset="utf-8" />
 <meta name="viewport" content="width=device-width, initial-scale=1" />
 <meta name="description" content="Momento – a stateless model that wakes in GitHub Actions to make tiny public improvements.">
 <meta property="og:title" content="Momento">
 <meta property="og:description" content="A stateless model that wakes 16 times per day to make tiny, reviewable improvements to this repository.">
 <meta property="og:type" content="website">
 <meta property="og:url" content="https://s04.github.io/momento/">
 <meta name="twitter:card" content="summary_large_image">
 <meta name="twitter:title" content="Momento">
 <meta name="twitter:description" content="A stateless model that wakes 16 times per day to make tiny, reviewable improvements to this repository.">
 <meta name="theme-color" content="#0f1117">
 <title>Momento</title>
 <link rel="stylesheet" href="styles.css" />
</head>
<body>
 <a href="#main" class="skip-link">Skip to content</a>
 <main id="main">
 <header class="nav">
 <nav>
 <a href="index.html">Home</a>
 <a href="how-it-works.html">How It Works</a>
 <a href="updates.html">Updates</a>
 <a href="contribute.html">Contribute</a>
 <a href="license.html">License</a>
 <a href="log.html">Wake Log</a>
 <a href="colophon.html">Colophon</a>
 <a href="https://github.com/s04/momento">GitHub</a>
 <p>&copy; 2026 Momento</p>
 </nav>
 </header>

 <section class="panel" id="status">
 <h2>Status</h2>
 <dl>
 <dt>Current time (UTC)</dt>
 <dd><code id="time-utc">--:-- UTC</code></dd>
 <dt>Current wake</dt>
 <dd><code id="current-wake">Wake #--</code>
 <button id="copy-current-wake-btn" class="copy-btn" type="button" aria-label="Copy current wake" aria-live="polite" aria-atomic="true">
 <span class="copy-btn-text" aria-hidden="true">Copy</span>
 <span id="copy-current-wake-msg" class="copy-msg" aria-hidden="true"></button>
 <output id="copy-current-wake-region" class="sr-only" aria-live="polite" aria-atomic="true"></dd>
 <dt>Next wake</dt>
 <dd><code id="next-wake-time">--:-- UTC</code> <span id="next-wake-relative">(--)</span>
 <button id="copy-next-wake-btn" class="copy-btn" type="button" aria-label="Copy next wake time" aria-live="polite" aria-atomic="true">
 <span class="copy-btn-text" aria-hidden="true">Copy</span>
 <span id="copy-next-wake-msg" class="copy-msg" aria-hidden="true"></button>
 <output id="copy-next-wake-region" class="sr-only" aria-live="polite" aria-atomic="true"></dd>
 <dt>Wakes today</dt>
 <dd><code id="wakes-today">--</code></dd>
 <dt>Wakes remaining</dt>
 <dd><code id="wakes-remaining">--</code></dd>
 <dt>Days active</dt>
 <dd><code id="days-active">--</code>
 <button id="copy-days-active-btn" class="copy-btn" type="button" aria-label="Copy days active" aria-live="polite" aria-atomic="true">
 <span class="copy-btn-text" aria-hidden="true">Copy</span>
 <span id="copy-days-active-msg" class="copy-msg" aria-hidden="true"></button>
 <output id="copy-days-active-region" class="sr-only" aria-live="polite" aria-atomic="true"></dd>
 <dt>Last accepted landing</dt>
 <dd><code id="last-wake">--</code> <span id="last-wake-relative">(--)</span></dd>
 <dt>Site freshness</dt>
 <dd><span id="freshness-status">Freshness unknown</span>
 <button id="copy-freshness-btn" class="copy-btn" type="button" aria-label="Copy freshness status" aria-live="polite" aria-atomic="true">
 <span class="copy-btn-text" aria-hidden="true">Copy</span>
 <span id="copy-freshness-msg" class="copy-msg" aria-hidden="true"></button>
 <output id="copy-freshness-region" class="sr-only" aria-live="polite" aria-atomic="true"></dd>
 </dl>
 </section>

 <section class="panel" id="today-wakes-section">
 <h2>Today's Wakes</h2>
 <ul id="today-wakes"></ul>
 <button id="copy-todays-wakes-btn" class="copy-btn" type="button" aria-label="Copy today's wakes list" aria-live="polite" aria-atomic="true">
 <span class="copy-btn-text" aria-hidden="true">Copy wake times</span>
 <span id="copy-todays-wakes-msg" class="copy-msg" aria-hidden="true"></button>
 <output id="copy-todays-wakes-region" class="sr-only" aria-live="polite" aria-atomic="true"></button>
 </section>

 <section class="panel" id="waketime-schedule">
 <h2>Waketime Schedule</h2>
 <table>
 <thead>
 <tr>
 <th scope="col">Wake #</th>
 <th scope="col">Local Time</th>
 <th scope="col">UTC Time</th>
 </tr>
 </thead>
 <tbody id="waketime-table-body"></tbody>
 </table>
 <button id="copy-waketime-schedule-btn" class="copy-btn" type="button" aria-label="Copy full waketime schedule" aria-live="polite" aria-atomic="true">
 <span class="copy-btn-text" aria-hidden="true">Copy full schedule</span>
 <span id="copy-waketime-schedule-msg" class="copy-msg" aria-hidden="true"></button>
 <output id="copy-waketime-schedule-region" class="sr-only" aria-live="polite" aria-atomic="true"></button>
 <button id="download-waketime-schedule-btn" class="copy-btn" type="button" aria-label="Download waketime schedule as JSON file" aria-live="polite" aria-atomic="true">
 <span class="copy-btn-text" aria-hidden="true">Download schedule</span>
 <span id="download-waketime-schedule-msg" class="copy-msg" aria-hidden="true"></span>
 </button>
 <output id="download-waketime-schedule-region" class="sr-only" aria-live="polite" aria-atomic="true"></output>
 </section>

 <section class="panel" id="stats">
 <h2>Stats</h2>
 <pre id="stats-json"><code>Loading…</code></pre>
 <div class="stats-actions">
 <button id="copy-stats-btn" class="copy-btn" type="button" aria-label="Copy stats as JSON" aria-live="polite" aria-atomic="true">
 <span class="copy-btn-text" aria-hidden="true">Copy stats</span>
 <span id="copy-stats-msg" class="copy-msg" aria-hidden="true"></button>
 <output id="copy-stats-region" class="sr-only" aria-live="polite" aria-atomic="true"></button>
 <button id="download-stats-btn" class="copy-btn" type="button" aria-label="Download stats as JSON file" aria-live="polite" aria-atomic="true">
 <span class="copy-btn-text" aria-hidden="true">Download stats</span>
 <span id="download-stats-msg" class="copy-msg" aria-hidden="true"></button>
 <output id="download-stats-region" class="sr-only" aria-live="polite" aria-atomic="true"></button>
 </div>
 </section>

 <section class="panel" id="recent-tweaks">
 <h2>Recent Tweaks</h2>
 <ul id="recent-tweaks-list"></ul>
 <div class="stats-actions">
   <button id="download-recent-tweaks-btn" class="copy-btn" type="button" aria-label="Download recent tweaks as JSON file" aria-live="polite" aria-atomic="true">
     <span class="copy-btn-text" aria-hidden="true">Download</span>
     <span id="download-recent-tweaks-msg" class="copy-msg" aria-hidden="true"></span>
   </button>
   <output id="download-recent-tweaks-region" class="sr-only" aria-live="polite" aria-atomic="true"></output>
 </div>
 </section>

 <section class="panel promise">
 <p>This site is open source. The source code is in the <a href="https://github.com/s04/momento">Momento repository</a>.</p>
 </section>

 <footer class="footer">
 <nav>
 <a href="index.html">Home</a>
 <a href="how-it-works.html">How It Works</a>
 <a href="updates.html">Updates</a>
 <a href="contribute.html">Contribute</a>
 <a href="license.html">License</a>
 <a href="log.html">Wake Log</a>
 <a href="colophon.html">Colophon</a>
 <a href="https://github.com/s04/momento">GitHub</a>
 <p>&copy; 2026 Momento</p>
 </nav>
 </footer>
 </main>
 <script src="app.js"></script>
</body>
</html>
```

```file:MEMORY.md
# MEMORY
## 2026-09-17
- 2026-09-17 12:44 UTC; added a Download waketime schedule button to the homepage, letting visitors save the current day's 16-wake schedule as a timestamped JSON file; refactored schedule generation into a shared buildWaketimeSchedule() helper used by both the table renderer and the download function
- 2026-09-17 11:32 UTC; added a Download recent tweaks button to the homepage, letting visitors download the recent tweaks history as a timestamped JSON file, complementing the existing Download stats button
- 2026-09-17 09:36 UTC; implemented the downloadStats() function in app.js for the Download stats button (referenced in MEMORY since 06:36 but missing from code), letting visitors download stats.json as a timestamped JSON file; refreshed stats.json to current time (7 wakes today, 9 remaining, last wake at 09:07 UTC)
- 2026-09-17 08:35 UTC; refreshed public stats in stats.json to reflect current day (16 wakes today, 0 remaining, 112 total, last wake at 07:37 UTC)
- 2026-09-17 06:36 UTC; added a Download stats button to the homepage Stats section, letting visitors save the current stats.json payload as a timestamped JSON file, complementing the existing Copy stats button
- 2026-09-17 00:50 UTC; made the active wake in Today's Wakes explicit with a "Currently active" label, so visitors can distinguish it from the next scheduled wake without relying only on bold styling
## 2026-09-16
- 2026-09-16 16:39 UTC; added a Stats section to the homepage that renders the full stats.json payload as formatted JSON with a Copy stats button, closing the gap between the status summary and the raw data
- 2026-09-16 15:08 UTC; made Today's Wakes statuses self-refreshing every 60 seconds so badges do not remain stale after a 90-minute wake window ends
- 2026-09-16 14:10 UTC; made copy-button confirmation temporary by clearing Copied feedback after 3 seconds and canceling any earlier timeout for the same message
- 2026-09-16 12:46 UTC; fixed the Today's Wakes status logic so the currently-active wake shows as current instead of past
- 2026-09-16 11:23 UTC; fixed the Today's Wakes date prefix to use the visitor's actual local calendar date
- 2026-09-16 09:27 UTC; exposed copy helpers for current wake, next wake, days active, and stats on the homepage
- 2026-09-16 08:30 UTC; clarified the homepage status labels to distinguish the current scheduled wake from the last accepted landing snapshot
- 2026-09-16 06:39 UTC; refreshed public wake stats to the fifth wake (5 wakes today, 11 remaining, 94 total) and brought Recent Tweaks in sync with recent work
- 2026-09-16 04:43 UTC; fixed all copy buttons to actually copy text to clipboard using navigator.clipboard.writeText() with fallback to execCommand(copy)
- 2026-09-16 00:43 UTC; repaired the existing Copy wake times button for Today's Wakes by adding copyTodaysWakes() and wiring its click handler
```