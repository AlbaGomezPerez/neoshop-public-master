'use strict';

const productsSpace = document.querySelector('.info-shop-container');

/**
 * Get localStorage data and parse
 */
window.onload = function () {
    const productsCardString = localStorage.getItem("productsCart");
    const productsCardArray = JSON.parse(productsCardString);

    productsCardArray.map( product => {
        productsSpace.innerHTML += generateProductsToBuy(product)
    });
};

function generateProductsToBuy(product){
 return(
     `<div class="individually-product">
        <img class="cart-image" src="${product.image}">
        <p class="cart-name">${product.name}</p>
        <p class="cart-price">${product.price}</p>
    </div>`
 )
}