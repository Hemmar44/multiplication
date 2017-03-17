$(function(){
	var quantity = Number($("#quantity").val());
	var attempts = 0;
	var correct = 0;
	var percent;
	var data = [];
	var saveResults = [];
	var mark = $("#maths").val();

	$("#mark").text(mark);

	$("#quantity").on("change", function(){
		quantity = Number($(this).val());
	});

	

	$("#maths").on("change", function(){ 
		mark = $(this).val();
		if(mark != "random") {
			$("#mark").text(mark);
		}
		else {
			$("#mark").text("");
		}
		});
	

	$("body").on("click", "#start",function() {
		var text = $(this).text();
		$(this).attr("disabled", "disabled");
		if(text === "Start" || text === "Next") {
			//alert("start");
		$("#answer")
			.removeAttr("disabled")
			.css({"border" : "1px solid grey", "background-color" : "#fff"})
			.val("")
			.focus();
		$("#quantity").attr("disabled", "disabled");
		$(".sad, .happy").fadeOut();
		
		$.ajax({
  			method: "POST",
  			url: "Multiply.php",
  			context: this,
  			data: { mark: mark },
			success: function( msg ) {
			//alert(msg);
			data = [];
			data = msg.split("||");
			$("#first").text(data[0]);
			$("#second").text(data[1]);
			}
			});
		}
		else {
			$("#first").text("E");
			$("#second").text("N");
			$("#answer")
			.css({"border" : "1px solid grey", "background-color" : "#fff"})
			.val("D");
			$("quantity").removeAttr("disabled");

		var list = "<ul>";
		for (var i = 0; i < saveResults.length; i++) {
			var splitted = saveResults[i].split("|");
			if(splitted[1] == "true") {
			list += "<li class='success'>" + splitted[0] + " | <span>Correct</span></li>";
			}
			else {
			list += "<li class='failure'>" + splitted[0] + " | <span>Wrong!</span></li>";
			}
		}
		list += "</ul>";
		var estimation;
		
		if(percent > 90) {
			estimation = 6;
		}
		else if(percent > 70) {
			estimation = 5;
		}
		else if(percent > 55) {
			estimation = 4;
		}
		else if(percent > 40) {
			estimation = 3;
		}
		else if(percent > 25) {
			estimation = 2;
		}
		else {
			estimation = 1;
		}

		var rating = "<div id='rating'>Your rating is: "+ estimation +"</div>";
		var button = "<button id='restart'>Hide</button>"
		$("#summary").fadeIn().html(list + rating + button);
		//$("#rating").fadeIn();
		//alert(list)
		}
		
	});

	$("#summary").on("click", "#restart", function(){
		$(this).closest("#summary").fadeOut();
		$("#start").removeAttr("disabled");
		$("#start").text("Start");
		$("#stats").css({"background-color" : "white", "border" : "none"}).html("");
		$("#quantity").removeAttr("disabled");
		attempts = 0;
		correct = 0;
		percent;
		data = [];
		saveResults = [];


	});


	$("#answer").on("blur", function(){
		var numberInrange = getRandomInt(50, 1050);
		//alert(numberInrange);
		var value =$(this).val();
		var goodAnswer = true;
		if (Number(value) == Number(data[2])) {
			var pictureInRange = getRandomInt(1,5);
			var image = "<img src='images/happy/"+ pictureInRange + ".jpg'>";
			correct++;
			$(this).css({"border" : "1px solid green", "background-color" : "#70F77A"});
			$("#stats").css({"border" : "1px solid green", "background-color" : "#70F77A"});
			$(".happy").css({"left" : numberInrange}).html(image).fadeIn();
		}
		else {
			var pictureInRange = getRandomInt(1,5);
			var image = "<img src='images/sad/"+ pictureInRange +".jpg'>";
			$(this).css({"border" : "1px solid red", "background-color" : "#FF5536"});
			$("#stats").css({"border" : "1px solid red", "background-color" : "#FF5536"});
			$(".sad").css({"left" : numberInrange}).html(image).fadeIn();
			goodAnswer = false;
		}
		$("#start").text("Next").removeAttr("disabled");
		$(this).attr("disabled","disabled");
		attempts++;
		if(correct === 0 ) {
			percent = 0
		}
		else {
			percent = Math.round((correct/attempts) * 100);
		}
		if (attempts === quantity) {
			$("#start").text("End");
		}
		var result = data[0] + " * " + data[1] + " = " + value + "|" + goodAnswer; 
		saveResults.push(result);
		//alert(saveResults);
		//alert(correct);
		//alert(attempts);

		$("#stats").html("<span id='statistics'>" + correct + "/" + attempts + " from: " + quantity + "|" + percent + "%</span>");
	});

	function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
	}

});