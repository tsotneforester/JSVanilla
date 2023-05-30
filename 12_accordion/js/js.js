//   ,@▒▒╜  ╣▒║╖     ▄▓█████  ▐██████▄ ▐██▌  ██▓       ▄█████▌  ███████
// ╓╣▒▒╜ @╝╣╖`╢▒▒╗   ███      ▐██▌ ███  █▓█▄███▀      ▐██▌      ███▌
// ╢▒▒╖  ╢╗@╝  ╢▒▒╝  ███  ███ ▐███████  ▄▓█▓▓█▄       ▐██▌ ▐██▌ ██████
//  ╙╢▒╢╖ ║╜,╢▒▒╝    ███▄▄███ ▐██▌     ▐██▌ ▐███  ███ ▐███▄███▌ ███▄▄▄▄
//    `╢▒╜  ╣▒╜       ▀▀▀▀▀▀▀  ▀▀      ▀▀▀   ▀▀▀  ▀▀▀   ▀▀▀▀▀▀  ▀▀▀▀▀▀▀
"use strict";

const plusMinus = document.querySelectorAll("button");
const articles = document.querySelectorAll("article");

console.log(articles[0].scrollHeight);
console.log(articles[1].scrollHeight);

for (let i = 0; i < plusMinus.length; i++) {
  plusMinus[i].addEventListener("click", function () {
    plusMinus[i].children[0].classList.toggle("hidden");
    plusMinus[i].children[1].classList.toggle("hidden");
    if (articles[i].getAttribute("style")) {
      articles[i].removeAttribute("style");
    } else {
      resetActive();
      articles[i].style.height = `${articles[i].scrollHeight}px`;
      console.log(articles[i].getAttribute("style"));
    }
  });
}

function resetActive() {
  for (let i = 0; i < articles.length; i++) {
    if (articles[i].getAttribute("style")) {
      articles[i].removeAttribute("style");
      plusMinus[i].children[0].classList.remove("hidden");
      plusMinus[i].children[1].classList.add("hidden");
    }
  }
}
