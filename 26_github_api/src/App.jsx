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
    axiosData(user);
    setShowResult(true);
  }

  async function axiosData(user) {
    setLoading(true);
    try {
      let request = await axios.get(`https://api.github.com/users/${user}`);
      console.log(request);
      setUser(request.data);
      setLoading(false);
      setInput("");
    } catch (error) {
      if (error.code === "ERR_BAD_REQUEST") {
        setLoading(false);
        setErrormsg("No profile with this username");
      }
      if (error.code === "ERR_NETWORK") {
        setLoading(false);
        setErrormsg("Network error");
      }
      setUser("");
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
