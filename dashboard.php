<?php
session_start();

// Verificar si la sesión está iniciada
if (!isset($_SESSION['usuario'])) {
    header("Location: /PaginaWebTecnology/index.html");
    exit;
}
?>

<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Dashboard</title>
</head>
<body>
    <h1>¡Bienvenido, <?php echo htmlspecialchars($_SESSION['usuario']); ?>!</h1>
    <p>Has iniciado sesión correctamente.</p>
    
    <!-- Botón para redirigir a la página web -->
    <form action="/PaginaWebTecnology/index.html" method="get">
        <button type="submit">Ir a la Página Web</button>
    </form>

    <!-- Botón para cerrar sesión -->
    <form action="logout.php" method="POST" style="margin-top: 1rem;">
        <button type="submit">Cerrar sesión</button>
    </form>
</body>
</html>
