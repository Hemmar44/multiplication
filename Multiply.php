<?php

$first = [2, 3, 4, 5];
$second = [2, 3, 4 , 5, 6, 7, 8, 9];

shuffle($first);
shuffle($second);

$result = $first[0] * $second[0];

echo $first[0] . "||" . $second[0] . "||" . $result;














?>