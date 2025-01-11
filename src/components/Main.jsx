import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./header/Header";

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
