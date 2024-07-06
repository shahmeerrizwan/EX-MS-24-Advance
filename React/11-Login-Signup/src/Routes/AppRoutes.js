import React, { useEffect, useState } from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Home from '../Pages/Home';
import Products from '../Pages/Product';
import Contact from '../Pages/Contact';
import Reviews from '../Pages/Reviews';
import NotFound from '../Pages/NotFound';
import Navbar from '../Components/Navbar/Navbar';
import Footer from '../Components/Footer/Footer';
import { ToastContainer } from 'react-toastify';
import UserProfile from '../Pages/UserProfile';
import { auth } from '../Components/Firebase/FirebaseConfig';


export default function AppRoute() {
    const [user, setUser] = useState();

    useEffect(() => {
        auth.onAuthStateChanged((user) => {
            setUser(user);
        });
    });
    return (
        <>
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path="/" element={user ? <Navigate to="/home" /> : <Home />} />
                    <Route path="/product" element={<Products />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/reviews" element={<Reviews />} />
                    <Route path="/home" element={<UserProfile />} />
                    <Route path="/*" element={<NotFound />} />
                </Routes>
                <ToastContainer />
                <Footer />
            </BrowserRouter>
        </>
    )
}
