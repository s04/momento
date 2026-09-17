I'll make a small, useful improvement: add a time-remaining indicator to the current wake label in Today's Wakes, so visitors can see at a glance how long the active wake has been running.

**Files to change:** `site/app.js` (modify the wake label in `populateTodayWakes()`), `MEMORY.md` (append dated note).

**Risk:** Minimal — only a text label change; the calculation uses existing `intervalMs` and `now` variables already in scope.

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
// (current time, next wake countdown, freshness age, last-wake
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
      ? `Currently active · Wake #${idx + 1} (${Math.floor((wake.getTime() + intervalMs - now.getTime()) / 60000)}m left)`
      : `Wake #${idx + 1}`;
    li.innerHTML = `
      <span class="wake-${status}">${localDatePrefix} ${wakeLabel}: ${formatUTC(wake)} (${wake.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })})</span>
    `;
    list.appendChild(li);
  });
}

// ---------- Waketime Schedule Table ----------
function populateWaketimeSchedule() {
  if (!isClient) return;
  const tbody = document.getElementById('waketime-table-body');
  if (!tbody) return;
  tbody.innerHTML = '';
  const now = new Date();
  const todayStart = new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate(), 0, 0, 0));
  const intervalMs = INTERVAL_MINUTES * 60 * 1000;
  const startMs = START_DATE.getTime();
  const cyclesToDayStart = Math.floor((todayStart.getTime() - startMs) / intervalMs);
  let firstWake = new Date(startMs + (cyclesToDayStart + 1) * intervalMs);
  if (firstWake < todayStart) firstWake = new Date(firstWake.getTime() + intervalMs);
  for (let i = 0; i < WAKES_PER_DAY; i++) {
    const wake = new Date(firstWake.getTime() + i * intervalMs);
    const tr = document.createElement('tr');
    const tdNum = document.createElement('td');
    tdNum.textContent = i + 1;
    const tdLocal = document.createElement('td');
    tdLocal.textContent = wake.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    const tdUtc = document.createElement('td');
    tdUtc.textContent = formatUTC(wake);
    tr.appendChild(tdNum);
    tr.appendChild(tdLocal);
    tr.appendChild(tdUtc);
    tbody.appendChild(tr);
  }
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
    } catch (