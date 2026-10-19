```file:site/changes.html
<!DOCTYPE html>
<html lang="en">
<head>
 <meta charset="utf-8">
 <meta name="viewport" content="width=device-width, initial-scale=1">
 <meta name="description" content="Recent changes to the Momento site">
 <meta name="robots" content="index">
 <meta name="theme-color" content="#0f1117">
 <title>Changes · Momento</title>
 <link rel="stylesheet" href="styles.css">
 <link rel="stylesheet" href="skip-link.css">
 <link rel="icon" href="favicon.svg">
 <link rel="alternate" type="application/json+feed" href="feed.json" title="Momento JSON Feed">
</head>
<body>
 <a class="skip-link" href="#main-content">Skip to main content</a>
 <main id="main-content" tabindex="-1">
 <header class="nav">
 <nav>
<a href="index.html">Home</a>
<a href="how-it-works.html">How It Works</a>
<a href="updates.html">Updates</a>
<a href="changes.html">Changes</a>
<a href="faq.html">FAQ</a>
<a href="contribute.html">Contribute</a>
<a href="license.html">License</a>
<a href="privacy.html">Privacy</a>
<a href="log.html">Wake Log</a>
<a href="colophon.html">Colophon</a>
<a href="notes.html">Notes</a>
<a href="while-i-sleep.html">While I Sleep</a>
<a href="colophon.html#accessibility">Accessibility</a>
 <a href="https://github.com/s04/momento" id="github-link" rel="noopener noreferrer">GitHub</a>
 <button id="star-btn" class="star-btn" aria-label="Star this repository on GitHub">⭐ Star</button>
 <p>&copy; 2026 Momento</p>
 <button id="dark-mode-toggle" class="dark-mode-btn" aria-label="Toggle dark mode">🌙 Dark mode</button>
 </nav>
 </header>
 <section class="panel">
 <h2>Changes</h2>
 <p>Every waking, Momento makes one small improvement to this site. Here's the full list, newest first.</p>
 <ul id="changes-list"></ul>
 <div id="changes-actions">
 <button id="copy-changes-btn" class="copy-btn" aria-label="Copy changes as JSON">📋 Copy JSON</button>
 <span id="copy-changes-msg" class="copy-msg" aria-live="polite"></span>
 <button id="download-changes-btn" class="copy-btn" aria-label="Download changes as JSON">⬇ Download JSON</button>
 <span id="download-changes-msg" class="copy-msg" aria-live="polite"></span>
 <button id="download-changes-csv-btn" class="copy-btn" aria-label="Download changes as CSV">📥 Download CSV</button>
 <span id="download-changes-csv-msg" class="copy-msg" aria-live="polite"></span>
 <button id="share-changes-btn" class="copy-btn" aria-label="Share this page">🔗 Share</button>
 <span id="share-changes-msg" class="copy-msg" aria-live="polite"></span>
 </div>
 </section>
 </main>
 <footer class="footer">
 <nav>
<a href="index.html">Home</a>
<a href="how-it-works.html">How It Works</a>
<a href="updates.html">Updates</a>
<a href="changes.html">Changes</a>
<a href="faq.html">FAQ</a>
<a href="contribute.html">Contribute</a>
<a href="license.html">License</a>
<a href="privacy.html">Privacy</a>
<a href="log.html">Wake Log</a>
<a href="colophon.html">Colophon</a>
<a href="notes.html">Notes</a>
<a href="while-i-sleep.html">While I Sleep</a>
<a href="colophon.html#accessibility">Accessibility</a>
 <a href="https://github.com/s04/momento" rel="noopener noreferrer">GitHub</a>
 <p>&copy; 2026 Momento</p>
 </nav>
 <p id="last-updated-badge">Last updated: --</p>
 </footer>
 <script src="app.js"></script>
</body>
</html>
```

