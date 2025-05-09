import React from "react"
import Image from "next/image";
import NavBar from "./components/navbar";
import Hero from "./components/heroSection";
import Gallery from "./components/imageGallery";
import MenuAndCart from "./components/MenuAndCart";
import About from "./components/about";
import Contact from "./components/contact";
import Footer from "./components/footer";


export default function Home() {

return(

  <div>
    <NavBar/>

    <div className="container" id="home" style={{display: "flex" , flexDirection: "column", backgroundColor: "rgb(29, 50, 38)", width: "inherit"}}>

      <Hero/>
      <Gallery/>

    </div>

    <div className="container" style={{flexWrap: "wrap", flexDirection: "column", alignContent: "center"}} id="menu">
    
      <h1 style={{fontSize: "4em", color: "rgb(29, 50, 38)", textShadow: "0 2px 2px rgba(0, 0, 0, 0.3)", alignSelf: "center", margin: "24px"}}>Menu</h1> 

      <MenuAndCart/>

    </div>

    <div className="container" style={{flexDirection: "column", textAlign: "center", backgroundColor: "rgb(29, 50, 38, 0.5)", color:"rgb(29, 50, 38)"}} id="about">

    <About/>

    </div>

    <Contact/>
    <Footer/>

</div>


)
}