import React from 'react'
import '../assets/styles/Home.css'
import logo from '../assets/img/logo.jpg'
import selfie from '../assets/img/home-selfie.jpg'

const Home = () => {
  return (
    <div className='home-content '>
      <div className='w-2/4 h-full flex justify-center items-center'>
        <img className='w-3/4 h-auto rounded-full' src={logo} alt="Logo" />
      </div>

      <div className='w-2/4 h-full flex justify-center items-center'>
        <div className='home-text w-11/12'>
          <h1 className='home-header'>Un Espacio Seguro para sanar y evolucionar a tu propio ritmo</h1>
          <p>A veces la vida nos presenta momentos difíciles. Aprender a navegar esos retos es el primer paso para construir una vida más plena. Estoy aquí para acompañarte en ese camino.</p>
          <div className='selfie-frame'>
            <img className='selfie' src={selfie} alt="Home-Selfie" />
          </div>
        </div>
      </div>

    </div>
  )
}

export default Home
