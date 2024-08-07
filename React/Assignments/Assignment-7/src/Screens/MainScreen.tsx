import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Home from '../Components/Home/Home'
import Card1 from '../Components/Cards/Card 1/Card1'
import Slider from '../Components/Cards/Slider/Slider'
import Footer from '../Components/Footer/Footer'

export default function MainScreen() {
  return (
    <>
      <Navbar/>
       <Home/>
       <Card1/>
       <Slider/>
       <Footer/>
    </>
  )
}
