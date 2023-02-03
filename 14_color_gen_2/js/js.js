//      ,    ,
//   ,@▒▒╜  ╣▒║╖     ▄▓█████  ▐██████▄ ▐██▌  ██▓       ▄█████▌  ███████`
// ╓╣▒▒╜ @╝╣╖`╢▒▒╗   ███"---  ▐██▌-███` █▓█▄███▀      ▐██▌---   ███▌,,
// ╢▒▒╖  ╢╗@╝  ╢▒▒╝  ███  ███ ▐███████  ▄▓█▓▓█▄       ▐██▌ ▐██▌ ██████
//  ╙╢▒╢╖ ║╜,╢▒▒╝    ███▄▄███ ▐██▌--`  ▐██▌ ▐███ ▓███ ▐███▄███▌ ███▄▄▄▄
//    `╢▒╜  ╣▒╜       ▀▀▀▀▀▀▀ '▀▀`     '▀▀`  ▀▀▀ ╙▀▀▀   ▀▀▀▀▀▀  ▀▀▀▀▀▀▀
"use strict";
const green = document.getElementById("g");
const red = document.getElementById("r");
const blue = document.getElementById("b");

const greenOut = document.getElementById("g_out");
const redOut = document.getElementById("r_out");
const blueOut = document.getElementById("b_out");
const hex = document.getElementById("hex");

red.addEventListener("input", function () {
  redOut.innerHTML = red.value;
  setColor();
});

green.addEventListener("input", function () {
  greenOut.innerHTML = green.value;
  setColor();
});

blue.addEventListener("input", function () {
  blueOut.innerHTML = blue.value;
  setColor();
});

function setColor() {
  document.body.style.backgroundColor = `rgb(${red.value}, ${green.value}, ${blue.value})`;
  hex.innerText = `#${toHex(red.value)}${toHex(green.value)}${toHex(blue.value)}`;
}

function toHex(num) {
  let number = parseInt(num).toString(16);
  return number.length == 1 ? "0" + number : number;
}
