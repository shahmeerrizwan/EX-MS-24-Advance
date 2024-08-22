import React from 'react'
import  { useState, useEffect } from 'react';
import './Navbar.css'
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../Store'; // Import the RootState type
import { removeFromCart, updateQuantity } from '../../Store/CartSlice';
import amazonLogo from '../../Assets/amazonLogo.png'
import cartpic from '../../Assets/cart.png'
import facebook from '../../Assets/facebok.svg'
import google from '../../Assets/googleIcon.svg'
import phone from '../../Assets/phone.svg'
import EmailPic from '../../Assets/emal__login.svg'
import profilePice from '../../Assets/avatar.png'
import myadd from '../../Assets/myadd.svg'
import Saved from '../../Assets/saved.svg'
import Discount from '../../Assets/discount.svg'
import Help from '../../Assets/help.svg'
import Setting from '../../Assets/setting.svg'
import LogOutImg from '../../Assets/logout.svg'
import amazonLogoMobile from '../../Assets/amazon-mobile-logo-white.png'


import Swal from 'sweetalert2';
import {  onAuthStateChanged, SignIn, SignUp , db, auth} from '../../Firebase/FirebaseConfig';
import { Link, useNavigate } from 'react-router-dom';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { useSearch } from '../Search/SearchContext';
import {  signOut } from 'firebase/auth';





export default function Navbar() {
  const [isVisible, setIsVisible] = useState(false);

const navigate = useNavigate()
 



  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  
  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });

  };

// Modal 
 
  const [modal, setModal] = useState(() => {
    return localStorage.getItem('modalState') === 'true'; 
  });

  const toggleModal = () => {
    const newModalState = !modal;
    setModal(newModalState);
    localStorage.setItem('modalState', newModalState.toString()); 
  };

  useEffect(() => {
    document.body.classList.toggle("active-modal", modal);
  }, [modal]);

  const [registerModal, setRegisterModal] = useState(() => {
    return localStorage.getItem('modalState1') === 'true';
  });

  const [signupModal, setSignupModal] = useState(() => {
    return localStorage.getItem('modalState2') === 'true';
  });

  const ToggleRegModal = () => {
    setLoginModal(false)

    const newModalState = !registerModal;
    setRegisterModal(newModalState);
    localStorage.setItem('modalState1', newModalState.toString());

    if (newModalState) {
      setSignupModal(false);
      localStorage.setItem('modalState2', 'false');
    }
  };

  const ToggleSignup = () => {
    const newModalState = !signupModal;
    setSignupModal(newModalState);
    localStorage.setItem('modalState2', newModalState.toString());

    if (newModalState) {
      setRegisterModal(false);
      localStorage.setItem('modalState1', 'false');
    }
  };

  const [loginModal, setLoginModal] = useState(() => {
    return localStorage.getItem('modalStateLogin') === 'true';
  });
  
  const ToggleLogin = () => {
      setLoginModal(false)

    const newModalState = !loginModal;
    setLoginModal(newModalState);
    localStorage.setItem('modalStateLogin', newModalState.toString());
  
    if (newModalState) {
      setRegisterModal(false); 
      localStorage.setItem('modalState1', 'false');
    }
  };
  

  useEffect(() => {
    if (registerModal || signupModal ||modal || loginModal) {
      document.body.classList.add("active-modal-1");
    } else {
      document.body.classList.remove("active-modal-1");
    }
  }, [registerModal, signupModal,modal,loginModal]);

  const errMessage = ()=>{
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Something went wrong! Use Another Method",
      footer: '<Link to="https://firebase.google.com/docs/auth">Why do I have this issue?</Link>'
  });
  }
// Get Data

const dispatch = useDispatch();
const cart = useSelector((state: RootState) => state.cart.cart);

const handleRemove = (id: number) => {
  dispatch(removeFromCart(id));
};

const handleQuantityChange = (id: number, quantity: number) => {
  dispatch(updateQuantity({ id, quantity }));
};

