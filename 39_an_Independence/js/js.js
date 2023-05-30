//   ,@▒▒╜  ╣▒║╖     ▄▓█████  ▐██████▄ ▐██▌  ██▓       ▄█████▌  ███████
// ╓╣▒▒╜ @╝╣╖`╢▒▒╗   ███      ▐██▌ ███  █▓█▄███▀      ▐██▌      ███▌
// ╢▒▒╖  ╢╗@╝  ╢▒▒╝  ███  ███ ▐███████  ▄▓█▓▓█▄       ▐██▌ ▐██▌ ██████
//  ╙╢▒╢╖ ║╜,╢▒▒╝    ███▄▄███ ▐██▌     ▐██▌ ▐███  ███ ▐███▄███▌ ███▄▄▄▄
//    `╢▒╜  ╣▒╜       ▀▀▀▀▀▀▀  ▀▀      ▀▀▀   ▀▀▀  ▀▀▀   ▀▀▀▀▀▀  ▀▀▀▀▀▀▀
"use strict";
const heading1 = document.querySelector("h1");
const heading2 = document.querySelector("h2");

//|||||||||||| Time Constants |||||||||||||||
const DAY = 1000 * 60 * 60 * 24;
const HOUR = 1000 * 60 * 60;
const MINUTE = 1000 * 60;
const SECOND = 1000;
//|||||||||||| Mian Function ||||||||||||||||||||||
function calculate() {
  const curDate = new Date(); // Current Date
  //generates 09.04.** 12:30
  const thenDateNow = new Date(curDate.getFullYear(), 3, 9, 12, 30);

  //Checks if 09 of April of current year is to come or has passed, thus getting last 09 of April
  let thenLastDate = thenDateNow - curDate >= 0 ? new Date(curDate.getFullYear() - 1, 3, 9, 12, 30) : new Date(curDate.getFullYear(), 3, 9, 12, 30);
  //time difference in secconds between Current date and last 9 of April
  let periodSeconds = curDate - thenLastDate;
  //  Days, Hours, minutes and seconds are extracted from time difference in secconds.
  let daysPassed = Math.trunc(periodSeconds / DAY);
  let hoursPassed = Math.trunc((periodSeconds - DAY * daysPassed) / HOUR);
  let minutesPassed = Math.trunc((periodSeconds - (DAY * daysPassed + HOUR * hoursPassed)) / MINUTE);
  let secondsPassed = Math.trunc((periodSeconds - (DAY * daysPassed + HOUR * hoursPassed + MINUTE * minutesPassed)) / SECOND);
  let yearsPassed = thenDateNow - curDate >= 0 ? curDate.getFullYear() - 1992 : curDate.getFullYear() - 1991;
  // Now Passed time elements are sent to HTML
  heading1.innerHTML = yearsPassed + " Year " + daysPassed + " Day";
  heading2.innerHTML = nullify(hoursPassed) + ":" + nullify(minutesPassed) + ":" + nullify(secondsPassed);

  //Consol log of text sent to HTML
  console.log(yearsPassed + " Year " + daysPassed + " Day " + nullify(hoursPassed) + ":" + nullify(minutesPassed) + ":" + nullify(secondsPassed));
}
//|||||||||||||||Calls function and repeats it ||||||||||||||||||||||||
calculate();
setInterval(calculate, 1000);
//||||||||| adds 0 to single number of time element |||||||||||||||||||
function nullify(time) {
  return time < 10 ? `0${time}` : time;
}
//||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
