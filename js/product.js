import {getSingleProduct, cartMenuBTN, addToCart, toggleCartMenu, selectedJacket, updateCart} from './utils.js';

getSingleProduct();

updateCart();

cartMenuBTN.addEventListener("click", toggleCartMenu);

document.addEventListener("click", (event) => {
    if (event.target.matches("#addToCartBTN")){
        addToCart(selectedJacket);
    }
    updateCart();
});

