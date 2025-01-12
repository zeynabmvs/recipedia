import { useParams } from "react-router-dom";
import CardsList from "components/CardsList";
import { useContext, useEffect } from "react";
import { GlobalStateContext } from "src/contexts/GlobalState";
import Pagination from "components/Pagination";

function Area() {
  const { name } = useParams();
  const {setArea, getPageRecipes, loading, error, recipes} = useContext(GlobalStateContext)

  useEffect(()=>{
    setArea(name)
  }, [name])

  const paginatedRecipes = getPageRecipes();

  return (
    <>
      <h1 className="mb-6">Search based on area: {name}</h1>
      <CardsList list={paginatedRecipes} loading={loading} error={error} resultsLength={recipes.length} />
      <Pagination />

    </>
  );
}

export default Area;
