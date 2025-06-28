import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import About from './pages/About'
import Appointments from './pages/Appointments';


function App() {
  return (
    <BrowserRouter>
        <div className="layout flex items-center justify-center">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="appointment" element={<Appointments />} />
          </Routes>
        </div>
    </BrowserRouter>
  );
}

export default App;
