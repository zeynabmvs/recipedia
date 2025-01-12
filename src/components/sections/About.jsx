import Button from "src/components/ui/Button";

const About = () => {
  return (
    <section className="about relative max-w-none w-full object-cover bg-cover bg-no-repeat bg-center bg-[url('/about-bg.png')] h-[567px]">
      <div className="bg-white absolute right-[20%] top-[35%] rounded-2xl p-8 pb-6 w-[300px] md:w-[400px] z-50">
        <h3 className="text-3xl font-medium mb-3">About us</h3>
        <p className="text-sm font-light mb-2">
        Our recipes are the heart and soul of our culinary community, and they reflect our commitment to providing you with memorable and delightful dining experiences.
        </p>
        <Button label="Learn More" to={'/#'} />
      </div>
      <div className="bg-white rounded-xl p-6 text-secondary w-fit absolute left-[13%] top-[75%] text-xs">
      50+ Quick Food Recipes <br/>
      That Easy To Do!
      </div>
      {/* <div className="overlay bg-white/30 absolute inset-0 z-10"></div> */}
    </section>
  );
};

export default About;
