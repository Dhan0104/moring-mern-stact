import React from 'react'
import { NavLink } from 'react-router'

export default function Header() {
  return (
    <div className='bg-black text-white px-4 py-2 flex items-end justify-between'>
      <NavLink to={'/'}>
        <h1 className='text-2xl'>React</h1>
      </NavLink>

      <nav className='space-x-5'>

        <NavLink to={'/about'}>About</NavLink>
        <NavLink to={'/contact'}>Contact</NavLink>

      </nav>
    </div>
  )
}
