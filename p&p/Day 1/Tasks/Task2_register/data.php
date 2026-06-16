<?php
    $name = $_GET['name'];
    $email = $_GET['email'];
    $password = $_GET['password'];
    if($name == "" || $email == "" || $password == ""){
        echo "NO";
    } else {
        file_put_contents('users.txt', $name . " " . $email . "\n", FILE_APPEND);
        echo "Registered " . $name . "!";
    }
