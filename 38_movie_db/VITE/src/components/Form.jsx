import React, { useEffect, forwardRef } from "react";
import styled from "styled-components";

const Form = forwardRef(function ({ handler }, ref) {
  useEffect(() => {
    ref.current.focus();
  }, []);

  return (
    <S.form onSubmit={handler}>
      <input ref={ref} type="text" placeholder="enter movie" />
      <button type="submit" onClick={handler}>
        GET
      </button>
    </S.form>
  );
});

export default Form;

const S = {};

S.form = styled.form`
  margin: 0 auto;
  display: inline-block;
  display: flex;
  justify-content: center;
  align-items: center;

  & button {
    font-size: 16px;
    color: white;
    font-weight: 600;
    text-align: center;
    width: 68px;
    height: 42px;
    border-radius: 12px;
    background-color: blue;
    padding: 2px 6px;
    transition: all 0.8s;
    &:hover {
      width: 68px;
      height: 42px;
      border-radius: 12px;
      background-color: rgb(4, 4, 137);
    }
  }

  & input {
    height: 42px;
    border-radius: 12px;
    margin-right: 20px;
    text-indent: 20px;
    font-size: 16px;
    color: black;
    font-weight: bold;
    text-align: left;
    border: none;

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
  }
`;
