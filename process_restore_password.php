<?php
include_once 'incorporate/db_connect.php';
include_once 'incorporate/functions.php';

sec_session_start(); // Our custom secure way of starting a PHP session.

$mail = (isset($_POST['email'])) ? $_POST['email'] : '';
$password = (isset($_POST['p'])) ? $_POST['p'] : '';

//If there are not complet data
if($mail === '' || $password === '') {
    //If there is not a mail
    if($mail === '') {
        //Redirect to login
        header('Location: index.php');
    //If there is a mail
    } else {
        //Remain in the same url
        header('Location: restore_password.php?email=' . $mail);
    }
//If there are complete data
} else {
    //If the password was sucessfully restored
    if(restore_user_pass($mail, $password)) {
        //Automatically log in with the new password
        if(login($mail, $password) == true) {
            // Login success
            header('Location: admin/');
        } else {
            // Login failed 
            header('Location: index.php?error=IncorrectLogin');
        }
    //If the password was unsucessfully restored
    } else {
        //Redirect to login
        header('Location: index.php');
    }
}