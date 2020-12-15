<?php 
include_once 'head.php';
?>
<?php 
echo $_SESSION["usersUsername"] . 's ';
echo pathinfo($_SERVER['PHP_SELF'], PATHINFO_FILENAME) . '.php';
?>
<main>
<a href="includes/logout.inc.php">log out</a>

<br></br>


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
?>
<br></br>
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
?>

</main>

<footer>
</footer>
</body>
</html>