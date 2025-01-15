import { Outlet } from "react-router-dom";
import Container from "components/common/Container";

function WithSidebarLayout() {
  return (
    <Container className="flex flex-col-reverse md:flex-row gap-4 md:gap-6 pt-10">
      <section className="basis-4/5">{<Outlet />}</section>
    </Container>
  );
}

export default WithSidebarLayout;
