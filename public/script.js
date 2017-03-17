$(function(){
	var attempts = 0;
	var correct = 0;
	var percent;
	var data = [];
	var saveResults = [];

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
		
		$.ajax({
  			method: "POST",
  			url: "Multiply.php",
  			context: this,
  			data: { },
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
		attempts = 0;
		correct = 0;
		percent;
		data = [];
		saveResults = [];


	});


	$("#answer").on("blur", function(){
		var value =$(this).val();
		var goodAnswer = true;
		if (Number(value) == Number(data[2])) {
			correct++;
			$(this).css({"border" : "1px solid green", "background-color" : "#70F77A"});
			$("#stats").css({"border" : "1px solid green", "background-color" : "#70F77A"});
		}
		else {
			$(this).css({"border" : "1px solid red", "background-color" : "#FF5536"});
			$("#stats").css({"border" : "1px solid red", "background-color" : "#FF5536"});
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
		if (attempts === 10) {
			$("#start").text("End");
		}
		var result = data[0] + " * " + data[1] + " = " + value + "|" + goodAnswer; 
		saveResults.push(result);
		//alert(saveResults);
		//alert(correct);
		//alert(attempts);

		$("#stats").html("<span id='statistics'>" + correct + "/" + attempts + "|" + percent + "%</span>");
	});

});