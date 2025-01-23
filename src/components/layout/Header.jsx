import Navbar from "components/layout/Navbar";
import Search from "components/common/Search";
import Logo from "components/ui/Logo";
import Container from "components/common/Container";

function Header() {
  return (
    <Container
      className="flex flex-col md:flex-row justify-between items-center my-4 gap-4 "
      Element="header"
    >
      <Logo />
      <Navbar />
      <Search />
    </Container>
  );
}

export default Header;
