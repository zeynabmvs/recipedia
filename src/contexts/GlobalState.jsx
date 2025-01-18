import { createContext, useEffect, useState } from "react";

export const GlobalStateContext = createContext(null);
import { DEFAULT_FILTER, DEFAULT_PER_PAGE } from "src/data";

function GlobalStateProvider({ children }) {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const [recipesFilter, setRecipesFilter] = useState(DEFAULT_FILTER);

  const [currentPage, setCurrentPage] = useState(1);

  async function fetchRecipes(url) {
    try {
      setLoading(true);
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        setRecipes(data?.meals);
        setLoading(false);
        setError("");
      } else {
        throw new Error(response.statusText);
      }
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  }

  const getCurrentApiUrl = () => {
    let url;

    if (recipesFilter.type === "category") {
      url = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${recipesFilter.value}`;
    } else if (recipesFilter.type === "area") {
      url = `https://www.themealdb.com/api/json/v1/1/filter.php?a=${recipesFilter.value}`;
    } else {
      if (recipesFilter.value.trim() === "") return;
      url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${recipesFilter.value}`;
    }

    return url;
  };

  useEffect(() => {
    if (!recipesFilter.value.trim()) return;

    const url = getCurrentApiUrl();
    fetchRecipes(url);
  }, [recipesFilter]);

  function handlePagination(currentPage) {
    setCurrentPage(currentPage);
  }

  const getPageRecipes = (perPage = DEFAULT_PER_PAGE) => {
    const indexOfLastPost = currentPage * perPage;

    const indexOfFirstPost = indexOfLastPost - perPage;
    return recipes?.slice(indexOfFirstPost, indexOfLastPost);
  };

  useEffect(() => {
    setCurrentPage(1);
  }, [recipes]);

  return (
    <GlobalStateContext.Provider
      value={{
        recipes,
        setRecipes,
        loading,
        setLoading,
        error,
        setError,
        handlePagination,
        currentPage,
        getPageRecipes,
        setRecipesFilter,
      }}
    >
      {children}
    </GlobalStateContext.Provider>
  );
}
export default GlobalStateProvider;
