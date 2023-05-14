//      ,    ,
//   ,@▒▒╜  ╣▒║╖     ▄▓█████  ▐██████▄ ▐██▌  ██▓       ▄█████▌  ███████`
// ╓╣▒▒╜ @╝╣╖`╢▒▒╗   ███"---  ▐██▌-███` █▓█▄███▀      ▐██▌---   ███▌,,
// ╢▒▒╖  ╢╗@╝  ╢▒▒╝  ███  ███ ▐███████  ▄▓█▓▓█▄       ▐██▌ ▐██▌ ██████
//  ╙╢▒╢╖ ║╜,╢▒▒╝    ███▄▄███ ▐██▌--`  ▐██▌ ▐███ ▓███ ▐███▄███▌ ███▄▄▄▄
//    `╢▒╜  ╣▒╜       ▀▀▀▀▀▀▀ '▀▀`     '▀▀`  ▀▀▀ ╙▀▀▀   ▀▀▀▀▀▀  ▀▀▀▀▀▀▀
"use strict";
const slider_cards = document.querySelectorAll(".slider-card");
const boxCount = slider_cards.length;
let counter = 1;

//||||||||||||||||||||||||||||||||||||||||||
//  on slider card click, it is activated ||
//||||||||||||||||||||||||||||||||||||||||||

slider_cards.forEach((card) => {
  card.addEventListener("click", (e) => {
    reset(); // bulk remove "active" status
    e.target.classList.add("active");
  });
});

//||||||||||||||||||||||||||||||||||||||||||
//  For Auto activation cards, enable it  ||
//||||||||||||||||||||||||||||||||||||||||||

/* setInterval(function () {
  reset();
  let increase = counter++;

  slider_cards[increase].classList.add("active");
  console.log(increase);
  if (increase == boxCount - 1) {
    counter = 0;
  }
}, 1500); */

//||||||||||||||||||||||||||||||||||||||||||||||||||||||
function reset() {
  for (let i = 0; i < boxCount; i++) {
    slider_cards[i].classList.remove("active");
  }
}
