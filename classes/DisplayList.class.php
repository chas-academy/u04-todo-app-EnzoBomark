<?php

    class DisplayList extends Dbh{

        public function readList(int $usersId){
            
            $sql = 'SELECT * FROM lists WHERE listsCreatorId = :listsCreatorId';
            $stmt = $this->connect()->prepare($sql);
            $stmt->execute(['listsCreatorId' => $usersId]);
            $lists = $stmt->fetchAll();

            foreach($lists as $object){
                echo $object->listsTitle . '<br>';
                echo $object->listsBody . '<br>';
                echo $object->listsDate . '<br>';
                echo $object->listsCompleted . '<br>';
                echo '<br>';
            }
        }
    }

    if(isset($_SESSION["usersId"])){                
        $read = new DisplayList();
        $read->readList($_SESSION["usersId"]);
    
    } else{
        echo "no id";
    }
