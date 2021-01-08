<?php 
include_once 'head.php';
?>

<main>
    <h2>Log In Now</h2>
    <p id="login-to-continue">Please login to continue</p>
    <form action="includes/login.inc.php" method="POST">
    <input type="text" name="username" placeholder="Username/Email">
    <input type="password" name="password" placeholder="Password...">
    <button type="submit" name="submit">Log in</button>

    <p>Dont have an account? <a href="signup.php">Sign up</a></p>
    </form>
    
<?php 
    if(isset($_GET["error"])){
        if($_GET["error"] == "emptyinput"){
            echo "<p>Fill in all fields!</p>";
        } elseif($_GET["error"] == "wronglogin"){
            echo "<p>Incorrect login information!</p>";
        }
    }
?>
</main>

<?php 
include_once 'footer.php';
?>
