import {productsContainer, loader} from './utils.js';


async function getSingleProduct() {
    const parameterString = window.location.search;
    const searchParameters = new URLSearchParams(parameterString);
    const jacketURLid = searchParameters.get("id");
    loader.style.display = "block";
    try {
        const response = await fetch("https://v2.api.noroff.dev/rainy-days");
        const result = await response.json();
        const jackets = result.data;

        let found = false;
        for (let i = 0; i < jackets.length; i++) {
            console.log(i)
            let jacket = jackets[i];
            if (jacket.id === jacketURLid) {
                if (jacket.onSale) {
                    productsContainer.innerHTML = `
                        <div class="product-card">
                            <div class="product-image-container">
                                <img class="product-image" src="${jacket.image.url}">
                            </div>
                            <div class="product-detail-container">
                                <span class="product-title">${jacket.title}</span>
                                <span>${jacket.description}</span>
                                    <div class="price-container">
                                        <span class="product-price-linethrough">${jacket.price}</span>
                                        <span class="product-discount-price">${jacket.discountedPrice}</span>
                                    </div>
                            </div>
                            <select class="sizeSelection"></select>
                            <button id="addToCartBTN">
                                Add to cart
                            </button>
                        </div>`;
                }
                if (!jacket.onSale) {
                    productsContainer.innerHTML += `
                        <div class="product-card">
                            <div class="product-image-container">
                                <img class="product-image" src="${jacket.image.url}">
                            </div>
                            <div class="product-detail-container">
                                <span class="product-title">${jacket.title}</span>
                                <span>${jacket.description}</span>
                                <span class="product-price">${jacket.price}</span>
                            </div>
                            <select class="sizeSelection"></select>
                            <button id="addToCartBTN">
                                Add to cart
                            </button>
                        </div>`;
                }

                const sizeSelector = document.querySelector(".sizeSelection");
                jacket.sizes.forEach((size) => {
                    sizeSelector.innerHTML += `<option>${size}</option>`;
                });

                found = true;
                loader.style.display = "none";
                break;
            }
        }

        if (!found) {
            window.location.href = "../../index.html";
        }

    } catch (error) {
        console.error('Error fetching products:', error);
    }
}

getSingleProduct();
