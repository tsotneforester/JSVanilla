//   ,@▒▒╜  ╣▒║╖     ▄▓█████  ▐██████▄ ▐██▌  ██▓       ▄█████▌  ███████
// ╓╣▒▒╜ @╝╣╖`╢▒▒╗   ███      ▐██▌ ███  █▓█▄███▀      ▐██▌      ███▌
// ╢▒▒╖  ╢╗@╝  ╢▒▒╝  ███  ███ ▐███████  ▄▓█▓▓█▄       ▐██▌ ▐██▌ ██████
//  ╙╢▒╢╖ ║╜,╢▒▒╝    ███▄▄███ ▐██▌     ▐██▌ ▐███  ███ ▐███▄███▌ ███▄▄▄▄
//    `╢▒╜  ╣▒╜       ▀▀▀▀▀▀▀  ▀▀      ▀▀▀   ▀▀▀  ▀▀▀   ▀▀▀▀▀▀  ▀▀▀▀▀▀▀
"use strict";

//|||||||||||||||||||| HTML SELECTORs & Constants||||||||||||||||||||||||||
const progress_box = document.querySelector(".progress-box");
const progress_controls = document.querySelector(".progress-controls");
const bar = document.querySelector(".bar");
const next_button = document.getElementById("next");
const prev_button = document.getElementById("prev");
const circles = document.querySelectorAll(".circle");
const stepCount = circles.length - 1;
const circlesCount = circles.length;
const containerWidth = parseInt(getComputedStyle(progress_box).width);
const barStep = ((containerWidth * 100) / stepCount / 100).toFixed(2) * 1;
let counter = 1;
//||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
//|||||||||||       'Prev' / 'Next' Action       |||||||||||||
//||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||

progress_controls.addEventListener("click", function (e) {
  removeActiveClass(); // 1 - resets active circles
  e.target.id == "next" ? counter++ : counter--;
  resetCounter(); // 2 - Disables Counter under 1 and above circle count
  activateTill(counter); // 3 - Activetes till given circles and makes bar
  btnStatusCheck(); // 4 - Activetes or Disables Controlls
});

//||||||||||||||----------- 1 ------------- |||||||||||
function removeActiveClass() {
  circles.forEach((element) => {
    element.classList.remove("active");
  });
}
//||||||| --------------- 2 ---------------------|||
function resetCounter() {
  if (counter < 1) {
    counter = 1;
  }
  if (counter > circlesCount) {
    counter = circlesCount;
  }
}

//|||||||||| ---------- 3 -------------- ||||||||||
function activateTill(e) {
  for (let i = 0; i < e; i++) {
    circles[i].classList.add("active");
  }
  bar.style.width = barStep * (counter - 1) + "px";
}
//||||||||||------------- 4 -----------||||||||||||
function btnStatusCheck() {
  if (counter > 1) {
    prev_button.classList.add("active");
  }
  if (counter == 1) {
    prev_button.classList.remove("active");
  }
  if (counter < circlesCount) {
    next_button.classList.add("active");
  }
  if (counter == circlesCount) {
    next_button.classList.remove("active");
  }
}
