import { useParams } from "react-router-dom";
import CardList from "./CardList";
import useFetch from "../hooks/useFetch";

function Area() {
  const { name } = useParams();
  let url = `https://www.themealdb.com/api/json/v1/1/filter.php?a=${name}`;
  const { data, error, pending } = useFetch(url);

  const recipeList = data?.meals;

  return (
    <>
      <h1 className="mb-6">Search based on area: {name}</h1>
      <CardList recipes={recipeList} error={error} loading={pending} />
    </>
  );
}

export default Area;
