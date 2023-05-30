//      ,    ,
//   ,@▒▒╜  ╣▒║╖     ▄▓█████  ▐██████▄ ▐██▌  ██▓       ▄█████▌  ███████
// ╓╣▒▒╜ @╝╣╖`╢▒▒╗   ███      ▐██▌ ███  █▓█▄███▀      ▐██▌      ███▌
// ╢▒▒╖  ╢╗@╝  ╢▒▒╝  ███  ███ ▐███████  ▄▓█▓▓█▄       ▐██▌ ▐██▌ ██████
//  ╙╢▒╢╖ ║╜,╢▒▒╝    ███▄▄███ ▐██▌     ▐██▌ ▐███  ███ ▐███▄███▌ ███▄▄▄▄
//    `╢▒╜  ╣▒╜       ▀▀▀▀▀▀▀  ▀▀      ▀▀▀   ▀▀▀  ▀▀▀   ▀▀▀▀▀▀  ▀▀▀▀▀▀▀
"use strict";
let inputs = document.querySelectorAll("input");
let button = document.querySelector("button");
let inputCount = inputs.length;

inputs[0].focus(); // Makes focus on first input

inputs.forEach((input, i) => {
  input.addEventListener("keydown", function (e) {
    e.preventDefault(); //prevents input value insertion
    if (e.key * 1 >= 0 && e.key * 1 <= 9) {
      input.value = e.key;
      validator(); // 1. toggles submit button "active" status
      //control focus min and max target
      if (i == inputCount - 1) {
        input.focus();
      } else {
        inputs[i + 1].focus();
      }
    } else if (e.key === "Backspace") {
      input.value = "";
      validator();
      if (i == 0) {
        //control Backspace min and max target
        input.focus();
      } else {
        inputs[i - 1].focus();
      }
    } else if (e.key === "e") {
      e.preventDefault(); //as 'e' is enabled as number input
    }
  });
});

//|||||||||||||||||||||||||  1  |||||||||||||||||||||||||||||
function validator() {
  let arr = [];

  inputs.forEach((input) => {
    arr.push(input.value);
  });

  if (!arr.includes("")) {
    button.classList.add("active");
  } else {
    button.classList.remove("active");
  }
}
//|||||||||||||||||||||||||||||||||||||||||||||||||||||||
