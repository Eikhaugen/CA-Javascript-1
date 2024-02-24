# CA-Javascript-1

This assignment was part of the JavaScript 1 course within the second semester of the Frontend Development program at Noroff School of Technology and Digital Media.

## Table of contents:
- [About](#about)
    - [Requirements](#requirements)
- [Features](#features)
- [Process:](#process)
- [Reflection](#reflection)

## About
This assignment was part of the JavaScript 1 course within the second semester of the Frontend Development program at Noroff School of Technology and Digital Media.
The goal of the course assignment was to create an online store to display products from an API endpoint.

### Requirements

The requirements for this course assignment was as follows:
- Display a list of products on the homepage.
- Filter products by category, gender or genre.
- Display a single product with details on a product page.
- Being able to add and remove items from the cart.
- View a summary of the cart on the checkout page.
- View an order confirmation screen after checking out.


- Required pages
  - Homepage
  - Product Page
  - Checkout Page
  - Confirmation Page
  

- Additional Important features: 
  - Error handling
  - Loading indicator
  - No hardcoded product data
  - Even though the assignment is graded based on the JavaScript code, the site still needs to be accessible and usable.
  - Use "async" instead of "then" for asynchronous actions.
  - Remove all console.log statements before delivery.


## Features:

My submission features:
- Homepage displaying products fetched from an API endpoint.
- Each product on the homepage links to a single product page.
- URL parameters embedded with the product ID for each product link to the single product page.
- Reading and comparing the URL parameter ID with product IDs on the single product page.
- Displaying the single product if IDs match; otherwise, redirecting the user back to the homepage.
- "Add to Cart" button on the single product page, adding the whole product object to an array stored in localStorage.
- Navbar with a cart icon displaying the current cart's content.
- Cart displays "The cart is empty" if no items are in the cart; otherwise, displays products with a remove button for each item.
- Cart also shows a cart total for the user.
- If items are in the cart, a checkout button is displayed.
- Checkout button takes the user to the checkout page.
- Checkout page includes a cart summary and input fields for name, address, and payment method (no backend data sending).
- Displaying items using objects stored in the cart array instead of another API fetch request.
- "Confirm Order" button on the checkout page redirects to a checkout success page.
- Clicking "Confirm Order" button clears the cart array.
- Checkout success page features a message thanking for the order and a link back to the homepage.


## Process

As the course assignment did not emphasize design, I opted not to use Figma or other design tools for page prototyping before coding.

To begin, I created GitHub issues for each user story and requirement outlined in the course assignment. I then proceeded to develop the HTML structure before implementing JavaScript functionality, prioritizing one page at a time starting with the homepage, followed by the product details page, checkout page, and finally the checkout success page.

The majority of the functions were developed concurrently with the homepage and product details page. These functions are primarily housed in main.js, with required functions exported to each respective page.

Once all user stories and requirements were addressed, I focused on refining the CSS styles and resolving any bugs that arose during testing.


## Reflection

The course assignment was a fun challenge, I didn't focus on the design since it's mostly graded on the code, so the design ended up really simple, with little styling.
I did not make the pages WCAG compliant as it was not a requirement of the course assignment.
The alt texts on the images are empty, the functionality is there but the data was not provided, I used the v2 of the API where the alt text was supposed to be included.
I could have spent time adding a counter in the cart that counts up quantities instead of adding the same jacket over and over.
The form on the checkout page has no functionality, other than displaying the items added in the cart and calculating a total.
I decided to empty the cart saved in localstorage after checking out.

On the single product detail page, even though the API supports getting a single product by it's ID, I made a fetch request that gets all the products, compares them to the one that was clicked on on the homepage, and then displays it. I realize that this would not be a good solution if there was a huge database of products to compare with, I didn't think of it when I made it, but luckily thye provided API only has 12 products, and it would be easy to fix if the database was to grow.

Overall I feel like the coding went well, there was some stumbling blocks along the way, but referencing the course material and what I had done during lectures, I managed to find solutions.
