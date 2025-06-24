// Run after "Explore More" button is clicked
function startTransition() {
  // Hide landing section
  const landing = document.getElementById('landing');
  const loading = document.getElementById('loading');
  const portfolio = document.getElementById('portfolio');

  if (landing && loading && portfolio) {
    landing.style.display = 'none';
    loading.style.display = 'block';

    // Wait for 3 seconds before showing main content
    setTimeout(() => {
      loading.style.display = 'none';
      portfolio.style.display = 'block';
    }, 3000);
  } else {
    console.error("One or more sections not found in the DOM.");
  }
}

// Optional: Ensure DOM loads before user clicks button
document.addEventListener("DOMContentLoaded", () => {
  console.log("Portfolio loaded. Ready for interaction.");
});
