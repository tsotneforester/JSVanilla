import React, { useState, useEffect } from "react";
import Menu from "./components/Menu";
import Buttons from "./components/Buttons";
import { DATA, CATEGORIES } from "./data";

function App() {
  const [activeCategory, setActiveCategory] = useState("all");
  let tempData = activeCategory !== "all" ? DATA.filter((e) => e.category === activeCategory) : DATA;

  useEffect(() => {
    tempData = DATA.filter((e) => e.category === activeCategory);
    document.title = activeCategory.toUpperCase();
  }, [activeCategory]);

  return (
    <>
      <Buttons data={CATEGORIES} setter={(e) => setActiveCategory(e)} activeCategory={activeCategory} />
      <Menu data={tempData} />
    </>
  );
}

export default App;
