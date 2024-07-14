import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import Products from './Products'
import Add from '../Assets/Add/Add'
import Add1 from '../Assets/Add/Add1'

export default function Home() {
    return (
        <>
            <Navbar />
            <Add />
            <br />
            <br />
            <br />

            <Products />
            <br />
            <br />
            <Add1 />
        </>
    )
}
