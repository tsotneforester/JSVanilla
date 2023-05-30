//   ,@▒▒╜  ╣▒║╖     ▄▓█████  ▐██████▄ ▐██▌  ██▓       ▄█████▌  ███████
// ╓╣▒▒╜ @╝╣╖`╢▒▒╗   ███      ▐██▌ ███  █▓█▄███▀      ▐██▌      ███▌
// ╢▒▒╖  ╢╗@╝  ╢▒▒╝  ███  ███ ▐███████  ▄▓█▓▓█▄       ▐██▌ ▐██▌ ██████
//  ╙╢▒╢╖ ║╜,╢▒▒╝    ███▄▄███ ▐██▌     ▐██▌ ▐███  ███ ▐███▄███▌ ███▄▄▄▄
//    `╢▒╜  ╣▒╜       ▀▀▀▀▀▀▀  ▀▀      ▀▀▀   ▀▀▀  ▀▀▀   ▀▀▀▀▀▀  ▀▀▀▀▀▀▀
"use strict";

const input = document.forms[0][0];

document.forms[0].addEventListener("submit", function (e) {
  e.preventDefault();
  fetchApi(input.value);
});

async function fetchApi(name) {
  try {
    let step1 = await fetch(`https://api.github.com/users/${name}`);
    if (step1.status == "404") {
      input.value = "";
      //throw new Error("no such user");
      createError("No profile with this username");
      throw "No profile with this username";
    } else {
      let step2 = await step1.json();
      createCard(step2);
      input.value = "";
    }
  } catch (e) {
    console.log(e);
  }
}

function createCard(data) {
  let node = `<div class="card">
      <section class="image">
        <div class="frame"><img src="${data.avatar_url}" alt="avatar" /></div>
      </section>
      <section class="person">
        <h1>${data.login}</h1>
      </section>
      <h3>${data.location}</h3>
      <section class="statistics">
        <div>
          <h4>${data.followers}</h4>
          <h5>Followers</h5>
        </div>
        <div>
          <h4>${data.public_repos}</h4>
          <h5>Repos</h5>
        </div>
        <div>
          <h4>${data.following}</h4>
          <h5>Following</h5>
        </div>
      </section>
    </div>`;
  document.querySelector("main").innerHTML = node;
}

function createError(text) {
  let node = `<div class="card">
      <section class="image">
        <div class="frame"><img src="images/nouser.png" alt="avatar" /></div>
      </section>
      <section class="person">
        <h1>${text}</h1>
      </section>
      <section class="statistics">
        <div>
          <h4>--</h4>
          <h5>Followers</h5>
        </div>
        <div>
          <h4>--</h4>
          <h5>Likes</h5>
        </div>
        <div>
          <h4>--</h4>
          <h5>Following</h5>
        </div>
      </section>
    </div>`;
  document.querySelector("main").innerHTML = node;
}
