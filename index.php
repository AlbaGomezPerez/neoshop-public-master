<?php
include "lib/config.php";

include "templates/header.php";
?>
<header class="header">
    <div class="header__logo">
        <img src="./resources/logo.png" alt="Neoshop" title="Neoshop" />
    </div><!-- .header__logo -->

    <div class="header__shop shop">
        <a href="shop.php" class="shop__button">
            <span class="shop__icon"><i class="fas fa-shopping-cart"></i></i></span>
            <span class="shop__text">Carrito</span>
        </a><!-- .shop__button -->
        <a href="#" class="shop__button">
            <span class="shop__icon"><i class="fas fa-user"></i></span>
            <span class="shop__text">Mi perfil</span>
        </a><!-- .shop__button -->
        <a href="#" class="shop__button">
            <span class="shop__icon"><i class="fas fa-box-open"></i></i></span>
            <span class="shop__text">Mis pedidos</span>
        </a><!-- .shop__button -->
    </div><!-- .header__shop -->
</header>

<div class="wrapper">
    <div class="control-container">
        <!--<a href="#" class="control-prev"><</a>
        <a href="#" class="control-next">></a>-->
       <button class="control-button control-button1"></button>
        <button class="control-button control-button2"></button>
       <button class="control-button control-button3"></button>
       <button class="control-button control-button4"></button>
    </div>

    <div class="container">
        <div class="slider">
            <!-- TODO: Desarrollar el marcado para el slider -->
        </div><!-- .slider -->
        <div class="control-buttons">
            <button class="controls" id="previous">&lt;</button>
            <button class="controls" id="pause">&#10074;&#10074;</button>
            <button class="controls" id="next">&gt;</button>
        </div>
    </div>
    <p class="products-title">PRODUCTOS</p>
    <div class="products">
    </div>
    <div class="load">
        <!-- TODO: BONUS. Desarrollar la funcionalidad para que el botón cargue más productos -->
        <span class="load__button button">Cargar más productos</span>
    </div><!-- .load -->
</div><!-- .wrapper -->
<footer class="footer">
    <p><img src="./resources/logo.png" alt="Neoshop" title="Neoshop" /></p>
</footer>
<?php
include "templates/footer.php";
