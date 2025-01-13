import useFetch from "src/hooks/useFetch";
import Loading from "components/ui/Loading";
import CategoryCard from "components/common/CategoryCard";
import { CATEGORIES_DETAILS_API } from "src/data";

const Categories = () => {
  const { data, error, pending } = useFetch(CATEGORIES_DETAILS_API);

  if (!data || pending) return <Loading />;
  if (error) return null;

  return (
    <section className="categories z-container flex flex-col items-center justify-center gap-6 mb-20">
      <h3 className="font-medium text-display-3 mb-2">
        Browse through Categories
      </h3>
      <div className="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-5 grid-rows-2 gap-6">
        {data?.categories.slice(0, 10).map((category) => (
          <CategoryCard category={category} key={category.idCategory} />
        ))}
      </div>
    </section>
  );
};

export default Categories;
