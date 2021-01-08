<?php 
include_once 'autoloader.inc.php';

    class DeleteList extends Dbh{

        public function deleteValues(int $listsId){

            $sql = 'DELETE FROM lists WHERE listsId = :listsId';
            $stmt = $this->connect()->prepare($sql);
            $stmt->execute(['listsId' => $listsId]);
        } 
    }
    