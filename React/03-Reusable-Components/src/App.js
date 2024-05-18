import React from 'react'
import { useState } from "react";
import Button from "./Component/Button";
import Input from "./Component/Input";

function App() {
  const [input, setInput] = useState("")
  const [input1, setInput1] = useState("")
  const [input2, setInput2] = useState("")


  return (
    <>
      <div className='btn'>
        <Button btnLabel="Login" className="btn1" />
        <Button btnLabel="Singin" className="btn2" />
        <Button btnLabel="Register" className="btn3" />
        <Button btnLabel="Order Now" className="btn4" />
      </div>
      <div className='inp'>
        <Input className="inp1" onChange={(e) => setInput(e.target.value)} placeholder="enter text" />
        <p> First Input Review : {input}</p>
        <Input className="inp2" onChange={(e) => setInput1(e.target.value)} placeholder="enter any text" />
        <p> Second Input Review : {input1}</p>
        <Input className="inp3" onChange={(e) => setInput2(e.target.value)} placeholder="enter value" />
        <p> Third Input Review : {input2}</p>
      </div>
    </>
  );
}

export default App;
