import { createContext, useEffect, useState, useCallback } from "react";
import {
  RECIPES_BY_CATEGORY_API,
  RECIPES_BY_AREA_API,
  RECIPES_BY_QUERY_API,
  DEFAULT_FILTER,
} from "src/data";

export const RecipesContext = createContext(null);

function RecipesProvider({ children }) {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [recipesFilter, setRecipesFilter] = useState(DEFAULT_FILTER);

  useEffect(() => {
    console.log("recipes has changed", recipes);
  }, [recipes]);

  async function fetchRecipes(url) {
    try {
      setLoading(true);
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        if (data?.meals) {
          setRecipes(data?.meals);
        } else {
          // the api returns {"meals": null} when hasn't found any recipes
          setRecipes([])
        }
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

  const currentUrl = () => {
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
  };

  useEffect(() => {
    console.log("lets fetch new recipes based on", recipesFilter);
    if (recipesFilter.type !== "" && recipesFilter.value !== "") {
      const url = currentUrl();

      //reFetch recipes if filter has changed
      fetchRecipes(url);
    }
  }, [recipesFilter]);

  return (
    <RecipesContext.Provider
      value={{
        recipes,
        loading,
        error,
        recipesFilter,
        setRecipesFilter,
      }}
    >
      {children}
    </RecipesContext.Provider>
  );
}
export default RecipesProvider;
