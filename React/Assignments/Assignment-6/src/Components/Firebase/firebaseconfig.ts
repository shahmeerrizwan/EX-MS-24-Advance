import { initializeApp } from "firebase/app";
import { getAuth , createUserWithEmailAndPassword , signInWithEmailAndPassword} from "firebase/auth";
import { collection, addDoc,getFirestore } from "firebase/firestore"; 

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
const db = getFirestore(app);


async function SignUp(userInfo:any) {
  const { email, password, firstName, lastName } = userInfo;
  await createUserWithEmailAndPassword(auth, email, password)
  return addDoc(collection(db, "Users"), {email,firstName,lastName});
}

function SignIn(email: string, password: string) {
   return signInWithEmailAndPassword(auth, email, password)
}




export {
  SignIn,
  SignUp,
};