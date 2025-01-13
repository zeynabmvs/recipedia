import { createContext, useEffect, useState } from "react";

export const GlobalStateContext = createContext(null);

function GlobalStateProvider({ children }) {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const [recipesFilter, setRecipesFilter] = useState({
    type: "category",
    value: "breakfast",
  });

  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, SetPostsPerPage] = useState(8);

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
    const url = getCurrentApiUrl();
    fetchRecipes(url);
  }, [recipesFilter]);

  function handlePagination(currentPage) {
    setCurrentPage(currentPage);
  }

  const getPageRecipes = (perPage = postsPerPage) => {
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
        postsPerPage,
        setRecipesFilter,
      }}
    >
      {children}
    </GlobalStateContext.Provider>
  );
}
export default GlobalStateProvider;