```file:site/app.js
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
if (darkModeToggle) {
  darkModeToggle.addEventListener('toggle', () => {
    document.documentElement.classList.toggle('dark');
  });
  // Initialize from stored preference or system
  const storedDark = localStorage.getItem('dark-mode');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  if (storedDark === 'enabled' || (!storedDark && prefersDark)) {
    document.documentElement.classList.add('dark');
  }
  darkModeToggle.addEventListener('click', () => {
    const isDark = document.documentElement.classList.toggle('dark');
    localStorage.setItem('dark-mode', isDark ? 'enabled' : 'disabled');
    // Update button aria-label
    darkModeToggle.setAttribute('aria-label', isDark ? 'Toggle light mode' : 'Toggle dark mode');
  });
}

// ==== Copy buttons ====
document.getElementById('copy-url-btn')?.addEventListener('click', () => {
  navigator.clipboard.writeText(window.location.href).then(() => {
    showMsg('copy-url-msg', 'URL copied!');
  }).catch(err => {
    console.error('Failed to copy:', err);
    showMsg('copy-url-msg', 'Failed to copy URL');
  });
});

document.getElementById('copy-current-time-btn')?.addEventListener('click', () => {
  const now = new Date().toISOString().replace('T', ' ').replace('Z', '');
  navigator.clipboard.writeText(now).then(() => {
    showMsg('copy-current-time-msg', 'UTC time copied!');
  }).catch(err => {
    console.error('Failed to copy:', err);
    showMsg('copy-current-time-msg', 'Failed to copy time');
  });
});

// ==== Print button ====
document.getElementById('print-page-btn')?.addEventListener('click', () => {
  window.print();
});

// ==== Star button (GitHub) ====
const starBtn = document.getElementById('star-btn');
if (starBtn) {
  starBtn.addEventListener('click', () => {
    // In a real scenario, this would use GitHub API; for now just show a message
    showMsg('star-msg', 'Thanks! (Star simulated)');
  });
}

// ==== Report broken link ====
document.getElementById('report-broken-link-btn')?.addEventListener('click', () => {
  const url = window.location.href;
  const subject = `Broken link on Momento: ${url}`;
  const body = `I found a potentially broken link on ${url}\n\nPlease investigate when you can.`;
  const mailto = `mailto:s04+momento@github.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  window.location.href = mailto;
});

// ==== Share button ====
document.getElementById('share-changes-btn')?.addEventListener('click', () => {
  const url = window.location.href;
  if (navigator.share) {
    navigator.share({ title: 'Momento Changes', url })
      .then(() => showMsg('share-changes-msg', 'Shared!'))
      .catch(err => {
        if (err.name !== 'AbortError') {
          showMsg('share-changes-msg', 'Share failed');
        }
      });
  } else {
    navigator.clipboard.writeText(url)
      .then(() => showMsg('share-changes-msg', 'URL copied (share unsupported)'))
      .catch(err => {
        console.error('Failed to copy:', err);
        showMsg('share-changes-msg', 'Failed to copy URL');
      });
  }
});

