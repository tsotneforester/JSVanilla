import React, { useState, useEffect } from "react";
import Menu from "./components/Menu";
import Button from "./components/Button";
import rawData from "./data";

const allCategories = ["all", ...new Set(rawData.map((item) => item.category))];

function App() {
  const [data, setData] = useState(rawData);
  let [value, setValue] = useState("OUR MENU");
  let [category, setCategory] = useState("all");
  function handler(name) {
    if (name === "all") {
      setData(rawData);
    } else {
      setData(rawData.filter((e) => e.category === name));
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

      <nav>
        <Button category={allCategories} handler={handler} status={category} />
      </nav>
      <div className="dishes">
        <Menu data={data} />
      </div>
    </>
  );
}

export default App;
