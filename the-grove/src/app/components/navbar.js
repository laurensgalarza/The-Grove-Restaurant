"use client"
import React from "react"
import Image from "next/image";

export default function NavBar() {

    return(
<div>
<nav>
      <ul>
        <h3 style={{color:"floralwhite", fontVariant: "small-caps", marginLeft: "12px", marginTop: "12px", zIndex: "3"}}> The Grove</h3>
      
        <li><a href="#home" className="button">HOME</a></li>  
        <li><a href="#menu" className="button">MENU</a></li>
        <li><a href="#about" className="button">ABOUT</a></li>    
        <li><a href="#contact" className="button">CONTACT</a></li>
      
      </ul>
    </nav>
</div>
)
}