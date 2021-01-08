<?php 
include_once 'autoloader.inc.php';

if(isset($_POST['listsId'])){
    $listsId = $_POST['listsId'];
    
    $deleteText = new DeleteList();
    $deleteText->deleteValues($listsId);
}




