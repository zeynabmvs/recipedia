import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <ul className="flex gap-4">
        <li>
          <NavLink to="/" className="link">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/favorites" className="link">
            Favorites
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
