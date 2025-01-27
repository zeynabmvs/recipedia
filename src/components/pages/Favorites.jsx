import CardsList from "components/common/CardsList";
import useFavorites from "src/hooks/useFavorites";
import Container from "components/common/Container";
import Pagination from "components/common/Pagination";
import usePagination from "src/hooks/usePagination";
import TitleBox from "components/common/TitleBox";

function Favorites() {
  const { favorites } = useFavorites();
  const perPage = 12;

  const { paginatedList, currentPage, handlePageChange } = usePagination(
    favorites,
    perPage
  );

  return (
    <Container className="mb-40 pt-10 lg:pt-20">
      <TitleBox Element='h1'>My favorite recipes</TitleBox>
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
