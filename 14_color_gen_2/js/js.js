//      ,    ,
//   ,@▒▒╜  ╣▒║╖     ▄▓█████  ▐██████▄ ▐██▌  ██▓       ▄█████▌  ███████`
// ╓╣▒▒╜ @╝╣╖`╢▒▒╗   ███"---  ▐██▌-███` █▓█▄███▀      ▐██▌---   ███▌,,
// ╢▒▒╖  ╢╗@╝  ╢▒▒╝  ███  ███ ▐███████  ▄▓█▓▓█▄       ▐██▌ ▐██▌ ██████
//  ╙╢▒╢╖ ║╜,╢▒▒╝    ███▄▄███ ▐██▌--`  ▐██▌ ▐███ ▓███ ▐███▄███▌ ███▄▄▄▄
//    `╢▒╜  ╣▒╜       ▀▀▀▀▀▀▀ '▀▀`     '▀▀`  ▀▀▀ ╙▀▀▀   ▀▀▀▀▀▀  ▀▀▀▀▀▀▀
"use strict";
const green = document.getElementById("green");
const red = document.getElementById("red");
const blue = document.getElementById("blue");

const green_out = document.querySelector(".green-out");
const red_out = document.querySelector(".red-out");
const blue_out = document.querySelector(".blue-out");
const hex_out = document.querySelector(".hex-out");

red.addEventListener("input", function () {
  red_out.innerHTML = red.value;
  setColor();
});

green.addEventListener("input", function () {
  green_out.innerHTML = green.value;
  setColor();
});

blue.addEventListener("input", function () {
  blue_out.innerHTML = blue.value;
  setColor();
});

function setColor() {
  document.body.style.backgroundColor = `rgb(${red.value}, ${green.value}, ${blue.value})`;
  hex_out.innerText = `#${toHex(red.value)}${toHex(green.value)}${toHex(blue.value)}`;
}

function toHex(num) {
  let number = parseInt(num).toString(16);
  return number.length == 1 ? "0" + number : number;
}
