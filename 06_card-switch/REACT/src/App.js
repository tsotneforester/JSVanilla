import { GlobalStyle } from "./root/GlobalStyle";
import styled from "styled-components";
import React, { useState, useEffect } from "react";
import { data } from "./data";
import { FaQuoteLeft } from "react-icons/fa";
import { BiChevronsRight, BiChevronsLeft } from "react-icons/bi";

function App() {
  let [counter, setCounter] = useState(0);

  function goBack() {
    let tempCounter = counter - 1;
    if (tempCounter == -1) {
      tempCounter = data.length - 1;
    }
    setCounter(tempCounter);
  }
  function goNext() {
    let tempCounter = counter + 1;
    if (tempCounter == data.length) {
      tempCounter = 0;
    }
    setCounter(tempCounter);
  }

  function autoCardSwitcher() {
    let tempCounter = counter + 1;
    if (tempCounter == data.length) {
      tempCounter = 0;
    }
    if (tempCounter == -1) {
      tempCounter = data.length - 1;
    }
    setCounter(tempCounter);
  }

  useEffect(() => {
    let id = setInterval(autoCardSwitcher, 3000);
    return () => clearInterval(id);
  });

  let { fullName, image, review } = data[counter];

  return (
    <>
      <GlobalStyle />
      <Main>
        <Line key={counter} />
        <ImgContainer>
          <Icon>
            <FaQuoteLeft />
          </Icon>
          <Boke></Boke>
          <Avatar>
            <img src={image} alt={fullName} />
          </Avatar>
        </ImgContainer>
        <Author>{fullName}</Author>

        <Novel>{review.book}</Novel>
        <Review>{review.text}</Review>
        <Controls>
          <BiChevronsLeft size={30} onClick={goBack} />
          <BiChevronsRight size={30} onClick={goNext} />
        </Controls>
      </Main>
    </>
  );
}

export default App;

const Line = styled.div`
  width: 100%;
  height: 5px;
  border-radius: 2px;
  background-color: #645cff;
  transform-origin: left;
  animation: fill 3s linear infinite;

  @keyframes fill {
    0% {
      transform: scaleX(0%);
    }
    100% {
      transform: scaleX(100%);
    }
  }
`;

const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  row-gap: 10px;
  width: 390px;
  height: 620px;
  border-radius: 10px;
  background-color: honeydew;
  box-shadow: 6px 2px 12px rgb(56, 56, 56);
  padding: 12px 36px 10px 36px;
`;

const ImgContainer = styled.div`
  width: 160px;
  height: 160px;
  border-radius: 0;
  background-color: transparent;
  position: relative;
`;

const Icon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #645cff;
  position: absolute;
  top: 20px;
  z-index: 100;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  color: white;
`;
const Boke = styled.div`
  position: absolute;
  top: 6px;
  left: 11px;
  width: 146px;
  height: 146px;
  border-radius: 50%;
  background-color: #645cff;
  box-shadow: 2px 2px 12px gray, -2px -2px 12px gray;
`;
const Avatar = styled.div`
  position: absolute;
  top: 11px;
  left: 5px;
  width: 146px;
  height: 146px;
  border-radius: 50%;
  background-color: transparent;
  transition: 0.8s ease;
  z-index: 99;

  & img {
    width: 146px;
    height: 146px;
    border-radius: 50%;
    background-color: transparent;
  }
`;
const Author = styled.div`
  font-size: 26px;
  color: black;
  font-weight: 500;
  text-align: center;
  text-transform: capitalize;
  margin-top: 12px;
`;
const Novel = styled.div`
  font-size: 16px;
  color: #645cff;
  font-weight: bold;
  text-align: center;
  text-transform: uppercase;
`;
const Review = styled.div`
  height: 264px;
  overflow: auto;
  transition: 0.8s ease;
  font-family: "Poppins", sans-serif;
  margin-top: 14px;
  white-space: pre-line;
`;
const Controls = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  -moz-column-gap: 20px;
  column-gap: 20px;
  color: #645cff;
`;
