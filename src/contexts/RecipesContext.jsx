import { createContext, useEffect, useState, useCallback } from "react";
import {
  RECIPES_BY_CATEGORY_API,
  RECIPES_BY_AREA_API,
  RECIPES_BY_QUERY_API,
  DEFAULT_FILTER,
  INGREDIENTS_LIST_API,
} from "src/data";

export const RecipesContext = createContext(null);

function RecipesProvider({ children }) {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [recipesFilter, setRecipesFilter] = useState(DEFAULT_FILTER);
  const [ingrediants, setIngrediants] = useState([]);

  const currentUrl = useCallback(() => {
    if (recipesFilter.type === "category") {
      return RECIPES_BY_CATEGORY_API + recipesFilter.value;
    } else if (recipesFilter.type === "area") {
      return RECIPES_BY_AREA_API + recipesFilter.value;
    } else if (
      recipesFilter.type === "query" &&
      recipesFilter.value.trim() !== ""
    ) {
      return RECIPES_BY_QUERY_API + recipesFilter.value;
    }
    return null;
  }, [recipesFilter]);

  useEffect(() => {
    if (ingrediants.length > 0) return;

    async function fetchIngredientsData() {
      try {
        const response = await fetch(INGREDIENTS_LIST_API);
        if (response.ok) {
          const data = await response.json();
          setIngrediants(data?.meals);
        }
      } catch (error) {
        console.log("error on fetching ingredients", error);
      }
    }

    fetchIngredientsData();
  }, []);

  useEffect(() => {
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
            setRecipes([]);
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

    // console.log("lets fetch new recipes based on", recipesFilter);
    if (recipesFilter.type !== "" && recipesFilter.value !== "") {
      const url = currentUrl();

      //reFetch recipes if filter has changed
      fetchRecipes(url);
    }
  }, [recipesFilter, currentUrl]);

  return (
    <RecipesContext.Provider
      value={{
        recipes,
        loading,
        error,
        recipesFilter,
        setRecipesFilter,
        ingrediants,
      }}
    >
      {children}
    </RecipesContext.Provider>
  );
}
export default RecipesProvider;
