let a = [1,23,54,64,90,900,78,50,4];

let sum = a.reduce((accumulator, currentValue) =>{
    return accumulator+currentValue;
},0);

console.log(sum);