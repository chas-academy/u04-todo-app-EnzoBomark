<?php

    class DisplayList extends Dbh{

        public function readList(int $usersId){
            
            $sql = 'SELECT * FROM lists WHERE listsCreatorId = :listsCreatorId';
            $stmt = $this->connect()->prepare($sql);
            $stmt->execute(['listsCreatorId' => $usersId]);
            $lists = $stmt->fetchAll();

            foreach($lists as $object){
                ?> 
                    <div class="task-container">
                        <h4 class="task-title"><?php echo $object->listsTitle; ?></h4>
                        <p class="task-body"><?php echo $object->listsBody; ?></p>
                        <p class="task-time-created"><?php echo $object->listsDate; ?></p>
                        <?php echo $object->listsCompleted . '<br>'; ?>
                        <button>Update <?php echo $object->listsId;?></button>
                        <button>Done <?php echo $object->listsId;?></button>
                        <button>Delete <?php echo $object->listsId;?></button>
                    </div>
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
