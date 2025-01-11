import { useContext, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { GlobalStateContext } from "../contexts/GlobalState";
import CardsList from "./CardsList"
import Pagination from "./Pagination";
import CtaSection from "./landing/cta";

function Home() {
  const { recipes, setRecipes, loading, setLoading, error, setError , getPageRecipes} =
    useContext(GlobalStateContext);

  return (
    <>
      <CtaSection />

    </>
  );
}

export default Home;
