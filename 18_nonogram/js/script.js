//   ,@▒▒╜  ╣▒║╖     ▄▓█████  ▐██████▄ ▐██▌  ██▓       ▄█████▌  ███████
// ╓╣▒▒╜ @╝╣╖`╢▒▒╗   ███      ▐██▌ ███  █▓█▄███▀      ▐██▌      ███▌
// ╢▒▒╖  ╢╗@╝  ╢▒▒╝  ███  ███ ▐███████  ▄▓█▓▓█▄       ▐██▌ ▐██▌ ██████
//  ╙╢▒╢╖ ║╜,╢▒▒╝    ███▄▄███ ▐██▌     ▐██▌ ▐███  ███ ▐███▄███▌ ███▄▄▄▄
//    `╢▒╜  ╣▒╜       ▀▀▀▀▀▀▀  ▀▀      ▀▀▀   ▀▀▀  ▀▀▀   ▀▀▀▀▀▀  ▀▀▀▀▀▀▀
import DATA from "./puzzleData.js";
import { cleanBoard } from "./checkNclean.js";
import getCurrentProgress from "./currentProgress.js";
import errorCounterIn from "./errorCounter.js";

//|||||||||||||||||||| Selectors ||||||||||||||||||||||

let puzzle_id = "d002";
puzzleRender.call(DATA[puzzle_id]); //  1

//|||||||||||||||||||||   1   |||||||||||||||||||||||||||
function puzzleRender() {
  function makeGrid(parentElement, x, y, childClass, arrayData) {
    let node = "";
    node += "<table>";
    for (let i = 0; i < y; i++) {
      node += "<tr>";
      for (let ii = 0; ii < x; ii++) {
        node += `<td class="cell ${childClass}">${arrayData ? arrayData[i][ii] : ""}</td>`;
      }

      node += "</tr>";
    }
    node += "</table>";
    document.querySelector(parentElement).insertAdjacentHTML("afterbegin", node);
  }

  makeGrid(".blank", this.blankDimensions[0], this.blankDimensions[1], "hint");
  makeGrid(".hinth", this.puzzleDemensions[0], this.blankDimensions[1], "hint", DATA[puzzle_id].horizontalHints);
  makeGrid(".hintv", this.blankDimensions[0], this.puzzleDemensions[1], "hint", DATA[puzzle_id].verticalHints);
  makeGrid(".grid", this.puzzleDemensions[0], this.puzzleDemensions[1], "block whitebox");
}

let hints = document.querySelectorAll(".hint");
let blocks = document.querySelectorAll(".block");
let body = document.getElementsByTagName("body");

let continous_status = [false, false, false];

//|||||||||||||||||||||| toggling |||||||||||
function continous_effect(e) {
  if (continous_status[1]) {
    e.target.classList.remove("crossbox");
    e.target.classList.remove("whitebox");
    e.target.classList.add("blackbox");
  } else if (continous_status[2]) {
    e.target.classList.remove("whitebox");
    e.target.classList.remove("blackbox");
    e.target.classList.add("crossbox");
  } else if (continous_status[0]) {
    e.target.classList.remove("blackbox");
    e.target.classList.remove("crossbox");
    e.target.classList.add("whitebox");
  }
}

for (let i = 0; i < blocks.length; i++) {
  blocks[i].onmousedown = mouseDownEffect;
  blocks[i].onmouseenter = continous_effect;
  body[0].onmouseup = disable_continous;
}

//|||||||||||||||||||| Hint Click  ||||||||||||||||||||||
for (let i = 0, length = hints.length; i < length; i++) {
  hints[i].onclick = hint_click_effect;
}

function hint_click_effect(e) {
  e.target.classList.toggle("red-crossed");
}
//|||||||||||||||||||| Block Click  ||||||||||||||||||||||

function mouseDownEffect(e) {
  cleanBoard(".block"); //  4. Clean puzzle from right/wrong hints
  if (e.target.classList.contains("whitebox")) {
    e.target.classList.remove("crossbox");
    e.target.classList.remove("whitebox");
    e.target.classList.add("blackbox");
    continous_status[1] = true;
  } else if (e.target.classList.contains("blackbox")) {
    e.target.classList.remove("whitebox");
    e.target.classList.remove("blackbox");
    e.target.classList.add("crossbox");
    continous_status[2] = true;
  } else if (e.target.classList.contains("crossbox")) {
    e.target.classList.remove("blackbox");
    e.target.classList.remove("crossbox");
    e.target.classList.add("whitebox");
    continous_status[0] = true;
  }
}

//||||||||||||||||||| html ==> js|||||||||||||||||||
document.getElementById("check").addEventListener("click", checkStatus);
document.getElementById("clean").addEventListener("click", () => cleanBoard(".block"));

function checkStatus() {
  let errors = errorCounterIn(".block", DATA[puzzle_id].solution); // 2
  if (errors == 0) {
    cleanBoard(".block");
    alert("solved");
    return;
  }
  let currentProgress = getCurrentProgress(".block");

  let solution = DATA[puzzle_id].solution;
  for (let i = 0; i < blocks.length; i++) {
    if (blocks[i].classList.contains("blackbox")) {
      if (solution[i] == currentProgress[i]) {
        blocks[i].classList.add("checkhint");
      }
      if (solution[i] != currentProgress[i]) {
        blocks[i].classList.add("wronghint");
      }
    }
  }
}

//|||||||||||||||||||||||||| disable_continous ?????????????

function disable_continous() {
  continous_status[0] = false;
  continous_status[1] = false;
  continous_status[2] = false;
}
