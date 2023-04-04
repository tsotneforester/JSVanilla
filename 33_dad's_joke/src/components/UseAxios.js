import { useState, useEffect } from "react";
import axios from "axios";

export function useAxios(url) {
  //must always start with "use"
  const [joke, setJoke] = useState("Loading");

  const options = {
    headers: {
      Accept: "application/json",
    },
  };

  useEffect(() => {
    axios.get(url, options).then((data) => {
      setJoke(data.data.joke);
    });
  }, [joke]);

  return { joke };
}
