import data from "./data";
import React, { useState } from "react";
import "./index.css";

function App() {
  const [people, setPeople] = useState(data);
  const [needsRefresh, setNeedsRefresh] = useState(false);

  function clickHandler() {
    if (needsRefresh) {
      setPeople(data);
      setNeedsRefresh(false);
    } else {
      setPeople([]);
      setNeedsRefresh(true);
    }
  }

  return (
    <main>
      <section className="container">
        <h3>{people.length} Top Footballers</h3>
        <List />
        <Button clickHandler={clickHandler} needsRefresh={needsRefresh} />
      </section>
    </main>
  );
}

export default App;

const List = ({ people }) => {
  return (
    <>
      {people.map((human) => {
        const { id, name, age, image } = human;
        return (
          <article key={id} className="person">
            <img src={image} alt={name} />
            <div>
              <h4>{name}</h4>
              <p>{age}</p>
            </div>
          </article>
        );
      })}
    </>
  );
};

function Button({ clickHandler, needsRefresh }) {
  return <button onClick={clickHandler}>{needsRefresh ? "Refresh" : "Clear All"}</button>;
}
