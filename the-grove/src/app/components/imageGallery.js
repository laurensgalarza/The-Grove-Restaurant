import React from "react"
import Image from "next/image";

export default function Gallery() {

    const imageGallery = [
        {img: "/images/img_1.jpg", text:"Grain Bowl"},
        {img: "/images/img_2.jpg", text:"Pasta Dish"},
        {img: "/images/img_3.jpg", text:"Pita Bread and Hummus"},
        {img: "/images/img_4.jpg", text:"Pasta Dish"},
        {img: "/images/img_5.jpg", text:"Caprese Salad"}
      ]
    
    return(

<div className="gallery column">
{imageGallery.map(({img, text}, index) => (

<Image key={index} className="img" src={img} alt={text} width={500} height={300}/>
))}
</div>

    )}