let readlineSync = require("readline-sync");
var num1=readlineSync.questionInt("enter a number");
var num2=readlineSync.questionInt("enter a number");
    if(num1 > num2){
      console.log("is the largest number")
    }
    else if (num2 > num1){
      console.log("the largest number ",num2)
    }
    else{
      console.log("is equal to ",num1)
    }
  
