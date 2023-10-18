//   ,@▒▒╜  ╣▒║╖     ▄▓█████  ▐██████▄ ▐██▌  ██▓       ▄█████▌  ███████
// ╓╣▒▒╜ @╝╣╖`╢▒▒╗   ███      ▐██▌ ███  █▓█▄███▀      ▐██▌      ███▌
// ╢▒▒╖  ╢╗@╝  ╢▒▒╝  ███  ███ ▐███████  ▄▓█▓▓█▄       ▐██▌ ▐██▌ ██████
//  ╙╢▒╢╖ ║╜,╢▒▒╝    ███▄▄███ ▐██▌     ▐██▌ ▐███  ███ ▐███▄███▌ ███▄▄▄▄
//    `╢▒╜  ╣▒╜       ▀▀▀▀▀▀▀  ▀▀      ▀▀▀   ▀▀▀  ▀▀▀   ▀▀▀▀▀▀  ▀▀▀▀▀▀▀
"use strict";
//||||||||||||| SELECTS & constants||||||||||||||
const submit = document.querySelector("button");
const main = document.querySelector("main");
const input = document.getElementsByTagName("input")[0];
let genresData = [];
let filter = ["poster_path", "original_language", "release_date", "vote_average"];
//||||||||||||||||| API SETUP ||||||||||||||||||
const KEY = "ca13458cc8f7d31e877d4c3e5247aac9";
const searchAPI = `https://api.themoviedb.org/3/search/movie?api_key=${KEY}&query=`;
const popularAPI = `https://api.themoviedb.org/3/movie/popular?api_key=${KEY}&language=en-US&page=1`;
const genresAPI = `https://api.themoviedb.org/3/genre/movie/list?api_key=${KEY}&language=en-US`;
//||||||||||||||| On Initial Render|||||||||||||||
apiFunc(popularAPI);
//||||||||||| GET button action||||||||||||

submit.addEventListener("click", (e) => {
  e.preventDefault();
  main.innerHTML = "";
  apiFunc(searchAPI + input.value);
});
//||||| API FETCH Function|||||||||||||||
async function apiFunc(url) {
  try {
    let req = await fetch(url);
    let res = await req.json();

    if (res) {
      let genresReq = await fetch(genresAPI);
      let genresRes = await genresReq.json();
      genresData = genresRes.genres;

      // filter out only full data movies
      let movieData = res.results.filter((e) => {
        for (let element of filter) {
          if (!e[element]) return false;
        }
        return true;
      });

      let movieCount = res.results.length;

      if (movieCount == "0") {
        console.log("no data");
        main.innerHTML = "<span class='error'>No Data</span>";
        return;
      }
      if (movieCount > 0) {
        input.value = "";
      }

      for (let i = 0; i < movieData.length; i++) {
        let { original_title: title, poster_path: poster, release_date: premiered, vote_average: rating, genre_ids: genre } = movieData[i];

        let markup = `
    <article>
      <div class="img-side">
        <img src="https://image.tmdb.org/t/p/original${poster}" alt="${title}" />
      </div>
      <div class="info-side">
        <h1>${title}</h1>
        <h6>${genrefy(genre)}</h6>
        <div class="rating">
             ${starify(rating)}
        </div>
        <div class="film-info">
          <span>${rating.toFixed(1)}</span>
          <span>${premiered.slice(0, 4)}</span>
        </div>
      </div>
    </article>`;
        document.querySelector("main").innerHTML += markup;
      }
    }
  } catch (e) {
    console.log("ERROR!!!", e);
  }
}

//|||||| Transform Genre codes to words|||||||
function genrefy(arr) {
  let newarr = [];
  arr.forEach((element) => {
    genresData.forEach((gen) => {
      if (gen.id == element) {
        newarr.push(gen.name);
      }
    });
  });
  return newarr.join(", ");
}
//|||||| Movie rating to Star icon|||||||
function starify(rating) {
  let stars = "";
  for (let ii = 0; ii < Number(rating); ii++) {
    stars += "<img src='img/star.svg' alt='star' />";
  }
  return stars;
}
