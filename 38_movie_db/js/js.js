"use strict";
const KEY = "ca13458cc8f7d31e877d4c3e5247aac9";
const searchAPI = `https://api.themoviedb.org/3/search/movie?api_key=${KEY}&query=`;
const popularAPI = `https://api.themoviedb.org/3/movie/popular?api_key=${KEY}&language=en-US&page=1`;
const genresAPI = `https://api.themoviedb.org/3/genre/movie/list?api_key=${KEY}&language=en-US`;
const submit = document.querySelector("button");
const main = document.querySelector("main");
const input = document.getElementById("name");
let genresData = [];

(async function genreFetch() {
  let genresReq = await fetch(genresAPI);
  let genresRes = await genresReq.json();
  genresData = genresRes.genres;
})();

let filter = ["poster_path", "original_language", "release_date", "vote_average"];

submit.addEventListener("click", (e) => {
  e.preventDefault();
  main.innerHTML = "";
  apiFunc(searchAPI + input.value);
});

async function apiFunc(url) {
  try {
    let req = await fetch(url);
    let res = await req.json();
    console.log(res.results);

    let movieData = res.results.filter((e) => {
      for (let element of filter) {
        if (!e[element]) return false;
      }
      return true;
    });

    //console.log(movieData);
    let movieCount = res.results.length;

    if (movieCount == "0") {
      console.log("no data");
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
        <div class="filminfo">
          <span>${rating.toFixed(1)}</span>
          <span>${premiered.slice(0, 4)}</span>
        </div>
      </div>
    </article>`;
      document.querySelector("main").innerHTML += markup;
    }
  } catch {
    console.log("first");
  }
}

apiFunc(popularAPI);

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

function starify(rating) {
  let stars = "";
  for (let ii = 0; ii < Number(rating); ii++) {
    stars += "<img src='img/star.svg' alt='star' />";
  }
  return stars;
}
