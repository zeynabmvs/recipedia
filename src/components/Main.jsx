import { Outlet } from "react-router-dom";
import Footer from "components/Footer";
import Header from "components/header/Header";

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
