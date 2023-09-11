import { useState, useEffect } from "react";
import { GlobalStyles } from "./theme";
import axios from "axios";
import Search from "./components/Search";
import Main from "./components/Main";

//imrse
//rafce
//imrr

function App() {
  const [input, setInput] = useState(""); //controlled input

  const [loading, setLoading] = useState(true);
  const [showResult, setShowResult] = useState(false);
  const [errorMsg, setErrormsg] = useState("");

  const [user, setUser] = useState("");

  function handler(e) {
    e.preventDefault();
    let user = e.target[0].value;
    fetchApi(user);
    setShowResult(true);
  }

  async function fetchApi(user) {
    try {
      let request = await fetch(`https://api.github.com/users/${user}`);
      console.log(request);
      if (request.status === 404) {
        setStart(false);
        setInput("");
        throw new Error("no such user");
      } else {
        let data = await request.json();
        setUser(data);
        setStart(false);
        setInput("");
      }
    } catch (e) {
      console.log(e);
    }
  }

  useEffect(() => {
    let title = user ? user.login.toUpperCase() : "Github Card";
    document.title = title;
  });

  return (
    <>
      <GlobalStyles />
      {<Search handler={handler} value={input} change={(e) => setInput(e.target.value)} />}
      {showResult && <Main {...user} loading={loading} error={errorMsg} />}
    </>
  );
}

export default App;
