import React, { useState } from "react";
import resetImg from "./assets/reset.png";

let random = Math.floor(Math.random() * 101);

function App() {
  let [value, setValue] = useState(random);

  return (
    <div className="card">
      <h1>{value}</h1>
      <div className="controls">
        <button
          className="decrease"
          onClick={() => {
            setValue(value - 1);
          }}>
          -
        </button>
        <button className="reset">
          <img
            src={resetImg}
            alt="reset"
            onClick={() => {
              setValue(random);
            }}
          />
        </button>
        <button
          className="increase"
          onClick={() => {
            setValue(value + 1);
          }}>
          +
        </button>
      </div>
    </div>
  );
}

export default App;
