import { Link } from "react-router-dom";
import useFetch from "src/hooks/useFetch";
import Loading from "components/ui/Loading";

const Categories = () => {
  const { data, error, pending } = useFetch(
    "https://www.themealdb.com/api/json/v1/1/categories.php"
  );

  if (!data || pending) return <Loading />;
  if (error) return null;

  return (
    <section className="categories container flex flex-col items-center justify-center gap-6">
      <h3 className="text-2xl font-medium">Browse through Categories</h3>
      <div className="grid grid-cols-5 grid-rows-2 gap-6">
        {data?.categories.slice(0, 10).map((category) => (
          <Link
            to={`/category/${category.strCategory}`}
            key={category.idCategory}
          >
            <article
              key={category.idCategory}
              className="category relative flex flex-col justify-center items-center text-center bg-white shadow-card p-4 rounded-2xl"
            >
              <img src={category.strCategoryThumb} alt={category.strCategory} />
              <h3 className="text-lg font-semibold mt-4">
                {category.strCategory}
              </h3>
            </article>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Categories;
