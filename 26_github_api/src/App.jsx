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

  const [loading, setLoading] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const [user, setUser] = useState("");

  function handler(e) {
    e.preventDefault();
    let user = e.target[0].value;
    fetchApi(user);
    setShowResult(true);
  }

  async function fetchApi(user) {
    setLoading(true);
    try {
      let request = await fetch(`https://apwi.github.com/users/${user}`);
      console.log(request.status);
      if (request.status === 404) {
        throw new Error("No profile with this username");
      } else {
        let data = await request.json();
        setUser(data);
      }
    } catch (error) {
      console.dir(error);
      setErrorMsg(error.message);
      setUser("");
    } finally {
      setLoading(false);
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
