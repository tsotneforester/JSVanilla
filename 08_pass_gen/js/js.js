//   ,@▒▒╜  ╣▒║╖     ▄▓█████  ▐██████▄ ▐██▌  ██▓       ▄█████▌  ███████
// ╓╣▒▒╜ @╝╣╖`╢▒▒╗   ███      ▐██▌ ███  █▓█▄███▀      ▐██▌      ███▌
// ╢▒▒╖  ╢╗@╝  ╢▒▒╝  ███  ███ ▐███████  ▄▓█▓▓█▄       ▐██▌ ▐██▌ ██████
//  ╙╢▒╢╖ ║╜,╢▒▒╝    ███▄▄███ ▐██▌     ▐██▌ ▐███  ███ ▐███▄███▌ ███▄▄▄▄
//    `╢▒╜  ╣▒╜       ▀▀▀▀▀▀▀  ▀▀      ▀▀▀   ▀▀▀  ▀▀▀   ▀▀▀▀▀▀  ▀▀▀▀▀▀▀
"use strict";

const char_length = document.querySelector(".char-length");
const checkboxes = document.querySelectorAll("input[type=checkbox]");
const generateButton = document.getElementById("generate");
const slider = document.getElementById("slider");
const passwordInput = document.getElementById("password");
let sliderValue = slider.value * 1;
let pattern = [];

const patternObject = {
  lowercase: getRandomLower,
  uppercase: getRandomUpper,
  numbercase: getRandomNumber,
  symolcase: getRandomSymbol,
};

//|||||||||||||||||||||||||||||||||||||||||||||||||
//      Main Function To Generate Password     ||||
//|||||||||||||||||||||||||||||||||||||||||||||||||

generateButton.addEventListener("click", function () {
  makePattern(); //['lowercase', 'uppercase', 'numbercase', 'symolcase']

  let PasswordPattern = Array.from({ length: sliderValue }, () => {
    return "";
  }) //create empty array of (n) length
    .fill(pattern, 0)
    .flat()
    .slice(0, sliderValue)
    .sort(function () {
      return 0.5 - Math.random(); //shuffle array
    });

  let passwordString = Array.from(PasswordPattern, (e) => {
    return patternObject[e]();
  }).join(""); // Generates password string from pattern

  passwordInput.value = passwordString;
  window.navigator.clipboard.writeText(passwordString); //copy to clipboard
});

//|||||||||||||||||||||| 1 |||||||||||||||
function makePattern() {
  pattern = ["lowercase"];
  for (let i = 0, n = checkboxes.length; i < n; i++) {
    if (checkboxes[i].checked) {
      pattern.push(checkboxes[i].value);
    }
  }
}

//|||||||||||||||||||||| 2 ||||||||||||||||
function updateValue() {
  sliderValue = slider.value * 1;
  char_length.innerText = sliderValue;
}

//||||||||||||||||||||||| 3 |||||||||||||||
function getRandomLower() {
  return String.fromCharCode(random(26) + 97);
}
function getRandomUpper() {
  return String.fromCharCode(random(26) + 65);
}
function getRandomNumber() {
  return String.fromCharCode(random(10) + 48);
}
function getRandomSymbol() {
  const symbols = "!@#$%^&*(){}[]=<>/,.";
  return symbols[Math.floor(Math.random() * symbols.length)];
}
function random(n) {
  return Math.floor(Math.random() * n);
}
