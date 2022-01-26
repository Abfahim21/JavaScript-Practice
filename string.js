//JS String - 
//.lenth
let namE = "Abrar Fahim";
let nameLength = namE.length;
console.log("Length of the name is: "+ nameLength);

//use of " "

let line = "We are \"Bangali\" from Asia.";
console.log("How to use this: "+line);

//extracting string parts

//slice()
let fName = namE.slice(0,5);
let lName = namE.slice(6);
console.log("First Name: "+fName);
console.log("Last Name: "+lName);

//replace()
//case sensetive - NORA-nora not same!
let herName = "Tamanna Fatehi";
let afterReplacing = herName.replace("Tamanna","Nora");
console.log("New Name: "+ afterReplacing);

//UPPERCASE and lowercase

let actorName = "tom cruise";
let actorName2 = "ANANTA JALIL";
let actorNameUpperCase = actorName.toUpperCase();
let actorNameLowerCase = actorName2.toLowerCase();
console.log("Upper Case: "+ actorNameUpperCase);
console.log("Lower Case: "+actorNameLowerCase);

//join two strings by concat()

let firstName1 = "Shah Rukh";
let lastName1 = "Khan";
let fullName1 = firstName1.concat(" "+lastName1);
//for space i had to use " " this one on upper line
console.log(fullName1);