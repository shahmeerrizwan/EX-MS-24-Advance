import React from 'react'
import './Add.css'
import { Link } from 'react-router-dom'

export default function Add(props:any) {
  return (
    <>
       <div className="box2 flight_tickets">
                    <Link to="/"><img src={props.src} alt="book flight"/></Link>
                </div>
    </>
  )
}
