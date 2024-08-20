// ProductDetail.tsx
import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../Store';

const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const cartItems = useSelector((state: RootState) => state.cart.cart);

  const product = cartItems.find((item:any) => item.id === Number(id));
  console.log(product);



  return (
    <>
        { product ? <div><h1>{product.title}</h1>
      <img src={product.images[0]} alt="..." width={100} />
      <img src={product.images[1]} alt="..." width={100} />
      <img src={product.images[2]} alt="..." width={100} />

      <p>Price: ${product.price}</p>
      <p>Quantity: {product.quantity}</p>
      <p>Description: {product.description}</p></div> : <div>Product not found in the cart.</div>}
      
    </>
  );
};

export default ProductDetail;
