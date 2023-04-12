import React, { useState, useEffect, useRef } from "react";
import { filter, searchAPI, genresAPI, popularAPI } from "./filter";
import styled from "styled-components";
import axios from "axios";
import Card from "./Card";
import Button from "./Button";
import Input from "./Input";

function App() {
  const inputRef = useRef(null);
  const [data, setData] = useState();

  const handler = (e) => {
    e.preventDefault();
    apiFunc(searchAPI + inputRef.current.value);
  };

  async function apiFunc(url) {
    try {
      let searchResponse = await axios.get(url);
      let genresResponse = await axios.get(genresAPI);

      let genresData = genresResponse.data.genres;
      //let movieCount = searchResponse.data.results.length;

      let movieData = searchResponse.data.results.filter((e) => {
        for (let key in filter) {
          if (!e[key]) return false;
        }
        return true;
      });

      for (let i = 0; i < movieData.length; i++) {
        let genres = [];
        movieData[i].genre_ids.forEach((code) => {
          genresData.forEach((element) => {
            if (element.id === code) {
              genres.push(element.name);
            }
            movieData[i].genre_ids = genres;
          });
        });
      }

      let movieCount = movieData.length;
      if (movieCount > 0) {
        console.log(movieData);
        setData(movieData);
        inputRef.current.value = "";
      }
    } catch {
      //console.log("first");
    }
  }

  useEffect(() => {
    apiFunc(popularAPI);
  }, []);

  if (data) {
    return (
      <>
        <HeaderStyled>
          <form onSubmit={handler}>
            <Input ref={inputRef}></Input>
            <Button handler={handler}></Button>
          </form>
        </HeaderStyled>
        <MainStyled>
          {data.map((item) => {
            return <Card key={item.id} title={item.title} poster={item.poster_path} rating={Number(item.vote_average.toFixed(1))} premiered={item.release_date.slice(0, 4)} array={Number(item.vote_average.toFixed(0))} genre={item.genre_ids.join(" ")}></Card>;
          })}
        </MainStyled>
      </>
    );
  }
}

export default App;
const HeaderStyled = styled.header`
  text-align: center;
  padding: 30px;

  & form {
    margin: 0 auto;
    display: inline-block;
  }
`;

const MainStyled = styled.main`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;
