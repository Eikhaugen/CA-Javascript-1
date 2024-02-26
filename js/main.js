export const cartArray = JSON.parse(window.localStorage.getItem("RainydaysCart")) || [];
export const productsContainer = document.querySelector("#products-container");
export const filterBtns = document.querySelectorAll(".filterBtn");
export const cartMenuBTN = document.querySelector(".cart-icon-container");
export const loader = document.querySelector(".loader");
export const cartCounter = document.querySelector(".cart-counter");
export const cartContainer = document.querySelector(".cartContainer");
export const checkoutButton = document.querySelector(".checkoutButton");
export let selectedJacket;

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
                    <img class="product-image" src="${jacket.image.url}" alt="jacket.image.alt">
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
                    <img class="product-image" src="${jacket.image.url}" alt="jacket.image.alt">
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
            <a class="product-card" href="./pages/product/index.html?id=${jacket.id}">
                <div class="product-image-container">
                    <img class="product-image" src="${jacket.image.url}" alt="jacket.image.alt">
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
            <a class="product-card" href="./pages/product/index.html?id=${jacket.id}">
                <div class="product-image-container">
                    <img class="product-image" src="${jacket.image.url}" alt="jacket.image.alt">
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
export async function getSingleProduct() {
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
            let jacket = jackets[i];
            if (jacket.id === jacketURLid) {
                if (jacket.onSale) {
                    productsContainer.innerHTML = `
                        <div class="single-product-card">
                       
                            <div class="product-image-container">
                                <img class="product-image" src="${jacket.image.url}" alt="jacket.image.alt">
                            </div>
                            <div class="product-detail-container">
                                <span class="product-title">${jacket.title}</span>
                                <span>${jacket.description}</span>
                                    <div class="price-container">
                                        <span class="product-price-linethrough">${jacket.price}</span>
                                        <span class="product-discount-price">${jacket.discountedPrice}</span>
                                    </div>
                            </div>
                            <button class="addToCartBTN">
                                Add to cart
                            </button>
                        </div>`;
                }
                if (!jacket.onSale) {
                    productsContainer.innerHTML += `
                        <div class="single-product-card">
                            <div class="product-image-container">
                                <img class="product-image" src="${jacket.image.url}" alt="jacket.image.alt">
                            </div>
                            <div class="product-detail-container">
                                <span class="product-title">${jacket.title}</span>
                                <span>${jacket.description}</span>
                                <span class="product-price">${jacket.price}</span>
                            </div>
                            <button class="addToCartBTN">
                                Add to cart
                            </button>
                        </div>`;
                }

                selectedJacket = jacket
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

//Cart Functions
export function toggleCartMenu() {
    if (cartContainer.style.display === "none" || cartContainer.style.display === "") {
        cartContainer.style.display = "flex";
    } else {
        cartContainer.style.display = "none";
    }
}

export function addToCart(jacket) {
    cartArray.push(jacket);
    localStorage.setItem("RainydaysCart", JSON.stringify(cartArray));
}

export function updateCart() {
    let cartArrayLength = cartArray.length;

    // Display or hide cart counter
    cartCounter.innerHTML = cartArrayLength.toString();
    if (cartArrayLength === 0) {
        cartCounter.style.display = "none";
    } else {
        cartCounter.style.display = "flex";
    }

    // Display items inside of cart
    if (cartArrayLength === 0) {
        cartContainer.innerHTML = "<p>Your cart is empty.</p>";
    } else {
        let cartSum = 0;
        let cartHTML = "";
        cartArray.forEach((item, index) => {
            if (item.onSale) {
                cartHTML += `
        <li class="cartProductCard">
          <img class="cartProductImg" src="${item.image.url}" alt="jacket.image.alt">
          <div>
          <span>${item.title}</span>
          <div class="cartPriceContainer">
          <span class="cartPreviousPrice">${item.price}</span>
          <span class="cartDiscountedPrice">${item.discountedPrice}</span>
          </div>
            <button class="removeButton" data-index="${index}">X</button>
          </div>
        </li>
      `;
            } else {
                cartHTML += `
        <li class="cartProductCard">
          <img class="cartProductImg" src="${item.image.url}" alt="jacket.image.alt">
          <div class="cartProductDetails">
            <span>${item.title}</span>
              <div class="cartPriceContainer">
                <span>${item.price}</span>
              </div>
              <button class="removeButton" data-index="${index}">X</button>
          </div>
        </li>
      `;
            }
            if (item.onSale) {
                cartSum += item.discountedPrice;
            } else {
                cartSum += item.price;
            }
        });
        cartHTML += `
                    <div class="cartSummary">
                        <span>Total:</span>
                        <span class="cartSummarySum">${cartSum.toFixed(2)} kr</span>
                    </div>`;
        cartHTML += `<button class="checkoutButton">Checkout</button>`;
        cartContainer.innerHTML = cartHTML;
    }
}

export function removeFromCart(index) {
    cartArray.splice(index, 1);
    localStorage.setItem("RainydaysCart", JSON.stringify(cartArray));
    updateCart();
}

// Checkout page functions
export function displayCheckout(){
    let checkoutSummary = document.querySelector(".checkout-summary");
    let checkoutSum = 0;
    let checkoutHTML =``

    //Display items inside checkout summary
cartArray.forEach((item)=>{
    if(item.onSale) {
        checkoutSum += item.discountedPrice;
        checkoutHTML += `
    <li class="checkoutProductCard">
    <img src="${item.image.url}" alt="jacket.image.alt">
    <div class="checkoutProductCardDetails">
            <h3>${item.title}</h3>
         <span class="checkoutPreviousPrice">${item.discountedPrice}</span>
         </div>
    </li>
    `
    }
    if(!item.onSale){
        checkoutSum += item.price;
        checkoutHTML += `
    <li class="checkoutProductCard">
    <img src="${item.image.url}" alt="jacket.image.alt">
    <div class="checkoutProductCardDetails">
            <h3>${item.title}</h3>
         <span class="checkoutPreviousPrice">${item.price}</span>
         </div>

</li>
    `;
    }

})
    checkoutHTML += `
                    <li class="checkoutTotal"><span>Total:</span><span>${checkoutSum.toFixed(2 )}</span></li>`
    checkoutSummary.innerHTML = checkoutHTML

}
