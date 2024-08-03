import React from 'react'
import './Navbar.css'

export default function index() {
    return (
        <>
            <div className='nav'>
                <h1>Redux Toolkit</h1>
            </div>
            <div className='button'>
                <button className='btn'>Red Mode</button>
                <button className='btn'>Black Mode</button>
                <button className='btn'>Yellow Mode</button>
                <button className='btn'>Light Mode</button>
            </div>
        </>
    )
}
