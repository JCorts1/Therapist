import React from 'react'
import '../assets/styles/Home.css'
import logo from '../assets/img/logo.jpg'
import { Link } from 'react-router-dom'
import '../App.css'

const Home = () => {
  return (
    <div className='layout-content '>
      <div className='left-side w-2/4 h-full flex justify-center items-center'>
        <img className='logo-img w-3/4 h-auto rounded-full' src={logo} alt="Logo" />
      </div>

      <div className='right-side w-2/4 h-full flex flex-col justify-center items-center'>
        <div className='home-text w-11/12'>
          <h1 className='home-header'>Un Espacio Seguro para sanar y evolucionar a tu propio ritmo.</h1>
          <p className='home-text'>A veces la vida nos presenta momentos difíciles. Aprender a navegar esos retos es el primer paso para construir una vida más plena. Estoy aquí para acompañarte en ese camino.</p>
        </div>
        <div className='links-image'>
          <div className='navigation-links'>
            <Link to="/about" className='primary-button'>
              MÁS SOBRE MÍ
            </Link>
            <Link to="/therapy" className='primary-button'>
              TERAPIA
            </Link>
            <Link to="/appointments" className='primary-button'> {/* Changed to a more relevant link */}
              RESERVA UNA CITA
            </Link>
            <Link to="/contact" className='primary-button'> {/* Corrected text */}
              CONTÁCTAME
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
