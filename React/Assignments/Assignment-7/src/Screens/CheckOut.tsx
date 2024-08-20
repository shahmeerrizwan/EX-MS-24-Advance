// import React from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { RootState } from '../Store'; // Import your RootState type
// import { removeFromCart, updateQuantity } from '../Store/CartSlice'; // Import your Redux actions
// import '../Screen CSS/CheckOut.css'; // Import your CSS file
// import logo from '../Assets/amazon-logo.png'; // Import your assets
// import logo1 from '../Assets/amazon-mobile-logo.png';
// import lock from '../Assets/checkout-lock-icon.png';

// export default function CheckOut() {
//   const dispatch = useDispatch();
//   const cart = useSelector((state: RootState) => state.cart.cart);

//   const handleRemove = (id: number) => {
//     dispatch(removeFromCart(id));
//   };

//   const handleQuantityChange = (id: number, quantity: number) => {
//     dispatch(updateQuantity({ id, quantity }));
//   };

//   const total = cart.reduce((acc: number, item: any) => acc + item.price * item.quantity, 0);

//   return (
//     <>
//       <div className="checkout-header">
//         <div className="header-content">
//           <div className="checkout-header-left-section">
//             <a href="/home">
//               <img className="amazon-logo" src={logo} alt="Amazon logo" />
//               <img className="amazon-mobile-logo" src={logo1} alt="Amazon mobile logo" />
//             </a>
//           </div>

//           <div className="checkout-header-middle-section">
//             Checkout (<a className="return-to-home-link" href="/home">{cart.length} items</a>)
//           </div>

//           <div className="checkout-header-right-section">
//             <img src={lock} alt="Lock icon" />
//           </div>
//         </div>
//       </div>

//       <div className="main">
//         <div className="page-title">Review your order</div>

//         <div className="checkout-grid">
//           <div className="order-summary js-order-summary">
//             {cart.map((item:any, index:number) => (
//               <div className="cart-item-container" key={index}>
//                 <div className="delivery-date">
//                   Delivery date: {item.deliveryDate}
//                 </div>

//                 <div className="cart-item-details-grid">
//                   <img className="product-images" src={item.images[0]} alt={item.name} />

//                   <div className="cart-item-details">
//                     <div className="product-name">
//                       {item.name}
//                     </div>
//                     <div className="product-price">
//                       ${item.price.toFixed(2)}
//                     </div>
//                     <div className="product-quantity">
//                       <span>
//                         Quantity: <input 
//                                     type="number" 
//                                     value={item.quantity} 
//                                     onChange={(e) => handleQuantityChange(item.id, Number(e.target.value))} 
//                                   />
//                       </span>
//                       <span className="update-quantity-link link-primary" onClick={() => handleQuantityChange(item.id, item.quantity)}>
//                         Update
//                       </span>
//                       <span className="delete-quantity-link link-primary" onClick={() => handleRemove(item.id)}>
//                         Delete
//                       </span>
//                     </div>
//                   </div>

//                   <div className="delivery-options">
//                     <div className="delivery-options-title">
//                       Choose a delivery option:
//                     </div>
//                     <div className="delivery-option">
//                       <input type="radio" checked className="delivery-option-input" name={`delivery-option-${index}`} />
//                       <div>
//                         <div className="delivery-option-date">
//                           Tuesday, June 21
//                         </div>
//                         <div className="delivery-option-price">
//                           FREE Shipping
//                         </div>
//                       </div>
//                     </div>
//                     <div className="delivery-option">
//                       <input type="radio" className="delivery-option-input" name={`delivery-option-${index}`} />
//                       <div>
//                         <div className="delivery-option-date">
//                           Wednesday, June 15
//                         </div>
//                         <div className="delivery-option-price">
//                           $4.99 - Shipping
//                         </div>
//                       </div>
//                     </div>
//                     <div className="delivery-option">
//                       <input type="radio" className="delivery-option-input" name={`delivery-option-${index}`} />
//                       <div>
//                         <div className="delivery-option-date">
//                           Monday, June 13
//                         </div>
//                         <div className="delivery-option-price">
//                           $9.99 - Shipping
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>

//           <div className="payment-summary">
//             <div className="payment-summary-title">
//               Order Summary
//             </div>

//             <div className="payment-summary-row">
//               <div>Items ({cart.length}):</div>
//               <div className="payment-summary-money">${total.toFixed(2)}</div>
//             </div>

//             <div className="payment-summary-row">
//               <div>Shipping &amp; handling:</div>
//               <div className="payment-summary-money">$4.99</div>
//             </div>

//             <div className="payment-summary-row subtotal-row">
//               <div>Total before tax:</div>
//               <div className="payment-summary-money">${(total + 4.99).toFixed(2)}</div>
//             </div>

//             <div className="payment-summary-row">
//               <div>Estimated tax (10%):</div>
//               <div className="payment-summary-money">${(total * 0.1).toFixed(2)}</div>
//             </div>

