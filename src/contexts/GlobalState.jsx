import { createContext, useEffect, useState, useCallback } from "react";

export const GlobalStateContext = createContext(null);
import {
  DEFAULT_FILTER,
  DEFAULT_PER_PAGE,
  RECIPES_BY_CATEGORY_API,
  RECIPES_BY_AREA_API,
  RECIPES_BY_QUERY_API,
} from "src/data";

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

  const getCurrentApiUrl = useCallback( () => {
    let url;

    if (recipesFilter.type === "category") {
      url = RECIPES_BY_CATEGORY_API + recipesFilter.value;
    } else if (recipesFilter.type === "area") {
      url = RECIPES_BY_AREA_API + recipesFilter.value;
    } else {
      if (recipesFilter.value.trim() === "") return;
      url = RECIPES_BY_QUERY_API + recipesFilter.value;
    }

    return url;
  }, [recipesFilter]);

  useEffect(() => {
    if (!recipesFilter.value.trim()) return;

    const url = getCurrentApiUrl();
    fetchRecipes(url);
  }, [recipesFilter]);

  const handlePagination =  (currentPage) => {
    setCurrentPage(currentPage);
  }

  const getPageRecipes = useCallback( (perPage = DEFAULT_PER_PAGE) => {
    const indexOfLastPost = currentPage * perPage;

    const indexOfFirstPost = indexOfLastPost - perPage;
    return recipes?.slice(indexOfFirstPost, indexOfLastPost);
  }, [currentPage, recipes]);

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
