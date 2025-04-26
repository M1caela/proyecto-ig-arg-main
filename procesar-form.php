<?
	$sendto  = 'micaelaacalvo@gmail.com'; 
    $subject = "Formulario de contacto"; 

    // contenido del mensaje
	// Arma el cuerpo del mail en la variable corps con los datos del formulario
	$corps="Nombre: ".$_REQUEST['nombre']."\n".
	"Email: ".$_REQUEST['email']."\n".
	"Comentarios: ".$_REQUEST['comentarios']."\n"."\n";

    // datos del emisor
	$From = "From: ".$_REQUEST['nombre']." <".$_REQUEST['email'].">\n";
	$From .= "Reply-To: ".$_REQUEST['nombre']." <".$_REQUEST['email'].">\n";

    // enviar el mail 
	@mail($sendto,$subject,$corps,$From);

    // Comando para redirigir al usuario a otra página
	header("Location: contacto.html");
?>