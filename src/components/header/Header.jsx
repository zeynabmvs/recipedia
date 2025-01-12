import Navbar from "./Navbar";
import Search from "./Search";
import Logo from "components/Logo";

function Header() {
  return (
    <header className="container flex flex-col md:flex-row justify-between items-center my-4 gap-4">
      <Logo />
      <Navbar />
      <Search />
    </header>
  );
}

export default Header;
