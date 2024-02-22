import {displayCheckout, cartArray} from "./main.js";
const confirmOrderBTN = document.querySelector(".confirmOrder");

displayCheckout();

confirmOrderBTN.addEventListener("click", (event)=>{
    if (event.target.classList.contains("confirmOrder")) {
        cartArray.splice(0, cartArray.length);
        localStorage.setItem("RainydaysCart", JSON.stringify(cartArray));
    window.location.href = "../../pages/checkout-success/index.html"
    }
})
