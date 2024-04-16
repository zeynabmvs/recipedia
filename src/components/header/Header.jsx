import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Search from "./Search";

function Header() {
  return (
    <header>
      <div className="container flex justify-between h-40 items-center">
        <h1 className="text-2xl font-extrabold">
          <Link to="/home">Food<span className="text-primary">Recipes</span></Link>
        </h1>
        {/* <Search /> */}
        <Navbar />
      </div>
    </header>
  );
}

export default Header;
