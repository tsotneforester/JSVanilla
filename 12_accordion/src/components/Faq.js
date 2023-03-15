import "./Faq.css";
import { data } from "./data";
import { useState } from "react";
import arrow from "./arrow.svg";

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
    <>
      <Card data={data} handler={handler} active={active} />
    </>
  );
}

export default Faq;

function Card(props) {
  const { data, handler, active } = props;

  return (
    <>
      {data.map((zorg) => {
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
