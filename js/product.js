import {getSingleProduct, cartMenuBTN, toggleCartMenu, addToCart, selectedJacket, updateCart} from './utils.js';

getSingleProduct();

updateCart();

cartMenuBTN.addEventListener("click", toggleCartMenu);

document.addEventListener("click", (event) => {
    if (event.target.classList.contains("addToCartBTN")) {
        addToCart(selectedJacket);
    }
    updateCart();
});
