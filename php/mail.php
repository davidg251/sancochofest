<?php

if(isset($_POST['nombre']) && isset($_POST['correo']) && isset($_POST['mensaje']) )
{

$nombre =  $_POST['nombre'];
$correo =  $_POST['correo'];
$mensaje = $_POST['mensaje'];
$para   = 'david@sancochofest.co';



$cabeceras = 'From:'. $correo . "\r\n" .
    'Reply-To: david@sancochofest.co' . "\r\n" .
    'X-Mailer: PHP/' . phpversion();


mail($para, $nombre, $mensaje, $cabeceras);
}

?>
