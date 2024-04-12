//   ,@▒▒╜  ╣▒║╖     ▄▓█████  ▐██████▄ ▐██▌  ██▓       ▄█████▌  ███████
// ╓╣▒▒╜ @╝╣╖`╢▒▒╗   ███      ▐██▌ ███  █▓█▄███▀      ▐██▌      ███▌
// ╢▒▒╖  ╢╗@╝  ╢▒▒╝  ███  ███ ▐███████  ▄▓█▓▓█▄       ▐██▌ ▐██▌ ██████
//  ╙╢▒╢╖ ║╜,╢▒▒╝    ███▄▄███ ▐██▌     ▐██▌ ▐███  ███ ▐███▄███▌ ███▄▄▄▄
//    `╢▒╜  ╣▒╜       ▀▀▀▀▀▀▀  ▀▀      ▀▀▀   ▀▀▀  ▀▀▀   ▀▀▀▀▀▀  ▀▀▀▀▀▀▀
"use strict";
const date_stamp = document.querySelector(".date-stamp");
const time_stamp = document.querySelector(".time-stamp");
//|||||||||||| Mian Function ||||||||||||||||||||||
function calculate() {
  //generates 09.04.1991 12:30
  const thenDate = moment([1991, 3, 9, 12, 30]);

  let dateObject = moment.preciseDiff(thenDate, moment(), true);
  //{years: 32, months: 1, days: 23, hours: 13, minutes: 32, seconds: 0}
  let { years: yy, months: MM, days: dd, hours: hh, minutes: mm, seconds: ss } = dateObject;
  // Now Passed time elements are sent to HTML
  date_stamp.innerHTML = `${yy} Years ${MM} Month ${dd} Days`;
  time_stamp.innerHTML = `${nullify(hh)}:${nullify(mm)}:${nullify(ss)}`;
}
//|||||||||||||||Calls function and repeats it ||||||||||||||||
calculate();
setInterval(calculate, 1000);
//||||||||||||||adds 0 to single number digit  |||||||||||||||
function nullify(time) {
  return time < 10 ? `0${time}` : time;
}
//||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
