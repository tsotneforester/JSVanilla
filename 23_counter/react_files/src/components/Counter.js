import "./style.css";
import resetImg from "./reset.png";
import React, { useState, useEffect } from "react";

let random = Math.floor(Math.random() * 101);

function Demo() {
  let [value, setValue] = useState(random);

  return (
    <div className="card">
      <h1>{value}</h1>
      <div className="controls">
        <button
          onClick={() => {
            setValue(value - 1);
          }}>
          -
        </button>
        <button>
          <img
            src={resetImg}
            alt="reset"
            onClick={() => {
              setValue(random);
            }}
          />
        </button>
        <button
          onClick={() => {
            setValue(value + 1);
          }}>
          +
        </button>
      </div>
    </div>
  );
}

export default Demo;
