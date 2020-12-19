<?php

    class DisplayList extends Dbh{

        public function readList(int $usersId){
            
            $sql = 'SELECT * FROM lists WHERE listsCreatorId = :listsCreatorId';
            $stmt = $this->connect()->prepare($sql);
            $stmt->execute(['listsCreatorId' => $usersId]);
            $lists = $stmt->fetchAll();

            foreach($lists as $object){
                ?> 
                     <tr>
                        <td class="<?php echo $object->listsId;?> listsTitle" contenteditable='true'> <?php echo $object->listsTitle;?> </td>
                        <td class="<?php echo $object->listsId;?> listsBody" contenteditable='true'><?php echo $object->listsBody; ?></td> 
                    </tr>
                <?php 
            }
        }
    }

    if(isset($_SESSION["usersId"])){                
        $read = new DisplayList();
        $read->readList($_SESSION["usersId"]);
    
    } else{
        echo "no id";
    }
