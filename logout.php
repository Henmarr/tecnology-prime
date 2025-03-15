<?php
session_start();

// Destruir todas las variables de sesión
session_unset();

// Destruir la sesión
session_destroy();

// Redirigir al usuario de vuelta a la página de inicio
header("Location: /PaginaWebTecnology/index.html");
exit;
?>
