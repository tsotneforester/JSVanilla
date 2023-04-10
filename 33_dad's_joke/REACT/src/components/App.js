import React, { useState, useEffect } from "react";
import { Card, Joke, Main } from "./Styled";
import Dad from "./Dad";
import axios from "axios";

let url = "https://icanhazdadjoke.com/";

function App() {
  const [joke, setJoke] = useState("Loading");
  const [isSending, setIsSending] = useState(false);

  const options = {
    headers: {
      Accept: "application/json",
    },
  };

  useEffect(() => {
    axios.get(url, options).then((data) => {
      setJoke(data.data.joke);
    });
  }, [isSending]);

  return (
    <>
      <Main>
        <Card>
          <Joke>{joke}</Joke>
          <Dad handler={() => setIsSending(!isSending)} />
        </Card>
      </Main>
    </>
  );
}

export default App;
