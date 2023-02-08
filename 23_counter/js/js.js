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

let result = document.querySelector("h1");

let decrease = document.getElementsByTagName("button")[0];
let reset = document.getElementsByTagName("button")[1];
let increase = document.getElementsByTagName("button")[2];

result.innerText = startNum;

decrease.addEventListener("click", function () {
  return (result.innerText -= 1);
});

increase.addEventListener("click", function () {
  return (result.innerText = Number(result.innerText) + 1);
});

reset.addEventListener("click", function () {
  return (result.innerText = startNum);
});
