// import React, { useEffect, useState } from 'react'
// import logo from '../../src/Assets/Logo.png';
// import '../Components/Navbar/Navbar.css';
// import { Link } from 'react-router-dom';
// import Home from './Home'
// import { onAuthStateChanged } from 'firebase/auth';
// import { auth } from '../Components/Firebase/firebaseconfig';

// export default function Dashboard() {
    
//     const [menuOpen,setMenuOpen] = useState(false);
//     const[user,setUser]=useState<any>()
  

//     const toggleMenu = () => setMenuOpen(!menuOpen);
//     const closeMenu = () => setMenuOpen(false);

//    useEffect(() => {
//    onAuthStateChanged(auth,(Users)=>{
//     if (Users) {
//         console.log("user Logged In",Users);
//         setUser(Users)
//         const uid = Users.uid
//     } else{
//         console.log("user is signed Out");
        
//     }
//    })
//    }, [])





//   return (
//     <>
//       <Home/> 
//       <nav>
//                 <input type="checkbox" id="click" checked={menuOpen} onChange={toggleMenu} />
//                 <label htmlFor="click" className="menu-btn">
//                     <i className="fas fa-bars"></i>
//                     <div><Link to='/'><img className='logoo' src={logo} alt="" /></Link></div>
//                 </label>
//                 <ul>
//                     <li onClick={closeMenu}> <Link to="/">Home</Link> </li>
//                     <li onClick={closeMenu}> <Link to="/product">Products</Link> </li>
//                     <li onClick={closeMenu}> <Link to="/contact">Contact</Link> </li>
//                     <li onClick={closeMenu}> <Link to="/reviews">Reviews</Link> </li>
//                 </ul>
//                 <div className=''>
//                     <h4 className='btn btn-login hide lg-btn' >{user?.email}</h4>
//                 </div>
//             </nav>

//     </>
//   )
// }



import React, { useState, useEffect } from 'react';
import logo from '../../src/Assets/Logo.png';
import '../Components/Navbar/Navbar.css';
import { Link, useNavigate } from 'react-router-dom';
import { auth, onAuthStateChanged } from '../Components/Firebase/firebaseconfig';
import { getFirestore, doc, getDoc } from 'firebase/firestore'; // Import Firestore functions for querying
import { signOut } from 'firebase/auth';

const Dashboard: React.FC = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [user, setUser] = useState<any | null>(null);
    const [firstName, setFirstName] = useState<string>('');
    const [lastName, setLastName] = useState<string>('');

    const navigate = useNavigate();

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (authUser) => {
            if (authUser) {
                setUser(authUser);
                fetchUserData(authUser.uid); // Fetch additional user data
            } else {
                setUser(null);
                setFirstName('');
                setLastName('');
            }
        });

        return () => unsubscribe();
    }, []);

    const toggleMenu = () => setMenuOpen(!menuOpen);
    const closeMenu = () => setMenuOpen(false);

    const handleLogout = async () => {
        try {
            await signOut(auth);
            setUser(null);
            setFirstName('');
            setLastName('');
            navigate('/');
        } catch (error: any) {
            console.error('Error logging out:', error.message);
            // Handle error as needed
        }
    };

    const fetchUserData = async (uid: string) => {
        try {
            const docRef = doc(getFirestore(), 'Users', uid);
            const docSnap = await getDoc(docRef);

            if (docSnap.exists()) {
                const userData = docSnap.data();
                if (userData) {
                    setFirstName(userData.firstName);
                    setLastName(userData.lastName);
                }
            } else {
                console.log('User document not found');
            }
        } catch (error: any) {
            console.error('Error fetching user data:', error.message);
            // Handle error as needed
        }
    };

    return (
        <>
            <nav>
                <input type="checkbox" id="click" checked={menuOpen} onChange={toggleMenu} />
                <label htmlFor="click" className="menu-btn">
                    <i className="fas fa-bars"></i>
                    <div>
                        <Link to='/'>
                            <img className='logo' src={logo} alt="Logo" />
                        </Link>
                    </div>
                </label>
                <ul>
                    <li onClick={closeMenu}> <Link to="/">Home</Link> </li>
                    <li onClick={closeMenu}> <Link to="/product">Products</Link> </li>
                    <li onClick={closeMenu}> <Link to="/contact">Contact</Link> </li>
                    <li onClick={closeMenu}> <Link to="/reviews">Reviews</Link> </li>
                </ul>

                {user ? (
                    <div className='user-info'>
                        <p>Welcome, {firstName} {lastName}</p>
                        <button className='btn btn-logout' onClick={handleLogout}>Logout</button>
                    </div>
                ) : (
                    <div className='btn-main'>
                        <button className='btn btn-login lg-btn'>Login</button>
                        <button className='btn btn-signup'>Sign Up</button>
                    </div>
                )}
            </nav>
        </>
    );
};

export default Dashboard;
