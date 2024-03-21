import React, { useState, useEffect } from "react";
import axios from "axios";

axios.defaults.headers.common["Accept"] = "application/json";

function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [newJoke, setNewJoke] = useState(false);

  async function fetchData() {
    try {
      const response = await axios(url);
      console.log(response);

      setData(response.data.joke);
    } catch (e) {
      setData(e.message);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchData();
  }, [newJoke]);
  return { data, loading, setNewJoke, setLoading, newJoke };
}

export default useFetch;
