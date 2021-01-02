function smoothScroll(target, duration) {
  let toMove = document.querySelector(target);
  let toMovePosition = toMove.getBoundingClientRect().top;
  let startPosition = window.pageYOffset;
  let startTime = null;

  function animationScroll(currentTime) {
    if (startTime === null) startTime = currentTime;
    let timeElapsed = currentTime - startTime;
    let run = ease(timeElapsed, startPosition, toMovePosition, duration);
    window.scrollTo(0, run);
    if (timeElapsed < duration) requestAnimationFrame(animationScroll);
  }

  //Function for easing
  function ease(t, b, c, d) {
    t /= d;
    return -c * t * (t - 2) + b;
  }

  requestAnimationFrame(animationScroll);
}

let about = document.querySelector(".about");

about.addEventListener("click", () => {
  smoothScroll(".about-section", 1000);
});

let work = document.querySelector(".work");

work.addEventListener("click", () => {
  smoothScroll(".work-section", 1000);
});

let contact = document.querySelector(".contact");

contact.addEventListener("click", () => {
  smoothScroll(".contact-section", 1000);
});
let home = document.querySelector(".home");

home.addEventListener("click", () => {
  smoothScroll(".photo-section", 1000);
});
