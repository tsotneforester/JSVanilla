import { useContext, useState, useEffect } from "react";
import { root, device } from "./theme";
import ThemeToggler from "./components/ThemeToggler";
import rawData from "./data.json";
import styled from "styled-components";
import Paginator from "./components/Paginator";

import dateFormat from "dateformat";

function App() {
  let [activePage, setActivePage] = useState(1);

  return (
    <>
      <ThemeToggler />
      <Paginator rawData={rawData} singlePageLines={8} headerArray={["id", "name", "address", "products", "cost", "date"]} />
    </>
  );
}

export default App;