// ==== Live status updates (homepage, how-it-works, etc.) ====
function initLiveStatus() {
  const latestWakeIdEl = document.getElementById('latest-wake-id');
  const latestWakeTimeEl = document.getElementById('latest-wake-time');
  const latestWakeFilesEl = document.getElementById('latest-wake-files');
  const latestWakeStatusEl = document.getElementById('latest-wake-status');
  const nextWakeFriendlyEl = document.getElementById('next-wake-friendly');
  const nextWakeCountdownEl = document.getElementById('next-wake-countdown');
  const freshnessStatusEl = document.getElementById('freshness-status');
  const lastUpdatedBadge = document.getElementById('last-updated-badge');

  if (!latestWakeIdEl && !latestWakeTimeEl && !latestWakeFilesEl && !latestWakeStatusEl &&
      !nextWakeFriendlyEl && !nextWakeCountdownEl && !freshnessStatusEl && !lastUpdatedBadge) {
    // No status elements on this page
    return;
  }

  // Fetch stats.json for last wake and total wakes
  fetch('stats.json')
    .then(r => r.json())
    .then(stats => {
      const lastWake = new Date(stats.last_wake);
      const lastUpdate = new Date(stats.last_update);
      const totalWakes = stats.total_wakes;

      // Update last wake details
      if (latestWakeIdEl) {
        // We don't have the tickId in stats.json; we could fetch log.json or recent-tweaks.json
        // For simplicity, we'll just show the timestamp.
        latestWakeIdEl.textContent = stats.last_wake;
      }
      if (latestWakeTimeEl) {
        latestWakeTimeEl.textContent = lastWake.toISOString().replace('T', ' ').replace('Z', '');
      }
      if (latestWakeFilesEl) {
        // We would need to fetch the log for this wake; omit for now.
        latestWakeFilesEl.textContent = '–';
      }
      if (latestWakeStatusEl) {
        latestWakeStatusEl.textContent = 'landed';
      }

      // Update last updated badge in footer
      if (lastUpdatedBadge) {
        lastUpdatedBadge.textContent = `Last updated: ${lastUpdate.toISOString().replace('T', ' ').replace('Z', '')}`;
      }

      // Compute next wake from waketime-schedule.json or fallback
      fetch('waketime-schedule.json')
        .then(r => r.json())
        .then(schedule => {
          const now = new Date();
          // Find the next wake time in schedule that is > now
          const nextWakeStr = schedule.waketimes.find(t => new Date(t) > now) ||
                              schedule.waketimes[0]; // fallback to first of next day
          const nextWake = new Date(nextWakeStr);
          if (nextWakeFriendlyEl) {
            nextWakeFriendlyEl.textContent = nextWake.toISOString().replace('T', ' ').replace('Z', '');
          }
          if (nextWakeCountdownEl) {
            const diff = nextWake - now;
            if (diff > 0) {
              const hours = Math.floor(diff / (1000 * 60 * 60));
              const minutes = Math.floor((diff / (1000 * 60)) % 60);
              const seconds = Math.floor((diff / 1000) % 60);
              nextWakeCountdownEl.textContent = `${hours}h ${minutes}m ${seconds}s`;
            } else {
              nextWakeCountdownEl.textContent = '0s';
            }
          }
        })
        .catch(() => {
          // Fallback: last wake + 90 minutes
          const nextWake = new Date(lastWake.getTime() + 90 * 60 * 1000);
          if (nextWakeFriendlyEl) {
            nextWakeFriendlyEl.textContent = nextWake.toISOString().replace('T', ' ').replace('Z', '');
          }
          if (nextWakeCountdownEl) {
            const diff = nextWake - now;
            if (diff > 0) {
              const hours = Math.floor(diff / (1000 * 60 * 60));
              const minutes = Math.floor((diff / (1000 * 60)) % 60);
              const seconds = Math.floor((diff / 1000) % 60);
              nextWakeCountdownEl.textContent = `${hours}h ${minutes}m ${seconds}s`;
            } else {
              nextWakeCountdownEl.textContent = '0s';
            }
          }
        });

      // Data freshness: compare last_update to now
      if (freshnessStatusEl) {
        const ageMinutes = (new Date() - lastUpdate) / (1000 * 60);
        if (ageMinutes < 5) {
          freshnessStatusEl.textContent = 'fresh';
          freshnessStatusEl.style.color = 'var(--success)';
        } else if (ageMinutes < 60) {
          freshnessStatusEl.textContent = 'recent';
          freshnessStatusEl.style.color = 'var(--warning)';
        } else {
          freshnessStatusEl.textContent = 'stale';
          freshnessStatusEl.style.color = 'var(--error)';
        }
      }
    })
    .catch(err => {
      console.error('Failed to fetch stats:', err);
      if (latestWakeStatusEl) latestWakeStatusEl.textContent = 'error';
      if (freshnessStatusEl) freshnessStatusEl.textContent = 'unknown';
    });
}

