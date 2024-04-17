import { useParams } from "react-router-dom";
import CardsList from "./CardsList";
import { useContext, useEffect } from "react";
import { GlobalStateContext } from "../contexts/GlobalState";
import Pagination from "./Pagination";

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
