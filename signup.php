<?php include_once "head.php"?>

<main>
  <h2>Sign Up Now</h2>
  <p id="fill-details" >Please fill in the details and create an account</p>
    <form action="includes/signup.inc.php" method="POST">
    <input type="text" name="usersFullname" placeholder="Fullname...">
    <input type="text" name="usersUsername" placeholder="Username...">
    <input type="email" name="usersEmail" placeholder="Email...">
    <input type="password" name="usersPassword" placeholder="Password...">
    <input type="password" name="usersPasswordRepeat" placeholder="Password Repeat...">
    
    <button type="submit" name="submit">Sign up</button>

    <p>alredy have an account? <a href="login.php">Log in</a></p>
    </form>
</main>

<?php 
    if(isset($_GET["error"])){
        if($_GET["error"] == "emptyinput"){
            echo "<p>Fill in all fields!</p>";

        } elseif($_GET["error"] == "invalidusername"){
            echo "<p>Choose a proper username!</p>";

        } elseif($_GET["error"] == "invalidemail"){
            echo "<p>Choose a proper email!</p>";

        } elseif($_GET["error"] == "passworddontmatch"){
            echo "<p>Passwords dont match!</p>";

        } elseif($_GET["error"] == "usernametaken"){
            echo "<p>Username alredy taken!</p>";

        }elseif($_GET["error"] == "emailtaken"){
            echo "<p>Email alredy taken!</p>";

        } elseif($_GET["error"] == "stmtfailed"){
            echo "<p>Opps! Something went wrong</p>";
        }
    }
?>

<?php include_once "footer.php"?>
