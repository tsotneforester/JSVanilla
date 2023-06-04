//   ,@▒▒╜  ╣▒║╖     ▄▓█████  ▐██████▄ ▐██▌  ██▓       ▄█████▌  ███████
// ╓╣▒▒╜ @╝╣╖`╢▒▒╗   ███      ▐██▌ ███  █▓█▄███▀      ▐██▌      ███▌
// ╢▒▒╖  ╢╗@╝  ╢▒▒╝  ███  ███ ▐███████  ▄▓█▓▓█▄       ▐██▌ ▐██▌ ██████
//  ╙╢▒╢╖ ║╜,╢▒▒╝    ███▄▄███ ▐██▌     ▐██▌ ▐███  ███ ▐███▄███▌ ███▄▄▄▄
//    `╢▒╜  ╣▒╜       ▀▀▀▀▀▀▀  ▀▀      ▀▀▀   ▀▀▀  ▀▀▀   ▀▀▀▀▀▀  ▀▀▀▀▀▀▀
"use strict";

let results = document.querySelectorAll("span"); //Incrementing ones
let flag = document.querySelector(".flag");
let country_title = document.querySelector("h1");
let capital_title = document.querySelector(".capital h3");
let region_title = document.querySelector(".region h3");
//|||||||||| API data fetch and main function |||||||||||||||||||||||||
async function countrify(country) {
  let req = await axios.get(`https://restcountries.com/v3.1/name/${country}?fullText=true`);
  let data = req.data[0]; // data from API
  //----------Fill tags with non-incrementing data----------
  country_title.innerHTML = data.name.common;
  capital_title.innerHTML = data.capital[0];
  region_title.innerHTML = data.region;
  flag.innerHTML = `<img src="${data.flags.png}" alt="flag" />`;
  //----------  Create data for Incrementing data -----------
  let dataTemp = {};
  dataTemp.area = data.area;
  dataTemp.population = data.population;
  dataTemp.lat = data.latlng[0];
  dataTemp.lng = data.latlng[1];
  dataTemp.border = data.borders.length;

  let myArray = Object.entries(dataTemp); //[['area', 69700], ......]
  //--------------------------------------------------------

  //---- Loop to format and animate incrementing digit
  for (let i in myArray) {
    let counter = 0;
    let digit = Math.abs(myArray[i][1]);
    let digitLabel = myArray[i][0];

    function Incremention() {
      counter += digit / 100;
      if (counter < digit) {
        setTimeout(Incremention, 10);
      }

      if (digitLabel == "area" || digitLabel == "population") {
        results[i].innerHTML = formatify(counter); //1. Format number
      } else if (digitLabel == "lat") {
        results[i].innerHTML = latitude(counter); //2. Format Latitude
      } else if (digitLabel == "lng") {
        results[i].innerHTML = longitude(counter); //3. Format Longitude
      } else if (digitLabel == "border") {
        results[i].innerHTML = counter.toFixed();
      }
    }
    Incremention();
  }
}
//|||||||||||||||||||   1   |||||||||||||||||||
function formatify(number) {
  if (number > 1000000) {
    return `${(number / 1000000).toFixed(2)} M`;
  } else {
    return number.toFixed();
  }
}
//|||||||||||||||||||   2   |||||||||||||||||||
function latitude(number) {
  if (number < 0) {
    return `${number.toFixed(1)}S`;
  } else {
    return `${number.toFixed(1)}N`;
  }
}
//|||||||||||||||||||   3   |||||||||||||||||||
function longitude(number) {
  if (number < 0) {
    return `${number.toFixed(1)}W`;
  } else {
    return `${number.toFixed(1)}E`;
  }
}
//|||||Invoke Fountciot for guven country||||||
countrify("georgia");
