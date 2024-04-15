import Navbar from "./Navbar";
import Search from "./Search";

function Header() {
  return (
    <header>
      <div className="container flex justify-between">
        <h1>FoodRecipes</h1>
        <Search />
        <Navbar />
      </div>
    </header>
  );
}

export default Header;
