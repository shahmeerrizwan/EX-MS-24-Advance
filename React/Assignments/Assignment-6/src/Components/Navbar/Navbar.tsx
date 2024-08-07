import  { useEffect, useState } from 'react';
import logo from '../../Assets/Logo.png';
import './Navbar.css';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { SignIn, SignUp } from '../Firebase/firebaseconfig';



const Navbar = () => {
    
    const [firstName,setFirstName] = useState();
    const [lastName,setLastName] = useState();
    const [menuOpen,setMenuOpen] = useState(false);
    const [signupModal,setSignupModal] = useState(false);
    const [loginModal,setLoginModal] = useState(false);
    const [email, setEmail] =  useState<any>()
    const [password, setPassword] =  useState<any>()
    
const navigate = useNavigate()

    if (signupModal) {
        document.body.classList.add("active-modal-2")
    } else {
        document.body.classList.remove("active-modal-2")
     }
    if (loginModal) {
        document.body.classList.add("active-modal")
    } else {
        document.body.classList.remove("active-modal")
     }

    const toggleMenu = () => setMenuOpen(!menuOpen);
    const closeMenu = () => setMenuOpen(false);

    const toggleSignupModal = () => {
        setSignupModal(!signupModal);
        setLoginModal(false); 
        if (!signupModal) {
            localStorage.setItem('signupModal', 'true');
        } else {
            localStorage.removeItem('signupModal');
        }
    };

    const toggleLoginModal = () => {
        setLoginModal(!loginModal);
        setSignupModal(false); 
        if (!loginModal) {
            localStorage.setItem('loginModal', 'true');
        } else {
            localStorage.removeItem('loginModal');
        }
    };

    const handleFormSubmit = (event:any) => {
        event.preventDefault();
         if (!email && password) {
            Swal.fire({
                icon: 'error', 
                title: 'Oops...',
                text: 'Please enter your email address!',
            });
            return;
        }
     };

     const handleFormSubmit1 = (event:any) => {
        event.preventDefault();
        if (!email && password) {
            Swal.fire({
                icon: 'error', 
                title: 'Oops...',
                text: 'Please enter your email address!',
            });
          }  }


    useEffect(() => {
        const isSignupModalOpen = localStorage.getItem('signupModal');
        const isLoginModalOpen = localStorage.getItem('loginModal');
        if (isSignupModalOpen === 'true') {
            setSignupModal(true);
        }
        if (isLoginModalOpen === 'true') {
            setLoginModal(true);
        }
    }, []);

const login = async ()=>{

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
    Swal.fire({
                title: "Success!",
                text: "User Logged In Successfully",
                icon: "success",
              });
     setLoginModal(false); 
     localStorage.clear()
     navigate('/dashboard')
   } 
   catch (error:any) {
    const errorMessage = error.message;
    Swal.fire({
                 icon: "error",
                 title: "Oops...",
                 text: errorMessage,
                 footer: `<a href="https://firebase.google.com/docs/auth/admin/errors" target='_blank'>Why do I have this issue?</a>`,
               });
   }
}
const Register = async () => {

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
        Swal.fire({
            title: "Success!",
            text: "User Registered Successfully . Go & Login.",
            icon: "success",
        });
        setSignupModal(false);
        setLoginModal(true);
        localStorage.clear()
    } catch (error:any) {
        const errorMessage = error.message || "Unknown error occurred.";

        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: errorMessage,
            footer: `<a href="https://firebase.google.com/docs/auth/admin/errors" target='_blank'>Why do I have this issue?</a>`,
        });
    }
};

    return (
        <>
            <nav>
                <input type="checkbox" id="click" checked={menuOpen} onChange={toggleMenu} />
                <label htmlFor="click" className="menu-btn">
                    <i className="fas fa-bars"></i>
                    <div><Link to='/'><img className='logoo' src={logo} alt="" /></Link></div>
                </label>
                <ul>
                    <li onClick={closeMenu}> <Link to="/">Home</Link> </li>
                    <li onClick={closeMenu}> <Link to="/product">Products</Link> </li>
                    <li onClick={closeMenu}> <Link to="/contact">Contact</Link> </li>
                    <li onClick={closeMenu}> <Link to="/reviews">Reviews</Link> </li>
                    <li className='show' onClick={toggleLoginModal}> <button className='btn btn-login'>Login</button> </li>
                    <li className='show rg' onClick={toggleSignupModal}> <button className='btn btn-signup'>SignUp</button> </li>
                </ul>
                <div className='btn-main hide'>
                    <button className='btn btn-login hide lg-btn' onClick={toggleLoginModal}>Login</button>
                    <button className='btn btn-signup hide' onClick={toggleSignupModal}>SignUp</button>
                </div>
            </nav>

            {/* Login Modal */}
            {loginModal && (
                <div className='modal'>
                    <div className='overlay'></div>
                    <div className='modal-content'>
                        <h2 className='h1-1'>LOGIN NOW</h2>
                        <div className='top-2'>
                            <form className='log' onSubmit={handleFormSubmit1} >
                                <input   
                                 onChange={(e) => {
                                 setEmail(e.target.value)
                                 }}
                                 className='inp' 
                                 type='email'
                                 id='email'
                                 placeholder='Enter Your Email Address' 
                                 required />
                                <input 
                                 onChange={(e) => {
                                 setPassword(e.target.value)
                                 }} 
                                 className='inp'
                                 type='password' 
                                 id='password' 
                                 placeholder='Enter Your Password' 
                                 required />
                              <div className='cent'>
                                <button className='btn-pr l-2' type='submit' onClick={()=> login()} >Login</button>
                              </div> 
                               <p className='sm'> 
                                            Before proceeding, please take a moment to review our terms and policies.
                                            These guidelines outline the rules and expectations for using our platform,
                                            ensuring a safe and respectful environment for all users. Our privacy policy
                                            details how we collect, use, and protect your personal information, prioritizing
                                            your security and confidentiality.
                                            </p>
                            </form>
                            <div className='acc-1'>
                                <p>Don't have an account? <br />
                                    <button className='btn btn-login l-6'  onClick={toggleSignupModal}>Signup Now</button>
                                </p>
                            </div>
                        </div>
                        <button className='close-modal' onClick={toggleLoginModal}>&times;</button>
                    </div>
                </div>
            )}

            {/* Signup Modal */}
            {signupModal && (
                <div className='modal'>
                    <div className='overlay'></div>
                    <div className='modal-content'>
                        <h2 className='h1-1'>SIGNUP NOW</h2>
                        <p className='p-l-1'>Register Now</p>
                        <div className='top-2'>
                            <form onSubmit={handleFormSubmit}>
                                <div className='inp-up'>
                                    <input  
                                      onChange={(e:any)=>{
                                      setFirstName(e.target.value)
                                      }}
                                      type="text"
                                      id='firstName'
                                      placeholder='Enter Your First Name'
                                      required />
                                    <input 
                                        onChange={(e:any)=>{
                                        setLastName(e.target.value)
                                        }}
                                    type="text" 
                                    id='lastName' 
                                    placeholder='Enter Your Last Name'
                                    required />
                                </div>
                                <input onChange={(e) => {
                                  setEmail(e.target.value)
                                 }} 
                                 className='inp' 
                                 type='email'
                                 placeholder='Enter Your Email Address' 
                                 required />
                                <div className='inp-3'>
                                    <input  
                                  onChange={(e) => {
                                  setPassword(e.target.value)
                                 }} 
                                 type="password" 
                                 placeholder='Enter Password' 
                                 required />
                                </div>
                                <span>
                                    <p>
                                        <input id='termsCheckbox' type='checkbox' required className='in' />
                                        <label htmlFor='termsCheckbox'>
                                            Before proceeding, please take a moment to review our terms and policies.
                                            These guidelines outline the rules and expectations for using our platform,
                                            ensuring a safe and respectful environment for all users. Our privacy policy
                                            details how we collect, use, and protect your personal information, prioritizing
                                            your security and confidentiality.
                                        </label>
                                    </p>
                                </span>
                                <div className='cent'>
                                <button className='btn-pr' onClick={()=>Register()}  type='submit'>Signup</button>
                           </div> 
                           </form>
                            <div className='acc'>
                                <p>Already have an account? <br />
                                    <button className='btn btn-login' onClick={toggleLoginModal}>Login Now</button>
                                </p>
                            </div>
                        </div>
                        <button className='close-modal' onClick={toggleSignupModal}>&times;</button>
                    </div>
                </div>
            )}
        </>
    );
};

export default Navbar;