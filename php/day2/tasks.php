<?php
$mockData = [
    ["Abdo Tolba", "Egyptian"],
    ["test1", "data1"],
    ["test2", "data2"],
    ["test3", "data3"],
    ["test4", "data4"]
];

$arr1 = array("PHP", "Open Source", "ITI", "Day2", "Arrays");

echo "<hr />"; // 2
for ($i = 0; $i < count($arr1); $i++) {
    echo $arr1[$i] . "<br>";
}
echo "<br>";
foreach ($arr1 as $val) {
    echo $val . "<br>";
}

$info = array(
    "Name" => "Abdo Tolba",
    "age" => "25",
    "Email" => "tolba@test.com",
    "Collage" => "Computer Science"
);

echo "<hr />"; // 4
foreach ($info as $key => $value) {
    echo $key . ": " . $value . "<br>";
}

echo "<hr />"; // 5
asort($info);
print_r($info);
echo "<br>";
ksort($info);
print_r($info);

echo "<hr />"; // 6
print_r(array_keys($info));
?>