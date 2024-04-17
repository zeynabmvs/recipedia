import { useContext } from "react";
import CardsList from "./CardsList";
import { GlobalStateContext } from "../contexts/GlobalState";

function Favorites() {
  const { favorites } = useContext(GlobalStateContext);

  return (
    <>
      <h1 className="mb-6">Favorites</h1>
      <CardsList list={favorites} />
    </>
  );
}

export default Favorites;
