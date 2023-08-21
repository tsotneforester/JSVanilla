import { useState } from "react";
import "./App.css";
import FriendForm from "./components/FriendForm";
import List from "./components/List";
import ThemeToggler from "./components/ThemeToggler";
import SplitForm from "./components/SplitForm";

let rawData = [
  {
    id: "b4plagLfhXtBl3_050-Jl",
    name: "clarck",
    balance: -7,
    image: "https://i.pravatar.cc/72?u=b4plagLfhXtBl3_050-Jl",
  },
  {
    id: "unK7dnHjg2ftzjGrUf5gx",
    name: "Sarah",
    balance: 20,
    image: "https://i.pravatar.cc/72?u=unK7dnHjg2ftzjGrUf5gx",
  },
  {
    id: "gRZ7cHKi9ewYJAmX_CLAM",
    name: "Anthony",
    balance: 0,
    image: "https://i.pravatar.cc/72?u=gRZ7cHKi9ewYJAmX_CLAM",
  },
];

function App() {
  const [data, setData] = useState(rawData);
  const [activeFriend, setActiveFriend] = useState(false);
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <ThemeToggler />

      <List data={data} setter={setActiveFriend} activeFriendID={activeFriend?.id} modal={setShowModal} />
      <FriendForm data={data} dataSetter={setData} modalStatus={showModal} modalSetter={setShowModal} />

      {activeFriend ? <SplitForm activeFriend={activeFriend} data={data} dataSetter={setData} friendSetter={setActiveFriend} /> : ""}
    </>
  );
}

export default App;
