//   ,@▒▒╜  ╣▒║╖     ▄▓█████  ▐██████▄ ▐██▌  ██▓       ▄█████▌  ███████
// ╓╣▒▒╜ @╝╣╖`╢▒▒╗   ███      ▐██▌ ███  █▓█▄███▀      ▐██▌      ███▌
// ╢▒▒╖  ╢╗@╝  ╢▒▒╝  ███  ███ ▐███████  ▄▓█▓▓█▄       ▐██▌ ▐██▌ ██████
//  ╙╢▒╢╖ ║╜,╢▒▒╝    ███▄▄███ ▐██▌     ▐██▌ ▐███  ███ ▐███▄███▌ ███▄▄▄▄
//    `╢▒╜  ╣▒╜       ▀▀▀▀▀▀▀  ▀▀      ▀▀▀   ▀▀▀  ▀▀▀   ▀▀▀▀▀▀  ▀▀▀▀▀▀▀
"use strict";
let data = [
  "afghanistan",
  "albania",
  "algeria",
  "andorra",
  "angola",
  "argentina",
  "armenia",
  "australia",
  "austria",
  "azerbaijan",
  "bahamas",
  "bahrain",
  "bangladesh",
  "barbados",
  "belarus",
  "belgium",
  "belize",
  "benin",
  "bhutan",
  "bolivia",
  "botswana",
  "brazil",
  "brunei",
  "bulgaria",
  "burkina faso",
  "burundi",
  "côte d'ivoire",
  "cabo verde",
  "cambodia",
  "cameroon",
  "canada",
  "chad",
  "chile",
  "china",
  "colombia",
  "comoros",
  "costa rica",
  "croatia",
  "cuba",
  "cyprus",
  "czechia",
  "denmark",
  "djibouti",
  "dominica",
  "ecuador",
  "egypt",
  "el salvador",
  "eritrea",
  "estonia",
  "eswatini",
  "ethiopia",
  "fiji",
  "finland",
  "france",
  "gabon",
  "gambia",
  "georgia",
  "germany",
  "ghana",
  "greece",
  "grenada",
  "guatemala",
  "guinea",
  "guinea-bissau",
  "guyana",
  "haiti",
  "holy see",
  "honduras",
  "hungary",
  "iceland",
  "india",
  "indonesia",
  "iran",
  "iraq",
  "ireland",
  "israel",
  "italy",
  "jamaica",
  "japan",
  "jordan",
  "kazakhstan",
  "kenya",
  "kiribati",
  "kuwait",
  "kyrgyzstan",
  "laos",
  "latvia",
  "lebanon",
  "lesotho",
  "liberia",
  "libya",
  "liechtenstein",
  "lithuania",
  "luxembourg",
  "madagascar",
  "malawi",
  "malaysia",
  "maldives",
  "mali",
  "malta",
  "mauritania",
  "mauritius",
  "mexico",
  "micronesia",
  "moldova",
  "monaco",
  "mongolia",
  "montenegro",
  "morocco",
  "mozambique",
  "myanmar",
  "namibia",
  "nauru",
  "nepal",
  "netherlands",
  "new zealand",
  "nicaragua",
  "niger",
  "nigeria",
  "north korea",
  "north macedonia",
  "norway",
  "oman",
  "pakistan",
  "palau",
  "panama",
  "paraguay",
  "peru",
  "philippines",
  "poland",
  "portugal",
  "qatar",
  "romania",
  "russia",
  "rwanda",
  "saint lucia",
  "samoa",
  "san marino",
  "saudi arabia",
  "senegal",
  "serbia",
  "seychelles",
  "sierra leone",
  "singapore",
  "slovakia",
  "slovenia",
  "somalia",
  "south africa",
  "south korea",
  "south sudan",
  "spain",
  "sri lanka",
  "sudan",
  "suriname",
  "sweden",
  "switzerland",
  "syria",
  "tajikistan",
  "tanzania",
  "thailand",
  "timor-leste",
  "togo",
  "tonga",
  "tunisia",
  "turkey",
  "turkmenistan",
  "tuvalu",
  "uganda",
  "ukraine",
  "uruguay",
  "uzbekistan",
  "vanuatu",
  "venezuela",
  "vietnam",
  "yemen",
  "zambia",
  "zimbabwe",
];

const search_box = document.querySelector(".search-box");
const active_country = document.querySelector(".active-country");
const countries_list = document.querySelector(".countries-list");
const input = document.querySelector("input");
const arrow = document.querySelector("img");

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
    makeList(newNumbers);
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
