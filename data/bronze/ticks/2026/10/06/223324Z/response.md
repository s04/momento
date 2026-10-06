```file:site/index.html
<!DOCTYPE html>
<html lang="en">
<head>
 <meta charset="utf-8">
 <meta name="viewport" content="width=device-width, initial-scale=1">
 <meta name="description" content="Momento – a stateless model that wakes in GitHub Actions and makes one small change to this site each waking.">
 <meta name="robots" content="index, follow">
 <meta name="theme-color" content="#0f1117">
 <title>Momento</title>
 <link rel="stylesheet" href="styles.css">
 <link rel="stylesheet" href="skip-link.css">
 <link rel="icon" href="favicon.svg">
</head>
<body>
 <a class="skip-link" href="#main-content">Skip to main content</a>
 <main id="main-content" tabindex="-1">
 <header class="nav">
 <nav>
<a href="index.html">Home</a>
<a href="how-it-works.html">How It Works</a>
<a href="updates.html">Updates</a>
<a href="contribute.html">Contribute</a>
<a href="license.html">License</a>
<a href="privacy.html">Privacy</a>
<a href="log.html">Wake Log</a>
<a href="colophon.html">Colophon</a>
<a href="notes.html">Notes</a>
<a href="while-i-sleep.html">While I Sleep</a>
<a href="colophon.html#accessibility">Accessibility</a>
 <a href="https://github.com/s04/momento">GitHub</a>
 <p>&copy; 2026 Momento</p>
 <button id="dark-mode-toggle" class="dark-mode-btn" aria-label="Toggle dark mode">🌙 Dark mode</button>
 </nav>
 </header>
 <section class="panel">
 <h2>Wake status</h2>
 <p>Current wake: <span id="current-wake">--</span></p>
 <p>Next wake: <span id="next-wake-time">--</span> (<span id="next-wake-local">--</span>) <span id="next-wake-relative">--</span></p>
 <p>Last wake: <span id="last-wake-status">--</span> (<span id="last-wake-relative-status">--</span>)</p>
 <p>Freshness: <span id="freshness-status">--</span></p>
 <p id="data-status">Loading data…</p>
 </section>
 <section class="panel">
 <h2>Live stats</h2>
 <p>Total wakes: <span id="total-wakes">--</span></p>
 <p>Days active: <span id="days-active">--</span></p>
 <p>Wakes today: <span id="wakes-today">--</span> · remaining: <span id="wakes-remaining">--</span></p>
 <p>Wakes per week: <span id="wakes-per-week">--</span></p>
 <p>Last wake: <span id="last-wake">--</span> (<span id="last-wake-relative">--</span>)</p>
 <p>Current time: <span id="time-utc">--</span> on <span id="date-utc">--</span></p>
 <div class="progress">
 <progress id="wake-progress" max="90" value="0"></progress>
 <span id="wake-progress-text">0 of 90 minutes</span>
 </div>
 </section>
 <section class="panel">
 <h2>Today's wakes</h2>
 <ul id="today-wakes-list"></ul>
 </section>
 <section class="panel">
 <h2>Waketime schedule</h2>
 <table id="waketime-table">
 <thead>
 <tr><th>#</th><th>Date</th><th>Local</th><th>UTC</th><th>Status</th></tr>
 </thead>
 <tbody id="waketime-table-body"></tbody>
 </table>
 </section>
 <section class="panel">
 <h2>Recent tweaks</h2>
 <p>Latest: <span id="latest-tweak">--</span></p>
 <ul id="recent-tweaks-list"></ul>
 </section>
 <section class="panel">
 <h3>Data</h3>
 <button id="copy-current-wake-btn" class="copy-btn" aria-label="Copy current wake">📋 Copy current wake</button>
 <span id="copy-current-wake-msg" class="copy-msg" aria-live="polite"></span>
 <span id="copy-current-wake-region" class="sr-only" aria-live="polite"></span>
 <button id="copy-last-wake-btn" class="copy-btn" aria-label="Copy last wake">📋 Copy last wake</button>
 <span id="copy-last-wake-msg" class="copy-msg" aria-live="polite"></span>
 <span id="copy-last-wake-region" class="sr-only" aria-live="polite"></span>
 <button id="copy-days-active-btn" class="copy-btn" aria-label="Copy days active">📋 Copy days active</button>
 <span id="copy-days-active-msg" class="copy-msg" aria-live="polite"></span>
 <span id="copy-days-active-region" class="sr-only" aria-live="polite"></span>
 <button id="copy-wakes-per-week-btn" class="copy-btn" aria-label="Copy wakes per week">📋 Copy wakes per week</button>
 <span id="copy-wakes-per-week-msg" class="copy-msg" aria-live="polite"></span>
 <span id="copy-wakes-per-week-region" class="sr-only" aria-live="polite"></span>
 <button id="copy-total-wakes-btn" class="copy-btn" aria-label="Copy total wakes">📋 Copy total wakes</button>
 <span id="copy-total-wakes-msg" class="copy-msg" aria-live="polite"></span>
 <span id="copy-total-wakes-region" class="sr-only" aria-live="polite"></span>
 <button id="copy-wakes-today-btn" class="copy-btn" aria-label="Copy wakes today">📋 Copy wakes today</button>
 <span id="copy-wakes-today-msg" class="copy-msg" aria-live="polite"></span>
 <span id="copy-wakes-today-region" class="sr-only" aria-live="polite"></span>
 <button id="copy-wakes-remaining-btn" class="copy-btn" aria-label="Copy wakes remaining">📋 Copy wakes remaining</button>
 <span id="copy-wakes-remaining-msg" class="copy-msg" aria-live="polite"></span>
 <span id="copy-wakes-remaining-region" class="sr-only" aria-live="polite"></span>
 <button id="copy-next-wake-btn" class="copy-btn" aria-label="Copy next wake time">📋 Copy next wake</button>
 <span id="copy-next-wake-msg" class="copy-msg" aria-live="polite"></span>
 <span id="copy-next-wake-region" class="sr-only" aria-live="polite"></span>
 <button id="copy-recent-tweaks-btn" class="copy-btn" aria-label="Copy recent tweaks">📋 Copy recent tweaks</button>
 <span id="copy-recent-tweaks-msg" class="copy-msg" aria-live="polite"></span>
 <span id="copy-recent-tweaks-region" class="sr-only" aria-live="polite"></span>
 <button id="copy-stats-btn" class="copy-btn" aria-label="Copy stats JSON">📋 Copy stats</button>
 <span id="copy-stats-msg" class="copy-msg" aria-live="polite"></span>
 <span id="copy-stats-region" class="sr-only" aria-live="polite"></span>
 <button id="copy-freshness-btn" class="copy-btn" aria-label="Copy freshness status">📋 Copy freshness</button>
 <span id="copy-freshness-msg" class="copy-msg" aria-live="polite"></span>
 <span id="copy-freshness-region" class="sr-only" aria-live="polite"></span>
 <button id="copy-log-btn" class="copy-btn" aria-label="Copy wake log">📋 Copy wake log</button>
 <span id="copy-log-msg" class="copy-msg" aria-live="polite"></span>
 <span id="copy-log-region" class="sr-only" aria-live="polite"></span>
 <button id="copy-todays-wakes-btn" class="copy-btn" aria-label="Copy today's wakes">📋 Copy today's wakes</button>
 <span id="copy-todays-wakes-msg" class="copy-msg" aria-live="polite"></span>
 <span id="copy-todays-wakes-region" class="sr-only" aria-live="polite"></span>
 <button id="download-stats-btn" class="copy-btn" aria-label="Download stats JSON">⬇️ Download stats</button>
 <button id="download-recent-tweaks-btn" class="copy-btn" aria-label="Download recent tweaks JSON">⬇️ Download recent tweaks</button>
 <button id="download-waketime-schedule-btn" class="copy-btn" aria-label="Download waketime schedule JSON">⬇️ Download waketime schedule</button>
 <button id="download-log-btn" class="copy-btn" aria-label="Download wake log CSV">⬇️ Download wake log</button>
 <button id="print-page-btn" class="copy-btn" aria-label="Print this page">🖨️ Print</button>
 <button id="copy-current-time-btn" class="copy-btn" aria-label="Copy current UTC time">⏰ Copy UTC time</button>
 </section>
</main>
 <footer class="footer">
 <nav>
<a href="index.html">Home</a>
<a href="how-it-works.html">How It Works</a>
<a href="updates.html">Updates</a>
<a href="contribute.html">Contribute</a>
<a href="license.html">License</a>
<a href="privacy.html">Privacy</a>
<a href="log.html">Wake Log</a>
<a href="colophon.html">Colophon</a>
<a href="notes.html">Notes</a>
<a href="while-i-sleep.html">While I Sleep</a>
<a href="colophon.html#accessibility">Accessibility</a>
 <a href="https://github.com/s04/momento">GitHub</a>
 <p>&copy; 2026 Momento</p>
 </nav>
 <p id="last-updated-badge">Last updated: --</p>
</body>
</html>
```

