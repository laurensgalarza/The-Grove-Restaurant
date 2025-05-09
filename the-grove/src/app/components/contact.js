"use client"
import React from "react"
import { useState } from "react"

export default function Contact() {
    const [submit, setsubmit] = useState(false)
    return(

        <div className="container" style={{display:"flex", flexDirection: "column", justifyContent: "space-around"}} id="contact">

        <div style={{ color: "rgb(29, 50, 38)", padding: "24px", textAlign: "center", maxWidth: "500px"}}>
        <h1>Contact</h1> 

        <form>
            <p>Use this form to get in touch.</p>
            <label>Name</label>
            <br/>
            <input type="text"/>
            <br/>

            <label>Email</label>
            <br/>

            <input type="email"/>
            <br/>

            <label>Message</label>
            <br/>

            <input type="text"/>

            <button style={{margin: "10px"}} onClick={() => setsubmit(true)}> Submit</button>
            {submit && (<p style={{color: "red"}}>Talk to you soon!</p>)}
        </form>
        </div> 

        <div style={{margin: "24px"}}>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d113523.94517204494!2d-74.02723588434841!3d40.64520216546317!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24416947c2109%3A0x82765c7404007886!2sBrooklyn%2C%20NY!5e1!3m2!1sen!2sus!4v1742002014399!5m2!1sen!2sus" width="600" height="450" style={{border: "0"}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"/>
    
        </div>
    </div>

    )}