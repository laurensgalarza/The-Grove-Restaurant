"use client"
import React from "react";
import { useState } from "react";
import MenuList from "./MenuList";

export default function MenuAndCart() {

    const [cart, setCart] = useState([]);
    const [showCart, setShowCart] = useState(false)

    const addToCart = (name, price) => {
        setShowCart(true)

        setCart( currentCart => {
            //if item already in cart, increase item quantity

            const isInCart = currentCart.find(item=>item.name ===name )

            if (isInCart) {
                return (
                    currentCart.map((item => 
                        item.name === name ? { ... item, quantity: item.quantity + 1} : item
                    ))
                )
            }
            else{
                return(
                [ ... currentCart, {name, price , quantity: 1}]
            )}
        })
    
    }

    const removeFromCart = (name) => {

        setCart(currentCart => {

            if (currentCart.length === 0)
            {setShowCart(false)}

            return (
            currentCart.map((item => 
                item.name === name ? { ... item, quantity: item.quantity - 1} : item
            ))
            .filter(item => item.quantity > 0)
            )
            
        })
    }

    const clearCart = () => {
        setShowCart(false)
        setCart([])
    }

    const updateTotal = () => {
        let total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)

        return Math.max(0,total.toFixed(2))
    }

    return(
        <div id="menu">
            <MenuList addToCart={addToCart}/>
        {showCart && (
            <div id="cart">
                <h2>Your Cart</h2>

                <ol className="column" >{cart.map((item, index) => 
                    <a id="cart-items" key={index}>
                        <p>{item.name}<span> x {item.quantity}</span></p>
                        <button className="remove-from-cart" onClick={() => removeFromCart(item.name)}>-</button>
                    </a>)}
                </ol>
                <p style={{color: "black"}}>Total: $<span>{updateTotal()}</span></p>
                <button className="cart">Checkout</button>
                <button className="cart" onClick={clearCart}>Clear Cart</button>
                
        </div>
        )}
    </div>)
}