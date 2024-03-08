//   ,@▒▒╜  ╣▒║╖     ▄▓█████  ▐██████▄ ▐██▌  ██▓       ▄█████▌  ███████
// ╓╣▒▒╜ @╝╣╖`╢▒▒╗   ███      ▐██▌ ███  █▓█▄███▀      ▐██▌      ███▌
// ╢▒▒╖  ╢╗@╝  ╢▒▒╝  ███  ███ ▐███████  ▄▓█▓▓█▄       ▐██▌ ▐██▌ ██████
//  ╙╢▒╢╖ ║╜,╢▒▒╝    ███▄▄███ ▐██▌     ▐██▌ ▐███  ███ ▐███▄███▌ ███▄▄▄▄
//    `╢▒╜  ╣▒╜       ▀▀▀▀▀▀▀  ▀▀      ▀▀▀   ▀▀▀  ▀▀▀   ▀▀▀▀▀▀  ▀▀▀▀▀▀▀
"use strict";
//||||||||||||||||||||||||||||||||||||||||
//|||||||||||||| SELECTORS |||||||||||||||
//||||||||||||||||||||||||||||||||||||||||
let result = document.querySelector("h1");
let decrease = document.querySelector(".decrease");
let reset = document.querySelector(".reset");
let increase = document.querySelector(".increase");

//|||||||||||||||||||||||||||||||||||||||||||||||
//|| Generate Random Number & write in HTML |||||
//|||||||||||||||||||||||||||||||||||||||||||||||

let startNumber = randomNum(60); // 1
let memorizedStartNumber = startNumber;
result.innerHTML = startNumber;
//||||||||||||||||||||||||||||||||
//||||||||| Button Actions |||||||
//||||||||||||||||||||||||||||||||

decrease.addEventListener("click", function () {
  startNumber--;
  result.innerHTML = startNumber;
});

increase.addEventListener("click", function () {
  startNumber++;
  result.innerHTML = startNumber;
});

reset.addEventListener("click", function () {
  startNumber = memorizedStartNumber;
  result.innerHTML = memorizedStartNumber;
});

//|||||||||||||||||||||| 1 |||||||||||||||||||||||
function randomNum(n) {
  return Math.trunc(Math.random() * n + 1);
}
