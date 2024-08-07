import React from 'react'
import '../Screen CSS/ProductScreen.css'
import img1 from '../Assets/box111.jpg'
import img2 from '../Assets/box112.jpg'
import img3 from '../Assets/box122.jpg'
import img4 from '../Assets/box123.jpg'
import img5 from '../Assets/box124.jpg'
import img6 from '../Assets/box131.jpg'
import img7 from '../Assets/box141.jpg'
import img8 from '../Assets/box151.jpg'
import img9 from '../Assets/box161.jpg'
import img10 from '../Assets/box162.jpg'
import img11 from '../Assets/box163.jpg'
import img12 from '../Assets/box164.jpg'
// import img13 from '../Assets/box151.jpg'
// import img14 from '../Assets/box172.jpg'
// import img15 from '../Assets/box174.jpg'
// import img16 from '../Assets/box181.jpg'
// import img17 from '../Assets/box182.jpg'
// import img18 from '../Assets/box183.jpg'
// import img19 from '../Assets/box184.jpg'

export default function Products() {
  return (
    <>
    <div className="wrap">

   
      <div className="sidebar">
      <h3>Department</h3>
      <h4>Customer Reviews</h4>
      <h4>Brands</h4>
      <h4>Price</h4>
      <h4>Deals & Discounts</h4>
      <h4>Condition</h4>
      <h4>Color</h4>
      <h4>From Our Brands</h4>
      <h4>Seller</h4>
    </div>
    <div className="main">
      <div className="product">
        <img src={img1} alt="..." />
        <h5>Product Title 1</h5>
        <p className="price">$159.99</p>
        <p className="rating">★★★★☆</p>
        <button>Add to cart</button>
      </div>
      <div className="product">
        <img src={img2}  alt="..." />
        <h5>Product Title 2</h5>
        <p className="price">$8.99</p>
        <p className="rating">★★★★☆</p>
        <button>Add to cart</button>
      </div>
      <div className="product">
        <img src={img3}  alt="..." />
        <h5>Product Title 3</h5>
        <p className="price">$49.99</p>
        <p className="rating">★★★★☆</p>
        <button>Add to cart</button>
      </div>
      <div className="product">
        <img src={img4}  alt="..." />
        <h5>Product Title 3</h5>
        <p className="price">$49.99</p>
        <p className="rating">★★★★☆</p>
        <button>Add to cart</button>
      </div>
      <div className="product">
        <img src={img5}  alt="..." />
        <h5>Product Title 3</h5>
        <p className="price">$49.99</p>
        <p className="rating">★★★★☆</p>
        <button>Add to cart</button>
      </div>
      <div className="product">
        <img src={img6}  alt="..." />
        <h5>Product Title 3</h5>
        <p className="price">$49.99</p>
        <p className="rating">★★★★☆</p>
        <button>Add to cart</button>
      </div>
      <div className="product">
        <img src={img7}  alt="..." />
        <h5>Product Title 3</h5>
        <p className="price">$49.99</p>
        <p className="rating">★★★★☆</p>
        <button>Add to cart</button>
      </div>
      <div className="product">
        <img src={img8}  alt="..." />
        <h5>Product Title 3</h5>
        <p className="price">$49.99</p>
        <p className="rating">★★★★☆</p>
        <button>Add to cart</button>
      </div>
      <div className="product">
        <img src={img9}  alt="..." />
        <h5>Product Title 3</h5>
        <p className="price">$49.99</p>
        <p className="rating">★★★★☆</p>
        <button>Add to cart</button>
      </div>
      <div className="product">
        <img src={img10}  alt="..." />
        <h5>Product Title 3</h5>
        <p className="price">$49.99</p>
        <p className="rating">★★★★☆</p>
        <button>Add to cart</button>
      </div>
      <div className="product">
        <img src={img11}  alt="..." />
        <h5>Product Title 3</h5>
        <p className="price">$49.99</p>
        <p className="rating">★★★★☆</p>
        <button>Add to cart</button>
      </div>
      <div className="product">
        <img src={img12}  alt="..." />
        <h5>Product Title 3</h5>
        <p className="price">$49.99</p>
        <p className="rating">★★★★☆</p>
        <button>Add to cart</button>
      </div>
      </div>
      </div>

    </>
  )
}
