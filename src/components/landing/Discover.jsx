import Button from "../Button";
import { useContext, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { GlobalStateContext } from "../../contexts/GlobalState";
import Card from "../Card";
import CardsList from "../CardsList";

const Discover = () => {
  const {
    recipes,
    setRecipes,
    loading,
    setLoading,
    error,
    setError,
    getPageRecipes,
  } = useContext(GlobalStateContext);

  const paginatedRecipes = getPageRecipes();
  console.log(paginatedRecipes)
  return (  
    <section className="discover mb-20">
      <div
        className="flex items-center justify-between mb-6 md:mb-8"
        id="discover-header"
      >
        <div>
          <h2 className="text-text-1 text-2xl font-medium">
            Discover, Create, Share
          </h2>
          <p className="text-text-2 text-sm">
            Check our most popular recipes of this week
          </p>
        </div>
        <Button label="See all" onClick={() => console.elog("see all")} />
      </div>

      <CardsList
        list={paginatedRecipes}
        error={error}
        loading={loading}
        resultsLength={6}
      />

      {/* <div >
            {recipes.map((item) => (
                <Card recipe={item} key={item.idMeal}/>
            ))}
        </div> */}
    </section>
  );
};

export default Discover;
