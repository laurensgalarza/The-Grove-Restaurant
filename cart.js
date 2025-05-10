const cart = [];

function updateCart(){
    const cartList = document.getElementById("cart-items");
    const cartTotal = document.getElementById("cart-total");

    let total = 0;
    cartList.innerHTML = "";    //prevents duplicate visual items


    //for each item
    cart.forEach((item, index) => {

        //create list for item

        const li = document.createElement("li");
        // display name, subtotal, and quantity

        const subtotal = item.quantity * item.price;

        li.textContent= `${item.name} x${item.quantity} : $${subtotal.toFixed(2)}`;

        //display remove button
        const removeBtn = document.createElement("button");
        removeBtn.textContent = "-";
        removeBtn.className = "remove-from-cart";
        removeBtn.addEventListener("click", () => {

            if(item.quantity > 1){
               item.quantity--; 
            }
            else{
                cart.splice(index, 1);
            }

            updateCart();
        })

        //add button to list item
        li.appendChild(removeBtn);
        //add to list
        cartList.appendChild(li);

        //update total:
        total += subtotal;
    })

    cartTotal.textContent = total.toFixed(2)
    console.log("cart updated!");


}

function addToCart(name, price){
    //if item already in cart, increase item quantity
    const itemInCart = cart.find(item=>item.name ===name);
    if(itemInCart){
        itemInCart.quantity++;
    }
    //else, add to cart with quantity 1
    else{
        cart.push({name, price, quantity:1});
    }
    //update cart
    updateCart();

    document.getElementById("cart").scrollIntoView({behavior: "smooth", block: "center"});
}


document.addEventListener("DOMContentLoaded", () => {
    const addToCartButtons = document.querySelectorAll("button.add-to-cart");

    //when add to cart button clicked
    addToCartButtons.forEach(button => {
        button.addEventListener("click", () => {

    //get menu item, and its name and pric
            const item = button.closest(".menu-item");
            const itemName = item.dataset.name;
            const itemPrice = parseFloat(item.dataset.price);

            addToCart(itemName, itemPrice);
        })
    })

    //when clear cart button clicked
    const clearCartBtn = document.getElementById("clear-cart");

    clearCartBtn.addEventListener("click", () => {
        cart.length = 0;
        updateCart();
    })
})