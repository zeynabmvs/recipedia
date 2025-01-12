import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import CardsList from "components/common/CardsList";
import { GlobalStateContext } from "src/contexts/GlobalState";
import Pagination from "components/common/Pagination";

function Category() {
  const { name } = useParams();
  const { setCategory, getPageRecipes, loading, error, recipes } =
    useContext(GlobalStateContext);

  useEffect(() => {
    setCategory(name);
  }, [name]);

  const paginatedRecipes = getPageRecipes();

  return (
    <>
      <h1 className="mb-6">Search based on category: {name}</h1>
      <CardsList
        list={paginatedRecipes}
        loading={loading}
        error={error}
        resultsLength={recipes.length}
      />
      <Pagination />

    </>
  );
}

export default Category;