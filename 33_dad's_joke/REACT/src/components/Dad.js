import { ButtonStyled, ImgStyled, DadStyled } from "./Styled";

function Dad({ handler }) {
  return (
    <DadStyled>
      <ImgStyled src="joke.png" alt="joke" />
      <ButtonStyled onClick={handler}>Another</ButtonStyled>
    </DadStyled>
  );
}

export default Dad;
