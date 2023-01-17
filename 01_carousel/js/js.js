let box = document.querySelectorAll(".box");
let counter = 1;
const boxCount = box.length;
// box[0].style.flexGrow = "4";

function reset() {
  for (let i = 0; i < boxCount; i++) {
    //box[i].style.flexGrow = "0";
    for (let i = 0; i < boxCount; i++) {
      box[i].classList.remove("active");
    }
  }
}

for (let i = 0; i < box.length; i++) {
  box[i].addEventListener("click", () => {
    reset();
    box[i].classList.add("active");
  });
}

// setInterval(function () {
//   reset();
//   let increase = counter++;

//   box[increase].style.flexGrow = "4";
//   box[increase].style.backgroundSize = "auto 100%";
//   console.log(increase);
//   if (increase == boxCount - 1) {
//     counter = 0;
//   }
// }, 1500);
