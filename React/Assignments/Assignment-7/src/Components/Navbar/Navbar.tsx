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



  const cartItems = useSelector((state: RootState) => state.cart.cart);

  // Flatten the array if it is nested
  const flattenedCartItems = cartItems.flat(); 
  

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

      
        <div className="header__optionBasket"  onClick={toggleModal} >
          <i className="fa-duotone fa-solid fa-basket-shopping" ></i>
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






    {modal && (
                <div className='modal'>
                    <div className='overlay'></div>
                    <div className='modal-content'>
                       
                    <main>
      <div className="basket">
        <div className="basket-module">
          <label htmlFor="promo-code">Enter a promotional code</label>
          <input id="promo-code" type="text" name="promo-code" maxLength={5} className="promo-code-field" />
          <button className="promo-code-cta">Apply</button>
        </div>
        <div className="basket-labels">
          <ul>
            <li className="item item-heading">Item</li>
            <li className="price">Price</li>
            <li className="quantity">Quantity</li>
            <li className="subtotal">Subtotal</li>
          </ul>
        </div>
        {flattenedCartItems.map((item:any, index:any) => (
          <div className="basket-product" key={index}>
            <div className="item">
              <div className="product-image">
                <img src={item.image} alt={item.title} className="product-frame" />
              </div>
              <div className="product-details">
                <h1>
                  <strong>
                    <span className="item-quantity">{item.quantity}</span> x {item.title}
                  </strong>
                </h1>
                <p></p>
              </div>
            </div>
            <div className="price">${item.price}</div>
            <div className="quantity">
              <input type="number" min="1" value={item.quantity} className="quantity-field" readOnly />
            </div>
            <div className="subtotal">${(item.price * item.quantity).toFixed(2)}</div>
            <div className="remove">
              <button>Remove</button>
            </div>
          </div>
        ))}
      </div>
      <aside>
        <div className="summary">
          <div className="summary-total-items"><span className="total-items">{flattenedCartItems.length}</span> Items in your Bag</div>
          <div className="summary-subtotal">
            <div className="subtotal-title">Subtotal</div>
            <div className="subtotal-value final-value" id="basket-subtotal">
              ${flattenedCartItems.reduce((acc:any, item:any) => acc + item.price * item.quantity, 0).toFixed(2)}
            </div>
          </div>
          <div className="summary-total">
            <div className="total-title">Total</div>
            <div className="total-value final-value" id="basket-total">
              ${flattenedCartItems.reduce((acc:any, item:any) => acc + item.price * item.quantity, 0).toFixed(2)}
            </div>
          </div>
          <div className="summary-checkout">
            <button className="checkout-cta">Go to Secure Checkout</button>
          </div>
        </div>
      </aside>
    </main>

                    <button className='close-modal' onClick={toggleModal}>
                            &times;
                        </button>
                    </div>
                </div>
            )}
    </>
  )
}
