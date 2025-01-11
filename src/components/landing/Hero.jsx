import Button from "../Button";
import Testomonial from "./Testomonial";
import { testimonialData } from "../../data";

const Hero = () => {
  return (
    <>
      <div className="flex justify-center items-center flex-col-reverse md:flex-row mb-8 relative">
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
        <img src="/hero-dish.png" alt="" className="w-[55%] scale-125" />
        {testimonialData.map((item) => (
          <Testomonial key={item.username} testomonial={item} className="hidden md:flex" />
        ))}
      </div>
    </>
  );
};

export default Hero;
