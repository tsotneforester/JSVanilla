//      ,    ,
//   ,@▒▒╜  ╣▒║╖     ▄▓█████  ▐██████▄ ▐██▌  ██▓       ▄█████▌  ███████`
// ╓╣▒▒╜ @╝╣╖`╢▒▒╗   ███"---  ▐██▌-███` █▓█▄███▀      ▐██▌---   ███▌,,
// ╢▒▒╖  ╢╗@╝  ╢▒▒╝  ███  ███ ▐███████  ▄▓█▓▓█▄       ▐██▌ ▐██▌ ██████
//  ╙╢▒╢╖ ║╜,╢▒▒╝    ███▄▄███ ▐██▌--`  ▐██▌ ▐███ ▓███ ▐███▄███▌ ███▄▄▄▄
//    `╢▒╜  ╣▒╜       ▀▀▀▀▀▀▀ '▀▀`     '▀▀`  ▀▀▀ ╙▀▀▀   ▀▀▀▀▀▀  ▀▀▀▀▀▀▀
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
let buttons = document.querySelectorAll(".letter");
let reset = document.querySelector(".reset");
let input = document.getElementById("result_line");

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function () {
    input.innerHTML += buttons[i].innerText.replace(
      // /[აბგდევზთიკლმნოპჟრსტუფქღყშჩცძწჭხჯჰ]/g,
      /[ႠႡႢႣႤႥႦႧႨႩႪႫႬႭႮႯႰႱႲႳႴႵႶႷႸႹႺႻႼႽႾႿჀ]/g,
      (m) => chars[m]
    );
  });
}

reset.addEventListener("click", function () {
  input.innerHTML = "";
});
