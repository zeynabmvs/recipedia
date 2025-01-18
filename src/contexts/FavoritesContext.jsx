import { createContext, useCallback } from "react";
import useLocalStorage from "src/hooks/useLocalStorage";
import { useToast } from "src/hooks/use-toast"
import { ToastAction } from "components/ui/toast"
import { Link } from "react-router-dom";

const defaultContextValue = {
  favorites: [],
  isFavorite: () => false,
  handleFavorite: () => {},
};

export const FavoritesContext = createContext(defaultContextValue);

const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useLocalStorage("favorites", []);
  const { toast } = useToast()

  const handleFavorite = useCallback(
    (currentItem) => {
      let cpyFavorites = [...favorites];
      const index = cpyFavorites.findIndex(
        (item) => item.idMeal === currentItem.idMeal
      );

      if (index === -1) {
        cpyFavorites.push(currentItem);
        toast({
          description: "Added to favorites",
          duration: 3000,
          action: <ToastAction altText="See all"><Link to={`/favorites`}> See all</Link></ToastAction>,
        })
      } else {
        cpyFavorites.splice(index, 1);
        toast({
          description: "Removed from favorites",
        })
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
