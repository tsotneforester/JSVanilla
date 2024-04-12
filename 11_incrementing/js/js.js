//   ,@▒▒╜  ╣▒║╖     ▄▓█████  ▐██████▄ ▐██▌  ██▓       ▄█████▌  ███████
// ╓╣▒▒╜ @╝╣╖`╢▒▒╗   ███      ▐██▌ ███  █▓█▄███▀      ▐██▌      ███▌
// ╢▒▒╖  ╢╗@╝  ╢▒▒╝  ███  ███ ▐███████  ▄▓█▓▓█▄       ▐██▌ ▐██▌ ██████
//  ╙╢▒╢╖ ║╜,╢▒▒╝    ███▄▄███ ▐██▌     ▐██▌ ▐███  ███ ▐███▄███▌ ███▄▄▄▄
//    `╢▒╜  ╣▒╜       ▀▀▀▀▀▀▀  ▀▀      ▀▀▀   ▀▀▀  ▀▀▀   ▀▀▀▀▀▀  ▀▀▀▀▀▀▀
"use strict";

let results = document.querySelectorAll(".horizontal h3"); //Incrementing ones
let flag = document.querySelector("#flag");
let country_title = document.querySelector("input");
let form = document.querySelector("form");
let capital_title = document.querySelector("#capital h3");
let region_title = document.querySelector("#region h3");

countrify("Georgia");
document.querySelector("input").focus();

form.addEventListener("submit", function (e) {
  e.preventDefault();
  let input = country_title.value.toLowerCase();
  countrify(input[0].toUpperCase() + input.slice(1, input.length));
});

//|||||||||| API data fetch and main function |||||||||||||||||||||||||
async function countrify(country) {
  try {
    let req = await axios.get(`https://restcountries.com/v3.1/name/${country}?fullText=true`);
    //----------- check data for proper blank data handling_______
    // let req = await axios.get(`https://restcountries.com/v3.1/all`);
    // console.log(
    //   req.data.filter((e) => {
    //     return e.name.common == "Malta";
    //   })
    // );
    let data = req.data[0]; // data from API

    //----------Fill tags with non-incrementing data----------
    capital_title.innerHTML = data.capital?.[0] || "?";
    region_title.innerHTML = data.region;
    flag.setAttribute("src", data.flags.png);
    //----------  Create data for Incrementing data -----------
    let dataTemp = {};
    dataTemp.area = data.area;
    dataTemp.population = data.population;
    dataTemp.lat = data.latlng[0];
    dataTemp.lng = data.latlng[1];

    dataTemp.border = data.borders?.length || "?";
    let myArray = Object.entries(dataTemp); //[['area', 69700], ......]

    //---- Loop to format and animate incrementing digit
    for (let key in dataTemp) {
      let counter = 0;
      let digit = Math.abs(dataTemp[key]);

      function Incremention() {
        counter += digit / 100;
        if (counter < digit) {
          setTimeout(Incremention, 10);
        }

        if (key == "area") {
          results[0].innerHTML = formatify(counter); //1. Format number
        } else if (key == "population") {
          results[1].innerHTML = formatify(counter); //2. Format population
        } else if (key == "lat") {
          results[2].innerHTML = latitude(counter); //3. Format Latitude
        } else if (key == "lng") {
          results[3].innerHTML = longitude(counter); //4. Format Longitude
        } else if (key == "border" && dataTemp[key] == "?") {
          results[4].innerHTML = "?"; //5. Format Border
        } else if (key == "border") {
          results[4].innerHTML = counter.toFixed();
        }
      }
      Incremention();
    }
  } catch (error) {
    if (error.response) {
      alert("Wrong URL or No such Country");
    } else {
      alert(error.message);
    }
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
