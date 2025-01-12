import CtaSection from "components/landing/cta";
import Discover from "components/landing/Discover";
import Hero from "components/landing/Hero";
import About from "components/landing/About";

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
