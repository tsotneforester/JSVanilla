import "./App.css";
import Clock from "./components/Clock";

let data = [
  { id: 1, city: "Tbilisi" },
  { id: 2, city: "Tokyo" },
  { id: 3, city: "Bishkek" },
  { id: 4, city: "Ashgabat" },
  { id: 5, city: "Colombo" },
  { id: 6, city: "Damascus" },
];

function App() {
  return data.map((e) => {
    return <Clock key={e.id} name={e.city} />;
  });
}

export default App;
