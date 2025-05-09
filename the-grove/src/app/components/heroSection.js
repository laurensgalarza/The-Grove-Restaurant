"use client"
import React from "react"
import Image from "next/image";

export default function Hero() {

    return(

<div className="hero-banner column">
        <h1 className="title">The Grove</h1>
        <p style={{color:"floralwhite", maxWidth: "1000px", paddingInline: "48px"}}>
        Lorem ipsum odor amet, consectetuer adipiscing elit. Posuere porttitor litora imperdiet ligula sociosqu. Scelerisque urna senectus odio dui, sed non pulvinar? Dictum primis maximus malesuada nisl nisi.
        </p>
        <button onClick={() => document.getElementById("menu")?.scrollIntoView()} style={{width: "fit-content", paddingInline: "100px", alignSelf: "center"}}> Order Now </button>
      </div>


    )}