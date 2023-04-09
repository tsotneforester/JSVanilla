//      ,    ,
//   ,@▒▒╜  ╣▒║╖     ▄▓█████  ▐██████▄ ▐██▌  ██▓       ▄█████▌  ███████`
// ╓╣▒▒╜ @╝╣╖`╢▒▒╗   ███"---  ▐██▌-███` █▓█▄███▀      ▐██▌---   ███▌,,
// ╢▒▒╖  ╢╗@╝  ╢▒▒╝  ███  ███ ▐███████  ▄▓█▓▓█▄       ▐██▌ ▐██▌ ██████
//  ╙╢▒╢╖ ║╜,╢▒▒╝    ███▄▄███ ▐██▌--`  ▐██▌ ▐███ ▓███ ▐███▄███▌ ███▄▄▄▄
//    `╢▒╜  ╣▒╜       ▀▀▀▀▀▀▀ '▀▀`     '▀▀`  ▀▀▀ ╙▀▀▀   ▀▀▀▀▀▀  ▀▀▀▀▀▀▀
"use strict";

let counters = document.querySelectorAll(".counter");
let flag = document.querySelector(".flag");
let country = document.querySelector("h1");
let capital = document.querySelector(".capital h3");
let region = document.querySelector(".region h3");

async function countrify(name) {
  let req = await axios.get(`https://restcountries.com/v3.1/name/${name}?fullText=true`);
  let data = req.data[0];
  //--Fill tags with data-----------------
  country.innerHTML = data.name.common;
  capital.innerHTML = data.capital[0];
  region.innerHTML = data.region;
  counters[0].setAttribute("data-target", `area:${data.area}`);
  counters[1].setAttribute("data-target", `population:${data.population}`);
  counters[2].setAttribute("data-target", `lat:${data.latlng[0]}`);
  counters[3].setAttribute("data-target", `lng:${data.latlng[1]}`);
  counters[4].setAttribute("data-target", `neighbour:${data.borders.length}`);
  flag.innerHTML = `<img src="${data.flags.png}" alt="flag" />`;
  //------------------------------
  for (let i = 0; i < counters.length; i++) {
    let counter = 0;
    let target = counters[i].dataset.target.split(":");
    let digit = Number(target[1]);
    let digitTitle = target[0];
    let absDigit = Math.abs(digit);

    function Incremention() {
      counter += absDigit / 100;
      if (counter < absDigit) {
        setTimeout(Incremention, 10);
      }

      if (digitTitle == "area") {
        if (digit > 1000000) {
          counters[i].innerHTML = `${(counter / 1000000).toFixed(2)} M`;
        } else {
          counters[i].innerHTML = counter.toFixed();
        }
      } else if (digitTitle == "population") {
        if (digit > 1000000) {
          counters[i].innerHTML = `${(counter / 1000000).toFixed(3)} M`;
        } else {
          counters[i].innerHTML = counter.toFixed();
        }
      } else if (digitTitle == "lat") {
        if (digit < 0) {
          counters[i].innerHTML = `${counter.toFixed(1)}S`;
        } else {
          counters[i].innerHTML = `${counter.toFixed(1)}N`;
        }
      } else if (digitTitle == "lng") {
        if (digit < 0) {
          counters[i].innerHTML = `${counter.toFixed(1)}W`;
        } else {
          counters[i].innerHTML = `${counter.toFixed(1)}E`;
        }
      } else if (digitTitle == "neighbour") {
        counters[i].innerHTML = counter.toFixed();
      }
    }
    Incremention();
  }
}
countrify("germany");
