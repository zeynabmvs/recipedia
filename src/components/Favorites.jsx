import { useContext } from "react";
import CardList from "./CardList";
import { GlobalStateContext } from "../contexts/GlobalState";

function Favorites() {
  const { favorites } = useContext(GlobalStateContext);

  return (
    <>
      <h1 className="mb-6">Favorites</h1>
      <CardList recipes={favorites} />
    </>
  );
}

export default Favorites;
