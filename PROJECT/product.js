document.addEventListener('DOMContentLoaded', () => {
    const products = document.querySelectorAll('.product-item');
    
    function filterProducts() {
        const priceRange = document.getElementById('price-range').value;
        const furnitureType = document.getElementById('furniture').value;
 
        products.forEach(product => {
            const price = parseInt(product.querySelector('p').innerText.replace('MRP:', '').replace('₹', '').trim());
            const type = product.querySelector('h2').innerText;
 
            let priceCondition = true;
            let typeCondition = true;
 
            if (priceRange !== 'all') {
                const [minPrice, maxPrice] = priceRange.split('-').map(Number);
                priceCondition = price >= minPrice && price <= maxPrice;
            }
 
            if (furnitureType !== 'all') {
                typeCondition = type === furnitureType;
            }
 
            if (priceCondition && typeCondition) {
                product.style.display = 'block';
            } else {
                product.style.display = 'none';
            }
        });
    }
 
    document.getElementById('price-range').addEventListener('change', filterProducts);
    document.getElementById('furniture').addEventListener('change', filterProducts);
 });
 
 // product.js
 
 document.addEventListener('DOMContentLoaded', () => {
    const addToCartButtons = document.querySelectorAll('.product-item button:nth-child(2)');
    addToCartButtons.forEach(button => {
        button.addEventListener('click', addToCart);
    });
 });
 
 // Function to initialize the cart
 function initializeCart() {
     let cart = localStorage.getItem('cart');
     if (!cart) {
         localStorage.setItem('cart', JSON.stringify([]));
     }
   }
   
   // Function to add an item to the cart
   function addToCart(productId) {
     let cart = JSON.parse(localStorage.getItem('cart'));
     
     if (!cart.includes(productId)) {
         cart.push(productId);
         localStorage.setItem('cart', JSON.stringify(cart));
         alert('product addded to cart');
     } else {
         alert('Product already in cart!');
     }
   }
// product.js
document.addEventListener('DOMContentLoaded', () => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartCount = document.querySelector('#cart-count');

    function updateCart() {
        localStorage.setItem('cart', JSON.stringify(cart));
        if (cartCount) {
            cartCount.textContent = cart.length;
        }
    }

    function addToCart(event) {
        const productElement = event.target.closest('.product-item');
        if (!productElement) return;
        
        const productName = productElement.querySelector('h2').textContent.trim();
        const productPrice = productElement.querySelector('p').textContent.replace('MRP:', '').trim();
        const productImage = productElement.querySelector('img').src;

        const product = {
            name: productName,
            price: parseFloat(productPrice.replace('₹', '')),
            image: productImage
        };
        
        cart.push(product);
        updateCart();
        alert('Product added to cart');
    }

    document.querySelectorAll('.product-item button').forEach(button => {
        button.addEventListener('click', addToCart);
    });

    updateCart();
});
// Function to show a popup
function showPopup(popupId) {
    document.getElementById(popupId).style.display = 'flex';
  }
  
  // Function to hide a popup
  function hidePopup(popupId) {
    document.getElementById(popupId).style.display = 'none';
  }