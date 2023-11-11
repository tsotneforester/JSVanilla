import React, { useState, useEffect } from "react";
import { GlobalStyles } from "./theme";
import axios from "axios";
const AppContext = React.createContext();
let regions = ["Asia/Tbilisi", "Asia/Tokyo", "Asia/Bishkek", "Asia/Ashgabat", "Asia/Colombo", "Asia/Damascus", "America/Asuncion"];

function Context({ children }) {
  const [rawData, setRawData] = useState("");

  async function CallAPI() {
    const res1 = await axios(`https://api.timezonedb.com/v2.1/list-time-zone?key=OYUED61XIOW8&format=json`);
    let zones = res1.data.zones;

    let trimmed = zones.filter((e) => {
      for (let i = 0, n = regions.length; i < n; i++) {
        if (e.zoneName == regions[i]) {
          return e;
        }
      }
    });

    setRawData(trimmed);
  }

  useEffect(() => {
    CallAPI();
  }, []);

  return (
    <AppContext.Provider value={{ rawData }}>
      <GlobalStyles />
      {children}
    </AppContext.Provider>
  );
}

export { Context, AppContext };
