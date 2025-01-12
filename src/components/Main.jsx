import { Outlet } from "react-router-dom";
import Footer from "src/components/layout/Footer";
import Header from "src/components/layout/Header";

function Main() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default Main;
