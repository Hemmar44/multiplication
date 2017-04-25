<?php

require "Database.php";

$summary = implode(", ", $_POST["summary"]);
$estimation = $_POST["estimation"];

$database->insert("results", [
	"summary" => $summary,
	"estimation" => $estimation
	]);


