import React from 'react'
import { NavLink } from 'react-router'

export default function Header() {
  return (
    <div>

      <NavLink to={'/about'}>About</NavLink>
      <NavLink to={'/contact'}>Contact</NavLink>

    </div>
  )
}


