import { initializeApp } from "firebase/app";
import { getAuth , createUserWithEmailAndPassword , signInWithEmailAndPassword, onAuthStateChanged, signOut} from "firebase/auth";
import { collection, addDoc,getFirestore ,doc, getDoc, getDocs} from "firebase/firestore"; 
import {getStorage, ref,uploadBytes,getDownloadURL} from "firebase/storage"; 
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
const db = getFirestore(app);
const storage = getStorage(app)


async function SignUp(userInfo:any) {
  const { email, password, firstName, lastName } = userInfo;
  await createUserWithEmailAndPassword(auth, email, password)
  return addDoc(collection(db, "Users"), {email,firstName,lastName});
}

function SignIn(email: string, password: string) {
   return signInWithEmailAndPassword(auth, email, password)
}

async function addProduct(product:any) {
  const { title, price, condition, description, image ,category} = product;

  const storageRef = ref(storage, "images/" + image.name);

  await uploadBytes(storageRef, image);

  const url = await getDownloadURL(storageRef);

  return addDoc(collection(db, "ProductDetail"), {title, price, condition,category, description, image: url});
};

const fetchLatestUsername = async (uid: string): Promise<string> => {
  try {
      const userDoc = await getDoc(doc(db, 'Users', uid));
      console.log(uid);
      
      if (userDoc.exists()) {
          const userData = userDoc.data();
          return userData.username || '';
      } else {
          throw new Error('User document not found');
      }
  } catch (error:any) {
      console.error('Error fetching latest username:', error.message);
      throw error;
  }
};


const logout = async () => {
  const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
          confirmButton: "btn btn-success",
          cancelButton: "btn btn-danger"
      },
      buttonsStyling: false
  });

  swalWithBootstrapButtons.fire({
      title: "Are you sure?",
      text: "You will be logged out of your account.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, log me out!",
      cancelButtonText: "No, stay logged in",
      reverseButtons: true
  }).then(async (result) => {
      if (result.isConfirmed) {
          try {
              await signOut(auth);
              localStorage.clear();
              swalWithBootstrapButtons.fire(
                  "Logged Out!",
                  "You have been logged out.",
                  "success"
              ).then(() => {
                  window.location.href = "/";
              });
          } catch (error) {
              Swal.fire({
                  icon: "error",
                  title: "Oops...",
                  text: "An error occurred while logging out. Please try again.",
              });
          }
      } else if (result.dismiss === Swal.DismissReason.cancel) {
          swalWithBootstrapButtons.fire(
              "Cancelled",
              "You are still logged in.",
              "info"
          ).then(() => {
              localStorage.clear();
              window.location.href = "/dashboard";
          });
      }
  });
};



const getData = async (nodename: any) => {
  const products:any = [];
    const querySnapshot = await getDocs(collection(db, 'ProductDetail'));
  
    querySnapshot.forEach((doc) => {
      products.push({ id: doc.id, ...doc.data() });
    });
  
    return products;
  };

export {
  SignIn,
  SignUp,
  onAuthStateChanged,
  auth,
  addProduct,
  getFirestore,
  fetchLatestUsername,
  logout,
  getData
};