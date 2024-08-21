import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../Store';
import '../Screen CSS/ProductDetailed.css';

const ProductDetail: React.FC = () => {
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

  
  
  const discount = 4.99; 
  const originalPrice = product.price + discount;
  const discountedPrice = originalPrice - (originalPrice * 0.1);

  return (
    <>
    
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
    </>
  );
};

export default ProductDetail;