

let readlineSync = require("readline-sync");
 
var computerMoves = ['rock', 'paper', 'scissors'];
var computerchoice= computerMoves[Math.floor(Math.random() * computerMoves.length)];
 
var playerName= readlineSync.question("What is your name: ")
console.log("hi "+ playerName )
console.log("choose any move in rock paper scissors")
var playerchoice= readlineSync.question("Which move you want to do? ");
 
if (playerchoice == computerchoice){
   console.log("Match Draw");
}
else if(playerchoice =="rock" && computerchoice== "paper"){
   console.log("computer won the match");
}
else if(playerchoice=="rock" && computerchoice== "scissors"){
   console.log(playerName+" Won the match");
}
else if(playerchoice=="scissors" && computerchoice== "rock"){
   console.log("computer won the match");
}
else if(playerchoice=="scissors" && computerchoice== "paper"){
   console.log(playerName+" Won the match");
}
else if(playerchoice=="paper" && computerchoice== "rock"){
   console.log(playerName+" Won the match");
}
else if(playerchoice=="paper" && computerchoice== "scissors"){
   console.log("computer won the match");
}