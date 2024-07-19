<?php
$servidor = "localhost";
$usuario = "root";
$contrasenha = "";
$BD = "pinkaura";

error_reporting(E_ALL);
ini_set('display_errors', 1);

$conn = new mysqli($servidor, $usuario, $contrasenha, $BD);

if ($conn->connect_error) {
    die("Conexión fallida: " . $conn->connect_error);
} else {
    echo "Conexión exitosa";
}

$conn->close();
?>