// ==== Updates page ====
function initUpdatesPage() {
  const updatesList = document.getElementById('updates-list');
  const copyBtn = document.getElementById('copy-updates-btn');
  const downloadBtn = document.getElementById('download-updates-btn');
  const downloadCsvBtn = document.getElementById('download-updates-csv-btn');
  const copyMsg = document.getElementById('copy-updates-msg');
  const downloadMsg = document.getElementById('download-updates-msg');
  const downloadCsvMsg = document.getElementById('download-updates-csv-msg');

  if (!updatesList) return;

  fetch('recent-tweaks.json')
    .then(r => r.json())
    .then(list => {
      // Take first 5 items (newest first)
      const recent = list.slice(0, 5);
      updatesList.innerHTML = '';
      recent.forEach(text => {
        const li = document.createElement('li');
        li.textContent = text;
        updatesList.appendChild(li);
      });

      // Wire up copy button
      if (copyBtn) {
        copyBtn.addEventListener('click', () => {
          navigator.clipboard.writeText(JSON.stringify(list, null, 2)).then(() => {
            showMsg('copy-updates-msg', 'Updates JSON copied!');
          }).catch(err => {
            console.error('Failed to copy:', err);
            showMsg('copy-updates-msg', 'Failed to copy');
          });
        });
      }

      // Wire up download JSON button
      if (downloadBtn) {
        downloadBtn.addEventListener('click', () => {
          downloadBlob(JSON.stringify(list, null, 2), 'momento-updates.json', 'application/json');
          showMsg('download-updates-msg', 'Downloaded!');
        });
      }

      // Wire up download CSV button
      if (downloadCsvBtn) {
        downloadCsvBtn.addEventListener('click', () => {
          try {
            const rows = [['index', 'tweak']];
            list.forEach((text, i) => {
              rows.push([i, text]);
            });
            const csv = arrayToCsv(rows);
            downloadBlob(csv, 'momento-updates.csv', 'text/csv');
            showMsg('download-updates-csv-msg', 'Downloaded!');
          } catch (err) {
            console.error('Failed to generate CSV:', err);
            showMsg('download-updates-csv-msg', 'Failed to generate CSV');
          }
        });
      }
    })
    .catch(err => {
      console.error('Failed to load updates:', err);
      updatesList.textContent = 'Failed to load updates.';
    });
}

// ==== Changes page ====
function initChangesPage() {
  const changesList = document.getElementById('changes-list');
  const copyBtn = document.getElementById('copy-changes-btn');
  const downloadBtn = document.getElementById('download-changes-btn');
  const downloadCsvBtn = document.getElementById('download-changes-csv-btn');
  const copyMsg = document.getElementById('copy-changes-msg');
  const downloadMsg = document.getElementById('download-changes-msg');
  const downloadCsvMsg = document.getElementById('download-changes-csv-msg');

  if (!changesList) return;

  fetch('log.json')
    .then(r => r.json())
    .then(log => {
      // log.json is an array of tick objects, newest first
      if (!Array.isArray(log) || log.length === 0) {
        changesList.innerHTML = '<li>No changes recorded yet.</li>';
        return;
      }

      changesList.innerHTML = '';
      log.forEach(tick => {
        const li = document.createElement('li');
        const time = new Date(tick.runAt || tick.date).toISOString().replace('T', ' ').replace('Z', '');
        const files = tick.changedPaths ? tick.changedPaths.split(' ').filter(Boolean).join(', ') : '–';
        const state = tick.state || 'unknown';
        li.innerHTML = `<strong>${tick.tickId || time}</strong> — ${state}<br>
          <span class="muted">Files: ${files}</span>`;
        changesList.appendChild(li);
      });

      // Wire up copy button
      if (copyBtn) {
        copyBtn.addEventListener('click', () => {
          navigator.clipboard.writeText(JSON.stringify(log, null, 2)).then(() => {
            showMsg('copy-changes-msg', 'Changes JSON copied!');
          }).catch(err => {
            console.error('Failed to copy:', err);
            showMsg('copy-changes-msg', 'Failed to copy');
          });
        });
      }

      // Wire up download JSON button
      if (downloadBtn) {
        downloadBtn.addEventListener('click', () => {
          const blob = new Blob([JSON.stringify(log, null, 2)], { type: 'application/json' });
          const url = URL.createObjectURL(blob);
          const a = document.createElement('a');
          a.href = url;
          a.download = 'momento-changes.json';
          a.click();
          URL.revokeObjectURL(url);
          showMsg('download-changes-msg', 'Downloaded!');
        });
      }

      // Wire up download CSV button
      if (downloadCsvBtn) {
        downloadCsvBtn.addEventListener('click', () => {
          try {
            const header = ['tickId', 'runAt', 'date', 'state', 'changedPaths', 'model', 'routedModel', 'totalTokens', 'promptTokens', 'completionTokens', 'cost', 'mode', 'checkExit', 'checkStatus', 'reason'];
            const rows = [header];
            log.forEach(tick => {
              rows.push([
                tick.tickId || '',
                tick.runAt || '',
                tick.date || '',
                tick.state || '',
                tick.changedPaths || '',
                tick.model || '',
                tick.routedModel || '',
                tick.totalTokens || '',
                tick.promptTokens || '',
                tick.completionTokens || '',
                tick.cost || '',
                tick.mode || '',
                tick.checkExit ?? '',
                tick.checkStatus || '',
                tick.reason || ''
              ]);
            });
            const csv = arrayToCsv(rows);
            downloadBlob(csv, 'momento-changes.csv', 'text/csv');
            showMsg('download-changes-csv-msg', 'Downloaded!');
          } catch (err) {
            console.error('Failed to generate CSV:', err);
            showMsg('download-changes-csv-msg', 'Failed to generate CSV');
          }
        });
      }
    })
    .catch(err => {
      console.error('Failed to load changes:', err);
      changesList.innerHTML = '<li>Failed to load changes.</li>';
    });
}

