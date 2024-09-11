// cart.js
document.addEventListener('DOMContentLoaded', () => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartContainer = document.querySelector('#cart-items');
    const cartTotal = document.querySelector('#cart-total');
    
    function renderCart() {
        cartContainer.innerHTML = '';
        let total = 0;
        
        cart.forEach(item => {
            const itemDiv = document.createElement('div');
            itemDiv.classList.add('cart-item');
            
            const img = document.createElement('img');
            img.src = item.image;
            img.alt = item.name;
            img.classList.add('cart-item-image');
            
            const name = document.createElement('div');
            name.textContent = item.name;
            name.classList.add('cart-item-name');
            
            const price = document.createElement('div');
            price.textContent = `₹${item.price.toFixed(2)}`;
            price.classList.add('cart-item-price');
            
            itemDiv.appendChild(img);
            itemDiv.appendChild(name);
            itemDiv.appendChild(price);
            
            cartContainer.appendChild(itemDiv);
            total += item.price;
        });
        
        cartTotal.textContent = `Total: ₹${total.toFixed(2)}`;
    }

    renderCart();
});
