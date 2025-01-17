import Button from "src/components/ui/Button";
import TestomonialCard from "src/components/common/TestomonialCard";
import { testimonialData } from "src/data";
import { motion } from "framer-motion";

const cardAnimation = {
  initial: { opacity: 0, y: 0},
  inView: {
    opacity: 1,
    y: -170,
    transition: { duration: 0.3, ease: "easeOut", delay: 0.5 },
  },
};

const Hero = () => {
  return (
    <>
      <section className="z-container flex justify-center items-center flex-col-reverse lg:flex-row relative lg:pt-10">
        <div className="space-y-8 text-center lg:text-left w-[58%]">
          <h1 className="font-bold text-display-1">
            Cooking Made Fun and Easy: Unleash Your Inner Chef
          </h1>
          <p className="text-gray-500 lg:w-10/12 text-body-lg">
            Discover more than 10,000 recipes in your hand with the best recipe.
            Help you to find the easiest way to cook.
          </p>
          <Button label="Explore recipes" to={"/recipes"} />
        </div>
        <motion.div className="relative">
          <img src="/hero-dish.png" alt="" />
          <motion.div
            initial="initial"
            animate="inView"
            variants={cardAnimation}
            className="absolute flex gap-40 lg:gap-20 justify-center lg:justify-start w-full lg:w-auto"
            viewport={{ once: true }}
          >
            {testimonialData.map((item) => (
              <TestomonialCard
                key={item.username}
                testomonial={item}
                className="hidden md:flex"
              />
            ))}
          </motion.div>
        </motion.div>
      </section>
    </>
  );
};

export default Hero;
