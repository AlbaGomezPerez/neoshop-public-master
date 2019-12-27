'use strict';

const sliderSpace = document.querySelector('.slider');
const productsSpace = document.querySelector('.products');
let product = '';
let slide = '';
const productsUrl = "../api/products.json";
const slideUrl = "/api/slides.json";
const buttonLoad = document.querySelector('.load__button');
const slider1 = document.querySelector('.control-button1');
const slider2 = document.querySelector('.control-button2');
const slider3 = document.querySelector('.control-button3');
const slider4 = document.querySelector('.control-button4');

window.onload = function () {
    getDataSlider();
    getDataProducts();
}

function getDataSlider() {
    fetch(slideUrl)
        .then(response => response.json())
        .then(data => {
            slide = data;

            data.data.map((item, index) => {
                sliderSpace.innerHTML += generateSlidesHTML(index, item);
            });
            slides = document.querySelectorAll('.slider .slider-image');
            getDataProducts();
        });
}

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
        });

}

    function generateProductsHTML(index, item) {
        return `<div class="product-container" key=${index}>
                      <img class="product-image" id="image${item.id}" src="${item.image}">
                      <div class="productInfo-container">
                          <div class="product-name">${item.name}</div>
                          <div class="product-price">${item.price}</div>
                      </div>
                      <div class="product-buy" id="">${item.button_text}</div> 
                  </div>`}


    function generateSlidesHTML(index, item) {
    return `
                    <img class="slider-image" src=${item.bg_image} id="slide${item.id}"> 
            
`
}

function loadMoreProducts(){
    getDataProducts()
    productsSpace.innerHTML += generateProductsHTML();
}


buttonLoad.addEventListener('click', loadMoreProducts);

let controls = document.querySelectorAll('.controls');
for(var i=0; i<controls.length; i++){
    controls[i].style.display = 'inline-block';
}

let slides = document.querySelectorAll('.slider .slider-image');
let currentSlide = 0;
let slideInterval = setInterval(nextSlide,2000);

function nextSlide(){
    goToSlide(currentSlide+1);
}

function previousSlide(){
    goToSlide(currentSlide-1);
}

function goToSlide(n){
    slides[currentSlide].className = 'slider-image';
    currentSlide = (n+slides.length)%slides.length;
    slides[currentSlide].className = 'slider-image showing';
}


let playing = true;
let pauseButton = document.getElementById('pause');

function pauseSlideshow(){
    pauseButton.innerHTML = '&#9658;'; // play character
    playing = false;
    clearInterval(slideInterval);
}

function playSlideshow(){
    pauseButton.innerHTML = '&#10074;&#10074;'; // pause character
    playing = true;
    slideInterval = setInterval(nextSlide,2000);
}

pauseButton.onclick = function(){
    if(playing){ pauseSlideshow(); }
    else{ playSlideshow(); }
};

let next = document.getElementById('next');
let previous = document.getElementById('previous');

next.onclick = function(){
    pauseSlideshow();
    nextSlide();
};
previous.onclick = function() {
    pauseSlideshow();
    previousSlide();
}
