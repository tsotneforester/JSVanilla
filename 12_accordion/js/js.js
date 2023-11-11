//   ,@▒▒╜  ╣▒║╖     ▄▓█████  ▐██████▄ ▐██▌  ██▓       ▄█████▌  ███████
// ╓╣▒▒╜ @╝╣╖`╢▒▒╗   ███      ▐██▌ ███  █▓█▄███▀      ▐██▌      ███▌
// ╢▒▒╖  ╢╗@╝  ╢▒▒╝  ███  ███ ▐███████  ▄▓█▓▓█▄       ▐██▌ ▐██▌ ██████
//  ╙╢▒╢╖ ║╜,╢▒▒╝    ███▄▄███ ▐██▌     ▐██▌ ▐███  ███ ▐███▄███▌ ███▄▄▄▄
//    `╢▒╜  ╣▒╜       ▀▀▀▀▀▀▀  ▀▀      ▀▀▀   ▀▀▀  ▀▀▀   ▀▀▀▀▀▀  ▀▀▀▀▀▀▀
"use strict";

const plusMinus = document.querySelectorAll("button");
const articles = document.querySelectorAll("article");

//|||||||||||||||||||||||||||||||||||||||||||||
//|||||||||         Main Function           |||
//|||||||||||||||||||||||||||||||||||||||||||||

for (let i = 0, n = plusMinus.length; i < n; i++) {
  plusMinus[i].addEventListener("click", function () {
    plusMinus[i].children[0].classList.toggle("hidden");
    plusMinus[i].children[1].classList.toggle("hidden");
    if (articles[i].getAttribute("style")) {
      articles[i].removeAttribute("style");
    } else {
      //resetActive(); // 1) enable if only one article can be active
      articles[i].style.height = `${articles[i].scrollHeight}px`;
    }
  });
}
//||||||||||||||||     1     |||||||||||||||
function resetActive() {
  for (let i = 0, n = articles.length; i < n; i++) {
    if (articles[i].getAttribute("style")) {
      articles[i].removeAttribute("style");
      plusMinus[i].children[0].classList.remove("hidden");
      plusMinus[i].children[1].classList.add("hidden");
    }
  }
}
