import { Link, useNavigate} from 'react-router-dom'
import { auth, onAuthStateChanged, db, SignIn} from '../../../Firebase/FirebaseConfig';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { useEffect, useState } from 'react'
import Swal from 'sweetalert2'
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
import amazonLogo from '../../../Assets/amazonLogo.png'



export default function Card1() {
    const [userName, setUserName] = useState<any>('');
    const [email, setEmail] =  useState<any>()
    const [password, setPassword] =  useState<any>()
    const [loginPopUp,  setLoginPopUp] = useState<any>(() => {
        return localStorage.getItem('loginPopUp') === 'true';
      });
      const [isLoggedInWithEmail, setIsLoggedInWithEmail] = useState<boolean>(() => {
        const savedLoginState = localStorage.getItem('isLoggedInWithEmail');
        return savedLoginState === 'true';
      });
    // Navigate Function

    const navigate = useNavigate()

    const goToProduct = ()=>{
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
          });
    navigate('/products')
    }

    // Login Modal  
    
      const ToggleLogin= () => {
        setLoginPopUp(!loginPopUp)
      };

    useEffect(() => {
        localStorage.setItem('loginPopUp', loginPopUp);
        if (loginPopUp) {
          document.body.classList.add('active-modal-3');
        } else {
          document.body.classList.remove('active-modal-3');
        }
      }, [loginPopUp]);

    //   FireBase Function 

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
         localStorage.setItem('isLoggedInWithEmail', 'true');
      await   Swal.fire({
                     title: "Success!",
                     text: "User Logged In Successfully",
                     icon: "success",
                   });
          setLoginPopUp(false); 
          window.location.reload();
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
                errorMessage = "Email/Password Not Registered. ";
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


      useEffect(() => {
        onAuthStateChanged(auth, async (user:any) => {
          if (user) {
            const userEmail = user.email;
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
            setUserName(null); // No user is signed in
          }
        });
      }, [])

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
                          {isLoggedInWithEmail ? <div className="last-sign-in">
                                <h2>Have a Nice Day </h2>
                                <h2>{userName} 👋</h2>
                                <button onClick={goToProduct}>Explore More</button>
                            </div> :<div className="last-sign-in">
                                <h2>Sign in for your best experience</h2>
                                <button onClick={ToggleLogin}>Sign in securely</button>
                            </div>}  
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

{/* LOGIN MODAL CODE  */}

                {loginPopUp && (
        <div className='modal signUp'>
                 <div className='overlay'></div>
             <div className="signUp_account " id='signUp'>
                 <img
                 src={amazonLogo}
                 alt="404 Error"
                 />
                 <h2>Enter Your Email</h2>
                   <input type="email" 
                    onChange={(e) => {
                    setEmail(e.target.value)
                    }} 
                    required 
                    placeholder="Email" 
                    />
                   <input 
                   type="password"   
                   onChange={(e) => {
                   setPassword(e.target.value)
                   }}  
                   required 
                   placeholder="Password" 
                   />
                   <button className="next_button"
                    id="LoginButton"
                    onClick={()=> login()}
                    >Login
                    </button>
                   <p>
                    We won't reveal your email to anyone else nor use it to send you spam.
                   </p>
                    <button className='close-modal'
                     onClick={ToggleLogin}>
                     &times;
                   </button>
             </div>
 
        </div>
            )}
    </>
  )
}





















