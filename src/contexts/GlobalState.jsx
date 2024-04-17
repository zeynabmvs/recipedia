import { createContext, useEffect, useState } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

export const GlobalStateContext = createContext(null);

function GlobalStateProvider({ children }) {
  const [favorites, setFavorites] = useLocalStorage("favorites", []);
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  function handleFavorite(currentItem) {
    let cpyFavorites = [...favorites];
    const index = cpyFavorites.findIndex(
      (item) => item.idMeal === currentItem.idMeal
    );

    if (index === -1) {
      cpyFavorites.push(currentItem);
    } else {
      cpyFavorites.splice(index);
    }
    setFavorites(cpyFavorites);
  }

  function isFavorite(id) {
    const index = favorites.findIndex((item) => item.idMeal === id);
    return index === -1 ? false : true;
  }

  async function fetchRecipes() {
    console.log("fetch for home");
    try {
      setLoading(true);

      const response = await fetch(
        "https://www.themealdb.com/api/json/v1/1/filter.php?a=Canadian"
      );
      if (response.ok) {
        const data = await response.json();
        setRecipes(data.meals);
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

  useEffect(() => {
    fetchRecipes();
  }, []);

  return (
    <GlobalStateContext.Provider
      value={{
        recipes,
        setRecipes,
        loading,
        setLoading,
        error,
        setError,
        isFavorite,
        handleFavorite,
        favorites,
      }}
    >
      {children}
    </GlobalStateContext.Provider>
  );
}
export default GlobalStateProvider;
