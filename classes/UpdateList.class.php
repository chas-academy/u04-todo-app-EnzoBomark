<?php 

    class UpdateList extends Dbh{
    
            public function update(int $listsId){
            
            $sql = 'SELECT * FROM lists WHERE listsId = :listsId';
            $stmt = $this->connect()->prepare($sql);
            $stmt->execute(['listsId' => $listsId]);
            $readList = $stmt->fetch();


            $listsCompleted = $readList->listsCompleted == 1 ? NULL : 1;

            $sql = 'UPDATE lists SET listsCompleted = :listsCompleted WHERE listsId = :listsId';
            $stmt = $this->connect()->prepare($sql);
            $stmt->execute(['listsCompleted' => $listsCompleted, 'listsId' => $listsId]);
            }
    }
    
    $update = new UpdateList();
    $update->update(2);
