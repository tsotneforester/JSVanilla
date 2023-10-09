//   ,@▒▒╜  ╣▒║╖     ▄▓█████  ▐██████▄ ▐██▌  ██▓       ▄█████▌  ███████
// ╓╣▒▒╜ @╝╣╖`╢▒▒╗   ███      ▐██▌ ███  █▓█▄███▀      ▐██▌      ███▌
// ╢▒▒╖  ╢╗@╝  ╢▒▒╝  ███  ███ ▐███████  ▄▓█▓▓█▄       ▐██▌ ▐██▌ ██████
//  ╙╢▒╢╖ ║╜,╢▒▒╝    ███▄▄███ ▐██▌     ▐██▌ ▐███  ███ ▐███▄███▌ ███▄▄▄▄
//    `╢▒╜  ╣▒╜       ▀▀▀▀▀▀▀  ▀▀      ▀▀▀   ▀▀▀  ▀▀▀   ▀▀▀▀▀▀  ▀▀▀▀▀▀▀
"use strict";

const x_score_count = document.getElementById("x-score-count");
const o_score_count = document.getElementById("o-score-count");
const tie_score_count = document.getElementById("tie-score-count");
const draw_boxes = document.querySelectorAll(".draw-boxes");
let progressArray = [];
let gameStarted = false;
let isHumanTurn;
//|||||||||||||||||||||||||||||||||||||||||
//      App starts randomizer()          ||
//|||||||||||||||||||||||||||||||||||||||||
function randomizer() {
  isHumanTurn = Math.random() < 0.5; //1. determines 1st move
  gameStarted = true; //2. toggles game start status
  if (!isHumanTurn) {
    CPUDraws();
  }
  console.log("Human Starts - ", isHumanTurn);
}
randomizer();
//||||||||||||||||||||||||||
// Now Human or CPU Plays ||
//||||||||||||||||||||||||||
function humanDraws(e) {
  if (isHumanTurn && gameStarted) {
    if (e.target.innerHTML == "") {
      e.target.innerHTML = "x";
      isHumanTurn = !isHumanTurn; //toggles turn
      progressify(); //Creater progrees array like this - ['', '', 'x', 'o', 'x', '', 'o', '', 'o']
      winChecker(); //Checks all possible variations for win
      tieChecker();
      CPUDraws();
    }
  }
}
draw_boxes.forEach((box) => {
  box.onclick = humanDraws;
});
//----------------------------------------------------

function CPUDraws() {
  if (isHumanTurn === false && gameStarted) {
    setTimeout(function () {
      //let's create array with empty cell's nth numbers and choose random
      let emptyCells = [];
      for (let i = 0; i < 9; i++) {
        if (draw_boxes[i].innerHTML === "") {
          emptyCells.push(i);
        }
      }
      let emptyCell = emptyCells[Math.floor(Math.random() * emptyCells.length)];
      //this is like when human draws
      draw_boxes[emptyCell].innerHTML = "o";
      isHumanTurn = !isHumanTurn;
      progressify();
      winChecker();
      tieChecker();
    }, 1000);
  }
}

//|||||||||||||||||||||||||||||||||||||||||||||||||||||||||
// Here are functions Hunam & CPU both use on their turn ||
//|||||||||||||||||||||||||||||||||||||||||||||||||||||||||

function progressify() {
  progressArray = [];
  for (let i = 0; i < 9; i++) {
    progressArray.push(draw_boxes[i].innerHTML);
  }
  console.log(progressArray);
}
function winChecker() {
  lineChecker(0, 1, 2);
  lineChecker(3, 4, 5);
  lineChecker(6, 7, 8);
  lineChecker(0, 3, 6);
  lineChecker(1, 4, 7);
  lineChecker(2, 5, 8);
  lineChecker(0, 4, 8);
  lineChecker(2, 4, 6);
}
function tieChecker() {
  if (!progressArray.includes("") && progressArray.length != 0) {
    scorify(tie_score_count);
  }
}
function lineChecker(a, b, c) {
  if (progressArray[a] == progressArray[b] && progressArray[b] == progressArray[c] && progressArray[b] !== "") {
    if (progressArray[a] == "x") {
      isHumanTurn = 1;
      scorify(x_score_count);
    } else if (progressArray[a] == "o") {
      isHumanTurn = 1;
      scorify(o_score_count);
    }
  }
}
//||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
// resets progress and game status, scores in HTML on X/O/TIE  side ||
// cleans gameboard visually and restarts game with randomizer()*1  ||
//||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
function scorify(selector, time = 1000) {
  progressArray = [];
  gameStarted = false;
  setTimeout(function () {
    selector.innerHTML = Number(selector.innerHTML) + 1;
    resetDesk();
    randomizer();
  }, time);
}
//|||||||||||||||||||||||||||||||||||||||||||||||||||
function resetDesk() {
  for (let i = 0; i < 9; i++) {
    draw_boxes[i].innerHTML = "";
  }
}
//|||||||||||||||||||||||||||||||||||||||||||||||||||
