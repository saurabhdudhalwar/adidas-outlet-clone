import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaRegUserCircle, FaRegHeart, FaShoppingCart  } from "react-icons/fa"; // Use outlined icons
import "./Header.css";
import logo from "./logo.webp";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="header__container">
        <div className="header__logo">
          <img src={logo} alt="Logo" className="header__logo-image" />
        </div>

        <nav className={`header__nav ${isMenuOpen ? "header__nav--open" : ""}`}>
          <ul className="header__nav-list">
            <li>
              <Link to="/" className="header__nav-item header__nav-item--bold">
                MEN
              </Link>
            </li>
            <li>
              <Link to="/" className="header__nav-item header__nav-item--bold">
                WOMEN
              </Link>
            </li>
            <li>
              <Link to="/">KIDS</Link>
            </li>
            <li>
              <Link to="/">SPORTS</Link>
            </li>
            <li>
              <Link to="/">LIFESTYLE</Link>
            </li>
            <li>
              <Link to="/cart" className="header__nav-item header__nav-item--bold">
                OUTLET
              </Link>
            </li>
          </ul>
        </nav>

        <div className="header__icons">
          <FaRegUserCircle className="header__icon" />
          <FaRegHeart className="header__icon" />
          <Link to="/cart">
            <FaShoppingCart  className="header__icon" />
          </Link>
        </div>

        <button className="header__toggle" onClick={toggleMenu}>
          ☰
        </button>
      </div>
    </header>
  );
};

export default Header;
