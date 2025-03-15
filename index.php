<?php
session_start();
$isAuthenticated = isset($_SESSION['user']);
?>
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Technology Prime - Electrónica de Calidad</title>
    <link rel="stylesheet" href="style.css">
    <script src="assets/script.js" defer></script>
</head>
<body>
    <header>
        <div class="logo">
            <h1>Technology Prime</h1>
        </div>
        <nav>
            <ul>
                <li><a href="#hero">Inicio</a></li>
                <li><a href="#productos">Productos</a></li>
                <li><a href="#categorias">Categorías</a></li>
                <li><a href="#carrito">Carrito (<span id="cart-count">0</span>)</a></li>
                <?php if ($isAuthenticated): ?>
                    <li><a href="logout.php">Cerrar Sesión</a></li>
                <?php else: ?>
                    <li><a href="login.php">Iniciar Sesión</a> | <a href="register.php">Registrarse</a></li>
                <?php endif; ?>
            </ul>
        </nav>
    </header>

    <main>
        <section id="hero">
            <h2>¡Bienvenido a Technology Prime!</h2>
            <p>Encuentra la tecnología que necesitas a precios inmejorables.</p>
            <a href="#productos" class="btn">Ver Productos</a>
        </section>

        <section id="productos">
            <h2>Nuestros Productos</h2>
            <div class="productos-container" id="productos-lista">
                <div class="producto" data-categoria="computadoras">
                    <h3>Computadora Gaming</h3>
                    <img src="imagenes/PC.png" class="imagen5" alt="Computadora Gaming" />
                    <p>Rendimiento superior para juegos exigentes. Procesador Intel i7, 16GB RAM, 1TB SSD.</p>
                    <span class="precio">S/ 1200</span>
                    <button onclick="addToCart('Computadora Gaming', 1200)">Agregar al Carrito</button>
                </div>
            </div>
        </section>
    </main>

    <footer>
        <p>&copy; 2024 Technology Prime. Todos los derechos reservados.</p>
    </footer>
</body>
</html>
