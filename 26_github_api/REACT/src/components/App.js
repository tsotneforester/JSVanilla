import "./style.css";
import React, { useState, useEffect } from "react";
import Search from "./Search";
import Main from "./Main";

function Index() {
  const [start, setStart] = useState(true);
  const [user, setUser] = useState("");
  const [input, setInput] = useState("");

  function handler(e) {
    e.preventDefault();
    let user = e.target[0].value;
    fetchApi(user);
  }

  async function fetchApi(user) {
    try {
      let step1 = await fetch(`https://api.github.com/users/${user}`);
      if (step1.status === "404") {
        setStart(false);
        setInput("");
        throw new Error("no such user");
      } else {
        let step2 = await step1.json();
        setUser(step2);
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
      {<Search handler={handler} value={input} change={(e) => setInput(e.target.value)} />}
      {start || <Main {...user} />}
    </>
  );
}

export default Index;
