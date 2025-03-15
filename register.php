<?php
include 'db.php'; // Incluir el archivo de conexión a la base de datos

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    if (!empty($_POST['nombre_usuario']) && !empty($_POST['correo']) && !empty($_POST['clave'])) {
        $nombre_usuario = $_POST['nombre_usuario'];
        $correo = $_POST['correo'];
        $clave = password_hash($_POST['clave'], PASSWORD_DEFAULT); // Encriptar la contraseña

        if ($conn) {
            // Verificar si el correo ya está registrado
            $consulta_check = $conn->prepare("SELECT correo FROM usuarios WHERE correo = ?");
            $consulta_check->bind_param("s", $correo);
            $consulta_check->execute();
            $resultado_check = $consulta_check->get_result();

            if ($resultado_check->num_rows > 0) {
                echo "Error: El correo ya está registrado. <a href='register.html'>Intenta con otro</a>";
            } else {
                // Insertar el nuevo registro
                $consulta = $conn->prepare("INSERT INTO usuarios (nombre_usuario, correo, clave) VALUES (?, ?, ?)");
                $consulta->bind_param("sss", $nombre_usuario, $correo, $clave);

                if ($consulta->execute()) {
                    echo "Usuario registrado con éxito. <a href='login.html'>Iniciar sesión</a>";
                } else {
                    echo "Error al registrar el usuario.";
                }

                $consulta->close();
            }

            $consulta_check->close();
            $conn->close();
        } else {
            die("Error en la conexión a la base de datos.");
        }
    } else {
        echo "Error: Los campos no se enviaron correctamente o están vacíos.";
    }
} else {
    echo "Método no permitido.";
}
?>
