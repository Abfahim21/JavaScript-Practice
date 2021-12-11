console.log("Hello Math from JavaScript");
//Math.round()---- nearest value +-
let a=5.2;
let a1=Math.round(a);
console.log("Round Value:",a1);

//Math.ceil()--upper value
let b1=5.2;
let b=Math.ceil(b1);
console.log("Ceil Value:",b);

//Math.floor()--down value
let c1=9.7;
let c=Math.floor(c1);
console.log("Floor value: ",c);

//math.trunc()-- retuns only interger
let x1= 10.8;
let x=Math.trunc(x1);
console.log("Trunc Value is:",x);

//Math.sign()--positive or negetive number
let y1=10;
let y2=-10;
var y3=Math.sign(y1);
var y4=Math.sign(y2);
function Checker(p){
    if(p==1){
        return "Its a Positive Number";
    }
    else (p==(-1))
        return "Its a Negetive Number";
}
let y= Checker(y3);
console.log("10,",y);
let y5= Checker(y4);
console.log("-10,",y5);

//absolute value--Math.abs()
let ab=-12;
let ab1=Math.abs(ab);
console.log("Absolute value :",ab1);

//uses of Math.sin()
function sinCalculator(x){
    return (Math.sin(x*Math.PI/180));
}
var sin90degree=sinCalculator(90);
var sin180degree=sinCalculator(180);
var sin0degree=sinCalculator(0);
var sin30degree=sinCalculator(30);
var sin60degree=sinCalculator(60);
console.log("sin 180 degree =",sin180degree);
console.log("sin 60 degree =",sin60degree);
console.log("sin 90 degree =",sin90degree);
console.log("sin 30 degree =",sin30degree);
console.log("sin 0 degree =",sin0degree);

//uses of Math.cos()
function cosCalculator(x){
    return(Math.cos(x*Math.PI/180));
}
console.log("cos 0 degree= ", cosCalculator(0));
console.log("cos 30 degree= ", cosCalculator(30));
console.log("cos 45 degree= ", cosCalculator(45));
console.log("cos 60 degree= ", cosCalculator(60));
console.log("cos 90 degree= ", cosCalculator(90));
console.log("cos 180 degree= ", cosCalculator(180));

//Random Number between two numbers(min and max number included)
function randomNumberGenerator(min, max){
    return(Math.floor(Math.random()*(max-min+1)+min));
}
console.log("Random Number between 10 to 20 is:", randomNumberGenerator(10,20));
console.log("Random Number between 100 to 200 is:", randomNumberGenerator(100,200));
console.log("Random Number between 1000 to 2000 is:", randomNumberGenerator(1000,2000));
console.log("Random Number between 50 to 1000 is:", randomNumberGenerator(50,1000));
console.log("Random Number between 50 to 55 is:", randomNumberGenerator(50,55));

