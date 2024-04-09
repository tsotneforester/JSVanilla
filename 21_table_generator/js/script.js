//   ,@▒▒╜  ╣▒║╖     ▄▓█████  ▐██████▄ ▐██▌  ██▓       ▄█████▌  ███████
// ╓╣▒▒╜ @╝╣╖`╢▒▒╗   ███      ▐██▌ ███  █▓█▄███▀      ▐██▌      ███▌
// ╢▒▒╖  ╢╗@╝  ╢▒▒╝  ███  ███ ▐███████  ▄▓█▓▓█▄       ▐██▌ ▐██▌ ██████
//  ╙╢▒╢╖ ║╜,╢▒▒╝    ███▄▄███ ▐██▌     ▐██▌ ▐███  ███ ▐███▄███▌ ███▄▄▄▄
//    `╢▒╜  ╣▒╜       ▀▀▀▀▀▀▀  ▀▀      ▀▀▀   ▀▀▀  ▀▀▀   ▀▀▀▀▀▀  ▀▀▀▀▀▀▀
"use strict";
const table = document.querySelector(".table");
const inputs = document.querySelectorAll("input");
const row = document.getElementById("row");
const column = document.getElementById("column");

//|||||||||||||||||||||||||||||||||||||||||||||||||||||
// Main function, that eccapts row and column number ||
// and with nested loop, generates <table> tag, that ||
//             is sent to HTML document              ||
//|||||||||||||||||||||||||||||||||||||||||||||||||||||
function createTable(rows, cols) {
  table.innerHTML = "";
  let result = "<table>";
  for (let i = 0; i < rows; i++) {
    result += "<tr>";
    for (let i = 0; i < cols; i++) {
      result += "<td></td>";
    }
    result += "</tr>";
  }
  result += "</table>";
  table.insertAdjacentHTML("afterbegin", result);
}
//|||||||||| Create Table after page loads ||||||||||||
createTable(row.value, column.value);
//||| on each input change main function is called||||
inputs.forEach((input) => {
  input.addEventListener("input", function () {
    createTable(row.value > 10 ? 10 : row.value, column.value > 10 ? 10 : column.value);
  });
});
//||||||||||||||||||||||||||||||||||||||||||||||||||||
