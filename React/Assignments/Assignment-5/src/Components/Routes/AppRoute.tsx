import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../../Pages/Home';
import Products from '../../Pages/Products';
import Contact from '../../Pages/Contact';
import Reviews from '../../Pages/Reviews';
import NotFound from '../../Pages/NotFound';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

export default function AppRoute() {
  return (
    <>
       <BrowserRouter>
       <Navbar/>
        <Routes>
          <Route  path="/" element={<Home />} />
          <Route path="/product" element={<Products />} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  )
}
