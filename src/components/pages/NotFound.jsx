import { Link } from "react-router-dom";
import Container from "components/common/Container";

const NotFound = () => {
  return (
    <Container className="min-h-full text-center py-20 md:py-40">
      <h1 className="text-display-1 mb-4">404 - Page Not Found</h1>
      <p className="text-body-lg">
        Sorry, the page you are looking for could not be found.{" "}
        <Link to="/recipes" className="link text-primary">
          Browse recipes
        </Link>
      </p>
    </Container>
  );
};

export default NotFound;
