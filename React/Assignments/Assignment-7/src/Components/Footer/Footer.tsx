import React from 'react'
import './Footer.css'

export default function Footer() {
  return (
    <>
      <div className="newUser">
        <div className="newcustomer">
          <div>See personalized recommendations</div>
          <button>Sign in</button>
          <p>New customer? <a href="/">Start here.</a></p>
        </div>
      </div> 
      <div className="socialHandle">
        <div className="sh-part-1">
          <ul>
            <li>Get to Know Us</li>
            <li>About Us</li>
            <li>Careers</li>
            <li>Press Releases</li>
            <li>Amazon Science</li>
          </ul>
          <ul>
            <li>Connect with US</li>
            <li>Facbook</li>
            <li>Twitter</li>
            <li>Instagram</li>
          </ul>
          <ul>
            <li>Make Money with Us</li>
            <li>Sell on Amazon</li>
            <li>Sell under Amazon Accelerator</li>
            <li>Protect and Build Your Brand</li>
            <li>Amazon Global Selling</li>
            <li>Become an Affilate</li>
            <li>Fulfilment by Amazon</li>
            <li>Advertise Your Products</li>
            <li>Amazon Pay on Merchants</li>
          </ul>
          <ul>
            <li>Let Us Help You</li>
            <li>COVID-19 and Amazon</li>
            <li>Your Account</li>
            <li>Returns centre</li>
            <li>100% Purchase Protection</li>
            <li>Amazon App Download</li>
            <li>Help</li>
          </ul>
        </div>
        <div className="sh-part-2">
          <div className="foot-logo">
            <button>
              <i className="fa-solid fa-globe"></i>
              English
              <i className="fa-solid fa-sort"></i>
            </button>
          </div>
          <div className="locations">
            <span>Australia</span>
            <span>Brazil</span>
            <span>Canada</span>
            <span>China</span>
            <span>France</span>
            <span>Germany</span>
            <span>Itlay</span>
            <span>Japan</span>
            <span>Mexico</span>
            <span>Netherlands</span>
            <span>Poland</span>
            <span>Singapore</span>
            <span>Spain</span>
            <span>Turkey</span>
            <span>United Arab Emirates</span>
            <span>United Kingdom</span>
            <span>United States </span>
          </div>
        </div>

       
      </div>

      <footer>
        <div className="footer-part-1">
          <ul>
            <li>AbeBooks</li>
            <li>Books, art</li>
            <li>&amp; collectibles</li>
          </ul>
          <ul>
            <li>Amazon Web Services</li>
            <li>Scalable Cloud</li>
            <li>Computing Services</li>
          </ul>
          <ul>
            <li>Audible</li>
            <li>Download</li>
            <li>Audio Books</li>
          </ul>
          <ul>
            <li>DPReview</li>
            <li>Digital</li>
            <li>Photography</li>
          </ul>
          <ul>
            <li>IMDb</li>
            <li>Movies, TV</li>
            <li>&amp; Celebrities</li>
          </ul>
          <ul>
            <li>Amazon Bussiness</li>
            <li>Everything For</li>
            <li>Your Bussiness</li>
          </ul>
          <ul>
            <li>Prime Now</li>
            <li>2-Hours Delivery</li>
            <li>on Everyday Items</li>
          </ul>
          <ul>
            <li>Amazon Prime Music</li>
            <li>100 million songs, ad-free</li>
            <li>Over 15 million podcast episodes</li>
          </ul>
        </div>

       
        <div className="footer-part-2">
          <p>
            <a href="/">Conditions of Use &amp; Sale</a>
            <a href="/">Privacy Notice</a> <a href="/">Interest-Based Ads</a>
          </p>
          <p>&copy; 1996-2024, Amazon.com, Inc. or its affilates</p>
        </div>
      </footer>
    </>
  )
}
