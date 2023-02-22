import React, { useState } from "react";

const Tour = ({ text }) => {
  const [show, setShow] = useState(false);

  return (
    <>
      <main style={styles.main}>
        {show ? text : text.slice(0, 150) + "..."}

        <span
          onClick={() => {
            setShow(!show);
          }}
          style={styles.span}>
          {show ? " Show less" : "Read More"}
        </span>
      </main>
    </>
  );
};
export default Tour;

let styles = {
  main: {
    width: "400px",
    height: "auto",
    border: "2px black solid",
    padding: "16px",
    // margin: "100px auto 0 auto",
    backgroundColor: "#e5dede",
  },
  span: {
    color: "blue",
  },
};
