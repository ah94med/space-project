import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css"; // Optional: For custom styling
import Logo from "../assets/logo/logo.png"; // Import the SVG logo
import { MenuOutlined, CloseOutlined } from "@ant-design/icons"; // Import icons for hamburger menu
import { useTranslation } from "react-i18next"; // Import useTranslation

const Navbar = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t, i18n } = useTranslation(); // Use the translation hook

  // Toggle menu visibility
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Change language and update direction
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    document.body.setAttribute('dir', lng === 'ar' ? 'rtl' : 'ltr');
    toggleMenu(); // Close the menu after changing language
  };

  return (
    <div className="navbar-container">
      

      {/* Logo (Right Side) */}
      <div className="logo-container">
        <Link to="/">
          <img
            src={Logo}
            alt="Rocket Logo"
            style={{ width: "50px", height: "50px", cursor: "pointer" }}
          />
        </Link>
      </div>

      {/* Hamburger Menu Icon (Left Side) */}
      <div className="menu-icon" onClick={toggleMenu}>
        {isMenuOpen ? <CloseOutlined /> : <MenuOutlined />}
      </div>

      {/* Full-Screen Menu (Hidden by Default, Shown When Menu is Open) */}
      <div className={`full-screen-menu ${isMenuOpen ? "active" : ""}`}>
        <div className="nav-links-container">
          <Link
            to="/solar-system"
            className={location.pathname === "/solar-system" ? "active" : ""}
            onClick={toggleMenu} // Close menu when a link is clicked
          >
            {t('navbar.solarSystem')}
          </Link>
          <Link
            to="/moon"
            className={location.pathname === "/moon" ? "active" : ""}
            onClick={toggleMenu} // Close menu when a link is clicked
          >
            {t('navbar.moon')}
          </Link>
          <Link
            to="/stars"
            className={location.pathname === "/stars" ? "active" : ""}
            onClick={toggleMenu} // Close menu when a link is clicked
          >
            {t('navbar.stars')}
          </Link>

          {/* Language Switcher */}
          <button
            className="language-switcher-button"
            onClick={() => changeLanguage(i18n.language === 'ar' ? 'en' : 'ar')}
          >
            {i18n.language === 'ar' ? 'English' : 'العربية'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;