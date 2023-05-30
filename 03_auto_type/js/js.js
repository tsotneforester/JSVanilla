//   ,@▒▒╜  ╣▒║╖     ▄▓█████  ▐██████▄ ▐██▌  ██▓       ▄█████▌  ███████
// ╓╣▒▒╜ @╝╣╖`╢▒▒╗   ███      ▐██▌ ███  █▓█▄███▀      ▐██▌      ███▌
// ╢▒▒╖  ╢╗@╝  ╢▒▒╝  ███  ███ ▐███████  ▄▓█▓▓█▄       ▐██▌ ▐██▌ ██████
//  ╙╢▒╢╖ ║╜,╢▒▒╝    ███▄▄███ ▐██▌     ▐██▌ ▐███  ███ ▐███▄███▌ ███▄▄▄▄
//    `╢▒╜  ╣▒╜       ▀▀▀▀▀▀▀  ▀▀      ▀▀▀   ▀▀▀  ▀▀▀   ▀▀▀▀▀▀  ▀▀▀▀▀▀▀
"use strict";

const quote_line = document.querySelector("h1");
const speed_input = document.getElementById("speed-input");
const quote = "Let there be light!";
let counter = 0;
let typeSpeed = (1000 / speed_input.value) * 1;
let reType;
let quoteText = ""; //temporary node for aggragrating letters from quote
//||||||||||||||||||||||||||||||||||||||||||||||||
// Main Function that creates node of text by  |||
// counter increasing and adding letters to it |||
//||||||||||||||||||||||||||||||||||||||||||||||||

function typeQuote() {
  if (counter >= quote.length) {
    counter = 0;
    quoteText = "";
  }
  quoteText += quote[counter];
  counter++;
  quote_line.innerText = quoteText;
}
//||||||||||||||| Recuring typeQuote() ||||||||||||||||||||||
let initialType = setInterval(typeQuote, typeSpeed); //||||
//|||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
// On First speed change main initialType() is stopped and ||
// reType() gets in action, on following speed change      ||
// we have no more initialType(), but reType(), which is   ||
// stopped and with updated speed is called again          ||
//|||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
speed_input.addEventListener("input", function () {
  clearInterval(initialType);
  clearInterval(reType);
  typeSpeed = (1000 / speed_input.value) * 1;

  function foo() {
    reType = setInterval(typeQuote, typeSpeed);
  }

  foo();
});
