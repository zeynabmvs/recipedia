import { motion } from "framer-motion";
import Card from "components/common/Card";
import Error from "components/common/Error";
import Loading from "components/ui/Loading";
import { DEFAULT_PER_PAGE } from "src/data";

// use count prop with caution, if set different than DEFAULT_PER_PAGE it may lead to miscalculation in pagination
function CardsList({
  list,
  error = "",
  loading = false,
  className = "",
  count = DEFAULT_PER_PAGE,
}) {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (index) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: index * 0.1,
        duration: 0.75,
        type: "spring",
      },
    }),
  };

  if (loading) {
    return <Loading />;
  }
  if (error && error !== "") {
    return <Error message={error} />;
  }

  return Array.isArray(list) && list.length > 0 ? (
    <div
      className={` ${className} grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8 `}
    >
      {list.slice(0, count).map((item, index) => (
        <motion.div
          key={index}
          custom={index}
          variants={cardVariants}
          initial="hidden"
          animate="visible"
        >
          <Card recipe={item} />
        </motion.div>
      ))}
    </div>
  ) : (
    <p className="text-center py-10">Nothing Found...</p>
  );
}

export default CardsList;
