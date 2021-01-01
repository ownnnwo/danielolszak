const aboutSection = document.querySelector(".about-section");
const sideNav = document.querySelector(".side-nav");

const animation = gsap.fromTo(
  sideNav,
  { opacity: 0 },
  {
    opacity: 1,
    duration: 0.8,
    paused: true,
  }
);

ScrollTrigger.create({
  trigger: aboutSection,
  start: "top 20%",
  markers:true,
  onEnter: () => animation.play(),
  onLeaveBack:() => animation.reverse(),
});
