<?php
session_start();

if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $email = trim($_POST["email"]);
  $password = trim($_POST["password"]);

  $conn = new mysqli("localhost", "root", "", "perfume_users");

  if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
  }

  $stmt = $conn->prepare("SELECT username, password FROM users WHERE email = ?");
  $stmt->bind_param("s", $email);
  $stmt->execute();
  $result = $stmt->get_result();

  if ($row = $result->fetch_assoc()) {
    if (password_verify($password, $row["password"])) {
      session_regenerate_id(true);
      $_SESSION["username"] = $row["username"];
      header("Location: index.php");
      exit();
    } else {
      $error = "Incorrect password.";
    }
  } else {
    $error = "No account found with that email.";
  }

  $stmt->close();
  $conn->close();
}
?>

<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" href="css/styles.css">
  <title>Login</title>
</head>
<body>
  <div class="container">
    <div class="register-box">
      <h2>Login</h2>
      <?php if (!empty($error)) echo "<p style='color:red;'>$error</p>"; ?>
      <form method="POST" action="login.php">
        <label>Email</label>
        <input type="email" name="email" required>

        <label>Password</label>
        <input type="password" name="password" required>

        <button type="submit" class="register-btn">Login</button>
      </form>
      <p class="login-text">Not registered yet? <a href="register.php">Sign up</a></p>
    </div>
  </div>
</body>
</html>
