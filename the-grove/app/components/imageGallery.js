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
<div className="w-full overflow-x-hidden mt-0">
<div className="flex overflow-x-scroll whitespace-nowrap scroll-snap-x mandatory snap-center">
{imageGallery.map(({img, text}, index) => (
  <div key={index} className="m-8 snap-start shrink-0 w-[500] mt-0">
<Image src={img} alt={text} width={500} height={300}  className=" object-cover shrink-0"/>
</div>
))}
</div>
</div>
    )}