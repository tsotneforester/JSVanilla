import { useState, useEffect } from "react";

export function useFetch(url) {
  //must always start with "use"
  const [joke, setJoke] = useState("Loading");

  const options = {
    headers: {
      Accept: "application/json",
    },
  };

  useEffect(() => {
    fetch(url, options)
      .then((res) => res.json())
      .then((data) => {
        setJoke(data.joke);
      });
  }, [url]);

  return { joke };
}
