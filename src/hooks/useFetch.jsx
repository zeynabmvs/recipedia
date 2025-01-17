import { useEffect, useState } from "react";

export default function useFetch(url) {
  const [data, setData] = useState(null);
  const [pending, setPending] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      setPending(true);
      try {
        const response = await fetch(url);
        if (!response.ok) throw new Error(response.statusText);

        const result = await response.json();
        setData(result);
        setError(null);
        setPending(false);
      } catch (e) {
        setError(`${e}. Some Error Occured`);
        setPending(false);
      }
    }

    fetchData();
  }, [url]);

  return { data, error, pending };
}
