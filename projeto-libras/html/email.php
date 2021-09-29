<?php
    /*$para = "portalibras@gmail.com";
    $email = $_POST['sugEmail'];
    $message = "<strong>Email:  </strong>".$email;
    $mensagem .= "<br>  <strong>Mensagem: </strong>"
    .$_POST['message'];

    //5 – agora inserimos as codificações corretas e  tudo mais.
    $headers =  "Content-Type:text/html; charset=UTF-8\n";
    $headers .= "From:  dominio.com.br<sistema@dominio.com.br>\n";
    //Vai ser //mostrado que  o email partiu deste email e seguido do nome
    $headers .= "X-Sender:  <sistema@dominio.com.br>\n";
    //email do servidor //que enviou
    $headers .= "X-Mailer: PHP  v".phpversion()."\n";
    $headers .= "X-IP:  ".$_SERVER['REMOTE_ADDR']."\n";
    $headers .= "Return-Path:  <sistema@dominio.com.br>\n";
    //caso a msg //seja respondida vai para  este email.
    $headers .= "MIME-Version: 1.0\n";

    mail($para, $assunto, $mensagem, $headers);  //função que faz o envio do email.
*/
    /* Código para postagem de comentários, deu tudo errado...
    
    if($_POST['Submit']){
    $Comment = $_POST['content'];

    #Comentários velhos
    $old = fopen("comments.txt", "r+t");
    $old_comments = fread($old, 1024);

    #Delete everything, write down new and old comments
    $write = fopen("comments.txt", "w+");
    $string = "<br>".$Comment."<br>\n".$old_comments;
    fwrite($write, $string);
    fclose($write);
    fclose($old);
}

     #Read comments
    $read = fopen("comments.txt", "r+t");
    echo "<br><br>Comments<hr>".fread($read, 1024);
    fclose($read);*/

    /*  Código para sugestão via email
    
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
    }*/

?>