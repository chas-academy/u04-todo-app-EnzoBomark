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
                        <td><button>Done <?php echo $object->listsId;?></button> 
                        <?php echo $object->listsTitle;?>
                        <button>Expand <?php echo $object->listsId;?></button> </td>

                        <td class="td-body" contenteditable='true'><?php echo $object->listsBody; ?></td> 
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
