// Momento site-wide JavaScript
// Handles: dark mode, copy buttons, print, star button, live status updates

// ==== Helper functions ====
function showMsg(elemId, msg, duration = 2000) {
  const elem = document.getElementById(elemId);
  if (!elem) return;
  elem.textContent = msg;
  elem.style.opacity = '1';
  setTimeout(() => {
    elem.style.opacity = '0';
  }, duration);
}

// ==== CSV helper ====
function arrayToCsv(rows) {
  // rows is an array of arrays; first row is header
  return rows.map(row => row.map(cell => {
    const str = String(cell ?? '');
    // Escape double quotes and wrap in quotes if contains comma, quote, or newline
    if (str.includes('"') || str.includes(',') || str.includes('\n')) {
      return '"' + str.replace(/"/g, '""') + '"';
    }
    return str;
  }).join(',')).join('\n');
}

function downloadBlob(content, filename, mimeType) {
  const blob = new Blob([content], { type: mimeType });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  a.click();
  URL.revokeObjectURL(url);
}

// ==== Dark mode ====
const darkModeToggle = document.getElementById('dark-mode-toggle');

function updateDarkModeButton() {
  if (!darkModeToggle) return;
  const isDark = document.documentElement.classList.contains('dark');
  darkModeToggle.textContent = isDark ? '☀️ Light mode' : '🌙 Dark mode';
  darkModeToggle.setAttribute('aria-label', isDark ? 'Toggle light mode' : 'Toggle dark mode');
}

if (darkModeToggle) {
  // Initialize from stored preference or system
  const storedDark = localStorage.getItem('dark-mode');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  if (storedDark === 'enabled' || (!storedDark && prefersDark)) {
    document.documentElement.classList.add('dark');
  }
  // Sync button text and aria-label to the actual state
  updateDarkModeButton();

  darkModeToggle.addEventListener('click', () => {
    const isDark = document.documentElement.classList.toggle('dark');
    localStorage.setItem('dark-mode', isDark ? 'enabled' : 'disabled');
    updateDarkModeButton();
  });

  // Keyboard shortcut for dark mode: Ctrl+Shift+D
  window.addEventListener('keydown', (e) => {
    if ((e.ctrlKey || e.metaKey) && e.shiftKey && e.key === 'd') {
      e.preventDefault();
      const isDark = document.documentElement.classList.toggle('dark');
      localStorage.setItem('dark-mode', isDark ? 'enabled' : 'disabled');
      updateDarkModeButton();
    }
  });
}

// ==== Last-updated hydration ====
// Populate the footer #last-updated-badge and any body paragraph starting with
// "Last updated:" or "Latest wake:" from site/stats.json (lastChange/lastWake),
// so no static timestamp on the site can drift stale. If stats.json is missing,
// the static HTML text is left intact.
function hydrateLastUpdated() {
  fetch('stats.json')
    .then(r => r.json())
    .then(data => {
      const change = data.lastChange || data.lastWake || new Date().toISOString();
      const wake = data.lastWake || change;
      const badge = document.getElementById('last-updated-badge');
      if (badge) badge.textContent = 'Last updated: ' + change;
      document.querySelectorAll('p').forEach((p) => {
        const text = p.textContent.trim();
        if (text.startsWith('Last updated:')) {
          p.textContent = 'Last updated: ' + change;
        } else if (text.startsWith('Latest wake:')) {
          p.textContent = 'Latest wake: ' + wake;
        }
      });
    })
    .catch(() => {
      // stats.json unavailable; keep the static text
    });
}
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', hydrateLastUpdated);
} else {
  hydrateLastUpdated();
}

// ==== Copy helper ====
function copyText(text) {
  if (navigator.clipboard && navigator.clipboard.writeText) {
    return navigator.clipboard.writeText(text);
  }
  return new Promise((resolve, reject) => {
    const ta = document.createElement('textarea');
    ta.value = text;
    ta.style.position = 'fixed';
    ta.style.opacity = '0';
    document.body.appendChild(ta);
    ta.select();
    try {
      if (document.execCommand('copy')) resolve();
      else reject(new Error('copy failed'));
    } catch (err) {
      reject(err);
    }
    document.body.removeChild(ta);
  });
}

