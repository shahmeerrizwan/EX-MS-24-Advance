import React from 'react'
import  { useState, useEffect } from 'react';
import './Navbar.css'
import {  useSelector } from 'react-redux';
import { RootState } from '../../Store';



export default function Navbar() {
  const [isVisible, setIsVisible] = useState(false);


  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  
  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
   
  };


  const cart = useSelector((state: RootState) => state.cart.cart);
  // console.log('cart', cart);

  const [modal, setModal] = useState(false);
  if (modal) {
      document.body.classList.add("active-modal")
  } else {
      document.body.classList.remove("active-modal")

  }
  const toggleModal = () => {
      setModal(!modal);
  };

  return (
    <>
      <div className="header">
      
      <img
        className="header__logo"
        src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt='...'
      />
    
<div className='loc'>
  <div className='loc-1'>
<span>Deliver to</span>
<span><i className="fa-solid fa-location-dot"></i> Pakistan</span>
  </div>
</div>
    <div className="header__search">
      <input className="header__searchInput" type="text" />
      <i className="fa-solid fa-magnifying-glass header__searchIcon"></i>
    </div>

    <div className="header__nav">
      
        <div className="header__option">
          <span className="header__optionLineOne">Hello Guest</span>
          <span className="header__optionLineTwo">Sign In</span>
        </div>
      

      
        <div className="header__option">
          <span className="header__optionLineOne">Returns</span>
          <span className="header__optionLineTwo">& Orders</span>
        </div>
      
      

      <div className="header__option">
        <span className="header__optionLineOne">Your</span>
        <span className="header__optionLineTwo">Prime</span>
      </div>

      
        <div className="header__optionBasket" >
          <i className="fa-duotone fa-solid fa-basket-shopping"></i>
          <span className="header__optionLineTwo header__basketCount">
            {cart.length}
          </span>
          <p className='cart'>Cart</p>
        </div>
      
    </div>
  </div> 


  {/* GO TO TOP BITTON */}
  <div className="go-to-top">
      {isVisible && (
        <button onClick={scrollToTop} className="go-to-top-button">
          <i className="fas fa-arrow-up"></i>
        </button>
      )}
    </div>
    </>
  )
}
