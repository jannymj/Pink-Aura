<?php
include 'config.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nombre = $_POST['nombre'];
    $email = $_POST['Correo Electronico'];
    $password = $_POST['Contrasena'];
$passwordbash= password_bash($password,PASSWORD_BCRYPT);

$consultaid= SELECT nombre
            FROM registro
            WHERE nombre='$nombre';
$consultaid=mysli_query($config, $consultaid);
$consultaid=mysli_fetch_array($consultaid);
if (!$consultaid){
$sql="INSERT INTO registro values('nombre','correo electronico','contrasena')";
if(mysqli_query)($config, $sql)

}

    if ($conn->query($sql) === TRUE) {
        echo "Usuario registrado exitosamente";
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }

    $conn->close();
}

?>
