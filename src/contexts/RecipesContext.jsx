import { createContext, useEffect, useState, useCallback } from "react";
import axios from "axios";
import {
  RECIPES_BY_CATEGORY_API,
  RECIPES_BY_AREA_API,
  RECIPES_BY_QUERY_API,
  DEFAULT_FILTER,
  FILTER_BY_INGREDIENT_API,
} from "src/data";

export const RecipesContext = createContext(null);

function RecipesProvider({ children }) {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [recipesFilter, setRecipesFilter] = useState(DEFAULT_FILTER);

  const currentUrl = useCallback(() => {
    if (recipesFilter.type === "category") {
      return RECIPES_BY_CATEGORY_API + recipesFilter.value;
    } else if (recipesFilter.type === "area") {
      return RECIPES_BY_AREA_API + recipesFilter.value;
    } else if (recipesFilter.type === "ingredient") {
      return FILTER_BY_INGREDIENT_API + recipesFilter.value;
    } else if (
      recipesFilter.type === "search" &&
      recipesFilter.value.trim() !== ""
    ) {
      return RECIPES_BY_QUERY_API + recipesFilter.value;
    }
    return null;
  }, [recipesFilter]);

  useEffect(() => {
    const controller = new AbortController(); // Create an AbortController instance

    async function fetchRecipes(url) {
      // console.log(url)
      if (!url) return; // Exit if no URL is provided

      try {
        setLoading(true);

        const response = await axios.get(url, {
          signal: controller.signal, // Attach the AbortController's signal
        });

        if (response.data?.meals) {
          setRecipes(response.data.meals);
        } else {
          // The API returns {"meals": null} when no recipes are found
          setRecipes([]);
        }
        setError(null);
      } catch (error) {
        if (axios.isCancel(error)) {
          console.log("Request canceled:", error.message); // Handle request cancellation
        } else {
          setError(error?.message || "An unexpected error occurred");
        }
      } finally {
        setLoading(false);
      }
    }

    // Fetch recipes if filter type and value are valid
    if (recipesFilter.type !== "" && recipesFilter.value !== "") {
      const url = currentUrl();
      fetchRecipes(url);
    }

    // Cleanup function to cancel the request if the component unmounts or the filter changes
    return () => {
      controller.abort();
    };
  }, [recipesFilter, currentUrl]);

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
