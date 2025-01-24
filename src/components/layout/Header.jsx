import Navbar from "components/layout/Navbar";
import Search from "components/common/Search";
import Logo from "components/ui/Logo";
import Container from "components/common/Container";
import MobileMenu from "components/layout/MobileMenu";

function Header() {
  return (
    <Container
      className="flex flex-col lg:flex-row justify-between items-center my-4 gap-4 "
      Element="header"
    >
      <div className="flex items-center justify-between w-full lg:w-auto">
        <Logo />
        <MobileMenu />
      </div>
      <Navbar />
      <Search />
    </Container>
  );
}

export default Header;
