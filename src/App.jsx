// src/App.jsx

import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

// Import Components and Pages
import MainLayout from './components/MainLayout'; // Import the new layout component
import Home from './pages/Home';
import About from './pages/About';
import Appointments from './pages/Appointments';
// Import other pages as you create them

function App() {
  return (
    <BrowserRouter>
      <div className="layout">
        <Routes>
          {/* Route 1: The Homepage (NO NAVBAR) */}
          {/* This route renders the Home component directly inside a centering div */}
          <Route
            path="/"
            element={
              <div className="main-content-area">
                <Home />
              </div>
            }
          />

          {/* Route 2: All Other Pages (WITH NAVBAR) */}
          {/* This uses the MainLayout component as a wrapper */}
          <Route element={<MainLayout />}>
            <Route path="about" element={<About />} />
            <Route path="appointment" element={<Appointments />} />
            {/* Add future pages like /therapy and /contact here */}
            {/* <Route path="therapy" element={<Therapy />} /> */}
            {/* <Route path="contact" element={<Contact />} /> */}
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
