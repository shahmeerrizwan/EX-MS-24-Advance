import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../Store";
import { removeFromCart, updateQuantity } from "../Store/CartSlice";
import { useNavigate } from "react-router-dom";
import "../Screen CSS/CheckOut.css";
import logo from "../Assets/amazon-logo-white.png";
import logo1 from "../Assets/amazon-mobile-logo-white.png";
import lock from "../Assets/checkout-lock-icon.png";
import Swal from "sweetalert2";

export default function CheckOut() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Redux Code
  const cart = useSelector((state: RootState) => state.cart.cart);

  const handleRemove = (id: number) => {
    dispatch(removeFromCart(id));
  };

  const handleQuantityChange = (id: number, quantity: number) => {
    dispatch(updateQuantity({ id, quantity }));
  };

  const total = cart.reduce(
    (acc: number, item: any) => acc + item.price * item.quantity,
    0
  );

  // Navigate Function
  const handleGoToDetail = (id: number) => {
    navigate(`/product/${id}`);
  };
  const goToCheckOut = () => {
    navigate(-1);
  };

  // Sucess Message
  const sucessfullMessage = () => {
    Swal.fire({
      title: "Success!",
      text: "Your Order SeccessFully Placed",
      icon: "success",
      allowOutsideClick: false,
    });
  };

  return (
    <>
      <div className="checkout-header">
        <div className="header-content">
          <div className="left-arrow" onClick={goToCheckOut}>
            <i className="fa-solid fa-arrow-left"></i>
          </div>
          <div className="checkout-header-left-section">
            <a href="/">
              <img className="amazon-logo" src={logo} alt="Amazon logo" />
              <img
                className="amazon-mobile-logo"
                src={logo1}
                alt="Amazon mobile logo"
              />
            </a>
          </div>

          <div className="checkout-header-middle-section checkout">
            Checkout ( {cart.length} Items )
          </div>

          <div className="checkout-header-right-section">
            <img src={lock} alt="Lock icon" />
          </div>
        </div>
      </div>

      <div className="main-1">
        <div className="page-title">Review your order</div>

        <div className="checkout-grid">
          <div className="order-summary js-order-summary">
            {cart.map((item: any, index) => (
              <div className="cart-item-container" key={index}>
                <div className="cart-item-details-grid">
                  <img
                    className="product-images"
                    src={item.images[0]}
                    alt={item.name}
                  />
                </div>
                <div className="cart-item-details">
                  <div className="product-name">
                    {item.title.slice(0, 30)}...
                  </div>
                  <div className="product-price">${item.price.toFixed(2)}</div>
                  <div className="product-description">
                    {item.description.slice(0, 100)}...
                  </div>
                  <div className="product-quantity">
                    <span>
                      Quantity:{" "}
                      <input
                        type="number"
                        value={item.quantity}
                        min={0}
                        onChange={(e) =>
                          handleQuantityChange(item.id, Number(e.target.value))
                        }
                      />
                    </span>
                  </div>
                  <div className="btn-flex">
                    <button
                      className="delete"
                      onClick={() => handleRemove(item.id)}
                    >
                      Delete
                    </button>
                    <button
                      className="detailed-btn delete"
                      onClick={() => handleGoToDetail(item.id)}
                    >
                      Go To Detail
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="payment-summary">
            <div className="payment-summary-title">Order Summary</div>

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
              <div className="payment-summary-money">
                ${(total + 4.99).toFixed(2)}
              </div>
            </div>

            <div className="payment-summary-row">
              <div>Estimated tax (10%):</div>
              <div className="payment-summary-money">
                ${(total * 0.1).toFixed(2)}
              </div>
            </div>

            <div className="payment-summary-row total-row">
              <div>Order total:</div>
              <div className="payment-summary-money">
                ${(total + 4.99 + total * 0.1).toFixed(2)}
              </div>
            </div>

            <button className="checkout-cta" onClick={sucessfullMessage}>
              Place your order
            </button>

            <div className="delivery-options">
              <div className="delivery-options-title">
                Choose a delivery option:
                <h1 className="date">Delivery After 7 Days</h1>
              </div>

              <div className="delivery-option">
                <input
                  type="radio"
                  className="delivery-option-input"
                  name="id"
                />
                <div>
                  <div className="delivery-option-date">
                    Tuesday, September 21
                  </div>
                  <div className="delivery-option-price">FREE Shipping</div>
                </div>
              </div>

              <div className="delivery-option">
                <input
                  type="radio"
                  className="delivery-option-input"
                  name="id"
                />
                <div>
                  <div className="delivery-option-date">
                    Wednesday, September 15
                  </div>
                  <div className="delivery-option-price">$4.99 - Shipping</div>
                </div>
              </div>

              <div className="delivery-option">
                <input
                  type="radio"
                  className="delivery-option-input"
                  name="id"
                />
                <div>
                  <div className="delivery-option-date">
                    Monday, September 13
                  </div>
                  <div className="delivery-option-price">$9.99 - Shipping</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer_bottomm gap">
        <span className="r-f">
          <span className="b-text"> Free Classifieds in Pakistan .</span> ©
          2006-2024 Amazon
        </span>
      </div>
    </>
  );
}