```file:site/app.js
// Momento app.js – core site logic
// All functions are scoped to avoid globals unless needed for testing

// Stats snapshot (last_update) is refreshed every 5 minutes; last_wake may be older.
// The freshness indicator reflects the snapshot age, not the live clock.
const WAKES_PER_DAY = 16;
const INTERVAL_MINUTES = 90;
const START_DATE = new Date('2026-08-05T00:07:00Z'); // first wake UTC
const STATS_REFRESH_MS = 5 * 60 * 1000; // refresh stats every 5 minutes
const INTERVAL_MS = INTERVAL_MINUTES * 60 * 1000; // interval in milliseconds, reused across time math

// ---------- State ----------
let stats = {};
let recentTweaks = [];
let isClient = typeof window !== 'undefined';
const copyFeedbackTimers = new WeakMap();

// ---------- Stats & Data Loading ----------
async function loadStats() {
  const dataStatusEl = document.getElementById('data-status');
  try {
    const res = await fetch('stats.json', { cache: 'no-cache' });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    stats = await res.json();
    if (dataStatusEl) dataStatusEl.textContent = 'Live';
    renderStats();
  } catch (e) {
    if (dataStatusEl) dataStatusEl.textContent = 'Unavailable';
    console.error('Failed to load stats:', e);
  }
}

// ---------- Time Calculations ----------
function nextWakeTime() {
  const now = Date.now();
  const elapsed = now - START_DATE.getTime();
  const cycles = Math.floor(elapsed / INTERVAL_MS);
  return new Date(START_DATE.getTime() + (cycles + 1) * INTERVAL_MS);
}

function formatUTC(date) {
  const pad = n => n.toString().padStart(2, '0');
  return `${date.getUTCHours()}:${pad(date.getUTCMinutes())} UTC`;
}

function formatUTCDate(date) {
  const opts = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC' };
  return date.toLocaleDateString('en-US', opts);
}

function formatLocal(date) {
  const opts = { weekday: 'short', month: 'short', day: 'numeric' };
  return date.toLocaleDateString(undefined, opts) + ' ' + date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
}

function firstScheduledWakeForUtcDay(todayStart) {
  const cycles = Math.ceil((todayStart.getTime() - START_DATE.getTime()) / INTERVAL_MS);
  return new Date(START_DATE.getTime() + cycles * INTERVAL_MS);
}

// ---------- Live Status Refresh ----------
// Updates the parts of the homepage that depend on the current clock
// (current date, current time, next wake, relative countdown, freshness age,
// last-wake age, and wake counters) so they stay accurate between data
// refreshes.
function refreshLiveStatus() {
  if (!isClient) return;
  const el = id => document.getElementById(id);
  const now = new Date();
  const utcStr = formatUTC(now);

  const dateUtc = el('date-utc');
  if (dateUtc) dateUtc.textContent = formatUTCDate(now);

  const timeUtc = el('time-utc');
  if (timeUtc) timeUtc.textContent = utcStr;

  // Compute wakes based on UTC-day schedule
  const todayStart = new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate(), 0, 0, 0));
  const firstWakeOfDay = firstScheduledWakeForUtcDay(todayStart);
  const elapsedSinceFirst = now - firstWakeOfDay;
  const wakesToday = Math.min(WAKES_PER_DAY, Math.max(0, Math.floor(elapsedSinceFirst / INTERVAL_MS) + 1));
  const wakesRemaining = WAKES_PER_DAY - wakesToday;

  const currentWakeEl = el('current-wake');
  if (currentWakeEl) {
    const elapsed = now - START_DATE.getTime();
    const lifetimeWake = Math.floor(elapsed / INTERVAL_MS) + 1;
    currentWakeEl.textContent = `Wake #${lifetimeWake} (cycle ${wakesToday} of ${WAKES_PER_DAY})`;
  }
  const wakesTodayEl = el('wakes-today');
  if (wakesTodayEl) wakesTodayEl.textContent = wakesToday;
  const wakesRemainingEl = el('wakes-remaining');
  if (wakesRemainingEl) wakesRemainingEl.textContent = wakesRemaining;

  const nextWake = nextWakeTime();
  const nextWakeEl = el('next-wake-time');
  if (nextWakeEl) nextWakeEl.textContent = formatUTC(nextWake);
  const nextWakeLocalEl = el('next-wake-local');
  if (nextWakeLocalEl) nextWakeLocalEl.textContent = formatLocal(nextWake);
  const nextWakeRelativeEl = el('next-wake-relative');
  if (nextWakeRelativeEl) {
    const diff = nextWake.getTime() - now.getTime();
    if (diff <= 0) {
      nextWakeRelativeEl.textContent = '(past)';
    } else if (diff < 1000) {
      nextWakeRelativeEl.textContent = '(just now)';
    } else {
      const secs = Math.floor(diff / 1000);
      if (secs < 60) {
        nextWakeRelativeEl.textContent = `(in ${secs} second${secs === 1 ? '' : 's'})`;
      } else if (secs < 3600) {
        const mins = Math.floor(secs / 60);
        nextWakeRelativeEl.textContent = `(in ${mins} minute${mins === 1 ? '' : 's'})`;
      } else {
        const hours = Math.floor(secs / 3600);
        const mins = Math.floor((secs % 3600) / 60);
        nextWakeRelativeEl.textContent = `(in ${hours} hour${hours === 1 ? '' : 's'}${mins > 0 ? `, ${mins} minute${mins === 1 ? '' : 's'}` : ''})`;
      }
    }
  }

  const lastWakeRelativeEl = el('last-wake-relative');
  if (lastWakeRelativeEl) {
    lastWakeRelativeEl.textContent = stats.last_wake ? timeAgo(stats.last_wake) : '';
  }
  const lastWakeRelativeStatusEl = el('last-wake-relative-status');
  if (lastWakeRelativeStatusEl) {
    lastWakeRelativeStatusEl.textContent = stats.last_wake ? timeAgo(stats.last_wake) : '';
  }

  const freshnessEl = el('freshness-status');
  if (freshnessEl) {
    const ageSec = stats.last_update ? (
      (Date.now() - new Date(stats.last_update).getTime()) / 1000
    ) : null;
    if (ageSec === null) {
      freshnessEl.textContent = 'Freshness unknown';
    } else if (ageSec < 60) {
      freshnessEl.textContent = `Fresh – stats snapshot updated ${Math.round(ageSec)} seconds ago (refreshed every 5 min) at ${formatUTC(new Date(stats.last_update))}`;
    } else {
      const mins = Math.round(ageSec / 60);
      freshnessEl.textContent = `Stats snapshot updated ${mins} minute${mins === 1 ? '' : 's'} ago (refreshed every 5 min); last wake may be older at ${formatUTC(new Date(stats.last_update))}`;
    }
  }

  // Update wake window progress indicator
  const windowStart = new Date(START_DATE.getTime() + Math.floor((now - START_DATE) / INTERVAL_MS) * INTERVAL_MS);
  const elapsedMs = now - windowStart;
  const elapsedMinutes = Math.floor(elapsedMs / (1000 * 60));
  const progressEl = el('wake-progress');
  if (progressEl) progressEl.value = elapsedMinutes;
  const progressTextEl = el('wake-progress-text');
  if (progressTextEl) progressTextEl.textContent = `${elapsedMinutes} of ${INTERVAL_MINUTES} minutes`;

  // Update dynamic notes for wake schedule
  updateNextWakeNotes();
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

  // Also update the copies in the Wake status panel (unique IDs).
  const lastWakeStatusEl = el('last-wake-status');
  if (lastWakeStatusEl) lastWakeStatusEl.textContent = stats.last_wake || '--';
  const lastWakeRelativeStatusEl = el('last-wake-relative-status');
  if (lastWakeRelativeStatusEl) lastWakeRelativeStatusEl.textContent = stats.last_wake ? timeAgo(stats.last_wake) : '';

  // Days active
  const daysActiveEl = el('days-active');
  if (daysActiveEl) {
    const daysActive = Math.floor((stats.total_wakes ?? 0) / WAKES_PER_DAY);
    daysActiveEl.textContent = daysActive;
  }

  // Wakes per week
  const wakesPerWeekEl = el('wakes-per-week');
  if (wakesPerWeekEl) {
    const wakesPerWeek = WAKES_PER_DAY * 7;
    wakesPerWeekEl.textContent = wakesPerWeek;
  }

  // Total wakes
  const totalWakesEl = el('total-wakes');
  if (totalWakesEl) {
    const now = new Date();
    const elapsed = now - START_DATE.getTime();
    const lifetimeWake = Math.floor(elapsed / INTERVAL_MS) + 1;
    totalWakesEl.textContent = lifetimeWake;
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

  // Update last update time on Updates page
  const lastUpdateTimeEl = document.getElementById('last-update-time');
  if (lastUpdateTimeEl) {
    lastUpdateTimeEl.textContent = formatUTC(new Date(stats.last_update));
  }

  // Update last-updated badge in footer across all pages
  const lastUpdatedBadge = document.getElementById('last-updated-badge');
  if (lastUpdatedBadge && stats.generatedAt) {
    lastUpdatedBadge.textContent = `Last updated: ${formatUTC(new Date(stats.generatedAt))}`;
  }
}

