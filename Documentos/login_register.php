<?php
$servername = "localhost";
$email = "Correo Electronico";
$password = "Contraseña";
$dbname = "pinkaura";

$conn = new mysqli($servername, $email, $password, $dbname);

if ($conn->connect_error) {
    die("Conexión fallida: " . $conn->connect_error);
}
echo "Conexión exitosa";

$conn->close();
?>
<?php
$servername = "localhost";
$email = "Correo Electronico";
$password = "Contraseña";
$dbname = "pinkaura";

try {
    $conn = new PDO("mysql:host=$servername;dbname=$dbname", $email, $password);
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    echo "Conexión exitosa"; 
} catch(PDOException $e) {
    echo "Conexión fallida: " . $e->getMessage();
}

$conn = null;
?>
