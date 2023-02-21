import data from "./data";
import React, { useState } from "react";
import List from "./List";
import "./index.css";

function App() {
  const [people, setPeople] = useState(data);

  return (
    <main>
      <section className="container">
        <h3>{people.length} Top Footballers</h3>
        <List people={people} />
        <button
          onClick={() => {
            setPeople([]);
          }}>
          clear all
        </button>
      </section>
    </main>
  );
}

export default App;
