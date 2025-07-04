// script.js
function setTheme(theme) {
  document.body.setAttribute('data-theme', theme);
  localStorage.setItem('theme', theme);
}

function toggleTheme() {
  const current = document.body.getAttribute('data-theme');
  setTheme(current === 'dark' ? 'light' : 'dark');
}

document.addEventListener('DOMContentLoaded', () => {
  const saved = localStorage.getItem('theme') || 'light';
  setTheme(saved);

  const btn = document.getElementById('themeToggle');
  btn.addEventListener('click', toggleTheme);
});
