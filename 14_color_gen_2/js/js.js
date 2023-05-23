//      ,    ,
//   ,@▒▒╜  ╣▒║╖     ▄▓█████  ▐██████▄ ▐██▌  ██▓       ▄█████▌  ███████`
// ╓╣▒▒╜ @╝╣╖`╢▒▒╗   ███"---  ▐██▌-███` █▓█▄███▀      ▐██▌---   ███▌,,
// ╢▒▒╖  ╢╗@╝  ╢▒▒╝  ███  ███ ▐███████  ▄▓█▓▓█▄       ▐██▌ ▐██▌ ██████
//  ╙╢▒╢╖ ║╜,╢▒▒╝    ███▄▄███ ▐██▌--`  ▐██▌ ▐███ ▓███ ▐███▄███▌ ███▄▄▄▄
//    `╢▒╜  ╣▒╜       ▀▀▀▀▀▀▀ '▀▀`     '▀▀`  ▀▀▀ ╙▀▀▀   ▀▀▀▀▀▀  ▀▀▀▀▀▀▀
"use strict";
const green_in = document.getElementById("green");
const red_in = document.getElementById("red");
const blue_in = document.getElementById("blue");

const green_out = document.querySelector(".green-out");
const red_out = document.querySelector(".red-out");
const blue_out = document.querySelector(".blue-out");
const hex_out = document.querySelector(".hex-out");

//||||||||||||||||||||||||||||||||||||||||||||||||||||||
//             Main function does 2 things            ||
//1. Generates HEX code                               ||
//2. sends the code in HTML and sets background color ||
//||||||||||||||||||||||||||||||||||||||||||||||||||||||

function setColor() {
  let color = `#${toHex(red.value)}${toHex(green.value)}${toHex(blue.value)}`;
  document.body.style.backgroundColor = color;
  hex_out.innerText = color;
}
//||||||||||||||||||||||||||||||||||||||||||||||||||||||||
// Triggers main function on every slider input change |||
//||||||||||||||||||||||||||||||||||||||||||||||||||||||||
red.addEventListener("input", function () {
  red_out.innerHTML = red_in.value;
  setColor();
});

green.addEventListener("input", function () {
  green_out.innerHTML = green_in.value;
  setColor();
});

blue.addEventListener("input", function () {
  blue_out.innerHTML = blue_in.value;
  setColor();
});
//|||||||||||||||||||||||||||||||||||||||||||||||||||||||
function toHex(num) {
  let number = parseInt(num).toString(16);
  return number.length == 1 ? "0" + number : number;
}
//||||||||||||||||||||||||||||||||||||||||||||||||||||||
