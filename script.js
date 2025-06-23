function toggleDetails(card) {
  const details = card.querySelector('.details');
  details.style.display = details.style.display === 'block' ? 'none' : 'block';
}

function speakIntro() {
  const msg = new SpeechSynthesisUtterance(
    "Hi! I'm Astro. Welcome to Pravalika's interactive portfolio!"
  );
  window.speechSynthesis.speak(msg);
}

function showInsight() {
  const popup = document.getElementById('imageInsight');
  popup.style.display = 'block';
  setTimeout(() => {
    popup.style.display = 'none';
  }, 4000);
}
