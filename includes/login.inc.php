<?php 
include_once 'autoloader.inc.php';

if(isset($_POST["submit"])){
    $username = $_POST["username"];
    $password = $_POST["password"];

    $errorHandler = new LoginErrorHandler();

    if($errorHandler->emptyInputLogin($username, $password) !== false){
        header("location: ../login.php?error=emptyinput");
        exit();
    }

    $login = new Login();
    $login->loginUser($username, $password);
}
else {
    header("location: ../login.php");
    exit();
}