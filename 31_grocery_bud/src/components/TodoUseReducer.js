import { useState, useReducer } from "react";
import { reducer, defaultState } from "./Reducer";
import Alert from "./Alert";
import Remove from "./Remove";
import "./style.css";

function Todo() {
  const [input, setInput] = useState("");
  const [id, setId] = useState(false);
  const [state, dispatch] = useReducer(reducer, defaultState);

  function uniqueId() {
    return new Date().getTime().toString();
  }

  function handler() {
    if (id) {
      let filtered = state.data.filter((task) => {
        return task.id !== id;
      });
      let personAdded = [...filtered, { id: id, value: input }];

      setInput("");
      setId(false);
      dispatch({ type: "EDIT_VALUE", load: personAdded });
    } else {
      let personAdded = { id: uniqueId(), value: input };
      dispatch({ type: "ADD_VALUE", load: personAdded });
      setInput("");
    }
  }

  function editTask(id) {
    let nnn = state.data.filter((data) => {
      return data.id === id;
    });
    setInput(nnn[0].value);
    setId(nnn[0].id);
  }

  return (
    <>
      <main>
        {state.alertShow && (
          <Alert
            msg={state.alertMsg}
            data={state.data}
            type={state.alertType}
            removeAlert={() => {
              dispatch({ type: "REMOVE_ALERT" });
            }}
          />
        )}

        <h1>Grocery Bud</h1>

        <div className="input-container">
          <input
            value={input}
            placeholder="Enter text"
            type="text"
            id="plan"
            onChange={(e) => {
              setInput(e.target.value);
            }}
          />
          <button onClick={handler}>SUBMIT</button>
        </div>

        {state.data.map((e) => {
          return (
            <>
              <article key={e.id}>
                <p>{e.value}</p>
                <div className="btn-container">
                  <img
                    onClick={() => {
                      editTask(e.id);
                    }}
                    src="assets/edit.png"
                    alt="edit"
                  />
                  <img
                    onClick={() => {
                      dispatch({ type: "REMOVE_VALUE", load: e.id });
                    }}
                    src="assets/trash.png"
                    alt="edit"
                  />
                </div>
              </article>
            </>
          );
        })}

        <Remove
          title={"UseReducer"}
          handler={() => {
            dispatch({ type: "REMOVE_ALL" });
          }}
        />
      </main>
    </>
  );
}

export default Todo;
