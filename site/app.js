document.addEventListener('DOMContentLoaded', function() {
  const lastUpdateEl = document.getElementById('last-update');
  if (lastUpdateEl) {
    const now = new Date();
    lastUpdateEl.textContent = now.toLocaleString();
  }
});
