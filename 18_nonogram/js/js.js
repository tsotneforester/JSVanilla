//   ,@▒▒╜  ╣▒║╖     ▄▓█████  ▐██████▄ ▐██▌  ██▓       ▄█████▌  ███████
// ╓╣▒▒╜ @╝╣╖`╢▒▒╗   ███      ▐██▌ ███  █▓█▄███▀      ▐██▌      ███▌
// ╢▒▒╖  ╢╗@╝  ╢▒▒╝  ███  ███ ▐███████  ▄▓█▓▓█▄       ▐██▌ ▐██▌ ██████
//  ╙╢▒╢╖ ║╜,╢▒▒╝    ███▄▄███ ▐██▌     ▐██▌ ▐███  ███ ▐███▄███▌ ███▄▄▄▄
//    `╢▒╜  ╣▒╜       ▀▀▀▀▀▀▀  ▀▀      ▀▀▀   ▀▀▀  ▀▀▀   ▀▀▀▀▀▀  ▀▀▀▀▀▀▀
"use strict";

let answers = {
  d001: ["", "", "", "", "t", "", "", "", "", "", "", "", "", "", "t", "", "", "", "", "", "", "", "", "t", "t", "", "t", "", "", "", "", "", "", "t", "t", "", "t", "", "", "", "", "", "t", "t", "t", "", "t", "t", "", "", "", "t", "t", "t", "t", "", "t", "t", "t", "", "t", "t", "t", "t", "t", "", "t", "t", "t", "t", "", "", "", "", "", "t", "", "", "", "", "", "t", "t", "t", "t", "t", "t", "t", "t", "", "", "", "t", "t", "t", "t", "t", "t", "", ""],
};

let result = document.getElementById(`result`);
let check = document.getElementById(`check`);
let clear = document.getElementById(`clear`);
let project = document.getElementById(`project`);
let body = document.getElementsByTagName("body");
let project_value = project.getAttribute("value");
let current_answer = answers[project_value];
let mychart = document.querySelectorAll(".chart");
let myhint = document.querySelectorAll(".hint");
let chart_length = mychart.length;
let hint_length = myhint.length;
let isToggling1 = false;
let isToggling2 = false;
let isToggling3 = false;

//----------------------------------------------------

function clear_board() {
  console.log("clear board");
  for (let i = 0; i < chart_length; i++) {
    mychart[i].classList.remove("blackbox");
    mychart[i].classList.remove("crossbox");
    mychart[i].classList.add("whitebox");
  }
  for (let i = 0; i < hint_length; i++) {
    myhint[i].classList.remove("hint_done");
  }
  clear_check();
  result.innerHTML = "";
}

function hint_click_effect(e) {
  e.target.classList.toggle("hint_done");
}

function clear_check() {
  for (let i = 0; i < chart_length; i++) {
    mychart[i].classList.remove("checkhint");
    mychart[i].classList.remove("wronghint");
  }
}

function continous_effect(e) {
  if (isToggling1) {
    e.target.classList.remove("crossbox");
    e.target.classList.remove("whitebox");
    e.target.classList.add("blackbox");
  }

  if (isToggling2) {
    e.target.classList.remove("whitebox");
    e.target.classList.remove("blackbox");
    e.target.classList.add("crossbox");
  }

  if (isToggling3) {
    e.target.classList.remove("blackbox");
    e.target.classList.remove("crossbox");
    e.target.classList.add("whitebox");
  }
}

function click_effect(e) {
  clear_check();
  if (e.target.classList.contains("whitebox")) {
    e.target.classList.remove("crossbox");
    e.target.classList.remove("whitebox");
    e.target.classList.add("blackbox");
    isToggling1 = true;
  } else if (e.target.classList.contains("blackbox")) {
    e.target.classList.remove("whitebox");
    e.target.classList.remove("blackbox");
    e.target.classList.add("crossbox");
    isToggling2 = true;
  } else if (e.target.classList.contains("crossbox")) {
    e.target.classList.remove("blackbox");
    e.target.classList.remove("crossbox");
    e.target.classList.add("whitebox");
    isToggling3 = true;
  }
}

function disable_continous() {
  isToggling1 = false;
  isToggling2 = false;
  isToggling3 = false;
}

function check_progress() {
  let current_progress = [];
  for (let i = 0; i < chart_length; i++) {
    if (mychart[i].classList.contains("blackbox")) {
      current_progress.push("t");
    } else {
      current_progress.push("");
    }

    if (mychart[i].classList.contains("blackbox")) {
      if (current_answer[i] == current_progress[i]) {
        mychart[i].classList.add("checkhint");
      }
      if (current_answer[i] != current_progress[i]) {
        mychart[i].classList.add("wronghint");
      }
    }
  }
}

function solve_status() {
  let current_progress1 = [];
  for (let i = 0; i < chart_length; i++) {
    if (mychart[i].classList.contains("blackbox")) {
      current_progress1.push("t");
    } else {
      current_progress1.push("");
    }
  }
  if (current_answer.join("|").trim() === current_progress1.join("|").trim()) {
    result.innerHTML = "Solved";
    console.log("object");
    for (let i = 0; i < chart_length; i++) {
      mychart[i].classList.remove("crossbox");
    }
    check.remove();
    clear.remove();
  } else {
    check_progress();
  }
}

function startGame() {
  for (let i = 0; i < chart_length; i++) {
    mychart[i].onmousedown = click_effect;
    mychart[i].onmouseenter = continous_effect;
    body[0].onmouseup = disable_continous;
  }

  for (let i = 0; i < hint_length; i++) {
    myhint[i].onclick = hint_click_effect;
  }

  check.onclick = check_progress;
  check.onclick = solve_status;
  clear.onclick = clear_board;
}
startGame();
