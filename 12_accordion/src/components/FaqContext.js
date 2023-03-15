import "./Faq.css";
import { data } from "./data";

import arrow from "./arrow.svg";
import React, { useState, useContext } from "react";

const PersonContext = React.createContext();

function Faq() {
  const [active, setActive] = useState(null);

  function handler(e) {
    if (active === e) {
      setActive(null);
    } else {
      setActive(e);
    }
  }

  return (
    <PersonContext.Provider value={{ data }}>
      <Card handler={handler} active={active} />
    </PersonContext.Provider>
  );
}

export default Faq;

function Card(props) {
  const mainData = useContext(PersonContext);
  const { handler, active } = props;

  return (
    <>
      {mainData.data.map((zorg) => {
        return (
          <section key={zorg.id} className={active === zorg.id ? "active" : "passive"}>
            <div className="line">
              <h1>{zorg.question}</h1>
              <img src={arrow} alt="arrow" onClick={() => handler(zorg.id)} />
            </div>
            <div className="answer">{zorg.answer}</div>
          </section>
        );
      })}
    </>
  );
}
