import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import CardsList from "components/common/CardsList";
import Pagination from "components/common/Pagination";
import Filters from "components/layout/Filters";
import Container from "components/common/Container";
import useRecipes from "src/hooks/useRecipes";
import { DEFAULT_FILTER } from "src/data";
import usePagination from "src/hooks/usePagination";

function Archive() {
  const { loading, error, recipes, recipesFilter, setRecipesFilter } =
    useRecipes();

  const [searchParams, setSearchParams] = useSearchParams();
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
    // Extract individual query parameters
    const searchQuery = searchParams.get("s");
    const category = searchParams.get("category");
    const area = searchParams.get("area");

    // Determine the filter type and value based on query parameters
    if (searchQuery) {
      if (
        recipesFilter.type !== "search" ||
        recipesFilter.value !== searchQuery
      ) {
        setRecipesFilter({ type: "search", value: searchQuery });
      }
    } else if (category) {
      if (
        recipesFilter.type !== "category" ||
        recipesFilter.value !== category
      ) {
        setRecipesFilter({ type: "category", value: category });
      }
    } else if (area) {
      if (recipesFilter.type !== "area" || recipesFilter.value !== area) {
        setRecipesFilter({ type: "area", value: area });
      }
    } else if (recipesFilter?.type === "") {
      setRecipesFilter(DEFAULT_FILTER);
    }
  }, [searchParams, setRecipesFilter]);

  return (
    <Container className="pt-10 lg:pt-20">
      <Filters
        currentFilter={recipesFilter}
        onFilterChange={handleFilterChange}
      />
      <h1 className="mb-4">
        {!loading && !error
          ? `Found ${recipes?.length} results for ${recipesFilter?.type} : ${recipesFilter?.value}`
          : ""}
      </h1>
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

export default Archive;
