import { useEffect, useState } from "react";


function useFetch(url, options={}) {
    const [data, setData] = useState([]);
    const [pending, setPending] = useState(false);
    const [error, setError] = useState(null);

    async function fetchData(){
        setPending(true);
        try {
          const response = await fetch(url, { ...options });
          console.log(response)
          if (!response.ok) throw new Error(response.statusText);
    
          const result = await response.json();
          console.log(result)
          setData(result);
          setError(null);
          setPending(false);
        } catch (e) {
          setError(`${e}. Some Error Occured`);
          setPending(false);
        }
    }

    useEffect(() => {
        fetchData()
    }, [url]);
    console.log(data)

    return [ data, error, pending];
}

export default useFetch;