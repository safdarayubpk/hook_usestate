'use client'
import React,{useState} from 'react'

export default function Home() {

 const[name,setName] =useState("John Doe")
 const[age,setAge] =useState(25)
  const changeName = () => {
    setName("safdar")
    setAge(26)
  }
  return (

    
    <div>
      <h1>UseState Hook</h1>
      <h2>React Hook</h2>
      <br/>
      <p>Hello {name} your age is {age}</p>
      <br/>
      <button className='bg-red-500 rounded-lg' onClick={changeName}>Click me</button>

    </div>
  )
}
