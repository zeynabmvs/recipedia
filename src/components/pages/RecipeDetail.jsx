import { useParams } from "react-router-dom";
import Error from "components/common/Error";
import useFetch from "src/hooks/useFetch";
import Heart from "components/ui/Heart";
import Loading from "components/ui/Loading";
import { RECIPE_DETAIL_API } from "src/data";
import useFavorites from "src/hooks/useFavorites";
import Container from "components/common/Container";
import {
  RECIPES_BY_CATEGORY_API,
  FILTER_BY_INGREDIENT_API,
  RECIPES_BY_AREA_API,
} from "src/data";
import CardsList from "components/common/CardsList";
import TitleBox from "components/common/TitleBox";

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
    <Container className="flex flex-col  gap-4 mb-40 pt-10 lg:pt-20">
      <div className="flex flex-col-reverse md:flex-row gap-8 items-start mb-8">
        <DetailsSection
          recipeDetail={recipeDetail}
          ingredients={ingredients}
          isFavorite={isFavorite}
          handleFavorite={handleFavorite}
        />
        <ImageSection imgUrl={recipeDetail?.strMealThumb} />
      </div>
      <Instructions instructions={recipeDetail?.strInstructions} />
      <TagsList tagsList={recipeDetail?.strTags} />
      {/* <RelatedRecipes relatedBy={recipeDetail?.strCategory} /> */}
    </Container>
  );
}

// Stateless component for the image section
const ImageSection = ({ imgUrl }) => {
  return (
    <div className="basis-1/3 flex justify-center mx-auto md:mx-0">
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

const TagsList = ({ tagsList }) => {
  if (!tagsList) return null;

  return (
    <h3 className="font-bold">
      Tags: <span className="font-light">{tagsList}</span>
    </h3>
  );
};

const RelatedRecipes = ({ filterType = "category", relatedBy }) => {
  const url = () => {
    if (filterType === "category") {
      return RECIPES_BY_CATEGORY_API + relatedBy;
    } else if (filterType === "area") {
      return RECIPES_BY_AREA_API + relatedBy;
    } else if (filterType === "mainIngredient") {
      return FILTER_BY_INGREDIENT_API + relatedBy;
    }
  };

  const { data, pending, error } = useFetch(url());

  const list = data?.meals;
  if (error) return <Error message={error} />;
  if (pending) return <Loading />;
  if (list?.length === 0) return <p className="text-center">Nothing found</p>;

  return (
    <>
      <TitleBox Element="h2">Related recipes</TitleBox>
      <CardsList list={list} error={error} loading={pending} count={4} />
    </>
  );
};

export default RecipeDetail;
