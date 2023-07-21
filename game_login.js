function addUser() {
  var player1Name = document.getElementById("player1_name_input").value;
  var player2Name = document.getElementById("player2_name_input").value;

   //Set "player1_name" using localStorage.setItem() function
	//Set "player2_name" using localStorage.setItem() function
   
  localStorage.setItem("player1_name", player1Name);
  localStorage.setItem("player2_name", player2Name);
  
  window.location = "game_page.html";
}


   