const total = cart.reduce((acc: number, item: any) => acc + item.price * item.quantity, 0);



 
// Firebase
const [firstName,setFirstName] = useState();
const [lastName,setLastName] = useState();
const [email, setEmail] =  useState<any>()
const [password, setPassword] =  useState<any>()



const [isLoggedInWithEmail, setIsLoggedInWithEmail] = useState<boolean>(false);


const Register = async () => {

  if (!email || !password || !firstName || !lastName) {
    Swal.fire({
        icon: "error",
        title: "Incomplete Information",
        text: "Please fill in all fields.",
    });
    return
  }

  try {
    Swal.fire({
      title: "Processing...",
      text: "Signing up...",
      allowOutsideClick: false,
      showConfirmButton: false,
      willOpen: () => {
        Swal.showLoading();
      }
    });

    await SignUp({ email, password, firstName, lastName });
    setIsLoggedInWithEmail(false); 

    Swal.fire({
      title: "Success!",
      text: "User Registered Successfully. Go & Login.",
      icon: "success",
    });
    
    ToggleRegModal()
    ToggleLogin()

  } catch (error: any) {
    let errorMessage = "";

    switch (error.code) {
      case 'auth/invalid-email':
        errorMessage = "Invalid email format.";
        break;
      case 'auth/user-disabled':
        errorMessage = "This user has been disabled.";
        break;
      case 'auth/user-not-found':
        errorMessage = "No user found with this email.";
        break;
      case 'auth/wrong-password':
        errorMessage = "Incorrect password.";
        break;
      case 'auth/too-many-requests':
        errorMessage = "Too many unsuccessful login attempts. Please try again later.";
        break;
      case 'auth/network-request-failed':
        errorMessage = "Network error. Please check your internet connection.";
        break;
      case 'auth/operation-not-allowed':
        errorMessage = "Email/password login is not enabled.";
        break;
      case 'auth/weak-password':
        errorMessage = "Password is too weak. Please choose a stronger password.";
        break;
      case 'auth/email-already-in-use':
        errorMessage = "This email is already registered. Please use a different email or login.";
        break;
      case 'auth/invalid-credential':
        errorMessage = "Email/Password Not Registered.";
        break;
      case 'auth/invalid-verification-code':
        errorMessage = "Invalid verification code. Please check the code and try again.";
        break;
      case 'auth/invalid-verification-id':
        errorMessage = "Invalid verification ID. Please try again.";
        break;
      default:
        console.log('Unhandled error code:', error.code);
        errorMessage = "An unknown error occurred. Please try again later.";
        break;
    }

    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: errorMessage,
      footer: `<a href="https://firebase.google.com/docs/auth/admin/errors" target='_blank'>Why do I have this issue?</a>`,
    });
  }
};

