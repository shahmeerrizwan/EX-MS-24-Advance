import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Review from './Pages/Review';
import Services from './Pages/Services';
import Contact from './Pages/Contact';
import NotFound from './Pages/NotFound';
import Navbar from './Component/Navbar';

function App() {
  return (
    <>
     <Router>
      <Navbar/>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/review" element={<Review/>} />
                <Route path="/services" element={<Services />} />
                <Route path="/contact" element={<Contact/>} />
                <Route path="*" element={<NotFound />} />
            </Routes>
     </Router>
    </>
  );
}

export default App;
