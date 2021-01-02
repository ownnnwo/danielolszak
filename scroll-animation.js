const photoGrid = document.querySelector(".photo-grid");
const sections = document.querySelectorAll("section");

sections.forEach((section) => {
  
if(section.className !== "photo-section"){
  console.log(section.className);

    const animation = gsap.fromTo(
      section.children,
      { opacity: 0 
      },
      {
        opacity: 1,
        stagger: 0.2,
        duration: 0.5,
        paused: true,
        
        //scrollTrigger: { trigger: section, start: "top 60%"},
      }
    );

  ScrollTrigger.create({
    trigger: section,
    start: "top 50%",
    end: "30%",

    markers: true,
    onToggle: () => animation.play(),
    onLeave: () => animation.reverse(),
    onLeaveBack: () => animation.reverse(),


  });
}

});



