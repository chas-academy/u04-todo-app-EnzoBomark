<?php 
include_once 'autoloader.inc.php';

if(isset($_POST['value'], $_POST['id'], $_POST['type'])){
    $listsValue = $_POST['value'];
    $listsId = $_POST['id'];
    $listsType = $_POST['type'];
    
     echo 'NEW VALUE ['. $listsValue . '] '; 
     echo 'ID ['.$listsId . '] '; 
     echo 'TYPE ['.$listsType . '] '; 


    $updateText = new UpdateList();
    $updateText->updateValues($listsId, $listsType, $listsValue);
}




