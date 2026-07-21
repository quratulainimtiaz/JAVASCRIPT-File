let numbers = [1,2,3,4];

let sum = numbers.reduce(function(accumulator, currentValue){
    return accumulator + currentValue;
},0);

console.log(sum);