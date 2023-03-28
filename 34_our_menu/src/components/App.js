import React, { useState, useEffect } from "react";
import Menu from "./Menu";
import Button from "./Button";
import data from "./data";
import "./index.css";
const allCategories = ["all", ...new Set(data.map((item) => item.category))];

function App() {
  const [datas, setDatas] = useState(data);
  let [value, setValue] = useState("OUR MENU");
  let [zorg, setZorg] = useState("all");
  function handler(name) {
    console.log(allCategories);
    if (name === "all") {
      setDatas(data);
    } else {
      setDatas(data.filter((e) => e.category === name));
    }
    setValue(name.toUpperCase());
    setZorg(name);
  }

  useEffect(() => {
    document.title = `${value}`;
  });

  return (
    <>
      <h1>Our Menu</h1>
      <div className="line"></div>
      <nav>
        <Button category={allCategories} handler={handler} status={zorg} />
      </nav>
      <main>
        <Menu data={datas} />
      </main>
    </>
  );
}

export default App;
