<?php 
include_once 'head.php';
?>
<?php 
echo $_SESSION["usersUsername"] . 's ';
echo pathinfo($_SERVER['PHP_SELF'], PATHINFO_FILENAME) . '.php';
?>
<script src="js/table.js"></script>

<main>
<a href="includes/logout.inc.php">log out</a>

<br></br>
<h2>Add task to cue</h2>
    <form action="includes/insert.inc.php" method="POST">
    <input type="text" name="listsTitle" placeholder="Title...">
    <input type="text" name="listsBody" placeholder="Body...">
    <input type="date" name="listsDueDate">
    <button type="submit" name="submit">Add task</button>
    </form>

<br></br>
<div class="list-container">
    <?php 
        $display = new DisplayList();
    ?>
</div>

</main>

<footer>
</footer>
</body>
</html>