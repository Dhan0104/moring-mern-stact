import React from 'react'
import {NavLink} from 'react-router'
export default function Header() {
  return (
    <div className='flex shadow-lg px-5 py-4 justify-between justify-end>'>
     
        <h1> Gourmet au Catering</h1>
        <nav className='space-x-5'>
       <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/Menu">Menu</NavLink>
        <NavLink to="/contact">Contact</NavLink>
         
         
         
        </nav>

    </div>
  )}

