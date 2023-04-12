import styled from "styled-components";

let ButtonStyled = styled.button`
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
`;

function Button({ handler }) {
  return (
    <ButtonStyled type="submit" onClick={() => handler}>
      GET
    </ButtonStyled>
  );
}

export default Button;
