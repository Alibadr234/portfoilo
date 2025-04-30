const roles = [
    "'m a Front-End Developer.",
    " craft modern, responsive websites.",
    " turn ideas into interactive experiences."
  ];
  let index = 0;
  let charIndex = 0;
  let isDeleting = false;
  const typingSpeed = 70;
  const deletingSpeed = 40;
  const delayBetweenWords = 1800;
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
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      index = (index + 1) % roles.length;
      setTimeout(type, 600);
    } else {
      setTimeout(type, isDeleting ? deletingSpeed : typingSpeed);
    }
  }
  
  document.addEventListener("DOMContentLoaded", type);
  const textCard = document.getElementById('text-card');
document.addEventListener('mousemove', (e) => {
  const x = (window.innerWidth / 2 - e.pageX) / 25;
  const y = (window.innerHeight / 2 - e.pageY) / 25;
  textCard.style.transform = `rotateY(${x}deg) rotateX(${y}deg)`;
});
// Simple fade-in animation
document.addEventListener("DOMContentLoaded", () => {
    const section = document.getElementById("contact");
    section.classList.add("fade-in");
  
    // Animate social icons one by one
    const icons = document.querySelectorAll("#social-icons a");
    icons.forEach((icon, i) => {
      icon.style.opacity = "0";
      icon.style.transition = "opacity 0.5s ease " + (i * 0.2) + "s";
      setTimeout(() => {
        icon.style.opacity = "1";
      }, 200);
    });
  });
  const toggle = document.getElementById('themeToggle');
  const icon = document.getElementById('themeIcon');

  // Check local storage
  if (localStorage.theme === 'dark') {
    document.documentElement.classList.add('dark');
    icon.classList.replace('fa-moon', 'fa-sun');
  }

  toggle.addEventListener('click', () => {
    document.documentElement.classList.toggle('dark');

    if (document.documentElement.classList.contains('dark')) {
      icon.classList.replace('fa-moon', 'fa-sun');
      localStorage.theme = 'dark';
    } else {
      icon.classList.replace('fa-sun', 'fa-moon');
      localStorage.theme = 'light';
    }
  });
  