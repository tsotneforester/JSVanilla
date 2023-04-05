import styled from "styled-components";

const ProgressLine = styled.div`
  height: 8px;
  max-width: 640px;
  background-color: red;
  border-radius: 6px;
`;

const Line = ({ refLine }) => {
  return (
    <>
      <ProgressLine ref={refLine} className="progress-line"></ProgressLine>
    </>
  );
};

export default Line;
