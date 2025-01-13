import { useContext, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { GlobalStateContext } from "src/contexts/GlobalState";
import CardsList from "components/common/CardsList";
import Pagination from "components/common/Pagination";
import Filters from "components/layout/Filters";

function Archive() {
  const { loading, error, getPageRecipes, setCategory, setSearchQuery } =
    useContext(GlobalStateContext);

  const [searchParams, setSearchParams] = useSearchParams();

  const s = searchParams.get("s");
  const categoryParam = searchParams.get("category");
  const areaParam = searchParams.get("area");

  // Set search query from URL
  useEffect(() => {
    if (s) {
      setSearchQuery(s);
    }
  }, [s, setSearchQuery]);

  useEffect(() => {
    setCategory(categoryParam);
    // setSearchParams({});
  }, [categoryParam]);

  const paginatedRecipes = getPageRecipes();

  return (
    <div className="z-container">
      <Filters />
      <CardsList
        list={paginatedRecipes}
        error={error}
        loading={loading}
        className="mb-20"
      />
      <Pagination />
    </div>
  );
}

export default Archive;
