// src/App.jsx

import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

import MainLayout from './components/MainLayout';
import Home from './pages/Home';
import About from './pages/About';
import Appointments from './pages/Appointments';

function App() {
  return (
    <BrowserRouter>
      <div className="layout">
        <Routes>
          {/* The Homepage route is now structured to handle its unique layout */}
          <Route path="/" element={<Home />} />

          {/* All other pages use the MainLayout with the navbar */}
          <Route element={<MainLayout />}>
            <Route path="about" element={<About />} />
            <Route path="appointment" element={<Appointments />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
