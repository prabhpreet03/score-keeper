var playerOneScore = document.getElementById("player-one-score");
var playerTwoScore = document.getElementById("player-two-score");
var p1score = 0;
var p2score = 0;

var limitInputDisplay = document.querySelector(".playing-to-number");
var limitInputEntry = document.querySelector("input");
var winningScore = 5;
// winningScore = limitInputEntry.value; 

limitInputEntry.addEventListener("change", function(){
    // alert("yo i got changed");
    limitInputDisplay.innerHTML = limitInputEntry.value;
    // if(Number(limitInputEntry.value) !== 5){}
    winningScore = Number(limitInputEntry.value);
    reset();
});

var buttonPlayerOne = document.querySelector(".player-one-add-point");
var buttonPlayerTwo = document.querySelector(".player-two-add-point");
var buttonReset = document.querySelector(".reset-btn");

var gameOver = false;

buttonPlayerOne.addEventListener("click", function(){
    if(gameOver == false){
        p1score++;
        if(p1score === winningScore){
            playerOneScore.style.background="green";
            gameOver = true;
        }
        playerOneScore.innerHTML = p1score;
    }
});
buttonPlayerTwo.addEventListener("click", function(){
    if(gameOver == false){
        p2score++;
        if(p2score === winningScore){
            playerTwoScore.style.background="green";
            gameOver = true;
        }
        playerTwoScore.innerHTML = p2score;
    }

});




function reset(){
    playerTwoScore.style.background="rgb(126, 0, 0)";
    playerTwoScore.innerHTML = "0";
    playerOneScore.style.background="rgb(126, 0, 0)";
    playerOneScore.innerHTML = "0";
    gameOver = false;
}
buttonReset.addEventListener("click", reset);



// playingTil.innerHTML = playingTilEntry;

