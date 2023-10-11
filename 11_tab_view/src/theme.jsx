import { createGlobalStyle } from "styled-components";

export const root = {
  violet: "#6f35f5",
};

export const device = {
  tablet: `(min-width: 768px)`,
};

export const GlobalStyles = createGlobalStyle`
  body {
    background-color: #A9C9CD;
    font-family: 'Barlow', sans-serif;
  }
`;