//             <div className="payment-summary-row total-row">
//               <div>Order total:</div>
//               <div className="payment-summary-money">${(total + 4.99 + total * 0.1).toFixed(2)}</div>
//             </div>

//             <button className="place-order-button button-primary">
//               Place your order
//             </button>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }












import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../Store'; // Import your RootState type
import { removeFromCart, updateQuantity } from '../Store/CartSlice'; // Import your Redux actions
import '../Screen CSS/CheckOut.css'; // Import your CSS file
import logo from '../Assets/amazon-logo.png'; // Import your assets
import logo1 from '../Assets/amazon-mobile-logo.png';
import lock from '../Assets/checkout-lock-icon.png';

export default function CheckOut() {
  const dispatch = useDispatch();
  const cart = useSelector((state: RootState) => state.cart.cart);

  const handleRemove = (id: number) => {
    dispatch(removeFromCart(id));
  };

  const handleQuantityChange = (id: number, quantity: number) => {
    dispatch(updateQuantity({ id, quantity }));
  };


 

  console.log(cart);
  
  
  const total = cart.reduce((acc: number, item: any) => acc + item.price * item.quantity, 0);

  return (
    <>
      <div className="checkout-header">
        <div className="header-content">
          <div className="checkout-header-left-section">
            <a href="/home">
              <img className="amazon-logo" src={logo} alt="Amazon logo" />
              <img className="amazon-mobile-logo" src={logo1} alt="Amazon mobile logo" />
            </a>
          </div>

          <div className="checkout-header-middle-section">
            Checkout (<a className="return-to-home-link" href="/home">{cart.length} items</a>)
          </div>

          <div className="checkout-header-right-section">
            <img src={lock} alt="Lock icon" />
          </div>
        </div>
      </div>

      <div className="main">
        <div className="page-title">Review your order</div>

        <div className="checkout-grid">
          <div className="order-summary js-order-summary">
            {cart.map((item:any, index) => (
              <div className="cart-item-container" key={index}>
                {/* <div className="delivery-date">
                  Delivery date: {item.deliveryDate}
                </div> */}

                <div className="cart-item-details-grid">
                  <img className="product-images" src={item.images[0]} alt={item.name} />

                 

                  
                </div>
                <div className="cart-item-details">
                    <div className="product-name">
                      {item.name}
                    </div>
                    <div className="product-price">
                      ${item.price.toFixed(2)}
                    </div>
                    <div className="product-quantity">
                      <span>
                        Quantity: <input 
                                    type="number" 
                                    value={item.quantity} 
                                    onChange={(e) => handleQuantityChange(item.id, Number(e.target.value))} 
                                  />
                      </span>
                     
                      <span className="delete-quantity-link link-primary" onClick={() => handleRemove(item.id)}>
                        Delete
                      </span>
                    </div>
                  </div>
              </div>
            ))}
          </div>

          <div className="payment-summary">
            <div className="payment-summary-title">
              Order Summary
            </div>

            <div className="payment-summary-row">
              <div>Items ({cart.length}):</div>
              <div className="payment-summary-money">${total.toFixed(2)}</div>
            </div>

            <div className="payment-summary-row">
              <div>Shipping &amp; handling:</div>
              <div className="payment-summary-money">$4.99</div>
            </div>

            <div className="payment-summary-row subtotal-row">
              <div>Total before tax:</div>
              <div className="payment-summary-money">${(total + 4.99).toFixed(2)}</div>
            </div>

            <div className="payment-summary-row">
              <div>Estimated tax (10%):</div>
              <div className="payment-summary-money">${(total * 0.1).toFixed(2)}</div>
            </div>

            <div className="payment-summary-row total-row">
              <div>Order total:</div>
              <div className="payment-summary-money">${(total + 4.99 + total * 0.1).toFixed(2)}</div>
            </div>

            <button className="place-order-button button-primary">
              Place your order
            </button>
            
{/* Radio */}
          
           

            <div className="delivery-options">
                    <div className="delivery-options-title">
                      Choose a delivery option:
                    </div>

                    <div className="delivery-option">
                      <input
                        type="radio"
                        className="delivery-option-input"
                      
                     name='id'
                      />
                      <div>
                        <div className="delivery-option-date">
                          Tuesday, June 21
                        </div>
                        <div className="delivery-option-price">
                          FREE Shipping
                        </div>
                      </div>
                    </div>

                    <div className="delivery-option">
                      <input
                        type="radio"
                        className="delivery-option-input"
                        name='id'
                       
                      />
                      <div>
                        <div className="delivery-option-date">
                          Wednesday, June 15
                        </div>
                        <div className="delivery-option-price">
                          $4.99 - Shipping
                        </div>
                      </div>
                    </div>

                    <div className="delivery-option">
                      <input
                        type="radio"
                        className="delivery-option-input"
                      name='id'
                      />
                      <div>
                        <div className="delivery-option-date">
                          Monday, June 13
                        </div>
                        <div className="delivery-option-price">
                          $9.99 - Shipping
                        </div>
                      </div>
                    </div>
                  </div>


          </div>
          
        </div>
        
      </div>
    </>
  );
}

