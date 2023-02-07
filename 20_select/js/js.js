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

arrow.addEventListener("click", function () {
  content.classList.toggle("toggle");
  arrow.classList.toggle("rotate");
});

for (let i = 0; i < data.length; i++) {
  let text = `<li>${data[i]}</li>`;
  option.insertAdjacentHTML("beforeend", text);
}

let options = document.querySelectorAll(".options li");
for (let i = 0; i < options.length; i++) {
  options[i].addEventListener("click", function () {
    country.innerHTML = options[i].innerHTML;
    content.classList.toggle("toggle");
    arrow.classList.toggle("rotate");
    console.log("object");
  });
}

input.addEventListener("input", function () {
  let newNumbers = data.filter((e) => {
    return e.includes(input.value.toLowerCase());
  });

  if (newNumbers.length > 0) {
    option.innerHTML = "";
    for (let i = 0; i < newNumbers.length; i++) {
      let text = `<li>${newNumbers[i]}</li>`;
      option.insertAdjacentHTML("beforeend", text);
    }
  } else {
    option.innerHTML = "";
    option.insertAdjacentHTML("beforeend", "ooops");
  }
  let options1 = document.querySelectorAll(".options li");
  for (let i = 0; i < options1.length; i++) {
    options1[i].addEventListener("click", function () {
      country.innerHTML = options1[i].innerHTML;
      content.classList.toggle("toggle");
      arrow.classList.toggle("rotate");

      //reset

      input.value = "";
      options.innerHTML = "";
      for (let i = 0; i < data.length; i++) {
        let text = `<li>${data[i]}</li>`;
        option.insertAdjacentHTML("beforeend", text);
      }
    });
  }
});
