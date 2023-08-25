import React, { useState, useEffect } from "react";
import styled from "styled-components";

function ReadMore({ children, ButtonColor, lessWords, startCollapsed, collapseButtonText, expandButtonText }) {
  let [fullText, setFullText] = useState(startCollapsed);

  console.log(children);
  const myArray = children.split(" ");
  myArray.splice(lessWords);
  let str = myArray.join(" ");

  return (
    <>
      <Container>
        <Span>{fullText ? children : str + "..."}</Span>
        <Button onClick={() => setFullText(!fullText)} color={ButtonColor}>
          &nbsp; {fullText ? collapseButtonText : expandButtonText}
        </Button>
      </Container>
    </>
  );
}

export default ReadMore;

const Container = styled.div`
  width: 400px;
  height: auto;
  border: 2px black solid;
  padding: 16px;
  background-color: #e5dede;
  font-size: 20px;
`;
const Span = styled.span``;

const Button = styled.span`
  color: ${(prop) => prop.color};
`;
