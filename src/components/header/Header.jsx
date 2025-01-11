import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Search from "./Search";
import Logo from "../Logo";

function Header() {
  return (
    <header>
      <div className="container flex flex-col md:flex-row justify-between items-center mt-4 gap-4 mb-8">
        <Logo />
        <Navbar />
        <Search />
      </div>
    </header>
  );
}

export default Header;
