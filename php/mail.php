<?php

if(isset($_POST['nombre']) && isset($_POST['correo']) && isset($_POST['mensaje']) )
{

$nombre =  $_POST['nombre'];
$correo =  $_POST['correo'];
$mensaje = $_POST['mensaje'];
$para   = 'info@sancochofest.co';


/**/
$cabecera = 'From:'. $correo . "\r\n" .
    'Reply-To: ' .$correo. "\r\n" .
    'X-Mailer: PHP/' . phpversion();


mail($para, $nombre, $mensaje, $cabecera);
}

?>
