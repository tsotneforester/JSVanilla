import React, { useState, useContext } from "react";
import styled from "styled-components";
import { root } from "../theme";
import { ReactComponent as MoonIcon } from "../assets/moon.svg";
import { ReactComponent as SunIcon } from "../assets/sun.svg";
import { AppContext } from "../Context";

function ThemeToggler() {
  const { isDarkMode, setIsDarkMode } = useContext(AppContext);

  return (
    <>
      <Toggler>
        <Sun />
        <Slider onClick={() => setIsDarkMode(!isDarkMode)}>
          <Spot possition={isDarkMode ? "26px" : "0"} />
        </Slider>
        <Moon />
      </Toggler>
    </>
  );
}

export default ThemeToggler;

const Moon = styled(MoonIcon)`
  & path {
    fill: ${(prop) => prop.theme.modeToggler};
  }
`;

const Sun = styled(SunIcon)`
  path {
    fill: ${(prop) => prop.theme.modeToggler};
  }
`;

const Toggler = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  z-index: 1;
`;

const Slider = styled.div`
  width: 50px;
  height: 22px;
  border-radius: 12px;
  background-color: ${(prop) => prop.theme.modeToggler};
  padding: 4px;
`;

const Spot = styled.div`
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background-color: ${(prop) => prop.theme.modeTogglerDot};
  transform: translateX(${(prop) => prop.possition});
  transition: all ${root.animationTime};
`;
