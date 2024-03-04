//   ,@▒▒╜  ╣▒║╖     ▄▓█████  ▐██████▄ ▐██▌  ██▓       ▄█████▌  ███████
// ╓╣▒▒╜ @╝╣╖`╢▒▒╗   ███      ▐██▌ ███  █▓█▄███▀      ▐██▌      ███▌
// ╢▒▒╖  ╢╗@╝  ╢▒▒╝  ███  ███ ▐███████  ▄▓█▓▓█▄       ▐██▌ ▐██▌ ██████
//  ╙╢▒╢╖ ║╜,╢▒▒╝    ███▄▄███ ▐██▌     ▐██▌ ▐███  ███ ▐███▄███▌ ███▄▄▄▄
//    `╢▒╜  ╣▒╜       ▀▀▀▀▀▀▀  ▀▀      ▀▀▀   ▀▀▀  ▀▀▀   ▀▀▀▀▀▀  ▀▀▀▀▀▀▀

"use strict";
const quizData = [
  {
    question: "Which language runs in a web browser?",
    a: "Java",
    b: "C",
    c: "Python",
    d: "JavaScript",
    correct: "d",
  },
  {
    question: "What does CSS stand for?",
    a: "Central Style Sheets",
    b: "Cascading Style Sheets",
    c: "Cascading Simple Sheets",
    d: "Cars SUVs Sailboats",
    correct: "b",
  },
  {
    question: "What does HTML stand for?",
    a: "Hypertext Markup Language",
    b: "Hypertext Markdown Language",
    c: "Hyperloop Machine Language",
    d: "Helicopters Terminals Motorboats Lamborginis",
    correct: "a",
  },
  {
    question: "What year was JavaScript launched?",
    a: "1996",
    b: "1995",
    c: "1994",
    d: "none of the above",
    correct: "b",
  },
];

const numOfQuestions = quizData.length;
const card = document.querySelector(".card");
const sumbitButton = document.querySelector(".submit");
const question = document.querySelector("h1");
const answerA = document.querySelectorAll("label")[0];
const answerB = document.querySelectorAll("label")[1];
const answerC = document.querySelectorAll("label")[2];
const answerD = document.querySelectorAll("label")[3];
let input = document.querySelectorAll("input");
let inputLength = document.querySelectorAll("input").length;
let questionCounter = 0;
let correctCounter = 0;

//||||||||||||||||||||||||||||||||||||||||||||||||||
//||||||||||||||| Main Listener  |||||||||||
//||||||||||||||||||||||||||||||||||||||||||||||||||

sumbitButton.addEventListener("click", function () {
  for (let i = 0; i < inputLength; i++) {
    if (input[i].checked) {
      if (input[i].id == quizData[questionCounter].correct) {
        correctCounter++;
      } // checks correct answer

      // Sets Question counter and triggers Result on last question
      questionCounter++;
      if (questionCounter == numOfQuestions) {
        results();
        questionCounter = 0;
      }

      render(questionCounter);
      resetRadio();
    }
  }
});

//||||||||||||||||||||||||| 1 ||||||||||||||||||||||||
function render(i) {
  question.innerText = quizData[i].question;
  answerA.innerText = quizData[i].a;
  answerB.innerText = quizData[i].b;
  answerC.innerText = quizData[i].c;
  answerD.innerText = quizData[i].d;
}
//||||||||||||||||||||||||| 2 ||||||||||||||||||||||||
function resetRadio() {
  for (let i = 0; i < inputLength; i++) {
    input[i].checked = false;
  }
}

//||||||||||||||||||||||||| 3 ||||||||||||||||||||||||
function results() {
  card.innerHTML = `<h1>You answered ${correctCounter}/${numOfQuestions} questions correctly </h1><button class="submit" onclick="location.reload()">Reload</button>`;
}
