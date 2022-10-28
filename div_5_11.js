let readlineSync = require("readline-sync");
var number=readlineSync.questionInt("enter a number");
if (number%5==0&&number%11==0){
    console.log(number,"divsible both")
}
else{
    console.log(number,"not divisible both")
}