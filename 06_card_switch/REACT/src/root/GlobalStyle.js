import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@200;400&display=swap");

*,
::before,
::after {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

:focus,
:active {
  outline: none;
}

a:link,
a:visited,
a:focus,
a:hover,
a:active {
  text-decoration: none;
  outline: none;
}

input,
button,
textarea {
  font-family: inherit;
}

input::-ms-clear {
  display: none;
}

button {
  cursor: pointer;
  border: none;
}

button::-moz-focus-inner {
  padding: 0;
  border: 0;
}

img {
  max-width: 100%;
  display: block;
}

ul li {
  list-style: none;
}

h1,
h2,
h3,
h4,
h5,
h6,
p {
  font-weight: 400;
  margin: 0;
  padding: 0;
}

pre {
  box-sizing: border-box;
  margin: 0;
}

body {
  font-family: "Poppins", sans-serif;
  min-height: 100vh;
  background-color: #5f72b7;
  background-size: cover;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
`;
