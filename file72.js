let numbers = [2, 4, 6, 8];

let ans = numbers.every(function(number){
    return number % 2 === 0;
});

console.log(ans);