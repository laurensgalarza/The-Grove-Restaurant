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
<div className="w-full overflow-x-hidden">
<div className="flex overflow-x-auto whitespace-nowrap scroll-snap-x mandatory snap-x">
{imageGallery.map(({img, text}, index) => (
  <div key={index} className="m-8 snap-start">
<Image src={img} alt={text} width={750} height={500}  className="max-w-[100%] object-cover"/>
</div>
))}
</div>
</div>
    )}