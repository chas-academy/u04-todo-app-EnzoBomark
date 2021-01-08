<?php 
include_once 'autoloader.inc.php';

if(isset($_POST["submit"])){
    $usersFullname = $_POST["usersFullname"];
    $usersUsername = $_POST["usersUsername"];
    $usersEmail = $_POST["usersEmail"];
    $usersPassword = $_POST["usersPassword"];
    $usersPasswordRepeat = $_POST["usersPasswordRepeat"];

    $errorHandler = new SignUpErrorHandler();

    if($errorHandler->emptyInputSignup($usersFullname, $usersUsername, $usersEmail, $usersPassword, $usersPasswordRepeat) !== false){
        header("location: ../signup.php?error=emptyinput");
        exit();
    }
    if($errorHandler->invalidUsername($usersUsername) !== false){
        header("location: ../signup.php?error=invalidusername");
        exit();
    }
    if($errorHandler->invalidEmail($usersEmail) !== false){
        header("location: ../signup.php?error=invalidemail");
        exit();
    }
    if($errorHandler->passwordMatch($usersPassword, $usersPasswordRepeat) !== false){
        header("location: ../signup.php?error=passworddontmatch");
        exit();
    }
    if($errorHandler->usernameExists($usersUsername) !== false){
        header("location: ../signup.php?error=usernametaken");
        exit();
    } 
    if($errorHandler->emailExists($usersEmail) !== false){
        header("location: ../signup.php?error=emailtaken");
        exit();
    } 

    $testObj = new Signup();
    $testObj->createUser($usersFullname, $usersUsername, $usersEmail, $usersPassword);
} 
else{
    header("location: ../signup.php");
    exit();
}