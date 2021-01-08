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
                            <div class="<?php echo $object->listsId;?> edit-color" data-color="<?php echo $object->listsColor?>" onclick="editColors(this);"></div>
                            <div class="<?php echo $object->listsId;?> delete-task" onclick="deleteTasks(this);">
                                <img src="img/close-outline.svg" alt="delete icon">
                            </div>
                            <input type="checkbox" class="<?php echo $object->listsId;?> listsCompleted wrapper-content" 
                            <?php if($object->listsCompleted != false) echo 'checked';?> id="checkbox<?php echo $object->listsId;?>"
                            onchange="checkedValue(this)">   
                            <label class="checkbox" for="checkbox<?php echo $object->listsId;?>">
                                <?php if($object->listsCompleted != false) {
                                    echo '<img src="img/checkmark-outline.svg" alt="checkbox-checked">';
                                } else {
                                    echo '<img src="img/ellipse-outline.svg" alt="checkbox-empty">';
                                }?>
                            </label>
                                              
                            <div class="<?php echo $object->listsId;?> listsTitle wrapper-content" contenteditable='true'><?php echo $object->listsTitle;?></div>
                            <div class="<?php echo $object->listsId;?> collapse-link" onclick="collapse(this);">
                                <?php 
                                    $collapsedValue = $object->listsCollapsed == 1 ? 
                                    '<img src="img/chevron-up-outline.svg" alt="up">' : 
                                    '<img src="img/chevron-down-outline.svg" alt="down">'; 
                                    echo $collapsedValue;
                                ?>  
                            </div>

                        </div>
                        
                        <?php $collapsedValue = $object->listsCollapsed == 1 ? 'true' : 'false'; ?>
                        
                        <div class="<?php echo $object->listsId;?> listsCollapsed list-body" id="<?php echo $object->listsId;?>" data-collapsed="<?php echo $collapsedValue;?>">
                            <div class="<?php echo $object->listsId;?> listsBody wrapper-content" data-color="<?php echo $object->listsColor?>" contenteditable='true'>
                                <?php echo $object->listsBody; ?>
                            </div> 
                            <div class="due-date">Due&nbsp;<p class="<?php echo $object->listsId;?> listsDueDate wrapper-content"> <?php echo $object->listsDueDate?></p></div>
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
