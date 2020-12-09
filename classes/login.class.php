<?php 
include_once 'autoloader.inc.php';

class Login extends Dbh{
    
    public function loginUser($usersUsername, $password){
        
        $sql = 'SELECT * FROM users WHERE usersUsername = :usersUsername || usersEmail = :usersEmail';
        $stmt = $this->connect()->prepare($sql);

        if(!$this->connect()->prepare($sql)){
            header("location: ../signup.php?error=stmtfailed");
            exit();
        }

        $stmt->execute(['usersUsername' => $usersUsername, 'usersEmail' => $usersUsername]);
        $userExists = $stmt->fetch();

        if($userExists == false){
            header("location: ../login.php?error=wronglogin");
            exit();
        }

        $pwdHashed = $userExists->usersPassword;
        $checkPwd = password_verify($password, $pwdHashed);

        if($checkPwd === false){
            header("location: ../login.php?error=wronglogin");
            exit();
        }elseif($checkPwd === true){
            session_start();
            $_SESSION["usersId"] = $userExists->usersId;
            $_SESSION["usersUsername"] = $userExists->usersUsername;

            header("location: ../homepage.php?");
            exit();
        }
    }
}