import { useContext, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { GlobalStateContext } from "../contexts/GlobalState";
import CardsList from "./CardsList"
import Pagination from "./Pagination";

function Home() {
  const { recipes, setRecipes, loading, setLoading, error, setError , getPageRecipes} =
    useContext(GlobalStateContext);

  const [searchParams, setSearchParams] = useSearchParams();
  const s = searchParams.get("s");

  async function handleSearch(s) {
    try {
      const res = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${s}`
      );
      const data = await res.json();
      // const data = res;
      if (data?.meals) {
        setRecipes(data?.meals);
        setLoading(false);
        setError("")
      } else {
        setError("Nothing Found");
        setRecipes([]);
      }
    } catch (e) {
      setLoading(false);
      console.log(e);
    }
  }

  useEffect(()=> {
    if (s && s !== "") {
      console.log("searching for", s);
      handleSearch(s);
    }
  }, [s])
  
  const paginatedRecipes = getPageRecipes();
  return (
    <>
      <h1>Home</h1>
      <CardsList list={paginatedRecipes} error={error} loading={loading} resultsLength={0} />
      <Pagination />

    </>
  );
}

export default Home;
