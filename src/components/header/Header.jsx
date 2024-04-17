import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Search from "./Search";

function Header() {
  return (
    <header>
      <div className="container flex flex-col md:flex-row justify-between h-40 items-center my-4">
        <h1 className="text-2xl font-extrabold">
          <Link to="/">Food<span className="text-primary">Recipes</span></Link>
        </h1>
        <Search />
        <Navbar />
      </div>
    </header>
  );
}

export default Header;
