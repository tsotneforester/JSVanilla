"use strict";

var button = document.querySelectorAll(".button");
var number = document.querySelectorAll(".number");
var action = document.querySelectorAll(".action");
var action_line = document.getElementById("action_line");
var number_line = document.getElementById("number_line");
var math = document.getElementById("math");
var equals = document.getElementById("equals");
let evaluation_string = "";
let number_string = "";

function set_action_line(e) {
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
    let myarray1 = evaluation_string.split("-").length;
    let myarray2 = evaluation_string.split("+").length;
    let myarray3 = evaluation_string.split("*").length;
    let myarray4 = evaluation_string.split("/").length;

    if (myarray1 > 1 || myarray2 > 1 || myarray3 > 1 || myarray4 > 1) {
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

function set_number_line(e) {
  number_string += e.target.getAttribute("value");
  number_line.innerHTML = number_string;
  evaluation_string += e.target.getAttribute("value");
  console.log(evaluation_string + " - eval string");
  console.log(number_string + " - numb string");

}

function done() {
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
equals.onclick = done;



for (var i = 0, il = action.length; i < il; i++) {
  action[i].addEventListener("click", set_action_line);
}

for (var i = 0, il = number.length; i < il; i++) {
  number[i].addEventListener("click", set_number_line);
}

