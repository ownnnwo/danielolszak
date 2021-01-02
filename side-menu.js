const aboutSection = document.querySelector(".about-section");
const sideNav = document.querySelector(".side-nav");

const animation = gsap.fromTo(
  sideNav,
  { opacity: 0,
    pointerEvents: "none",
   },
  {
    opacity: 1,
    duration: 0.8,
    paused: true,
    pointerEvents: "auto",
  }
);

ScrollTrigger.create({
  trigger: aboutSection,
  start: "top 20%",
  onEnter: () => animation.play(),
  onLeaveBack:() => animation.reverse(),
});
