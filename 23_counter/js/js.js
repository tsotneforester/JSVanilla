//      ,    ,
//   ,@▒▒╜  ╣▒║╖     ▄▓█████  ▐██████▄ ▐██▌  ██▓       ▄█████▌  ███████`
// ╓╣▒▒╜ @╝╣╖`╢▒▒╗   ███"---  ▐██▌-███` █▓█▄███▀      ▐██▌---   ███▌,,
// ╢▒▒╖  ╢╗@╝  ╢▒▒╝  ███  ███ ▐███████  ▄▓█▓▓█▄       ▐██▌ ▐██▌ ██████
//  ╙╢▒╢╖ ║╜,╢▒▒╝    ███▄▄███ ▐██▌--`  ▐██▌ ▐███ ▓███ ▐███▄███▌ ███▄▄▄▄
//    `╢▒╜  ╣▒╜       ▀▀▀▀▀▀▀ '▀▀`     '▀▀`  ▀▀▀ ╙▀▀▀   ▀▀▀▀▀▀  ▀▀▀▀▀▀▀
"use strict";
function randomNum(n) {
  return Math.trunc(Math.random() * n + 1);
}

let startNum = randomNum(60);
let reseted = startNum;

let result = document.querySelector("h1");

let decrease = document.getElementsByTagName("button")[0];
let reset = document.getElementsByTagName("button")[1];
let increase = document.getElementsByTagName("button")[2];

result.innerHTML = startNum;

decrease.addEventListener("click", function () {
  startNum--;
  result.innerHTML = startNum;
});

increase.addEventListener("click", function () {
  startNum++;
  result.innerHTML = startNum;
});

reset.addEventListener("click", function () {
  startNum = reseted;
  result.innerHTML = reseted;
});
