import {getSingleProduct, cartMenuBTN, toggleCartMenu, addToCart, selectedJacket, updateCart, cartContainer, removeFromCart} from './main.js';

getSingleProduct();

updateCart();

cartMenuBTN.addEventListener("click", toggleCartMenu);

document.addEventListener("click", (event) => {
    if (event.target.classList.contains("addToCartBTN")) {
        addToCart(selectedJacket);
    }
    updateCart();
});

cartContainer.addEventListener("click", (event) => {
    if (event.target.classList.contains("checkoutButton")) {
        window.location.href = "../../pages/checkout/index.html"
    }
});

cartContainer.addEventListener("click", (event) => {
    if (event.target.classList.contains("removeButton")) {
        const index = event.target.dataset.index;
        removeFromCart(index);
    }
});