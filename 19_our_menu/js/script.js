//   ,@▒▒╜  ╣▒║╖     ▄▓█████  ▐██████▄ ▐██▌  ██▓       ▄█████▌  ███████
// ╓╣▒▒╜ @╝╣╖`╢▒▒╗   ███      ▐██▌ ███  █▓█▄███▀      ▐██▌      ███▌
// ╢▒▒╖  ╢╗@╝  ╢▒▒╝  ███  ███ ▐███████  ▄▓█▓▓█▄       ▐██▌ ▐██▌ ██████
//  ╙╢▒╢╖ ║╜,╢▒▒╝    ███▄▄███ ▐██▌     ▐██▌ ▐███  ███ ▐███▄███▌ ███▄▄▄▄
//    `╢▒╜  ╣▒╜       ▀▀▀▀▀▀▀  ▀▀      ▀▀▀   ▀▀▀  ▀▀▀   ▀▀▀▀▀▀  ▀▀▀▀▀▀▀
"use strict";

const data = [
  {
    id: 1,
    title: "buttermilk pancakes",
    category: "lunch",
    price: 15.99,
    img: "https://geojs.one/root/img/menu/item-1.jpg",
    desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed`,
  },
  {
    id: 2,
    title: "diner double",
    category: "breakfast",
    price: 13.99,
    img: "https://geojs.one/root/img/menu/item-2.jpg",
    desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing`,
  },
  {
    id: 3,
    title: "godzilla milkshake",
    category: "breakfast",
    price: 6.99,
    img: "https://geojs.one/root/img/menu/item-3.jpg",
    desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral`,
  },
  {
    id: 4,
    title: "country delight",
    category: "breakfast",
    price: 20.99,
    img: "https://geojs.one/root/img/menu/item-4.jpg",
    desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut`,
  },
  {
    id: 5,
    title: "egg attack",
    category: "breakfast",
    price: 22.99,
    img: "https://geojs.one/root/img/menu/item-5.jpg",
    desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up`,
  },
  {
    id: 6,
    title: "oreo dream",
    category: "shakes",
    price: 18.99,
    img: "https://geojs.one/root/img/menu/item-6.jpg",
    desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
  },
  {
    id: 7,
    title: "bacon overflow",
    category: "shakes",
    price: 8.99,
    img: "https://geojs.one/root/img/menu/item-7.jpg",
    desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird`,
  },
  {
    id: 8,
    title: "american classic",
    category: "shakes",
    price: 12.99,
    img: "https://geojs.one/root/img/menu/item-8.jpg",
    desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut`,
  },
  {
    id: 9,
    title: "quarantine buddy",
    category: "shakes",
    price: 16.99,
    img: "https://geojs.one/root/img/menu/item-9.jpg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing`,
  },
  {
    id: 10,
    title: "Kvass",
    category: "shakes",
    price: 5.99,
    img: "https://geojs.one/root/img/menu/item-10.jpg",
    desc: `gentleman milk tribal suck infrastructure love ideal failure live side slam helicopter similarly leather draft screen`,
  },
  {
    id: 11,
    title: "Khinkali",
    category: "lunch",
    price: 5.99,
    img: "https://geojs.one/root/img/menu/item-11.jpg",
    desc: `calendar apparently consult direction estimate steal collector work manufacturer rain civil benefit broad`,
  },
  {
    id: 12,
    title: "Cesar Salad",
    category: "lunch",
    price: 5.99,
    img: "https://geojs.one/root/img/menu/item-12.jpg",
    desc: `traffic lawn publish pound grandmother can terms clear style array collector pop clinical daily vocal mess`,
  },
  {
    id: 13,
    title: "Beer",
    category: "lunch",
    price: 13.99,
    img: "https://geojs.one/root/img/menu/item-13.jpg",
    desc: `property fact till tip hidden cake plane Bible cat display rational prior rain receive unknown conflict`,
  },
  {
    id: 14,
    title: "Mtsvadi",
    category: "breakfast",
    price: 25.99,
    img: "https://geojs.one/root/img/menu/item-14.jpg",
    desc: `attraction touch steady acknowledge favor tongue composition cluster involvement gesture skilled insect freeze`,
  },
];

const dishes = document.querySelector(".dishes");
const button = document.querySelectorAll(".btn");

//||||||||||||||||||||||||||||||||||||||||||||||
//|||||||||||   Main Function   ||||||||||||||||
//||||||||||||||||||||||||||||||||||||||||||||||

function resultFor(category) {
  dishes.innerHTML = "";
  let filtered = data.filter((e) => {
    if (category == "all") {
      return e;
    } else {
      return e.category == category;
    }
  });

  for (let i = 0, n = filtered.length; i < n; i++) {
    let node = `
      <article>
      <img src="${filtered[i].img}" alt="${filtered[i].title}" />
        <section class="heading">
          <h1>${filtered[i].title}</h1>
          <span class="price">$ ${filtered[i].price}</span>
        </section>
        <section class="desc">${filtered[i].desc}</section>
      </article>
  `;
    dishes.innerHTML += node;
  }
  // active category style switcher
  for (let i = 0, n = button.length; i < n; i++) {
    button[i].addEventListener("click", function () {
      for (let i = 0; i < n; i++) {
        button[i].classList.remove("active");
      }
      button[i].classList.add("active");
      document.title = button[i].innerHTML.toUpperCase();
    });
  }
}

resultFor("all");

button[0].addEventListener("click", function () {
  resultFor("all");
});

button[1].addEventListener("click", function () {
  resultFor("breakfast");
});

button[2].addEventListener("click", function () {
  resultFor("lunch");
});

button[3].addEventListener("click", function () {
  resultFor("shakes");
});
