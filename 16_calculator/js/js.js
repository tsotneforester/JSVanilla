"use strict";

var number = document.querySelectorAll(".number");
var button = document.querySelectorAll(".button");
var action = document.querySelectorAll(".action");
var result_line = document.getElementById("result_line");
var action_line = document.getElementById("action_line");
var number_line = document.getElementById("number_line");
var sound = document.getElementById("sound");
var light = document.getElementById("light");
var equals = document.getElementById("equals");
let evaluation_string = "";
let number_string = "";
let on_state = false;
let sound_on_state = false;
let light_on_state = false;

function detect(string, char) {
  return string.split(char).length;
}

function click_sound_for() {
  if (sound_on_state) {
    let audio1 = new Audio(`root/x.mp3`);
    audio1.play();
  }
}

function set_action_line(e) {
  if (on_state) {
    let action_string = "";
    action_string += e.target.getAttribute("value");
    action_line.innerHTML = action_string;
    number_string = "";
    if (evaluation_string == "" && number_line.innerHTML != "") {
      evaluation_string = Number(number_line.innerHTML);
      console.log("empty");
      evaluation_string += e.target.getAttribute("value");
      console.log(evaluation_string + " - eval string");
      console.log(number_string + " - numb string");
    } else {
      if (detect(`${evaluation_string}`, "+") > 1 || detect(`${evaluation_string}`, "-") > 1 || detect(`${evaluation_string}`, "/") > 1 || detect(`${evaluation_string}`, "*") > 1) {
        let answer_number = eval(evaluation_string);
        if (answer_number.toString().length > 7) {
          number_line.innerHTML = answer_number.toFixed(3);
          evaluation_string = answer_number.toFixed(3) + e.target.getAttribute("value");
        } else {
          number_line.innerHTML = answer_number;
          evaluation_string = answer_number + e.target.getAttribute("value");
        }
        console.log(evaluation_string + " - eval string");
      } else {
        evaluation_string += e.target.getAttribute("value");
        console.log(evaluation_string + " - eval string");
        console.log(number_string + " - numb string");
      }
    }
  }
}

function set_action_line_key(e) {
  if (on_state) {
    let action_string = "";
    action_string += e;
    action_line.innerHTML = action_string;
    number_string = "";
    if (evaluation_string == "" && number_line.innerHTML != "") {
      evaluation_string = Number(number_line.innerHTML);
      console.log("empty");
      evaluation_string += e;
      console.log(evaluation_string + " - eval string");
      console.log(number_string + " - numb string");
    } else {
      if (detect(`${evaluation_string}`, "+") > 1 || detect(`${evaluation_string}`, "-") > 1 || detect(`${evaluation_string}`, "/") > 1 || detect(`${evaluation_string}`, "*") > 1) {
        let answer_number = eval(evaluation_string);
        if (answer_number.toString().length > 7) {
          number_line.innerHTML = answer_number.toFixed(3);
          evaluation_string = answer_number.toFixed(3) + e.target.getAttribute("value");
        } else {
          number_line.innerHTML = answer_number;
          evaluation_string = answer_number + e;
        }
        console.log(evaluation_string + " - eval string");
      } else {
        evaluation_string += e;
        console.log(evaluation_string + " - eval string");
        console.log(number_string + " - numb string");
      }
    }
  }
}

function set_number_line(e) {
  if (on_state) {
    number_string += e.target.getAttribute("value");
    number_line.innerHTML = number_string;
    evaluation_string += e.target.getAttribute("value");
    console.log(evaluation_string + " - eval string");
    console.log(number_string + " - numb string");
  }
}

function set_number_line_key(e) {
  if (on_state) {
    number_string += e;
    number_line.innerHTML = number_string;
    evaluation_string += e;
    console.log(evaluation_string + " - eval string");
    console.log(number_string + " - numb string");
    // console.log(Number(number_line.innerHTML));
  }
}

