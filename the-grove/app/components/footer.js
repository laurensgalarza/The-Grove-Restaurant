import React from "react"
import Image from "next/image";

export default function Footer() {

    return(

<footer>

<div className="w-full bg-[#1d3226] text-[floralwhite] flex flex-row justify-between px-32 py-12">
    <div className="flex flex-col space-y-2">
    
        <ul className="flex flex-col space-y-2 list-none">
            
            <a className="hover:underline" href="https://www.instagram.com">Follow us on Instagram</a>
            <a className="hover:underline" href="https://www.facebook.com">Friend us on Facebook</a>
            
        </ul>
    </div>

    <div className="flex flex-col space-y-1">
            <h1  className="text-lg font-semibold">Business Hours</h1>
            <p>Monday through Friday: 7 AM to 10 PM</p>
            <p>Saturday: 9 AM to 12 AM</p>
            <p>Sunday: Closed</p>
            </div>
    </div>
    </footer>

)}