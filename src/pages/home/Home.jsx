import React from 'react'
import Header from '../../components/Header'
import { NavLink, Outlet } from 'react-router'

export default function Home() {
  return (
    <div>

      <Header />
      <h1 className='font-bold'>This is homepage</h1>


      <nav className='space-x-5'>
        <NavLink to={'/'}>Page1</NavLink>
        <NavLink to={'/page-2'}>Page2</NavLink>
      </nav>

      <Outlet />





    </div>
  )
}
