<?php
session_start();
if (!isset($_SESSION["username"])) {
  header("Location: login.php");
  exit();
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Perfume</title>

  <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap" rel="stylesheet">

  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">

  <link rel="stylesheet" href="css/dashboard.css">
</head>
<body>

<header class="topbar">
  <div class="container row">
    <form class="search" role="search" onsubmit="return false;">
      <input type="search" placeholder="What are you looking for?">
    </form>

    <a class="brand" href="#">
      <img src="images/logo1.png" alt="Logo" onerror="this.style.display='none'">
       <span class="brand-name">lusent</span>
    </a>
    <nav class="actions">
      <div class="dropdown account-dropdown">
  <a href="#"><i class="fa-solid fa-user"></i> Account ▾</a>
  <div class="dropdown-menu">
    <a href="profile.php">My Profile</a>
    <a href="logout.php">Logout</a>
  </div>
</div>

      <a href="#"><i class="fa-solid fa-cart-shopping"></i> Cart</a>
      <a class="pill" href="#">Become a Best Seller</a>
    </nav>
  </div>
</header>

<nav class="nav">
  <div class="container row">
    <div class="dropdown">
      <a href="#">All Categories ▾</a>
      <div class="dropdown-menu">
        <a href="perfume.html">Perfumes</a>
        <a href="deodorants.html">Deodorants</a>
        <a href="gifts.html">Gift Sets</a>
        <a href="luxury.html">Luxury Scents</a>
        <a href="travel.html">Travel Size</a>
      </div>
    </div>
    <a href="men.html">Men</a>
    <a href="women.html">Women</a>
    <a href="brand.html">Brands</a>
    <a href="offers.html">Offers</a>
    <a href="new.html">New</a>
  </div>
</nav>


<section class="carousel" id="carousel">
  <div class="track" id="track">
    <div class="slide"><img src="images/img4.webp" alt=""></div>
    <div class="slide"><img src="images/slide5.webp" alt=""></div>
    <div class="slide"><img src="images/img1.jpg" alt=""></div>
    <div class="slide"><img src="images/third.jpg" alt=""></div>
    <div class="slide"><img src="images/first.webp" alt=""></div>
  </div>
  <button class="arrow left" id="prev">&#10094;</button>
  <button class="arrow right" id="next">&#10095;</button>
  <div class="dots" id="dots"></div>
</section>

<section class="featured-categories">
  <div class="container">
    <h2>Rainy Scents</h2>
  
    <div class="row">
      <div class="card">
        <a href="product.html?id=5">
        <img src="images/bvEt.jpg" alt="Rainy Scent 1">
        <h3>Fresh Mist</h3>
        </a>
        <p>Light and breezy for monsoon moods.</p>
      </div>
      <div class="card">
         <a href="product.html?id=103">
        <img src="images/cliven.webp" alt="Rainy Scent 2">
        <h3>Earth Essence</h3>
        </a>
        <p>Inspired by petrichor and nature.</p>
      </div>
      <div class="card">
         <a href="product.html?id=64">
        <img src="images/Wasv.jpg" alt="Rainy Scent 3">
        <h3>Rain Bloom</h3>
      </a>
        <p>Floral notes with a splash of dew.</p>
      </div>
    </div>
    <h2>Date Night Favorites</h2>
    <div class="row">
      <div class="card">
         <a href="product.html?id=52">
        <img src="images/hotmess.jpg" alt="Date Night 1">
        <h3>Velvet Kiss</h3>
        </a>
        <p>Warm, romantic, and unforgettable.</p>
      </div>
      <div class="card">
         <a href="product.html?id=6">
        <img src="images/BeCeo.jpg" alt="Date Night 2">
        <h3>Midnight Rose</h3>
        </a>
        <p>Deep floral notes for evening elegance.</p>
      </div>
      <div class="card">
         <a href="product.html?id=105">
        <img src="images/diorsa.jpg" alt="Date Night 3">
        <h3>Amber Glow</h3>
        </a>
        <p>Sensual amber with a hint of spice.</p>
      </div>
    </div>
  </div>
</section>

<section class="fragrance-quiz">
  <div class="container">
    <h2>Find Your Perfect Scent</h2>
    <p>Not sure what suits you? Take our quick quiz to discover your signature fragrance.</p>
    <a href="quiz.html" class="btn">Start the Quiz</a>
  </div>
</section>

<script src="js/dashboard.js"></script>

</body>
</html>
