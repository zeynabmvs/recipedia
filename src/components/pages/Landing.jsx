import CtaSection from "components/sections/CtaSection";
import Discover from "components/sections/Discover";
import Hero from "components/sections/Hero";
import About from "components/sections/About";
import Categories from "components/sections/Categories";

function LandingPage() {
  return (
    <div className="flex flex-col gap-40">
      <Hero />
      <Discover />
      <About />
      <Categories />
      <CtaSection />
    </div>
  );
}

export default LandingPage;