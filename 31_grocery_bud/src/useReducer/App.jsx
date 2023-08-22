import { useState, useReducer } from "react";
import { nanoid } from "nanoid";
import "../App.css";
import { Alert, Clear, Form, List } from "./components";
import { reducer, defaultState } from "./Reducer";

function App() {
  const [state, dispatch] = useReducer(reducer, defaultState);
  const [input, setInput] = useState("");

  function submitHandler(e) {
    e.preventDefault();
    if (state.activeID) {
      let indexOfId = state.data.findIndex((e) => e.id == state.activeID);
      let shallowCopy = [...state.data];
      shallowCopy[indexOfId].task = input;
      setInput("");
      dispatch({ type: "EDIT_VALUE", load: shallowCopy });
    } else {
      let personAdded = { id: nanoid(), task: input };
      setInput("");
      dispatch({ type: "ADD_VALUE", load: personAdded });
    }
  }

  function removeTask(id) {
    let filteredData = state.data.filter((task) => {
      return task.id !== id;
    });

    dispatch({ type: "REMOVE_VALUE", load: filteredData });
  }

  function editTask(id) {
    let selectedTask = state.data.filter((data) => {
      return data.id === id;
    })[0];

    setInput(selectedTask.task);
    dispatch({ type: "SELECT_VALUE", load: id });
  }

  return (
    <>
      <main>
        {state.alert.show && (
          <Alert
            alert={state.alert}
            data={state.data}
            removeAlert={() => {
              dispatch({ type: "REMOVE_ALERT" });
            }}
          />
        )}

        <h1>Grocery Bud</h1>

        <Form input={input} setInput={setInput} handler={submitHandler} />
        <List data={state.data} editTask={editTask} removeTask={removeTask} />

        <Clear title={"UseReducer"} handler={() => dispatch({ type: "REMOVE_ALL" })} />
      </main>
    </>
  );
}

export default App;
