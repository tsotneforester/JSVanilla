import React from "react";

function Form({ input, setInput, handler }) {
  return (
    <>
      <form>
        <input
          value={input}
          placeholder="Enter text"
          type="text"
          onChange={(e) => {
            setInput(e.target.value);
          }}
        />
        <button onClick={handler}>SUBMIT</button>
      </form>
    </>
  );
}

export default Form;
