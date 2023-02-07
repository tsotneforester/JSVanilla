//      ,    ,
//   ,@▒▒╜  ╣▒║╖     ▄▓█████  ▐██████▄ ▐██▌  ██▓       ▄█████▌  ███████`
// ╓╣▒▒╜ @╝╣╖`╢▒▒╗   ███"---  ▐██▌-███` █▓█▄███▀      ▐██▌---   ███▌,,
// ╢▒▒╖  ╢╗@╝  ╢▒▒╝  ███  ███ ▐███████  ▄▓█▓▓█▄       ▐██▌ ▐██▌ ██████
//  ╙╢▒╢╖ ║╜,╢▒▒╝    ███▄▄███ ▐██▌--`  ▐██▌ ▐███ ▓███ ▐███▄███▌ ███▄▄▄▄
//    `╢▒╜  ╣▒╜       ▀▀▀▀▀▀▀ '▀▀`     '▀▀`  ▀▀▀ ╙▀▀▀   ▀▀▀▀▀▀  ▀▀▀▀▀▀▀

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

("use strict");
let country = document.querySelector(".country");
let option = document.querySelector("ul");
let input = document.querySelector("input");
let content = document.querySelector(".content");
let arrow = document.querySelector(".arrow");

function toggle() {
  content.classList.toggle("toggle");
  arrow.classList.toggle("rotate");
}

function makeList(array) {
  option.innerHTML = "";
  input.innerHTML = "";
  for (let i = 0; i < array.length; i++) {
    let text = `<li onClick="zorg(this)">${array[i]}</li>`;
    option.insertAdjacentHTML("beforeend", text);
  }
}

arrow.addEventListener("click", function () {
  console.log(content.classList.contains("toggle"));
  if (!content.classList.contains("toggle")) {
    makeList(data);
    input.value = "";
  }
  toggle();
});

function zorg(e) {
  input.value = "";
  country.innerHTML = e.innerHTML;
  toggle();
}

input.addEventListener("input", function () {
  let newNumbers = data.filter((e) => {
    return e.includes(input.value.toLowerCase());
  });

  if (newNumbers.length > 0) {
    option.innerHTML = "";
    makeList(newNumbers);
  } else {
    option.innerHTML = "";
    option.insertAdjacentHTML("beforeend", "ooops");
  }
});
