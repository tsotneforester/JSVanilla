import { GlobalStyle } from "./../root/GlobalStyle";
import { data } from "../data";
import React, { useState } from "react";
import { FaAngleDoubleRight } from "react-icons/fa";
import "./App.css";

//imrse
//rafce
//imrr

function App() {
  const [value, setValue] = useState(0);

  return (
    <>
      <GlobalStyle />
      <div className="container">
        <nav>
          {data.map((e, index) => {
            return (
              <span
                key={e.id}
                className={`job-btn ${index === value && "active"}`}
                onClick={() => {
                  setValue(index);
                }}>
                {e.company}
              </span>
            );
          })}
        </nav>
        <main>
          <h3>{data[value].title}</h3>
          <span className="job-company">{data[value].company}</span>
          <p className="job-date">{data[value].dates}</p>

          {data[value].duties.map((e, i) => {
            return (
              <div className="desc">
                <FaAngleDoubleRight className="icon"></FaAngleDoubleRight>
                <p key={i}>{e}</p>
              </div>
            );
          })}
        </main>
      </div>
    </>
  );
}

export default App;
