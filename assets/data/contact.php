<?php

$email_address = $_POST['email'];
$message = $_POST['message'];
$email_message = "Email: $email_address \n\n"."Сообщение: $message";
$mail_to = "info@yorb.ru"; 
$subject = "Сообщение через форму обратной связи yorb.ru"; 
$headers = "MIME-Version: 1.0\r\n";
$headers .= "Content-type: text/html; charset=utf-8\r\n";
$headers .= "From: info@yorb.ru\n";
$headers .= "Reply-To: $email_address";

mail($mail_to, $subject, $email_message, $headers);
header("location: https://yorb.ru");

?>