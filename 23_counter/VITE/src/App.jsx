import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  return (
    <main>
      <h1>{counter}</h1>
      <div className="controls">
        <button
          className="decrease"
          onClick={() => {
            dispatch({ type: "DECREASE" });
          }}>
          -
        </button>

        <button
          className="increase"
          onClick={() => {
            dispatch({ type: "INCREASE" });
          }}>
          +
        </button>
      </div>
    </main>
  );
}

export default App;
