import { useContext, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { GlobalStateContext } from "../contexts/GlobalState";
import CardsList from "./CardsList"
import Pagination from "./Pagination";

function Home() {
  const { recipes, setRecipes, loading, setLoading, error, setError , getPageRecipes} =
    useContext(GlobalStateContext);

  return (
    <>
      <h1>Landing</h1>

    </>
  );
}

export default Home;
