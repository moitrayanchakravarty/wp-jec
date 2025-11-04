<!-- b.php -->
<?php
// If b.php is accessed directly without form submission, redirect to a.php
if (!isset($_POST['username'])) {
    header("Location: a.php");
    exit();
}

// If form was submitted, display the name
$name = $_POST['username'];
echo "Hello, " . htmlspecialchars($name) . "!";
?>
