<?php 
include_once 'head.php';
?>

<header>
    <div id="clock">
        <div id="date"></div>
        <div id="month"></div>
        <div id="weekday"></div>
    </div>

    <div id="add-task-icon" onclick="displayForm()"></div>
    <a id="logout-icon" href="includes/logout.inc.php" onclick="return confirm
    ('Are you sure to log out?')"><img src="img/person-circle-outline.svg" alt="avatar icon"></a>
    <img id="settings-icon" src="img/settings-outline.svg" alt="settings icon">
</header>


<main>
    <div id="form-height">
        <form id="add-task-form">
            <input id="input-title" type="text" name="listsTitle" placeholder="Add title...">
            <div id="input-body-wrapper"><div id="input-body" type="textarea" contenteditable="true"></div></div>
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