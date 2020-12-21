<?php

    class DisplayList extends Dbh{

        public function readList(int $usersId){
            
            $sql = 'SELECT * FROM lists WHERE listsCreatorId = :listsCreatorId';
            $stmt = $this->connect()->prepare($sql);
            $stmt->execute(['listsCreatorId' => $usersId]);
            $lists = $stmt->fetchAll();

            foreach($lists as $object){
                ?> 
                    <div class="list-wrapper">
                        <div class="list-header" >
                            <label class="checkbox"for="checkbox">o</label>
                            <input type="checkbox" class="<?php echo $object->listsId;?> listsCompleted wrapper-content" <?php if($object->listsCompleted != false) echo 'checked';?> id="checkbox">
                            
                            <div class="<?php echo $object->listsId;?> listsTitle wrapper-content" contenteditable='true'><?php echo $object->listsTitle;?></div>

                            <div class="<?php echo $object->listsId;?> collapse-link" onclick="collapse(this)">
                                <div class="expand">+</div>
                                <div class="collapse">-</div>
                            </div>

                        </div>
                        
                        <?php $collapsedValue = $object->listsCollapsed == 1 ? 'true' : 'false'; ?>
                        
                        <div class="<?php echo $object->listsId;?> listsCollapsed list-body" id="<?php echo $object->listsId;?>" data-collapsed="<?php echo $collapsedValue;?>">
                            <div class="<?php echo $object->listsId;?> listsBody wrapper-content" contenteditable='true'><?php echo $object->listsBody; ?></div> 
                            
                            <div class="due-date">Due&nbsp;<p class="<?php echo $object->listsId;?> listsDueDate wrapper-content" contenteditable='true'> <?php echo $object->listsDueDate?></p></div>
                            
                            <p class="date-created"><?php echo $object->listsDate?></p>
                        
                        </div>   
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
