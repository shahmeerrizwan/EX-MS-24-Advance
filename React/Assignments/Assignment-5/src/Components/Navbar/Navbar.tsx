import React, { useState, useEffect } from 'react';
import logo from '../../Assets/Logo.png';
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const handleMenuItemClick = () => {
        setMenuOpen(false);
    };

    useEffect(() => {
        const handleClickOutside = (event:any) => {
            if (menuOpen && !event.target.closest('nav')) {
                setMenuOpen(false);
            }
        };

        document.addEventListener('click', handleClickOutside);

        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, [menuOpen]);

    return (
        <div>
            <nav >
                <input type="checkbox" id="click" checked={menuOpen} onChange={() => setMenuOpen(!menuOpen)} />
                <label htmlFor="click" className="menu-btn">
                    <i className="fas fa-bars"></i>
                    <div><a href='/'><img className='logoo' src={logo} alt="" /></a></div>
                </label>
                <ul>
                    <li onClick={handleMenuItemClick}> <Link to="/">  Home</Link> </li>
                    <li onClick={handleMenuItemClick}> <Link to="/product"> Products</Link> </li>
                    <li onClick={handleMenuItemClick}> <Link to="/delivery"> Delivery </Link> </li>
                    <li onClick={handleMenuItemClick}> <Link to="/reviews"> Reviews</Link> </li>
                    <li onClick={handleMenuItemClick}>  <button className='btn btn-login show'><Link to="/">Login</Link> </button></li>
                    <li onClick={handleMenuItemClick}> <Link to="/"></Link>   <button className='btn btn-signup show'>SignUp</button></li>
                </ul>
                <div className='btn-main hide'> <button className='btn btn-login hide'>Login</button>
                    <button className='btn btn-signup hide'>SignUp</button></div>
            </nav>
        </div>
    );
};

export default Navbar;