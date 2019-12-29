<?php
include "lib/config.php";

include "templates/header.php";
?>
    <header class="header">
        <div class="header__logo">
            <img src="./resources/logo.png" alt="Neoshop" title="Neoshop"/>
        </div>

        <div class="header__shop shop">
            <a href="shop.php" class="shop__button">
                <span class="shop__icon"><i class="fas fa-shopping-cart"></i></i></span>
                <span class="shop__text">Carrito</span>
            </a>
            <a href="#" class="shop__button">
                <span class="shop__icon"><i class="fas fa-user"></i></span>
                <span class="shop__text">Mi perfil</span>
            </a>
            <a href="#" class="shop__button">
                <span class="shop__icon"><i class="fas fa-box-open"></i></i></span>
                <span class="shop__text">Mis pedidos</span>
            </a>
        </div>
    </header>

    <div class="wrapper">
        <div class="container">
            <div class="slider">
            </div>
            <div class="control-buttons">
                <button class="controls" id="previous">&lt;</button>
                <button class="controls" id="next">&gt;</button>
            </div>
        </div>
        <p class="products-title">PRODUCTOS</p>
        <div class="products">
        </div>
        <div class="load">
            <span class="load__button button">Cargar más productos</span>
        </div>
    </div>
    <footer class="footer">
        <p><img src="./resources/logo.png" alt="Neoshop" title="Neoshop"/></p>
    </footer>
    <script src="/js/functions.js"></script>
<?php
include "templates/footer.php";
