<?php
$servidor = "localhost";
$usuario = "root";
$contrasenha = "";
$BD = "pinkaura";

// Habilitar visualización de errores
error_reporting(E_ALL);
ini_set('display_errors', 1);

// Crear conexión
$conn = new mysqli($servidor, $usuario, $contrasenha, $BD);

// Verificar conexión
if ($conn->connect_error) {
    die("Conexión fallida: " . $conn->connect_error);
} else {
    echo "Conexión exitosa";
}

// Cerrar conexión
$conn->close();
?>
