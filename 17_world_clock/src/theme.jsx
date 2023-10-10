import { createGlobalStyle } from "styled-components";
import FontURL from "./assets/dot.ttf";

export const GlobalStyles = createGlobalStyle`
  @font-face {
      font-family: dot;
      src: url(${FontURL});
    }
`;
