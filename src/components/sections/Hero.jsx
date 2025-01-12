import Button from "src/components/ui/Button";
import Testomonial from "src/components/common/TestomonialCard";
import { testimonialData } from "src/data";

const Hero = () => {
  return (
    <>
      <section className="container flex justify-center items-center flex-col-reverse md:flex-row relative">
        <div className="space-y-8">
          <h1 className="text-6xl font-bold">
            Cooking Made Fun and Easy: Unleash Your Inner Chef
          </h1>
          <p className="text-gray-500 w-10/12">
            Discover more than 10,000 recipes in your hand with the best recipe.
            Help you to find the easiest way to cook.
          </p>
          <Button
            label="Explore recipes"
            to={'/recipes'}
          />
        </div>
        <img src="/hero-dish.png" alt="" className="" />
        {testimonialData.map((item) => (
          <Testomonial key={item.username} testomonial={item} className="hidden md:flex" />
        ))}
      </section>
    </>
  );
};

export default Hero;