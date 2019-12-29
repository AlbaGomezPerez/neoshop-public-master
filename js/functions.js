'use strict';

const sliderSpace = document.querySelector('.slider');
const productsSpace = document.querySelector('.products');
let products;
let slide = '';
const productsUrl = "../api/products.json";
const slideUrl = "/api/slides.json";
const buttonLoad = document.querySelector('.load__button');

window.onload = function () {
    getDataSlider();
    getDataProducts();
}

/**
 * Get slider images from the request
 */
function getDataSlider() {
    fetch(slideUrl)
        .then(response => response.json())
        .then(data => {
            slide = data;

            data.data.map((item, index) => {
                sliderSpace.innerHTML += generateSlidesHTML(index, item);
            });

            //execute here because it's necessary wait fetch
            slides = document.querySelectorAll('.slider .slider-image');
            getDataProducts();
        });
}

/**
 * Get products data from request
 * include campaign images with position (if)
 */
function getDataProducts() {
    fetch(productsUrl)
        .then(response => response.json())
        .then(data => {
            products = data;

            data.data.map((item, index) => {
                if (index === 4) {
                    productsSpace.innerHTML +=
                        `<img class="product-campaign1" position="4" id="image${item.id}" src="../resources/cta/cta1.jpg">`
                }
                if (index === 7) {
                    productsSpace.innerHTML +=
                        `<img class="product-campaign2" position="7" id="image${item.id}" src="../resources/cta/cta2.jpg">`
                }
                productsSpace.innerHTML += generateProductsHTML(index, item);
            });

            for (let buy of document.querySelectorAll('.product-buy')) {
                buy.addEventListener('click', addProduct);
            }
        });
}

/**
 * Find product by id and add it to localStorage
 * @param event
 */
function addProduct(event) {
    const productId = event.currentTarget.id;
    const selectedProduct = products.data.find(myProduct => myProduct.id === parseInt(productId))
    const productsCardString = localStorage.getItem("productsCart");
    let productsCardArray = JSON.parse(productsCardString);

    if (productsCardArray === null || productsCardArray === undefined || productsCardArray.length === 0) {
        productsCardArray = [selectedProduct];
    } else {
        productsCardArray.push(selectedProduct);
    }

    localStorage.setItem("productsCart", JSON.stringify(productsCardArray));
}

/**
 * Create html products section
 */
function generateProductsHTML(index, item) {
    return `<div class="product-container" position=${index}>
                      <img class="product-image" id="image${item.id}" src="${item.image}">
                      <div class="productInfo-container">
                          <div class="product-name">${item.name}</div>
                          <div class="product-price">${item.price}</div>
                      </div>
                      <div class="product-buy" id="${item.id}">${item.button_text}</div> 
                  </div>`
}

/**
 * Create html slider section
 * Add class "showing" first slide
 */
function generateSlidesHTML(index, item) {
    return `<img class="slider-image ${index === 0 ? 'showing' : ''}" src=${item.bg_image} id="slide${item.id}">`
}


/**
 * Repaint infinitely products section
 */
function loadMoreProducts() {
    getDataProducts()
    productsSpace.innerHTML += generateProductsHTML();
}

buttonLoad.addEventListener('click', loadMoreProducts);


/*SLIDER TRANSITION*/
let slides = document.querySelectorAll('.slider .slider-image');
let currentSlide = 0;
let slideInterval = setInterval(nextSlide, 4000);
let nextImage = document.getElementById('next');
let previousImage = document.getElementById('previous');
let manualControls = document.querySelectorAll('.controls');

/*add inline-block style*/
for (let i = 0; i < manualControls.length; i++) {
    manualControls[i].style.display = 'inline-block';
}

/**
 * Call goToSlide function
 */
function nextSlide() {
    goToSlide(currentSlide + 1);
}

function previousSlide() {
    goToSlide(currentSlide - 1);
}


/**
 * Remove class "showing" current slide
 * Get the number of the next slide (% is the rest)
 * Add class "showing" next slide
 */
function goToSlide(n) {
    slides[currentSlide].className = 'slider-image';
    currentSlide = (n + slides.length) % slides.length;
    slides[currentSlide].className = 'slider-image showing';
}

/**
 * Add event onclick from rows
 */
nextImage.onclick = function () {
    nextSlide();
};
previousImage.onclick = function () {
    previousSlide();
}







