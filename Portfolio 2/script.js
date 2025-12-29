const menu = document.querySelector(".nav-menu");
const openBtn = document.querySelector(".bar i");
const closeBtn = document.querySelector(".cut");
const container = document.querySelector(".container");

var tl = gsap.timeline();

tl.from(".nav-menu", { left: "-100%" }, { left: "0%", duration: 0.1 });

tl.from(" .nav-menu li i, .nav-menu li a", {
  x: -70,
  duration: 0.1,
  opacity: 0,
  stagger: 0.2,
});
tl.from(".cut", {
  opacity: 0,
});

tl.pause();

function closeMenu() {
  tl.reverse();
  tl.eventCallback("onReverseComplete", () => {
    menu.classList.remove("active");
    container.classList.remove("blur");
  });
}

openBtn.addEventListener("click", () => {
  menu.classList.add("active");
  container.classList.add("blur");
  tl.play();
});

closeBtn.addEventListener("click", closeMenu);
document.querySelectorAll(".nav-link").forEach((link) => {
  link.addEventListener("click", closeMenu);
});
document.addEventListener("click", (e) => {
  // console.log(menu.contains(e.target)); // returns true if we click on menu otherwise false
  // console.log(openBtn.contains(e.target));

  const isClickable = menu.contains(e.target) || openBtn.contains(e.target);

  if (!isClickable && menu.classList.contains("active")) {
    closeMenu();
  }
});

//skills section

const track = document.querySelector(".scroll-track");
const wrapper = document.querySelector(".scroll-wrapper");
const items = document.querySelectorAll(".scroll-item");

let totalWidth = 0;

items.forEach((item) => {
  totalWidth += item.offsetWidth + parseInt(getComputedStyle(item).marginRight);
});

// Store the timeline in a variable
const timeLine = gsap.to(track, {
  x: `-=${totalWidth / 2}`,
  duration: 12,
  ease: "linear",
  repeat: -1,
});

// Pause on hover
wrapper.addEventListener("mouseenter", () => timeLine.pause());
wrapper.addEventListener("mouseleave", () => timeLine.resume());


const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 700,
};
ScrollReveal().reveal(".profile-img", {
  ...scrollRevealOption,
  delay:500,
});

ScrollReveal().reveal(".right-c h1,h2,p,.btn", {
  ...scrollRevealOption,
  delay: 500,
});

ScrollReveal().reveal(".about-content", {
  ...scrollRevealOption,
  delay: 700,
});

ScrollReveal().reveal(".e-card", {
  ...scrollRevealOption,
  delay: 1000,
  interval: 200,
});
ScrollReveal().reveal(".e-content", {
  ...scrollRevealOption,
  duration: 1000,
  delay: 1200,
  interval: 200,
});
ScrollReveal().reveal(".p-card", {
  ...scrollRevealOption,
  interval: 500,
  delay: 800,
});

ScrollReveal().reveal(".project-card ", {
  ...scrollRevealOption,
  interval: 500,
});
ScrollReveal().reveal(".c-card ", {
  ...scrollRevealOption,
  interval: 500,
});
