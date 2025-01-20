import { useContext, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { GlobalStateContext } from "src/contexts/GlobalState";
import CardsList from "components/common/CardsList";
import Pagination from "components/common/Pagination";
import Filters from "components/layout/Filters";
import Container from "components/common/Container";

function Archive() {
  const { loading, error, getPageRecipes, recipesFilter, setRecipesFilter } =
    useContext(GlobalStateContext);

  const [searchParams] = useSearchParams();

  const s = searchParams.get("s");
  const categoryParam = searchParams.get("category");

  // Set search query from URL
  useEffect(() => {
    if (s) {
      setRecipesFilter({ type: "search", value: s });
    }
  }, [s]);

  useEffect(() => {
    if (categoryParam) {
      setRecipesFilter({ type: "category", value: categoryParam });
    }
  }, [categoryParam]);

  const paginatedRecipes = getPageRecipes();

  return (
    <Container>
      <Filters />
      <h1 className="mb-4">
        Showing results for {recipesFilter["type"]} : {recipesFilter["value"]}
      </h1>
      <CardsList
        list={paginatedRecipes}
        error={error}
        loading={loading}
        className="mb-20"
      />
      <Pagination />
    </Container>
  );
}

export default Archive;
