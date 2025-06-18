import React from 'react'
import { NavLink } from 'react-router'
export default function Header() {
  return (
    <div>

      <nav className='flex space-x-5 bg-gray-200 p-2'>
        <h1 className='bg-black text-white flex px-2 py-1 items-end justify-between'> React</h1>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>

      </nav>

    </div>
  )
}

