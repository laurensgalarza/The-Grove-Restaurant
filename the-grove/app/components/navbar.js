"use client"
import React from "react"
import Image from "next/image";

export default function NavBar() {

    return(
<div>
<nav className="fixed top-0 w-full z-20 flex justify-between bg-[#1d3226] shadow-md overflow-x-scroll">
      <ul className="flex space-x-4 text-[floralwhite] text-sm">
        <h3 className="text-[floralwhite] ml-3 mt-3 z-[3] text-xl"> The Grove</h3>
        <li><a href="#home" className="text-[floralwhite] inline-block text-center py-[14px] px-[16px] no-underline hover:font-bold scroll-smooth">HOME</a></li>  
        <li><a href="#menu" className="text-[floralwhite] inline-block text-center py-[14px] px-[16px] no-underline hover:font-bold">MENU</a></li>
        <li><a href="#about" className="text-[floralwhite] inline-block text-center py-[14px] px-[16px] no-underline hover:font-bold">ABOUT</a></li>    
        <li><a href="#contact" className="text-[floralwhite] inline-block text-center py-[14px] px-[16px] no-underline hover:font-bold">CONTACT</a></li>
      
      </ul>
    </nav>
</div>
)
}