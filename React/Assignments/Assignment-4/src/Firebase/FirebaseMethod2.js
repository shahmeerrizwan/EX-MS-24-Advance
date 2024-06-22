import app from "./FirebaseConfig1";
import { getDatabase, push, ref } from "firebase/database";

const db = getDatabase(app)

export const sendData = (body) => {

    const reference = ref(db, "Data")
    push(reference, body)
}