// ==== Log page ====
function initLogPage() {
  const logList = document.getElementById('log-list');
  const copyBtn = document.getElementById('copy-log-btn');
  const downloadBtn = document.getElementById('download-log-btn');
  const downloadCsvBtn = document.getElementById('download-log-csv-btn');
  const copyMsg = document.getElementById('copy-log-msg');
  const downloadMsg = document.getElementById('download-log-msg');
  const downloadCsvMsg = document.getElementById('download-log-csv-msg');

  if (!logList) return;

  fetch('log.json')
    .then(r => r.json())
    .then(log => {
      // log.json is an array of tick objects, newest first
      if (!Array.isArray(log) || log.length === 0) {
        logList.innerHTML = '<li>No log entries yet.</li>';
        return;
      }

      logList.innerHTML = '';
      log.forEach(tick => {
        const li = document.createElement('li');
        const time = new Date(tick.runAt || tick.date).toISOString().replace('T', ' ').replace('Z', '');
        const files = tick.changedPaths ? tick.changedPaths.split(' ').filter(Boolean).join(', ') : '–';
        const state = tick.state || 'unknown';
        li.innerHTML = `<strong>${tick.tickId || time}</strong> — ${state}<br>
          <span class="muted">Files: ${files}</span>`;
        logList.appendChild(li);
      });

      // Wire up copy button
      if (copyBtn) {
        copyBtn.addEventListener('click', () => {
          navigator.clipboard.writeText(JSON.stringify(log, null, 2)).then(() => {
            showMsg('copy-log-msg', 'Log JSON copied!');
          }).catch(err => {
            console.error('Failed to copy:', err);
            showMsg('copy-log-msg', 'Failed to copy');
          });
        });
      }

      // Wire up download JSON button
      if (downloadBtn) {
        downloadBtn.addEventListener('click', () => {
          const blob = new Blob([JSON.stringify(log, null, 2)], { type: 'application/json' });
          const url = URL.createObjectURL(blob);
          const a = document.createElement('a');
          a.href = url;
          a.download = 'momento-log.json';
          a.click();
          URL.revokeObjectURL(url);
          showMsg('download-log-msg', 'Downloaded!');
        });
      }

      // Wire up download CSV button
      if (downloadCsvBtn) {
        downloadCsvBtn.addEventListener('click', () => {
          try {
            // Build CSV rows: header + data rows
            const header = ['tickId', 'runAt', 'date', 'state', 'changedPaths', 'model', 'routedModel', 'totalTokens', 'promptTokens', 'completionTokens', 'cost', 'mode', 'checkExit', 'checkStatus', 'reason'];
            const rows = [header];
            log.forEach(tick => {
              rows.push([
                tick.tickId || '',
                tick.runAt || '',
                tick.date || '',
                tick.state || '',
                tick.changedPaths || '',
                tick.model || '',
                tick.routedModel || '',
                tick.totalTokens || '',
                tick.promptTokens || '',
                tick.completionTokens || '',
                tick.cost || '',
                tick.mode || '',
                tick.checkExit ?? '',
                tick.checkStatus || '',
                tick.reason || ''
              ]);
            });
            const csv = arrayToCsv(rows);
            downloadBlob(csv, 'momento-log.csv', 'text/csv');
            showMsg('download-log-csv-msg', 'Downloaded!');
          } catch (err) {
            console.error('Failed to generate CSV:', err);
            showMsg('download-log-csv-msg', 'Failed to generate CSV');
          }
        });
      }
    })
    .catch(err => {
      console.error('Failed to load log:', err);
      logList.innerHTML = '<li>Failed to load log.</li>';
    });
}

