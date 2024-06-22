// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app
