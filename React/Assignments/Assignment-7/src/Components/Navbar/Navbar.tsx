import React from 'react'
import  { useState, useEffect } from 'react';
import './Navbar.css'
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../Store'; // Import the RootState type
import { removeFromCart, updateQuantity } from '../../Store/CartSlice';



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




  const [modal, setModal] = useState(false);
  if (modal) {
      document.body.classList.add("active-modal")
  } else {
      document.body.classList.remove("active-modal")

  }
  const toggleModal = () => {
      setModal(!modal);
  };



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
                       
                    {/* <div className='m-1'>
      <div className="basket">
        <div className="basket-labels">
          <ul>
            <li className="item item-heading">Item</li>
            <li className="price-1">Price</li>
            <li className="quantity">Quantity</li>
            <li className="subtotal">Subtotal</li>
          </ul>
        </div>
        {cart.map((item:any,id:any) => (
          <div className="basket-product" key={id}>
            <div className="item">
              <div className="product-image">
                <img src={item.image} alt={item.title} className="product-frame" />
              </div>
              <div className="product-details">
                <h1><strong>{item.quantity} x {item.title}</strong></h1>
                <p><strong>{item.category}</strong></p>
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
              <button onClick={() => handleRemove(item.id)}>Remove</button>
            </div>
          </div>
        ))}
        <aside>
          <div className="summary">
            <div className="summary-total-items">
              <span className="total-items">{cart.length} Items in your Bag</span>
            </div>
            <div className="summary-subtotal">
              <div className="subtotal-title">Subtotal</div>
              <div className="subtotal-value final-value">${total.toFixed(2)}</div>
            </div>
            <div className="summary-checkout">
              <button className="checkout-cta">Go to Secure Checkout</button>
            </div>
          </div>
        </aside>
      </div>
    </div> */}



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
          <li className="price">Price</li>
          <li className="quantity">Quantity</li>
          <li className="subtotal">Subtotal</li>
        </ul>
      </div>
      <div className="basket-product">
        <div className="item">
          <div className="product-image">
            <img src="http://placehold.it/120x166" alt="Placholder 2" className="product-frame"/>
          </div>
          <div className="product-details">
            <h1><strong><span className="item-quantity">4</span> x Eliza J</strong> Lace Sleeve Cuff Dress</h1>
            <p><strong>Navy, Size 18</strong></p>
            <p>Product Code - 232321939</p>
          </div>
        </div>
        <div className="price">26.00</div>
        <div className="quantity">
          <input type="number" value="4" min="1" className="quantity-field"/>
        </div>
        <div className="subtotal">104.00</div>
        <div className="remove">
          <button>Remove</button>
        </div>
      </div>
    
    </div>
    <aside>
      <div className="summary">
        <div className="summary-total-items"><span className="total-items"></span> Items in your Bag</div>
        <div className="summary-subtotal">
          <div className="subtotal-title">Subtotal</div>
          <div className="subtotal-value final-value" id="basket-subtotal">130.00</div>
          <div className="summary-promo hide">
            <div className="promo-title">Promotion</div>
            <div className="promo-value final-value" id="basket-promo"></div>
          </div>
        </div>
        <div className="summary-delivery">
          <select name="delivery-collection" className="summary-delivery-selection">
            <option value="0" >Select Collection or Delivery</option>
            <option value="collection">Collection</option>
            <option value="first-class">Royal Mail 1st Class</option>
            <option value="second-class">Royal Mail 2nd Class</option>
            <option value="signed-for">Royal Mail Special Delivery</option>
          </select>
        </div>
        <div className="summary-total">
          <div className="total-title">Total</div>
          <div className="total-value final-value" id="basket-total">130.00</div>
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
