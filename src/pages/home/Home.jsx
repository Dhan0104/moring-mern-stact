import React from "react";
import Header from "../../components/header";
import { NavLink, Outlet } from "react-router";
export default function Home() {
  return (
    <div>


     <Header />
     <h1 className="font-bold">this is homepage</h1>
     <nav className="space-x-5">
      <NavLink to={'/page1'}>page1</NavLink>
      <NavLink to={'/page2'}>page2</NavLink>
      </nav>
      <Outlet />
    </div>
    
  )}
