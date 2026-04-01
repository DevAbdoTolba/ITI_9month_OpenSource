<?php
// 1
echo "Welcome to php<br>";

echo "<hr />"; // 2, 3
$x = 5;
$y = ' Welcome ';
$z = True;

echo gettype($x) . "<br>";
echo gettype($y) . "<br>";
echo gettype($z) . "<br>";

echo "<hr />"; // 4
echo "for <br />";
for ($i = 0; $i <= 15; $i++) {
    echo $i . " ";
}
echo "<br>";

echo "while <br />";
$j = 0;
while ($j <= 15) {
    echo $j . " ";
    $j++;
}
echo "<br>";

echo "<hr />"; // 5
define("ORG", "ITI");
echo ORG;

echo "<hr />"; // 6
echo gettype($x)."".gettype($y)."".gettype($z)."<br>";

echo"<hr/>";//7
echo isset($x)."".isset($y)."".isset($z)."<br>";

echo"<hr/>";//8
echo intval(empty($x))."".intval(empty($y))."".intval(empty($z))."<br>";

echo "<hr />"; // 9
$m = 30;
$n = 25;
$result = $m + $n;

if ($result > 50) {
    echo "Accepted<br>";
} else {
    echo "Not accepted<br>";
}

echo "<hr />"; // 10
$tableData = [
        [
        "Tolba",
        "flos",
        "iti",
        ],
        [
        "Egyptiam",
        "little",
        "yes"
        ]
    ];

echo "<table border='1'>";
for ($i = 0; $i < 3; $i++) {
    echo "<tr><td style='color: blue;'>" . $tableData[0][$i] . "</td><td>" . $tableData[1][$i] . "</td></tr>";
}
echo "</table><br>";


echo "<hr />"; // 11

function numberToString($num) {
    return (string)$num;
}

echo numberToString(123) . "<br>";
echo numberToString(999) . "<br>";
?>