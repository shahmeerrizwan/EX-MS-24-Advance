import app from "./firebaseconfig";
import { ref, push } from "firebase/database";
import {
    createUserWithEmailAndPassword,
    getAuth,
    signInWithEmailAndPassword,
    UserCredential
} from 'firebase/auth';
import {
    getFirestore,
} from "firebase/firestore";

const auth= getAuth(app);
const db = getFirestore(app);

export const sendData = (body: any) => {
    const reference = ref(db, "Data");
    push(reference, body);
}

export const signUpUser = (email: string, password: string) => {
    createUserWithEmailAndPassword(auth, email, password)
        .then((res: UserCredential) => {
            console.log(res, "successfully Signup");
        })
        .catch((err: Error) => {
            console.log(err, "err");
        });
}

export const loginUser = (email: string, password: string) => {
    signInWithEmailAndPassword(auth, email, password)
        .then((res: UserCredential) => {
            console.log(res, "successfully Login");
        })
        .catch((err: Error) => {
            console.log(err, "err");
        });
}

// Example function using Firestore (commented out)
/*
export const sendDataFirebase = () => {
    const docRef = doc(db, "data", "1");
    const collectionRef = collection(db, "data");
    addDoc(collectionRef, {
        title: "Todo 1",
        description: "description 1"
    })
    .then(() => {
        console.log("Document successfully written!");
    })
    .catch((error: Error) => {
        console.error("Error writing document: ", error);
    });
}
*/
