import { Outlet } from "react-router-dom";
import Footer from "components/layout/Footer";
import Header from "components/layout/Header";
import CtaSection from "components/sections/CtaSection";

function Main() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
        <CtaSection />
      </main>
      <Footer />
    </>
  );
}

export default Main;
