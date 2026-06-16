<?php
    $name = $_GET['name'];
    $students = file('students.txt', FILE_IGNORE_NEW_LINES);
    $students = array_filter($students, function($s) use ($name){
        return $s !== $name;
    });
    file_put_contents('students.txt', implode("\n", $students));
