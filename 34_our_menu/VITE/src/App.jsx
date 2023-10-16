import React, { useState, useEffect } from "react";
import Menu from "./components/Menu";
import Button from "./components/Button";
import rawData from "./data";

import { HashRouter as Router, Route, Routes, NavLink } from "react-router-dom";

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
      <Router>
        <Routes>
          <Route path="/" element={<Button category={allCategories} handler={handler} status={category} />}>
            <Route index element={<Menu data={data} />}></Route>
            <Route path="lunch" element={<Menu data={data} />}></Route>
            <Route path="breakfast" element={<Menu data={data} />}></Route>
            <Route path="shakes" element={<Menu data={data} />}></Route>
            <Route path="all" element={<Menu data={data} />}></Route>
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
