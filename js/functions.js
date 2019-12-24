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
                  </div>`}


    function generateSlidesHTML(index, item) {
    return `
        <div class="slider">
            <img class"slider-image" src=${item.bg_image} id="slide${item.id}"></img>
        </div>
`
}


/**
 <div id="slider">
     <ul>
         <li>SLIDE 1</li>
         <li>SLIDE 2</li>
         <li>SLIDE 3</li>
         <li>SLIDE 4</li>
     </ul>
 </div>
 <div class="slider_option">
     <input type="checkbox" id="checkbox">
     <label for="checkbox">Autoplay Slider</label>
 </div>
 */
