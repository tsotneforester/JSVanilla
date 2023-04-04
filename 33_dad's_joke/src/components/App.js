import React, { useState, useEffect } from "react";
import axios from "axios";
import "./index.css";

let url = "https://icanhazdadjoke.com/";

function App() {
  const [joke, setJoke] = useState("Loading");

  const options = {
    headers: {
      Accept: "application/json",
    },
  };

  useEffect(() => {
    axios.get(url, options).then((data) => {
      setJoke(data.data.joke);
    });
  }, []);

  return (
    <main>
      <h1>{joke}</h1>
    </main>
  );
}

export default App;
