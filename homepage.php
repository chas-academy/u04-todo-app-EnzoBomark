<?php 
include_once 'head.php';
?>
<?php 
// echo $_SESSION["usersUsername"] . 's ';
// echo pathinfo($_SERVER['PHP_SELF'], PATHINFO_FILENAME) . '.php';
//<a href="includes/logout.inc.php">log out</a>
?>

<header>
    <div>clock</div>
    <div id="add-task-icon" onclick="displayForm()"></div>
    <img src="img/person-circle-outline.svg" alt="avatar icon">
    <img src="img/settings-outline.svg" alt="add icon">
</header>


<main>
    <div id="form-height">
        <form id="add-task-form">
            <input id="input-title" type="text" name="listsTitle" placeholder="Add title...">
            <input id="input-body" type="text" name="listsBody" placeholder="Add body...">
            
            <div id="body-color"></div>     
            
            <div class="calendar">
                    
                <div class="month">
                        <i class="prev"><img src="img/chevron-back-outline.svg" alt="previous"></i>
                            <div class="date">
                                <h1></h1>
                                <p></p>
                            </div>
                        <i class="next"><img src="img/chevron-forward-outline.svg" alt="next"></i>
                    </div>
                
                    <div class="weekdays">
                        <div>S</div>
                        <div>M</div>
                        <div>T</div>
                        <div>W</div>
                        <div>T</div>
                        <div>F</div>
                        <div>S</div>
                    </div>
                
                    <div class="days"></div>
                
                </div>
            <input id="input-due-date" type="text" name="listsDueDate" placeholder="Due: Not Set" readonly>
            <div id="input-submit-button" onclick="submitData()" >Add task</div>
        </form>
        
    </div>
    
<section class="list-table" id="list-table">
   <?php 
        $display = new DisplayList();
    ?>
</section>

</main>

<footer>
</footer>

<script src="js/ajax.js"></script>
<script src="js/tasks.js"></script>
<script src="js/form.js"></script>

</body>
</html>