// ======= Menu Toggle =======
const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");
  menuBtnIcon.className = isOpen ? "ri-close-line" : "ri-menu-line";
});

// Close menu on nav link click
navLinks.addEventListener("click", (e) => {
  if (e.target.tagName === "A") { // Only close if a link is clicked
    navLinks.classList.remove("open");
    menuBtnIcon.className = "ri-menu-line";
  }
});

// ======= ScrollReveal Settings =======
const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
  easing: "ease-in-out", // smoother animation
  reset: false // animations trigger only once
};

// Helper function for cleaner reveal calls
const revealElements = (selectors, extraOptions = {}) => {
  ScrollReveal().reveal(selectors, { ...scrollRevealOption, ...extraOptions });
};

// Header
revealElements(".header__container p");
revealElements(".header__container h1", { delay: 500 });

// About
revealElements(".about__image img", { origin: "left" });
revealElements(".about__content .section__subheader", { delay: 500 });
revealElements(".about__content .section__header", { delay: 1000 });
revealElements(".about__content .section__description", { delay: 1500 });
revealElements(".about__btn", { delay: 2000 });

// Rooms & Services
revealElements(".room__card", { interval: 500 });
revealElements(".service__list li", { interval: 500, origin: "right" });
