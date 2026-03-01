function initReveal() {
  const sr = ScrollReveal({
    origin: "top",
    distance: "60px",
    duration: 2500,
    delay: 400,
    reset: false,
  });

  sr.reveal(".about__data", { origin: "left" });
  sr.reveal(".about__img", { origin: "right" });
  sr.reveal(".summary__about", { origin: "bottom" });
  sr.reveal(".avatar__experiences", { origin: "left" });
  sr.reveal(".experience__content", { origin: "right" });
  sr.reveal(".about__technologies", { origin: "bottom" });
  sr.reveal(".service__about", { origin: "bottom" });
  sr.reveal(".service__about__1", { origin: "left" });
  sr.reveal(".service__about__2", { origin: "right" });
  sr.reveal(".project__about", { origin: "bottom" });
}

document.addEventListener("DOMContentLoaded", initReveal);
document.addEventListener("astro:after-swap", initReveal);
