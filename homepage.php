<?php 
include_once 'head.php';
?>

<header>
    <!-- Clock -->
    <div id="clock">
        <div id="date"></div>
        <div id="month"></div>
        <div id="weekday"></div>
    </div>

    <!-- Add icon -->
    <div id="add-task-icon" onclick="displayForm()"></div>
    <!-- Logout icon -->
    <a id="logout-icon" href="includes/logout.inc.php" onclick="return confirm
    ('Are you sure to log out?')"><img src="img/person-circle-outline.svg" alt="avatar icon"></a>
    <!-- Settings icon -->
    <img id="settings-icon" src="img/settings-outline.svg" alt="settings icon">
</header>

<main>
    <!-- Input Form -->
    <div id="form-height">
        <form id="add-task-form">
            <!-- Title -->
            <input id="input-title" type="text" name="listsTitle" placeholder="Add title...">
            <!-- Body -->
            <div id="input-body-wrapper"><div id="input-body" type="textarea" contenteditable="true"></div></div>
            <!-- Color -->
            <div id="body-color"></div> 
            <!-- Calander -->
            <div class="calendar">
                <div class="month">
                        <i class="prev"><img src="img/chevron-back-outline.svg" alt="previous"></i>
                            <div class="date">
                                <h2></h2>
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
            <!-- Due date -->
            <input id="input-due-date" type="text" name="listsDueDate" placeholder="Due: Not Set" readonly>
            <!-- Submit button -->
            <div id="input-submit-button" onclick="submitData()" >Add task</div>
        </form>
    </div>

<section id="select-delete-wrapper">
    <button id="select-all">Select all</button>
    <button id="delete-selected">Delete</button>
</section>
    
<!-- Dispaly all tasks -->
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