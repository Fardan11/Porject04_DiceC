var randomNum1 = Math.floor(Math.random() * 6) + 1; // random 1-6

var randomDiceImage1 = "dice" + randomNum1 + ".png"; //dice1.png -dice6.png

var randomImageSource1 = "images/" + randomDiceImage1;

// console.log(randomDiceImage);

var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomImageSource1);

var randomNum2 = Math.floor(Math.random() * 6) + 1; // random 1-6
var randomDiceImage2 = "dice" + randomNum2 + ".png"; //dice1.png -dice6.png

var randomImageSource2 = "images/" + randomDiceImage2;

var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", randomImageSource2);
