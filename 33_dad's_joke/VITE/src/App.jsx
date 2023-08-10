import React, { useState, useEffect } from "react";
import S from "./Styled";
import axios from "axios";

axios.defaults.headers.common["Accept"] = "application/json";
axios.defaults.baseURL = "https://icanhazdadjoke.com/";

function App() {
  const [joke, setJoke] = useState("Loading");
  const [newJoke, setNewJoke] = useState(false);

  const fetchData = async () => {
    try {
      const response = await axios();
      setJoke(response.data.joke);
    } catch (error) {
      console.log(error.response);
    }
  };

  useEffect(() => {
    fetchData();
  }, [newJoke]);

  return (
    <>
      <S.Main>
        <S.Card>
          <S.Img src="./src/assets/joke.png" alt="joke" />
          <S.Joke>{joke}</S.Joke>
          <S.Button onClick={() => setNewJoke(!newJoke)}>Another</S.Button>
        </S.Card>
      </S.Main>
    </>
  );
}

export default App;
