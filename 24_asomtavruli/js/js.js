//   ,@▒▒╜  ╣▒║╖     ▄▓█████  ▐██████▄ ▐██▌  ██▓       ▄█████▌  ███████
// ╓╣▒▒╜ @╝╣╖`╢▒▒╗   ███      ▐██▌ ███  █▓█▄███▀      ▐██▌      ███▌
// ╢▒▒╖  ╢╗@╝  ╢▒▒╝  ███  ███ ▐███████  ▄▓█▓▓█▄       ▐██▌ ▐██▌ ██████
//  ╙╢▒╢╖ ║╜,╢▒▒╝    ███▄▄███ ▐██▌     ▐██▌ ▐███  ███ ▐███▄███▌ ███▄▄▄▄
//    `╢▒╜  ╣▒╜       ▀▀▀▀▀▀▀  ▀▀      ▀▀▀   ▀▀▀  ▀▀▀   ▀▀▀▀▀▀  ▀▀▀▀▀▀▀
"use strict";
const chars = {
  Ⴀ: "ა",
  Ⴁ: "ბ",
  Ⴂ: "გ",
  Ⴃ: "დ",
  Ⴄ: "ე",
  Ⴅ: "ვ",
  Ⴆ: "ზ",
  Ⴇ: "თ",
  Ⴈ: "ი",
  Ⴉ: "კ",
  Ⴊ: "ლ",
  Ⴋ: "მ",
  Ⴌ: "ნ",
  Ⴍ: "ო",
  Ⴎ: "პ",
  Ⴏ: "ჟ",
  Ⴐ: "რ",
  Ⴑ: "ს",
  Ⴒ: "ტ",
  Ⴓ: "უ",
  Ⴔ: "ფ",
  Ⴕ: "ქ",
  Ⴖ: "ღ",
  Ⴗ: "ყ",
  Ⴘ: "შ",
  Ⴙ: "ჩ",
  Ⴚ: "ც",
  Ⴛ: "ძ",
  Ⴜ: "წ",
  Ⴝ: "ჭ",
  Ⴞ: "ხ",
  Ⴟ: "ჯ",
  Ⴠ: "ჰ",
};
let keyboard_letters = document.querySelectorAll(".letter");
let reset = document.querySelector(".reset");
let back = document.querySelector(".back");
let result_line = document.getElementById("result-line");

//||||||||||||||||||||||||||||||||||||||||||||||||||||||||
//||   keyboard letter click takes letter and replaces  ||
//|| it with Georgian Unicode letters, sends it in HTML ||
//||||||||||||||||||||||||||||||||||||||||||||||||||||||||
for (let i = 0; i < keyboard_letters.length; i++) {
  keyboard_letters[i].addEventListener("click", function () {
    result_line.innerHTML += keyboard_letters[i].innerText.replace(/[ႠႡႢႣႤႥႦႧႨႩႪႫႬႭႮႯႰႱႲႳႴႵႶႷႸႹႺႻႼႽႾႿჀ]/g, (letter) => chars[letter]);
  });
}
//|||||||||||||||||||||||||||||||||||||||||||||||||||
//||||       Back & Reset Button actions          |||
//|||||||||||||||||||||||||||||||||||||||||||||||||||
reset.addEventListener("click", function () {
  result_line.innerHTML = "";
});

back.addEventListener("click", function () {
  result_line.innerHTML = result_line.innerHTML.slice(0, -1);
});

//|||||||||||||||||||||||||||||||||||||||||||||||||||
// With phisical keyboard present, Backspace works ||
//|||||||||||||||||||||||||||||||||||||||||||||||||||
document.addEventListener("keydown", myFunction);
function myFunction(event) {
  if (event.key == "Backspace") {
    result_line.innerHTML = result_line.innerHTML.slice(0, -1);
    console.log("object");
  }
}
//||||||||||||||||||||||||||||||||||||||||||||||||||||
