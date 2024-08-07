import './Card1.css'
import img1 from '../../../Assets/box111.jpg'
import img2 from '../../../Assets/box112.jpg'
import img3 from '../../../Assets/box122.jpg'
import img4 from '../../../Assets/box123.jpg'
import img5 from '../../../Assets/box124.jpg'
import img6 from '../../../Assets/box131.jpg'
import img7 from '../../../Assets/box141.jpg'
import img8 from '../../../Assets/box151.jpg'
import img9 from '../../../Assets/box161.jpg'
import img10 from '../../../Assets/box162.jpg'
import img11 from '../../../Assets/box163.jpg'
import img12 from '../../../Assets/box164.jpg'
import img13 from '../../../Assets/box151.jpg'
import img14 from '../../../Assets/box172.jpg'
import img15 from '../../../Assets/box174.jpg'
import img16 from '../../../Assets/box181.jpg'
import img17 from '../../../Assets/box182.jpg'
import img18 from '../../../Assets/box183.jpg'
import img19 from '../../../Assets/box184.jpg'
import { Link} from 'react-router-dom'


export default function Card1() {

  
  return (
    <>
      <div className="box1">
                    <div className="box boxIn2">
                        <div>
                            <h2>Keep shopping for</h2>
                            <div>
                                <Link to="/products">
                                    <div>
                                        <img src={img1} alt="" />
                                    </div>
                                    <div>
                                        <span>Taped diapers</span>
                                        <br/>
                                        <span className="view">1 viewed</span>
                                    </div>
                                </Link>

                                <Link to="/products">
                                    <div>
                                        <img src={img2} alt="" />
                                    </div>
                                    <div>
                                        <span>Hi-fi & home audio speakers</span>
                                        <br/>
                                        <span className="view">1 viewed</span>
                                    </div>
                                </Link>
                            </div>
                            <Link className="seeOffer" to="/products">view your browsing history</Link>
                        </div>
                    </div>
                    <div className="box boxIn4">
                        <div>
                            <h2>Smart Phones that suit your budget</h2>

                            <div>
                                <div>
                                    <div>
                                        <Link to="/products">
                                            <div>
                                                <img src={img5} alt="" />
                                            </div>
                                            <div>
                                                <span>
                                                    Budget | Under RS 10,000
                                                </span>
                                            </div>
                                        </Link>
                                    </div>
                                    <div>
                                        <Link to="/products">
                                            <div>
                                                <img src={img3} alt="" />
                                            </div>
                                            <div>
                                                <span>
                                                    Mid range | RS 10,000 - RS 25,000
                                                </span>
                                            </div>
                                        </Link>
                                    </div>
                                </div>

                                <div>
                                    <div>
                                        <Link to="/products">
                                            <div>
                                                <img src={img4} alt="" />
                                            </div>
                                            <div>
                                                <span>
                                                    Premium | RS 25,000 - 40,000
                                                </span>
                                            </div>
                                        </Link>
                                    </div>
                                    <div>
                                        <Link to="/products">
                                            <div>
                                                <img src={img5} alt="" />
                                            </div>
                                            <div>
                                                <span>
                                                    Ultra Premium | Above RS 40,000
                                                </span>
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            <Link className="seeOffer" to="/products">See all offers</Link>
                        </div>
                    </div>
                    <div className="box boxIn1">
                        <div>
                            <h2>Great Freedom sale</h2>
                            <div>
                                <Link to="/products">
                                    <div>
                                        <img src={img6} alt="" />
                                    </div>
                                </Link>
                            </div>
                            <Link className="seeOffer" to="/products">See all</Link>
                        </div>
                    </div>
                    <div className="box boxButton hidden">
                        <div>
                            <div className="last-sign-in">
                                <h2>Sign in for your best experience</h2>
                                <button>Sign in securely</button>
                            </div>
                            <hr className="hr_color" />
                            <div className='cent'>
                                <Link to="/products">
                                    <div>
                                        <img src={img7} alt="" />
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <br/>
                    <div className="box boxIn1">
                        <div>
                            <h2>Starting RS 129 | Monitors, storage, accessories & more</h2>
                            <div>
                                <Link to="/products">
                                    <div>
                                        <img src={img8} alt="" />
                                    </div>
                                </Link>
                            </div>
                            <Link className="seeOffer" to="/products">See all offers</Link>
                        </div>
                    </div>
                    <div className="box boxIn4">
                        <div>
                            <h2>Starting RS 79 | Home, kitchen & outdoors</h2>

                            <div>
                                <div>
                                    <div>
                                        <Link to="/products">
                                            <div>
                                                <img src={img9} alt="" />
                                            </div>
                                            <div>
                                                <span>
                                                    Home decor & essentials
                                                </span>
                                            </div>
                                        </Link>
                                    </div>
                                    <div>
                                        <Link to="/products">
                                            <div>
                                                <img src={img10} alt="" />
                                            </div>
                                            <div>
                                                <span>
                                                    Cookware & Dining
                                                </span>
                                            </div>
                                        </Link>
                                    </div>
                                </div>

                                <div>
                                    <div>
                                        <Link to="/products">
                                            <div>
                                                <img src={img11} alt="" />
                                            </div>
                                            <div>
                                                <span>
                                                    Furniture and mattresses
                                                </span>
                                            </div>
                                        </Link>
                                    </div>
                                    <div>
                                        <Link to="/products">
                                            <div>
                                                <img src={img12} alt="" />
                                            </div>
                                            <div>
                                                <span>
                                                    Tools & home improvement
                                                </span>
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            <Link className="seeOffer" to="/products">See all offers</Link>
                        </div>
                    </div>
                    <div className="box boxIn4">
                        <div>
                            <h2>Up to 70% off | Deals on Amazon Brands & more</h2>

                            <div>
                                <div>
                                    <div>
                                        <Link to="/products">
                                            <div>
                                                <img src={img13} alt="" />
                                            </div>
                                            <div>
                                                <span>
                                                    Up to 70% off | Home & kitchen
                                                </span>
                                            </div>
                                        </Link>
                                    </div>
                                    <div>
                                        <Link to="/products">
                                            <div>
                                                <img src={img14} alt="" />
                                            </div>
                                            <div>
                                                <span>
                                                    Up to 70% off | Electronic accessories
                                                </span>
                                            </div>
                                        </Link>
                                    </div>
                                </div>

                                <div>
                                    <div>
                                        <Link to="/products">
                                            <div>
                                                <img src={img14} alt="" />
                                            </div>
                                            <div>
                                                <span>
                                                    Up to 60% off | Daily essentials
                                                </span>
                                            </div>
                                        </Link>
                                    </div>
                                    <div>
                                        <Link to="/products">
                                            <div>
                                                <img src={img15} alt="" />
                                            </div>
                                            <div>
                                                <span>
                                                    Under RS 599 | Clothing, shoes & more
                                                </span>
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            <Link className="seeOffer" to="/products">Prime Early | See all offers</Link>
                        </div>
                    </div>
                    <div className="box boxIn4 hidden">
                        <div>
                           
                            <h2>Cases and covers for top smartphones</h2>
                        

                            <div>
                                <div>
                                    <div>
                                        <Link to="/products">
                                            <div>
                                                <img src={img16} alt="" />
                                            </div>
                                            <div>
                                                <span>
                                                    iPhone 14 | Starting RS 89
                                                </span>
                                            </div>
                                        </Link>
                                    </div>
                                    <div>
                                        <Link to="/products">
                                            <div>
                                                <img src={img17} alt="" />
                                            </div>
                                            <div>
                                                <span>
                                                    Samsung Galaxy S22 | Starting RS 79
                                                </span>
                                            </div>
                                        </Link>
                                    </div>
                                </div>

                                <div>
                                    <div>
                                        <Link to="/products">
                                            <div>
                                                <img src={img18} alt="" />
                                            </div>
                                            <div>
                                                <span>
                                                    OnePlus Nord CE 3 Lite | Starting RS 79
                                                </span>
                                            </div>
                                        </Link>
                                    </div>
                                    <div>
                                        <Link to="/products">
                                            <div>
                                                <img src={img19} alt="" />
                                            </div>
                                            <div>
                                                <span>
                                                    Redmi 12C | Starting RS 79
                                                </span>
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            </div>

                             <div> 
                            <Link className="seeOffer" to="/products">See all offers</Link>
                           </div>
                        </div>
                    </div>
                </div>
    </>
  )
}





















