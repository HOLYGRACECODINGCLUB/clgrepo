import React from 'react';
import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Mech from './Mechanical/Mech';



function App() {

  return (
    <Router>
      <Routes>

        <Route path="/" element={<Mech />} />
      </Routes>
    </Router>
  );
}

export default App;