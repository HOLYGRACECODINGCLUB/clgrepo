import React from 'react';
import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Any from './AustinTab';
import Mech from './Mechanical/Mech';
import Any1 from './association-wissen/assoWisse'


function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Any />} />
        <Route path="/mechanical" element={<Mech />} />
        <Route path="/association" element={<Any1 />}/>
      </Routes>
    </Router>
  );
}

export default App;