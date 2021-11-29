//Array Slice Practice
const cars= ['Audi', 'BMW','Mercedez','Bugatti'];
var firstCarName= cars.slice(0,1);
console.log(firstCarName);
var secondCarName =cars.slice(1,2);
console.log(secondCarName);

//Array Length finding
var myName='Abrar Fahim';
var myNameTextLength= myName.length;
console.log(myNameTextLength);

//How to add "" on a sentence
var aSimpleSentence="We are so called \"Vikings\" from the north.";
console.log(aSimpleSentence);

//How to replace a text
var anotherText="Plase visit INDIA";
console.log(anotherText);
var anotherTextReplaced= anotherText.replace("INDIA", "BANGLADESH");
console.log(anotherTextReplaced);

//How to add two strings together! concat() JavaScript
var text1= "Abrar";
var text2="Fahim";
var fullName=text1.concat(" ",text2);
console.log(fullName);

//how to find the index number
var text4="Here comes the rain again";
var findIndexOfText4= text4.indexOf('rain');
console.log(findIndexOfText4);

//NaN
var a=NaN;
console.log(typeof(a));


//NaN checker example
let ab =10;
let bc="Apple"
var xy= ab/bc;
console.log("Type of this equation is: "+ xy);


//Make a number to STRING
let ax=100;
let bx= ax.toString();
var typeOfBx=typeof(bx);
console.log("Type of this number is changed now. and its now: "+ typeOfBx);


//toFixed(2) is better for Money Exchanging
let abc=100.1234.toFixed(2);
console.log(abc);


