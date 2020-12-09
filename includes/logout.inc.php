<?php
include_once 'autoloader.inc.php';

session_start();
$_SESSION["usersId"] = NULL;
header("location: ../index.php");



