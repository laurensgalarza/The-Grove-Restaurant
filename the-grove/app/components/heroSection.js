"use client"
import React from "react"
import Image from "next/image";

export default function Hero() {

    return(

<div className="flex flex-col items-center text-center text-xl bg-[#1d3226] p-24 w-full ">
        <h1 className="text-[6em] text-[floralwhite] m-5 drop-shadow leading-[0.85]">The Grove</h1>
        <p className="max-w-[1000px] text-center text-[floralwhite] mb-5">
        Lorem ipsum odor amet, consectetuer adipiscing elit. Posuere porttitor litora imperdiet ligula sociosqu. Scelerisque urna senectus odio dui, sed non pulvinar? Dictum primis maximus malesuada nisl nisi.
        </p>
        <button onClick={() => document.getElementById("menu")?.scrollIntoView()} className="mt-6 px-24 py-2 bg-transparent text-[floralwhite] border border-[floralwhite] rounded hover:bg-[floralwhite] hover:text-[#1d3226] transition mt-5"> Order Now </button>
      </div>


    )}