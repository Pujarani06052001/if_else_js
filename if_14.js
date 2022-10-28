
let readlineSync = require("readline-sync");
var number=readlineSync.questionInt("enter a number");
if (number > 0) {
    console.log("The number is positive");}
else if (number == 0) {
  console.log("The number is 0");
}
else {
    console.log("The number is negative");
}