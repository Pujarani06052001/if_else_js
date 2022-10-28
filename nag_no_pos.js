let readlineSync = require("readline-sync");
var number=readlineSync.questionInt("enter a number");

if (number>0){
    console.log(number,"postive number")
}
else if(number==0){
    console.log(number,"zero")
}
else{
    console.log(number,"nagtive number")
}