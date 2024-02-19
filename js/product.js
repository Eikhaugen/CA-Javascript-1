import {getSingleProduct, cartMenuBTN, toggleCartMenu, addToCart, selectedJacket, updateCart, removeFromCart, cartContainer} from './utils.js';

getSingleProduct();

updateCart();

cartMenuBTN.addEventListener("click", toggleCartMenu);

document.addEventListener("click", (event) => {
    if (event.target.classList.contains("addToCartBTN")){
        addToCart(selectedJacket);
    }
    updateCart();
});

cartContainer.addEventListener("click", (event) => {
    if (event.target.classList.contains("removeButton")) {
        const index = event.target.dataset.index;
        removeFromCart(index);
    }
});
