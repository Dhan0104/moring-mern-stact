import React from 'react'
import { NavLink } from 'react-router'

export default function Header() {
  return (
    <div className='bg-black text-white flex px-5 py-1 items-end justify-between'>

      <h1 className='text-2xl'>React</h1>

      <nav className='space-x-5'>
        <NavLink to={'/about'}>About</NavLink>
        <NavLink to={'/contact'}>Contact</NavLink>
      </nav>



    </div>
  )
}


