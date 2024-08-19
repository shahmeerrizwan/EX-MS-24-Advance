import React from 'react'
import  { useEffect, useState } from 'react'
import '../Screen CSS/ProductScreen.css'
import { useDispatch } from 'react-redux';
import { addToCart } from '../Store/CartSlice';
import axios from 'axios';
import { useSearch } from '../Components/Search/SearchContext';

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: {
    name: string;
    image: string;
  };
  images: string[];
  rating?: {
    rate: number;
  };
}

export default function Products() {

  const [products, setProducts] = useState<any>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios('https://api.escuelajs.co/api/v1/products?offset=1&limit=39');
        setProducts(res.data);
      } catch (err:any) {
        console.log(err);
        alert(err.message);
      } finally {
        setLoading(false);
      }
    };
   
  
    fetchProducts();
  }, []);

  const dispatch = useDispatch();

  const handleAddToCart = (products: any) => {
    dispatch(addToCart({ ...products, quantity: 1 }));
  };


  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  if (isSidebarOpen) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }
  const { searchQuery } = useSearch();



const [selectedPrice, setSelectedPrice] = useState(100);

  // Handle price range change
  const handlePriceChange = (e:any) => {
    setSelectedPrice(Number(e.target.value));
  };
  const filteredProducts = products.filter((product:any) => {
    const matchesSearch = product.title.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesPrice = product.price <= selectedPrice;

    return matchesSearch &&  matchesPrice;
  });

  return (
    <>
    <div className="wrap">

   
     
      {/* Hamburger Menu */}
      <div className="hamburger-menu" onClick={toggleSidebar}>
        <label htmlFor="click" className="menu-btn">
          {isSidebarOpen ? (
            <i className="fas fa-times"></i> // Cross (X) icon
          ) : (
            <i className="fas fa-bars"></i> // Bars icon
          )}
        </label>
      </div>
      {/* Sidebar */}
      <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
        
        <h3>Department</h3>
        <ul className='sid'>
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
  <input
    type="range"
    min="0"
    max="100"
    value={selectedPrice}
    onChange={handlePriceChange}
  />
  <span>${selectedPrice}</span>

</div>
<div>{selectedPrice<=15?<div className='empty'><p>No Product Found In This Range</p></div>:<div className='empty'><p>Only {filteredProducts.length} Products Are Available</p></div>}</div>

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
<div className={`right ${isSidebarOpen ? 'single-column' : ''}`}>
{loading ? (
  <div className="loading">
    <img src="https://superstorefinder.net/support/wp-content/uploads/2018/01/grey_style.gif" alt="Loading..." />
  </div>
) : filteredProducts.length > 0 ? (
  filteredProducts.map((item: Product, index: number) => (
    <div className="main" key={index}>
      <div className="product">
        <img src={item.images.length > 0 ? item.images[0] : item.category.image} alt="Product" />
        <div className='margin'>
          <span className='sponser'>{item.category.name} <i className="fa-solid fa-circle-info"></i></span>
          <h5>{item.title.slice(0, 40)}... </h5>
          <p className="price">${item.price}</p>
          <p className='desc'>{item.description.slice(0, 90)}{item.description.length > 90 ? '...' : ''}</p>
          <p className='bought'>400+ bought in past month</p>
          <p className="rating">
            <span>{item.rating?.rate || 'N/A'}</span> ★★★★☆
          </p>
          <p className='bought up'>Delivery Fri, Aug 16</p>
          <p className='bought up'>Ships to Pakistan</p>
          <button onClick={() => handleAddToCart(item)}>Add to cart</button>
        </div>
      </div>
    </div>
  ))
) : (
  <div className="no-items-found">No Product Found</div>
)}


</div>

   
   
      </div>

    </>
  )
}


