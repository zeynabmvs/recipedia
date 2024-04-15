import { useContext } from "react";
import { ThreeDots } from "react-loader-spinner";
import { useParams } from "react-router-dom";
import Error from "../components/Error";
import { GlobalStateContext } from "../contexts/GlobalState";
import useFetch from "../hooks/useFetch";

function Details() {
  const { id } = useParams();
  const { isFavorite, handleFavorite } = useContext(GlobalStateContext);
  let url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`;
  const { data, error, pending } = useFetch(url);

  const ingrediants = [];
  const recipeDetail = data?.meals[0];

  for (let i = 1; i <= 20; i++) {
    let keyIngredient = "strIngredient" + String(i);
    let keyMeasure = "strMeasure" + String(i);

    let ingredient = recipeDetail?.[keyIngredient];
    let measure = recipeDetail?.[keyMeasure];

    if (!ingredient) {
      break;
    }
    ingrediants.push({
      ingredient: ingredient,
      measure: measure,
    });
  }

  if (error) {
    return <Error message={error} />;
  }
  return pending ? (
    <ThreeDots
      visible={true}
      height="80"
      width="80"
      color="#4fa94d"
      radius="9"
      ariaLabel="three-dots-loading"
      wrapperStyle={{}}
      wrapperClass="justify-center items-center p-20"
    />
  ) : (
    <div className="flex gap-8 items-start">
      <div className="basis-1/3 flex justify-center">
        <img
          src={recipeDetail?.strMealThumb}
          className="block w-full rounded-lg"
        ></img>
      </div>
      <div className="basis-2/3 flex flex-col gap-4">
        <div className="flex justify-between">
          <button onClick={() => handleFavorite(recipeDetail)}>
            {isFavorite(recipeDetail?.idMeal) ? "Remove from favorites" : "Add to Favorite"}{" "}
          </button>
        </div>
        <h1 className="text-2xl">{recipeDetail?.strMeal}</h1>
        <h3 className="font-bold ">Ingredients</h3>
        <ul>
          {ingrediants.map((item, index) => (
            <li key={index}>
              {item.ingredient}: {item.measure}
            </li>
          ))}
        </ul>

        <h3 className="font-bold ">Insructions</h3>
        <p>{recipeDetail?.strInstructions}</p>
        <h3 className="font-bold ">Category</h3>
        <a href={`/category/${recipeDetail?.strCategory}`} className="link">
          {recipeDetail?.strCategory}
        </a>
        <h3 className="font-bold ">Area</h3>
        <a href={`/area/${recipeDetail?.strArea}`} className="link">
          {recipeDetail?.strArea}
        </a>
      </div>
    </div>
  );
}

export default Details;
