//      ,    ,
//   ,@▒▒╜  ╣▒║╖     ▄▓█████  ▐██████▄ ▐██▌  ██▓       ▄█████▌  ███████`
// ╓╣▒▒╜ @╝╣╖`╢▒▒╗   ███"---  ▐██▌-███` █▓█▄███▀      ▐██▌---   ███▌,,
// ╢▒▒╖  ╢╗@╝  ╢▒▒╝  ███  ███ ▐███████  ▄▓█▓▓█▄       ▐██▌ ▐██▌ ██████
//  ╙╢▒╢╖ ║╜,╢▒▒╝    ███▄▄███ ▐██▌--`  ▐██▌ ▐███ ▓███ ▐███▄███▌ ███▄▄▄▄
//    `╢▒╜  ╣▒╜       ▀▀▀▀▀▀▀ '▀▀`     '▀▀`  ▀▀▀ ╙▀▀▀   ▀▀▀▀▀▀  ▀▀▀▀▀▀▀
"use strict";
/* spell-checker: disable */
const heading1 = document.querySelector("h1");
const heading2 = document.querySelector("h2");

const DAY = 1000 * 60 * 60 * 24;
const HOUR = 1000 * 60 * 60;
const MINUTE = 1000 * 60;
const SECOND = 1000;

function myfunction() {
  const curDate = new Date();
  const thenDateNow = new Date(curDate.getFullYear(), 3, 9, 12, 30);

  let thenLastDate = thenDateNow - curDate >= 0 ? new Date(curDate.getFullYear() - 1, 3, 9, 12, 30) : new Date(curDate.getFullYear(), 3, 9, 12, 30);

  let periodSeconds = curDate - thenLastDate;
  let dayLeft = Math.trunc(periodSeconds / DAY);
  console.log(dayLeft);
  let hourLeft = Math.trunc((periodSeconds - DAY * dayLeft) / HOUR);
  let minuteLeft = Math.trunc((periodSeconds - (DAY * dayLeft + HOUR * hourLeft)) / MINUTE);
  let secondLeft = Math.trunc((periodSeconds - (DAY * dayLeft + HOUR * hourLeft + MINUTE * minuteLeft)) / SECOND);

  let periodSecondsYear = thenDateNow - curDate >= 0 ? curDate.getFullYear() - 1992 : curDate.getFullYear() - 1991;

  heading1.innerHTML = periodSecondsYear + " Year " + dayLeft + " Day";
  heading2.innerHTML = nullify(hourLeft) + ":" + nullify(minuteLeft) + ":" + nullify(secondLeft);
  setTimeout(myfunction, 1000);
  //---------------Console Log--------------------
  console.log(periodSecondsYear + " Year " + dayLeft + " Day " + nullify(hourLeft) + ":" + nullify(minuteLeft) + ":" + nullify(secondLeft));
}

myfunction();

function nullify(time) {
  return time < 10 ? `0${time}` : time;
}
