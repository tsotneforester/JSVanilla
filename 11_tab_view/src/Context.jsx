import React from "react";
import { GlobalStyles } from "./theme";

function Context({ children }) {
  return (
    <>
      <GlobalStyles />
      {children}
    </>
  );
}

export { Context };
