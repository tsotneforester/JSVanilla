//   ,@▒▒╜  ╣▒║╖     ▄▓█████  ▐██████▄ ▐██▌  ██▓       ▄█████▌  ███████
// ╓╣▒▒╜ @╝╣╖`╢▒▒╗   ███      ▐██▌ ███  █▓█▄███▀      ▐██▌      ███▌
// ╢▒▒╖  ╢╗@╝  ╢▒▒╝  ███  ███ ▐███████  ▄▓█▓▓█▄       ▐██▌ ▐██▌ ██████
//  ╙╢▒╢╖ ║╜,╢▒▒╝    ███▄▄███ ▐██▌     ▐██▌ ▐███  ███ ▐███▄███▌ ███▄▄▄▄
//    `╢▒╜  ╣▒╜       ▀▀▀▀▀▀▀  ▀▀      ▀▀▀   ▀▀▀  ▀▀▀   ▀▀▀▀▀▀  ▀▀▀▀▀▀▀
"use strict";
let playPause = document.getElementById("play-pause");
let progressLine = document.getElementById("progress-line");
let video = document.getElementById("video");
playPause.addEventListener("click", function () {
  if (video.paused) {
    video.play();
    playPause.style.backgroundImage = `url("img/pause-regular-36.png")`;
    video.addEventListener("timeupdate", function () {
      progressLine.style.width = `${(video.currentTime / video.duration) * 100}%`;
    });
  } else {
    video.pause();
    playPause.style.backgroundImage = `url("img/play-regular-36.png")`;
  }
});
