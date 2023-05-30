//   ,@▒▒╜  ╣▒║╖     ▄▓█████  ▐██████▄ ▐██▌  ██▓       ▄█████▌  ███████
// ╓╣▒▒╜ @╝╣╖`╢▒▒╗   ███      ▐██▌ ███  █▓█▄███▀      ▐██▌      ███▌
// ╢▒▒╖  ╢╗@╝  ╢▒▒╝  ███  ███ ▐███████  ▄▓█▓▓█▄       ▐██▌ ▐██▌ ██████
//  ╙╢▒╢╖ ║╜,╢▒▒╝    ███▄▄███ ▐██▌     ▐██▌ ▐███  ███ ▐███▄███▌ ███▄▄▄▄
//    `╢▒╜  ╣▒╜       ▀▀▀▀▀▀▀  ▀▀      ▀▀▀   ▀▀▀  ▀▀▀   ▀▀▀▀▀▀  ▀▀▀▀▀▀▀
"use strict";
const textarea = document.getElementById("textarea");
const tags = document.getElementById("tags");
//|| Focus cursor |||||
textarea.focus(); //|||
//||||||||||||||||||||||||||||||||||||||||||||||||||||||
//||                  Tag Generator                  |||
//||||||||||||||||||||||||||||||||||||||||||||||||||||||
textarea.addEventListener("input", function (e) {
  let inputString = e.target.value.trim();
  //Creates array from text & Filters out empty members
  let array = inputString.split(",").filter((e) => e);
  //Generates html node from array and writes it in HTML
  let html = "";
  for (let i = 0; i < array.length; i++) {
    html += `<span class="tag">${array[i]}</span>`;
  }
  tags.innerHTML = html;
  //resets html node
  html = "";
});
//|||||||||||||||||||||||||||||||||||||||||||||||||||||||||
