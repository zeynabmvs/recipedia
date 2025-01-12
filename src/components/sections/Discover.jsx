import Button from "src/components/ui/Button";
import { useContext } from "react";
import { GlobalStateContext } from "src/contexts/GlobalState";
import CardsList from "src/components/common/CardsList";

const Discover = () => {
  const { loading, error, getPageRecipes } = useContext(GlobalStateContext);

  const paginatedRecipes = getPageRecipes();
  console.log(paginatedRecipes);
  return (
    <section className="discover container">
      <div
        className="flex items-center justify-between mb-6 md:mb-8"
        id="discover-header"
      >
        <div>
          <h2 className="text-2xl font-medium">Discover, Create, Share</h2>
          <p className="text-sm text-gray-500">
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
    </section>
  );
};

export default Discover;
