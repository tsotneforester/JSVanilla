import "./index.css";
import { useAxios } from "./UseAxios";

let url = "https://icanhazdadjoke.com/";

function App() {
  const { joke } = useAxios(url);

  return (
    <main>
      <h1>{joke}</h1>
    </main>
  );
}

export default App;
