const productsContainer = document.querySelector("#products-container")
let productData = [];


function getProducts() {
    fetch("https://v2.api.noroff.dev/rainy-days")
        .then((response) => response.json())
        .then((result) => {
            productData = result.data
            console.log(productData)
            displayProducts(productData)
        })

}

function displayProducts(jackets) {
    productsContainer.innerHTML = ``
    jackets.forEach((jacket) => {
        if (jacket.onSale) {
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
            </a>`
        }
        if (!jacket.onSale) {
            productsContainer.innerHTML += `
            <a class="product-card" href="product.html?id=${jacket.id}">
                <div class="product-image-container">
                    <img class="product-image" src="${jacket.image.url}">
                </div>
                <div class="product-detail-container">
                    <span class="product-title">${jacket.title}</span>
                    <span class="product-price">${jacket.price}</span>
                </div>
            </a>`
        }


    })
}

getProducts()