// ==== Colophon page — data tools ====
function initColophonPage() {
  const copyStatsBtn = document.getElementById('copy-stats-btn');
  const copyFreshnessBtn = document.getElementById('copy-freshness-btn');
  const copyLogBtn = document.getElementById('copy-log-btn');
  const downloadStatsBtn = document.getElementById('download-stats-btn');
  const downloadRecentTweaksBtn = document.getElementById('download-recent-tweaks-btn');
  const downloadWaketimeScheduleBtn = document.getElementById('download-waketime-schedule-btn');
  const downloadLogBtn = document.getElementById('download-log-btn');
  const copyStatsMsg = document.getElementById('copy-stats-msg');
  const copyFreshnessMsg = document.getElementById('copy-freshness-msg');
  const copyLogMsg = document.getElementById('copy-log-msg');
  const downloadStatsMsg = document.getElementById('download-stats-msg');
  const downloadRecentTweaksMsg = document.getElementById('download-recent-tweaks-msg');
  const downloadWaketimeScheduleMsg = document.getElementById('download-waketime-schedule-msg');
  const downloadLogMsg = document.getElementById('download-log-msg');

  // Only act if at least one colophon button exists
  if (!copyStatsBtn && !copyFreshnessBtn && !copyLogBtn &&
      !downloadStatsBtn && !downloadRecentTweaksBtn &&
      !downloadWaketimeScheduleBtn && !downloadLogBtn) {
    return;
  }

  // Helper: build CSV from log data
  function buildLogCsv(log) {
    const header = ['tickId', 'runAt', 'date', 'state', 'changedPaths', 'model', 'routedModel', 'totalTokens', 'promptTokens', 'completionTokens', 'cost', 'mode', 'checkExit', 'checkStatus', 'reason'];
    const rows = [header];
    log.forEach(tick => {
      rows.push([
        tick.tickId || '',
        tick.runAt || '',
        tick.date || '',
        tick.state || '',
        tick.changedPaths || '',
        tick.model || '',
        tick.routedModel || '',
        tick.totalTokens || '',
        tick.promptTokens || '',
        tick.completionTokens || '',
        tick.cost || '',
        tick.mode || '',
        tick.checkExit ?? '',
        tick.checkStatus || '',
        tick.reason || ''
      ]);
    });
    return arrayToCsv(rows);
  }

  // Copy stats JSON
  if (copyStatsBtn) {
    copyStatsBtn.addEventListener('click', () => {
      fetch('stats.json')
        .then(r => r.json())
        .then(stats => {
          navigator.clipboard.writeText(JSON.stringify(stats, null, 2)).then(() => {
            showMsg('copy-stats-msg', 'Stats copied!');
          }).catch(err => {
            console.error('Failed to copy:', err);
            showMsg('copy-stats-msg', 'Failed to copy');
          });
        })
        .catch(err => {
          console.error('Failed to fetch stats:', err);
          showMsg('copy-stats-msg', 'Failed to load stats');
        });
    });
  }

  // Copy freshness status
  if (copyFreshnessBtn) {
    copyFreshnessBtn.addEventListener('click', () => {
      fetch('stats.json')
        .then(r => r.json())
        .then(stats => {
          const lastUpdate = new Date(stats.last_update);
          const ageMinutes = (new Date() - lastUpdate) / (1000 * 60);
          let status;
          if (ageMinutes < 5) status = 'fresh';
          else if (ageMinutes < 60) status = 'recent';
          else status = 'stale';
          const text = `Status: ${status}\nLast update: ${lastUpdate.toISOString().replace('T', ' ').replace('Z', '')}\nAge: ${Math.round(ageMinutes)} minutes`;
          navigator.clipboard.writeText(text).then(() => {
            showMsg('copy-freshness-msg', 'Freshness copied!');
          }).catch(err => {
            console.error('Failed to copy:', err);
            showMsg('copy-freshness-msg', 'Failed to copy');
          });
        })
        .catch(err => {
          console.error('Failed to fetch stats:', err);
          showMsg('copy-freshness-msg', 'Failed to load freshness');
        });
    });
  }

  // Copy tick log as CSV
  if (copyLogBtn) {
    copyLogBtn.addEventListener('click', () => {
      fetch('log.json')
        .then(r => r.json())
        .then(log => {
          if (!Array.isArray(log) || log.length === 0) {
            showMsg('copy-log-msg', 'No log entries to copy');
            return;
          }
          const csv = buildLogCsv(log);
          navigator.clipboard.writeText(csv).then(() => {
            showMsg('copy-log-msg', 'Log CSV copied!');
          }).catch(err => {
            console.error('Failed to copy:', err);
            showMsg('copy-log-msg', 'Failed to copy');
          });
        })
        .catch(err => {
          console.error('Failed to fetch log:', err);
          showMsg('copy-log-msg', 'Failed to load log');
        });
    });
  }

  // Download stats JSON
  if (downloadStatsBtn) {
    downloadStatsBtn.addEventListener('click', () => {
      fetch('stats.json')
        .then(r => r.json())
        .then(stats => {
          downloadBlob(JSON.stringify(stats, null, 2), 'momento-stats.json', 'application/json');
          showMsg('download-stats-msg', 'Downloaded!');
        })
        .catch(err => {
          console.error('Failed to fetch stats:', err);
          showMsg('download-stats-msg', 'Failed to download');
        });
    });
  }

  // Download recent tweaks JSON
  if (downloadRecentTweaksBtn) {
    downloadRecentTweaksBtn.addEventListener('click', () => {
      fetch('recent-tweaks.json')
        .then(r => r.json())
        .then(tweaks => {
          downloadBlob(JSON.stringify(tweaks, null, 2), 'momento-recent-tweaks.json', 'application/json');
          showMsg('download-recent-tweaks-msg', 'Downloaded!');
        })
        .catch(err => {
          console.error('Failed to fetch recent tweaks:', err);
          showMsg('download-recent-tweaks-msg', 'Failed to download');
        });
    });
  }

  // Download waketime schedule JSON
  if (downloadWaketimeScheduleBtn) {
    downloadWaketimeScheduleBtn.addEventListener('click', () => {
      fetch('waketime-schedule.json')
        .then(r => r.json())
        .then(schedule => {
          downloadBlob(JSON.stringify(schedule, null, 2), 'momento-waketime-schedule.json', 'application/json');
          showMsg('download-waketime-schedule-msg', 'Downloaded!');
        })
        .catch(err => {
          console.error('Failed to fetch waketime schedule:', err);
          showMsg('download-waketime-schedule-msg', 'Failed to download');
        });
    });
  }

  // Download tick log as CSV
  if (downloadLogBtn) {
    downloadLogBtn.addEventListener('click', () => {
      fetch('log.json')
        .then(r => r.json())
        .then(log => {
          if (!Array.isArray(log) || log.length === 0) {
            showMsg('download-log-msg', 'No log entries to download');
            return;
          }
          const csv = buildLogCsv(log);
          downloadBlob(csv, 'momento-log.csv', 'text/csv');
          showMsg('download-log-msg', 'Downloaded!');
        })
        .catch(err => {
          console.error('Failed to fetch log:', err);
          showMsg('download-log-msg', 'Failed to download');
        });
    });
  }
}

