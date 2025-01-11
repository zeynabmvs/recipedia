import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="hidden lg:block">
      <ul className="flex gap-4 md:gap-8">
        <li>
          <NavLink to="/" className={({ isActive }) => isActive ? 'link-active': 'link'}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/recipes" className={({ isActive }) => isActive ? 'link-active': 'link'}>
            Recipes
          </NavLink>
        </li>
        <li>
          <NavLink to="/favorites" className={({ isActive }) => isActive ? 'link-active': 'link'}>
            Favorites
          </NavLink>
        </li>
        <li>
          <NavLink to="#" className='link'>
            About us
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
