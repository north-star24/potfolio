// Time-based greeting
function setGreeting() {
  const hour = new Date().getHours();
  const greetingElement = document.getElementById('greeting');
  let greeting;
  
  if (hour < 12) {
      greeting = "Good Morning, I'm Filbert Njau";
  } else if (hour < 18) {
      greeting = "Good Afternoon, I'm Filbert Njau";
  } else {
      greeting = "Good Evening, I'm Filbert Njau";
  }
  
  if (greetingElement) {
      greetingElement.textContent = greeting;
  }
}

// Dark/Light mode toggle
function setupThemeToggle() {
  const themeToggle = document.getElementById('theme-toggle');
  if (!themeToggle) return;
  
  // Check for saved theme preference or use preferred color schemes
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const currentTheme = localStorage.getItem('theme') || (prefersDark ? 'dark' : 'light');
  
  if (currentTheme === 'dark') {
      document.body.classList.add('dark-mode');
      themeToggle.textContent = 'Light Mode';
  }
  
  themeToggle.addEventListener('click', () => {
      document.body.classList.toggle('dark-mode');
      const isDark = document.body.classList.contains('dark-mode');
      themeToggle.textContent = isDark ? 'Light Mode' : 'Dark Mode';
      localStorage.setItem('theme', isDark ? 'dark' : 'light');
  });
}

// Project details toggle
function setupProjectToggles() {
  const toggleButtons = document.querySelectorAll('.toggle-details');
  
  toggleButtons.forEach(button => {
      button.addEventListener('click', () => {
          const details = button.nextElementSibling;
          details.classList.toggle('active');
          button.textContent = details.classList.contains('active') ? 'Hide Details' : 'Show Details';
      });
  });
}

// Initialize all functions when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  setGreeting();
  setupThemeToggle();
  setupProjectToggles();
});