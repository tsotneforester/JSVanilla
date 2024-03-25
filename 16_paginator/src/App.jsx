import rawData from "./data.json";
import Paginator from "./components/Paginator";

function App() {
  return (
    <>
      <Paginator rawData={rawData} singlePageLines={8} headerArray={["id", "name", "address", "products", "cost", "date"]} />
    </>
  );
}

export default App;
