import "./Faq.css";
import { data } from "./data";
import { useState } from "react";

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
      {data.map((e) => {
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
