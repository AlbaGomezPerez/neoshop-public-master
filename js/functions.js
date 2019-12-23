'use strict';

const sliderSpace = document.querySelector('.slider');
const productsSpace = document.querySelector('.products');
let product = '';
let slide = '';
const productsUrl = "../api/products.json";
const slideUrl = "/api/slides.json";

window.onload = function () {
    fetch(slideUrl)
        .then(response => response.json())
        .then(data => {
            slide = data;

            data.data.map((item, index) => {
                sliderSpace.innerHTML += generateSlidesHTML(index, item);
            });
            getDataProducts();
        });
}

function getDataProducts() {
    fetch(productsUrl)
        .then(response => response.json())
        .then(data => {
            product = data;

            data.data.map((item, index) => {
                productsSpace.innerHTML += generateProductsHTML(index, item);
            });
        });
}

    function generateProductsHTML(index, item) {
        return `<div class="product-container">
                      <img class="product-image" src="${item.image}">
                      <div class="product-name" id="">${item.name}</div>
                      <div class="product-price" id="">${item.price}</div>
                      <div class="product-price" id="">${item.button_text}</div> 
                  </div>`
    }


    function generateSlidesHTML(index, item) {
    return `<ulclass="slider">
            <li id="slide1">En campusMVP</li>
        </ul>`
    }


/**
 * TODO: Desarrollar el código del slider
 */

/**
 * TODO: Desarrollar el código para cargar productos por Ajax
 */
