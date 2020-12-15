<?php 
include_once 'autoloader.inc.php';
session_start();

if(isset($_POST["submit"])){
    $listsTitle = $_POST["listsTitle"];
    $listsBody = $_POST["listsBody"];
    $listsCreatorId = $_SESSION["usersId"];
    $listsDueDate = $_POST["listsDueDate"];

    if($listsDueDate == 0000-00-00) $listsDueDate = NULL;

    $insert = new InsertItem();
    $insert->insert($listsTitle, $listsBody, $listsCreatorId, $listsDueDate);
}
else {
    header("location: ../homepage.php");
    exit();
}