const login = async ()=>{
  if (!email || !password ) {
    Swal.fire({
        icon: "error",
        title: "Incomplete Information",
        text: "Please fill in all fields.",
    });
    return
  }

  try {
   Swal.fire({
   title: "Processing...",
   text: "Signing in...",
   allowOutsideClick: false,
   showConfirmButton: false,
   willOpen: () => {
     Swal.showLoading();
   }
 });
   await SignIn(email,password);
   setIsLoggedInWithEmail(true);
   Swal.fire({
               title: "Success!",
               text: "User Logged In Successfully",
               icon: "success",
             });
    setLoginModal(false); 
    navigate('/')
    ToggleLogin()
  } 
  catch (error:any) {
   
    let errorMessage = "";

    switch (error.code) {
      case 'auth/invalid-email':
        errorMessage = "Invalid email format.";
        break;
      case 'auth/user-disabled':
        errorMessage = "This user has been disabled.";
        break;
      case 'auth/user-not-found':
        errorMessage = "No user found with this email.";
        break;
      case 'auth/wrong-password':
        errorMessage = "Incorrect password.";
        break;
      case 'auth/too-many-requests':
        errorMessage = "Too many unsuccessful login attempts. Please try again later.";
        break;
      case 'auth/network-request-failed':
        errorMessage = "Network error. Please check your internet connection.";
        break;
      case 'auth/operation-not-allowed':
        errorMessage = "Email/password login is not enabled.";
        break;
      case 'auth/weak-password':
        errorMessage = "Password is too weak. Please choose a stronger password.";
        break;
      case 'auth/email-already-in-use':
        errorMessage = "This email is already registered. Please use a different email or login.";
        break;
      case 'auth/invalid-credential':
        errorMessage = "Email/Password Not Registered.";
        break;
      case 'auth/invalid-verification-code':
        errorMessage = "Invalid verification code. Please check the code and try again.";
        break;
      case 'auth/invalid-verification-id':
        errorMessage = "Invalid verification ID. Please try again.";
        break;
      default:
        console.log('Unhandled error code:', error.code);
        errorMessage = "An unknown error occurred. Please try again later.";
        break;
    }
   Swal.fire({
                icon: "error",
                title: "Oops...",
                text: errorMessage,
                footer: `<Link to="https://firebase.google.com/docs/auth/admin/errors" target='_blank'>Why do I have this issue?</Link>`,
              });
  }
}



const [userName, setUserName] = useState<any>('');
const [currentUser, setCurrentUser] = useState<any>();





useEffect(() => {
  onAuthStateChanged(auth, async (user: any) => {
    if (user) {
      const userEmail = user.email;
      setCurrentUser(user);
      if (userEmail) {
        const q = query(
          collection(db, 'Users'),
          where('email', '==', userEmail)
        );
        const querySnapshot = await getDocs(q);

        if (!querySnapshot.empty) {
          const userDoc = querySnapshot.docs[0];
          const userData = userDoc.data();

          setUserName(userData.firstName);
        } else {
          console.error('No matching user found in Firestore');
        }
      }
    } else {
      setUserName(null);
    }
  });
}, []);

const goToCheckOut = async () => {
  if (currentUser) {
    document.body.className = ''; 
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
    navigate('/checkout');
    toggleModal();
  } else {
    await Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Please log in to proceed.',
      footer: '<a href="https://firebase.google.com/docs/auth/admin/errors" target="_blank">Why do I have this issue?</a>',
    });
    toggleModal();
    ToggleLogin();
  }
};


const [toggleProfile, setToggleProfile] = useState<boolean>(false);

const toggleDropdown = () => {
  setToggleProfile(!toggleProfile);
};


  const handleLogout = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: "btn btn-success",
        cancelButton: "btn btn-danger"
      },
      buttonsStyling: false
    });
  
    swalWithBootstrapButtons.fire({
      title: "Are you sure you want to log out?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, log me out",
      cancelButtonText: "No, cancel!",
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        signOut(auth)
          .then(() => {
            swalWithBootstrapButtons.fire({
              title: "Logged Out!",
              text: "You have been logged out successfully.",
              icon: "success"
            }).then(() => {
              window.location.href = '/';
            });
          })
          .catch((error) => {
            console.error('Error logging out:', error);
            swalWithBootstrapButtons.fire({
              title: "Oops!",
              text: "Something went wrong while logging out.",
              icon: "error"
            });
          });
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        swalWithBootstrapButtons.fire({
          title: "Cancelled",
          text: "You are still logged in :)",
          icon: "error"
        });
      }
    });
  };









