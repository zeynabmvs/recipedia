import Button from "src/components/ui/Button";
import CardsList from "src/components/common/CardsList";
import useRecipes from "src/hooks/useRecipes";

const Discover = () => {
  const { loading, error, recipes } = useRecipes();

  return (
    <section className="discover z-container">
      <div
        className="flex items-center justify-between mb-6 md:mb-8"
        id="discover-header"
      >
        <div>
          <h2 className="font-medium text-display-3">
            Discover, Create, Share
          </h2>
          <p className="text-gray-500 text-body-base">
            Check our most popular recipes of this week
          </p>
        </div>
        <Button label="See all" to={"/recipes"} />
      </div>

      <CardsList list={recipes} error={error} loading={loading} count={8} />
    </section>
  );
};

export default Discover;
