//   ,@▒▒╜  ╣▒║╖     ▄▓█████  ▐██████▄ ▐██▌  ██▓       ▄█████▌  ███████
// ╓╣▒▒╜ @╝╣╖`╢▒▒╗   ███      ▐██▌ ███  █▓█▄███▀      ▐██▌      ███▌
// ╢▒▒╖  ╢╗@╝  ╢▒▒╝  ███  ███ ▐███████  ▄▓█▓▓█▄       ▐██▌ ▐██▌ ██████
//  ╙╢▒╢╖ ║╜,╢▒▒╝    ███▄▄███ ▐██▌     ▐██▌ ▐███  ███ ▐███▄███▌ ███▄▄▄▄
//    `╢▒╜  ╣▒╜       ▀▀▀▀▀▀▀  ▀▀      ▀▀▀   ▀▀▀  ▀▀▀   ▀▀▀▀▀▀  ▀▀▀▀▀▀▀
"use strict";
"use strict";
let button = document.querySelector("button");
let color_code = document.querySelector("h1");

//||||||||||||||||||||||||||||||||||||||||||||||||||||

button.addEventListener("click", function () {
  document.body.style.backgroundColor = `RGB(${ranmdomizer(255)},${ranmdomizer(255)},${ranmdomizer(255)})`;
  color_code.textContent = `RGB(${ranmdomizer(255)},${ranmdomizer(255)},${ranmdomizer(255)})`;
});
//||||||||||||||||||||||||||||||||||||||||||||
function ranmdomizer(n) {
  return Math.floor(Math.random() * n + 1);
}
//|||||||||||||||||||||||||||||||||||||||||||||
