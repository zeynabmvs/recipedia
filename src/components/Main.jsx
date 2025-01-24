import { Outlet } from "react-router-dom";
import Footer from "components/layout/Footer";
import Header from "components/layout/Header";
import CtaSection from "components/sections/CtaSection";
import { Toaster } from "components/ui/toaster";
import MobileMenu from "components/layout/MobileMenu";

function Main() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
        <CtaSection />
      </main>
      <Footer />
      <Toaster />
    </>
  );
}

export default Main;
