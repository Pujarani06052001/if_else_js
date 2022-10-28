var number=require("readline-sync").questionInt("enter a number")
if(number%5==0 && number%15==0){
   console.log("divisible by both");
}
else{
   console.log("Not divisible by both");
}