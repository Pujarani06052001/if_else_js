
let readlineSync = require("readline-sync");
var x=readlineSync.question("enter a vowel : ");

if (x === 'a' || x ==='e' ||
x === 'i' || x ==='o' || x === 'u'){
    console.log("Vowel")
}
else{
    console.log("Consonant")
}