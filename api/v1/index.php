<?php

include_once '../../PHPExcel/ExcelMaker2.php';
include_once '../../incorporate/db_connect.php';
include_once '../../incorporate/functions.php';
include_once '../../incorporate/queryintojson.php';
include_once '../Mandrill.php';

sec_session_start_api();

/**
 * 
 * [Initial V 38.0]
 * 
 */

require '../Slim/Slim.php';
\Slim\Slim::registerAutoloader();
$app = new \Slim\Slim(array(
    'mode' => 'development',
    'cookies.httponly' => true
));

//Only invoked if mode is "production"
$app->configureMode('production', function() use ($app) {
    $app->config(array(
        'log.enable' => true,
        'debug' => false
    ));
});

//Only invoked if mode is "development"
$app->configureMode('development', function() use ($app) {
    $app->config(array(
        'log.enable' => false,
        'debug' => true
    ));
});

/**
 * [Routes Deep V 1.0]
 */

//·······GET route    

$app->get('/kill', 'mws', function() {
    echo 'This is a Kill Get route';
});

/*
----------------------------------------------------------------------------
    General POST Routes
----------------------------------------------------------------------------
*/

//TEST
$app->post('/test/api', /*'mws',*/ 'testApi');
$app->post('/test/remote', /*'mws',*/ 'testRemote');

//SELECT
$app->get('/get/test', /*'mws',*/ 'getTest');



//POST route

$app->post('/post', function() {
    $app = \Slim\Slim::getInstance();
    $request = $app->request();
    $propiedad = JSON_decode($request->getBody());
    foreach($propiedad as $key => $value) {
        //echo JSON_encode($value->entorno1);
        echo JSON_encode($value->tipo);
        echo JSON_encode($value->core);
    }
});


/**
 * Step 4: Run the Slim application
 *
 * This method should be called last. This executes the Slim application
 * and returns the HTTP response to the HTTP client.
 */

$app->run();

function requestBody() {
    $app = \Slim\Slim::getInstance();
    $request = $app->request();
    return json_decode($request->getBody());
}


/*
----------------------------------------------------------------------------
    General POST Methods
----------------------------------------------------------------------------
*/

//TEST

function testApi() {
    $property = requestBody();
    changeArrayIntoJSON('maxtpa', array('process' => 'ok'));
}

function testRemote() {
    $property = requestBody();
    changeArrayIntoJSON('maxtpa', array('process' => 'ok'));
}


/*
----------------------------------------------------------------------------
    Midelwere Methods
----------------------------------------------------------------------------
*/

function mw1() {
    $app = \Slim\Slim::getInstance();
    $db = getConnection();
    if(login_check($db) == true) {
        return true;
    } else {
        $app->halt(401, 'Token Requerido');
    }
}

function mws() {
    $app = \Slim\Slim::getInstance();
    if(user_check() == true) {
        return true;
    } else {
        $app->halt(401, 'No user');
    }
}