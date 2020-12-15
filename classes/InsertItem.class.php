<?php

    class InsertItem extends Dbh{

        public function insert(string $listsTitle, string $listsBody, int $usersId, $ListsDueDate){
            
            $sql = 'INSERT INTO lists(listsTitle, listsBody, listsCreatorId, ListsDueDate)
            VALUES (:listsTitle, :listsBody, :listsCreatorId, :ListsDueDate)';
            $stmt = $this->connect()->prepare($sql);
            $stmt->execute([
            'listsTitle' => $listsTitle, 
            'listsBody' => $listsBody, 
            'listsCreatorId' => $usersId,
            'ListsDueDate' => $ListsDueDate
            ]);
            
            
            header("location: ../homepage.php?");
            exit();
        }
    }
