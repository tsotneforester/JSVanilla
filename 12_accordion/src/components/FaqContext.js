import "./Faq.css";
import  data  from "./data";
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
      {mainData.data.map((e) => {
        return (
          <section key={e.id} className={active === e.id ? "active" : "passive"}>
            <div className="line">
              <h1>{e.question}</h1>
              <img src="assets/arrow.png" alt="arrow" onClick={() => handler(e.id)} />
            </div>
            <div className="answer">{e.answer}</div>
          </section>
        );
      })}
    </>
  );
}
