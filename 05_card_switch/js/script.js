//   ,@▒▒╜  ╣▒║╖     ▄▓█████  ▐██████▄ ▐██▌  ██▓       ▄█████▌  ███████
// ╓╣▒▒╜ @╝╣╖`╢▒▒╗   ███      ▐██▌ ███  █▓█▄███▀      ▐██▌      ███▌
// ╢▒▒╖  ╢╗@╝  ╢▒▒╝  ███  ███ ▐███████  ▄▓█▓▓█▄       ▐██▌ ▐██▌ ██████
//  ╙╢▒╢╖ ║╜,╢▒▒╝    ███▄▄███ ▐██▌     ▐██▌ ▐███  ███ ▐███▄███▌ ███▄▄▄▄
//    `╢▒╜  ╣▒╜       ▀▀▀▀▀▀▀  ▀▀      ▀▀▀   ▀▀▀  ▀▀▀   ▀▀▀▀▀▀  ▀▀▀▀▀▀▀
"use strict";

const data = [
  {
    id: 1,
    image: "https://geojs.one/root/img/writers/1.jpg",
    fullName: "nodar dumbadze",
    review: {
      book: "white flags",
      text: "A prisoner's dream must be like heaven. Inside, the twelve octave Iadons should be chanting, the dream should be a dream, colorful and beautiful like a rainbow.\n- What do you say, Shoshia?",
    },
  },

  {
    id: 2,
    image: "https://geojs.one/root/img/writers/2.jpg",
    fullName: "david kldiashvili",
    review: {
      book: "a tragedy without a hero",
      text: "He slowly turned around, silently walked away from the old woman - his godmother, who was thinking in her heart: she is your enemy, and I lost half the amount of flour... but my daughter-in-law won't find out... what will half the amount help the poor thing?... Oh, God, God!",
    },
  },
  {
    id: 3,
    image: "https://geojs.one/root/img/writers/3.jpg",
    fullName: "mikheil javakhishvili",
    review: {
      book: "jaqo's dispossessed",
      text: "Day followed day, week followed week, year followed year. Teimuraz was waiting for a permanent miracle. And while waiting for a miracle, hoping for the return of the estate and re-enrichment, Teimurazi's heart, hopes, bookcase, and apartment slowly became empty.",
    },
  },
  {
    id: 4,
    image: "https://geojs.one/root/img/writers/4.jpg",
    fullName: "iakob gogebashvili",
    review: {
      book: "boasting pot",
      text: "The pots were collected together. One taller pot stood in the middle and boasted: I am not with you, I have a golden base. Suddenly he felt cold. - Just look at me, I know what gold you have! Mkvekhara pot was ashamed and his voice became weak.",
    },
  },
  {
    id: 5,
    image: "https://geojs.one/root/img/writers/5.jpg",
    fullName: "luka razikashvili",
    review: {
      book: "it rises, lights up!",
      text: "Totia's life ended in one second; His soul died along with the corpse. The wolves calmed down a little, but they were still hungry. They looked at each other, one was afraid of the other, probably because they don't want to eat me now. They were afraid and afraid. One was running away from the other, there was a crunching in the bushes and the snow falling...",
    },
  },
  {
    id: 6,
    image: "https://geojs.one/root/img/writers/6.jpg",
    fullName: "akaki tsereteli",
    review: {
      book: "bashi-achuki",
      text: "For Abdushahil, Baghdad was everywhere, wherever his fortune was; Pirimzisa, imbued with love, was in a hurry to bring his happiness to his homeland; And Bashi-Achuk was still not bothered by Imereti, because he heard that the reason for his defecting to Kakheti was not explained to the Eristavi of Rachi.",
    },
  },
  {
    id: 7,
    image: "https://geojs.one/root/img/writers/7.jpg",
    fullName: "ilia chavchavadze",
    review: {
      book: "man-human?",
      text: "Often, in the middle of the night, the husband and wife, angry and upset, would have deep thoughts about it: 'What should we eat today', they would say in the morning. 'What should we eat tomorrow', they would say in the evening. It was the nourishment of their souls, it was the exercise of their minds, it was the give and take of their thoughts.",
    },
  },

  {
    id: 8,
    image: "https://geojs.one/root/img/writers/8.jpg",
    fullName: "guram dochanashvili",
    review: {
      book: "a man who loved literature very much",
      text: "- Who and Betancourt, isn't Aureliano the fat... - and he put his hand on his forehead, - Uh, how did I not realize until now - you look a lot like Aureliano the fat, before he got fat, - and he was surprised: - boy, boy, what does he look like? !\n- Who is fat, what is fat... - I was worried.",
    },
  },

  {
    id: 9,
    image: "https://geojs.one/root/img/writers/9.jpg",
    fullName: "eric frank russell",
    review: {
      book: "and then there were none",
      text: "- very good. We found ourselves in a crazy situation and we have to find a crazy solution. The fate of the empire depends on your ability and readiness. Did you hear me?\n- Yes, sir, - answered Harrison, who could not hear anything.",
    },
  },
];

let line = document.querySelector(".line");
let avatar = document.querySelector(".avatar");
let novel = document.querySelector(".novel");
let author = document.querySelector(".author");
let review = document.querySelector(".review");
let previous = document.getElementById("previous");
let next = document.getElementById("next");
let counter = 0;
let manualSetInterval;
//||||||||||||||||||||||||||||||||||||||||||||||||||
//||||||||||||||| Main Function (manual) |||||||||||
//||||||||||||||||||||||||||||||||||||||||||||||||||
function manualCardSwitcher(direction) {
  //Force browser to trigger reflow while changing CSS
  line.style.animation = "none";
  line.offsetHeight; /* trigger reflow */
  line.style.animation = null;
  //-----------------------------------------------------
  clearInterval(initialSetInterval); //drops onload autoCardSwitcher()
  clearInterval(manualSetInterval); //drops click autoCardSwitcher()
  //PARAMETER ACTION
  if (direction == "next") {
    counter++;
  } else {
    counter--;
  }
  resetCounter(); //controls min and max counter
  htmlize(); //writes HTML according to counter
  //Restarts autoCardSwitcher and keyframe animation on click

  manualSetInterval = setInterval(autoCardSwitcher, 3000);

  line.style.animation = "fill 3s linear infinite";
}

previous.addEventListener("click", function () {
  manualCardSwitcher("previous");
});

next.addEventListener("click", function () {
  manualCardSwitcher("next");
});

//||||||||||||||||||||||||||||||||||||||||||||||||||
//||||||||||||||| Main Function (automated) |||||||||||
//||||||||||||||||||||||||||||||||||||||||||||||||||
function autoCardSwitcher() {
  counter++;
  resetCounter();
  htmlize();
}

let initialSetInterval = setInterval(autoCardSwitcher, 3000);
//||||||||||||||||||||||||||||||||||||||||||||
function resetCounter() {
  if (counter > data.length - 1) {
    counter = 0;
  }
  if (counter < 0) {
    counter = data.length - 1;
  }
}
//||||||||||||||||||||||||||||||||||||||||||||
function htmlize() {
  author.textContent = data[counter].fullName;
  novel.textContent = data[counter].review.book;
  review.textContent = data[counter].review.text;
  avatar.innerHTML = "<img src='" + data[counter].image + "'alt='img' />";
}
//||||||||||||||||||||||||||||||||||||||||||||||
