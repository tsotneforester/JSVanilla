import styled from "styled-components";
import { BsCartPlus } from "react-icons/bs";

export const Header = styled.header`
  width: 100%;
  height: 100px;
  border-radius: 0;
  background-color: rgb(70, 70, 209);
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0 10px;
`;

export const Wrapper = styled.div`
  width: 90%;
  height: auto;
  max-width: 700px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  & h1 {
    font-size: 32px;
    color: white;
    border: none;
  }

  & span {
    width: 28px;
    height: 28px;
    border-radius: 50%;
    background-color: #a28bff;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 0;
    left: 40px;
    color: white;
  }
`;

export const Cart = styled.div`
  width: 70px;
  height: 52px;
  border-radius: 12px;
  background-color: transparent;
  position: relative;
`;

export const CartIcon = styled(BsCartPlus)`
  position: absolute;
  top: 10px;
  left: 22px;
  color: white;
  font-size: 32px;
`;

export const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-top: 2px gray solid;
  width: 90%;
  padding: 10px;
  max-width: 700px;

  & button {
    width: auto;
    height: auto;
    border-radius: 4px;
    background-color: #a28bff;
    border: none;
    padding: 2px 6px;
    font-size: 22px;
    color: black;
    font-weight: 400;
    text-align: center;
    transition: all 0.6s;
  }
  & button:hover {
    background-color: #564693;
    color: white;
  }
`;

export const TotalAmount = styled.div`
  align-self: flex-end;
  padding: 2px 4px;
  width: auto;
  height: auto;
  border-radius: 8px;
  background-color: white;
  font-size: 16px;
  color: black;
  font-weight: 500;
  text-align: center;
`;

export const Main = styled.main`
  width: 90%;
  height: auto;
  border-radius: 0;
  background-color: transparent;
  max-width: 700px;
  & h1 {
    font-size: 30px;
    color: black;
    font-weight: 400;
    text-align: center;
  }
`;

export const Items = styled.div``;

export const Article = styled.article`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Poster = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 100px;
  border-radius: 0;
  background-color: transparent;
  & img {
    width: 58px;
  }
`;

export const Details = styled.div`
  flex-grow: 1;
  width: auto;
  height: 100px;
  border-radius: 0;
  background-color: transparent;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  font-size: 12px;
  font-weight: 400;
  text-align: center;
  padding: 0 10px;
`;

export const DetailsName = styled.div`
  font-size: 20px;
  color: black;
  font-weight: bold;
  text-align: center;
  text-transform: capitalize;
`;

export const DetailsPrice = styled.div`
  font-size: 16px;
  color: gray;
  font-weight: 400;
  text-align: center;
`;

export const DetailsRemove = styled.span`
  color: blue;
  cursor: pointer;
`;

export const Amount = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 0;
  background-color: transparent;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  & input {
    width: 54px;
    height: auto;
    border-radius: 10px;
    background-color: white;
    padding: 6px 10px;
    border: none;
  }
`;
