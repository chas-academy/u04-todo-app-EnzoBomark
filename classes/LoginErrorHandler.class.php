<?php 
include_once 'autoloader.inc.php';

class LoginErrorHandler extends Dbh{

    public function emptyInputLogin($username, $password){
        $result;
        if(empty($username) || empty($password)){
            $result = true;
        } else {
            $result = false;
        }
        return $result;
    }
}



        
