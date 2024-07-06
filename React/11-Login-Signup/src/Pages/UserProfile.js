import React, { useEffect, useState } from 'react'
import { auth, db } from '../Components/Firebase/FirebaseConfig'
import { doc, getDoc } from 'firebase/firestore'
import Swal from 'sweetalert2';

export default function UserProfile() {
    const [userDetails, setUserDetails] = useState(null)
    const fetchUserData = async () => {
        auth.onAuthStateChanged(async (user) => {
            console.log(user);
            const docRef = doc(db, "Users", user.uid);
            const docSnap = await getDoc(docRef);
            if (docSnap.exists()) {
                setUserDetails(docSnap.data());
                console.log(docSnap.data());
            } else {
                Swal.fire(
                    'User is Not Logged in!',
                );
            }
        });
    };
    useEffect(() => {
        fetchUserData()
    }, [])

    async function handleLogOut() {
        try {
            await auth.signOut();
            window.location.href = "/"
            console.log("User Logged Out Sucessfull");
        } catch (error) {
            console.error("Error Logging Out", error.message)
        }
    }


    return (
        <>
            {userDetails ?
                <>
                    <h1>Wellcome {userDetails.firstName}</h1>
                    <h1>Email : {userDetails.email}</h1>
                    <h1>First Name : {userDetails.firstName}</h1>
                    <h1>Last Name : {userDetails.lastName}</h1>
                    <button onClick={handleLogOut} >Logout</button>
                </>
                : (
                    <p>Loading...</p>
                )
            }

        </>
    )
}
