import { initializeApp } from "firebase/app";
import { getAuth , createUserWithEmailAndPassword , signInWithEmailAndPassword, AuthError} from "firebase/auth";
import Swal from "sweetalert2";

const firebaseConfig = {
  apiKey: "AIzaSyBZx2BB9f1MIoRcIAyqO2coUuSpfEEpQyw",
  authDomain: "expertizo-class.firebaseapp.com",
  databaseURL: "https://expertizo-class-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "expertizo-class",
  storageBucket: "expertizo-class.appspot.com",
  messagingSenderId: "409223184847",
  appId: "1:409223184847:web:a7ca5d1752ba47f9ba52ba",
  measurementId: "G-LVF3VP0M8Q"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

function SignUp(email: string, password: string) {
  Swal.fire({
    title: "Processing...",
    text: "Signing up...",
    allowOutsideClick: false,
    showConfirmButton: false,
    willOpen: () => {
      Swal.showLoading();
    }
  });

 return createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      setTimeout(() => {
        Swal.fire({
               title: "Success!",
               text: "User Registered Successfully",
               icon: "success",
             });
             }, 100)
    })
    .catch((error: AuthError) => {
      const errorMessage = error.message;
      setTimeout(() => {
        Swal.fire({
         icon: "error",
         title: "Oops...",
         text: errorMessage,
         footer: `<a href="https://firebase.google.com/docs/auth/admin/errors" target='_blank'>Why do I have this issue?</a>`,
       });
      }, 100) 
    })
    .finally(() => {
      Swal.close();
    });
}

function SignIn(email: string, password: string) {
  Swal.fire({
    title: "Processing...",
    text: "Signing in...",
    allowOutsideClick: false,
    showConfirmButton: false,
    willOpen: () => {
      Swal.showLoading();
    }
  });

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      setTimeout(() => {
 Swal.fire({
        title: "Success!",
        text: "User Logged In Successfully",
        icon: "success",
      });
      }, 100)
    })
    .catch((error: AuthError) => {
      const errorMessage = error.message;
      setTimeout(() => {
        Swal.fire({
         icon: "error",
         title: "Oops...",
         text: errorMessage,
         footer: `<a href="https://firebase.google.com/docs/auth/admin/errors" target='_blank'>Why do I have this issue?</a>`,
       });
      }, 100) 
    })
    .finally(() => {
      Swal.close();
    });
}

export {
  SignIn,
  SignUp
};