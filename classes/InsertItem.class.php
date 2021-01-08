<?php
    class InsertItem extends Dbh{

        public function insert(string $listsTitle, string $listsBody, int $usersId, $listsDueDate, string $listsColor){
            
            if ($listsDueDate == "") $listsDueDate = "not set";

            $sql = 'INSERT INTO lists(listsTitle, listsBody, listsCreatorId, listsDueDate, listsColor)
            VALUES (:listsTitle, :listsBody, :listsCreatorId, :listsDueDate, :listsColor)';
            $stmt = $this->connect()->prepare($sql);
            $stmt->execute([
            'listsTitle' => $listsTitle, 
            'listsBody' => $listsBody, 
            'listsCreatorId' => $usersId,
            'listsDueDate' => $listsDueDate,
            'listsColor' => $listsColor
            ]);
            
            header("location: ../homepage.php?");
            exit();
        }
    }
