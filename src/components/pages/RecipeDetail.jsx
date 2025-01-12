import { useContext } from "react";
import { useParams } from "react-router-dom";
import Error from "components/common/Error";
import { GlobalStateContext } from "src/contexts/GlobalState";
import useFetch from "src/hooks/useFetch";
import Heart from "components/ui/Heart";
import Loading from "components/ui/Loading";

function RecipeDetail() {
  const { id } = useParams();
  const { isFavorite, handleFavorite } = useContext(GlobalStateContext);
  let url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`;
  const { data, error, pending } = useFetch(url);

  const recipeDetail = data && data.meals && data.meals[0];
  console.log(recipeDetail)
  
  function getIngredientsData() {
    const ingrediants = [];

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
    return ingrediants;
  }

  if (error) {
    return <Error message={error} />;
  }
  return pending ? (
    <Loading />
  ) : ( recipeDetail ? 
    <div className="flex flex-col md:flex-row gap-8 items-start">
      <div className="basis-1/3 flex justify-center">
        <img
          src={recipeDetail?.strMealThumb}
          className="block w-full rounded-lg"
        ></img>
      </div>
      <div className="basis-2/3 flex flex-col gap-4">
        <div className="flex justify-between">
          <button onClick={() => handleFavorite(recipeDetail)} className="group flex gap-2 items-center rounded-md">
            <Heart isFavorite={isFavorite(recipeDetail?.idMeal)}/>
          </button>
        </div>
        <h1 className="">{recipeDetail?.strMeal}</h1>
        <h3 className="font-bold ">Ingredients</h3>
        <ul>
          {getIngredientsData().map((item, index) => (
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
    </div> : <p className="text-center">Recipe Doesn&apos;t Exist</p>
  );
}

export default RecipeDetail;
