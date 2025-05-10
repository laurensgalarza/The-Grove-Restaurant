"use client"
import React from "react";
import { useState } from "react";
import MenuList from "./menuList";

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
        <div id="menu" className="relative">
            <MenuList addToCart={addToCart}/>
        {showCart && (
            <div id="cart" className="fixed top-14 right-3 w-52 p-3 z-10 bg-[#b7afa0] bg-opacity-30 text-[#1d3226] rounded-lg shadow-md space-y-2">
                <h2 className="text-lg font-semibold text-center">Your Cart</h2>

                <ol className="flex flex-col gap-1">{cart.map((item, index) => 
                    <a id="cart-items" key={index} className="flex justify-between items-center bg-[#1d322633] px-2 py-1 text-black rounded">
                        <p className="text-sm">{item.name}<span className="ml-1"> x {item.quantity}</span></p>
                        <button className="text-[#1d3226] hover:text-lg transition" onClick={() => removeFromCart(item.name)}>-</button>
                    </a>)}
                </ol>
                <p className="text-black text-sm text-center">Total: $<span>{updateTotal()}</span></p>
                
                <div className="flex flex-col items-center gap-2">
                <button className="text-[#1d3226] border border-[#1d3226] border-opacity-30 px-3 py-1 text-sm rounded hover:bg-[floralwhite]">
                    Checkout</button>
                <button className="text-[#1d3226] border border-[#1d3226] border-opacity-30 px-3 py-1 text-sm rounded hover:bg-[floralwhite]"
                    onClick={clearCart}>Clear Cart</button>
                </div>
        </div>
        )}
    </div>)
}