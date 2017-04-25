<?php

require "Database.php";

$results = $database->selectAll("results");

//print_r($results);
$equations = [];
?>





<!DOCTYPE html>
<html>
<head>
	<title>Results</title>
</head>
<body>
	<ul>
	<?php 
		foreach ($results as $result) {
			echo "<li>Equations</li>";
			echo "<ul>";
			$equations = explode(",", $result["summary"]);
			for($i = 0; $i < count($equations); $i++) {
				echo "<li>" . $equations[$i] . "</li>";
			}
			echo "</ul>";
			echo "<li>Estimation: " . $result["estimation"] . "</li>";
			echo "<li>On: " . $result["date"] . "</li><hr/>";
			
		}
	?>
	</ul>
</body>
</html>