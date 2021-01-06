<?php 
include_once 'autoloader.inc.php';
session_start();

if(isset($_POST['title'], $_POST['body'], $_POST['dueDate'], $_POST['color'])){
    $listsTitle = $_POST['title'];
    $listsBody = $_POST['body'];
    $listsCreatorId = $_SESSION["usersId"];
    $listsDueDate = $_POST['dueDate'];
    $listsColor = $_POST['color'];
    
    echo 'NEW VALUE ['. $listsTitle . '] '; 
    echo 'ID ['.$listsBody . '] '; 
    echo 'TYPE ['.$listsDueDate . '] '; 
    echo 'COLOR ['.$listsColor . '] '; 


    $insertItem = new InsertItem();
    $insertItem->insert($listsTitle, $listsBody, $listsCreatorId, $listsDueDate, $listsColor);
}

