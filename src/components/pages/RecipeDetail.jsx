import { useParams } from "react-router-dom";
import Error from "components/common/Error";
import useFetch from "src/hooks/useFetch";
import Heart from "components/ui/Heart";
import Loading from "components/ui/Loading";
import { RECIPE_DETAIL_API } from "src/data";
import useFavorites from "src/hooks/useFavorites";
import Container from "components/common/Container";

function RecipeDetail() {
  const { id } = useParams();
  const { isFavorite, handleFavorite } = useFavorites();
  const { data, error, pending } = useFetch(`${RECIPE_DETAIL_API}${id}`);

  const recipeDetail = data?.meals?.[0];

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

  const ingredients = getIngredientsData(recipeDetail);

  if (error) return <Error message={error} />;
  if (pending) return <Loading />;
  if (!recipeDetail)
    return <p className="text-center">Recipe Doesn&apos;t Exist</p>;

  return (
    <Container className="flex flex-col md:flex-row gap-8 items-start mb-40">
      <DetailsSection
        recipeDetail={recipeDetail}
        ingredients={ingredients}
        isFavorite={isFavorite}
        handleFavorite={handleFavorite}
      />
      <ImageSection imgUrl={recipeDetail?.strMealThumb} />
    </Container>
  );
}

// Stateless component for the image section
const ImageSection = ({ imgUrl }) => {
  return (
    <div className="basis-1/3 flex justify-center">
      <img src={imgUrl} className="block w-full rounded-lg"></img>
    </div>
  );
};

// Stateless component for the details section
const DetailsSection = ({
  recipeDetail,
  ingredients,
  isFavorite,
  handleFavorite,
}) => (
  <div className="basis-2/3 flex flex-col gap-4">
    <div className="flex justify-between">
      <button
        onClick={() => handleFavorite(recipeDetail)}
        className="group flex gap-2 items-center rounded-md"
      >
        <Heart isFavorite={isFavorite(recipeDetail?.idMeal)} />
      </button>
    </div>
    <h1 className="text-display-3">{recipeDetail?.strMeal}</h1>
    <CategoryArea
      category={recipeDetail?.strCategory}
      area={recipeDetail?.strArea}
    />
    <IngredientsList ingredients={ingredients} />
    <Instructions instructions={recipeDetail?.strInstructions} />
  </div>
);

// Stateless component for ingredients list
const IngredientsList = ({ ingredients }) => (
  <>
    <h3 className="font-medium">Ingredients</h3>
    <ul>
      {ingredients.map((item, index) => (
        <li key={index}>
          - {item.ingredient}: {item.measure}
        </li>
      ))}
    </ul>
  </>
);

// Stateless component for instructions
const Instructions = ({ instructions }) => (
  <>
    <h3 className="font-bold">Instructions</h3>
    <p>{instructions}</p>
  </>
);

// Stateless component for category and area
const CategoryArea = ({ category, area }) => (
  <div className="flex gap-2">
    <h3 className="font-bold">
      Category: <span className="font-light">{category}</span>
    </h3>
    <h3 className="font-bold">
      Area: <span className="font-light">{area}</span>
    </h3>
  </div>
);

export default RecipeDetail;