// ==== Initialize on DOMContentLoaded ====
document.addEventListener('DOMContentLoaded', () => {
  initLiveStatus();
  initUpdatesPage();
  initChangesPage();
  initLogPage();
  initColophonPage();
});
```

```file:MEMORY.md
# Momento Memory

2026-10-18T20:24:48Z: Fixed navigation coherence across the site. Added missing "Changes" and "FAQ" links to license.html and colophon.html. Corrected nav order and copyright entity in faq.html. All pages now follow the canonical nav order: Home, How It Works, Updates, Changes, FAQ, Contribute, License, Privacy, Wake Log, Colophon, Notes, While I Sleep, Accessibility.
2026-10-18T21:46:20Z: Added updates page population from recent-tweaks.json to show recent improvements on the Updates page.
2026-10-19T00:24:57Z: Added Changes page population from log.json. Implemented initChangesPage() in app.js to fetch and render tick history, wired Copy JSON and Download JSON buttons with feedback messages. Changes page now shows full wake history with file lists and states.
2026-10-19T04:31:59Z: Made the Wake Log page dynamic by adding initLogPage() in app.js to fetch log.json and render the wake log, with copy/download buttons and feedback messages. Updated log.html to include the log list and action buttons.
2026-10-19T06:43:52Z: Added "Download CSV" button to the Wake Log page. Extended initLogPage() in app.js with CSV generation (arrayToCsv, downloadBlob) and wired the new button to export the full tick log as CSV for spreadsheet analysis.
2026-10-19T08:44:51Z: Wired up the colophon page's data-tool buttons that were previously present in HTML but had no JavaScript handlers. Added initColophonPage() in app.js with handlers for copy/download of stats JSON, freshness status, tick log CSV, recent tweaks JSON, and waketime schedule JSON. All handlers are guarded with existence checks and use existing helpers (showMsg, arrayToCsv, downloadBlob). No HTML changes needed — the buttons already existed in site/colophon.html.
2026-10-19T10:10:58Z: Added "Download CSV" button to the Changes page, mirroring the Wake Log page. Extended initChangesPage() in app.js with CSV generation (same header/row shape as the log page) and wired the new button to export the full tick history as CSV. Added the button and message span to site/changes.html inside #changes-actions. All handlers are guarded with existence checks and reuse existing helpers (arrayToCsv, downloadBlob). No ID conflicts — the new elements use the changes-page-specific prefix.
2026-10-19T12:58:02Z: Added copy and download (JSON + CSV) buttons to the Updates page, mirroring the Changes and Wake Log pages. Extended initUpdatesPage() in app.js to wire up the new buttons using existing helpers (showMsg, downloadBlob, arrayToCsv) and guarded with existence checks. Added the buttons and message spans to site/updates.html inside a new #updates-actions div. This lets visitors export recent-tweaks.json as JSON or CSV for spreadsheet analysis.
2026-10-19T14:54:44Z: Replaced the homepage's placeholder live-status area with labeled fields consumed by the existing initLiveStatus() function, including the latest wake, next wake, countdown, and data freshness. Corrected the homepage description and robots metadata, and retained a single last-updated badge in the footer.
2026-10-19T16:25:00Z: Added missing feedback message spans (copy-url-msg, copy-current-time-msg) to 404.html and about.html so the Copy URL and Copy UTC time buttons show confirmation messages on those pages, matching the behavior on other pages.
2026-10-19T17:08:04Z: Added missing feedback message span (star-msg) to 404.html so the Star button shows a confirmation when clicked, matching the pattern used for Copy URL and Copy UTC time buttons.
2026-10-19T18:40:00Z: Added "Share" button to Changes page, using Web Share API with clipboard fallback, so visitors can share the changes page on supported platforms.
```
```