import React from "react";
import Header from "../../components/header";
import { NavLink, Outlet } from "react-router";
import Display from "./Display";
import About from "../about/About";
import Menu from "../Menu/Menu";
export default function Home() {
  return (
    <div>


   <Display />
   <main className="px-[100px] py-[[100px]">
   <About />
   <Menu />
  </main>
    </div>
    
  )}
