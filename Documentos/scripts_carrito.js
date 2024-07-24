// scripts_carrito.js

// Función para agregar productos al carrito
function addToCart(id, name, price, image) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    let product = cart.find(item => item.id === id);
    if (product) {
        product.quantity++;
    } else {
        cart.push({ id, name, price, quantity: 1, image });
    }
    localStorage.setItem('cart', JSON.stringify(cart));
}

// Función para cargar los productos del carrito en la página
function loadCart() {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    let cartItems = document.getElementById('cartItems');
    let cartTotal = 0;

    cartItems.innerHTML = cart.map(item => {
        let total = item.price * item.quantity;
        cartTotal += total;
        return `
            <tr>
                <td><img src="${item.image}" alt="${item.name}" width="50" height="50"></td>
                <td>${item.name}</td>
                <td>$${item.price.toFixed(2)}</td>
                <td>
                    <button onclick="updateQuantity('${item.id}', -1)">-</button>
                    ${item.quantity}
                    <button onclick="updateQuantity('${item.id}', 1)">+</button>
                </td>
                <td>$${total.toFixed(2)}</td>
                <td><button onclick="removeFromCart('${item.id}')">Eliminar</button></td>
            </tr>
        `;
    }).join('');

    document.getElementById('cartTotal').textContent = `$${cartTotal.toFixed(2)}`;
}

// Función para actualizar la cantidad de un producto en el carrito
function updateQuantity(id, change) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    let product = cart.find(item => item.id === id);
    if (product) {
        product.quantity += change;
        if (product.quantity <= 0) {
            cart = cart.filter(item => item.id !== id);
        }
        localStorage.setItem('cart', JSON.stringify(cart));
        loadCart();
    }
}

// Función para eliminar un producto del carrito
function removeFromCart(id) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart = cart.filter(item => item.id !== id);
    localStorage.setItem('cart', JSON.stringify(cart));
    loadCart();
}

// Función para finalizar la compra
function finalizePurchase() {
    localStorage.removeItem('cart');
    document.getElementById('successMessage').style.display = 'block';
    setTimeout(() => {
        document.getElementById('successMessage').style.display = 'none';
        window.location.href = 'index.html';
    }, 5000);
}

document.addEventListener('DOMContentLoaded', loadCart);
