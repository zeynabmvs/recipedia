import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const CategoryCard = ({ category }) => {
  return (
    <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.8 }}>
      <Link
        to={`/recipes?category=${category.strCategory}`}
        key={category.idCategory}
      >
        <article
          key={category.idCategory}
          className="category relative flex flex-col justify-center items-center text-center bg-white shadow-card-1 p-4 rounded-2xl"
        >
          <img src={category.strCategoryThumb} alt={category.strCategory} />
          <h3 className="font-medium mt-4 text-body-lg">
            {category.strCategory}
          </h3>
        </article>
      </Link>
    </motion.div>
  );
};

export default CategoryCard;
