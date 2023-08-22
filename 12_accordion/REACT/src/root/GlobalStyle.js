import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
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
  margin: 0;
  font-family: "Itim", cursive, -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  min-height: 100vh;
  background-color: #b8c6db;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

#root {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}`;
