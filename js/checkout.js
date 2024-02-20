import {displayCheckout} from "./utils.js";
export const confirmOrderBTN = document.querySelector(".confirmOrder");

displayCheckout()

confirmOrderBTN.addEventListener("click", (event)=>{
    if (event.target.classList.contains("confirmOrder")) {
    window.location.href = "../pages/checkout-success/index.html"
    }
})
