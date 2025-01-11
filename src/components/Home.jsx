import CtaSection from "./landing/cta";
import Discover from "./landing/Discover";
import Hero from "./landing/Hero";
import About from "./landing/About";

function Home() {
  return (
    <div className="flex flex-col gap-40">
      <Hero />
      <Discover />
      <About />
      <CtaSection />
    </div>
  );
}

export default Home;
