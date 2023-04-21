import styled from "styled-components";
import { forwardRef } from "react";

let InputStyled = styled.input`
  height: 42px;
  border-radius: 12px;
  margin-right: 20px;
  text-indent: 20px;
  font-size: 16px;
  color: black;
  font-weight: bold;
  text-align: left;

  & ::-moz-placeholder {
    font-style: italic;
    font-size: 14px;
    color: red;
    font-weight: 400;
    text-align: left;
  }
  & ::placeholder {
    font-style: italic;
    font-size: 14px;
    color: red;
    font-weight: 400;
    text-align: left;
  }
`;

const Input = forwardRef(function ({}, ref) {
  // displayed conditionally
  return <InputStyled ref={ref} type="text" placeholder="enter movie" />;
});

export default Input;
//add this to booook
