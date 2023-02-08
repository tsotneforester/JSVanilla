//      ,    ,
//   ,@▒▒╜  ╣▒║╖     ▄▓█████  ▐██████▄ ▐██▌  ██▓       ▄█████▌  ███████`
// ╓╣▒▒╜ @╝╣╖`╢▒▒╗   ███"---  ▐██▌-███` █▓█▄███▀      ▐██▌---   ███▌,,
// ╢▒▒╖  ╢╗@╝  ╢▒▒╝  ███  ███ ▐███████  ▄▓█▓▓█▄       ▐██▌ ▐██▌ ██████
//  ╙╢▒╢╖ ║╜,╢▒▒╝    ███▄▄███ ▐██▌--`  ▐██▌ ▐███ ▓███ ▐███▄███▌ ███▄▄▄▄
//    `╢▒╜  ╣▒╜       ▀▀▀▀▀▀▀ '▀▀`     '▀▀`  ▀▀▀ ╙▀▀▀   ▀▀▀▀▀▀  ▀▀▀▀▀▀▀
"use strict";
const result = document.querySelector(".result");
const row = document.getElementById("row");
const column = document.getElementById("column");

createTable(row.value, column.value);

row.addEventListener("input", function () {
  createTable(row.value, column.value);
});

column.addEventListener("input", function () {
  createTable(row.value, column.value);
});

function createTable(rows, cols) {
  result.innerHTML = "";
  let output = "<table>";
  for (let i = 0; i < rows; i++) {
    output += "<tr>";
    for (let i = 0; i < cols; i++) {
      output += "<td></td>";
    }
    output += "</tr>";
  }
  output += "</table>";
  console.log(output);
  result.insertAdjacentHTML("afterbegin", output);
}
