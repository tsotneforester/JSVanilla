import React, { useState, useEffect } from "react";
import data from "./data";
import Tour from "./Tour";
import "./style.css";

//const url = "https://course-api.com/react-tours-project";
function App() {
  const [tours, setTours] = useState(data);

  function handler(e) {
    setTours(
      tours.filter((tour) => {
        return tour.id != e;
      })
    );
  }

  if (tours.length == 0) {
    return (
      <>
        <Header title="No more tours" />
        <main>
          <button
            onClick={() => {
              setTours(data);
            }}>
            Refresh
          </button>
        </main>
      </>
    );
  }

  return (
    <>
      <Header title="Our Tours" />

      <main>
        {tours.map((item) => {
          return <Tour key={item.id} {...item} handler={handler} />;
        })}
      </main>
    </>
  );
}

export default App;

function Header({ title }) {
  return <h1>{title}</h1>;
}
