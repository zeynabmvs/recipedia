import { useContext, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { GlobalStateContext } from "src/contexts/GlobalState";
import CardsList from "components/common/CardsList";
import Pagination from "components/common/Pagination";
import Filters from "components/layout/Filters";
import Container from "components/common/Container";

function Archive() {
  const { loading, error, getPageRecipes } = useContext(GlobalStateContext);

  const { setRecipesFilter } = useContext(GlobalStateContext);

  const [searchParams, setSearchParams] = useSearchParams();

  const s = searchParams.get("s");
  const categoryParam = searchParams.get("category");
  const areaParam = searchParams.get("area");

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
    // setSearchParams({});
  }, [categoryParam]);

  const paginatedRecipes = getPageRecipes();

  return (
    <Container>
      <Filters />
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
