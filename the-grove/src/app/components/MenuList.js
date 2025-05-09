"use client"

import React from "react"
import Image from "next/image";

export default function MenuList({addToCart}) {


    const menu = [
        {section: "Appetizers",  items: [
            {name: "Spanakopita", description: "Crispy, golden phyllo pastries filled with a savory blend of spinach, feta cheese, and fresh herbs, baked to perfection." , price: "12.99" },
            {name: "Lamb Gyro", description: "Tender slices of seasoned lamb wrapped in a warm pita with tzatziki sauce, tomatoes, onions, and crisp lettuce.", price: "12.99" },
            {name: "Lorem Ipsum", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." , price: "12.99" }
        ]},
        {section: "Sandwiches", items: [
            {name: "Falafel Pita", description: "Crispy, spiced chickpea fritters nestled in a fluffy pita with tahini sauce, fresh cucumbers, and shredded lettuce.", price: "16.99"},
            {name: "Lamb Pita Wrap", description: "Slow-roasted lamb slices wrapped in a pita with tzatziki, cucumbers, tomatoes, and fresh greens.", price: "12.99"},
            {name: "Lorem Ipsum Eleifend", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." , price: "12.99" }
        ]},
        {section: "Entrees", items: [
            {name: "Moussaka", description: "Layers of eggplant, spiced ground beef, and creamy béchamel sauce, oven-baked to perfection.", price: "26.99"},
            {name: "Grilled Chicken Souvlaki", description: "Skewered and char-grilled chicken breast marinated in lemon, garlic, and oregano, served over rice pilaf.", price: "16.99"},
            {name: "Lorem Ipsum Nunc", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." , price: "12.99" }
        ]},
        {section: "Drinks", items: [
            {name: "Mint Lemonade", description: "Freshly squeezed lemons muddled with mint leaves and lightly sweetened, served chilled over ice.", price: "6.99"},
            {name: "Turkish Coffee", description: "Bold and rich coffee brewed in a cezve and served with a touch of cardamom, accompanied by a sweet date.", price: "6.99"},
            {name: "Lorem Ipsum Venenatis", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." , price: "12.99" }
        ]}
    ]


    return(



    <div className="column">
        {menu.map(({section, items}, sect_index) => (
            <div key={sect_index}>
                <h2 className="menu-section-title">{section}</h2>

                <div className="menu-section">
                {items.map((item, item_index) => (
                    <div key={item_index} className="menu-item" data-name={item.name} data-price={item.price}>
                        <h3>{item.name}</h3>
                        <p>{item.description}</p>
                        
                        <div className="item-footer">
                            <h3>{item.price}</h3>
                            <button className="add-to-cart" onClick={() => addToCart(item.name, item.price)}>+</button>
                        </div>
                    </div>
                    
                ))}
                
                </div>
            </div>
        )
        )}


    

    </div>
    )}