import React, { useEffect, useState } from 'react'
import './Footer.css'
import amazonLogo from '../../Assets/amazonLogo.png'

import Swal from 'sweetalert2'
import { auth, db, onAuthStateChanged, SignIn } from '../../Firebase/FirebaseConfig'
import { useNavigate } from 'react-router-dom'
import { collection, getDocs, query, where } from 'firebase/firestore'

export default function Footer() {

  const [email, setEmail] =  useState<any>()
  const [password, setPassword] =  useState<any>()

  const navigate = useNavigate()


  const [loginModal, setLoginModal] = useState(() => {
    return localStorage.getItem('modalStateLogin') === 'true';
  });
  

  if (loginModal) {
    document.body.classList.add("active-modal")
} else {
    document.body.classList.remove("active-modal")
 }
  const ToggleLogin = () => {
    const newModalState = !loginModal;
    setLoginModal(newModalState);
    localStorage.setItem('modalStateLogin', newModalState.toString());
  
    if (newModalState) {
      localStorage.setItem('modalState1', 'false');
    }
    
  
  };

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
      navigate('/')
      ToggleLogin()
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

  const [userName, setUserName] = useState<any>('');
  const [User,setUser]=useState<any>()
  
  useEffect(() => {
    
    onAuthStateChanged(auth, async (user:any) => {
      if (user) {
        setUser(user)
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
      <div className="newUser">
        <div className="newcustomer">
        {User ? <div className="last-sign-in">
                                <h2>{userName} 👋</h2>
                                <button >Explore More</button>
                            </div> :<> <div className="last-sign-in">
                                <h2>Sign in for your best experience</h2>
                                <button onClick={ToggleLogin}>Sign in Now</button>
                            </div>     
          <p>New customer? <a href="/">Start here.</a></p></>
                            
                            }  
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
            <li>Linkedin</li>
            <li>Facbook</li>
            <li>Upwork</li>
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




      {loginModal && (
                 <div className='modal signUp'>
                 <div className='overlay'></div>
               
                 <div className="signUp_account " id='signUp'>
    
     <img
       src={amazonLogo}
       alt=""
     />
    <h2>Enter Your Email</h2>
        <input type="email" id="emailLogin"   onChange={(e) => {
                                 setEmail(e.target.value)
                                 }} required placeholder="Email" />
        <input type="password" id="passLogin"  onChange={(e) => {
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
    </>
  )
}
