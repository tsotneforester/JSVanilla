import React, { useState } from "react";
import resetImg from "./assets/reset.png";

let digit = Math.floor(Math.random() * 101);

function App() {
  let [randomValue, setRandomValue] = useState(digit);

  return (
    <main>
      <h1>{randomValue}</h1>
      <div className="controls">
        <button
          className="decrease"
          onClick={() => {
            setRandomValue((previousValue) => previousValue - 1);
          }}>
          -
        </button>
        <button className="reset">
          <img
            src={resetImg}
            alt="reset"
            onClick={() => {
              setRandomValue(digit);
            }}
          />
        </button>
        <button
          className="increase"
          onClick={() => {
            setRandomValue((previousValue) => previousValue + 1);
          }}>
          +
        </button>
      </div>
    </main>
  );
}

export default App;
