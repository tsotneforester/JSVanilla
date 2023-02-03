//      ,    ,
//   ,@▒▒╜  ╣▒║╖     ▄▓█████  ▐██████▄ ▐██▌  ██▓       ▄█████▌  ███████`
// ╓╣▒▒╜ @╝╣╖`╢▒▒╗   ███"---  ▐██▌-███` █▓█▄███▀      ▐██▌---   ███▌,,
// ╢▒▒╖  ╢╗@╝  ╢▒▒╝  ███  ███ ▐███████  ▄▓█▓▓█▄       ▐██▌ ▐██▌ ██████
//  ╙╢▒╢╖ ║╜,╢▒▒╝    ███▄▄███ ▐██▌--`  ▐██▌ ▐███ ▓███ ▐███▄███▌ ███▄▄▄▄
//    `╢▒╜  ╣▒╜       ▀▀▀▀▀▀▀ '▀▀`     '▀▀`  ▀▀▀ ╙▀▀▀   ▀▀▀▀▀▀  ▀▀▀▀▀▀▀
"use strict";

const plusminus = document.getElementsByTagName("i");
const box1 = document.getElementById("box1");
const box2 = document.getElementById("box2");
const box3 = document.getElementById("box3");

plusminus[0].addEventListener("click", function () {
  plusminus[0].classList.toggle("hidden");
  plusminus[1].classList.toggle("hidden");
  box1.style.height = "160px";
});

plusminus[1].addEventListener("click", function () {
  plusminus[0].classList.toggle("hidden");
  plusminus[1].classList.toggle("hidden");
  box1.style.height = "50px";
});

plusminus[2].addEventListener("click", function () {
  plusminus[2].classList.toggle("hidden");
  plusminus[3].classList.toggle("hidden");
  box2.style.height = "160px";
});

plusminus[3].addEventListener("click", function () {
  plusminus[2].classList.toggle("hidden");
  plusminus[3].classList.toggle("hidden");
  box2.style.height = "50px";
});

plusminus[4].addEventListener("click", function () {
  plusminus[4].classList.toggle("hidden");
  plusminus[5].classList.toggle("hidden");
  box3.style.height = "160px";
});

plusminus[5].addEventListener("click", function () {
  plusminus[4].classList.toggle("hidden");
  plusminus[5].classList.toggle("hidden");
  box3.style.height = "50px";
});
