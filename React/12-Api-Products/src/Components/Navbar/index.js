import React, { useState } from 'react';
import logo from '../../Assets/Logo.png';
import './Navbar.css';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const Navbar = () => {

    const [menuOpen, setMenuOpen] = useState(false);
    const [signupModal, setSignupModal] = useState(false);
    if (signupModal) {
        document.body.classList.add("active-modal-2")
    } else {
        document.body.classList.remove("active-modal-2")
    }
    const [loginModal, setLoginModal] = useState(false);
    if (loginModal) {
        document.body.classList.add("active-modal")
    } else {
        document.body.classList.remove("active-modal")
    }

    const toggleMenu = () => setMenuOpen(!menuOpen);
    const closeMenu = () => setMenuOpen(false);

    const toggleSignupModal = () => {
        setSignupModal(!signupModal);
        setLoginModal(false);
    };

    const toggleLoginModal = () => {
        setLoginModal(!loginModal);
        setSignupModal(false);
    };

    const handleFormSubmit = (event) => {
        event.preventDefault();

        const email = event.currentTarget.querySelector('#email').value.trim();
        const password = event.currentTarget.querySelector('#password').value.trim();

        if (!email && password) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Please enter your email address!',
            });
            return;
        }
        Swal.fire({
            title: 'Are you sure?',
            text: 'Once submitted, you will not be able to change your details!',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, submit it!',
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire(
                    'Successfully Subscribed!',
                    'Enjoy Your Subscription',
                    'success'
                );
                setSignupModal(false);

            }
        });
    };

    const handleFormSubmit1 = (event) => {
        event.preventDefault();

        const email = event.currentTarget.querySelector('#email').value.trim();
        const password = event.currentTarget.querySelector('#password').value.trim();

        if (!email && password) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Please enter your email address!',
            });
            return;
        }
        Swal.fire(
            'Login Successfully',
            'Enjoy Your Subscription',
            'success'
        );
        setLoginModal(false);

    };



    return (
        <>
            <nav>
                <input type="checkbox" id="click" checked={menuOpen} onChange={toggleMenu} />
                <label htmlFor="click" className="menu-btn">
                    <i className="fas fa-bars"></i>
                    <div><Link to='/'><img className='logoo' src={logo} alt="" /></Link></div>
                </label>
                <ul>
                    <li onClick={closeMenu}> <Link to={`/`}>Home</Link> </li>
                    <li onClick={closeMenu}> <Link to={`/products`} >Products</Link> </li>
                    <li className='show' onClick={toggleLoginModal}> <button className='btn btn-login'>Login</button> </li>
                    <li className='show rg' onClick={toggleSignupModal}> <button className='btn btn-signup'>SignUp</button> </li>
                </ul>
                <div className='btn-main hide'>
                    <button className='btn btn-login hide lg-btn' onClick={toggleLoginModal}>Login</button>
                    <button className='btn btn-signup hide' onClick={toggleSignupModal}>SignUp</button>
                </div>
            </nav>

            {/* Login Modal */}
            {loginModal && (
                <div className='modal'>
                    <div className='overlay'></div>
                    <div className='modal-content'>
                        <h2 className='h1-1'>LOGIN NOW</h2>
                        <div className='top-2'>
                            <form className='log' onSubmit={handleFormSubmit1} >
                                <input className='inp' type='email' id='email' placeholder='Enter Your Email Address' required />
                                <input className='inp' type='password' id='password' placeholder='Enter Your Password' required />
                                <button className='btn-pr l-2' type='submit' >Login</button>
                                <p className='sm'>  Before proceeding, please take a moment to review our terms and policies.
                                    These guidelines outline the rules and expectations for using our platform,
                                    ensuring a safe and respectful environment for all users. Our privacy policy
                                    details how we collect, use, and protect your personal information, prioritizing
                                    your security and confidentiality.</p>
                            </form>
                            <div className='acc-1'>
                                <p>Don't have an account? <br />
                                    <button className='btn btn-login l-6' onClick={toggleSignupModal}>Signup Now</button>
                                </p>
                            </div>
                        </div>
                        <button className='close-modal' onClick={toggleLoginModal}>&times;</button>
                    </div>
                </div>
            )}

            {/* Signup Modal */}
            {signupModal && (
                <div className='modal'>
                    <div className='overlay'></div>
                    <div className='modal-content'>
                        <h2 className='h1-1'>SIGNUP NOW</h2>
                        <p className='p-l-1'>Register Now</p>
                        <div className='top-2'>
                            <form onSubmit={handleFormSubmit}>
                                <div className='inp-up'>
                                    <input type="text" id='firstName' placeholder='Enter Your First Name' required />
                                    <input type="text" id='lastName' placeholder='Enter Your Last Name' required />
                                </div>
                                <input className='inp' type='email' id='email' placeholder='Enter Your Email Address' required />
                                <div className='inp-3'>
                                    <input type="password" id='password' placeholder='Enter Password' required />
                                </div>
                                <span>
                                    <p>
                                        <input id='termsCheckbox' type='checkbox' required className='in' />
                                        <label htmlFor='termsCheckbox'>
                                            Before proceeding, please take a moment to review our terms and policies.
                                            These guidelines outline the rules and expectations for using our platform,
                                            ensuring a safe and respectful environment for all users. Our privacy policy
                                            details how we collect, use, and protect your personal information, prioritizing
                                            your security and confidentiality.
                                        </label>
                                    </p>
                                </span>
                                <button className='btn-pr' type='submit'>Signup</button>
                            </form>
                            <div className='acc'>
                                <p>Already have an account? <br />
                                    <button className='btn btn-login' onClick={toggleLoginModal}>Login Now</button>
                                </p>
                            </div>
                        </div>
                        <button className='close-modal' onClick={toggleSignupModal}>&times;</button>
                    </div>
                </div>
            )}
        </>
    );
};

export default Navbar;