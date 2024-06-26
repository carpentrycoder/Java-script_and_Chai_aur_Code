let products = [];
const cart = JSON.parse(localStorage.getItem('cart')) || [];

async function fetchProducts() {
    try {
        const response = await fetch('https://dummyjson.com/products/search?q=phone');
        const data = await response.json();
        products = data.products.map(product => ({
            id: product.id,
            name: product.title,
            price: product.price,
            category: product.category,
        }));
        renderProducts();
    } catch (error) {
        console.error('Error fetching products:', error);
    }
}

function renderProducts() {
    const productsContainer = document.getElementById('products');
    if (!productsContainer) return;

    productsContainer.innerHTML = '';
    products.forEach(product => {
        const productElement = document.createElement('div');
        productElement.classList.add('product');
        productElement.innerHTML = `
            <h2>${product.name}</h2>
            <p>Price: $${product.price}</p>
            <p>Category: ${product.category}</p>
            <button onclick="addToCart(${product.id})">Add to Cart</button>
        `;
        productsContainer.appendChild(productElement);
    });
}

function renderCart() {
    const cartContainer = document.getElementById('cart');
    if (!cartContainer) return;

    cartContainer.innerHTML = '';
    let totalPrice = 0;

    cart.forEach(cartItem => {
        const cartElement = document.createElement('div');
        cartElement.classList.add('cart-item');
        cartElement.innerHTML = `
            <h2>${cartItem.name}</h2>
            <p>Price: $${cartItem.price}</p>
            <p>Quantity: 
                <button onclick="updateQuantity(${cartItem.id}, 'decrease')">-</button>
                ${cartItem.quantity}
                <button onclick="updateQuantity(${cartItem.id}, 'increase')">+</button>
            </p>
            <button onclick="removeFromCart(${cartItem.id})">Remove</button>
        `;
        cartContainer.appendChild(cartElement);
        totalPrice += cartItem.price * cartItem.quantity;
    });

    const totalElement = document.createElement('div');
    totalElement.classList.add('total');
    totalElement.innerHTML = `<h2>Total Price: $${totalPrice.toFixed(2)}</h2>`;
    cartContainer.appendChild(totalElement);
    updateCartCount();
}

function addToCart(id) {
    const product = products.find(p => p.id === id);
    const existingItem = cart.find(item => item.id === id);

    if (existingItem) {
        existingItem.quantity++;
    } else {
        cart.push({ ...product, quantity: 1 });
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    renderCart();
}

function removeFromCart(id) {
    const index = cart.findIndex(item => item.id === id);
    if (index !== -1) {
        cart.splice(index, 1);
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    renderCart();
}

function updateQuantity(id, action) {
    const cartItem = cart.find(item => item.id === id);
    if (!cartItem) return;

    if (action === 'increase') {
        cartItem.quantity++;
    } else if (action === 'decrease' && cartItem.quantity > 1) {
        cartItem.quantity--;
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    renderCart();
}

function updateCartCount() {
    const cartCountElement = document.getElementById('cart-count');
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCountElement.textContent = totalItems;
}

document.addEventListener('DOMContentLoaded', () => {
    fetchProducts();
    renderCart();
});
