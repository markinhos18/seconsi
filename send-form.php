<?php

    header('Content-Type: text/html; charset=UTF-8');
    ini_set('default_charset','UTF-8');


    require_once('PHPMailer/class.phpmailer.php');

    if (empty($_POST['razaosocial']) || empty($_POST['cnpj']) || empty($_POST['email']) || empty($_POST['telefone']) || empty($_POST['porte_empresa']) || empty($_POST['setor']) || empty($_POST['cidade']) || empty($_POST['mensagem']) ){
        
        print 'Preencha todos os campos obrigatórios!';
        
    } else { 

?>


<?php 


        $razaoSocial = $_POST['razaosocial'];
        $cnpj = $_POST['cnpj'];
        $email = $_POST['email'];
        $telefone = $_POST['telefone'];
        $porte_empresa = $_POST['porte_empresa'];
        $setor = $_POST['setor'];
        $cidade = $_POST['cidade'];
        $mensagem = $_POST['mensagem'];
        // $to 	= 'SOLICITAÇÃO DE PROPOSTA COM O SECONCI SP - EXAME ADMISSIONAL';
        $assunto = utf8_decode('PROPOSTA COM O SECONCI SP - EXAME ADMISSIONAL');  

        $mailer = new PHPMailer();
        $mailer->Encoding = 'base64';
        $mailer->IsSMTP();
        $mailer->SMTPDebug = 1;
        $mailer->Port = 587; //Indica a porta de conexão para a saída de e-mails
        $mailer->Host = "smtp.teste.com.br"; //smtp.dominio.com.br
        // $mailer->SMTPSecure = 'ssl';
        $mailer->SMTPAuth = true; //define se haverá ou não autenticação no SMTP
        $mailer->Username = 'teste@teste.com.br'; //Informe o e-mai o completo
        $mailer->Password = 'teste123'; //Senha da caixa postal
        $mailer->FromName = $razaoSocial; //Nome que será exibido para o destinatário
        $mailer->From = 'teste@teste.com.br'; //Obrigatório ser a mesma caixa postal indicada em "username"
        $mailer->AddAddress('teste@teste.com.br', $razaoSocial); //Destinatários
        $mailer->isHTML(true);
        $mailer->Subject = $assunto;
        $mailer->CharSet = 'UTF-8';
        $mailer->Body =  "Razão Social: $razaoSocial <br>";
        $mailer->Body .= "CNPJ: $cnpj <br>";
        $mailer->Body .= "E-mail: $email <br>";
        $mailer->Body .= "Telefone: $telefone <br>";
        $mailer->Body .= "Porte da empresa: $porte_empresa <br>";
        $mailer->Body .= "Setor: $setor <br>";
        $mailer->Body .= "Cidade: $cidade <br>";
        $mailer->Body .= "Mensagem: $mensagem <br>";
        
        // $mailer->AltBody    = "Para ver essa mensagem utilize um cliente com suporte HTML!"; // optional, comment out and test
        

        $mailer->Send();
        print "Mensagem enviada com sucesso!";
    } 

?>