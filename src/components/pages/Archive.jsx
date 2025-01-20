import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import CardsList from "components/common/CardsList";
import Pagination from "components/common/Pagination";
import Filters from "components/layout/Filters";
import Container from "components/common/Container";
import useRecipes from "src/hooks/useRecipes";

function Archive() {
  const { loading, error, recipes, recipesFilter, setRecipesFilter } =
    useRecipes();
  const [searchParams, setSearchParams] = useSearchParams();

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
    }
  }, [searchParams, setRecipesFilter]);

  return (
    <Container>
      <Filters />
      <h1 className="mb-4">
        Showing results for {recipesFilter?.type} : {recipesFilter?.value}
      </h1>
      <CardsList
        list={recipes}
        error={error}
        loading={loading}
        className="mb-20"
      />
      {/* <Pagination /> */}
    </Container>
  );
}

export default Archive;
