<?php 
include_once 'autoloader.inc.php';

class Signup extends Dbh{

    function createUser($usersFullname, $usersUsername, $usersEmail, $usersPassword){
        $sql = 'INSERT INTO users(usersFullname, usersUsername, usersEmail, usersPassword) 
        VALUES(:usersFullname, :usersUsername, :usersEmail, :usersPassword)';
        $stmt = $this->connect()->prepare($sql);
        
        $hasedPwd = password_hash($usersPassword, PASSWORD_DEFAULT);

        $stmt->execute(['usersFullname'=>$usersFullname,
        'usersUsername'=>$usersUsername,
        'usersEmail'=>$usersEmail,
        'usersPassword'=>$hasedPwd]);

        header("location: ../index.php");
        exit();
    }
}