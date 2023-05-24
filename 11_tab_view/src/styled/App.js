import { GlobalStyle } from "./../root/GlobalStyle";
import styled from "styled-components";
import { data } from "../data";
import React, { useState } from "react";
import { FaAngleDoubleRight } from "react-icons/fa";

//imrse
//rafce
//imrr

function App() {
  const [value, setValue] = useState(0);
  const { title, company, dates, duties } = data[value];

  return (
    <>
      <GlobalStyle />
      <Container>
        <Navbar>
          {data.map((item, index) => {
            return (
              <Link
                key={item.id}
                color={index === value ? true : false}
                onClick={() => {
                  setValue(index);
                }}>
                {item.company}
              </Link>
            );
          })}
        </Navbar>
        <Main>
          <Title>{title}</Title>
          <Company>{company}</Company>
          <Date>{dates}</Date>

          {duties.map((line, i) => {
            return (
              <Description>
                <Icon />
                <Text key={i}>{line}</Text>
              </Description>
            );
          })}
        </Main>
      </Container>
    </>
  );
}

export default App;

let color1 = "#6f35f5";

const Container = styled.div`
  width: 80vw;
  margin: 5rem auto 0 auto;
  max-width: 1120px;

  @media only screen and (min-width: 768px) {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: flex-start;
    gap: 30px;
  }
`;

const Navbar = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 20px;
  margin-bottom: 30px;
  cursor: pointer;
  text-transform: uppercase;

  @media only screen and (min-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: stretch;
    width: 160px;
    flex-shrink: 0;
  }
`;

const Title = styled.h3`
  font-size: 26px;
`;

const Company = styled.span`
  text-transform: uppercase;
  color: black;
  background: #cbd5e1;
  display: inline-block;
  padding: 0.375rem 0.75rem;
  border-radius: 4px;
  margin: 0.75rem 0;
`;

const Date = styled.p`
  color: #233958;
  letter-spacing: 1px;
  margin-bottom: 2rem;
`;

const Description = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  width: auto;
  height: auto;
  border-radius: 0;
  background-color: transparent;
  -moz-column-gap: 20px;
  column-gap: 20px;
  margin: 20px 0;
`;

const Icon = styled(FaAngleDoubleRight)`
  color: ${color1};
  font-size: 22px;
  flex-shrink: 0;
`;

const Text = styled.p``;
const Main = styled.main``;

const Link = styled.span`
  color: ${({ color }) => (color ? `${color1}` : "black")};
  border-bottom: 2px solid ${({ color }) => (color ? `${color1}` : "#A9C9CD")};
  text-align: center;

  @media only screen and (min-width: 768px) {
    border-left: 2px solid ${({ color }) => (color ? `${color1}` : "#A9C9CD")};
    width: 100%;
    border-bottom: none;
  }
  &:hover {
    color: ${color1};
    border-bottom: 2px solid ${color1};
  }
  @media only screen and (min-width: 768px) {
    &:hover {
      border-left: 2px solid ${color1};
      border-bottom: none;
    }
  }
`;
