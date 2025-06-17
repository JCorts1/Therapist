import React from 'react'
import '../assets/styles/Home.css'
import logo from '../assets/img/logo.jpg'

const Home = () => {
  return (
    <div className='home-content'>
      <div className='w-2/4 h-full flex justify-center items-center'>
      <img className='w-3/4 h-auto rounded-full' src={logo} alt="Logo" />
      </div>
    </div>
  )
}

export default Home
