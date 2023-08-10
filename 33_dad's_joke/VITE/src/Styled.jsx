import styled from "styled-components";

let S = {};

S.Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  padding: 12px;
  border-radius: 12px;
  border: 8px #b8c6db solid;
`;

S.Joke = styled.h1`
  font-size: 26px;
  color: rgb(21, 20, 19);
  font-weight: bold;
  text-align: left;
  font-family: "Ubuntu Mono", monospace;
`;

S.Main = styled.main`
  width: 90%;
  height: auto;
  border-radius: 12px;
  background-color: #f9f3d9;
  max-width: 400px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: stretch;
  padding: 14px;
  gap: 20px;
  box-shadow: 4px 4px 4px gray;
`;

S.Img = styled.img`
  width: 110px;
`;

S.Button = styled.button`
  border: 2px solid white;
  border-radius: 10px;
  padding: 10px 20px;
  background-color: #9c7248;
  font-family: "Georgia", serif;
  font-size: 1.2em;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  color: white;
  outline: none;
  box-shadow: 4px 4px 4px gray;
  font-family: "Ubuntu Mono", monospace;

  &:hover {
    background-color: #5e452c;
    transition: all 0.3s ease-in-out;
  }

  &:active {
    transform: translateY(2px);
    box-shadow: 2px 2px 4px gray;
  }
`;

export default S;
