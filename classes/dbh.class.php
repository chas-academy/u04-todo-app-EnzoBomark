<?php 
class Dbh{
private $host = 'localhost';
private $user = 'root';
private $password = '';
private $dbname = 'devtest';

    protected function connect(){
        # Set DSN
        $dsn = 'mysql:host=' . $this->host . ';dbname=' . $this->dbname;

        # Create a PDO instance
        $pdo = new PDO($dsn, $this->user, $this->password);
        $pdo->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE, PDO::FETCH_OBJ);
        return $pdo;
    }
}
