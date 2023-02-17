"use strict";

const input = document.getElementsByTagName("input");

for (let i = 0; i < input.length; i++) {
  input[i].addEventListener("input", function () {
    const trlength = document.getElementById("data").rows.length;

    for (let i = 2; i < trlength; i++) {
      const tableRow = document.getElementById("data").rows[i];
      tableRow.classList.remove("hidden");

      if (tableRow.getElementsByTagName("td")[0].innerHTML.toLowerCase().indexOf(input[0].value) == -1) {
        tableRow.classList.add("hidden");
      }
      if (tableRow.getElementsByTagName("td")[1].innerHTML.toLowerCase().indexOf(input[1].value) == -1) {
        tableRow.classList.add("hidden");
      }

      if (tableRow.getElementsByTagName("td")[2].innerHTML.indexOf(input[2].value) == -1) {
        tableRow.classList.add("hidden");
      }

      if (tableRow.getElementsByTagName("td")[3].innerHTML.toLowerCase().indexOf(input[3].value) == -1) {
        tableRow.classList.add("hidden");
      }
      if (tableRow.getElementsByTagName("td")[4].innerHTML.toLowerCase().indexOf(input[4].value) == -1) {
        tableRow.classList.add("hidden");
      }
      if (tableRow.getElementsByTagName("td")[5].innerHTML.toLowerCase().indexOf(input[5].value) == -1) {
        tableRow.classList.add("hidden");
      }

      if (tableRow.getElementsByTagName("td")[6].innerHTML.indexOf(input[6].value) == -1) {
        tableRow.classList.add("hidden");
      }
    }
  });
}
