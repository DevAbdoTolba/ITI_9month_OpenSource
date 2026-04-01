<?php
$fname = $_POST['fname'] ;
$lname = $_POST['lname'] ;
$gender = $_POST['gender'] ;
$address = $_POST['address'] ;
$skills = $_POST['skills'] ;
$department = $_POST['department'] ;

$title = ($gender == 'Male') ? 'Mr.' : 'Miss';

echo "Thanks ($title) $fname $lname <br><br>";

echo "Please Review Your Information:<br>";
echo "Name: $fname $lname <br>";
echo "Address: $address <br>";
echo "Your Skills: ";
foreach ($skills as $skill) {
    echo "($skill), ";
}
echo "Department: $department <br>";

echo "<hr />"; // 9
$fileStr = "$fname,$lname,$gender,$address," . implode("-", $skills) . ",$department\n";
file_put_contents("submissions.txt", $fileStr, FILE_APPEND);

echo "<hr />"; // 10
$readData = file_get_contents("submissions.txt");
echo nl2br($readData);
?>