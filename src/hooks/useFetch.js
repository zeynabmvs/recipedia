import { useEffect, useState } from "react";
import axios from "axios";

export default function useFetch(url) {
  const [data, setData] = useState(null);
  const [pending, setPending] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController(); // Create AbortController

    async function fetchData() {
      setPending(true);
      try {
        const response = await axios.get(url, {
          signal: controller.signal, // Attach signal to Axios request
        });
        setData(response.data);
        setError(null);
      } catch (e) {
        if (axios.isCancel(e)) {
          console.log("Request canceled:", e.message); // Handle cancellation
        } else {
          setError(`${e.message}. Some Error Occurred`);
        }
      } finally {
        setPending(false);
      }
    }

    fetchData();

    // Cleanup function to cancel the request if the component unmounts
    return () => {
      controller.abort();
    };
  }, [url]);

  return { data, error, pending };
}
