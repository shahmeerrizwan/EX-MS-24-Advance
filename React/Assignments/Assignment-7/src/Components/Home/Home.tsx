import React from 'react'
import './Home.css'
import img1 from '../../Assets/bigImg1.jpg'
import img2 from '../../Assets/bigImg2.jpg'
import img3 from '../../Assets/bigImg.jpg'
import img4 from '../../Assets/bigImg00.jpg'
import img5 from '../../Assets/bigImg000.jpg'
import img7 from '../../Assets/bigImg3.jpg'
import img8 from '../../Assets/bigImg4.jpg'


export default function Home() {
  return (
    <>
    <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img className="d-block w-100" src={img1} alt="First slide" />
    </div>
    <div className="carousel-item">
      <img className="d-block w-100" src={img2} alt="Second slide" />
    </div>
    <div className="carousel-item">
      <img className="d-block w-100" src={img3} alt="Third slide" />
    </div>
    <div className="carousel-item">
      <img className="d-block w-100" src={img4} alt="Third slide" />
    </div>
    <div className="carousel-item">
      <img className="d-block w-100" src={img5} alt="Third slide" />
    </div>
    <div className="carousel-item">
      <img className="d-block w-100" src={img1} alt="Third slide" />
    </div>
    <div className="carousel-item">
      <img className="d-block w-100" src={img7} alt="Third slide" />
    </div>
    <div className="carousel-item">
      <img className="d-block w-100" src={img8} alt="Third slide" />
    </div>
  </div>
  <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="sr-only">Previous</span>
  </a>
  <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="sr-only">Next</span>
  </a>
</div>
   <div className="blur_img" ></div>
   
    </>
  )
}
