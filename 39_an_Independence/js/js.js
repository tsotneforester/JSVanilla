//      ,    ,
//   ,@▒▒╜  ╣▒║╖     ▄▓█████  ▐██████▄ ▐██▌  ██▓       ▄█████▌  ███████`
// ╓╣▒▒╜ @╝╣╖`╢▒▒╗   ███"---  ▐██▌-███` █▓█▄███▀      ▐██▌---   ███▌,,
// ╢▒▒╖  ╢╗@╝  ╢▒▒╝  ███  ███ ▐███████  ▄▓█▓▓█▄       ▐██▌ ▐██▌ ██████
//  ╙╢▒╢╖ ║╜,╢▒▒╝    ███▄▄███ ▐██▌--`  ▐██▌ ▐███ ▓███ ▐███▄███▌ ███▄▄▄▄
//    `╢▒╜  ╣▒╜       ▀▀▀▀▀▀▀ '▀▀`     '▀▀`  ▀▀▀ ╙▀▀▀   ▀▀▀▀▀▀  ▀▀▀▀▀▀▀
"use strict";

const heading1 = document.querySelector("h1");
const heading2 = document.querySelector("h2");

const oneMonth = 1000 * 60 * 60 * 24;
const oneDay = 1000 * 60 * 60 * 24;
const oneHour = 1000 * 60 * 60;
const oneMinute = 1000 * 60;
const oneSecond = 1000;

function myfunction() {
  const curDate = new Date();
  const thenDateNow = new Date(curDate.getFullYear(), 3, 9, 12, 30);

  let thenLastDate = thenDateNow - curDate >= 0 ? new Date(curDate.getFullYear() - 1, 3, 9, 12, 30) : new Date(curDate.getFullYear(), 3, 9, 12, 30);

  let periodSeconds = curDate - thenLastDate;
  let dayLeft = Math.trunc(periodSeconds / oneDay);
  let hourLeft = Math.trunc((periodSeconds - oneDay * dayLeft) / oneHour);
  let minuteLeft = Math.trunc((periodSeconds - (oneDay * dayLeft + oneHour * hourLeft)) / oneMinute);
  let secondLeft = Math.trunc((periodSeconds - (oneDay * dayLeft + oneHour * hourLeft + oneMinute * minuteLeft)) / oneSecond);

  let periodSecondsYear = thenDateNow - curDate >= 0 ? curDate.getFullYear() - 1992 : curDate.getFullYear() - 1991;

  heading1.innerHTML = periodSecondsYear + " Year " + dayLeft + " Day";
  heading2.innerHTML = nullify(hourLeft) + ":" + nullify(minuteLeft) + ":" + nullify(secondLeft);
  setTimeout(myfunction, 1000);
  console.log(periodSecondsYear + " Year " + dayLeft + " Day " + nullify(hourLeft) + ":" + nullify(minuteLeft) + ":" + nullify(secondLeft));
}

myfunction();

function nullify(time) {
  return time < 10 ? `0${time}` : time;
}
