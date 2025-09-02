<?php
// products.php

// Sample product images (you can replace with your real images/paths)
$products = [
    ["id" => 1, "name" => "Product 1", "image" => "images/BeCeo.jpg"],
    ["id" => 2, "name" => "Product 2", "image" => "images/diorsa.jpg"],
    ["id" => 3, "name" => "Product 3", "image" => "images/prod3.jpg"],
    ["id" => 4, "name" => "Product 4", "image" => "images/prod4.jpg"],
    ["id" => 5, "name" => "Product 5", "image" => "images/prod5.jpg"],
    ["id" => 6, "name" => "Product 6", "image" => "images/prod6.jpg"],
];
?>
<!DOCTYPE html>
<html>
<head>
    <title>Products</title>
    <link rel="stylesheet" href="css/styles.css">
    <style>
        .product-container {
            display: flex;
            flex-wrap: wrap;
            gap: 20px;
        }
        .product {
            width: 30%;
            border: 1px solid #ccc;
            border-radius: 8px;
            padding: 10px;
            text-align: center;
            box-shadow: 2px 2px 6px rgba(0,0,0,0.1);
        }
        .product img {
            width: 100%;
            height: 200px;
            object-fit: cover;
            border-radius: 8px;
        }
    </style>
</head>
<body>
    <h2>Our Products</h2>
    <div class="product-container">
        <?php foreach ($products as $product): ?>
            <div class="product">
                <img src="<?php echo $product['image']; ?>" alt="<?php echo $product['name']; ?>">
                <h3><?php echo $product['name']; ?></h3>
            </div>
        <?php endforeach; ?>
    </div>

    <p><a href="index.php">Back to Home</a></p>
</body>
</html>
