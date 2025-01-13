import CardsList from "components/common/CardsList";
import useFavorites from "src/hooks/useFavorites";

function Favorites() {
  const { favorites } = useFavorites();

  return (
    <div className="z-container">
      <h1 className="mb-6">Favorites</h1>
      <CardsList list={favorites} className="mb-40" />
    </div>
  );
}

export default Favorites;
