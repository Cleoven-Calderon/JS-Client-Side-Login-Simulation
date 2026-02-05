// Get the theme preference from localStorage
let darkmode = localStorage.getItem('darkmode');

// Function to enable dark mode
const enableDarkmode = () => {
  document.body.classList.add('darkmode');
  localStorage.setItem('darkmode', 'active');
};

// Function to disable dark mode
const disableDarkmode = () => {
  document.body.classList.remove('darkmode');
  localStorage.setItem('darkmode', null);
};

// Check and apply theme when page loads
if (darkmode === 'active') {
  enableDarkmode();
}

// Wait for DOM to be fully loaded before adding event listener
document.addEventListener('DOMContentLoaded', function() {
  const themeSwitch = document.getElementById('theme-switch');
  
  // Only add event listener if themeSwitch exists on this page
  if (themeSwitch) {
    themeSwitch.addEventListener('click', () => {
      darkmode = localStorage.getItem('darkmode');
      if (darkmode !== 'active') {
        enableDarkmode();
      } else {
        disableDarkmode();
      }
    });
  }
});