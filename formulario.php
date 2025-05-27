<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nombre = htmlspecialchars($_POST["nombre"]);
    $correo = filter_var($_POST["correo"], FILTER_SANITIZE_EMAIL);
    $mensaje = htmlspecialchars($_POST["mensaje"]);

    $destinatario = "tucorreo@ejemplo.com"; // Cambia esto por tu correo
    $asunto = "Nuevo mensaje de contacto de $nombre";
    $contenido = "Nombre: $nombre\nCorreo: $correo\n\nMensaje:\n$mensaje";
    $headers = "From: $correo";

    if (mail($destinatario, $asunto, $contenido, $headers)) {
        echo "Mensaje enviado correctamente.";
    } else {
        echo "Hubo un error al enviar el mensaje.";
    }
}
?>
