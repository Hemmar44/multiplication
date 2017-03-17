<?php require "header.php"; ?>

<h1>Maths for Anna Hędrzak </h1>

<label for="quantity">Choose: </label>
<select id="quantity">
	<option value="10" selected>10</option>
	<option value="20">20</option>
	<option value="30">30</option>
	<option value="40">40</option>
</select>

<label for="maths">Choose: </label>
<select id="maths">
	<option value="+" selected>Addition</option>
	<option value="-">Substraction</option>
	<option value="*">Multiplication</option>
	<option value="/">Division</option>
	

</select>
<div class="sad"></div>
<div class="happy"></div>

<div id="stats"></div>
<button id='start'>Start</button>

<div id="container">
	<div id="first" class="equation"></div>
	<div id="mark" class="equation"></div>
	<div id="second" class="equation"></div>
	<div id="equatonSign" class="equation">=</div>
	<div id="result" class="equation"><input type="text" id="answer" maxlength="3"></div>
	<div id="summary"></div>









</div>





<script
  src="https://code.jquery.com/jquery-3.2.0.min.js"
  integrity="sha256-JAW99MJVpJBGcbzEuXk4Az05s/XyDdBomFqNlM3ic+I="
  crossorigin="anonymous"></script>

<script type="text/javascript" src=public/script.js></script>

</body>
</html>

