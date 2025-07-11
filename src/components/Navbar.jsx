// src/components/Navbar.jsx

import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/img/logo.jpg';
import '@/assets/styles/Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="main-navbar">
      <div className="navbar-container">
        <NavLink to="/" className="navbar-logo" onClick={handleLinkClick}>
          <img src={logo} alt="Tatiana Loaiza Therapist Logo" />
        </NavLink>

        <button
          className={`hamburger-menu ${isMenuOpen ? 'open' : ''}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav className={`navbar-nav ${isMenuOpen ? 'open' : ''}`}>
          <ul className="navbar-links">
            <li><NavLink to="/about" onClick={handleLinkClick}>MÁS SOBRE MÍ</NavLink></li>
            <li><NavLink to="/therapy" onClick={handleLinkClick}>TERAPIA</NavLink></li>
            <li><NavLink to="/appointment" onClick={handleLinkClick}>RESERVA UNA CITA</NavLink></li>
            <li><NavLink to="/contact" onClick={handleLinkClick}>CONTÁCTAME</NavLink></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
