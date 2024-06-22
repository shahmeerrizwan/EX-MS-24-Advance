import React from 'react'
import { sendData } from './FirebaseMethod2'

export default function FirebaseScreen() {

    function sendDatatofirebase() {
        const obj = {
            firstName: "shahmeer",
            lastName: "Rizwan"
        }
        console.log("Data Send Sucessfully");
        sendData(obj)
    }

    return (


        <div>
            <h1>Firebase</h1>
            <button onClick={sendDatatofirebase}>Send Data</button>
        </div>
    )
}
