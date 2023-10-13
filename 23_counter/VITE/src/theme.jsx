import { createGlobalStyle } from "styled-components";

export const light = {
  body: "#f1f1f1",
  text: "#121620",
  theme_icon: "#121620",
};
export const dark = {
  body: "#121620",
  text: "#f1f1f1",
  theme_icon: "#f1f1f1",
};

export const root = {
  theme_icon_size: "30px",
  animation_time: "0.2s",
};

export const device = {
  mobile: `(min-width: 480px)`,
  tablet: `(min-width: 768px)`,
  laptop: `(min-width: 1024px)`,
  desktop: `(min-width: 1280px)`,
};

export const GlobalStyles = createGlobalStyle`
  body {
    /* background: ${(prop) => prop.theme.body};
    color: ${(prop) => prop.theme.text};
    transition: background ${root.animation_time}, color ${root.animation_time};
    font-family: 'Barlow', sans-serif; */
  }
`;
