//      ,    ,
//   ,@▒▒╜  ╣▒║╖     ▄▓█████  ▐██████▄ ▐██▌  ██▓       ▄█████▌  ███████`
// ╓╣▒▒╜ @╝╣╖`╢▒▒╗   ███"---  ▐██▌-███` █▓█▄███▀      ▐██▌---   ███▌,,
// ╢▒▒╖  ╢╗@╝  ╢▒▒╝  ███  ███ ▐███████  ▄▓█▓▓█▄       ▐██▌ ▐██▌ ██████
//  ╙╢▒╢╖ ║╜,╢▒▒╝    ███▄▄███ ▐██▌--`  ▐██▌ ▐███ ▓███ ▐███▄███▌ ███▄▄▄▄
//    `╢▒╜  ╣▒╜       ▀▀▀▀▀▀▀ '▀▀`     '▀▀`  ▀▀▀ ╙▀▀▀   ▀▀▀▀▀▀  ▀▀▀▀▀▀▀
"use strict";

const title = document.querySelector("h1");
const speedInput = document.getElementById("speed");
const quote = "Let there be light!";
let counter = 0;
let typeSpeed = (600 / speedInput.value) * 1;
let reType;
let innerText = "";

const typeQuote = () => {
  if (counter >= quote.length) {
    counter = 0;
    innerText = "";
  }
  innerText += quote[counter];
  counter++;
  title.innerText = innerText;
};

let initialType = setInterval(typeQuote, typeSpeed);

speedInput.addEventListener("input", function () {
  clearInterval(initialType);
  clearInterval(reType);
  typeSpeed = (1000 / speedInput.value) * 1;

  function foo() {
    reType = setInterval(typeQuote, typeSpeed);
  }

  foo();
});