// ==== Page action buttons ====
// Handlers for the print / copy-URL / report-broken-link / copy-UTC-time /
// star buttons present on every page, and the changes-page export buttons.
// All are guarded so pages without a given button are unaffected.
const printBtn = document.getElementById('print-page-btn');
if (printBtn) {
  printBtn.addEventListener('click', () => window.print());
}

const copyUrlBtn = document.getElementById('copy-url-btn');
if (copyUrlBtn) {
  copyUrlBtn.addEventListener('click', () => {
    copyText(window.location.href)
      .then(() => showMsg('copy-url-msg', 'URL copied'))
      .catch(() => showMsg('copy-url-msg', 'Copy failed'));
  });
}

const reportBtn = document.getElementById('report-broken-link-btn');
if (reportBtn) {
  reportBtn.addEventListener('click', () => {
    const page = window.location.href;
    const title = encodeURIComponent('Broken link: ' + page);
    const body = encodeURIComponent('Page: ' + page + '\n\nWhat were you trying to find?');
    window.open(
      'https://github.com/s04/momento/issues/new?title=' + title + '&body=' + body,
      '_blank',
      'noopener,noreferrer'
    );
  });
}

const timeBtn = document.getElementById('copy-current-time-btn');
if (timeBtn) {
  timeBtn.addEventListener('click', () => {
    const now = new Date().toISOString();
    copyText(now)
      .then(() => showMsg('copy-current-time-msg', 'Time copied: ' + now))
      .catch(() => showMsg('copy-current-time-msg', 'Copy failed'));
  });
}

const starBtn = document.getElementById('star-btn');
if (starBtn) {
  starBtn.addEventListener('click', () => {
    window.open('https://github.com/s04/momento', '_blank', 'noopener,noreferrer');
    showMsg('star-msg', 'Opened GitHub — thanks for the star!');
  });
}

function changesRows() {
  const list = document.getElementById('changes-list');
  if (!list) return [];
  return Array.from(list.querySelectorAll('li')).map((li) => li.textContent.trim());
}

const copyChangesBtn = document.getElementById('copy-changes-btn');
if (copyChangesBtn) {
  copyChangesBtn.addEventListener('click', () => {
    copyText(JSON.stringify(changesRows(), null, 2))
      .then(() => showMsg('copy-changes-msg', 'Changes copied as JSON'))
      .catch(() => showMsg('copy-changes-msg', 'Copy failed'));
  });
}

const downloadChangesBtn = document.getElementById('download-changes-btn');
if (downloadChangesBtn) {
  downloadChangesBtn.addEventListener('click', () => {
    const rows = changesRows();
    if (!rows.length) {
      showMsg('download-changes-msg', 'No changes loaded yet');
      return;
    }
    downloadBlob(JSON.stringify(rows, null, 2), 'momento-changes.json', 'application/json');
    showMsg('download-changes-msg', 'JSON downloaded');
  });
}

const downloadCsvBtn = document.getElementById('download-changes-csv-btn');
if (downloadCsvBtn) {
  downloadCsvBtn.addEventListener('click', () => {
    const rows = changesRows();
    if (!rows.length) {
      showMsg('download-changes-csv-msg', 'No changes loaded yet');
      return;
    }
    downloadBlob(arrayToCsv([['change']].concat(rows.map((r) => [r]))), 'momento-changes.csv', 'text/csv');
    showMsg('download-changes-csv-msg', 'CSV downloaded');
  });
}

const shareChangesBtn = document.getElementById('share-changes-btn');
if (shareChangesBtn) {
  shareChangesBtn.addEventListener('click', () => {
    copyText(window.location.href)
      .then(() => showMsg('share-changes-msg', 'Page URL copied'))
      .catch(() => showMsg('share-changes-msg', 'Copy failed'));
  });
}
