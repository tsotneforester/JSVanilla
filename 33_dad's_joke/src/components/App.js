import React, { useState, useEffect } from "react";
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
    fetch(url, options)
      .then((res) => res.json())
      .then((date) => {
        setJoke(date.joke);
      });
  }, []);

  return (
    <main>
      <h1>{joke}</h1>
    </main>
  );
}

export default App;
