import React, { useState, useEffect } from "react";
import axios from "axios";
import "./style.css";
import Search from "./Search";
import Main from "./Main";

function Index() {
  const [start, setStart] = useState(true);
  const [user, setUser] = useState("");
  const [input, setInput] = useState("");

  function handler(e) {
    e.preventDefault();
    let user = e.target[0].value;
    axiosData(user);
  }

  async function axiosData(user) {
    try {
      let request = await axios.get(`https://api.github.com/users/${user}`);
      console.log(request);
      setUser(request.data);
      setStart(false);
      setInput("");
    } catch (error) {
      console.log(error);
      if (error.code === "ERR_BAD_REQUEST") {
        setStart(false);
        setInput("");
        setUser("");
      }
      if (error.code === "ERR_NETWORK") {
        throw new Error("Network error");
      }
    }
  }

  useEffect(() => {
    let title = user ? user.login.toUpperCase() : "Github Card";
    document.title = title;
  });

  return (
    <>
      {<Search handler={handler} value={input} change={(e) => setInput(e.target.value)} />}
      {start || <Main {...user} />}
    </>
  );
}

export default Index;
