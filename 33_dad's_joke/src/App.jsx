import React from "react";
import useFetch from "./components/useFetch";
import BeatLoader from "react-spinners/BeatLoader";
const URL = "https://icanhazdadjoke.com/";

//https://www.npmjs.com/package/react-spinners

function App() {
  const { data, loading, setNewJoke, setLoading, newJoke } = useFetch(URL);

  return (
    <>
      <main>
        <div className="card">
          <img src="./joke.png" alt="joke" />

          {loading ? <BeatLoader color={"#7c8ba1"} loading={loading} size={15} aria-label="Loading Spinner" data-testid="loader" /> : <p>{data}</p>}
          <button
            onClick={() => {
              setNewJoke(!newJoke);
              setLoading(!loading);
            }}>
            Another
          </button>
        </div>
      </main>
    </>
  );
}

export default App;
