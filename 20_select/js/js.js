//      ,    ,
//   ,@▒▒╜  ╣▒║╖     ▄▓█████  ▐██████▄ ▐██▌  ██▓       ▄█████▌  ███████`
// ╓╣▒▒╜ @╝╣╖`╢▒▒╗   ███"---  ▐██▌-███` █▓█▄███▀      ▐██▌---   ███▌,,
// ╢▒▒╖  ╢╗@╝  ╢▒▒╝  ███  ███ ▐███████  ▄▓█▓▓█▄       ▐██▌ ▐██▌ ██████
//  ╙╢▒╢╖ ║╜,╢▒▒╝    ███▄▄███ ▐██▌--`  ▐██▌ ▐███ ▓███ ▐███▄███▌ ███▄▄▄▄
//    `╢▒╜  ╣▒╜       ▀▀▀▀▀▀▀ '▀▀`     '▀▀`  ▀▀▀ ╙▀▀▀   ▀▀▀▀▀▀  ▀▀▀▀▀▀▀
"use strict";
let selection = document.querySelector(".select");
let option = document.querySelector("ul");
let input = document.querySelector("input");
let data = ["Georgia", "Armenia", "Spain", "Germany", "France", "Italy"];

for (let i = 0; i < data.length; i++) {
  let text = `<li>${data[i]}</li>`;
  option.insertAdjacentHTML("beforeend", text);
}

let options = document.querySelectorAll(".options li");
for (let i = 0; i < options.length; i++) {
  options[i].addEventListener("click", function () {
    selection.innerHTML = options[i].innerHTML;
  });
}

input.addEventListener("input", function () {
  let newNumbers = data.filter((e) => {
    return e.includes(input.value);
  });

  if (newNumbers.length > 0) {
    option.innerHTML = "";
    for (let i = 0; i < newNumbers.length; i++) {
      let text = `<li>${newNumbers[i]}</li>`;
      option.insertAdjacentHTML("beforeend", text);
    }
  } else {
    option.innerHTML = "";
    option.insertAdjacentHTML("beforeend", "ooops");
  }
  let options1 = document.querySelectorAll(".options li");
  for (let i = 0; i < options1.length; i++) {
    options1[i].addEventListener("click", function () {
      selection.innerHTML = options1[i].innerHTML;
    });
  }
});
