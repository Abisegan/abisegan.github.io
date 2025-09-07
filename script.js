// Smooth scroll for nav links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});

// Typing animation
const roles = [
  "Software Engineering Student",
  "Web Developer",
  "CS50x Graduate"
];
let roleIndex = 0;
let charIndex = 0;
const typingElement = document.querySelector(".typing");

function type() {
  if (charIndex < roles[roleIndex].length) {
    typingElement.textContent += roles[roleIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, 100);
  } else {
    setTimeout(erase, 2000);
  }
}

function erase() {
  if (charIndex > 0) {
    typingElement.textContent = roles[roleIndex].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(erase, 50);
  } else {
    roleIndex = (roleIndex + 1) % roles.length;
    setTimeout(type, 500);
  }
}

document.addEventListener("DOMContentLoaded", type);




// Typing effect
const typedText = document.querySelector(".typing");
const words = ["Software Engineering Undergraduate", "CS50x Graduate", "Web Developer", "Problem Solver"];
let wordIndex = 0;
let charIndex = 0;
let currentWord = "";
let isDeleting = false;

function type() {
  currentWord = words[wordIndex];
  if (isDeleting) {
    typedText.textContent = currentWord.substring(0, charIndex--);
  } else {
    typedText.textContent = currentWord.substring(0, charIndex++);
  }

  if (!isDeleting && charIndex === currentWord.length) {
    isDeleting = true;
    setTimeout(type, 1500);
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    wordIndex = (wordIndex + 1) % words.length;
    setTimeout(type, 200);
  } else {
    setTimeout(type, isDeleting ? 50 : 100);
  }
}
document.addEventListener("DOMContentLoaded", type);

// Fade-in scroll animation
const faders = document.querySelectorAll(".fade-in");
const appearOptions = { threshold: 0.2 };
const appearOnScroll = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add("show");
    observer.unobserve(entry.target);
  });
}, appearOptions);

faders.forEach(fader => { appearOnScroll.observe(fader); });
