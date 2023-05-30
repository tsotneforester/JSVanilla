//   ,@▒▒╜  ╣▒║╖     ▄▓█████  ▐██████▄ ▐██▌  ██▓       ▄█████▌  ███████
// ╓╣▒▒╜ @╝╣╖`╢▒▒╗   ███      ▐██▌ ███  █▓█▄███▀      ▐██▌      ███▌
// ╢▒▒╖  ╢╗@╝  ╢▒▒╝  ███  ███ ▐███████  ▄▓█▓▓█▄       ▐██▌ ▐██▌ ██████
//  ╙╢▒╢╖ ║╜,╢▒▒╝    ███▄▄███ ▐██▌     ▐██▌ ▐███  ███ ▐███▄███▌ ███▄▄▄▄
//    `╢▒╜  ╣▒╜       ▀▀▀▀▀▀▀  ▀▀      ▀▀▀   ▀▀▀  ▀▀▀   ▀▀▀▀▀▀  ▀▀▀▀▀▀▀
"use strict";
const data = ["tomatoe", "bananas", "tie", "faith"];

const desk = document.querySelector(".desk");
const remaining = document.querySelector(".remaining");
const keyboard = document.querySelector(".keyboard");
const keyboard_letters = document.querySelectorAll(".keyboard div");
const input = document.querySelector("input");
let gameStatus = false;

let word = [];
let arr = [];
//|||||||||||||||||||||||||||||||||||||||||||||||||||||||||
// Game starts by enabling gameS and chooses random word ||
//   creates letter boxes and binds them to variable     ||
//|||||||||||||||||||||||||||||||||||||||||||||||||||||||||
(function () {
  gameStatus = true;
  word = [...data[Math.floor(Math.random() * data.length)]];
  let html = "";
  for (let i = 0; i < word.length; i++) {
    html += "<div></div>";
  }
  desk.insertAdjacentHTML("afterbegin", html);
})();
const desk_letters = document.querySelectorAll(".desk div");

//||||||||||||||||||||||||||||||||||||||||||||||||
// Main block for keyboard letter press actions ||
//||||||||||||||||||||||||||||||||||||||||||||||||

keyboard_letters.forEach((letter) => {
  letter.addEventListener("click", function (e) {
    if (gameStatus) {
      let deskLetter = e.target.innerHTML; // clicked keyboard letter
      if (word.includes(deskLetter)) {
        //if word includes clicked keyboard letter, it gets green
        e.target.classList.add("positive");
        //included clicked keyboard letter appends in HTML
        desk_letters.forEach((letter) => {
          for (let i = 0; i < word.length; i++) {
            if (word[i] == deskLetter) {
              desk_letters[i].innerHTML = deskLetter;
            }
          }
        });
      } else {
        //if clicked keyboard letter is not in word, counter decreases and
        //lettor button gets red background
        if (e.target.classList != "negative") {
          e.target.classList.add("negative");
          input.value = input.value - 1;
        }
      }
      checkStatus();
    }
  });
});
//||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
function checkStatus() {
  // creates word current progress array
  arr = [];
  desk_letters.forEach((letter) => {
    arr.push(letter.innerHTML);
  });
  // action on 0 remaining geuses
  if (input.value == 0) {
    desk_letters.forEach((letter) => {
      letter.classList.add("fail");
    });
    gameStatus = !gameStatus;
    keyboard.style.display = "none";
    remaining.style.display = "none";
  }
  // action if all letters are guessed
  if (!arr.includes("")) {
    desk_letters.forEach((letter) => {
      letter.classList.add("success");
    });
    keyboard.style.display = "none";
    remaining.style.display = "none";
    gameStatus = !gameStatus;
  }
}
//|||||||||||||||||||||||||||||||||||||||||||||||||||||
