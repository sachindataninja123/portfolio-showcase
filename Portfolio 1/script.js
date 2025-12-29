document.addEventListener("DOMContentLoaded", () => {
  const hamBurgerIcon = document.querySelector(".hamburger");
  const openMenuBar = document.querySelector(".nav-menu");

  hamBurgerIcon.addEventListener("click", () => {
    openMenuBar.classList.toggle("active"); //
  });

  document.querySelectorAll(".nav-link").forEach((n) =>
    n.addEventListener("click", () => {
      openMenuBar.classList.remove("active");
    })
  );
});

const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 700,
};
ScrollReveal().reveal(".image", {
  ...scrollRevealOption,
});

ScrollReveal().reveal(".hero-right h1", {
  ...scrollRevealOption,
  delay: 300,
});

ScrollReveal().reveal(".hero-right h2", {
  ...scrollRevealOption,
  delay: 700,
});

ScrollReveal().reveal(".hero-right .icons", {
  ...scrollRevealOption,
  delay: 1000,
});

ScrollReveal().reveal(".about-me h1", {
  ...scrollRevealOption,
  delay: 1500,
  interval: 500,
});
ScrollReveal().reveal(".about-me p", {
  ...scrollRevealOption,
  duration: 1000,
  delay: 1200,
  interval: 200,
});
ScrollReveal().reveal(".image2", {
  ...scrollRevealOption,
  interval: 500,
  delay: 800,
});
ScrollReveal().reveal(".education-section-card ", {
  ...scrollRevealOption,
  interval: 500,
});
ScrollReveal().reveal(".project-card ", {
  ...scrollRevealOption,
  interval: 500,
});
ScrollReveal().reveal(".card ", {
  ...scrollRevealOption,
  interval: 500,
});
ScrollReveal().reveal(".contact-container ", {
  ...scrollRevealOption,
  duration: 500,
  interval: 200,
  delay: 800,
});
ScrollReveal().reveal(".skills-menu", {
  ...scrollRevealOption,
  duration: 1000,
  interval: 200,
});
