import React from 'react'
import './Navbar.css'
import { setTheme } from "../../Store/ThemeSlice";
import { useDispatch, useSelector } from 'react-redux';




export default function Navbar() {
    const dispatch = useDispatch()
    const color = useSelector(state => state.color)

    return (
        <>
            <div className='nav' >
                <h1>Redux Toolkit</h1>
            </div>
            <div className='button' style={{ background: color }}>
                <button className='btn' onClick={() => dispatch(setTheme('red'))}>Red Mode</button>
                <button className='btn' onClick={() => dispatch(setTheme('blue'))}>Blue Mode</button>
                <button className='btn' onClick={() => dispatch(setTheme('yellow'))}>Yellow Mode</button>
                <button className='btn' onClick={() => dispatch(setTheme('green'))}>Green Mode</button>
            </div>
            <div className='gap' style={{ background: color }}>
                <img src='https://cdn.iconscout.com/icon/free/png-256/free-redux-3629610-3032308.png?f=webp&w=256' alt='..' />
            </div>
        </>
    )
}
