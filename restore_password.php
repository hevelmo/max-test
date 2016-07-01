<?php
include_once 'incorporate/db_connect.php';
include_once 'incorporate/functions.php';

sec_session_start();

$email = (isset($_GET['email'])) ? $_GET['email'] : '';
$email = trim($email);
$password = hash('sha512', '123456');

if($email === '' || new_user($email, $password) === false) {
  header('Location: index.php');
}

?>

<!DOCTYPE html>
<html lang="en">
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>100 Toneladas Administrador</title>
        <meta name="robots" content="noindex">
        <meta name='viewport' content='width=device-width, maximum-scale=1.0, minimum-scale=1.0, initial-scale=1.0' />
        <!-- <meta name="apple-mobile-web-app-capable" content="yes"> -->
        <meta name="Keywords" content="" >
        <meta name="Description" content="CRM" >
        <meta name="title" content="100 Toneladas Administrador">
        <meta name="google-site-verification" content="" /> 
        <meta name="author" content="Medigraf">
        <!--<link rel="apple-touch-icon" href="img/apple-touch-icon.png" />-->
        <meta http-equiv="cache-control" content="no-cache" />
        <meta name="Copyright" content="Copyright 100 Toneladas Administrador 2015. All Rights Reserved.">
        <link href='img/favicon.ico' rel='shortcut icon' type='image/x-icon'/>
        <link rel="stylesheet" href="css/bootstrap.min.css"  />
        <link rel="stylesheet" href="css/main.css"  />  
        <script>
          (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
          (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
          m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
          })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

         /* ga('create', 'UA-48423243-1', 'medigraf.com.mx');
          ga('send', 'pageview');*/

        </script>
    </head> 
    <body class="">
    <input type="hidden" id="idc-leng" >
    <div class="container">

      <!-- 
      <form class="form-signin" action="#" method="post">
      -->
      <form class="form-signin" action="process_restore_password.php" method="post">
        <h2 class="form-signin-heading">
          <img src='img/logo_100_220x35.png' alt=''>
        </h2>
        <div class="login-wrap">
            <div class="user-login-info">
                <input type="password" class="form-control" placeholder="Contraseña" name="password" id="password">
                <input type="password" class="form-control" placeholder="Confirmar Contraseña" name="password_confirm" id="password-confirm">
                <input type="hidden" name="email" id="email" value="<?php echo $email ?>">
            </div>
            <label class="checkbox">
                <span class="pull-right">
                  <!--<a data-toggle="modal" href="#myModal">Forgot Password?</a>-->
                </span>
            </label>
            <button class="btn btn-lg btn-login btn-block" style="text-transform:capitalize" 
                    type="submit" 
                    onclick="recoverpass_formhash(
                      this.form, 
                      this.form.password, 
                      this.form.password_confirm,
                      this.form.email);" >
              Restaurar
            </button>

        </div>
      </form>

    </div>

    <!-- Placed js at the end of the document so the pages load faster -->

    <!--Core js-->
    <script src="lib/jquery-1.11.0.min.js"></script>
    <script src="lib/bootstrap.min.js"></script>
    
    <script type="text/JavaScript" src="lib/sha512.js"></script> 
    <script type="text/JavaScript" src="lib/forms.js"></script>

  </body>
</html>
