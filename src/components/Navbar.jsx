// src/components/Navbar.jsx

import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/img/logo.jpg';
import '@/assets/styles/Navbar.css'

const Navbar = () => {
  return (
    <header className="main-navbar">
      <div className="navbar-container">
        <NavLink to="/" className="navbar-logo">
          <img src={logo} alt="Tatiana Loaiza Therapist Logo" />
        </NavLink>
        <nav>
          <ul className="navbar-links">
            <li><NavLink to="/about">MÁS SOBRE MÍ</NavLink></li>
            <li><NavLink to="/therapy">TERAPIA</NavLink></li>
            <li><NavLink to="/appointment">RESERVA UNA CITA</NavLink></li>
            <li><NavLink to="/contact">CONTÁCTAME</NavLink></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
