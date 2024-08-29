// var randomnumber1 = Math.random();
// randomnumber1 = randomnumber1 * 6
// randomnumber1 = Math.floor(randomnumber1) + 1;



var randomnumber1 = Math.floor(Math.random() * 6) + 1;

// var randomDiceImage = "dice" + randomnumber1 + ".png";
// var randomImageSource = "images/" + randomDiceImage;

var randomImageSource1 = "images/dice" + randomnumber1 + ".png";

var image1 = document.querySelectorAll("img")[0];
image1.setAttribute('src',randomImageSource1);

var randomnumber2 = Math.floor(Math.random() * 6) + 1;

// var randomDiceImage = "dice" + randomnumber1 + ".png";
// var randomImageSource = "images/" + randomDiceImage;

var randomImageSource2 = "images/dice" + randomnumber2 + ".png";

var image2 = document.querySelectorAll("img")[1];
image2.setAttribute('src',randomImageSource2);


if (randomnumber1 > randomnumber2){
    document.querySelector("h1").innerHTML = "Player 1 Wins🚩"
}
else if (randomnumber2 > randomnumber1){
    document.querySelector("h1").innerHTML = "Player 2 Wins🚩"
}
else{
    document.querySelector("h1").innerHTML = "Draw🤝"
}