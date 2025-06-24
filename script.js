// Show "Explore More" after Astro loads
window.onload = function () {
  setTimeout(() => {
    document.getElementById('landingText').style.display = 'block';
  }, 2000);
};

function startTransition() {
  document.getElementById('landing').style.display = 'none';
  document.getElementById('loading').style.display = 'block';

  setTimeout(() => {
    document.getElementById('loading').style.display = 'none';
    document.getElementById('portfolio').style.display = 'block';
  }, 3000);
}
