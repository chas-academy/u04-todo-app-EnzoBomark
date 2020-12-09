<?php 
declare(strict_types = 1);
session_start();
include_once 'includes/autoloader.inc.php';
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta htttp-equiv="Cache-control" content="no-cache">
    <title><?php echo ucfirst(pathinfo($_SERVER['PHP_SELF'], PATHINFO_FILENAME));?></title>
    <link rel="stylesheet" href="styling/<?php echo pathinfo($_SERVER['PHP_SELF'], PATHINFO_FILENAME);?>.css">
    <link rel="preconnect" href="https://fonts.gstatic.com"> <link href="https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&display=swap" rel="stylesheet">
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&family=Roboto:wght@300;400;500;700;900&display=swap" rel="stylesheet">
</head>
<body>
    <header>
            <?php 
                // if(isset($_SESSION["usersId"])){
                //     echo $_SESSION["usersUsername"];
                // } else{
                // }
            ?>
    </header>