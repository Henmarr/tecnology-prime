<?php
// Configuración de la base de datos
define('DB_SERVER', 'localhost');
define('DB_USERNAME', 'root');
define('DB_PASSWORD', '');
define('DB_NAME', 'mi_proyecto_db');

// Crear conexión
$conn = new mysqli(DB_SERVER, DB_USERNAME, DB_PASSWORD, DB_NAME);

// Comprobar la conexión
if ($conn->connect_error) {
    // Mensaje claro y detención del script
    die("Error de conexión: " . $conn->connect_error);
}
?>
