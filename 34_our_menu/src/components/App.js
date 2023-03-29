import React, { useState, useEffect } from "react";
import Menu from "./Menu";
import Button from "./Button";
import data from "./data";
import "./index.css";
const allCategories = ["all", ...new Set(data.map((item) => item.category))];

function App() {
  const [datas, setDatas] = useState(data);
  let [value, setValue] = useState("OUR MENU");
  let [category, setCategory] = useState("all");
  function handler(name) {
    if (name === "all") {
      setDatas(data);
    } else {
      setDatas(data.filter((e) => e.category === name));
    }
    setValue(name.toUpperCase());
    setCategory(name);
  }

  useEffect(() => {
    document.title = `${value}`;
  });

  return (
    <>
      <h1>Our Menu</h1>
      <div className="line"></div>
      <nav>
        <Button category={allCategories} handler={handler} status={category} />
      </nav>
      <main>
        <Menu data={datas} />
      </main>
    </>
  );
}

export default App;
