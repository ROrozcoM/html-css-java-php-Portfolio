<?php

// Incluir la clase PHPMailer
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\STMP;
use PHPMailer\PHPMailer\Exception;

require 'PHPMailer/Exception.php';
require 'PHPMailer/PHPMailer.php';
require 'PHPMailer/SMTP.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Recopilar los datos del formulario
    $nombre = $_POST['nombre'];
    $telefono = $_POST['telefono'];
    $email = $_POST['email'];
    $asunto = $_POST['asunto'];
    $mensaje = $_POST['mensaje'];

    // Destinatario del correo
    $destinatario = "rafozco@gmail.com"; // Cambia esto con tu dirección de correo electrónico

    // Contenido del correo
    $contenido = "Nombre: $nombre\n";
    $contenido .= "Teléfono: $telefono\n";
    $contenido .= "Correo electrónico: $email\n\n";
    $contenido .= "Mensaje:\n$mensaje\n";

    // Cabeceras del correo
    $cabeceras = "From: $nombre <$email>";

    // Enviar el correo electrónico
    if (mail($destinatario, $asunto, $contenido, $cabeceras)) {
        echo "<script>alert('Tu mensaje se ha enviado correctamente. ¡Gracias por ponerte en contacto con nosotros!');</script>";
    } else {
        echo "<script>alert('Hubo un error al enviar tu mensaje. Por favor, inténtalo de nuevo más tarde.');</script>";
    }
}

?>
