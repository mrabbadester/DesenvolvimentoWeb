<!DOCTYPE html>
<html lang="pt-br">
    <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <meta name="description" content="" />
        <meta name="author" content="" />
        <title>Volks Retrô</title>
        <link rel="icon" type="image/x-icon" href="assets/favicon.ico" />
        <!-- Bootstrap icons-->
        <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css" rel="stylesheet" />
        <!-- Google fonts-->
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Newsreader:ital,wght@0,600;1,600&amp;display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Mulish:ital,wght@0,300;0,500;0,600;0,700;1,300;1,500;1,600;1,700&amp;display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Kanit:ital,wght@0,400;1,400&amp;display=swap" rel="stylesheet" />
        <!-- Core theme CSS (includes Bootstrap)-->
        <link href="css/styles.css" rel="stylesheet" />
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css">
    </head>
    <body id="page-top">
        <!-- Navigation-->
        <nav class="navbar navbar-expand-lg navbar-light fixed-top shadow-sm" id="mainNav">
            <div class="container px-5">
                <a class="navbar-brand fw-bold" >Volks Retrô</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    Menu
                    <i class="bi-list"></i>
                </button>
                <div class="collapse navbar-collapse" id="navbarResponsive">
                    <ul class="navbar-nav ms-auto me-4 my-3 my-lg-0">
                        <li class="nav-item"><a class="nav-link me-lg-3" href="index.html">Home</a></li>
                        <li class="nav-item"><a class="nav-link me-lg-3" href="sobre.html">Sobre</a></li>
                        <li class="nav-item"><a class="nav-link me-lg-3" href="contato.html">contato</a></li>
                    </ul>
                    <div class="wrap">
                        <div class="search">
                           <input type="text" class="searchTerm" placeholder="Procurar">
                           <button type="submit" class="searchButton">
                             <i class="fa fa-search"></i>
                          </button>
                        </div>
                     </div>
                </div>
            </div>
        </nav>
        <!-- Mashead header-->
        
        <section>
        <div class="container"algin="center">
            <div class="row" >
              <div class="col-md-6 col-md-offset-1">
                <div class="well well-sm">
                  <form class="form-horizontal" action="mail.php" method="post">
                  <fieldset>
                    <legend class="text-center">Contato</legend>
            
                    <!-- Name input-->
                    <div class="form-group">
                      <label class="col-md-3 control-label" for="name">Seu nome:</label>
                      <div class="col-md-9">
                        <input name="name" placeholder="Seu nome completos" onblur="this.placeholder = 'Seu nome completos'" class="common-input mb-20 form-control" required="" type="text">
                      </div>
                    </div>
            
                    <!-- Email input-->
                    <div class="form-group">
                      <label class="col-md-3 control-label" for="email">E-mail:</label>
                      <div class="col-md-9">
                        <input name="email" placeholder="Seu e-mail" pattern="[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{1,63}$" onblur="this.placeholder = 'Seu e-mail'" class="common-input mb-20 form-control" required="" type="email">
                      </div>
                    </div>

                    <!-- Mensagem telefone -->
                    <div class="form-group">
                      <label class="col-md-3 control-label" for="telefone">Telefone:</label>
                      <div class="col-md-9">
                      <input name="telefone" placeholder="Seu telefone" onblur="this.placeholder = 'Seu telefone'" class="common-input mb-20 form-control" required="" type="telefone">
                      </div>
                    </div>

                     <!-- Mensagem assunto -->
                     <div class="form-group">
                      <label class="col-md-3 control-label" for="assunto">Assunto:</label>
                      <div class="col-md-9">
                      <input name="assunto" placeholder="Seu assunto" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Seu assunto'" class="common-input mb-20 form-control" required="" type="text">
                      </div>
                    </div>
                      
                    <!-- Mensagem body -->
                    <div class="form-group">
                      <label class="col-md-3 control-label" for="message">Mensagem</label>
                      <div class="col-md-9">
                        <textarea class="common-textarea form-control" name="message" placeholder="Mensagem de texto" onblur="this.placeholder = 'Mensagem de texto'" required=""></textarea>		
                      </div>
                    </div>
            
                    <!-- Form actions -->
                    <div class="form-group">
                      <div class="col-md-12 text-right">
                        <button class="genric-btn primary circle" style="float: right;">Enviar</button>	
                      </div>
                    </div>
                  </fieldset>
               
               <?php
    $to = 'antos2lite@gmail.com';
    $name= $_POST["name"];
    $email= $_POST["email"];
    $text= $_POST["message"];
    $telefone= $_POST["telefone"];
    $assunto= $_POST["assunto"];


    $headers = 'MIME-Version: 1.0' . "\r\n";
    $headers .= "From: " . $email . "\r\n"; // Sender's E-mail
    $headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";

    $message ='<table style="width:100%">
      <tr><td>Seu nome completos: '.$name.'</td></tr>
      <tr><td>E-mail: '.$email.'</td></tr>
      <tr><td>Telefone: '.$telefone.'</td></tr>
      <tr><td>Mensagem: '.$text.'</td></tr>
      <tr><td>Assunto: '.$assunto.'</td></tr>

        
    </table>';

    if (@mail($to, $email, $message, $headers))
    {
        echo 'A mensagem foi enviada.';
    }else{
        echo 'A mensagem não foi enviada.';
    }

?>
                  </form>
                </div>
              </div>
            </div>
        </div>
    </section>
        <!-- Footer-->
        <footer >
            <div class="container">
                <div class="text-white-50 small">
                    <div class="mb-2"><b>Volkos Retrô &copy; Your Website 2021. All Rights Reserved.</b></div>
                </div>
            </div>
        </footer>
       
        <!-- Bootstrap core JS-->
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/js/bootstrap.bundle.min.js"></script>
        <!-- Core theme JS-->
        <script src="js/scripts.js"></script>
        <script src="https://cdn.startbootstrap.com/sb-forms-latest.js"></script>
    </body>
</html>