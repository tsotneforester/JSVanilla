import React, { useState, useEffect } from "react";
import Menu from "./Menu";
import data from "./data";
import "./index.css";

function App() {
  return (
    <>
      <h1>Our Menu</h1>
      <nav>
        <button className="btn">All</button>
        <button className="btn">Breakfast</button>
        <button className="btn">Lunch</button>
        <button className="btn">Shakes</button>
      </nav>
      <main>
        <Menu data={data} />
      </main>
    </>
  );
}

export default App;
