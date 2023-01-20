"use strict";
let inputs = document.querySelectorAll("input");
let inputCount = inputs.length; //fix
const interval = 10;

inputs[0].focus();

inputs.forEach((ele, i) => {
  ele.addEventListener("keydown", function (e) {
    if (e.key * 1 >= 0 && e.key * 1 <= 9) {
      ele.value = "";

      if (i == inputCount - 1) {
        //control focus min and max target
        setTimeout(() => {
          inputs[i].focus();
        }, interval);
      } else {
        setTimeout(() => {
          inputs[i + 1].focus();
        }, interval);
      }
    } else if (e.key === "Backspace") {
      ele.value = "";
      if (i == 0) {
        //control Backspace min and max target
        setTimeout(() => {
          inputs[i].focus();
        }, interval);
      } else {
        setTimeout(() => {
          inputs[i - 1].focus();
        }, interval);
      }
    } else if (e.key === "e") {
      e.preventDefault();
    }
  });
});

function resetFocus(e) {}
