import { Link } from "react-router-dom";

function Card({ recipe }) {
  return (
    <div className="recipe-item group border border-slate-500 rounded-md bg-white/75 shadow-lg">
      <div className="flex justify-center items-center ">
        <img
          src={recipe?.strMealThumb}
          className="w-full block rounded-tr-md rounded-tl-md"
        ></img>
      </div>
      <div className="p-4 ">
        <h1 className="truncate block mb-3">{recipe?.strMeal}</h1>
        <Link to={`/recipe/${recipe?.idMeal}`} className="tracking-wider link">
          View details
        </Link>
      </div>
    </div>
  );
}

export default Card;
