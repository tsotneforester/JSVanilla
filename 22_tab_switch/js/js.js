//   ,@▒▒╜  ╣▒║╖     ▄▓█████  ▐██████▄ ▐██▌  ██▓       ▄█████▌  ███████
// ╓╣▒▒╜ @╝╣╖`╢▒▒╗   ███      ▐██▌ ███  █▓█▄███▀      ▐██▌      ███▌
// ╢▒▒╖  ╢╗@╝  ╢▒▒╝  ███  ███ ▐███████  ▄▓█▓▓█▄       ▐██▌ ▐██▌ ██████
//  ╙╢▒╢╖ ║╜,╢▒▒╝    ███▄▄███ ▐██▌     ▐██▌ ▐███  ███ ▐███▄███▌ ███▄▄▄▄
//    `╢▒╜  ╣▒╜       ▀▀▀▀▀▀▀  ▀▀      ▀▀▀   ▀▀▀  ▀▀▀   ▀▀▀▀▀▀  ▀▀▀▀▀▀▀
"use strict";
const data = [
  {
    name: "Vazha",
    comment: "Vazha-Pshavela was born into a family of clergymen in the little village of Chargali, situated in the mountainous Pshavi province of Eastern Georgia. He graduated from the Pedagogical Seminary in Gori 1882, where he associated closely with Georgian populists (Russian term narodniki). He then entered the faculty of Law of St. Petersburg University (Russia) in 1883, as a non-credit student, but returned to Georgia in 1884 due to financial constraints.",
  },
  {
    name: "Ilia",
    comment: "Prince Ilia Chavchavadze (Georgian: ილია ჭავჭავაძე; 8 November 1837 – 12 September 1907) was a Georgian public figure, journalist, publisher, writer and poet who spearheaded the revival of Georgian nationalism during the second half of the 19th century and ensured the survival of the Georgian language, literature, and culture during the last decades of Tsarist rule. He is Georgia's 'most universally revered hero' and is regarded as the 'Father of the Nation.'",
  },
  {
    name: "Akaki",
    comment: "Count Akaki Tsereteli (Georgian: აკაკი წერეთელი) (1840–1915), often mononymously known as Akaki, was a prominent Georgian poet and national liberation movement figure. Early life and education Tsereteli was born in the village of Skhvitori, Imereti region of western Georgia on June 9, 1840, to a prominent Georgian aristocratic family. His father was Prince Rostom Tsereteli, his mother, Princess Ekaterine, a daughter of Ivane Abashidze and a great-granddaughter of King Solomon I of Imereti.",
  },
  {
    name: "Shota",
    comment: "Shota Rustaveli was born in 1166. He started serving Queen Tamar as a Minister of Finance in 1191. His poem itself, namely the prologue, provides a clue to his identity: the poet identifies himself as 'a certain Rustveli.' 'Rustveli' is not a surname, but a territorial epithet that can be interpreted as 'of/from/holder of Rustavi'. Later Georgian authors from the 15th through 18th centuries are more informative; they are almost unanimous in identifying him as Shota Rustaveli, a name that is preserved on a fresco and a document from the formerly Georgian Monastery of the Holy Cross at Jerusalem.",
  },
];

const count = data.length;

const author = document.querySelector(".author");
const comment = document.querySelector(".comment");

for (let i = 0; i < count; i++) {
  author.insertAdjacentHTML("beforeend", `<div class='tab' id=${i}>${data[i].name}</div>`);
}
comment.innerHTML = data[0].comment;

author.children[0].classList.add("clicked");

console.log(author.children);
console.log(document.querySelectorAll(".tab"));
document.querySelectorAll(".tab").forEach((e) => {
  e.addEventListener("click", function () {
    unclickAll();
    e.classList.add("clicked");
    comment.innerHTML = data[e.id].comment;
  });
});

function unclickAll() {
  for (let i = 0; i < count; i++) {
    author.children[i].classList.remove("clicked");
  }
}
