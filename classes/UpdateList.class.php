<?php 
include_once 'autoloader.inc.php';

    class UpdateList extends Dbh{

        public function updateValues(int $listsId, string $listsType, $value){
               
            if ($listsType == 'listsTitle'){
                $sql = 'UPDATE lists SET listsTitle = :listsTitle WHERE listsId = :listsId';
                $stmt = $this->connect()->prepare($sql);
                $stmt->execute(['listsTitle' => $value, 'listsId' => $listsId]);
            } 
            else if ($listsType == 'listsBody'){
                $sql = 'UPDATE lists SET listsBody = :listsBody WHERE listsId = :listsId';
                $stmt = $this->connect()->prepare($sql);
                $stmt->execute(['listsBody' => $value, 'listsId' => $listsId]);
            }
            else if ($listsType == 'listsCompleted'){
                        
                $listsCompleted = $value == 'true' ? true : false;
                        
                $sql = 'UPDATE lists SET listsCompleted = :listsCompleted WHERE listsId = :listsId';
                $stmt = $this->connect()->prepare($sql);
                $stmt->execute(['listsCompleted' => $listsCompleted, 'listsId' => $listsId]);
            }
            else if ($listsType == 'listsCollapsed'){

                $listsCollapsed = $value == 'true' ? true : false;
                        
                $sql = 'UPDATE lists SET listsCollapsed = :listsCollapsed WHERE listsId = :listsId';
                $stmt = $this->connect()->prepare($sql);
                $stmt->execute(['listsCollapsed' => $listsCollapsed, 'listsId' => $listsId]);
            }
            else if ($listsType == 'listsColor'){

                $sql = 'UPDATE lists SET listsColor = :listsColor WHERE listsId = :listsId';
                $stmt = $this->connect()->prepare($sql);
                $stmt->execute(['listsColor' => $value, 'listsId' => $listsId]);
            }
        }
    }
    
