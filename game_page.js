
	//Get "player1_name" using localStorage.getItem() function and assign it to player1_name
	//Get "player2_name" using localStorage.getItem() function and assign it to player2_name
    function player1_name() {
		return localStorage.getItem("player1_name");
	}
	
	function player2_name() {
		 localStorage.getItem("player2_name");
	}
	
	var player1_score = 0;
	var player2_score = 0;
	
	document.getElementById("player1_name").innerHTML = player1_name() + " : ";
	document.getElementById("player2_name").innerHTML = player2_name() + " : ";
	
	document.getElementById("player1_score").innerHTML = player1_score;
	document.getElementById("player2_score").innerHTML = player2_score;
	
	document.getElementById("player_question").innerHTML = "Question Turn - " + player1_name();
	document.getElementById("player_answer").innerHTML = "Answer Turn - " + player2_name();
	
	function send() {
		var number1 = document.getElementById("number1").value;
		var number2 = document.getElementById("number2").value;
		var actual_answer = parseInt(number1) * parseInt(number2);
		console.log(actual_answer);
	
		var question_number = "<h4>" + number1 + " X " + number2 + "</h4>";
		var input_box = "<br>Answer : <input type='text' id='input_check_box'>";
		var check_button = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
		var row = question_number + input_box + check_button;
		document.getElementById("output").innerHTML = row;
		document.getElementById("number1").value = "";
		document.getElementById("number2").value = "";
	}
	
	var question_turn = "player1";
	var answer_turn = "player2";
	
	function check() {
		var get_answer = document.getElementById("input_check_box").value;
		var actual_answer = parseInt(number1) * parseInt(number2);
	
		if (get_answer == actual_answer) {
			if (answer_turn == "player1") {
				player1_score = player1_score + 1;
				document.getElementById("player1_score").innerHTML = player1_score;
			} else {
				player2_score = player2_score + 1;
				document.getElementById("player2_score").innerHTML = player2_score;
			}
		}
	
		if (question_turn == "player1") {
			question_turn = "player2";
			document.getElementById("player_question").innerHTML = "Question Turn - " + player2_name();
		} else {
			question_turn = "player1";
			document.getElementById("player_question").innerHTML = "Question Turn - " + player1_name();
		}
	
		if (answer_turn == "player1") {
			answer_turn = "player2";
			document.getElementById("player_answer").innerHTML = "Answer Turn - " + player2_name();
		} else {
			answer_turn = "player1";
			document.getElementById("player_answer").innerHTML = "Answer Turn - " + player1_name();
		}
	
		document.getElementById("output").innerHTML = "";
	}
	
     function send() {

		number1 = document.getElementById("number1").value;
		number1 = document.getElementById("number1").value;
		actual_answer = parseInt(number1) * parseInt(number2);

		question_number = "<h4>" + number1 + " X "+ number2 +"</h4>";
		input_box = "<br>Answer : <input type='text' id='input_check_box'>";
        check_button = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
		row = question_number + input_box + check_button ;

		document.getElementById("output").innerHTML = row;
        document.getElementById("number1").value = "";
		document.getElementById("number2").value = "";
	 }

	 question_turn = "player1";
	 question_turn = "player2";

	 function check()
	 {
		get_answer = document.getElementById("input_check_box").value;
		if(get_answer == actual_answer)
		{
			if(answer_turn == "player1")

			 player1_score =         +1;
		    document.getElementById("player1_score").innerHTML =   ;
		}
		else
		{
			player2_score = player2_name +1;
			document.getElementById("player2_score").innerHTML = player2_score;
		}
	 }

	 if(question_turn == "player1")
	 {
		question_turn = "player2"
		document.getElementById("player_question").innerHTML = "Question Turn - " + player2_name ;
	 }
	 else
	 {
		question_turn = "player1"
		document.getElementById("player_question").innerHTML = "Question Turn - " + player1_name ;
	 }

    

	 if(question_turn == "player1")
	 {
		question_turn = "player2"
		document.getElementById.innerHTML = "Answer Turn - " + player2_name ;
	 }
	 else
	 {
		answer_turn = "player1"
		document.getElementById("answer_question").innerHTML = "Answer Turn - " + player1_name ;
	 }