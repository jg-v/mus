<?php
$URLSource=$_SERVER["HTTP_REFERER"];
if($URLSource != "https://jgvcp.000webhostapp.com/Coordf.htm" && $URLSource != "https://jgvcp.000webhostapp.com/Coorda.htm" &&
   $URLSource != "http://jgvcp.000webhostapp.com/Coordf.htm" && $URLSource != "http://jgvcp.000webhostapp.com/Coorda.htm"){
	exit(1);
}

$subject=$_POST["subject"];
$mail_from=$_POST["mail_from"];
$customer_mail=$_POST["customer_mail"];
$comment=$_POST["message"];
$lang=$_POST["lang"];
$message = "Message du site jgvc\n\n";
$message .= "Nom: " . $mail_from . "\n";
$message .= "Adresse couriel: " . $customer_mail . "\n\n";
$message .= "Message:\n\n" . $comment . "\n";

$tomail ='jgvailles@gmail.com';

//$headers = "MIME-Version: 1.0" . "\r\n";
//$headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";

$send_contact=mail($tomail,$subject,$message);
if($send_contact){
	if($lang == "F"){
		header("Location: http://jgvcp.000webhostapp.com/ReponseCommentairef.htm?res=".$send_contact);
		//echo "Votre message a été envoyé avec succès (ou échec)";
	}
	else{
		header("Location: http://jgvcp.000webhostapp.com/ReponseCommentairea.htm?res=".$send_contact);
		//echo "Your message has been sent successfully";
	}
}
?>