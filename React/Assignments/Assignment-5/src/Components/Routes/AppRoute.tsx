import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../../Pages/Home';
import Products from '../../Pages/Products';
import DeliveryPage from '../../Pages/Delivery';
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
          <Route path="/delivery" element={<DeliveryPage />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  )
}
