import { useContext, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { GlobalStateContext } from "src/contexts/GlobalState";
import CardsList from "components/common/CardsList";
import Pagination from "components/common/Pagination";
import Filters from "components/layout/Filters";

function Archive() {
  const {
    recipes,
    setRecipes,
    loading,
    setLoading,
    error,
    setError,
    getPageRecipes,
  } = useContext(GlobalStateContext);

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
        setError("");
      } else {
        setError("Nothing Found");
        setRecipes([]);
      }
    } catch (e) {
      setLoading(false);
      console.log(e);
    }
  }

  useEffect(() => {
    if (s && s !== "") {
      console.log("searching for", s);
      handleSearch(s);
    }
  }, [s]);

  const paginatedRecipes = getPageRecipes();
  
  return (
    <div className="z-container">
      <Filters />
      <CardsList list={paginatedRecipes} error={error} loading={loading} />
      <Pagination />
    </div>
  );
}

export default Archive;
