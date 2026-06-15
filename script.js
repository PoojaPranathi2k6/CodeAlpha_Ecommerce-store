let cartCount = 0;
let cartItems = [];
let totalPrice = 0;

function addToCart(productName, price) {

    cartCount++;

    document.getElementById("cart-count").textContent = cartCount;

    cartItems.push({
        name: productName,
        price: price
    });

    totalPrice += price;

    document.getElementById("total-price").textContent = totalPrice;

    displayCart();
}

function removeLastItem() {

    if (cartItems.length === 0) {
        alert("Cart is empty!");
        return;
    }

    const removedItem = cartItems.pop();

    cartCount--;

    totalPrice -= removedItem.price;

    document.getElementById("cart-count").textContent = cartCount;

    document.getElementById("total-price").textContent = totalPrice;

    displayCart();
}

function clearCart() {

    cartItems = [];
    cartCount = 0;
    totalPrice = 0;

    document.getElementById("cart-count").textContent = 0;

    document.getElementById("total-price").textContent = 0;

    displayCart();
}

function displayCart() {

    const cartList = document.getElementById("cart-list");

    cartList.innerHTML = "";

    cartItems.forEach(item => {

        const li = document.createElement("li");

        li.textContent = `${item.name} - ₹${item.price}`;

        cartList.appendChild(li);

    });
}