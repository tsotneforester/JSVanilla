import playLogo from "../img/play.png";
import styled from "styled-components";

const ButtonStyled = styled.button`
  width: 40px;
  height: 40px;
  border-radius: 6px;
  background-color: rgb(253, 253, 253);
  background-image: url(${playLogo});
  background-position: center center;
  border: 3px black solid;
  transition: all 1s; ;;;
`;

const Control = ({ handler }) => {
  return (
    <>
      <div>
        <ButtonStyled onClick={handler}></ButtonStyled>
      </div>
    </>
  );
};

export default Control;
