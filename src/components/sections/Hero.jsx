import Button from "src/components/ui/Button";
import TestomonialCard from "src/components/common/TestomonialCard";
import { testimonialData } from "src/data";

const Hero = () => {
  return (
    <>
      <section className="z-container flex justify-center items-center flex-col-reverse lg:flex-row relative lg:pt-20">
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
        <div className="relative">
          <img src="/hero-dish.png" alt="" />
          {testimonialData.map((item) => (
            <TestomonialCard
              key={item.username}
              testomonial={item}
              className="hidden md:flex"
            />
          ))}
        </div>
      </section>
    </>
  );
};

export default Hero;
