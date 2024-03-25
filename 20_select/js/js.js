//   ,@▒▒╜  ╣▒║╖     ▄▓█████  ▐██████▄ ▐██▌  ██▓       ▄█████▌  ███████
// ╓╣▒▒╜ @╝╣╖`╢▒▒╗   ███      ▐██▌ ███  █▓█▄███▀      ▐██▌      ███▌
// ╢▒▒╖  ╢╗@╝  ╢▒▒╝  ███  ███ ▐███████  ▄▓█▓▓█▄       ▐██▌ ▐██▌ ██████
//  ╙╢▒╢╖ ║╜,╢▒▒╝    ███▄▄███ ▐██▌     ▐██▌ ▐███  ███ ▐███▄███▌ ███▄▄▄▄
//    `╢▒╜  ╣▒╜       ▀▀▀▀▀▀▀  ▀▀      ▀▀▀   ▀▀▀  ▀▀▀   ▀▀▀▀▀▀  ▀▀▀▀▀▀▀
"use strict";

const URL = "https://restcountries.com/v3.1/all";
const search_box = document.querySelector(".search-box");
const active_country = document.querySelector(".active-country");
const countries_list = document.querySelector(".countries-list");
const loading_spinner = document.querySelector(".loading-spinner");
const input = document.querySelector("input");
const arrow = document.querySelector("img");
let data = [];

(async function () {
  try {
    let req = await axios.get(URL);
    data = req["data"].map((entry) => {
      return entry.name.common.toLowerCase();
    });
  } catch (error) {
    if (error.response) {
      console.log("server responded with " + error.response.status);
    } else if (!error.response) {
      console.log("server does not responded - " + error);
    }
  } finally {
    loading_spinner.style.display = "none";
    input.classList.toggle("hidden");
    countries_list.classList.toggle("hidden");
    makeList(data); // 2
  }
})();

//------ Expand / collapse search-box with arrow Click ----------

arrow.addEventListener("click", function () {
  toggleSearchBox(); // 1

  if (search_box.classList.contains("visible")) {
    makeList(data); // 2
  }
});

//------ search input in country list ----------
input.addEventListener("input", function () {
  let newNumbers = data.filter((e) => {
    return e.includes(input.value.toLowerCase());
  });

  if (newNumbers.length > 0) {
    countries_list.innerHTML = "";
    makeList(newNumbers); // 2
  } else {
    countries_list.innerHTML = "";
    countries_list.insertAdjacentHTML("beforeend", "Not Found 😥");
  }
});

//|||||||||||||||||   1  |||||||||||||||||||||||
function toggleSearchBox() {
  search_box.classList.toggle("visible");
  arrow.classList.toggle("rotate");
}

//|||||||||||||||||   2  |||||||||||||||||||||||
function makeList(array) {
  countries_list.innerHTML = "";
  input.innerHTML = "";
  for (let i = 0, n = array.length; i < n; i++) {
    let text = `<li onClick="chooseCountry(this)">${array[i]}</li>`; // 3
    countries_list.insertAdjacentHTML("beforeend", text);
  }
}
//|||||||||||||||||   3  |||||||||||||||||||||||
function chooseCountry(e) {
  countries_list.innerHTML = "";
  input.value = "";
  active_country.innerHTML = e.innerHTML;
  toggleSearchBox();
}
