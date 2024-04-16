import { Link } from "react-router-dom";

function Card({ recipe }) {
  return (
    <div className="recipe-item group border border-slate-500 rounded-md bg-white/75 shadow-lg ">
      <Link to={`/recipe/${recipe?.idMeal}`}  className="flex justify-center items-center overflow-hidden">
        <img
          src={recipe?.strMealThumb}
          className="w-full block rounded-tr-md rounded-tl-md h-full object-cover hover:scale-105 duration-150"
        ></img>
      </Link>
      <div className="p-4 ">
        <h1 className="truncate block mb-3 text-primary font-semibold">{recipe?.strMeal}</h1>
        <Link to={`/recipe/${recipe?.idMeal}`} className="tracking-wider link">
          View details
        </Link>
      </div>
    </div>
  );
}

export default Card;
