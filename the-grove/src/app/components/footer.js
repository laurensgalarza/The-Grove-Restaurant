import React from "react"
import Image from "next/image";

export default function Footer() {

    return(

<footer>

<div className="footer container">
    <div style={{display: "flex", flexDirection: "column"}}>
    
        <li style={{display: "flex", flexDirection: "column"}}>
            <a style={{margin: "6px"}} href="https://www.instagram.com">Follow us on Instagram</a>
            <a style={{margin: "6px"}} href="https://www.facebook.com">Friend us on Facebook</a>
        </li>
            </div>
            <div style={{display: "flex", flexDirection: "column"}}>
            <h1>Business Hours</h1>
            <p>Monday through Friday: 7 AM to 10 PM</p>
            <p>Saturday: 9 AM to 12 AM</p>
            <p>Sunday: Closed</p>
            </div>
    </div>
    </footer>

)}