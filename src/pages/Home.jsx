// src/pages/Home.jsx

import React from 'react';
import '../assets/styles/Home.css';
import logo from '../assets/img/logo.jpg';
import { Link } from 'react-router-dom';
import '../App.css';

const Home = () => {
  return (
    // This new wrapper allows us to position the content and buttons separately
    <div className="home-page-wrapper">
      <div className='layout-content home-layout-content'>
        
        <div className='home-left-side'>
          <img className='logo-img' src={logo} alt="Logo" />
        </div>

        <div className='home-right-side'>
          <div className='home-text-container'>
            <h1 className='home-header'>Un Espacio Seguro para sanar y evolucionar a tu propio ritmo.</h1>
            <p className='home-paragraph'>A veces la vida nos presenta momentos difíciles. Aprender a navegar esos retos es el primer paso para construir una vida más plena. Estoy aquí para acompañarte en ese camino.</p>
          </div>

          <div className='home-navigation-links'>
            <Link to="/about" className='primary-button'>MÁS SOBRE MÍ</Link>
            <Link to="/therapy" className='primary-button'>TERAPIA</Link>
            <Link to="/appointment" className='primary-button'>RESERVA UNA CITA</Link>
            <Link to="/contact" className='primary-button'>CONTÁCTAME</Link>
          </div>

        </div>
      </div>


    </div>
  );
};

export default Home;
