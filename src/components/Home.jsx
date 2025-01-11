import { useContext, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { GlobalStateContext } from "../contexts/GlobalState";
import CtaSection from "./landing/cta";
import Discover from "./landing/Discover";
import Hero from "./landing/Hero";

function Home() {


  return (
    <>
      <Hero />
      <Discover />
      <CtaSection />
    </>
  );
}

export default Home;
