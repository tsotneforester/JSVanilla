"use strict";
const progressBox = document.querySelector(".progress-box");
const bar = document.querySelector(".bar");
const nextButton = document.getElementById("next");
const prevButton = document.getElementById("prev");
const circles = document.querySelectorAll(".circle");
const stepCount = circles.length - 1;
const circlesCount = circles.length;
const containerWidth = parseInt(getComputedStyle(progressBox).width);

const barStep = ((containerWidth * 100) / stepCount / 100).toFixed(2) * 1;
let counter = 1;

function removeActiveClass() {
  circles.forEach((element) => {
    element.classList.remove("active");
  });
}

function checkCounter() {
  if (counter < 1) {
    counter = 1;
  }
  if (counter > circlesCount) {
    counter = circlesCount;
  }
}

function activateTill(e) {
  if (e <= circlesCount) {
    for (let i = 0; i < e - 0; i++) {
      circles[i].classList.add("active");
    }

    bar.style.width = barStep * (counter - 1) + "px";
  }
}

nextButton.addEventListener("click", function () {
  removeActiveClass();
  checkCounter();
  counter++;
  activateTill(counter);
  btnCheck();
});

prevButton.addEventListener("click", function () {
  removeActiveClass();
  checkCounter();
  counter--;
  activateTill(counter);
  btnStatusCheck();
});

function btnStatusCheck() {
  if (counter > 1) {
    prevButton.classList.add("active");
  }
  if (counter == 1) {
    prevButton.classList.remove("active");
  }
  if (counter < circlesCount) {
    nextButton.classList.add("active");
  }
  if (counter == circlesCount) {
    nextButton.classList.remove("active");
  }
}
