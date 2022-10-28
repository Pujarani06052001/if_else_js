let a=20
let b=30
let c=10
if (a<b || a<c ||b>c){
    console.log("max",b)
}
else if (b>c>a){
    console.log("max",a)
}
else if (c>b>a){
    console.log("max",c)
}