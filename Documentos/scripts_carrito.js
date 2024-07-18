let cart = JSON.parse(localStorage.getItem('cart')) || [];

function addToCart(id, name, price, image) {
    const product = cart.find(item => item.id === id);
    if (product) {
        product.quantity += 1;
    } else {
        cart.push({ id, name, price, image, quantity: 1 });
    }
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCart();
}

function removeFromCart(id) {
    cart = cart.filter(item => item.id !== id);
    updateCart();
    localStorage.setItem('cart', JSON.stringify(cart));
}

function updateQuantity(id, quantity) {
    const product = cart.find(item => item.id === id);
    if (product) {
        product.quantity = parseInt(quantity);
        if (product.quantity <= 0) {
            removeFromCart(id);
        } else {
            updateCart();
            localStorage.setItem('cart', JSON.stringify(cart));
        }
    }
}

function updateCart() {
    const cartItems = document.getElementById('cartItems');
    if (cartItems) {
        cartItems.innerHTML = '';
        let total = 0;
        cart.forEach(item => {
            total += item.price * item.quantity;
            const row = document.createElement('tr');
            row.innerHTML = `
                <td><img src="${item.image}" alt="${item.name}" width="50"></td>
                <td>${item.name}</td>
                <td>$${item.price.toFixed(2)}</td>
                <td><input type="number" value="${item.quantity}" min="1" onchange="updateQuantity('${item.id}', this.value)"></td>
                <td>$${(item.price * item.quantity).toFixed(2)}</td>
                <td><button onclick="removeFromCart('${item.id}')">Eliminar</button></td>
            `;
            cartItems.appendChild(row);
        });
        document.getElementById('cartTotal').innerText = `$${total.toFixed(2)}`;
    }
}

function finalizePurchase() {
    alert('¡Compra exitosa!');
    cart = [];
    updateCart();
    localStorage.setItem('cart', JSON.stringify(cart));
}

document.addEventListener('DOMContentLoaded', updateCart);
