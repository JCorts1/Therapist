import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';


function App() {
  return (
    <div>

      <div className="p-6">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
