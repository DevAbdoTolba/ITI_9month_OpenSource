<?php
    // sleep(10);
    // echo "Data from server at " . date("Y-m-d H:i:s");

    $lasttime = $_GET["time"];

    // if()
    while(true){
        clearstatcache();
        $currenttime = filemtime("content.txt");
        if($currenttime > $lasttime){
            echo json_encode([
                "time" => $currenttime,
                "data" => file_get_contents("content.txt")
            ]);
            break;
        }
        sleep(1);
    }
