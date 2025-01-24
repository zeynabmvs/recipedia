import { useState } from "react";
import { HiMenu } from "react-icons/hi";
import { NavLink } from "react-router-dom";

const MobileMenu = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
    if (!menuOpen) {
      document.body.style.overflow = "hidden"; // Disable scrolling when menu is open
    } else {
      document.body.style.overflow = ""; // Re-enable scrolling when menu is closed
    }
  };

  return (
    <div className="lg:hidden">
      {/* Hamburger Menu */}
      <button
        className="left-3 top-3 z-10"
        onClick={toggleMenu}
        aria-label="Toggle Menu"
      >
        <HiMenu size={24} />
      </button>

      {/* Slide-in Menu */}
      <div
        className={`fixed top-0 left-0 w-[75%] h-full bg-gray-900 text-white z-40 transition-transform duration-500 ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Close Button (Optional, you can also use the hamburger) */}
        <button
          className="absolute top-4 right-4 p-2 text-white text-lg"
          onClick={toggleMenu}
        >
          ✕
        </button>

        {/* Menu Items */}
        <nav className="h-full flex items-center justify-center">
          <ul className="flex flex-col items-center justify-center  space-y-6">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "link-active" : "link"
                }
                onClick={toggleMenu}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/recipes"
                className={({ isActive }) =>
                  isActive ? "link-active" : "link"
                }
                onClick={toggleMenu}
              >
                Recipes
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/favorites"
                className={({ isActive }) =>
                  isActive ? "link-active" : "link"
                }
                onClick={toggleMenu}
              >
                Favorites
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default MobileMenu;
