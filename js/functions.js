'use strict';

const sliderSpace = document.querySelector('.slider');
const productsSpace = document.querySelector('.products');
let product = '';
let slide = '';
const productsUrl = "../api/products.json";
const slideUrl = "/api/slides.json";
const buttonLoad = document.querySelector('.load__button');

window.onload = function () {
    getDataSlider();
    getDataProducts();
}

/**
 * get slider images by map
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
 * get products data by map
 * include campaign images with position (if)
 */
function getDataProducts() {
    fetch(productsUrl)
        .then(response => response.json())
        .then(data => {
            product = data;

            data.data.map((item, index) => {
                if (index === 4) {
                    productsSpace.innerHTML +=
                        `<img class="product-campaign1" key="4" id="image${item.id}" src="../resources/cta/cta1.jpg">`
                }
                if (index === 7) {
                    productsSpace.innerHTML +=
                        `<img class="product-campaign2" key="7" id="image${item.id}" src="../resources/cta/cta2.jpg">`
                }
                productsSpace.innerHTML += generateProductsHTML(index, item);
            });

            /*const buy = document.querySelectorAll('.product-buy');
            for (buy)
            buy.addEventListener('click', addProduct);

            function addProduct(){
                console.log('añadir');
            }*/
            for (let buy of document.querySelectorAll('.product-buy')) {
                buy.addEventListener('click', addProduct);
            }
             function addProduct(){
                console.log('añadir');
            }

        });
}



/**
 * create html products section
 */
function generateProductsHTML(index, item) {
    return `<div class="product-container" key=${index}>
                      <img class="product-image" id="image${item.id}" src="${item.image}">
                      <div class="productInfo-container">
                          <div class="product-name">${item.name}</div>
                          <div class="product-price">${item.price}</div>
                      </div>
                      <div class="product-buy" id="">${item.button_text}</div> 
                  </div>`
}


/**
 * create html slider section
 * add class "showing" first slide
 */
function generateSlidesHTML(index, item) {
    return `<img class="slider-image ${index === 0 ? 'showing' : ''}" src=${item.bg_image} id="slide${item.id}">`
}


/**
 * repaint infinitely products section
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

for (let i = 0; i < manualControls.length; i++) {
    manualControls[i].style.display = 'inline-block';
}

function nextSlide() {
    goToSlide(currentSlide + 1);
}

function previousSlide() {
    goToSlide(currentSlide - 1);
}

function goToSlide(n) {
    slides[currentSlide].className = 'slider-image';
    currentSlide = (n + slides.length) % slides.length;
    slides[currentSlide].className = 'slider-image showing';
}

/**
 * get event onclick from rows
 */
nextImage.onclick = function () {
    nextSlide();
};
previousImage.onclick = function () {
    previousSlide();
}


/*SHOP BAG SECTION*/






