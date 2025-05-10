"use client"
import React from "react"
import { useState } from "react"

export default function Contact() {
    const [submit, setsubmit] = useState(false)
    return(

        <div className="flex flex-col lg:flex-row justify-around items-center px-6 py-10 w-full bg-[#b7afa0]" id="contact">

        <div className="text-[#1d3226] text-center max-w-md space-y-4">
        <h1 className="text-3xl font-semibold">Contact</h1> 

        <form className="flex flex-col gap-3">
            <p className="text-base">Use this form to get in touch.</p>
            <label className="text-left">Name</label>
        
            <input type="text" className="w-full h-6 border border-[#1d3226] bg-[#b7afa04d] text-[#1d3226] rounded px-2"/>
            

            <label className="text-left">Email</label>
            

            <input type="email" className="w-full h-6 border border-[#1d3226] bg-[#b7afa04d] text-[#1d3226] rounded px-2"/>
            

            <label className="text-left">Message</label>
           

            <input type="text" className="w-full h-6 border border-[#1d3226] bg-[#b7afa04d] text-[#1d3226] rounded px-2"/>

            <button className="mt-2 px-4 py-2 border border-[#1d3226] text-[#1d3226] hover:bg-[#1d322633] rounded transition" onClick={() => setsubmit(true)}> Submit</button>
            {submit && <p className="text-red-600 mt-2">Talk to you soon!</p>}
        </form>
        </div> 

        <div className="mt-10 lg:mt-0">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d113523.94517204494!2d-74.02723588434841!3d40.64520216546317!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24416947c2109%3A0x82765c7404007886!2sBrooklyn%2C%20NY!5e1!3m2!1sen!2sus!4v1742002014399!5m2!1sen!2sus" width="600" height="450" className="rounded border-0 shadow-lg" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"/>
    
        </div>
    </div>

    )}