function calculate_with_equal() {
  if (on_state) {
    let answer_number = eval(evaluation_string);
    if (answer_number.toString().length > 7) {
      number_line.innerHTML = answer_number.toFixed(3);
    } else {
      number_line.innerHTML = answer_number;
    }

    evaluation_string = "";
    number_string = "";
    action_line.innerHTML = "";
    console.log(evaluation_string + " - eval string");
    console.log(number_string + " - numb string");
  }
}
equals.onclick = calculate_with_equal;

// equals.addEventListener("click", calculate_with_equal);

for (var i = 0, il = action.length; i < il; i++) {
  action[i].addEventListener("click", set_action_line);
}

for (var i = 0, il = number.length; i < il; i++) {
  number[i].addEventListener("click", set_number_line);
}

for (var i = 0, il = button.length; i < il; i++) {
  button[i].addEventListener("click", click_sound_for);
}

function reset() {
  if (on_state) {
    evaluation_string = "";
    number_string = "";
    number_line.innerHTML = 0;
    action_line.innerHTML = "";
  }
}

function turn_on_off() {
  if (!on_state) {
    number_line.innerHTML = 0;
    on_state = true;
    sound_on_state = true;
    console.log("on_state");
    result_line.classList.remove("light_off");
    result_line.classList.add("light_on");
    light_on_state = true;
  } else {
    on_state = false;
    evaluation_string = "";
    sound_on_state = false;
    number_line.innerHTML = "";
    action_line.innerHTML = "";
    console.log("off_state");
    result_line.classList.remove("light_on");
    result_line.classList.add("light_off");
    light_on_state = false;
  }
}

function sound_on_off() {
  if (on_state) {
    if (sound_on_state) {
      sound_on_state = false;
      // sound.innerHTML = `<img src="root/bell-off-solid-48.png" alt="" />`;
    } else {
      sound_on_state = true;
      // sound.innerHTML = `<img src="root/bell-solid-48.png" alt="" />`;
    }
  }
}

function light_on_off() {
  if (on_state) {
    if (!light_on_state) {
      result_line.classList.remove("light_off");
      result_line.classList.add("light_on");
      light_on_state = true;
    } else {
      result_line.classList.add("light_off");
      result_line.classList.remove("light_on");
      light_on_state = false;
    }
  }
}

document.addEventListener(
  "keypress",
  (event) => {
    if (event.key == 1) {
      set_number_line_key("1");
      click_sound_for();
    }
    if (event.key == 2) {
      set_number_line_key("2");
      click_sound_for();
    }
    if (event.key == 3) {
      set_number_line_key("3");
      click_sound_for();
    }
    if (event.key == 4) {
      set_number_line_key("4");
      click_sound_for();
    }
    if (event.key == 5) {
      set_number_line_key("5");
      click_sound_for();
    }
    if (event.key == 6) {
      set_number_line_key("6");
      click_sound_for();
    }
    if (event.key == 7) {
      set_number_line_key("7");
      click_sound_for();
    }
    if (event.key == 8) {
      set_number_line_key("8");
      click_sound_for();
    }
    if (event.key == 9) {
      set_number_line_key("9");
      click_sound_for();
    }
    if (event.key == 0) {
      set_number_line_key("0");
      click_sound_for();
    }
    if (event.key == ".") {
      set_number_line_key(".");
      click_sound_for();
    }
    if (event.key == "Enter") {
      calculate_with_equal();
      click_sound_for();
    }

    if (event.key == "+") {
      set_action_line_key("+");
      click_sound_for();
    }
    if (event.key == "-") {
      set_action_line_key("-");
      click_sound_for();
    }
    if (event.key == "*") {
      set_action_line_key("*");
      click_sound_for();
    }
    if (event.key == "/") {
      set_action_line_key("/");
      click_sound_for();
    }

    if (event.key == "c") {
      reset();
      click_sound_for();
    }
    if (event.key == "n") {
      turn_on_off();
      click_sound_for();
    }
    if (event.key == "m") {
      sound_on_off();
    }
  },
  false
);
