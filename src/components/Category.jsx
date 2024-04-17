import { useParams } from "react-router-dom";
import CardsList from "../components/CardsList";
import useFetch from "../hooks/useFetch";

function Category() {
  const { name } = useParams();
  let url = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${name}`;
  const {data, error, pending} = useFetch(url);

  const recipeList = data?.meals;

  return (
    <>
      <h1 className="mb-6">Result for category: {name}</h1>
      <CardsList list={recipeList} error={error} loading={pending} />

    </>
  );
}

export default Category;
