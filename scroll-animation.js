const photoGrid = document.querySelector(".photo-grid");
const sections = document.querySelectorAll("section");

sections.forEach((section) => {
  if (section.className !== "photo-section")
    gsap.fromTo(
      section.children,
      { opacity: 0 },
      {
        opacity: 1,
        stagger: 0.2,
        duration: 2,
        scrollTrigger: { trigger: section, start: "top 60%"},
      }
    );
});

gsap.fromTo(
  photoGrid.children,
  { opacity: 0 },
  { opacity: 1, stagger: 0.2, duration: 3 }
);
