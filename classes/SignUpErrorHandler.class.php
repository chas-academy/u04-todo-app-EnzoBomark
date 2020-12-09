<?php 
include_once 'autoloader.inc.php';

class SignUpErrorHandler extends Dbh{

    public function emptyInputSignup($name, $username, $email, $password, $passwordRepeat){
        $result;
        if(empty($name) || empty($username) || empty($email) || empty($password) || empty($passwordRepeat)){
            $result = true;
        } else {
            $result = false;
        }
        return $result;
    }

    public function invalidUsername($username){
        $result;
        if (!preg_match ('/[a-zA-Z0-9]*$/', $username)){
        $result = true;
        } else {
            $result = false;
        }
        return $result;
    }

    public function invalidEmail($email){
        $result;
        if (!filter_var($email, FILTER_VALIDATE_EMAIL)){
        $result = true;
        } else {
            $result = false;
        }
        return $result;
    }

    public function passwordMatch($password, $passwordRepeat){
        $result;
        if ($password !== $passwordRepeat){
        $result = true;
        } else {
            $result = false;
        }
        return $result;
    }

    public function usernameExists($username){

        $sql = 'SELECT * FROM users WHERE usersUsername = ?';
        $stmt = $this->connect()->prepare($sql);

        if(!$this->connect()->prepare($sql)){
            header("location: ../signup.php?error=stmtfailed");
            exit();
        }

        $stmt->execute([$username]);
        $name = $stmt->fetch();

        if($name) return false;
        return false;
    }

    public function emailExists($email){

        $sql = 'SELECT * FROM users WHERE usersEmail = ?';
        $stmt = $this->connect()->prepare($sql);

        if(!$this->connect()->prepare($sql)){
            header("location: ../signup.php?error=stmtfailed");
            exit();
        }

        $stmt->execute([$email]);
        $email = $stmt->fetch();

        if($email) return false;
        return false;
    }
}




