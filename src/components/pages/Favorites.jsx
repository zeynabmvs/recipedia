import { useContext } from "react";
import CardsList from "components/common/CardsList";
// import { GlobalStateContext } from "src/contexts/GlobalState";
import { FavoritesContext } from "src/contexts/FavoritesContext";

function Favorites() {
  const { favorites } = useContext(FavoritesContext);

  return (
    <div className="z-container">
      <h1 className="mb-6">Favorites</h1>
      <CardsList list={favorites} className="mb-40"/>
    </div>
  );
}

export default Favorites;
