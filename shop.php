<?php
include "lib/config.php";
include "templates/header.php";
?>

    <header class="header">
        <div class="header__logo">
            <a href="index.php"><img src="./resources/logo.png" alt="Neoshop" title="Neoshop"/></a>
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

    <main>
        <div class="shop-container">
            <h1 class="shop-title">MI CARRITO</h1>
            <div class="products-card-container">
                <p>Imagen</p>
                <p>Nombre</p>
                <p>Precio</p>
            </div>
            <div class="info-shop-container">
            </div>

        </div>
    </main>


    <footer class="footer">
        <p><img src="./resources/logo.png" alt="Neoshop" title="Neoshop"/></p>
    </footer>


    <script src="/js/shoppingCart.js"></script>

<?php
include "templates/footer.php";

