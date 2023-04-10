"use strict";
const KEY = "ca13458cc8f7d31e877d4c3e5247aac9";
const searchAPI = `https://api.themoviedb.org/3/search/movie?api_key=${KEY}&query=`;
const popularAPI = `https://api.themoviedb.org/3/movie/popular?api_key=${KEY}&language=en-US&page=1`;
const genresAPI = `https://api.themoviedb.org/3/genre/movie/list?api_key=${KEY}&language=en-US`;
const submit = document.querySelector("button");
const main = document.querySelector("main");
const input = document.getElementById("name");

submit.addEventListener("click", (e) => {
  e.preventDefault();
  main.innerHTML = "";

  apiFunc(searchAPI + input.value);
});

async function apiFunc(url) {
  try {
    let req = await fetch(url);
    let res = await req.json();
    let movieData = res.results;
    if (movieData) {
      input.value = "";
    }
    let genresReq = await fetch(genresAPI);
    let genresRes = await genresReq.json();
    let genresData = genresRes.genres;

    for (let i = 0; i < movieData.length; i++) {
      const { original_title: title } = movieData[i];
      // let title = movieData[i].original_title;
      let poster = movieData[i].poster_path ? `https://image.tmdb.org/t/p/original/${movieData[i].poster_path}` : "img/empty.png";
      let premier = movieData[i].release_date ? movieData[i].release_date.slice(0, 4) : "No Date";
      let rating = movieData[i].vote_average ? movieData[i].vote_average.toFixed(1) : 5;
      let genres = [];
      movieData[i].genre_ids.forEach((code) => {
        genresData.forEach((element) => {
          if (element.id === code) {
            genres.push(element.name);
          }
        });
      });

      let stars = "";
      for (let ii = 0; ii < Number(rating); ii++) {
        stars += "<img src='img/star.svg' alt='' />";
      }

      let markup = `<article>
      <div class="img-side">
        <img src="${poster}" alt="${title}" />
      </div>
      <div class="info-side">
        <h1>${title}</h1>
        <h6>${genres.join(", ")}</h6>
        <div class="rating">
             ${stars}
        </div>
        <div class="filminfo">
          <span>${rating}</span>
          <span>${premier}</span>
        </div>
      </div>
    </article>`;
      document.querySelector("main").innerHTML += markup;
    }
  } catch {}
}

apiFunc(popularAPI);
