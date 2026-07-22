let numbers = [1, 3, 5, 8];

let ans = numbers.some(function(number){
    return number % 2 === 0;
});

console.log(ans);