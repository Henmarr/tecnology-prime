<?php
include 'db.php'; // Conexión con la base de datos
session_start();

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $correo = $_POST['correo'];
    $clave = $_POST['clave'];

    if ($conn) {
        // Buscar el usuario en la base de datos
        $consulta = $conn->prepare("SELECT * FROM usuarios WHERE correo = ?");
        $consulta->bind_param("s", $correo);
        $consulta->execute();
        $resultado = $consulta->get_result();

        if ($resultado->num_rows > 0) {
            $usuario = $resultado->fetch_assoc();
            // Validar la clave
            if (password_verify($clave, $usuario['clave'])) {
                // Iniciar sesión
                $_SESSION['usuario'] = $usuario['nombre_usuario'];
                $_SESSION['correo'] = $usuario['correo'];

                // Redirigir automáticamente a index.html
                header("Location:/PaginaWebTecnology/index.html");
                exit;
            } else {
                echo "Contraseña incorrecta.";
            }
        } else {
            echo "Usuario no encontrado.";
        }

        $consulta->close();
    } else {
        die("Error en la conexión a la base de datos.");
    }

    $conn->close();
}
?>