const { searchQuery, setSearchQuery } = useSearch();

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(event.target.value);
    };
  return (
    <>
      <div className="header">
      <Link to='/'>  <img
        className="header__logo pc"
        src={amazonLogo} alt='...'
      /> </Link>
      <Link to='/'>  <img
        className="header__logo  mobile"
        src={amazonLogoMobile} alt='...'
      /> </Link>
    
<div className='loc'>
  <div className='loc-1'>
<span>Deliver to</span>
<span><i className="fa-solid fa-location-dot"></i> Pakistan</span>
  </div>
</div>
    <div className="header__search">
      <input className="header__searchInput" value={searchQuery}
                onChange={handleSearchChange} type="text" />
      <i className="fa-solid fa-magnifying-glass header__searchIcon" ></i>
    </div>
    
    <div className="header__nav">
      
 { isLoggedInWithEmail ?   
  <div className="user-menu-container right-drop">
  <div className="user-icon" onClick={toggleDropdown}>
    <img src={profilePice} className="avatar" alt="User Icon" />
  </div>
  {toggleProfile && (
    <div id="user-dropdown" className="dropdown-content ">
      <div className="drop-left">
        <img src={profilePice} alt="Profile" />
      </div>
      <p>
        👋 Hello, <br />
      {userName?<strong id="userName">{userName}</strong> : <strong id="userName">No Name</strong> }  
      </p>
      <button>View and edit your profile </button>
      <div className="items">
        <hr />
        <Link to="" ><img src={myadd} alt="My Ads" /> My ads</Link>
        <Link to=""><img src={Saved} alt="Favourites & Saved" /> Favourites & Saved searches</Link>
        <Link to=""><i className="fa-solid cent fa-eye"></i> Public Profile</Link>
        <Link to=""><img src={Discount} alt="Discounted Packages" /> Buy Discounted Packages</Link>
        <hr />
        <Link to=""><img src={Help} alt="Help" /> Help</Link>
        <Link to=""><img src={Setting} alt="Settings" /> Settings</Link>
        <hr />
        <button  onClick={handleLogout}>

        <a id="logoutButton" href="/"><img src={LogOutImg} alt="Log Out"  /> Log Out</a>
        </button>
      </div>
    </div>
  )}
</div>
        : <div className="header__option">
          <span className="header__optionLineOne">Hello Guest</span>
          <span className="header__optionLineTwo" onClick={ToggleRegModal}>Sign In</span>
        </div> }
      

      
        <div className="header__option hide">
          <span className="header__optionLineOne">Returns</span>
          <span className="header__optionLineTwo">& Orders</span>
        </div>
      
      

      <div className="header__option hide">
        <span className="header__optionLineOne">Your</span>
        <span className="header__optionLineTwo">Prime</span>
      </div>

      
        <div className="header__optionBasket"  onClick={toggleModal} >
          <div className='cartimg'>

        <img src={cartpic} alt="" />
          </div>
          <span className="header__optionLineTwo header__basketCount">
            {cart.length}
          </span>
          <p className='cart'>Cart</p>
        </div>
      
    </div>
  </div> 

{/* <nav > */}
                {/* <input type="checkbox" id="click" checked={menuOpen} onChange={() => setMenuOpen(!menuOpen)} />
                <label htmlFor="click" className="menu-btn">
                    <i className="fas fa-bars"></i>
                </label>
                    <div className='logoo'>
                      <Link to='/'><img  src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="" /></Link>
                      </div>
                      <ul>
                        <li>
                           <div className='loc'>
                               <div className='loc-1'>
                                  <span>Deliver to</span>
                                  <span><i className="fa-solid fa-location-dot"></i> Pakistan</span>
                                </div>
                           </div>  
                        </li>
                        <li>
                           <div className="header__search">
                              <input className="header__searchInput" type="text" />
                              <i className="fa-solid fa-magnifying-glass header__searchIcon"></i>
                           </div>
                        </li>
                        <li>
                        <div className="header__option">
          <span className="header__optionLineOne">Hello Guest</span>
          <span className="header__optionLineTwo">Sign In</span>
        </div>
                        </li>

                      </ul> */}
  
   
                {/* <ul>
                    <li onClick={handleMenuItemClick}>Home</li>
                    <li onClick={handleMenuItemClick}>Service</li>
                    <li onClick={handleMenuItemClick}>Feature</li>
                    <li onClick={handleMenuItemClick}>Product</li>
                    <li onClick={handleMenuItemClick}>Testimonial</li>
                    <li onClick={handleMenuItemClick}>FAQ</li>
                    <li onClick={handleMenuItemClick}><button className='btn btn-login show'>Login</button></li>
                    <li onClick={handleMenuItemClick}>  <button className='btn btn-signup show'>SignUp</button></li>
                </ul> */}
                {/* <div className='btn-main hide'> <button className='btn btn-login hide'>Login</button>
                    <button className='btn btn-signup hide'>SignUp</button>
                    </div>
            </nav> */}


  {/* GO TO TOP BITTON */}
  <div className="go-to-top">
      {isVisible && (
        <button onClick={scrollToTop} className="go-to-top-button">
          <i className="fas fa-arrow-up"></i>
        </button>
      )}
    </div>
{/* Modal  */}

    {modal && (
                <div className='modal'>
                    <div className='overlay'></div>
                    <div className='modal-content  pad-0'>
             <main>
              <h2 className='siz'>Your Cart</h2>
    <div className="basket">
      <div className="basket-module">
        <label htmlFor="promo-code">Enter a promotional code</label>
        <input id="promo-code" type="text" name="promo-code" maxLength={5} className="promo-code-field"/>
        <button className="promo-code-cta">Apply</button>
      </div>
      <div className="basket-labels">
        <ul>
          <li className="item item-heading">Item</li>
          <li className="price-1">Price</li>
          <li className="quantity">Quantity</li>
          <li className="subtotal">Subtotal</li>
        </ul>
      </div>
      {cart && cart.length > 0 ? (
  cart.map((item: any, id: any) => (
    <div key={id} className="basket-product">
      <div className="item">
        <div className="product-image">
          <img src={item.images.length > 0 ? item.images[0] : item.category.image} alt="404 Error" className="product-frame"/>
        </div>
        <div className="product-details">
          <h4>{item.title}</h4>
          <p><strong>{typeof item.category === 'string' ? item.category : ''}</strong></p>
          <p>Product id - {item.id}</p>
        </div>
      </div>
      <div className="price-1">${item.price}</div>
      <div className="quantity">
        <input
          type="number"
          min="1"
          value={item.quantity}
          onChange={(e) => handleQuantityChange(item.id, parseInt(e.target.value, 10))}
          className="quantity-field"
        />
      </div>
      <div className="subtotal">${item.price * item.quantity}</div>
      <div className="remove">
        <button className='promo-code-cta' onClick={() => handleRemove(item.id)}>Remove</button>
      </div>
    </div>
  ))
) : (
  <p className='empty'>No items in the cart</p>
)}


    </div>
    <aside>
      <div className="summary">
        <div className="summary-total-items"><span className="total-items"></span> Items in your Cart</div>
        <div className="summary-subtotal">
          <div className="subtotal-title">Subtotal</div>
          <div className="subtotal-value final-value">${total.toFixed(2)}</div>
          <div className="summary-promo hide">
            <div className="promo-title">Promotion</div>
            <div className="promo-value final-value" id="basket-promo"></div>
          </div>
        </div>
        <div className="summary-delivery">
          <select name="delivery-collection" className="summary-delivery-selection">
            <option value="0" >Select Collection or Delivery</option>
            <option value="collection">Collection</option>
            <option value="first-class"> 1st Class</option>
            <option value="second-class">2nd Class</option>
            <option value="signed-for"> Special Delivery</option>
          </select>
        </div>
        <div className="summary-total">
          <div className="total-title">Total</div>
          <div className="total-value final-value" id="basket-total">${total.toFixed(2)}</div>
        </div>
        <div className="summary-checkout">
          <button className="checkout-cta"  onClick={goToCheckOut}>Proceed to checkout</button>
        </div>
      </div>
    </aside>
  </main>
                    <button className='close-modal' onClick={toggleModal}>
                            &times;
                        </button>
                    </div>
                </div>
            )}
            {/* Modal  */}

    {registerModal && (
                <div className='modal'>
                    <div className='overlay'></div>
                  
                    <div className="login" id="login">
      <div className="login_form">
        <div className='m-l'> 
          <img
          className="modal-logo"
          src={amazonLogo}
          alt=" Logo"
        />
        </div>
        
        <h1>WELCOME TO AMAZON</h1>
        <button className="loginSign_button" onClick={errMessage} >
          <img src={facebook} alt="Facebook Logo" /> Continue with
          Facebook
        </button>
        <button className="loginSign_button" onClick={ToggleSignup} >
          <img src={google} alt="Google Icon" /> Create Your
          Account
        </button>
        <button className="loginSign_button" onClick={ToggleLogin} >
          <img src={EmailPic} alt="Email Icon" /> Login With Email
        </button>
        <button className="loginSign_button" onClick={errMessage} >
          <img src={phone}  alt="Phone Icon" /> Continue with Phone
        </button>
        <p>
          By continuing, you are accepting <b>Amazon Terms </b> of use and 
          <b> Privacy Policy</b>
        </p>
      </div>
                    <button className='close-modal' onClick={ToggleRegModal}>
                            &times;
                        </button>
    </div>
                  
                </div>
            )}



{signupModal && (
                <div className='modal signUp'>
                    <div className='overlay'></div>
                  
                    <div className="signUp_account " id='signUp'>
        <div className="icons_flex">
          <i className="fa-solid fa-arrow-left" onClick={ToggleRegModal} ></i>
        </div>
        <img
          src={amazonLogo}
          alt=""
        />
        <h2>Create Your Account</h2>
        <input type="text" id="name"  onChange={(e:any)=>{
                                      setFirstName(e.target.value)
                                      }} required placeholder="Your First Name" />
          <input type="text"   onChange={(e:any)=>{
                                        setLastName(e.target.value)
                                        }} id="age" required placeholder="Your Last Name" />
        <input type="email" onChange={(e) => {
                                  setEmail(e.target.value)
                                 }}  id="signEmail" required placeholder="Your Email" />
        <input
          type="password"
          id="signPassword"
          required
          onChange={(e) => {
            setPassword(e.target.value)
           }} 
          placeholder="Password"
        />
        <button className="next_button" id="signUpButton" onClick={()=>Register()} >Create an Account</button>
        <p>
          We won't reveal your phone number to anyone else nor use it to send
          you spam.
        </p>
          <button className='close-modal' onClick={ToggleSignup}>
                            &times;
                        </button>
      </div>
    
                </div>
            )}



{loginModal && (
                 <div className='modal signUp'>
                 <div className='overlay'></div>
               
                 <div className="signUp_account " id='signUp'>
     <div className="icons_flex">
       <i className="fa-solid fa-arrow-left" onClick={ToggleRegModal} ></i>
     </div>
     <img
       src={amazonLogo}
       alt=""
     />
    <h2>Enter Your Email</h2>
        <input type="email"  onChange={(e) => {
                                 setEmail(e.target.value)
                                 }} required placeholder="Email" />
        <input type="password"   onChange={(e) => {
                                 setPassword(e.target.value)
                                 }}  required placeholder="Password" />
        <button className="next_button" id="LoginButton" onClick={()=> login()}>Login</button>
        <p>
          We won't reveal your email to anyone else nor use it to send you spam.
        </p>
       <button className='close-modal' onClick={ToggleLogin}>
                         &times;
                     </button>
   </div>
 
             </div>
            )}

            {/* MOBILE SEARCH */}
              <div className="head-2">
      <input className="header__searchInput inp-2" value={searchQuery}
                onChange={handleSearchChange} placeholder='Search Amazon' type="text" />
      <i className="fa-solid fa-magnifying-glass header__searchIcon s-2"></i>
    </div>
{/* MOBILE LOCATION */}

            <div className='pak'>
     <div className='dotpro'>
  <i className="fa-solid fa-location-dot"></i> Deliver to Pakistan
  </div>
</div>
    </>
  )
}





















