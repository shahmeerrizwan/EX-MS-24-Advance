import React from 'react'
import './Navbar.css'
import { setTheme } from "./ThemeSlice";
import { useDispatch } from 'react-redux';


const dispatch = useDispatch()


export default function index() {
    return (
        <>
            <div className='nav'>
                <h1>Redux Toolkit</h1>
            </div>
            <div className='button'>
                <button className='btn' onClick={() => { setTheme }}>Red Mode</button>
                <button className='btn'>Black Mode</button>
                <button className='btn'>Yellow Mode</button>
                <button className='btn'>Light Mode</button>
            </div>
            <div className='gap'>
                <img src='https://cdn.iconscout.com/icon/free/png-256/free-redux-3629610-3032308.png?f=webp&w=256' alt='..' />
            </div>
        </>
    )
}
