import { createGlobalStyle } from "styled-components";
import topsvg from "./assets/img/bg-pattern-top.svg";
import bottomsvg from "./assets/img/bg-pattern-bottom.svg";

export const GlobalStyles = createGlobalStyle`
  body {
    transition: background 0.2s ease-in, color 0.2s ease-in;
    font-family: "Kumbh Sans", sans-serif;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: black;
    background-color: #00a4b0;
    background-image: url(${topsvg}), url(${bottomsvg});
    background-repeat: no-repeat no-repeat;
    background-position: calc(-46vw + 100%) calc(-34vh + 100%), 45vw 45vh;
  }
`;
