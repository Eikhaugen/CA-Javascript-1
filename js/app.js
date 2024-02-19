import { getProducts, filterProducts, productsContainer, filterBtns, loader } from './utils.js';

getProducts();

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

