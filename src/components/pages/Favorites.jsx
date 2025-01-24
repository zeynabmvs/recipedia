import CardsList from "components/common/CardsList";
import useFavorites from "src/hooks/useFavorites";
import Container from "components/common/Container";
import Pagination from "../common/Pagination";
import usePagination from "src/hooks/usePagination";

function Favorites() {
  const { favorites } = useFavorites();
  const perPage = 12;

  const { paginatedList, currentPage, handlePageChange } = usePagination(
    favorites,
    perPage
  );

  return (
    <Container className="mb-40 pt-10 lg:pt-20">
      <h1 className="mb-6 text-display-3">My favorite recipes</h1>
      <CardsList list={paginatedList} />
      <Pagination
        list={favorites}
        perPage={perPage}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
    </Container>
  );
}

export default Favorites;
