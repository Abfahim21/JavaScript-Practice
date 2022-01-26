// indexOf () , lastIndexOf() , startsWith() , endsWith()
// indexOf () returns the the position of
let sentence = "Stella is the name of Miraz Khan's Dog- Stella";
let s1 = sentence.indexOf('Miraz');
console.log(s1);
// same two words stella but lastIndexOf() finds the index of the last one ! 
// lastIndexOf() returns -1 if not found 
let s2 = sentence.lastIndexOf("Stella");
console.log(s2);
// inclues() returns true if found
// includes() is not supported in Internet Explorer.
let s3 = sentence.includes("Stella");
console.log(s3);

// The startsWith() method returns true if a string begins with a specified value, otherwise false:
// string.startsWith(searchvalue, start)

let s4 = sentence.startsWith("Boom");
console.log(s4);
