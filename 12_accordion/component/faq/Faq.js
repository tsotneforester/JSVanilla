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
      {data.map((item) => {
        return <Card key={item.id} className={active === item.id ? "active" : "passive"} question={item.question} answer={item.answer} id={item.id} handler={handler} />;
      })}
    </>
  );
}

export default Faq;

function Card(props) {
  const { question, answer, id, handler, className } = props;

  return (
    <section className={className}>
      <div className="line">
        <h1>{question}</h1>
        <img src={arrow} alt="arrow" onClick={() => handler(id)} />
      </div>
      <div className="answer">{answer}</div>
    </section>
  );
}
