import React from 'react'
import { Link } from 'react-router-dom'
import '../Components/Pages-Css/Product.css'

export default function Products() {
  return (
    <>
      <div className="containerr">
  <div className="card">
    <img src="https://images.unsplash.com/photo-1518674660708-0e2c0473e68e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fG9iamVjdHxlbnwwfHwwfHx8MA%3D%3D" alt="" />
    <div className="card-body">
      <div className="row">
        <div className="card-title">
          <h4>Nike Sneaker</h4>
          <h3>$120</h3>
        </div>
        <div className="view-btn">
          <Link to="">View Details</Link>
        </div>
      </div>
      <hr />
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi,
        dignissimos.
      </p>
      <div className="btnn-group">
        <div className="btnn">
          <Link to="">Buy Now</Link>
        </div>
        <Link to=""> Cancel</Link>
      </div>
    </div>
  </div>
</div>


    </>
  )
}
