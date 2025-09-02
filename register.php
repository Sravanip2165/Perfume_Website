<?php
session_start();

if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $username = trim($_POST["username"]);
  $email = trim($_POST["email"]);
  $password = trim($_POST["password"]);
  $repeatPassword = trim($_POST["repeat_password"]);

  if ($password !== $repeatPassword) {
    $error = "Passwords do not match.";
  } else {
    $hashedPassword = password_hash($password, PASSWORD_DEFAULT);

    $conn = new mysqli("localhost", "root", "", "perfume_users");

    if ($conn->connect_error) {
      die("Connection failed: " . $conn->connect_error);
    }

    $stmt = $conn->prepare("INSERT INTO users (username, email, password) VALUES (?, ?, ?)");
    $stmt->bind_param("sss", $username, $email, $hashedPassword);

    if ($stmt->execute()) {
      $_SESSION["username"] = $username;
      header("Location: index.php");
      exit();
    } else {
      $error = "Registration failed. Try again.";
    }

    $stmt->close();
    $conn->close();
  }
}
?>

<!DOCTYPE html>
<html>
<head>
  <title>Register</title>
  <link rel="stylesheet" href="css/styles.css">
</head>
<body>
  <div class="container">
    <div class="register-box">
      <h2>Register</h2>
      <?php if (!empty($error)) echo "<p style='color:red;'>$error</p>"; ?>
      <form method="POST" action="register.php">
        <label>Username</label>
        <input type="text" name="username" required>

        <label>Email</label>
        <input type="email" name="email" required>

        <label>Password</label>
        <input type="password" name="password" required>

        <label>Repeat Password</label>
        <input type="password" name="repeat_password" required>

        <button type="submit" class="register-btn">Register</button>
      </form>
      <p class="login-text">Already have an account? <a href="login.php">Log in</a></p>
    </div>
  </div>
</body>
</html>
