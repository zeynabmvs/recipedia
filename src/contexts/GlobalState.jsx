import { createContext, useEffect, useState } from "react";
import { indexof } from "stylis";

export const GlobalStateContext = createContext(null);

function GlobalStateProvider({ children }) {
  const [seachParam, setSerachParam] = useState("");
  const [favorites, setFavorites] = useState([])
  
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);


  function handleFavorite(currentItem) {
    console.log("******************", currentItem)
    let cpyFavorites = [...favorites]
    const index = cpyFavorites.findIndex(item => item.idMeal === currentItem.idMeal)
    console.log(index)
    if (index === -1) {
      cpyFavorites.push(currentItem)
    } else {
      cpyFavorites.splice(index)
    }
    console.log(cpyFavorites)
    setFavorites(cpyFavorites)

    console.log(favorites)
  }

  function isFavorite(id) {
    const index = favorites.findIndex(item => item.idMeal === id)
    return index === -1 ? false : true
  }
  function handleSearch() {
    //TODO: add search later on
    console.log(seachParam);
  }
  async function fetchRecipes() {
    console.log("fetchRecipes");
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
      value={{ seachParam, setSerachParam, handleSearch, recipes, loading, error , isFavorite, handleFavorite, favorites}} 
    >
      {children}
    </GlobalStateContext.Provider>
  );
}

export default GlobalStateProvider;
