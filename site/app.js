const summaryEl = document.querySelector("#summary");
const ticksEl = document.querySelector("#ticks");

function esc(value) {
  return String(value ?? "").replace(/[&<>"']/g, (char) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;",
  })[char]);
}

async function fetchSummary() {
  const response = await fetch("data/gold/summary.json", { cache: "no-store" });
  if (!response.ok) throw new Error("No tick data yet");
  return response.json();
}

function renderSummary(summary) {
  const latest = summary.latest || {};
  summaryEl.innerHTML = `
    <div class="stats">
      <div class="stat"><span>Ticks</span><strong>${esc(summary.tickCount || 0)}</strong></div>
      <div class="stat"><span>Latest</span><strong>${esc(latest.state || "-")}</strong></div>
      <div class="stat"><span>Model</span><strong>${esc(latest.routedModel || latest.model || "-")}</strong></div>
      <div class="stat"><span>Tokens</span><strong>${esc(latest.totalTokens || "-")}</strong></div>
    </div>
  `;
}

function renderTicks(summary) {
  const rows = [...(summary.recentTicks || [])].reverse();
  if (!rows.length) {
    ticksEl.innerHTML = `<p class="empty">Momento has not woken yet.</p>`;
    return;
  }
  ticksEl.innerHTML = `
    <div class="panel">
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>State</th>
            <th>Model</th>
            <th>Paths</th>
            <th>Reason</th>
          </tr>
        </thead>
        <tbody>
          ${rows.map((row) => `
            <tr>
              <td>${esc(row.runAt)}</td>
              <td><span class="state">${esc(row.state)}</span></td>
              <td>${esc(row.routedModel || row.model)}</td>
              <td>${esc(row.changedPaths || "-")}</td>
              <td>${esc(row.reason)}</td>
            </tr>
          `).join("")}
        </tbody>
      </table>
    </div>
  `;
}

fetchSummary()
  .then((summary) => {
    renderSummary(summary);
    renderTicks(summary);
  })
  .catch(() => {
    summaryEl.innerHTML = `
      <div class="stats">
        <div class="stat"><span>Ticks</span><strong>0</strong></div>
        <div class="stat"><span>Latest</span><strong>-</strong></div>
        <div class="stat"><span>Model</span><strong>-</strong></div>
        <div class="stat"><span>Tokens</span><strong>-</strong></div>
      </div>
    `;
    ticksEl.innerHTML = `<p class="empty">Momento has not woken yet.</p>`;
  });