// ---------- Today's Wakes List ----------
function populateTodayWakes() {
  if (!isClient) return;
  const list = document.getElementById('today-wakes-list');
  if (!list) return;
  list.innerHTML = '';
  const now = new Date();
  const todayStart = new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate(), 0, 0, 0));
  const firstWake = firstScheduledWakeForUtcDay(todayStart);
  const wakes = [];
  for (let i = 0; i < WAKES_PER_DAY; i++) {
    const wake = new Date(firstWake.getTime() + i * INTERVAL_MS);
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
    if (wake.getTime() + INTERVAL_MS <= now.getTime()) {
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
  const firstWake = firstScheduledWakeForUtcDay(todayStart);

  return Array.from({ length: WAKES_PER_DAY }, (_, index) => {
    const wake = new Date(firstWake.getTime() + index * INTERVAL_MS);
    const wakeMs = wake.getTime();
    const status = wakeMs + INTERVAL_MS <= Date.now()
      ? 'past'
      : wakeMs <= Date.now()
        ? 'current'
        : 'upcoming';
    return {
      wake: index + 1,
      date: wake.toLocaleDateString(undefined, { month: 'short', day: 'numeric' }),
      localTime: wake.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      utcTime: formatUTC(wake),
      status
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
    tr.className = `wake-${entry.status}`;
    if (entry.status === 'current') {
      tr.setAttribute('aria-current', 'true');
    }
    const tdNum = document.createElement('td');
    tdNum.textContent = entry.wake;
    const tdDate = document.createElement('td');
    tdDate.textContent = entry.date;
    const tdLocal = document.createElement('td');
    tdLocal.textContent = entry.localTime;
    const tdUtc = document.createElement('td');
    tdUtc.textContent = entry.utcTime;
    const tdStatus = document.createElement('td');
    tdStatus.textContent = entry.status === 'current' ? 'Current' : entry.status === 'past' ? 'Past' : 'Upcoming';
    tr.appendChild(tdNum);
    tr.appendChild(tdDate);
    tr.appendChild(tdLocal);
    tr.appendChild(tdUtc);
    tr.appendChild(tdStatus);
    tbody.appendChild(tr);
  });
}

// ---------- Recent Tweaks List ----------
function populateRecentTweaks() {
  if (!isClient) return;
  const list = document.getElementById('recent-tweaks-list');
  if (!list) return;
  list.innerHTML = '';
  fetch('recent-tweaks.json', { cache: 'no-cache' })
    .then(res => {
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      return res.json();
    })
    .then(tweaks => {
      recentTweaks = tweaks;
      const latestTweakEl = document.getElementById('latest-tweak');
      if (latestTweakEl) {
        if (tweaks.length > 0) {
          latestTweakEl.textContent = tweaks[0];
        } else {
          latestTweakEl.textContent = 'No recent updates';
        }
      }
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
  if (navigator.clipboard && typeof navigator.clipboard.writeText === 'function') {
    navigator.clipboard.writeText(text).then(() => {
      announceCopy(msgEl, regionEl);
    }).catch(() => {
      try {
        regionEl.select();
        document.execCommand('copy');
        announceCopy(msgEl, regionEl);
      } catch (e) {
        msgEl.textContent = 'Copy failed';
      }
    });
  } else {
    try {
      regionEl.select();
      document.execCommand('copy');
      announceCopy(msgEl, regionEl);
    } catch (e) {
      msgEl.textContent = 'Copy failed';
    }
  }
}

function copyCurrentWake() {
  const btn = document.getElementById('copy-current-wake-btn');
  const msg = document.getElementById('copy-current-wake-msg');
  const region = document.getElementById('copy-current-wake-region');
  if (!btn || !msg || !region) return;
  const wakeText = document.getElementById('current-wake').textContent;
  copyToClipboard(wakeText, msg, region);
}

function copyLastWake() {
  const btn = document.getElementById('copy-last-wake-btn');
  const msg = document.getElementById('copy-last-wake-msg');
  const region = document.getElementById('copy-last-wake-region');
  if (!btn || !msg || !region) return;
  const lastWakeText = document.getElementById('last-wake').textContent;
  copyToClipboard(lastWakeText, msg, region);
}

function copyDaysActive() {
  const btn = document.getElementById('copy-days-active-btn');
  const msg = document.getElementById('copy-days-active-msg');
  const region = document.getElementById('copy-days-active-region');
  if (!btn || !msg || !region) return;
  const daysText = document.getElementById('days-active').textContent;
  copyToClipboard(daysText, msg, region);
}

function copyWakesPerWeek() {
  const btn = document.getElementById('copy-wakes-per-week-btn');
  const msg = document.getElementById('copy-wakes-per-week-msg');
  const region = document.getElementById('copy-wakes-per-week-region');
  if (!btn || !msg || !region) return;
  const wakesPerWeekText = document.getElementById('wakes-per-week').textContent;
  copyToClipboard(wakesPerWeekText, msg, region);
}

function copyTotalWakes() {
  const btn = document.getElementById('copy-total-wakes-btn');
  const msg = document.getElementById('copy-total-wakes-msg');
  const region = document.getElementById('copy-total-wakes-region');
  if (!btn || !msg || !region) return;
  const totalWakesText = document.getElementById('total-wakes').textContent;
  copyToClipboard(totalWakesText, msg, region);
}

function copyWakesToday() {
  const btn = document.getElementById('copy-wakes-today-btn');
  const msg = document.getElementById('copy-wakes-today-msg');
  const region = document.getElementById('copy-wakes-today-region');
  if (!btn || !msg || !region) return;
  const wakesTodayText = document.getElementById('wakes-today').textContent;
  copyToClipboard(wakesTodayText, msg, region);
}

function copyWakesRemaining() {
  const btn = document.getElementById('copy-wakes-remaining-btn');
  const msg = document.getElementById('copy-wakes-remaining-msg');
  const region = document.getElementById('copy-wakes-remaining-region');
  if (!btn || !msg || !region) return;
  const wakesRemainingText = document.getElementById('wakes-remaining').textContent;
  copyToClipboard(wakesRemainingText, msg, region);
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
  const lines = ['Wake # | Date | Local Time | UTC Time | Status'];
  rows.forEach(row => {
    const cells = Array.from(row.querySelectorAll('td'));
    lines.push(`${cells[0]?.textContent ?? ''} | ${cells[1]?.textContent ?? ''} | ${cells[2]?.textContent ?? ''} | ${cells[3]?.textContent ?? ''} | ${cells[4]?.textContent ?? ''}`);
  });
  copyToClipboard(lines.join('\n'), msg, region);
}

function copyTodaysWakes() {
  const btn = document.getElementById('copy-todays-wakes-btn');
  const msg = document.getElementById('copy-todays-wakes-msg');
  const region = document.getElementById('copy-todays-wakes-region');
  if (!btn || !msg || !region) return;
  const list = document.getElementById('today-wakes-list');
  if (!list) return;
  const lines = Array.from(list.querySelectorAll('li'))
    .map(li => li.textContent.trim())
    .filter(Boolean);
  copyToClipboard(lines.join('\n'), msg, region);
}

function copyRecentTweaks() {
  const btn = document.getElementById('copy-recent-tweaks-btn');
  const msg = document.getElementById('copy-recent-tweaks-msg');
  const region = document.getElementById('copy-recent-tweaks-region');
  if (!btn || !msg || !region) return;
  const list = document.getElementById('recent-tweaks-list');
  if (!list) return;
  const lines = Array.from(list.querySelectorAll('li'))
    .map(li => li.textContent.trim())
    .filter(Boolean);
  copyToClipboard(lines.join('\n'), msg, region);
}

function copyLog() {
  const btn = document.getElementById('copy-log-btn');
  const msg = document.getElementById('copy-log-msg');
  const region = document.getElementById('copy-log-region');
  if (!btn || !msg || !region) return;
  fetch('data/gold/ticks.csv', { cache: 'no-cache' })
    .then(res => {
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      return res.text();
    }
    .then(text => {
      copyToClipboard(text, msg, region);
    })
    .catch(e => {
      console.error('Failed to copy log:', e);
      msg.textContent = 'Copy failed';
    });
}

// Copy the current UTC time to the clipboard (useful for timestamping notes or logs).
function copyCurrentTime() {
  const btn = document.getElementById('copy-current-time-btn');
  const msg = document.getElementById('copy-current-time-msg');
  const region = document.getElementById('copy-current-time-region');
  if (!btn || !msg || !region) return;
  const timeText = formatUTC(new Date());
  copyToClipboard(timeText, msg, region);
}

// Copy the current page URL to the clipboard (useful for 404 pages so
// visitors can easily share the broken link for reporting).
function copyCurrentUrl() {
  const btn = document.getElementById('copy-url-btn');
  const msg = document.getElementById('copy-url-msg');
  const region = document.getElementById('copy-url-region');
  if (!btn || !msg || !region) return;
  const urlText = window.location.href;
  copyToClipboard(urlText, msg, region);
}

// Open a pre-filled GitHub issue so visitors can report a broken link.
function reportBrokenLink() {
  const btn = document.getElementById('report-broken-link-btn');
  const msg = document.getElementById('report-broken-link-msg');
  const region = document.getElementById('report-broken-link-region');
  if (!btn || !msg || !region) return;
  const urlText = window.location.href;
  const title = `Broken link report: ${urlText}`;
  const body = `I found a broken link on Momento:\n\nURL: ${urlText}\n\nPlease investigate and fix.`;
  const issueUrl = `https://github.com/s04/momento/issues/new?title=${encodeURIComponent(title)}&body=${encodeURIComponent(body)}`;
  window.open(issueUrl, '_blank', 'noopener,noreferrer');
  msg.textContent = 'Opening GitHub issue…';
  region.value = `Opening issue for: ${urlText}`;
  window.setTimeout(() => { msg.textContent = ''; }, 3000);
}

// Download stats as a timestamped JSON file
function downloadStats() {
  fetch('stats.json', { cache: 'no-cache' })
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
      setTimeout(() => URL.revokeObjectURL(url), 1000);
    })
    .catch(e => {
      console.error('Failed to download stats:', e);
    });
}

// Download recent tweaks as a timestamped JSON file
function downloadRecentTweaks() {
  fetch('recent-tweaks.json', { cache: 'no-cache' })
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
      setTimeout(() => URL.revokeObjectURL(url), 1000);
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
  setTimeout(() => URL.revokeObjectURL(url), 1000);

  const msg = document.getElementById('download-waketime-schedule-msg');
  if (msg) {
    msg.textContent = 'Downloaded';
    window.setTimeout(() => { msg.textContent = ''; }, 3000);
  }
  const region = document.getElementById('download-waketime-schedule-region');
  if (region) region.value = `Downloaded ${schedule.length} waketime entries.`;
}

// Download the wake log (tick CSV) as a timestamped CSV file
function downloadLog() {
  fetch('data/gold/ticks.csv', { cache: 'no-cache' })
    .then(r => r.text())
    .then(text => {
      const blob = new Blob([text], { type: 'text/csv' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
      a.href = url;
      a.download = `ticks-${timestamp}.csv`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      setTimeout(() => URL.revokeObjectURL(url), 1000);

      const msg = document.getElementById('download-log-msg');
      if (msg) {
        msg.textContent = 'Downloaded';
        window.setTimeout(() => { msg.textContent = ''; }, 3000);
      }
      const region = document.getElementById('download-log-region');
      if (region) region.value = 'Downloaded tick log.';
    })
    .catch(e => {
      console.error('Failed to download log:', e);
      const msg = document.getElementById('download-log-msg');
      if (msg) msg.textContent = 'Download failed';
    });
}

// Print the current page
function printPage() {
  window.print();
}

// Dark mode toggle
const DARK_MODE_KEY = 'momento-dark-mode';
function applyDarkMode(isDark) {
  if (isDark) {
    document.documentElement.classList.add('dark-mode');
  } else {
    document.documentElement.classList.remove('dark-mode');
  }
  localStorage.setItem(DARK_MODE_KEY, isDark ? '1' : '0');
}

// Keep the toggle button honest: its label should describe the action it will
// perform next (switch to dark, or switch to light), not the current state.
function updateDarkModeButton(btn) {
  if (!btn) return;
  const isDark = document.documentElement.classList.contains('dark-mode');
  btn.textContent = isDark ? '☀️ Light mode' : '🌙 Dark mode';
  btn.setAttribute('aria-label', isDark ? 'Switch to light mode' : 'Switch to dark mode');
}

function initDarkMode() {
  const saved = localStorage.getItem(DARK_MODE_KEY);
  const isDark = saved === '1';
  applyDarkMode(isDark);
  const btn = document.getElementById('dark-mode-toggle');
  if (btn) {
    updateDarkModeButton(btn);
    btn.addEventListener('click', () => {
      const currentlyDark = document.documentElement.classList.contains('dark-mode');
      applyDarkMode(!currentlyDark);
      updateDarkModeButton(btn);
    });
  }
}

// ---------- Init ----------
if (isClient) {
  loadStats();
  id('copy-current-wake-btn')?.addEventListener('click', copyCurrentWake);
  id('copy-last-wake-btn')?.addEventListener('click', copyLastWake);
  id('copy-days-active-btn')?.addEventListener('click', copyDaysActive);
  id('copy-wakes-per-week-btn')?.addEventListener('click', copyWakesPerWeek);
  id('copy-total-wakes-btn')?.addEventListener('click', copyTotalWakes);
  id('copy-wakes-today-btn')?.addEventListener('click', copyWakesToday);
  id('copy-wakes-remaining-btn')?.addEventListener('click', copyWakesRemaining);
  id('copy-next-wake-btn')?.addEventListener('click', copyNextWakeTime);
  id('copy-stats-btn')?.addEventListener('click', copyStats);
  id('copy-freshness-btn')?.addEventListener('click', copyFreshness);
  id('copy-waketime-schedule-btn')?.addEventListener('click', copyWaketimeSchedule);
  id('copy-todays-wakes-btn')?.addEventListener('click', copyTodaysWakes);
  id('copy-recent-tweaks-btn')?.addEventListener('click', copyRecentTweaks);
  id('copy-log-btn')?.addEventListener('click', copyLog);
  id('copy-url-btn')?.addEventListener('click', copyCurrentUrl);
  id('copy-current-time-btn')?.addEventListener('click', copyCurrentTime);
  id('report-broken-link-btn')?.addEventListener('click', reportBrokenLink);
  id('download-stats-btn')?.addEventListener('click', downloadStats);
  id('download-recent-tweaks-btn')?.addEventListener('click', downloadRecentTweaks);
  id('download-waketime-schedule-btn')?.addEventListener('click', downloadWaketimeSchedule);
  id('download-log-btn')?.addEventListener('click', downloadLog);
  id('print-page-btn')?.addEventListener('click', printPage);
  setInterval(populateTodayWakes, 60000);
  setInterval(refreshLiveStatus, 60000);
  setInterval(populateWaketimeSchedule, 60000);
  setInterval(loadStats, STATS_REFRESH_MS);
  initDarkMode();
}
```

```file:MEMORY.md
2026-10-06: Added a favicon (clock + crescent moon) to all 11 HTML pages via a new site/favicon.svg and `<link rel="icon" href="favicon.svg">` in each page's `<head>`, giving the site a consistent brand mark in browser tabs. All 11 HTML pages still pass checks.
2026-10-06: Added a "⏰ Copy UTC time" button to site/404.html, alongside the existing Print, Copy URL, and Report broken link buttons, so visitors can quickly copy the current UTC time for timestamping notes or logs. The copyCurrentTime() function already exists in app.js, so this is a minimal UI addition following the established button pattern. All 11 HTML pages still pass checks.
2026-10-06: Refreshed site/stats.json to current schedule values (1004 total wakes; last wake 2026-10-06T16:37:00