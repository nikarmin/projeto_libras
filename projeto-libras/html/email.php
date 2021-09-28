<?php
    
    if(isset($_POST(['sugEmail'])) && !empty($_POST(['sugEmail']))){
        $email = addslashes($_POST(['sugEmail']));
        $mensagem = addslashes($_POST(['ftext']));
    
        $to = "portalibras@gmail.com";
        $subject = "Contato - Portal Libras";
        $body = "Email: ".$email."\n".
                "Mensagem: ".$mensagem;
        $header = "From: nikafworks@gmail.com".
                    "\r\n"."Reply-To:".$email;"\r\n".
                    "x=Mailer:PHP/".phpversion();
        
        if(mail($to,$subject,$body,$header)){
            echo("Email enviado com sucesso!");
        }
        else{
            echo("Email não pode ser enviado!");
        }
    }

?>