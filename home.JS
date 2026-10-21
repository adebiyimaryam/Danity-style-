// Our products
const products = [
    {
        id: 1,
        name: "Elegant Floral Dress",
        price: 25000,
        image: "images/dress1.jpg"
    },

    {
        id: 2,
        name: "Soft Pink Dress",
        price: 30000,
        image: "images/dress2.jpg"
    },

    {
        id: 3,
        name: "Classic Evening Dress",
        price: 35000,
        image: "images/dress3.jpg"
    }
];

// Get the existing cart from browser storage
let cart = JSON.parse(localStorage.getItem("daintyCart")) || [];

// Update the number displayed in the navigation
function updateCartCount() {
    const cartCount = document.getElementById("cart-count");

    if (cartCount) {
        cartCount.textContent = cart.reduce(
            (total, item) => total + item.quantity,
            0
        );
    }
}

// Add a product to the cart
function addToCart(productId) {
    const product = products.find(item => item.id === productId);

    if (!product) {
        return;
    }

    const existingItem = cart.find(item => item.id === productId);

    if (existingItem) {
        existingItem.quantity++;
    } else {
        cart.push({
            ...product,
            quantity: 1
        });
    }

    // Save the cart in the browser
    localStorage.setItem("daintyCart", JSON.stringify(cart));

    // Update the cart number
    updateCartCount();

    alert(product.name + " has been added to your cart!");
}

// Display the correct cart count when the page opens
updateCartCount();
