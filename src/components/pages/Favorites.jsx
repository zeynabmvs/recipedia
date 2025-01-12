import { useContext } from "react";
import CardsList from "components/common/CardsList";
import { GlobalStateContext } from "src/contexts/GlobalState";

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
