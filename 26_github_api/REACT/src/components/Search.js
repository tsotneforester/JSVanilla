import styled from "styled-components";

let Input = styled.input`
  width: 326px;
  height: 50px;
  border-radius: 15px;
  background-color: white;
  font-size: 20px;
  color: black;
  font-weight: 400;
  text-align: left;
  text-indent: 30px;
  border: none;
`;

function Search({ handler, value, change }) {
  return (
    <form onSubmit={handler}>
      <Input type="text" placeholder="Insert Github Username" value={value} onChange={change} />
    </form>
  );
}

export default Search;
