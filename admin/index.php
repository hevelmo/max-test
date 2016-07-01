<?php
/*
 * Copyright (C) 2015 100 Toneladas Administrador
 *
 */
include_once '../incorporate/db_connect.php';
include_once '../incorporate/functions.php';
//sec_session_start();

/*
if(login_check() != true) {
    header('Location: ../');
}

$userId = $_SESSION['user_id'];
$userId = intval($userId);
$userType = $_SESSION['user_type'];
$userType = intval($userType);
*/

?>

<!DOCTYPE html>
<html lang='en'>
    <head id=''>
        <meta http-equiv='cache-control' content='no-cache' />
        <meta http-equiv='Content-Type' content='text/html; charset=UTF-8'>
        <title>100 Toneladas Administrador</title>
        <meta name='viewport' content='width=device-width, maximum-scale=1.0, minimum-scale=1.0, initial-scale=1.0' />
        <meta name='Keywords' content='' >
        <meta name='Description' content='' >
        <meta name='title' content=''>
        <meta name='google-site-verification' content='' />
        <meta name='author' content='Medigraf'>
        <meta name='Copyright' content='Copyright 100 Toneladas Administrador 2015. All Rights Reserved.'>
        <link id="favicon" href='../img/favicon.ico' rel='shortcut icon' type='image/x-icon'/>
        <link rel='stylesheet' href='../css/bootstrap.min.css'  />
        <link rel='stylesheet' href='../css/main.css'  />
        <link rel="stylesheet" href="../css/styles_tables.css"  />
        <link rel="stylesheet" href="../css/alertify.core.css" />
        <link rel="stylesheet" href="../css/alertify.bootstrap.css" id="toggleCSS" />
        <link rel='stylesheet' href='../css/bootstrap-datetimepicker.min.css'  />
        <link rel="stylesheet" href="../lib/morris-chart/morris.css">
    </head>
    <body class='full-width'>
        <section id='container' class='hr-menu'>
            <header class='header fixed-top'>
                <div class='navbar-header'>
                <button type='button' class='navbar-toggle hr-toggle' data-toggle='collapse' data-target='.navbar-collapse'>
                        <span class='fa fa-bars'></span>
                    </button>
                    <div class='top-nav hr-top-nav'>
                        <ul class='nav pull-right top-menu'>
                            <li class='dropdown'>
                                <a data-toggle='dropdown' class='dropdown-toggle' href='#'>
                                    <img id='userAvatar' alt='' src='../img/admin_log.jpg'>
                                    <span class='username'>MAX APP</span>
                                    <b class='caret'></b>
                                </a>
                                <ul class='dropdown-menu extended logout'>
                                    <li>
                                        <a href='../logout/' class="js-salir tra-opt-logout">
                                            Cerrar Sessión
                                            <i class='fa fa-key js-salir'></i>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                    <div class='brand '>
                        <a href='' class='logo'>
                            <img src='../img/logo_100_220x35.png' alt=''>
                        </a>
                    </div>
                    <div class='horizontal-menu navbar-collapse collapse '>
                        <ul class='nav navbar-nav'>
                            <li class='active2 hover_resp'>
                                <a href='' class=''>Inicio</a>
                            </li>
                            <li class='dropdown hover_resp'>
                                <a data-toggle='dropdown' data-hover='dropdown' class='dropdown-toggle' href=''>
                                    Test
                                    <b class='caret'></b>
                                </a>
                                <ul class='dropdown-menu'>
                                    <li>
                                        <a href='#/test/api' class=''>
                                            API
                                        </a>
                                    </li>
                                    <li>
                                        <a href='#/test/remote' class=''>
                                            Remote
                                        </a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </header>
            <section id='main-content'>
                <section class='wrapper'>
                    <div class='row'>
                        <div class='col-sm-12 col-md-12 image_carrusel'>
                            <img src='' class='img-responsive' id='img-banner'>
                        </div>
                    </div>
                    <div id='hidden-inputs-session'>
                        <input type='hidden' id='session-usr-id' value="<?php echo htmlentities($userId); ?>">
                        <input type='hidden' id='session-usr-type' value="<?php echo htmlentities($userType); ?>">
                    </div>
                    <div id='hidden-inputs-temporal'></div>
                    <div class="wrapper_content_interactive" id='content_temporal_interactive'></div>
                </section>
            </section>
        </section>
        <script src='../lib/jquery-1.11.0.min.js'></script>
        <script src='../lib/jquery.gdb.min.js'></script>
        <script src='../lib/jquery-ui.js'></script>
        <script src='../lib/underscore-min.js'></script>
        <script src="../lib/handlebars.runtime.js"></script>
        <script src='../templates/min/templates.min.js'></script>
        <script src='../lib/moment.js'></script>
        <script src='../lib/accounting.min.js'></script>
        <script src='../lib/bootstrap-datetimepicker.min.js'></script>
        <script src='../lib/finch.min.js'></script>
        <script src='../lib/transitions.js'></script>
        <script src='../lib/collapse.js'></script>
        <script src='../lib/bootstrap.min.js'></script>
        <script src="../lib/alertify.min.js"></script>
        <script src="../lib/sha512.js"></script>
        <script src='../lib/hover-dropdown.js'></script>
        <!--Easy Pie Chart-->
        <script src="../lib/easypiechart/jquery.easypiechart.js"></script>
        <!--Sparkline Chart-->
        <script src="../lib/sparkline/jquery.sparkline.js"></script>
        <!--Morris Chart-->
        <script src="../lib/morris-chart/morris.js"></script>
        <script src="../lib/morris-chart/raphael-min.js"></script>
        <!--jQuery Flot Chart-->
        <script src="../lib/flot-chart/jquery.flot.js"></script>
        <script src="../lib/flot-chart/jquery.flot.tooltip.min.js"></script>
        <script src="../lib/flot-chart/jquery.flot.resize.js"></script>
        <script src="../lib/flot-chart/jquery.flot.pie.resize.js"></script>
        <script src="../lib/flot-chart/jquery.flot.animator.min.js"></script>
        <script src="../lib/flot-chart/jquery.flot.growraf.js"></script>
        <script type="text/javascript" src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCCqo-F2TnMAABZvfV5yTQLlWvUCJlJViU&amp;sensor=false"></script>

        <script src='../js/min/core.min.js'></script>
        <!--
        <script src='../js/objects.js'></script>
        <script src='../js/method.js'></script>
        <script src='../js/model.js'></script>
        <script src='../js/room.js'></script>
        <script src='../js/main.js'></script>
        -->
    </body>

</html>
