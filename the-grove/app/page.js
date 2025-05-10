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

  <div className="bg-[#1d322633]">
    <NavBar/>

    <div id="home" className="flex flex-col bg-[#1d3226] w-full overflow-x-hidden">

      <Hero/>
      <Gallery/>

    </div>

    <div className="flex flex-col flex-wrap items-center bg-[#b7afa0] text-[#1d3226] p-6" id="menu">
    
      <h1 className="text-[5em] text-[#1d32267a] text-center drop-shadow mb-6 ">Menu</h1> 

      <MenuAndCart/>

    </div>

    <div className="flex flex-col text-center bg-[#1d322680] text-[#1d3226] p-6" id="about">

    <About/>

    </div>

    <Contact/>
    <Footer/>

</div>


)
}