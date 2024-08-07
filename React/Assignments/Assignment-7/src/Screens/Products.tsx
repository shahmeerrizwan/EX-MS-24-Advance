import React from 'react'
import  { useEffect, useState } from 'react'
import '../Screen CSS/ProductScreen.css'
import { useDispatch } from 'react-redux';
import { addToCart } from '../Store/CartSlice';
// import img1 from '../Assets/box111.jpg'
// import img2 from '../Assets/boxb108.jpg'
// import img3 from '../Assets/boxb114.jpg'
// import img4 from '../Assets/box123.jpg'
// import img5 from '../Assets/box124.jpg'
// import img6 from '../Assets/box131.jpg'
// import img7 from '../Assets/box141.jpg'
// import img8 from '../Assets/box151.jpg'
// import img9 from '../Assets/box161.jpg'
// import img10 from '../Assets/box162.jpg'
// import img11 from '../Assets/box163.jpg'
// import img12 from '../Assets/box164.jpg'
// import img13 from '../Assets/box151.jpg'
// import img14 from '../Assets/box172.jpg'
// import img15 from '../Assets/box174.jpg'
// import img16 from '../Assets/box181.jpg'
// import img17 from '../Assets/box182.jpg'
// import img18 from '../Assets/box183.jpg'
// import img19 from '../Assets/box184.jpg'

export default function Products() {

    const [products, setProducts] = useState<any>([])
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        setLoading(true);
     
        fetch('https://fakestoreapi.com/products')
          .then(res => res.json())
          .then(json => {
            setProducts(json);
            setLoading(false); 
          })
          .catch(error => {
            console.error('Error fetching products:', error);
            setLoading(false); 
          });
      }, []);
   
console.log(products);


const dispatch = useDispatch()

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
      <p ><span className="rating">★★★★☆</span><span className='upp'>& upto</span>  </p>
      <h4>Brands</h4>
      <ul className='right-1' >
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
      <h2>From Our Brands</h2>
      <ul className='rig'>
      <li><input type="checkbox" /> Amazon Brands</li>
      </ul>
      <h2>Amazon Certified</h2>
      <ul className='rig'>
      <li><input type="checkbox" />Works with Alexa</li>
      </ul>
      <h2>Seller</h2>
      <ul className='rig'>
      <li><input type="checkbox" />Amazon.com</li>
      <li><input type="checkbox" /> Amazon Resale</li>
      <li><input type="checkbox" /> Silk Road Int</li>
      <li><input type="checkbox" /> Shantia</li>
      </ul>
    </div>
<div className='right'>
    {loading ? (
        <div className="loading"><img src="https://superstorefinder.net/support/wp-content/uploads/2018/01/grey_style.gif" alt="" /></div>
      ) : ( products.map((item:any,id:any)=>{
    return <div className="main" key={id}>
      <div  className="product">
        <img src={item.image} alt="..." />
        <div className='margin'>
        <span className='sponser'>{item.category} <i className="fa-solid fa-circle-info"></i></span>
        <h5>{item.title.slice(0,40)}... </h5>
        <p className="price">${item.price}</p>
        <p className='bought'>400+ bought in past month</p>
        <p className="rating"><span>{item.rating.rate}</span>  ★★★★☆</p>
        <p className='bought up'>Delivery Fri, Aug 16</p>
        <p className='bought up'>Ships to Pakistan</p>
        <button onClick={()=>{dispatch(addToCart(products))}}>Add to cart</button>
        </div>
      </div>
      </div>
}))}
</div>


   
   
      </div>

    </>
  )
}
