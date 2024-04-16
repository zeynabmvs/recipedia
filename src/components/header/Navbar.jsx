import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <ul className="flex gap-4">
        <li>
          <NavLink to="/home" className={({ isActive }) => isActive ? 'text-primary link': 'link'}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/favorites" className={({ isActive }) => isActive ? 'text-primary link': 'link'}>
            Favorites
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
