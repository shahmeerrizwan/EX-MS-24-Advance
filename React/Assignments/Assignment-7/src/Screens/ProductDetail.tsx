import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../Store';
import logo from '../Assets/amazon-logo-white.png'; 
import logo1 from '../Assets/amazon-mobile-logo-white.png';
import lock from '../Assets/checkout-lock-icon.png';
import '../Screen CSS/ProductDetailed.css';

const ProductDetail: React.FC = () => {
  const navigate = useNavigate()
  const { id } = useParams<{ id: string }>();
  const cartItems = useSelector((state: RootState) => state.cart.cart);

  const product = cartItems.find((item: any) => item.id === Number(id));

  const [mainImage, setMainImage] = useState(product?.images[0] || ''); 

  if (!product) {
    return <div>Product not found</div>;
  }

  const handleThumbnailClick = (image: string) => {
    setMainImage(image);
  };

  console.log('====================================');
  console.log(product);
  console.log('====================================');
  
  const discount = 4.99; 
  const originalPrice = product.price + discount;
  const discountedPrice = originalPrice - (originalPrice * 0.1);




const goToCheckOut =()=>{
  navigate(-1)
}

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
              <img className="amazon-mobile-logo" src={logo1} alt="Amazon mobile logo" />
            </a>
          </div>

          <div className="checkout-header-middle-section checkout">
            ( {product.quantity} Quantity )
          </div>

          <div className="checkout-header-right-section">
            <img src={lock} alt="Lock icon" />
          </div>
        </div>
      </div>
    <div className="product-detail-container">
      <div className="product-image-section">
        <img className="main-image" src={mainImage} alt={product.title} />
        <div className="thumbnail-images">
          {product.images.map((image: string, index: number) => (
            <img
              key={index}
              src={image}
              alt={`Thumbnail ${index + 1}`}
              onClick={() => handleThumbnailClick(image)}
              className="thumbnail"
            />
          ))}
        </div>
      </div>

      <div className="product-info-section">
        <h1>{product.title}</h1>
        <span className='discount'>{product.category.name}</span>
        <p>{product.description}</p>
        <div className="price-section">
          <span className="current-price">${discountedPrice.toFixed(2)}</span>
          <span className="discount">10% off</span> 
          <span className="original-price">${originalPrice.toFixed(2)}</span> 
        </div>
        <div>
          <p>Quantity: {product.quantity}</p> 
        </div>
      </div>
    </div>
    <div className="footer_bottomm gap m-t-f">
      <span className="r-f">
        <span className="b-text"> Free Classifieds in Pakistan .</span> ©
        2006-2024 Amazon
      </span>
    </div>
    </>
  );
};

export default ProductDetail;