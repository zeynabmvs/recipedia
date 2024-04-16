import { createContext, useEffect, useState } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

export const GlobalStateContext = createContext(null);

function GlobalStateProvider({ children }) {
  const [searchParamm, setSearchParamm] = useState("");
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
  // const navigate = useNavigate()

  async function handleSearch(e){
    e.preventDefault();
    try {
      const res = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchParamm}`
      );

      const data = await res.json();
      if (data?.meals) {
        setRecipes(data?.meals);
        setLoading(false);
        setSearchParamm("");
        // navigate('/')
      }
    } catch (e) {
      console.log(e);
      setLoading(false);
      setSearchParamm("");
    }

    
  }

  async function fetchRecipes() {
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
        searchParamm,
        setSearchParamm,
        handleSearch,
        recipes,
        loading,
        error,
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
