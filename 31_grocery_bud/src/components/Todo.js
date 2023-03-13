import { useState } from "react";
import Alert from "./Alert";
import Remove from "./Remove";
import "./style.css";

function Todo() {
  let [data, setData] = useState([]);
  const [input, setInput] = useState("");
  const [id, setId] = useState(false);
  const [alert, setAlert] = useState({ show: false, msg: "", type: "" });

  function uniqueId() {
    return new Date().getTime().toString();
  }

  function handler() {
    if (id) {
      let filtered = data.filter((task) => {
        return task.id !== id;
      });
      data = [...filtered, { id: id, value: input }];
      setData(data);
      setInput("");
      setId(false);
      setAlert({ show: true, msg: "Value Changed", type: "add" });
    } else {
      data.push({ id: id ? id : uniqueId(), value: input });
      setData(data);
      setInput("");
      setAlert({ show: true, msg: "Item Added To The List", type: "add" });
    }

    console.log(data);
  }

  function removeTask(id) {
    let filtered = data.filter((task) => {
      return task.id !== id;
    });
    data = filtered;
    setData(filtered);
    setAlert({ show: true, msg: "Removed", type: "remove" });
  }

  function editTask(ids) {
    let nnn = data.filter((data) => {
      return data.id === ids;
    });
    setInput(nnn[0].value);
    setId(nnn[0].id);
  }

  return (
    <>
      <main>
        {alert.show ? (
          <Alert
            msg={alert.msg}
            data={data}
            type={alert.type}
            removeAlert={() => {
              setAlert({ show: false, msg: "Removed", type: "" });
            }}
          />
        ) : (
          ""
        )}

        <h1>Grocery Bud</h1>

        <div className="input-container">
          <input
            value={input}
            placeholder="Enter text"
            type="text"
            name=""
            id="plan"
            onChange={(e) => {
              setInput(e.target.value);
            }}
          />
          <button onClick={handler}>SUBMIT</button>
        </div>

        {data.map((e) => {
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
                      removeTask(e.id);
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
          handler={() => {
            setData([]);
            setAlert({ show: true, msg: "Empty List", type: "remove" });
          }}
        />
      </main>
    </>
  );
}

export default Todo;
