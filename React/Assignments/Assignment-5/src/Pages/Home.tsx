import React from 'react'
import Add from '../Components/Adds/Add'
import Products from './Products'
import Add1 from '../Components/Adds/Add1'
import Add2 from '../Components/Adds/Add2'

export default function Home() {
  return (
    <>
      <Add/>
      <Products/>
      <Add1/>
      <br />
      <br />
      <Products/>
      <Add2/>
    </>
  )
}
