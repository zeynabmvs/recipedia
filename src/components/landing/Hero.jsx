import Button from "../Button";
import Testomonial from "../TestomonialCard";
import { testimonialData } from "../../data";

const Hero = () => {
  return (
    <>
      <section className="container flex justify-center items-center flex-col-reverse md:flex-row relative">
        <div>
          <h1 className="text-6xl font-bold pb-4 text-text-1">
            Cooking Made Fun and Easy: Unleash Your Inner Chef
          </h1>
          <p className="text-text-2 pb-5 w-10/12">
            Discover more than 10,000 recipes in your hand with the best recipe.
            Help you to find the easiest way to cook.
          </p>
          <Button
            label="Explore recipes"
            onClick={() => console.log("clicked btn")}
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
