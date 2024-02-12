//   ,@▒▒╜  ╣▒║╖     ▄▓█████  ▐██████▄ ▐██▌  ██▓       ▄█████▌  ███████
// ╓╣▒▒╜ @╝╣╖`╢▒▒╗   ███      ▐██▌ ███  █▓█▄███▀      ▐██▌      ███▌
// ╢▒▒╖  ╢╗@╝  ╢▒▒╝  ███  ███ ▐███████  ▄▓█▓▓█▄       ▐██▌ ▐██▌ ██████
//  ╙╢▒╢╖ ║╜,╢▒▒╝    ███▄▄███ ▐██▌     ▐██▌ ▐███  ███ ▐███▄███▌ ███▄▄▄▄
//    `╢▒╜  ╣▒╜       ▀▀▀▀▀▀▀  ▀▀      ▀▀▀   ▀▀▀  ▀▀▀   ▀▀▀▀▀▀  ▀▀▀▀▀▀▀
"use strict";

const main = document.querySelector("main");
const slide_stack = document.querySelector(".slide-stack");
const nextBtn = document.getElementById("next-btn");
const prevBtn = document.getElementById("prev-btn");
const INTERVAL = 3000;
const DURATION = "0.7s";

let slides = document.querySelectorAll(".slide");
let activeSlideindex = 1;
let slideId;

//||||| create first/last slide clones ||||||||||||||

const firstClone = slides[0].cloneNode(true);
const lastClone = slides[slides.length - 1].cloneNode(true);

firstClone.id = "first-clone";
lastClone.id = "last-clone";

slide_stack.append(firstClone);
slide_stack.prepend(lastClone);

const slideWidth = slides[activeSlideindex].clientWidth;

//||||||||||| activate 1st slide ||||||||||||||

slide_stack.style.transform = `translateX(${-slideWidth}px)`;

//|||||||||||| automited slider ||||||||||||||
function startSlide() {
  slideId = setInterval(() => {
    moveToNextSlide();
  }, INTERVAL);
}

// startSlide();

//||||||||||| continuous effect ||||||||||||||

slide_stack.addEventListener("transitionend", () => {
  let slides = getSlides(); // 1
  if (slides[activeSlideindex].id === firstClone.id) {
    slide_stack.style.transition = "none";
    activeSlideindex = 1;
    slide_stack.style.transform = `translateX(${-slideWidth * activeSlideindex}px)`;
  }

  if (slides[activeSlideindex].id === lastClone.id) {
    slide_stack.style.transition = "none";
    activeSlideindex = slides.length - 2;
    slide_stack.style.transform = `translateX(${-slideWidth * activeSlideindex}px)`;
  }
});

//||||||||||||||| next/previuse switcher||||||||||||||||||

const moveToNextSlide = () => {
  let slides = getSlides();
  if (activeSlideindex >= slides.length - 1) return;
  activeSlideindex++;
  slide_stack.style.transition = `${DURATION} ease-out`;
  slide_stack.style.transform = `translateX(${-slideWidth * activeSlideindex}px)`;
};

const moveToPreviousSlide = () => {
  if (activeSlideindex <= 0) return;
  activeSlideindex--;
  slide_stack.style.transition = `${DURATION} ease-out`;
  slide_stack.style.transform = `translateX(${-slideWidth * activeSlideindex}px)`;
};

//|||||||||||||||||| pause slider |||||||||||||||
main.addEventListener("mouseenter", () => {
  clearInterval(slideId);
});
//|||||||||||||||||| resume slider |||||||||||||||
main.addEventListener("mouseleave", startSlide);

//||||||||||||||||| manual switch |||||||||||||||||
prevBtn.addEventListener("click", moveToNextSlide);
nextBtn.addEventListener("click", moveToPreviousSlide);

//|||||||||||||||||||||| 1 ||||||||||||||||||||
function getSlides() {
  return document.querySelectorAll(".slide");
}
