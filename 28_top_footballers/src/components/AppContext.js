import data from "./data";
import React, { useState, useContext } from "react";
import "./index.css";

const DataContext = React.createContext();

function App() {
  const [people, setPeople] = useState(data);
  const [needsRefresh, setNeedsRefresh] = useState(false);

  function clickHandler() {
    console.log("object");
    if (needsRefresh) {
      setPeople(data);
      setNeedsRefresh(false);
    } else {
      setPeople([]);
      setNeedsRefresh(true);
    }
  }

  return (
    <>
      <DataContext.Provider value={{ people }}>
        <section className="container">
          <h3>{people.length} Top Footballers</h3>
          <List people={people} />
          <Button clickHandler={clickHandler} needsRefresh={needsRefresh} />
        </section>
      </DataContext.Provider>
    </>
  );
}

export default App;

const List = () => {
  const mainData = useContext(DataContext);
  return (
    <>
      {mainData.people.map((human) => {
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
