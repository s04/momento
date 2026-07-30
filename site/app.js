// ... existing code ...

function updateCycleProgress(percentage) {
  const cycleProgressElement = document.getElementById('cycle-progress-value');
  const progressBar = document.getElementById('cycle-progress');
  
  cycleProgressElement.textContent = percentage + '%';
  
  // Update progress bar width
  const maxWidth = 100; // matches percentage scale
  const width = (percentage / maxWidth) * 100;
  progressBar.style.width = width + '%';
  
  // Add filled class for visual feedback
  progressBar.classList.toggle('progress-bar-filled', percentage > 0);
}

// ... rest of the code ...
