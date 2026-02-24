/* =========================
   Typing Effect - Data Analyst Version
========================= */

const roles = [
  "'m a Data Analysis Specialist.",
  " transform raw data into insights.",
  " build interactive Power BI dashboards.",
  " analyze data using SQL & Python.",
  " support data-driven decision making."
];

let index = 0;
let charIndex = 0;
let isDeleting = false;
const typingSpeed = 60;
const deletingSpeed = 35;
const delayBetweenWords = 1700;

const target = document.getElementById("type");

function type() {
  const currentText = roles[index];

  if (isDeleting) {
    target.textContent = currentText.substring(0, charIndex--);
  } else {
    target.textContent = currentText.substring(0, charIndex++);
  }

  if (!isDeleting && charIndex === currentText.length) {
    isDeleting = true;
    setTimeout(type, delayBetweenWords);
  } 
  else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    index = (index + 1) % roles.length;
    setTimeout(type, 500);
  } 
  else {
    setTimeout(type, isDeleting ? deletingSpeed : typingSpeed);
  }
}

document.addEventListener("DOMContentLoaded", type);


/* =========================
   Dark Mode Toggle (Professional)
========================= */

const toggle = document.getElementById('themeToggle');
const icon = document.getElementById('themeIcon');

if (localStorage.theme === 'dark') {
  document.documentElement.classList.add('dark');
  if (icon) icon.classList.replace('fa-moon', 'fa-sun');
}

if (toggle) {
  toggle.addEventListener('click', () => {
    document.documentElement.classList.toggle('dark');

    if (document.documentElement.classList.contains('dark')) {
      if (icon) icon.classList.replace('fa-moon', 'fa-sun');
      localStorage.theme = 'dark';
    } else {
      if (icon) icon.classList.replace('fa-sun', 'fa-moon');
      localStorage.theme = 'light';
    }
  });
}
