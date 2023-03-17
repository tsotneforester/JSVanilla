import "./index.css";
import { useFetch } from "./UseFetch";

let url = "https://icanhazdadjoke.com/";

function App() {
  const { joke } = useFetch(url);

  return (
    <main>
      <h1>{joke}</h1>
    </main>
  );
}

export default App;
