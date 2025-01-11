import { useContext, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { GlobalStateContext } from "../contexts/GlobalState";
import CtaSection from "./landing/cta";
import Button from "./Button";
import Hero from "./landing/Hero";

function Home() {
  const {
    recipes,
    setRecipes,
    loading,
    setLoading,
    error,
    setError,
    getPageRecipes,
  } = useContext(GlobalStateContext);

  return (
    <>
      <Hero />
      <CtaSection />
    </>
  );
}

export default Home;
