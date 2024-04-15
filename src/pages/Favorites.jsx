import { useContext } from "react";
import CardList from "../components/CardList";
import { GlobalStateContext } from "../contexts/GlobalState";

function Favorites() {
  const { favorites } = useContext(GlobalStateContext);
  console.log(favorites)
  
  return (
    <>
      <h1 className="mb-6">Favorites</h1>
      <CardList recipes={favorites} />
    </>
  );
}

export default Favorites;
