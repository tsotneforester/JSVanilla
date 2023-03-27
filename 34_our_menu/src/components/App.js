import React, { useState } from "react";
import Menu from "./Menu";
import Button from "./Button";
import data from "./data";
import "./index.css";
const allCategories = ["all", ...new Set(data.map((item) => item.category))];

function App() {
  const [datas, setDatas] = useState(data);
  function handler(name) {
    console.log(allCategories);
    if (name === "all") {
      setDatas(data);
    } else {
      setDatas(data.filter((e) => e.category === name));
    }
  }

  return (
    <>
      <h1>Our Menu</h1>
      <div className="line"></div>
      <nav>
        <Button category={allCategories} handler={handler} />
      </nav>
      <main>
        <Menu data={datas} />
      </main>
    </>
  );
}

export default App;
