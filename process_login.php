<?php
include_once 'incorporate/db_connect.php';
include_once 'incorporate/functions.php';

sec_session_start(); // Our custom secure way of starting a PHP session.

$mail = (isset($_POST['email'])) ? $_POST['email'] : '';
$password = (isset($_POST['p'])) ? $_POST['p'] : '';

if($mail !== '' && $password !== '') {
    if(new_user($mail, $password) === false) {
        if(login($mail, $password) == true) {
            // Login success 
            header('Location: admin/');
        } else {
            // Login failed 
            header('Location: index.php?error=IncorrectLogin');
        }
    } else {
        header('Location: restore_password.php?email=' . $mail);
    }
} else {
    // The correct POST variables were not sent to this page. 
    //echo 'Invalid Request';
    header('Location: index.php');
}