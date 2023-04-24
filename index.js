// This is for player 1
var number1 = Math.floor(Math.random() * 6) + 1;
var imgSource = "images/dice" + number1 + ".png";
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", imgSource);

// This is for player 2
var number2 = Math.floor(Math.random() * 6) + 1;
var imgSource = "images/dice" + number2 + ".png";
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", imgSource);


//Which one wins
if(number1 > number2){
    document.querySelector("h1").innerHTML = "Player 1 Win's !!";
}
else if(number2 > number1){
    document.querySelector("h1").innerHTML = "Player 2 Win's !!";
}
else{
    document.querySelector("h1").innerHTML = "Draw !!";
}