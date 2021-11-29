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


//changing array element 
let fruits =["Apple", "Banana", "Orange","Strawberry"];
fruits[0]="Kiwi";
console.log(fruits);

//pop array - removing last element
let ami= ["Abrar","Fahim"];
ami.pop("Fahim");
var myNewName=ami;
console.log(ami);

//push
let name1=["Sakib","al"];
name1.push("Hasan");
console.log(name1);


//shift and unshift array of javaScript !
let mobile=["Nokia","Samsung","iPhone","Sony"];
mobile.shift(0,1);
console.log("After shifting the first element: "+mobile);
mobile.unshift("Airtel Phone");
console.log("After adding new element to the array: "+mobile);

//adding element to the last position of array
let bikes=["Yamaha", "Honda", "Kawasaki","Ducati"];
bikes[bikes.length]="MV Augusta";
console.log("NEW : "+bikes);
//usage of splice in javaScript
bikes.splice(3,5,"Bajaj","KTM");
console.log("Another New: "+bikes);


//merging 3 array by concat()
let bus=["Hanif","Saudia","Relax"];
let cars3=["Toyota","BMW","Benz"];
let bike2=["Yamaha","Honda","Ducati"];
let allVehicles=bus.concat(cars3, bike2);
console.log("After adding three arrays= "+allVehicles);
//adding with already concated array ! :D 
let ships=["Titanic","Saint Martin Paribahan","Sea Pearl"];
let AllTogether=allVehicles.concat(ships);
console.log("After adding all= "+AllTogether);

//sorting array (low to high)
let number21=[10,30,1,5,67,50,100];
let sortedNumber21= number21.sort(
    function(a,b){
        return(a-b);
    }
)
console.log(sortedNumber21);
//sorting array ..... high to low
let number34=[100,300,10,34,1,1000,2345,23743];
let sortedNumber34=number34.sort(
    function(a,b){
        return(b-a);
    }
)
console.log(sortedNumber34);