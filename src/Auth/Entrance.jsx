import React from 'react'
import { Link } from 'react-router-dom'

const Entrance = () => {
  return (
    <div className=" flex flex-col gap-4 justify-center items-center h-screen  ">
        <h2 className=" text-white ">Welcome to our website</h2>
        <Link className=" bg-green-500 text-white px-4 py-2 rounded-md " to={'/login'}>login</Link>
        <Link className="  bg-blue-500 text-white px-4 py-2 rounded-md " to={'/register'}>register</Link>
        
      </div>
  )
}

export default Entrance