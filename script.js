function startTransition() {
  // Hide landing, show loading
  document.getElementById('landing').style.display = 'none';
  document.getElementById('loading').style.display = 'block';

  // After 3 seconds, show portfolio
  setTimeout(() => {
    document.getElementById('loading').style.display = 'none';
    document.getElementById('portfolio').style.display = 'block';
  }, 3000);
}

function toggleDetails(card) {
  const details = card.querySelector('.details');
  if (details) {
    details.style.display = details.style.display === 'block' ? 'none' : 'block';
  }
}
