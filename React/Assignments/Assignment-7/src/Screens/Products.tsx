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
      <ul  className='sid'>
        <li>Home & Kitchen</li>
        <li>Kitchen Utensils & Gadgets</li>
        <li> Kitchen Racks & Holders</li>
        <li>Food Storage</li>
        <li>Kitchen Rugs</li>
        <li> Dinnerware & Serveware</li>
        <li>Tools & Home Improvement</li>
      </ul>
      <h2>Customer Reviews</h2>
      <p ><span className="rating">★★★★☆</span><span className='up'>& upto</span>  </p>
      <h4>Brands</h4>
      <ul className='right' >
        <li><input type="checkbox" /> Umite Chef</li>
        <li><input type="checkbox" /> Mueller</li>
        <li><input type="checkbox" /> KitchenAid</li>
        <li><input type="checkbox" /> Ninja</li>
        <li><input type="checkbox" /> HENCKELS</li>
        <li><input type="checkbox" /> Kamenstein</li>
        <li><input type="checkbox" /> Vtopmart</li>
      </ul>
      <h4>Price</h4>
      <div className="price-range">
        <span>$0</span>
        <input type="range"  />
        <span>$3,400+</span>
      </div>
      <h2>Deals & Discounts</h2>
      <ul className='rig'>
        <li>All Discounts</li>
        <li>Today's Deals</li>
      </ul>
      <h2>Condition</h2>
      <ul className='rig'>
        <li>New</li>
        <li>Used</li>
      </ul>
      <h2>Color</h2>
      <div className="color-options">
        <div style={{backgroundColor:"white"}}></div>
        <div style={{backgroundColor:"#c0c0c0"}}></div>
        <div style={{backgroundColor:"#808080"}}></div>
        <div style={{backgroundColor:"#000000"}}></div>
        <div style={{backgroundColor:"#ff0000"}}></div>
        <div style={{backgroundColor:"#800000"}}></div>
        <div style={{backgroundColor:"#ffff00"}}></div>
        <div style={{backgroundColor:"#808000"}}></div>
        <div style={{backgroundColor:"#00ff00"}}></div>
        <div style={{backgroundColor:"#008000"}}></div>
        <div style={{backgroundColor:"#00ffff"}}></div>
        <div style={{backgroundColor:"#008080"}}></div>
        <div style={{backgroundColor:"#0000ff"}}></div>
        <div style={{backgroundColor:"#000080"}}></div>
       </div>
      <h3>From Our Brands</h3>
      <ul className='rig'>
      <li><input type="checkbox" /> Amazon Brands</li>
      </ul>
      <h3>Amazon Certified</h3>
      <ul className='rig'>
      <li><input type="checkbox" />Works with Alexa</li>
      </ul>
      <h3>Seller</h3>
      <ul className='rig'>
      <li><input type="checkbox" />Amazon.com</li>
      <li><input type="checkbox" /> Amazon Resale</li>
      <li><input type="checkbox" /> Silk Road Int</li>
      <li><input type="checkbox" /> Shantia</li>
      </ul>
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
