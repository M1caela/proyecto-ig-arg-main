<?
	$sendto  = 'micaelaacalvo@gmail.com'; 
    $subject = "Formulario de contacto"; 

    // contenido del mensaje
	// Arma el cuerpo del mail en la variable corps con los datos del formulario
	$corps="Nombre: ".$_REQUEST['nombre']."\n".
	"Email: ".$_REQUEST['email']."\n".
	"Comentarios: ".$_REQUEST['comentarios']."\n"."\n";

    
	$From = "From: ".$_REQUEST['nombre']." <".$_REQUEST['email'].">\n";
	$From .= "Reply-To: ".$_REQUEST['nombre']." <".$_REQUEST['email'].">\n";

    // enviar el mail 
	@mail($sendto,$subject,$corps,$From);

    // Comando para redirigir al usuario a otra página
	header("Location: contacto.html");
?>

<?php
// if ($_SERVER["REQUEST_METHOD"] == "POST") {
//     $nombre = htmlspecialchars($_POST["name"]);
//     $email = filter_var($_POST["email"], FILTER_SANITIZE_EMAIL);
//     $asunto = htmlspecialchars($_POST["subject"]);
//     $mensaje = htmlspecialchars($_POST["message"]);

//     $to = "micaelaacalvo@gmail.com";
//     $subject = "Formulario de contacto: $asunto";
//     $body = "Nombre: $nombre\n";
//     $body .= "Email: $email\n\n";
//     $body .= "Mensaje:\n$mensaje";

//     $headers = "From: $nombre <$email>\r\n";
//     $headers .= "Reply-To: $email\r\n";

//     if (mail($to, $subject, $body, $headers)) {
//         echo "Mensaje enviado correctamente.";
//     } else {
//         echo "Hubo un error al enviar el mensaje.";
//     }
// } else {
//     echo "Acceso no permitido.";
// }
?>

