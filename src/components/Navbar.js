import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css"; // Optional: For custom styling
import RocketLogo from "../assets/logo/rocket.svg"; // Import the SVG logo
import { MenuOutlined, CloseOutlined } from "@ant-design/icons"; // Import icons for hamburger menu

const Navbar = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Hide Navbar on the landing page
  if (location.pathname === "/") return null;

  // Toggle menu visibility
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="navbar-container">
      {/* Hamburger Menu Icon (Left Side) */}
      <div className="menu-icon" onClick={toggleMenu}>
        {isMenuOpen ? <CloseOutlined /> : <MenuOutlined />}
      </div>

      {/* Logo (Right Side) */}
      <div className="logo-container">
        <Link to="/">
          <img
            src={RocketLogo}
            alt="Rocket Logo"
            style={{ width: "50px", height: "50px", cursor: "pointer" }}
          />
        </Link>
      </div>

      {/* Full-Screen Menu (Hidden by Default, Shown When Menu is Open) */}
      <div className={`full-screen-menu ${isMenuOpen ? "active" : ""}`}>
        <div className="nav-links-container">
          <Link
            to="/solar-system"
            className={location.pathname === "/solar-system" ? "active" : ""}
            onClick={toggleMenu} // Close menu when a link is clicked
          >
            Solar System
          </Link>
          <Link
            to="/sun"
            className={location.pathname === "/sun" ? "active" : ""}
            onClick={toggleMenu} // Close menu when a link is clicked
          >
            Sun
          </Link>
          <Link
            to="/moon"
            className={location.pathname === "/moon" ? "active" : ""}
            onClick={toggleMenu} // Close menu when a link is clicked
          >
            Moon
          </Link>
          <Link
            to="/mars"
            className={location.pathname === "/mars" ? "active" : ""}
            onClick={toggleMenu} // Close menu when a link is clicked
          >
            Mars
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;