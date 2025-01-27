import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import CardsList from "components/common/CardsList";
import Pagination from "components/common/Pagination";
import Filters from "components/layout/Filters";
import Container from "components/common/Container";
import useRecipes from "src/hooks/useRecipes";
import usePagination from "src/hooks/usePagination";

function Archive() {
  const { loading, error, recipes, recipesFilter, setRecipesFilter } =
    useRecipes();
  let { state } = useLocation();

  const perPage = 24;

  const { paginatedList, currentPage, handlePageChange } = usePagination(
    recipes,
    perPage
  );

  const handleFilterChange = (newValue) => {
    setRecipesFilter(newValue);
    handlePageChange(1);
  };

  useEffect(() => {
    if (state?.type && state?.value) {
      setRecipesFilter({ type: state.type, value: state.value });
    }
  }, [state, setRecipesFilter]);

  return (
    <Container className="pt-10 lg:pt-20">
      <Filters
        currentFilter={recipesFilter}
        onFilterChange={handleFilterChange}
      />
      <ResultInfo
        loading={loading}
        error={error}
        length={recipes?.length}
        filterType={recipesFilter?.type}
        filterValue={recipesFilter?.value}
      />
      <CardsList
        list={paginatedList}
        error={error}
        loading={loading}
        className="mb-10 lg:mb-20"
        count={perPage}
      />
      <Pagination
        currentPage={currentPage}
        onPageChange={handlePageChange}
        list={recipes}
        perPage={perPage}
      />
    </Container>
  );
}

const ResultInfo = ({ loading, error, length = 0, filterType, filterValue }) => {
  const filterValueDisplay = filterValue?.split("_").join(" ");

  if (error ) return " ";

  return (
    <h1 className="mb-4">
      {loading ? 'Searching for ' : `Found ${length} results for ` } {filterType} : {filterValueDisplay}
    </h1>
  );
};

export default Archive;
