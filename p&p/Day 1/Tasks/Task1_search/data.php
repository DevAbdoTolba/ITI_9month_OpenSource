<?php
    $q = $_GET['q'];
    $names = ['ahmed', 'aya', 'sara', 'ali', 'mona'];
    foreach($names as $name){
        if(strpos($name, $q) !== false){
            echo $name . "<br>";
        }
    }
