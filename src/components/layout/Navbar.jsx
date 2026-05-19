import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";

import ThemeToggle from "../ui/ThemeToggle.jsx";
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="navbar">
      <div className="container navbar-container">
        <NavLink to="/" className="logo" onClick={closeMenu}>
          Syed Numan Raza
        </NavLink>

        <nav className={`nav-links ${isOpen ? "nav-open" : ""}`}>
          <NavLink to="/" onClick={closeMenu}>
            Home
          </NavLink>
          <NavLink to="/about" onClick={closeMenu}>
            About
          </NavLink>
          <NavLink to="/research" onClick={closeMenu}>
            Research
          </NavLink>
          <NavLink to="/projects" onClick={closeMenu}>
            Projects
          </NavLink>
          <NavLink to="/publications" onClick={closeMenu}>
            Publications
          </NavLink>
          <NavLink to="/experience" onClick={closeMenu}>
            Experience
          </NavLink>
          <NavLink to="/skills" onClick={closeMenu}>
            Skills
          </NavLink>
          <NavLink to="/cv" onClick={closeMenu}>
            CV
          </NavLink>
          <NavLink to="/blog" onClick={closeMenu}>
            Blog
          </NavLink>
          <NavLink to="/contact" onClick={closeMenu}>
            Contact
          </NavLink>
        </nav>

        <div className="nav-actions">
          <ThemeToggle />

          <button
            className="menu-toggle"
            onClick={() => setIsOpen((prev) => !prev)}
            aria-label="Toggle navigation menu"
          >
            {isOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
