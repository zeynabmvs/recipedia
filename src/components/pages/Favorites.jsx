import CardsList from "components/common/CardsList";
import useFavorites from "src/hooks/useFavorites";
import Container from "components/common/Container";

function Favorites() {
  const { favorites } = useFavorites();

  return (
    <Container>
      <h1 className="mb-6 text-body-lg">My favorite recipes</h1>
      <CardsList list={favorites} className="mb-40" />
    </Container>
  );
}

export default Favorites;
