<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

require 'PHPMailer/Exception.php';
require 'PHPMailer/PHPMailer.php';
require 'PHPMailer/SMTP.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["nombre"];
    $phone = $_POST["telefono"];
    $email = $_POST["email"];
    $issue = $_POST["asunto"];
    $message = $_POST["mensaje"];

    $mail = new PHPMailer(true);

    try {
        //Server settings
        $mail->SMTPDebug = 0;                      //Enable verbose debug output
        $mail->isSMTP();                                            //Send using SMTP
        $mail->Host       = 'smtp.gmail.com';                    //Set the SMTP server to send through
        $mail->SMTPAuth   = true;                                   //Enable SMTP authentication
        $mail->Username   = 'rafozco@gmail.com';                     //SMTP username
        $mail->Password   = '1pericles';                               //SMTP password
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;         //Enable TLS encryption; `PHPMailer::ENCRYPTION_SMTPS` also accepted
        $mail->Port       = 587;                                    //TCP port to connect to

        //Recipients
        $mail->setFrom('rafozco@gmail.com', 'Tu nombre');
        $mail->addAddress('rafozco@example.com');     //Añade aquí tu dirección de correo electrónico

        //Content
        $mail->isHTML(true);                                  //Set email format to HTML
        $mail->Subject = $issue;
        $mail->Body    = "Nombre: $name <br> Teléfono: $phone <br> Email: $email <br> Mensaje: $message";

        $mail->send();
        header("Location: contacto-confirmacion.html");
        exit;
    } catch (Exception $e) {
        echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
    }
}
?>
