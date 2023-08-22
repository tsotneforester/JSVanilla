import { useState } from "react";
import { nanoid } from "nanoid";
import "../App.css";

import { Alert, Clear, Form, List } from "./components";

function App() {
  let [data, setData] = useState([]);
  const [input, setInput] = useState("");
  const [activeTaskID, setActiveTaskID] = useState(false);
  const [alert, setAlert] = useState({ show: false, msg: "", type: "" });

  function submitHandler(e) {
    e.preventDefault();
    if (activeTaskID) {
      let indexOfId = data.findIndex((e) => e.id == activeTaskID);
      let shallowCopy = [...data];
      shallowCopy[indexOfId].task = input;
      setData(shallowCopy);
      setInput("");
      setActiveTaskID(false);
      setAlert({ show: true, msg: "Value Changed", type: "edit" });
    } else {
      data.push({ id: activeTaskID ? activeTaskID : nanoid(), task: input });
      setData(data);
      setInput("");
      setAlert({ show: true, msg: "Item Added To The List", type: "add" });
    }
  }

  function removeTask(id) {
    let filtered = data.filter((task) => {
      return task.id !== id;
    });
    setData(filtered);
    setAlert({ show: true, msg: "Item Removed", type: "remove" });
  }

  function editTask(id) {
    console.log(id);

    let selectedTask = data.filter((data) => {
      return data.id === id;
    })[0];
    setInput(selectedTask.task);
    setActiveTaskID(id);
  }

  return (
    <>
      <main>
        {alert.show && <Alert data={data} alert={alert} alertSetter={setAlert} />}

        <h1>Grocery Bud</h1>

        <Form input={input} setInput={setInput} handler={submitHandler} />
        <List data={data} editTask={editTask} removeTask={removeTask} />

        <Clear
          title={"UseState"}
          handler={() => {
            setData([]);
            setAlert({ show: true, msg: "Empty List", type: "remove" });
          }}
        />
      </main>
    </>
  );
}

export default App;
