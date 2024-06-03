<?php
    session_start();
    $user_id = isset($_SESSION['user_id']) ? $_SESSION['user_id'] : false;
    require "vendor/autoload.php";
    $db = new Photos\DB();
    $data = $db->get_photos();
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
    <link rel="stylesheet" href="style.css">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="media.css">
</head>
<body>
    <?php include "header.php"?>
    <div class="kartinki">
        <?php
            /*foreach ($data as $photo) {
                echo "<img src={$photo["image"]}>";
            }*/

            foreach ($data as $photo) {
                echo (new Photos\Photo($photo["id"], $photo["image"], $photo["text"]))->getHtml();
            }
        ?>
    </div>
    <?php include "add_photo.php"; ?>
    <div id="img_popka">
        <img src="" alt="AAAAAAAAA">
    </div>
    <script src="script.js"></script>
</body>
</html>