<?php 
include_once 'autoloader.inc.php';

if(isset($_POST['value'], $_POST['id'], $_POST['type'])){
    $listsValue = $_POST['value'];
    $listsId = $_POST['id'];
    $listsType = $_POST['type'];

    $updateText = new UpdateList();
    $updateText->updateValues($listsId, $listsType, $listsValue);
}




