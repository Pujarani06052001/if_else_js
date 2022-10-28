let readlineSync = require("readline-sync");
var number=readlineSync.questionInt("enter a number");
if (number%2==0){
    console.log(number,"number is even")
}
else{
    console.log(number,"number is odde")
}