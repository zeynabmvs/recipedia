import { createContext, useEffect, useState } from "react";

export const GlobalStateContext = createContext(null);

function GlobalStateProvider({ children }) {
  const [seachParam, setSerachParam] = useState("");
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  function handleSearch() {
    //TODO: add search later on
    console.log(seachParam);
  }
  async function fetchRecipes() {
    console.log("fetchRecipes")
    try {
      setLoading(true);

      const response = await fetch("https://www.themealdb.com/api/json/v1/1/filter.php?a=Canadian");
      if (response.ok) {
        const data = await response.json();
        setRecipes(data.meals)
        setLoading(false);
        setError("");
      } else {
        throw new Error(response.statusText)
      }
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchRecipes();
  }, []);

  return (
    <GlobalStateContext.Provider
      value={{ seachParam, setSerachParam, handleSearch, recipes }}
    >
      {children}
    </GlobalStateContext.Provider>
  );
}

export default GlobalStateProvider;
