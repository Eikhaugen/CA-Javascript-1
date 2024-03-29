import { getProducts, filterProducts, filterBtns, cartMenuBTN, toggleCartMenu, updateCart, removeFromCart, cartContainer } from './main.js';

updateCart();

getProducts();

cartMenuBTN.addEventListener("click", toggleCartMenu);

filterBtns.forEach((btn) => {
    btn.addEventListener("click", function () {
        const filterParam = this.dataset.filter;
        if (filterParam === "all") {
            getProducts();
        } else {
            filterProducts(filterParam);
        }
    });
});

cartContainer.addEventListener("click", (event) => {
    if (event.target.classList.contains("removeButton")) {
        const index = event.target.dataset.index;
        removeFromCart(index);
    }
});

cartContainer.addEventListener("click", (event) => {
    if (event.target.classList.contains("checkoutButton")) {
        window.location.href = "pages/checkout/index.html"
    }
});
