export const productsContainer = document.querySelector("#products-container");
export const filterBtns = document.querySelectorAll(".filterBtn");
export const cartMenuBTN = document.querySelector(".cart-icon-container");
export const cartMenu = document.querySelector("#cartContainer");
export const loader = document.querySelector(".loader");

// Homepage
export async function getProducts() {
    loader.style.display = "block"
    try {
        const response = await fetch("https://v2.api.noroff.dev/rainy-days");
        const result = await response.json();
        const productData = result.data;
        displayProducts(productData);
    } catch (error) {
        console.error('Error fetching products:', error);
    }
    loader.style.display = "none"
}

export function displayProducts(jackets) {
    productsContainer.innerHTML = ``;
    jackets.forEach((jacket) => {
        if (jacket.onSale) {
            productsContainer.innerHTML += `
            <a class="product-card" href="./pages/product/index.html?id=${jacket.id}">
                <div class="product-image-container">
                    <img class="product-image" src="${jacket.image.url}">
                </div>
                <div class="product-detail-container">
                    <span class="product-title">${jacket.title}</span>
                    <div class="price-container">
                        <span class="product-price-linethrough">${jacket.price}</span>
                        <span class="product-discount-price">${jacket.discountedPrice}</span>
                    </div>
                </div>
            </a>`;
        }
        if (!jacket.onSale) {
            productsContainer.innerHTML += `
            <a class="product-card" href="./pages/product/index.html?id=${jacket.id}">
                <div class="product-image-container">
                    <img class="product-image" src="${jacket.image.url}">
                </div>
                <div class="product-detail-container">
                    <span class="product-title">${jacket.title}</span>
                    <span class="product-price">${jacket.price}</span>
                </div>
            </a>`;
        }
    });
}

export async function filterProducts(filterParam) {
    loader.style.display = "block";
    try {
        const response = await fetch("https://v2.api.noroff.dev/rainy-days");
        const result = await response.json();
        const jackets = result.data;
        productsContainer.innerHTML = ``;
        jackets.forEach((jacket) => {
            if (jacket.onSale && jacket.gender === filterParam) {
                productsContainer.innerHTML += `
            <a class="product-card" href="product.html?id=${jacket.id}">
                <div class="product-image-container">
                    <img class="product-image" src="${jacket.image.url}">
                </div>
                <div class="product-detail-container">
                    <span class="product-title">${jacket.title}</span>
                    <div class="price-container">
                        <span class="product-price-linethrough">${jacket.price}</span>
                        <span class="product-discount-price">${jacket.discountedPrice}</span>
                    </div>
                </div>
            </a>`;
            }
            if (!jacket.onSale && jacket.gender === filterParam) {
                productsContainer.innerHTML += `
            <a class="product-card" href="product.html?id=${jacket.id}">
                <div class="product-image-container">
                    <img class="product-image" src="${jacket.image.url}">
                </div>
                <div class="product-detail-container">
                    <span class="product-title">${jacket.title}</span>
                    <span class="product-price">${jacket.price}</span>
                </div>
            </a>`;
            }
        });
    } catch (error) {
        console.error('Error filtering products:', error);
    }
    loader.style.display = "none";
}

//ProductPage


