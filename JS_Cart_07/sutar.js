let products = [];
const cart = JSON.parse(localStorage.getItem('cart')) || [];

async function fetchprducts() {
    try {
        const response = await fetch('https://dummyjson.com/products');
        const data = await response.json();
        products = data.products.map(product => ({
            id: product.id,
            name: product.title,
            price: product.price,
            category: product.category,
        }));
    } catch (error) {
        console.error("error is occcured in products: ", error);
    }
}

function renderproducts() {
    const productsConatainer = document.getElementById('products');
    if (!productsConatainer) return;

    productsConatainer.innerHTML = '';
    products.forEach(product => {
        const productElement = document.createElement('div');
        productElement.classList.add('product');
        productElement.innerHTML = `
        <h2>${product.name}</h2>
        <p>${product.price}</p>
        <button onclick="addtoCart(${product.id})">Add to Cart</button>
        `;
        productsConatainer.appendChild(productElement);
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
        <p>Price: ${cartItem.price}</p>
        <p>Quantity:
         <button onclick="updateQuantity(${cartItem.id}, 'decrease')">-</button>
         ${cartItem.quantity}
         <button onclick="updateQuantity(${cartItem.id}, 'increase')">+</button>
         `;
        cartContainer.appendChild(cartElement);
        totalPrice += cartItem.price * cartItem.quantity;
    });

    const totalElement = document.createElement('div');
    totalElement.classList.add('total');
    totalElement.innerHTML = `<h2>Total Price: $${totalPrice.toFixed(2)}</h2>`; // Corrected total.price to totalPrice
    cartContainer.appendChild(totalElement);
    updateCartCount();
}

function addtoCart(id) {
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
    fetchprducts(); // Corrected fetchProducts to fetchprducts
    renderCart();
});
