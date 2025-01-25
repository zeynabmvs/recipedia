import { Link } from "react-router-dom";

function Card({ recipe }) {
  return (
    <div className="recipe-item group relative rounded-2xl bg-white/85 shadow-card-1 overflow-hidden">
      <Link
        to={`/recipe/${recipe?.idMeal}`}
        className="flex justify-center items-center overflow-hidden"
      >
        <img
          src={recipe?.strMealThumb}
          className="w-full block rounded-tr-md rounded-tl-md h-full object-cover hover:scale-105 duration-200"
        ></img>
        {/* <div className="recipe-card-meta bg-white/75 text-secondary flex justify-around items-center">
          <span>{recipe.strCategory}</span>
          <span>{recipe.strArea}</span>
        </div> */}
        <div className="p-2 md:p-4 absolute bottom-0 left-0 w-full bg-white/85">
          <h1 className="block font-medium text-body-lg">
            {recipe?.strMeal}
          </h1>
          <span className="tracking-wider text-primary underline underline-offset-2 text-body-sm">
            See details
          </span>
        </div>
      </Link>
    </div>
  );
}

export default Card;
