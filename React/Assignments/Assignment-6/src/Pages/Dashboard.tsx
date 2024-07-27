import React, { useEffect, useState } from 'react'
import logo from '../../src/Assets/Logo.png';
import '../Components/Navbar/Navbar.css';
import { Link } from 'react-router-dom';
import Home from './Home'
import { onAuthStateChanged } from 'firebase/auth';
import { addProduct, auth, logout } from '../Components/Firebase/firebaseconfig';
import Swal from 'sweetalert2';

export default function Dashboard() {
    
    const [title, setTitle] = useState<string>('');
    const [price, setPrice] = useState<string>(''); 
    const [description, setDescription] = useState<string>(''); 
    const [category, setCategory] = useState<string>(''); 
    const [condition, setCondition] = useState<string>(''); 
    const [image, setImage] = useState<File | null>(null); 


    const [menuOpen,setMenuOpen] = useState(false);
    const [profileModal,setProfileModal] =  useState(() => {
        return localStorage.getItem('profileModal') === 'true';
    });
    const [productModal,setProductModal] =  useState(() => {
        return localStorage.getItem('productModal') === 'true';
    });
    const[user,setUser]=useState<any>()
  
    if (profileModal) {
        document.body.classList.add("active-modal")
    } else if(productModal){
        document.body.classList.add("active-modal")
    } else {
        document.body.classList.remove("active-modal")
     }

     const toggleProfileModal = () => {
        setProfileModal((prev) => {
            const newState = !prev;
            localStorage.setItem('profileModal', String(newState));
            return newState;
        });
    };

    const toggleProductModal = () => {
        setProductModal((prev) => {
            const newState = !prev;
            localStorage.setItem('productModal', String(newState));
            return newState;
        });
    };


    const toggleMenu = () => setMenuOpen(!menuOpen);
    const closeMenu = () => setMenuOpen(false);

   useEffect(() => {
   onAuthStateChanged(auth,(Users)=>{
    if (Users) {
        console.log("user Logged In",Users);
        setUser(Users)
      
    } else{
        console.log("user is signed Out");
        
    }
   })
   }, [])

   const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log(title, price, description, image, category, condition); 

    if (!title || !price || !description || !image || !category || !condition) {
        Swal.fire("Validation Error", "All fields are required.", "warning");
        return;
    }

    try {
        Swal.fire({
            title: "Processing...",
            text: "Sending Data ...",
            allowOutsideClick: false,
            showConfirmButton: false,
            willOpen: () => {
                Swal.showLoading();
            }
        });

        const priceNumber = parseFloat(price);
        await addProduct({ title, price: priceNumber, description, category, condition, image });

       
       await Swal.fire({
            icon: "success",
            title: "Product Added Successfully!",
            showConfirmButton: false,
            timer: 1500 
        });
await toggleProductModal()
        setTitle('');
        setPrice('');
        setDescription('');
        setCategory('');
        setCondition('');
        setImage(null); 

        console.log("Form submitted successfully");

    } catch (err: any) {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: err.message,
        });
    }
};

const twoFunc = ()=>{
    closeMenu()
    toggleProductModal()
}


  return (
    <>
      <Home/> 
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
                    <li onClick={twoFunc} className='pointer'> Add Products</li>
                    <li onClick={closeMenu}> <Link to="/reviews">Reviews</Link> </li>
                </ul>
                <div onClick={toggleProfileModal} className='nav-pro'>
                   <img  src="https://www.pngall.com/wp-content/uploads/5/User-Profile-PNG-Download-Image.png" alt="" />
                </div>
            </nav>



            {productModal && (
    <div className='modal'>
        <div className='overlay'></div>
        <div className='modal-content'>
            <h2 className='h1-1'>ADD PRODUCT</h2>
            <p className='p-l-1'>Add Now</p>
            <div className='top-2'>
                <form onSubmit={handleSubmit}>
                    <div className='inp-up'>
                        <input  
                            onChange={(e:any) => setTitle(e.target.value)}
                            type="text"
                            id='title'
                            placeholder='Title'
                            required 
                        />
                        <input 
                            onChange={(e:any) => setPrice(e.target.value)}
                            type="number" 
                            id='price' 
                            placeholder='Enter Price'
                            required 
                        />
                    </div>
                    <div className='inp-up margin'>
                        <input  
                            onChange={(e:any) => setCategory(e.target.value)}
                            type="text"
                            id='category'
                            placeholder='Category'
                            required 
                        />
                        <input 
                            onChange={(e:any) => setCondition(e.target.value)}
                            type="text" 
                            id='condition' 
                            placeholder='Condition'
                            required 
                        />
                    </div>
                    <input 
                        onChange={(e:any) => setDescription(e.target.value)} 
                        className='inp' 
                        type='text'
                        placeholder='Enter Description' 
                        required 
                    />
                    <div className='inp-3'>
                        <input  
                            onChange={(e:any) => setImage(e.target.files[0])} 
                            type="file" 
                            required 
                        />
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
                        <button className='btn-pr' type='submit'>Send Data</button>
                    </div> 
                </form>
            </div>
            <button className='close-modal' onClick={toggleProductModal}>&times;</button>
        </div>
    </div>
)}



            {profileModal && (
                <div className='modal'>
                    <div className='overlay'></div>
                    <div className='modal-content-1'>
                        <div className='dark'></div>
                        <img className='m-img' src="https://www.pngall.com/wp-content/uploads/5/User-Profile-PNG-Download-Image.png" alt="" />
                        <div className='m-t'>
                              <p>👋 {user?.email}</p>
                              <div className='cent cen'>
                                <button 
                                className='btn-pr l-2'
                                type='submit' 
                                onClick={logout}  
                                >Log Out
                                </button>
                              </div> 
                        </div>
                        <p className='sm st'> 
                                We won't reveal your email to anyone else nor use it to send you spam. 
                        </p>
                            <button className='close-modal transparent' onClick={toggleProfileModal}>
                            &times;
                            </button>
                    </div>
                </div>
            )}

    </>
  )
}

