<?php

require "Maths.php";

$mark = $_POST["mark"];

switch ($mark) {
    case "+":
        $maths->addition(0, 100, 0, 100);      
        break;
    case "-":
        $maths->substraction(0, 100, 0, 100);
        break;
    case "*":
        $maths->multiplication(1, 10, 1, 10);
        break;
    case "/":
        $maths->division(0, 100, 2, 10);
        break;
    case "random":
        echo "still has to be done";
        break;

}



echo $maths->getFirst() . "||" . $maths->getSecond() . "||" . $maths->getResult();




























/*
$first = [2, 3, 4, 5];
$second = [2, 3, 4 , 5, 6, 7, 8, 9];

do {
    shuffle($first);
	shuffle($second);
} while ($first[0] === $second[0]);


$result = $first[0] * $second[0];

echo $first[0] . "||" . $second[0] . "||" . $result;


//substraction
$first = range(2, 100);
$second = range(0, 100);

do{ 
	shuffle($first);
	shuffle($second);
} while ($first[0] < $second[0]);

$result = $first[0] - $second[0];

echo $first[0] . "||" . $second[0] . "||" . $result;

$first = range(2, 100);
$second = range(0, 100);



//addition
$first = range(0, 100);
$second = range(0, 100);

do{ 
	shuffle($first);
	shuffle($second);
} while ($first[0] + $second[0] >=100);

$result = $first[0] + $second[0];

echo $first[0] . "||" . $second[0] . "||" . $result;


//division

$first = range(0, 100);
$second = range(2, 10);

do{ 
	shuffle($first);
	shuffle($second);
} while ( $first[0] % $second[0] !== 0);


$result = $first[0] / $second[0];

echo $first[0] . "||" . $second[0] . "||" . $result;

*/







?>