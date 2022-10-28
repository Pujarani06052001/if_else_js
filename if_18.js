
let readlineSync = require("readline-sync");
var side1=readlineSync.questionInt("enter a number");
var side2=readlineSync.questionInt("enter a number")
var side3=readlineSync.questionInt("enter a number");
    if((side1 == side2) && (side1 == side3)){
      console.log(`Equilateral triangle.`)
    }
    else if ((side1 == side2) || (side2 == side3) || (side1 == side3)){
      console.log(`Isosceles triangle.`)
    }
    else{
      console.log(`Scalene triangle.`)
    }
  
  
//   findTriangleType(12,12,12) //"Equilateral triangle."
//   findTriangleType(20,20,31) //"Isosceles triangle."
//   findTriangleType(5,4,3) //"Scalene triangle."