import { createContext, useCallback } from "react";
import useLocalStorage from "src/hooks/useLocalStorage";

const defaultContextValue = {
  favorites: [],
  isFavorite: () => false,
  handleFavorite: () => {},
};

export const FavoritesContext = createContext(defaultContextValue);

const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useLocalStorage("favorites", []);

  const handleFavorite = useCallback(
    (currentItem) => {
      let cpyFavorites = [...favorites];
      const index = cpyFavorites.findIndex(
        (item) => item.idMeal === currentItem.idMeal
      );

      if (index === -1) {
        cpyFavorites.push(currentItem);
      } else {
        cpyFavorites.splice(index, 1);
      }
      setFavorites(cpyFavorites);
    },
    [favorites, setFavorites]
  );

  const isFavorite = useCallback(
    (id) => {
      return favorites.some((item) => item.idMeal === id);
    },
    [favorites]
  );

  return (
    <FavoritesContext.Provider
      value={{
        favorites,
        isFavorite,
        handleFavorite,
      }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};

export default FavoritesProvider;
