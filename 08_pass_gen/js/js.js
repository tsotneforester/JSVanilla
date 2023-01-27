//      ,    ,
//   ,@▒▒╜  ╣▒║╖     ▄▓█████  ▐██████▄ ▐██▌  ██▓       ▄█████▌  ███████`
// ╓╣▒▒╜ @╝╣╖`╢▒▒╗   ███"---  ▐██▌-███` █▓█▄███▀      ▐██▌---   ███▌,,
// ╢▒▒╖  ╢╗@╝  ╢▒▒╝  ███  ███ ▐███████  ▄▓█▓▓█▄       ▐██▌ ▐██▌ ██████
//  ╙╢▒╢╖ ║╜,╢▒▒╝    ███▄▄███ ▐██▌--`  ▐██▌ ▐███ ▓███ ▐███▄███▌ ███▄▄▄▄
//    `╢▒╜  ╣▒╜       ▀▀▀▀▀▀▀ '▀▀`     '▀▀`  ▀▀▀ ╙▀▀▀   ▀▀▀▀▀▀  ▀▀▀▀▀▀▀
"use strict";

const randomFunc = {
  lowercase: getRandomLower,
  uppercase: getRandomUpper,
  numbercase: getRandomNumber,
  symolcase: getRandomSymbol,
};

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
function updateValue() {
  sliderValue = slider.value * 1;
  char_length.innerText = sliderValue;
}
function makePattern() {
  pattern = ["lowercase"];
  for (let i = 0; i < checkboxes.length; i++) {
    if (checkboxes[i].checked) {
      pattern.push(checkboxes[i].value);
    }
  }
}

const char_length = document.getElementById("char-length");
const checkboxes = document.querySelectorAll("input[type=checkbox]");
const generateButton = document.getElementById("generate");
const slider = document.getElementById("slider");
const passwordInput = document.getElementById("password");
const copy = document.querySelector(".copy");
let sliderValue = slider.value * 1;
let pattern = [];

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

  let PasswordPatternExec = Array.from(PasswordPattern, (e) => {
    return randomFunc[e]();
  }).join("");

  passwordInput.value = PasswordPatternExec;
  window.navigator.clipboard.writeText(PasswordPatternExec);
  copy.classList.remove("zorg");
  copy.classList.add("copy");
  copy.innerHTML = `<img src="./img/copy-alt-solid-24.png" alt="" /> Copy`;
});

copy.addEventListener("click", function () {
  if (passwordInput.value) {
    copy.classList.remove("copy");
    copy.classList.add("zorg");
    copy.innerHTML = `<img src="./img/copy-alt-regular-24.png" alt="" /> Copied`;
  }
});
