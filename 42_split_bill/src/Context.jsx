import React, { useState, useEffect } from "react";
import { light, dark } from "./theme";
const AppContext = React.createContext();
import { ThemeProvider } from "styled-components";

function Context({ children }) {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", isDarkMode ? "dark" : "light");
  }, [isDarkMode]);

  return (
    <AppContext.Provider value={{ isDarkMode, setIsDarkMode }}>
      <ThemeProvider theme={isDarkMode ? dark : light}>
        <>{children}</>
      </ThemeProvider>
    </AppContext.Provider>
  );
}

export { Context, AppContext };
