//typing
const roles = ["Fresher", "Web Developer", "Software Developer", "UI Developer", "Frontend Developer"];
const typingSpeed = 100;
const erasingSpeed = 50;
const delayBetweenRoles = 1500;

let textIndex = 0;
let charIndex = 0;
let isDeleting = false;

const typedText = document.getElementById("typed-text");

function typeEffect() {
  const current = roles[textIndex];

  if (isDeleting) {
    typedText.textContent = current.substring(0, charIndex--);
    if (charIndex < 0) {
      isDeleting = false;
      textIndex = (textIndex + 1) % roles.length;
    }
  } else {
    typedText.textContent = current.substring(0, charIndex++);
    if (charIndex > current.length) {
      isDeleting = true;
      setTimeout(typeEffect, delayBetweenRoles);
      return;
    }
  }

  setTimeout(typeEffect, isDeleting ? erasingSpeed : typingSpeed);
}

document.addEventListener("DOMContentLoaded", typeEffect);

/*theme-toggle*/
document.addEventListener('DOMContentLoaded', () => {
  const toggleBtn = document.querySelector('.theme-toggle');
  const body = document.body;

  // Load saved theme from localStorage
  if (localStorage.getItem('theme') === 'light') {
    body.classList.add('light-mode');
  }

  toggleBtn.addEventListener('click', () => {
    body.classList.toggle('light-mode');
    const theme = body.classList.contains('light-mode') ? 'light' : 'dark';
    localStorage.setItem('theme', theme);
  });
});

// show more/less 
function toggleProjects() {
  const extraProjects = document.querySelectorAll('.extra-project');
  const toggleBtn = document.getElementById('toggleBtn');

  extraProjects.forEach((project) => {
    project.classList.toggle('hidden');
  });

  toggleBtn.textContent = toggleBtn.textContent === 'Show More' ? 'Show Less' : 'Show More';
}

//active header
const navLinks = document.querySelectorAll('#navbar a');

  navLinks.forEach(link => {
    link.addEventListener('click', function () {
      navLinks.forEach(nav => nav.classList.remove('active')); // remove active from all
      this.classList.add('active'); // add to the clicked one
    });
  });

//navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('#navbar');

menuIcon.onclick = () => {
      menuIcon.classList.toggle('fa-bars');
      menuIcon.classList.toggle('fa-bars'); 
      navbar.classList.toggle('active');
};
