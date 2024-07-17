import { initializeApp } from "firebase/app";
import { getAuth , createUserWithEmailAndPassword , signInWithEmailAndPassword} from "firebase/auth";
import { useState } from "react";
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


function SignUp(email:string,password:any) {
  createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    Swal.fire({
      title: "Good job!",
      text: "User Registered Succesfully",
      icon: "success"
    });
  })
  .catch((error) => {
    const errorMessage = error.message;
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: errorMessage,
      footer: `<a href="https://firebase.google.com/docs/auth/admin/errors" target='_blank'>Why do I have this issue?</a>`
    });
  });
}

function SignIn(email:string,password:any){
  signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    Swal.fire({
      title: "Good job!",
      text: "User Logged In Successfully",
      icon: "success"
    });
  })
  .catch((error) => {
    const errorMessage = error.message;
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: errorMessage,
      footer: `<a href="https://firebase.google.com/docs/auth/admin/errors" target='_blank'>Why do I have this issue?</a>`
    });
  });
}


export {
  SignIn,
  SignUp
}