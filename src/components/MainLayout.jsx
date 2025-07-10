// src/components/MainLayout.jsx

import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';

// This component acts as a wrapper for all pages that need a navbar
const MainLayout = () => {
  return (
    <>
      <Navbar />
      <main className="main-content-area">
        <Outlet />
      </main>
    </>
  );
};

export default MainLayout;
