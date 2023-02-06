function shuffle(array) {
  let currentIndex = array.length,
    randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex != 0) {
    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
  }

  return array;
}

// Used like so
var arr = ["mdelo", "tke", "dzna", "aguri", "dzna", "tke", "mdelo", "kva", "udabno", "dzna", "tke", "kva", "mdelo", "dzna", "aguri", "mdelo", "tke", "kva", "aguri"];
shuffle(arr);
let desert = arr.findIndex((e) => e == "udabno");

function make_tile() {
  let ddd = document.querySelectorAll(".pentagon img");
  for (let i = 0; i < ddd.length; i++) {
    ddd[i].removeAttribute("src");
    ddd[i].setAttribute("src", `img/${arr[i]}.png`);
  }
}

make_tile();

let dice = [
  [5, 4, "black"],
  [2, 1, "black"],
  [6, 5, "red"],
  [3, 2, "black"],
  [8, 5, "red"],
  [10, 3, "black"],
  [9, 4, "black"],
  [12, 1, "black"],
  [11, 2, "black"],
  [4, 3, "black"],
  [8, 5, "red"],
  [10, 3, "black"],
  [9, 4, "black"],
  [4, 3, "black"],
  [5, 4, "black"],
  [6, 5, "red"],
  [3, 2, "black"],
  [11, 2, "black"],
];

function roll() {
  dice.splice(desert, 0, ["", "", ""]);
  let number = document.querySelectorAll(".number");
  let spot = document.querySelectorAll(".spot");
  for (let i = 0; i < number.length; i++) {
    number[i].innerHTML = dice[i][0];

    let dots = "";
    for (let ii = 0; ii < dice[i][1]; ii++) {
      dots += ".";
      spot[i].innerHTML = dots;
      spot[i].setAttribute("style", `color:${dice[i][2]}`);
    }
  }
}

roll();
