import app from "./firebaseconfig";
import { getDatabase, ref, push  } from "firebase/database";

const db = getDatabase(app)

export const sendData = (nodeName: string, obj: any) => {

    const reference = ref(db, `${nodeName}/`)
    return push(reference, obj)
}

