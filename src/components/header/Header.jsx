import Navbar from "./Navbar";
import Search from "./Search";

function Header() {
  return (
    <header>
      <div className="container flex justify-between h-40 items-center">
        <h1 className="text-2xl font-extrabold">FoodRecipes</h1>
        <Search />
        <Navbar />
      </div>
    </header>
  );
}

export default Header;
