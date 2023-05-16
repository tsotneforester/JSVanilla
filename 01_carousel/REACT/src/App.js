import "./App.css";
import { TbBrandReactNative } from "react-icons/tb";
import { GlobalStyle } from "./root/GlobalStyle";
import styled from "styled-components";
import React, { useState, useEffect } from "react";
import { data } from "./data";

//imrse
//rafce
//imrr

function App() {
  const [value, setValue] = useState(0);

  return (
    <>
      <GlobalStyle />
      <Main>
        {data.map((card, index) => {
          return (
            <Card key={card.id} url={card.image} active={index === value ? true : false} onClick={() => setValue(index)}>
              <h3>{card.name}</h3>
            </Card>
          );
        })}
      </Main>
    </>
  );
}

export default App;

const Main = styled.main`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  -moz-column-gap: 30px;
  column-gap: 30px;
  flex-basis: 840px;
  min-height: 100vh;
`;

const Card = styled.div`
  width: 60px;
  height: 350px;
  border-radius: 30px;
  flex-grow: ${(prop) => (prop.active ? "4" : "0")};
  transition: all 0.6s ease;
  background-position: top;
  background-repeat: no-repeat;
  background-size: auto 120%;
  background-image: url(${(prop) => prop.url});

  //
  position: relative;
  padding: 20px;

  &:hover {
    cursor: pointer;
    background-size: auto 100%;
  }

  h3 {
    opacity: ${(prop) => (prop.active ? "1" : "0")};
    position: absolute;
    bottom: 10px;
    font-size: ${(prop) => (prop.active ? "32px" : "24px")};
    color: white;
    font-weight: ${(prop) => (prop.active ? "700" : "400")};
    text-align: left;
    transition: all 0.6s ease;
    text-transform: capitalize;
  }
`;
