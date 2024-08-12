import React from 'react'
import  { useState, useEffect } from 'react';
import './Navbar.css'
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../Store'; // Import the RootState type
import { removeFromCart, updateQuantity } from '../../Store/CartSlice';



export default function Navbar() {
  const [isVisible, setIsVisible] = useState(false);
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

// Modal 
 
  const [modal, setModal] = useState(() => {
    return localStorage.getItem('modalState') === 'true'; 
  });

  const toggleModal = () => {
    const newModalState = !modal;
    setModal(newModalState);
    localStorage.setItem('modalState', newModalState.toString()); 
  };

  useEffect(() => {
    document.body.classList.toggle("active-modal", modal);
  }, [modal]);

// Get Data

  const dispatch = useDispatch();
  const cart = useSelector((state: RootState) => state.cart.cart);

  const handleRemove = (id: number) => {
    dispatch(removeFromCart(id));
  };

  const handleQuantityChange = (id: number, quantity: number) => {
    dispatch(updateQuantity({ id, quantity }));
  };

  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);


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

{/* <nav > */}
                {/* <input type="checkbox" id="click" checked={menuOpen} onChange={() => setMenuOpen(!menuOpen)} />
                <label htmlFor="click" className="menu-btn">
                    <i className="fas fa-bars"></i>
                </label>
                    <div className='logoo'>
                      <a href='/'><img  src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="" /></a>
                      </div>
                      <ul>
                        <li>
                           <div className='loc'>
                               <div className='loc-1'>
                                  <span>Deliver to</span>
                                  <span><i className="fa-solid fa-location-dot"></i> Pakistan</span>
                                </div>
                           </div>  
                        </li>
                        <li>
                           <div className="header__search">
                              <input className="header__searchInput" type="text" />
                              <i className="fa-solid fa-magnifying-glass header__searchIcon"></i>
                           </div>
                        </li>
                        <li>
                        <div className="header__option">
          <span className="header__optionLineOne">Hello Guest</span>
          <span className="header__optionLineTwo">Sign In</span>
        </div>
                        </li>

                      </ul> */}
  
   
                {/* <ul>
                    <li onClick={handleMenuItemClick}>Home</li>
                    <li onClick={handleMenuItemClick}>Service</li>
                    <li onClick={handleMenuItemClick}>Feature</li>
                    <li onClick={handleMenuItemClick}>Product</li>
                    <li onClick={handleMenuItemClick}>Testimonial</li>
                    <li onClick={handleMenuItemClick}>FAQ</li>
                    <li onClick={handleMenuItemClick}><button className='btn btn-login show'>Login</button></li>
                    <li onClick={handleMenuItemClick}>  <button className='btn btn-signup show'>SignUp</button></li>
                </ul> */}
                {/* <div className='btn-main hide'> <button className='btn btn-login hide'>Login</button>
                    <button className='btn btn-signup hide'>SignUp</button>
                    </div>
            </nav> */}


  {/* GO TO TOP BITTON */}
  <div className="go-to-top">
      {isVisible && (
        <button onClick={scrollToTop} className="go-to-top-button">
          <i className="fas fa-arrow-up"></i>
        </button>
      )}
    </div>
{/* Modal  */}

    {modal && (
                <div className='modal'>
                    <div className='overlay'></div>
                    <div className='modal-content'>
             <main>
    <div className="basket">
      <div className="basket-module">
        <label htmlFor="promo-code">Enter a promotional code</label>
        <input id="promo-code" type="text" name="promo-code" maxLength={5} className="promo-code-field"/>
        <button className="promo-code-cta">Apply</button>
      </div>
      <div className="basket-labels">
        <ul>
          <li className="item item-heading">Item</li>
          <li className="price-1">Price</li>
          <li className="quantity">Quantity</li>
          <li className="subtotal">Subtotal</li>
        </ul>
      </div>
     { cart.length > 0 ? ( cart.map((item:any , id:any)=>
     <div key={id} className="basket-product">
        <div className="item">
          <div className="product-image">
            <img src={item.image} alt="Placholder 2" className="product-frame"/>
          </div>
          <div className="product-details">
            <h4>{item.title}</h4>
            <p><strong>{item.category}</strong></p>
            <p>Product id - {item.id}</p>
          </div>
        </div>
        <div className="price-1">${item.price}</div>
        <div className="quantity">
              <input
                type="number"
                min="1"
                value={item.quantity}
                onChange={(e) => handleQuantityChange(item.id, parseInt(e.target.value, 10))}
                className="quantity-field"
              />
            </div>
            <div className="subtotal">${item.price * item.quantity}</div>
        <div className="remove">
          <button className='promo-code-cta'  onClick={() => handleRemove(item.id)}>Remove</button>
        </div>
      </div>
    )):(
      <p className='empty'>No item in the cart</p>
    )}
    </div>
    <aside>
      <div className="summary">
        <div className="summary-total-items"><span className="total-items"></span> Items in your Cart</div>
        <div className="summary-subtotal">
          <div className="subtotal-title">Subtotal</div>
          <div className="subtotal-value final-value">${total.toFixed(2)}</div>
          <div className="summary-promo hide">
            <div className="promo-title">Promotion</div>
            <div className="promo-value final-value" id="basket-promo"></div>
          </div>
        </div>
        <div className="summary-delivery">
          <select name="delivery-collection" className="summary-delivery-selection">
            <option value="0" >Select Collection or Delivery</option>
            <option value="collection">Collection</option>
            <option value="first-class"> 1st Class</option>
            <option value="second-class">2nd Class</option>
            <option value="signed-for"> Special Delivery</option>
          </select>
        </div>
        <div className="summary-total">
          <div className="total-title">Total</div>
          <div className="total-value final-value" id="basket-total">${total.toFixed(2)}</div>
        </div>
        <div className="summary-checkout">
          <button className="checkout-cta">Proceed to checkout</button>
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






















{/* <div class="header__nav"><div class="header__option"><span class="header__optionLineOne">Hello Guest</span><span class="header__optionLineTwo">Sign In</span></div><div class="header__option"><span class="header__optionLineOne">Returns</span><span class="header__optionLineTwo">&amp; Orders</span></div><div class="header__option"><span class="header__optionLineOne">Your</span><span class="header__optionLineTwo">Prime</span></div><div class="header__optionBasket"><i class="fa-duotone fa-solid fa-basket-shopping"></i><span class="header__optionLineTwo header__basketCount">4</span><p class="cart">Cart</p></div></div> */}