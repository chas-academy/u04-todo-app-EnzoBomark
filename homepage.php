<?php 
include_once 'head.php';
?>
<?php 
echo $_SESSION["usersUsername"] . 's ';
echo pathinfo($_SERVER['PHP_SELF'], PATHINFO_FILENAME);
?>
<main>

<a href="includes/logout.inc.php">log out</a>
</main>

<footer>
    <button>Create</button>
    <button>Update</button>
    <button>Delete</button>
</footer>
</body>
</html>