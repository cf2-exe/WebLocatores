
/* eslint-disable no-unused-vars */
import React from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Contact from './pages/Contact';
import Home from './pages/home';

export default function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/WebLocatores" element={<Home />} />
        <Route path="/WebLocatores/contact" element={<Contact />} />
        {/* <Route path="/about" element={<About />} />
        <Route path='/services' element={<Services/>}></Route> */}
      </Routes>
    </Router>
    </>
  );
}